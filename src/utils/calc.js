
/*    基本原理:
   1 视频等级计算:根据实际帧率与目标帧率差值绝对值，将帧率分成3个区间，差值越小区间，等级越高
   2 音频等级计算:根据实际码率与目标码率差值绝对值，将帧率分成3个区间，差值越小区间，等级越高（音视频不同等级区间比例不一样）
   3 最终等级计算：
     如果音频码率和视频帧率都有设置，取两者差值作为结果(视频码率小于阈值且音频码率估值较高，视作推流端禁止摄像头,以音频结果为准)
     如果只设置了音频码率，以音频等级为结果
     如果只设置了视频帧率，以视频等级为结果
     若果音频码率和视频帧率都没设置，返回未知结果。
  缺陷：
   1 由于缺少延迟和丢包信息，只能反映端到端网络质量情况，没法反映是上行质量问题还是下行质量问题。
   2 推流端由于性能原因导致编码视频帧率较低或者音频码率较低，可能影响判断结果(与网络无关)。
   3 拉流同时包含音视频更可靠(互相作为double check),只有音频或只有视频的情况下，算法结果可能跟实际有出入(缺少丢包、延迟信息，并且要考虑编码器码率本身波动情况)
  建议：
   保证推流端网络质量和机器性能。
   正确同步推流端设置参数到拉流端(音频码率和视频帧率),确保算法参考的可靠。
  调用方式：参考pages/base/index.vue  utils/common.js
  具体方法：utils/calc.js
  调用接口返回结构：
   {
               quality: 2, // 最新十次之内返回 质量值累加
               qualityArray:[1,0,0,0,1,0,0,0,0,0], //最新十次之内返回质量集合
               streamID: "test001" //对应流ID
   }
   网络判断参考：  返回quality数值小于3 为网络良好  返回quality数值大于等于3 为网络较差 可以根据用户实际网络需要调高或者调低阈值判断  */
export class CalcQualityGrade {
    MIN_VIDEO_BITRATE_KBPS = 20;
    //返回值 质量参考
    QualityGrade = {
        Unknown: -1,
        Good: 0,
        Middle: 1,
        Poor: 2
    };
    streamIDList = {};
    constructor() {}
    /**
     使用前先配置：推流音频码率(kbps)和推流帧率
     **/
    addStreamRefer(streamID, audio_kbps, video_fps) {
        if (!streamID) {
            console.error("streamID must be not empty");
            return false;
        }
        if (!audio_kbps || typeof audio_kbps != "number") {
            console.error("audio_kbps must be number");
            return false;
        }
        if (!video_fps || typeof video_fps != "number") {
            console.error("video_fps must be number");
            return false;
        }
        this.streamIDList[streamID] = {
            streamID: streamID,
            audio_kbps: audio_kbps,
            video_fps: video_fps,
            qualityArray: [],
            cannotCalc: true
        }
        return true;
    }
    calcNetQualityGrade(streamID, audio_kbps, video_kbps, fps) {
        if (!this.streamIDList[streamID]) {
            console.error("streamID not exist");
            return false;
        }
        if (typeof audio_kbps != "number") {
            console.error("audio_kbps must be number");
            return false;
        }
        if (typeof video_kbps != "number") {
            console.error("video_kbps must be number");
            return false;
        }
        if (typeof fps != "number") {
            console.error("fps must be number");
            return false;
        }
        if ((audio_kbps || video_kbps || fps) && this.streamIDList[streamID].cannotCalc) {
            this.streamIDList[streamID].cannotCalc = false
        }
        if (this.streamIDList[streamID].cannotCalc && audio_kbps == 0 && video_kbps == 0 && fps == 0) {
            return false;
        } else {
            let streamItem = this.streamIDList[streamID];
            let quality = this._CalcQualityGrade(streamItem.audio_kbps, streamItem.video_fps, audio_kbps, video_kbps, fps);
            streamItem.qualityArray.push(quality);
            if (streamItem.qualityArray.length > 10) {
                streamItem.qualityArray.shift();
            }
            let qualitySum = this._sumQuality(streamItem.qualityArray)
            return {
                quality: qualitySum,
                qualityArray:streamItem.qualityArray,
                streamID: streamID
            }
        }
    }

    removeStreamRefer(streamID) {
        if (!this.streamIDList[streamID]) {
            console.error("streamID not exist");
            return false;
        } else {
            delete this.streamIDList[streamID];
        }
    }
    _sumQuality(arr) {
        return arr.reduce(function (prev, curr, idx, arr) {
            return prev + curr;
        });
    }
    /**
      网络状态更新时，调用该接口计算网络质量等级
     audio_kbps: 实时音频码率(kbps)
     fps: 实时视频帧率
     **/
    _CalcQualityGrade(target_audio_kbps_, target_video_fps_, audio_kbps, video_kbps, fps) {
        if (!target_audio_kbps_ && !target_video_fps_) {
            return this.QualityGrade.Unknown;
        }
        let aGrade = this.QualityGrade.Unknown;
        let vGrade = this.QualityGrade.Unknown;
        let grade = this.QualityGrade.Unknown;

        //音频等级计算
        if (target_audio_kbps_) {
            let a_diff_kbps = Math.abs(audio_kbps - target_audio_kbps_);
            if (a_diff_kbps <= target_audio_kbps_ * 0.15) {
                aGrade = this.QualityGrade.Good;
            } else if (a_diff_kbps <= target_audio_kbps_ * 0.4) {
                aGrade = this.QualityGrade.Middle;
            } else {
                aGrade = this.QualityGrade.Poor;
            }
        }

        //视频等级计算
        if (target_video_fps_) {

            let v_diff_fps = Math.abs(fps - target_video_fps_);
            if (v_diff_fps <= target_video_fps_ * 1 / 3) {
                vGrade = this.QualityGrade.Good;
            } else if (v_diff_fps <= target_video_fps_ * 7 / 15) {
                vGrade = this.QualityGrade.Middle;
            } else {
                vGrade = this.QualityGrade.Poor;
            }
        }
        //如果音视频都是有配置，默认取两者计算小值作为结果(视频帧率为0且音频码率估值较高，视作推流端禁止摄像头,以音频结果为准)
        if (aGrade != this.QualityGrade.Unknown && vGrade != this.QualityGrade.Unknown) {
            let a_diff_ratio = Math.abs(audio_kbps - target_audio_kbps_) / target_audio_kbps_;
            if (a_diff_ratio <= 0.15 && video_kbps < this.MIN_VIDEO_BITRATE_KBPS) {
                grade = aGrade;
            } else {
                grade = Math.max(aGrade, vGrade);
            }
        } else if (aGrade != this.QualityGrade.Unknown) {
            grade = aGrade;
        } else if (vGrade != this.QualityGrade.Unknown) {
            grade = vGrade;
        }
        return grade;
    }
}
