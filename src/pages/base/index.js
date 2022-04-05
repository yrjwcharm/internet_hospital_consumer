import {authCheck, initSDK, startPush} from '../../utils/init';
import {CalcQualityGrade} from '../../utils/calc';
import {format} from "../../utils/util";
import {callGetRoomStateApi, callGetTokenApi, callLoginRoomApi, callUserStateApi} from "../../services/SyncRequest";

let calcQualityGradeFunc = new CalcQualityGrade();

// let {
//         zegoAppID,
//         server,
//     statusBarHeight,
// } = getApp().globalData;
import {
        ZegoExpressEngine
} from '../../libs/ZegoExpressMiniProgram';
let zg, statusBarHeight=wx.getSystemInfoSync().statusBarHeight,
  zegoAppID = 2402989282,
  server='wss://webliveroom2402989282-api.zego.im/ws';
Page({
        data: {
                userCount:0,
                isIphoneX: false,
                roomID: '', // 房间ID
                username: '',
                token: '', // 服务端校验token
                pushStreamID: 'xcx-streamID-' + new Date().getTime(), // 推流ID
                livePusherUrl: '', // 推流地址
                livePusher: null, // live-pusher 的 Context，内部只有一个对象
                userID: 'xcx-userID-' + new Date().getTime(), // 用户ID,
                livePlayerList: [],
                connectType: -1, // -1为初始状态，1为连接，0断开连接
                canShow: -1,
                is_landscape: false,
                role: 1,
                ID: '',
                number: 0,
                roomUserList: [],
                handupStop: false,
                mirror: true,
                num: 0,
                isManager:0,
                statusBarHeight,
                isSpeaker:true,
                livePlaying: [],
                scrollToView: "",
                messageList: [],
                inputMessage: "",
                pushConfig: {           // 推流配置项
                        mode: 'RTC',
                        aspect: '3:4',        // 画面比例，取值为 3:4, 或者 9:16
                        minBitrate: 200,      // 最小视频编码码率
                        maxBitrate: 500,      // 最大视频编码码率
                        isBeauty: 6,          // 美颜程度，取值范围 [0,9]
                        isWhiteness: 6,       // 美白程度，取值范围 [0,9]
                        muted: false,         // 推流是否静音
                        showLog: false,       // 是否显示 log
                        frontCamera: true,    // 前后置摄像头，false 表示后置
                        enableCamera: true,   // 是否开启摄像头
                        isMirror: false,      // 画面是否镜像
                        audioReverbType: 0
                },
                playConfig: {
                        fullScreen: false,
                },
        },

        bindKeyInput(e) {
                this.setData({
                        roomID: e.detail.value
                });
        },
        toggleFullScreen(event) {
                this.setData({
                        'playConfig.fullScreen': !this.data.playConfig.fullScreen,
                        ID: event.target.id.replace('s-', ''),
                }, () => {
                        console.log('>> fullScreen: ', event);
                        const ID = event.target.id.replace('s-', '');
                        const livePlayer = wx.createLivePlayerContext(ID);
                        if (this.data.playConfig.fullScreen) {
                                livePlayer.requestFullScreen({direction: 90});
                        } else {
                                livePlayer.exitFullScreen();
                        }
                });
        },
// 推流画面配置
        switchCamera() {
                this.data.pushConfig.frontCamera = !this.data.pushConfig.frontCamera;
                this.setData({
                        pushConfig: this.data.pushConfig,
                });
                this.data.livePusher && this.data.livePusher.switchCamera();
        },
        toggleCamera() {
                this.setData({
                        "pushConfig.enableCamera": !this.data.pushConfig.enableCamera
                })
        },
        // 开关麦克风
        enableMute() {
                this.setData({
                        "pushConfig.muted": !this.data.pushConfig.muted
                })
        },
        async onLoad(options) {
                console.log(222,options);
                options.roomId ='123';
                options.userName='yanruifeng';
                options. userId ='321';
                options.roleCode = 1;
                const isIphoneX = wx.getStorageSync('isIphoneX');
                this.setData({isIphoneX})
                // 监听网络
                this.onNetworkStatus()
                // this.openRoom();

                zg = new ZegoExpressEngine(zegoAppID, server)
                if (options.roomId) {
                        const {roomId, userName, userId,roleCode, isManager, roomType} = options;
                        this.setData({
                                roomID:roomId,
                                isManager,
                                userID: userId+'_'+roleCode,
                                username: userName,
                        }, async () => {
                                const  res = await  callGetRoomStateApi({roomId});
                                if(res.code==200){
                                    if(res.data==1){
                                            const $res = await callUserStateApi({roomId,userId});
                                             if($res.code==200){
                                                     this.openRoom();
                                             }else {
                                                 wx.showModal({
                                                         content:$res.msg,
                                                         showCancel:false,
                                                         mask:true,
                                                         success(res) {
                                                         }
                                                 })
                                             }
                                    }else {
                                            wx.showModal({
                                                    content:'房间已关闭',
                                                    showCancel:false,
                                                    mask:true,
                                                    success(res) {
                                                    }
                                            })
                                    }
                                }else {
                                        wx.showModal({
                                                content:res.msg,
                                                showCancel:false,
                                                mask:true,
                                                success(res) {

                                                }
                                        })
                                }

                        })
                }

        },

        // // // 屏幕旋转方法
        // onResize:function(res) {
        //         console.log('5555',res)
        //         if(res.deviceOrientation === "landscape"){  //portrait代表竖屏
        //                 this.setData({
        //                         "playConfig.orientation": 'horizontal',
        //
        //                 })
        //
        //         }else{
        //                 this.setData({
        //                         "playConfig.orientation": 'vertical',
        //                 })
        //         }
        // },

        async bindCallback() {
                zg.on('playerStateUpdate', (result) => {
                        console.log('playStateUpdate', result);
                });
                zg.on('publisherStateUpdate', (result) => {
                        console.log('publishStateChange', result);
                });
                zg.on('IMRecvBroadcastMessage', (roomID, chatData) => {
                        console.log('333', roomID, chatData);

                        let message = {
                                ID: 'zego' + chatData[0].fromUser.userID + chatData[0].sendTime,
                                name: chatData[0].fromUser.userName,
                                // @ts-ignore
                                time: format(chatData[0].sendTime),
                                content: chatData[0].message,
                        }
                        this.setData({
                                messageList: [...this.data.messageList, message],
                                scrollToView: message.ID,
                                number: this.data.number + chatData.length,
                        });
                });
                zg.on('IMRecvCustomCommand', (roomID, fromUser, command) => {
                        console.log('IMRecvCustomCommand', roomID, fromUser, command);
                        let message = {
                                ID: fromUser.userID,
                                name: fromUser.userName,
                                time: format(new Date().getTime()),
                                content: command + '(自定义发送)'
                        }
                        this.setData({
                                messageList: [...this.data.messageList, message],
                                scrollToView: message.ID,
                        });
                });
                zg.on('roomExtraInfoUpdate', (roomID, roomExtraInfoList) => {
                        console.error('roomExtraInfoUpdate', roomID, roomExtraInfoList);
                })
                zg.on('IMRecvBarrageMessage', (roomID, chatData) => {
                        console.log('IMRecvBroadcastMessage', roomID, chatData);
                        let message = {
                                ID: 'zego' + chatData[0].fromUser.userID + chatData[0].sendTime,
                                name: chatData[0].fromUser.userName,
                                // @ts-ignore
                                time: format(chatData[0].sendTime),
                                content: chatData[0].message + '(弹幕发送)'
                        }
                        this.setData({
                                messageList: [...this.data.messageList, message],
                                scrollToView: message.ID,
                        });
                });
                zg.on('streamExtraInfoUpdate', (roomID, streamList) => {
                        console.log('streamExtraInfoUpdate', roomID, streamList);
                        let _content = '';
                        streamList.forEach(item => {
                                _content += `${item.user.userID} set stream ${item.streamID} extraInfo ${item.extraInfo} \n`;
                        })
                        wx.showModal({
                                title: '流附加消息',
                                content: _content,
                                showCancel: false,
                        })
                });
                zg.on("roomStateUpdate", (roomID, state, errorCode, extendedData) => {
                        console.log("555555", roomID, state, errorCode, extendedData);
                        if (state === "DISCONNECTED") {
                                startPush(this);
                        }

                });
        },
        async openRoom() {
                // if (!this.data.roomID) {
                //         wxp.showModal({
                //                 title: '提示',
                //                 content: '请输入房间号',
                //                 showCancel: false,
                //         });
                //         return;
                // }

                // wxp.showLoading({
                //         title: '请稍等...',
                // })
                if (this.data.connectType !== 1) {
                        try {
                                /** 获取token */
                                let res = await callGetTokenApi({roomId: this.data.roomID, userId: this.data.userID});
                                if (res.code == 200) {
                                        this.setData({
                                                token: res.data
                                        });
                                        /** 开始登录房间 */
                                        let isLogin = await zg.loginRoom(this.data.roomID, res.data, {
                                                userID: this.data.userID,
                                                userName: this.data.username,
                                        }, {
                                                userUpdate: true
                                        });
                                        isLogin ? console.log('login success') : console.error('login fail');
                                        if (isLogin) {
                                                this.setData({
                                                        userCount:1
                                                })

                                                const res = await callLoginRoomApi({
                                                  userId: this.data.userID,
                                                  roomId: this.data.roomID
                                                })
                                                if (res.code == 200) {
                                                  console.log(333, '登录了');
                                                } else {
                                                  console.log(333, 'mingbai了');
                                                }
                                        }
                                        this.setData({
                                                connectType: 1
                                        });
                                }

                                // zg.setCustomSignalUrl([`rtmp://120.77.40.218/zegostg/${this.data.pushStreamID}`]); //wss://webrtctest.zego.im/ws?a=webrtc-demo
                        } catch (error) {
                                console.error('99999: ', error);
                                return;
                        }
                }
                // 创建房间，开始推流
                if (this.data.livePusherUrl === '') {
                         startPush(this);
                }
        },
        async logout() {
                try {
                        if (this.data.livePusherUrl) {
                                zg.stopPublishingStream(this.data.pushStreamID);
                                this.data.livePusher.stop();
                                this.setData({
                                        livePusherUrl: ''
                                });
                        }
                        if (this.data.livePlayerList.length > 0) {
                                this.data.livePlayerList.forEach(async (item) => {
                                        zg.stopPlayingStream(item.streamID);
                                });
                                this.setData({
                                        livePlayerList: []
                                });
                        }
                        /** 登出房间 */
                        if (zg && this.data.connectType === 1) {
                                await zg.logoutRoom();
                        }
                } catch (error) {
                        console.error('error: ', error);
                }

        },
        // live-pusher 绑定推流事件，透传推流事件给 SDK
        onPushStateChange(e) {

                console.log('onPushStateChange', e.detail.code, e.detail.message);
                if (e.detail.code === 5000) {
                        this.setData({
                                handupStop: true
                        })
                        // this.data.livePusher && (this.data.livePusher! as wx.LivePusherContext).stop();
                }
                zg.updatePlayerState(this.data.pushStreamID, e);
        },
        binddatachange(e) {
                console.log(e)
        },
        // live-pusher 绑定网络状态事件，透传网络状态事件给 SDK
        onPushNetStateChange(e) {
                zg.updatePlayerNetStatus(this.data.pushStreamID, e);
        },
        // live-player 绑定网络状态事件，透传网络状态事件给 SDK
        onPlayNetStateChange(e) {
                let netQuaily = calcQualityGradeFunc.calcNetQualityGrade(e.currentTarget.id, e.detail.info.audioBitrate, e.detail.info.videoBitrate, e.detail.info.videoFPS)
                zg.updatePlayerNetStatus(e.currentTarget.id, e);
        },
        //初始化拉流网络质量配置 一条拉流初始化一次即可
        addStreamRefer() {
                this.data.livePlayerList.forEach(item => {
                        calcQualityGradeFunc.addStreamRefer(item.streamID, 80, 15)
                })

        },
        //移除网络质量监听回调
        removeStreamRefer() {
                calcQualityGradeFunc.removeStreamRefer(this.data.livePlayerList[0].streamID);
        },
        //live-player 绑定拉流事件，透传拉流事件给 SDK
        onPlayStateChange(e) {
                zg.updatePlayerState(e.currentTarget.id, e);
        },

        publishStream() {
                startPush(this);
        },
        // 停止推流
        stopPushStream() {
                this.data.livePusher.stop();
                this.setData({
                        livePusherUrl: ''
                });
                zg.stopPublishingStream(this.data.pushStreamID);

        },
        //停止拉流
        stopPullStream() {
                zg.stopPlayingStream(this.data.livePlayerList[0].streamID);
                this.setData({
                        livePlayerList: []
                });
        },
        //  //切换拉流
        // switchPullStream() {
        //         zg.stopPlayingStream(this.data.livePlayerList[this.data.num].streamID);
        //         console.warn(this.data)
        //         this.setData({
        //                 num:this.data.num==0?1:0,
        //                 livePlaying:[]
        //         },()=>{
        //                 this.setData({
        //                         livePlaying:this.data.livePlayerList[this.data.num]
        //                 })
        //                 // let {
        //                 //         streamID,
        //                 //         url
        //                 // } = await zg.startPlayingStream(
        //                 //         streamList[i].streamID, {
        //                 //                 sourceType: "BGP"
        //                 //         }
        //                 // );
        //         })
        // },
        async onReady() {
                console.log('onReady')
                zg = initSDK(this);
                zg && this.bindCallback();
                console.log('sdk version: ', zg.getVersion());

        },
        async sendMsg() {
                let message = {
                        ID: this.data.userID + new Date().getTime(),
                        name: this.data.username,
                        // @ts-ignore
                        time: new Date().format("hh:mm:ss"),
                        content: this.data.inputMessage,
                };
                console.log('>>> currentMessage', this.data.inputMessage);
                this.setData({
                        messageList: [...this.data.messageList, message],
                        scrollToView: message.ID,
                });
                try {
                        const isSent = await zg.sendBroadcastMessage(this.data.roomID, this.data.inputMessage)
                        console.log('>>> sendMsg success, ', isSent);
                        isSent && this.setData({inputMessage: ''})

                } catch (error) {
                        console.log('>>> sendMsg, error: ', error);
                }
        },
        bindMessageInput(e) {
                this.setData({
                        inputMessage: e.detail.value
                })
        },

        async reLogin() {
                try {
                        await zg.logoutRoom();
                        // this.setData({
                        //         userID: 'xcx-userID-' + new Date ().getTime ()
                        // });
                        // this.data.livePusher && (this.data.livePusher! as wx.LivePusherContext).stop();
                                /** 开始登录房间 */
                                let isLogin = await zg.loginRoom(this.data.roomID, this.data.token, {
                                        userID: this.data.userID,
                                        userName: this.data.username,
                                }, {
                                        userUpdate: true
                                });
                                isLogin ? console.log('login success') : console.error('login fail');
                                this.setData({
                                        connectType: 1
                                });

                        console.log('pushStream: ', this.data.pushStreamID, this.data.livePusherUrl, this.data.role);
                        if (this.data.role == 1) {
                                const {
                                        url
                                } = await zg.startPublishingStream(this.data.pushStreamID);
                                console.log('url', this.data.livePusherUrl, url);
                                if (this.data.livePusherUrl !== url) {
                                        this.setData({
                                                livePusherUrl: url,
                                        }, () => {
                                                // this.data.livePusher.stop();
                                                this.data.livePusher.start();
                                        });
                                }
                        }
                } catch (error) {
                        console.error('error: ', error);
                }
        },
        onShow() {

                console.log('onShow: ', this.data.handupStop, this.data.connectType, server);
                authCheck(this);
                if (zg && (this.data.handupStop || this.data.connectType === 1)) {
                        this.reLogin();
                }
                if (zg && this.data.roomID) {
                        this.reLogin();
                }
                // 刷新全局变量
          zegoAppID = 2402989282;
            server='wss://webliveroom2402989282-api.zego.im/ws';

        },
        onHide() {
                this.logout();
        },
        onUnload() {
                this.logout();
                wx.offNetworkStatusChange()
        },

        bindaudiovolumenotify(e) {
                console.log('===========')
                console.error(e)
                console.log(new Date())
        },
        onNetworkStatus() {

                wx.onNetworkStatusChange(res => {
                        if (res.isConnected && this.data.connectType === 1 && zg) {
                                this.reLogin();

                        }
                })
        },
        onBindSpeaker(){
            this.setData({
                    isSpeaker:!this.data.isSpeaker
            })
        },
        handUp(){
                setTimeout(()=>{
                        wx.reLaunch({
                                url:'/pages/index/index'
                        })
                },500)
              this.logout();
        }


});
