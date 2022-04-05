// import { ZegoExpressEngine } from "zego-express-engine-miniprogram";
import {ZegoExpressEngine} from '../libs/ZegoExpressMiniProgram';
import {callGetTokenApi} from "../services/SyncRequest";

// const app = getApp();

let zg;
let zegoAppID = 2402989282,server='wss://webliveroom2402989282-api.zego.im/ws';
export const initSDK = (context) => {
        if (!_checkParam(zegoAppID, server)) return false;
        /** 初始化SDK，userID 为用户自定义ID，全局唯一 */
        zg = new ZegoExpressEngine(zegoAppID, server);
        zg.setDebugVerbose(false);
        authCheck(context);

        // console.log(this);
        zg.on("roomStreamUpdate", (roomID, updateType, streamList) => {
                if (updateType === "ADD") {
                        try {
                                let playerList = context.data.livePlayerList;
                                if(streamList.length==1) {
                                        for (let i = 0; i < streamList.length; i++) {
                                                if (streamList[i].streamID.indexOf('02') != -1) {
                                                        for (let i = 0; i < playerList.length; i++) {
                                                                let item = playerList[i];
                                                                if (item.streamID.indexOf('01') != -1 && item.userID.indexOf('_2') != -1) {
                                                                        playerList[i]['isHide'] = true;
                                                                        break;
                                                                }
                                                        }
                                                }

                                        }

                                        context.setData({
                                                livePlayerList: [...playerList]
                                        }, () => {
                                                playAll(streamList, context);

                                        })
                                }else {
                                        let index = streamList.findIndex(item=>item.streamID.indexOf('02')!=-1);
                                        if(index!=-1){
                                                for(let i  =0;i<streamList.length;i++){
                                                        if(streamList[i].streamID.indexOf('01')!=-1&&streamList[i].user.userID.indexOf('_2')!=-1){
                                                                streamList[i]["isHide"]=true
                                                                break;
                                                        }
                                                }
                                        }
                                        playAll(streamList, context);
                                }

                        } catch (e) {
                                console.log(333, e);
                        }
                } else {
                        console.log(333,updateType,streamList)
                        const platform=  wx.getStorageSync('platform');
                        if(platform=="ios"){
                                // const ID = event.target.id.replace('s-', '');
                                if(context.data.ID) {
                                        const livePlayer = wx.createLivePlayerContext(context.data.ID);
                                        // livePlayer.requestFullScreen({direction: 90});
                                        livePlayer.exitFullScreen();
                                }

                        }
                        try {
                                let playerList = context.data.livePlayerList;
                                for (let i =0;i<streamList.length;i++) {
                                        if(streamList[i].streamID.indexOf('02')!=-1) {
                                                for (let i = 0; i < playerList.length; i++) {
                                                        let item = playerList[i];
                                                        if (item.streamID.indexOf('01') != -1 && item.userID.indexOf('_2') != -1) {
                                                                playerList[i]['isHide'] = false;
                                                                break;
                                                        }
                                                }
                                        }
                                }
                                context.setData({
                                        livePlayerList: [...playerList]
                                }, () => {
                                        stopPlayAll(streamList, context);

                                })
                                // }
                        } catch (e) {
                        }

                }
        });
        // the event is triggered when one join or leave the room
        zg.on("roomUserUpdate", (roomID, updateType, userList) => {
                // context.data.userCount = userList.length;
                console.log('userList',userList.length)
                context.setData({
                        userCount:userList.length+1
                })
                if (updateType === "DELETE") {

                        // userList.forEach((user) => {
                        //         const i = playerList.findIndex((item) => item.userID === user.userID);
                        //         playerList.splice(i, 1);
                        // });
                } else if (updateType === "ADD") {
                        // userList.forEach((user) => {
                        //         if (user.userID !== context.data.userID) {
                        //                 roomUserList.push(user);
                        //         }
                        // });
                }
                // context.setData({
                //         playerList,
                // });
        });
        zg.on("roomStateUpdate", (roomID, state, errorCode, extendedData) => {
                if (state === "DISCONNECTED") {
                        // context.setData({
                        //         connectType: 0,
                        // });
                        if(errorCode==1002050){
                                wx.showModal({
                                        // title:'您已被踢出房间',
                                        content:'您已被踢出房间',
                                        showCancel:false,
                                        success(res) {
                                                context.logout();
                                        }
                                })
                        }
                 }

        });
        zg.on("publisherStateUpdate", (result) => {
                console.error("publishStateUpdate", result);
        });
        zg.on("playerStateUpdate", (result) => {
                console.log("playStateUpdate", result);
        });
        zg.on("publishQualityUpdate", (streamID, publishStats) => {
                console.log("publishQualityUpdate", streamID, publishStats);
        });
        zg.on("playQualityUpdate", (streamID, playStats) => {
                console.log("playQualityUpdate", streamID, playStats);
        });
        zg.on("roomOnlineUserCountUpdate", (roomID, userCount) => {
                console.error("roomOnlineUserCountUpdate", roomID, userCount)
        });
        zg.on("recvReliableMessage", (roomID, userCount, trans_type) => {
                console.error("recvReliableMessage", roomID, userCount, trans_type);
        });
        zg.on("tokenWillExpire", (roomID) => {
                console.error("tokenWillExpire", roomID);
                callGetTokenApi({
                        userId: context.data.userID,
                        roomId: context.data.roomID
                }).then(res => {
                        if (res.code == 200) {
                                zg.renewToken(res.data);
                        }
                })
        });

        return zg;
};

export const playAll = async (streamList, context) => {
        console.log("streamList", streamList);
        if (streamList.length === 0) {
                console.log("startPlayingStream, streamList is null");
                return;
        }
        // 获取每个 streamId 对应的拉流 url
        for (let i = 0; i < streamList.length; i++) {
                /** 开始拉流，返回拉流地址 */
                try {
                        let {
                                streamID,
                                url
                        } = await zg.startPlayingStream(
                            streamList[i].streamID, {
                                    sourceType: "BGP"
                            }
                        );
                        console.log("streamID", streamID, url);
                        setPlayUrl(streamID, url,streamList[i].user.userID,streamList[i].user.userName,streamList[i]['isHide'], context);
                } catch (error) {
                        console.error("error111", error);
                }
        }
};

export const startPush = async (context, publishOption) => {
        try {
                /** 开始推流，返回推流地址 */
                const {url} = await zg.startPublishingStream(context.data.pushStreamID, publishOption);
                console.info('startPush', url);

                context.setData({
                            livePusherUrl: url,
                            livePusher: wx.createLivePusherContext(),
                    },
                    () => {
                            context.data.livePusher.start();
                            wx.hideLoading();
                            // 开始推流后，停止从CDN拉流，再从服务器拉流
                            // context.data.livePlayerList.forEach(async (livePlayer) => {
                            //         try {
                            //                 console.log("startPush begin", livePlayer);
                            //                 // zg.stopPlayingStream(livePlayer.streamID);
                            //                 let { streamID, url } = await zg.startPlayingStream(
                            //                         livePlayer.streamID,
                            //                         {
                            //                                 sourceType: "BGP",
                            //                         }
                            //                 );
                            //                 console.log("startPush end", streamID, url);
                            //                 setPlayUrl(streamID, url, context);
                            //         } catch (e) {
                            //                 console.error("startPlayingStream fail: ", e);
                            //         }
                            // });
                    }
                );
        } catch (error) {
                console.error("error", error);
        }
};

export const setPlayUrl = (streamID, url,userID,userName,isHide, context) => {
        if (!url) {
                console.log(">>>[liveroom-room] setPlayUrl, url is null");
                return;
        }
        console.log("setPlayUrl", streamID, url);
        for (let i = 0; i < context.data.livePlayerList.length; i++) {
                if (
                    context.data.livePlayerList[i]["streamID"] === streamID &&
                    context.data.livePlayerList[i]["url"] === url
                ) {
                        console.log(
                            ">>>[liveroom-room] setPlayUrl, streamID and url are repeated"
                        );
                        return;
                }
        }

        let streamInfo = {
                streamID: "",
                url: "",
                isHide:false,
                userID:'',
                role:'',
                userName:'',
        };
        let isStreamRepeated = false;

        // 相同 streamID 的源已存在，更新 Url
        for (let i = 0; i < context.data.livePlayerList.length; i++) {
                if (context.data.livePlayerList[i]["streamID"] === streamID) {
                        isStreamRepeated = true;
                        context.data.livePlayerList[i]["url"] = url;
                        break;
                }
        }

        // 相同 streamID 的源不存在，创建新 player
        if (!isStreamRepeated) {
                streamInfo["streamID"] = streamID;
                streamInfo["url"] = url;
                streamInfo["isHide"] =isHide?isHide:false;
                streamInfo["userID"] = userID;
                streamInfo["role"] = userID.split('_')[1]?userID.split('_')[1]:'';
                streamInfo["userName"]=decodeURIComponent(userName);
                streamInfo["playerContext"] = wx.createLivePlayerContext(streamID);
                context.data.livePlayerList.push(streamInfo);
        }
        // app.globalData.livePlayerList = context.data.livePlayerList
        context.setData({
                livePlayerList: context.data.livePlayerList,
        }, () => {
                context.addStreamRefer && context.addStreamRefer();
        });
};

export const stopPlayAll = (streamList, context) => {
        if (streamList.length === 0) {
                console.log("stopPlayAll, streamList is empty");
                return;
        }
        let playStreamList = context.data.livePlayerList;
        for (let i = 0; i < streamList.length; i++) {
                let streamID = streamList[i].streamID;
                zg.stopPlayingStream(streamID);
                // 把远程被删除的流从播放的流列表中删除
                for (let j = 0; j < playStreamList.length; j++) {
                        if (playStreamList[j]["streamID"] === streamID) {
                                playStreamList.splice(j, 1);
                                break;
                        }
                }
        }
        context.setData({
                livePlayerList: playStreamList
        });
};

export const authCheck = async (context) => {
        if (!zg) return;
        const result = await zg.checkSystemRequirements();
        console.log("checkSystemRequirements", result);
        if (result.code === 10001) {
                console.log("result ", result.code);
                wx.showModal({
                        title: "提示",
                        content: "当前微信版本过低，无法使用该功能，请升级到最新微信版本后再试。",
                        showCancel: false,
                });

        } else if (result.code === 10002) {
                // console.log("result ", result.code);
                // let hasCamera = false;
                // let hasRecord = false;
                wx.authorize({
                        scope: "scope.camera",
                        success() {

                        },
                        fail() {
                                wx.showModal({
                                   content:'是否开启摄像头权限',
                                   showCancel:false,
                                   success(res) {
                                           _openSettingCamera();

                                   }
                                })
                        },
                });

                wx.authorize({
                        scope: "scope.record",
                        success() {

                        },
                        fail() {
                                wx.showModal({
                                        content:'是否开启录音权限',
                                        showCancel:false,
                                        success(res) {
                                                _openSettingRecord();

                                        }
                                })
                        },
                });
        }
};
export   const _openSettingCamera = () => {
        wx.openSetting({
                success: function (res) {
                        if (!res.authSetting['scope.camera']) {

                        }

                }
        })
}
export   const _openSettingRecord = () => {
        wx.openSetting({
                success: function (res) {
                        if (!res.authSetting['scope.record']) {

                        }
                }
        })
}


export const _checkParam = (zegoAppID, server) => {
        if (!zegoAppID) {
                wx.showToast({
                        title: `请在app.js中提供正确的zegoAppID`,
                        icon: 'none',
                        duration: 5000
                });
                console.error('未设置正确的zegoAppID');
                return false;
        }
        if (!server) {
                wx.showToast({
                        title: `请在app.js中提供正确的server`,
                        icon: 'none',
                        duration: 5000
                });
                console.error('未设置正确的server');
                return false;
        }
        return true;
};
