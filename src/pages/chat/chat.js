// import { connect } from '../../redux/index.vue'
import {calcTimeHeader, generateBigEmojiImageFile, generateRichTextNode, showToast} from '../../utils/utils'
import * as iconBase64Map from '../../utils/imageBase64';
import emojimap from '../../utils/emojimap'
import {authCheck, initSDK, startPush,} from '../../utils/init';
import moment from "moment";
import Api from '../../config/Api'
import {CalcQualityGrade} from '../../utils/calc';
import {format, symmetryRound} from "../../utils/util";
import {
    callGetChatRecordApi,
    callGetMemberListApi,
    callGetRoomStateApi,
    callGetTokenApi,
    callLoginRoomApi,
    callSaveChatRecordApi,
    callUserStateApi
} from "../../services/SyncRequest";

var emoji = emojimap.emojiList.emoji
let calcQualityGradeFunc = new CalcQualityGrade();
let zg,
  statusBarHeight=wx.getSystemInfoSync().statusBarHeight,
  zegoAppID = 2402989282,
  server='wss://webliveroom2402989282-api.zego.im/ws';
let self = this;
let pageConfig = {
    data: {
        userCount: 0,
        platform: '',
        isIphoneX: wx.getStorageSync('isIphoneX'),
        defaultUserLogo: '',
        videoContext: null, // 视频操纵对象
        isVideoFullScreen: false, // 视频全屏控制标准
        videoSrc: '', // 视频源
        isBackground: false,
        recorderManager: null, // 微信录音管理对象
        recordClicked: false, // 判断手指是否触摸录音按钮
        iconBase64Map: {}, //发送栏base64图标集合
        isLongPress: false, // 录音按钮是否正在长按
        chatWrapperMaxHeight: 0,// 聊天界面最大高度
        chatTo: '', //聊天对象account
        roleCode: '',
        // isBackground:false,
        chatType: 'p2p', //聊天类型 advanced 高级群聊 normal 讨论组群聊 p2p 点对点聊天
        loginAccountLogo: '',  // 登录账户对象头像
        focusFlag: false,//控制输入框失去焦点与否
        emojiFlag: false,//emoji键盘标志位
        moreFlag: false, // 更多功能标志
        tipFlag: false, // tip消息标志
        tipinputMessage: '', // tip消息文本框内容
        sendType: 0, //发送消息类型，0 文本 1 语音
        messageList: [], //
        // [{text, time, sendOrReceive: 'send', displayTimeHeader, nodes: []},{type: 'geo',geo: {lat,lng,title}}]
        inputMessage: '',//文本框输入内容
        from: '',
        roomID: '', // 房间ID
        username: '',
        userId: '',
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
        height: 0,
        statusBarHeight,
        roomUserList: [],
        handupStop: false,
        mirror: true,
        num: 0,
        loadding: false,
        show: false,
        keyboard_height: 0,
        scrollHeight: wx.getSystemInfoSync().windowHeight - 50,
        time: '',
        week: '',
        livePlaying: [],
        toView: "",
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
    getExt(filename) {
        if (typeof filename == 'string') {
            // 如果文件没有后缀名，返回null
            if (!filename.includes('.')) {
                return null
            }
            return filename
                .split('.')
                .pop()
                .toLowerCase()
        } else {
            throw new Error('filename must be a string type')
        }
    },
    onGetMemberList: function () {
        wx.navigateTo({
            url: `/pages/member-list/index?roomId=${this.data.roomID}`
        })
    },
    /**
     * 生命周期函数--监听页面加载
     */
    async getChatRecord(roomId) {
        const result = await callGetChatRecordApi({
            roomId
        })
        if (result.code == 200) {
            let rows = [];
            console.log(333,result.data);
            result.data.map((item, index) => {
                let sendTime = item.sendTime.replace(/-/g, '/');
                let message = {
                    ID: item.userId,
                    id: item.id,
                    role: item.roleCode,
                    name: item.userName,
                    // @ts-ignore
                    displayTimeHeader: (index == 0 || index == result.data.length - 1) ? moment(item.sendTime).format("YYYY-MM-DD HH:mm") : '',
                    time: new Date(sendTime).getTime(),
                    isLeft: item.userName !== this.data.username ? true : false
                }
                if (item.type == '2') {
                    message.type = 'image';
                    message.content = `<img src="${item.info}" width="100px"/>`;
                    message.url = item.info;
                    rows.push(message);
                } else if (item.type == '3') {
                    message.type = 'audio';
                    message.url = item.info;
                    message.duration =Math.ceil(item.fileSize) ;
                    rows.push(message);
                } else if (item.type == '1') {
                    let arr = item.info.split(',');
                    let content = [];
                    let isFlag = true;
                    arr.forEach(el => {
                        if (this.getExt(el) == 'png') {
                            isFlag = false;
                            content.push({
                                name: 'img',
                                attrs: {width: "30px", height: "30px", src: el}
                            })
                        } else {
                            content.push({
                                type: 'text',
                                text: el
                            })
                        }
                    })
                    message.type = 'text';
                    message.selectable = isFlag;
                    message.content = content;
                    rows.push(message);
                }else if(item.type =='4'){
                    message.type='file';
                    message.format =(this.getExt(item.info).toLowerCase() == 'doc' || this.getExt(item.info).toLowerCase() == 'docx') ? 'doc' : (this.getExt(item.info).toLowerCase() == 'xls' || this.getExt(item.info).toLowerCase() == 'xlsx') ? 'xls' : this.getExt(item.info).toLowerCase() == 'zip' ? 'zip' :this.getExt(item.info).toLowerCase()=='pdf'?'pdf':this.getExt(item.info).toLowerCase()=='txt'?'txt':'other';
                    message.content = item.info;
                    message.fileName = item.fileName;
                    message.fileSize = symmetryRound(item.fileSize / 1024, 1);
                    rows.push(message)
                }
            })
            this.setData({
                messageList: rows,
                toView: 'msg-' + (rows.length - 1)
            })


        }
    },
    onLoad: async function (options) {
        this.onNetworkStatus()
        // const res1 = await callGetMemberListApi({
        //     roomId: options.roomId
        // })
        let chatWrapperMaxHeight = wx.getSystemInfoSync().windowHeight - 52 - 35
        // 初始化聊天对象
        let self = this
        let res = wx.getSystemInfoSync();
        self.setData({
            platform: res.platform
        })
        // let loginAccountLogo = this.data.userInfo.avatar || this.data.defaultUserLogo
// 监听网络状态
        if (options.roomId) {
            const {roomId, userName, userId, isManager, roleCode, roomType} = options;
            this.setData({
                roomID: roomId,
                userID: userId + '_' + roleCode,
                roleCode,
                userId,
                username: userName,
            }, async () => {
                const res = await callGetRoomStateApi({roomId});
                if (res.code == 200) {
                    if (res.data == 1) {
                        const $res = await callUserStateApi({roomId, userId});
                        if ($res.code == 200) {
                            this.getChatRecord(roomId);
                            this.openRoom();
                        } else {
                            wx.showToast({
                                title: $res.msg,
                                icon: 'none',
                                duration: 3500,
                                mask: true
                            })
                        }
                    } else {
                        wx.showToast({
                            title: '房间已关闭',
                            icon: 'none',
                            duration: 3500,
                            mask: true,
                            success(res) {

                            }
                        })
                    }
                } else {
                    wx.showToast({
                        title: res.msg,
                        icon: 'none',
                        duration: 3500
                    })
                }
            })
        }
        this.setData({
            loginAccountLogo: this.data.defaultUserLogo,
            iconBase64Map: iconBase64Map,
            chatWrapperMaxHeight,
        })
        // 重新计算所有时间
        self.reCalcAllMessageTime()
        // 滚动到底部
        // 重新计算所有时间
        // 滚动到底部
        // self.scrollToBottom()
    },

    /**
     * 距离上一条消息是否超过两分钟
     */
    judgeOverTwoMinute(time, messageArr) {
        let displayTimeHeader = '';
        if (messageArr.length != 0) {
            let lastMessage = messageArr[messageArr.length - 1]
            if (lastMessage) {//拥有上一条消息
                let delta = time - lastMessage.time;
                if (delta > 2 * 60 * 1000) {//两分钟以上
                    displayTimeHeader = calcTimeHeader(time)
                }
            } else {//没有上一条消息
                displayTimeHeader = calcTimeHeader(time)
            }
        } else {
            displayTimeHeader = calcTimeHeader(time)
        }
        return displayTimeHeader
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
    isJSON(str) {
        if (typeof str == 'string') {
            try {
                let obj = JSON.parse(str);
                if (typeof obj == 'object' && obj) {
                    return true;
                } else {
                    return false;
                }

            } catch (e) {
                return false;
            }
        }
        console.log('It is not a string!')
    },
    getImgSrc(htmlStr) {
        let imgList = [];
        htmlStr.replace(/<img [^>]*src=['"]([^'"]+)[^>]*>/g, (match, capture) => {
            imgList.push(capture);
        });
        return imgList;
    },
    async bindCallback() {
        zg.on('playerStateUpdate', (result) => {
            console.log('playStateUpdate', result);
        });
        zg.on('publisherStateUpdate', (result) => {
            console.log('publishStateChange', result);
        });
        zg.on('IMRecvBroadcastMessage', (roomID, chatData) => {
            console.log("11111", chatData[0].message);
            let time = new Date().getTime();
            let displayTimeHeader = this.judgeOverTwoMinute(time, this.data.messageList);
            let message = {
                ID: chatData[0].fromUser.userID,
                role: chatData[0].fromUser.userID.split('_')[1] ? chatData[0].fromUser.userID.split('_')[1] : '',
                name: decodeURIComponent(chatData[0].fromUser.userName),
                // @ts-ignore
                displayTimeHeader,
                time,
                isLeft: true
            }
            if (chatData[0].message.search(/<img /i) >= 0) {
                message.type = 'image';
                message.content = chatData[0].message;
                message.url = this.getImgSrc(chatData[0].message)[0];
            } else if (this.isJSON(chatData[0].message)) {
                let obj = JSON.parse(chatData[0].message);
                if (Array.isArray(obj)) {
                    message.type = 'text';
                    message.content = obj;
                }
            } else if (chatData[0].message.indexOf('mp3')!==-1) {
                let arr = chatData[0].message.split('_');
                message.type = 'audio';
                message.url = arr[0];
                // message.duration= arr[1];
                message.duration =Math.ceil(arr[1]) ;

            } else {
                message.type = 'text';
                message.content = generateRichTextNode(chatData[0].message);
            }
            let rows = [...this.data.messageList,message];
            this.setData({
                messageList: rows,
                toView: 'msg-' + (rows.length - 1)
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
            console.log("roomStateUpdate", roomID, state, errorCode, extendedData);
            if (state === "DISCONNECTED") {
                startPush(this);
            }

        });
    },
    async openRoom() {
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
                            userCount:1,
                            connectType: 1
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
                }
                // zg.setCustomSignalUrl([`rtmp://120.77.40.218/zegostg/${this.data.pushStreamID}`]); //wss://webrtctest.zego.im/ws?a=webrtc-demo
            } catch (error) {
                console.error('error: ', error);
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
            if (zg && this.data.connectType === 1) await zg.logoutRoom();
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
            console.error('error2222', error);
        }
    },
    onShow(options) {
        // 刷新全局变量
        if (!this.data.isBackground) {
            this.getChatRecord(this.data.roomID);
        } else {
            this.setData({
                isBackground: false
            })
        }
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
                console.warn('data', this.data);
                console.warn('roomID', this.data.roomID);
                this.reLogin();

            }
        })
    },
    hangUp() {
        wx.reLaunch({
            url: '/pages/index/index'
        })
    },
    /**
     * 文本框输入事件
     */
    inputChange(e) {
        this.setData({
            inputMessage: e.detail.value
        })
    },
    /**
     * 键盘单击发送，发送文本
     */
    inputSend(e) {
        this.sendMsg();
        // this.sendRequest(e.detail.value,"text")
    },
    /**
     * emoji组件回调
     */
    emojiCLick(e) {
        let val = e.detail
        // 单击删除按钮，，删除emoji
        if (val == '[删除]') {
            let lastIndex = this.data.inputMessage.lastIndexOf('[')
            if (lastIndex != -1) {
                this.setData({
                    inputMessage: this.data.inputMessage.slice(0, lastIndex)
                })
            }
            return
        }
        console.log(333, val);
        if (val[0] == '[') { // emoji
            this.setData({
                inputMessage: this.data.inputMessage + val
            })
        } else {//大图
            this.sendBigEmoji(val)
        }
    },
    /**
     * emoji点击发送
     */
    emojiSend(e) {
        let self = this;
        this.setData({
            emojiFlag: false
        }, () => {
            self.sendMsg();
        })
    },
    /**
     * 阻止事件冒泡空函数
     */
    stopEventPropagation() {
    },
    /**
     * 重新计算时间头
     */
    reCalcAllMessageTime() {
        let tempArr = [...this.data.messageList]
        if (tempArr.length == 0) return
        // 计算时差
        tempArr.map((msg, index) => {
            if (index === 0) {
                msg['displayTimeHeader'] = calcTimeHeader(msg.time)
            } else {
                let delta = (msg.time - tempArr[index - 1].time) / (120 * 1000)
                if (delta > 1) { // 距离上一条，超过两分钟重新计算头部
                    msg['displayTimeHeader'] = calcTimeHeader(msg.time)
                }
            }
        })
        this.setData({
            messageList: tempArr
        })
    },
    async sendMsg() {
        if (!this.data.inputMessage.trim()) {
            wx.showToast({
                title: '文本消息不能为空',
                icon: 'none',
                duration: 3500,
                mask: true
            })

            return;
        }
        let time = new Date().getTime();
        let displayTimeHeader = this.judgeOverTwoMinute(time, this.data.messageList)
        let message = {
            ID: this.data.userID,
            name: this.data.username,
            displayTimeHeader,
            type: 'text',
            time,
            content: generateRichTextNode(this.data.inputMessage),
            isLeft: false,
        };
        let content = JSON.stringify(generateRichTextNode(this.data.inputMessage));
        let $content = generateRichTextNode(this.data.inputMessage);
        let dataArr = [], isFlag = true;
        $content.forEach(item => {
            if (item.name == 'img') {
                dataArr.push(item.attrs.src);
                isFlag = false;
            }
            if (item.type == 'text') {
                dataArr.push(item.text);
            }
        })
        message.selectable = isFlag;
        let joinStr = dataArr.join(',');
        try {
            const isSent = await zg.sendBroadcastMessage(this.data.roomID, content)
            console.log('>>> sendMsg success, ', isSent);
            if (isSent) {
                this.setData({
                    messageList: [...this.data.messageList, message],
                    scrollToView: message.ID,
                    inputMessage: '',
                    focusFlag: false
                }, async () => {
                    // console.log(999, wx.getStorageSync('messageList'))
                    const res1 = await callSaveChatRecordApi({
                        "info": joinStr,
                        "roleCode": this.data.roleCode,
                        "roomId": this.data.roomID,
                        "sendTime": moment().format('YYYY-MM-DD HH:mm:ss'),
                        "type": "1",
                        "userId": this.data.userId,
                        "userName": this.data.username
                    })
                });

            }
            // this.setData({inputMessage:''})
        } catch (error) {
            // message.fail = true;
            // this.setData({
            //     messageList: [...this.data.messageList, message],
            //     scrollToView: message.ID,
            //     inputMessage: '',
            //     focusFlag: false
            // });

            console.log('>>> sendMsg, error: ', error, this.data.roomID, this.data.inputMessage);
        }
    },
    /**
     * 发送大的emoji:实际上是type=3的自定义消息
     * {"type":3,"data":{"catalog":"ajmd","chartlet":"ajmd010"}}
     */
    async sendBigEmoji(val) {
        let self = this
        let catalog = ''
        if (val[0] === 'a') {
            catalog = 'ajmd'
        } else if (val[0] === 'x') {
            catalog = 'xxy'
        } else if (val[0] === 'l') {
            catalog = 'lt'
        }
        let content = {
            type: 3,
            data: {
                catalog,
                chartlet: val
            }
        }
        let time = new Date().getTime();
        let displayTimeHeader = this.judgeOverTwoMinute(time, this.data.messageList)
        let message = {
            ID: this.data.userID,
            name: this.data.username,
            // @ts-ignore
            type: 'image',
            displayTimeHeader,
            time,
            content: `<img src="${generateBigEmojiImageFile(content).url}" width="100px"/>`,
            isLeft: false,
        };
        try {
            const isSent = await zg.sendBroadcastMessage(this.data.roomID, `<img src="${generateBigEmojiImageFile(content).url}" width="100px"/>`)
            console.log('>>> sendMsg success, ', isSent);
            if (isSent) {
                // 隐藏发送栏
                self.setData({
                    messageList: [...this.data.messageList, message],
                    scrollToView: message.ID,
                    focusFlag: false,
                    emojiFlag: false,
                    tipFlag: false,
                    moreFlag: false
                }, async () => {
                    const res1 = await callSaveChatRecordApi({
                        "info": generateBigEmojiImageFile(content).url,
                        "roleCode": this.data.roleCode,
                        "roomId": this.data.roomID,
                        "sendTime": moment().format('YYYY-MM-DD HH:mm:ss'),
                        "type": "2",
                        "userId": this.data.userId,
                        "userName": this.data.username
                    })

                })
                // 滚动到底部
                self.scrollToBottom()
            }
            // this.setData({inputMessage:''})
        } catch (error) {
            message.fail = true;
            self.setData({
                messageList: [...this.data.messageList, message],
                scrollToView: message.ID,
                focusFlag: false,
                emojiFlag: false,
                tipFlag: false,
                moreFlag: false
            })
            // 滚动到底部
            self.scrollToBottom()
            console.log('>>> ' + 'sendMsg, error: ', error, this.data.roomID, this.data.inputMessage);
        }
    },
    /**
     * 发送语音消息
     */
    async sendAudioMsg(res) {
        wx.showLoading({
            title: '发送中...',
            mask: true
        })
        let tempFilePath = res.tempFilePath
        let time = new Date().getTime();
        let displayTimeHeader = this.judgeOverTwoMinute(time, this.data.messageList)
        let message = {
            ID: this.data.userID,
            name: this.data.username,
            displayTimeHeader,
            time,
            type: 'audio',
            url: tempFilePath,
            duration: Math.ceil(res.duration / 1000),
            isLeft: false,
        };
        wx.uploadFile({
            url: Api.updateImg, //测试地址,暂不使用
            filePath: tempFilePath,
            name: 'file',
            header: {
                'content-type': 'multipart/form-data'
            },
            formData: {},
            success: async (result) => {
                let $res = JSON.parse(result.data)
                if ($res.code == 200) {
                    //文件上传成功后把图片路径数据提交到服务器，数据提交成功后，再进行下张图片的上传
                    try {
                        const isSent = await zg.sendBroadcastMessage(this.data.roomID, $res.data);
                        console.log('>>> sendMsg success, ', isSent);
                        if (isSent) {
                            this.setData({
                                messageList: [...this.data.messageList, message],
                                scrollToView: message.ID,
                                inputMessage: '',
                                focusFlag: false
                            }, async () => {
                                const res1 = await callSaveChatRecordApi({
                                    "info": $res.data,
                                    "fileSize":Math.ceil(res.duration / 1000),
                                    "roleCode": this.data.roleCode,
                                    "roomId": this.data.roomID,
                                    "sendTime": moment().format('YYYY-MM-DD HH:mm:ss'),
                                    "type": "3",
                                    "userId": this.data.userId,
                                    "userName": this.data.username
                                })
                            });

                        }
                        wx.hideLoading();
                        // this.setData({inputMessage:''})
                    } catch (error) {

                        wx.hideLoading();

                        console.log('>>> sendMsg, error: ', error, this.data.roomID, this.data.inputMessage);
                    }
                }
            },
            fail: function (res) {
                wx.hideLoading();
            }
        })

    },
    /**
     * 滚动页面到底部
     */
    scrollToBottom() {
        wx.pageScrollTo({
            scrollTop: 999999,
            duration: 100
        })
    },
    /**
     * 收起所有输入框
     */
    chatingWrapperClick(e) {
        this.foldInputArea()
    },
    /**
     * 收起键盘
     */
    foldInputArea() {
        this.setData({
            focusFlag: false,
            emojiFlag: false,
            tipFlag: false,
            moreFlag: false
        })
    },
    /**
     * 切换发送文本类型
     */
    switchSendType() {
        this.setData({
            sendType: this.data.sendType == 0 ? 1 : 0,
            focusFlag: false,
            emojiFlag: false
        })
    },
    /**
     * 获取焦点
     */
    inputFocus(e) {
        const windowHeight = wx.getSystemInfoSync().windowHeight - 50;
        this.setData({
            emojiFlag: false,
            focusFlag: true,
            moreFlag: false,
            scrollHeight: (windowHeight - e.detail.height),
            keyboard_height: e.detail.height,
            toView: 'msg-' + (this.data.messageList.length - 1)
        })
    },
    /**
     * 失去焦点
     */
    inputBlur() {
        this.setData({
            focusFlag: false,
            scrollHeight: wx.getSystemInfoSync().windowHeight - 50,
            keyboard_height: 0,
            toView: 'msg-' + (this.data.messageList.length - 1),
        })
    },
    /**
     * 切换出emoji键盘
     */
    toggleEmoji() {
        this.setData({
            sendType: 0,
            focusFlag: this.data.emojiFlag ? true : false,
            emojiFlag: !this.data.emojiFlag,
            moreFlag: false
        })
    },
    /**
     * 切出更多
     */
    toggleMore() {
        this.setData({
            moreFlag: !this.data.moreFlag,
            emojiFlag: false,
            focusFlag: false
        })
    },
    /**
     * 调出tip发送面板
     */
    showTipMessagePanel() {
        this.setData({
            tipFlag: true,
            moreFlag: false
        })
    },
    /**
     * 微信按钮长按，有bug，有时候不触发
     */
    voiceBtnLongTap(e) {
        let self = this
        self.setData({
            isLongPress: true
        })
        wx.getSetting({
            success: (res) => {
                let recordAuth = res.authSetting['scope.record']
                if (recordAuth == false) { //已申请过授权，但是用户拒绝
                    wx.openSetting({
                        success: function (res) {
                            let recordAuth = res.authSetting['scope.record']
                            if (recordAuth == true) {
                                showToast('success', '授权成功')
                            } else {
                                showToast('text', '请授权录音')
                            }
                            self.setData({
                                isLongPress: false
                            })
                        }
                    })
                } else if (recordAuth == true) { // 用户已经同意授权
                    self.startRecord()
                } else { // 第一次进来，未发起授权
                    wx.authorize({
                        scope: 'scope.record',
                        success: () => {//授权成功
                            showToast('success', '授权成功')
                        }
                    })
                }
            },
            fail: function () {
                showToast('error', '鉴权失败，请重试')
            }
        })
    },
    /**
     * 手动模拟按钮长按，
     */
    longPressStart() {
        let self = this
        self.setData({
            recordClicked: true
        })
        setTimeout(() => {
            if (self.data.recordClicked == true) {
                self.executeRecord()
            }
        }, 350)
    },
    /**
     * 语音按钮长按结束
     */
    longPressEnd() {
        this.setData({
            recordClicked: false
        })
        // 第一次授权，
        if (!this.data.recorderManager) {
            this.setData({
                isLongPress: false
            })
            return
        }
        if (this.data.isLongPress === true) {
            this.setData({
                isLongPress: false
            })
            wx.hideToast()
            this.data.recorderManager.stop()
        }
    },
    /**
     * 执行录音逻辑
     */
    executeRecord() {
        let self = this
        self.setData({
            isLongPress: true
        })
        wx.getSetting({
            success: (res) => {
                let recordAuth = res.authSetting['scope.record']
                if (recordAuth == false) { //已申请过授权，但是用户拒绝
                    wx.openSetting({
                        success: function (res) {
                            let recordAuth = res.authSetting['scope.record']
                            if (recordAuth == true) {
                                showToast('success', '授权成功')
                            } else {
                                showToast('text', '请授权录音')
                            }
                            self.setData({
                                isLongPress: false
                            })
                        }
                    })
                } else if (recordAuth == true) { // 用户已经同意授权
                    self.startRecord()
                } else { // 第一次进来，未发起授权
                    wx.authorize({
                        scope: 'scope.record',
                        success: () => {//授权成功
                            showToast('success', '授权成功')
                        }
                    })
                }
            },
            fail: function () {
                showToast('error', '鉴权失败，请重试')
            }
        })
    },
    /**
     * 开始录音
     */
    startRecord() {
        let self = this
        wx.showToast({
            title: '开始录音',
            icon: 'none',
            duration: 120 * 1000,
            mask: true
        })
        const recorderManager = self.data.recorderManager || wx.getRecorderManager()
        const options = {
            duration: 120 * 1000,
            format: 'mp3'
        }
        recorderManager.start(options)
        self.setData({
            recorderManager
        })
        recorderManager.onStop((res) => {
            if (res.duration < 2000) {
                wx.showToast({
                    title: '录音时间太短',
                    icon: 'none',
                    duration: 3500,
                    mask: true
                })
            } else {
                self.sendAudioMsg(res)
            }
        })
    },
    /**
     * 选择相册图片
     */
    chooseImageFromCapture(e) {
        let self = this
        self.setData({
            moreFlag: false,
            isBackground: true,
        })
        wx.chooseImage({
            sourceType: ['album'],
            count: 1,
            success: function (res) {
                let tempFilePaths = res.tempFilePaths
                self.sendImg(tempFilePaths[0]);
            },
        })

    },
    downloadFile: function (e) {
        let self = this;
        let url = e.currentTarget.dataset.url;
        wx.showLoading({
            title: '下载中...',
            mask: true
        })
        const fileExtName = this.getExt(url).toLowerCase();
        const randfile = new Date().getTime() + fileExtName;
        const newPath = `${wx.env.USER_DATA_PATH}/${randfile}`;
        wx.downloadFile({
            url, // 本地服务器上pdf文件的地址
            filePath: newPath,
            success(res) {
                // 只要服务器有响应数据，就会把响应内容写入文件并进入 success 回调，业务需要自行判断是否下载到了想要的内容
                if (res.statusCode === 200) {
                    console.log(res)
                    let data = res.filePath
                    self.setData({
                        isBackground: true
                    })
                    wx.openDocument({
                        filePath: newPath,
                        showMenu: true,
                        fileType: fileExtName,
                        success: function (res) {
                            wx.hideLoading()
                        }
                    })
                }
            },
            fail: function (res) {
                wx.hideLoading()

            }
        })
    },
    chooseFile() {
        let self = this
        self.setData({
            moreFlag: false,
            isBackground: true,
        })
        wx.chooseMessageFile({
            count: 1,
            type: 'file',
            // extension: ['doc', 'docx', 'xls', 'xlsx', 'txt', 'zip','pdf'],
            success: function (res) {
                // tempFilePath可以作为img标签的src属性显示图片
                console.log(333, res);
                let filePath = res.tempFiles[0].path;
                let fileSize = res.tempFiles[0].size;
                let fileName = res.tempFiles[0].name;
                self.sendFile({url: filePath, size: fileSize, name: fileName})
            }
        })
    },
    async sendFile({url, size, name}) {
        wx.showLoading({
            title: '发送中',
            mask: true
        })
        let time = new Date().getTime();
        let displayTimeHeader = this.judgeOverTwoMinute(time, this.data.messageList)
        let message = {
            ID: this.data.userID,
            name: this.data.username,
            displayTimeHeader,
            type:'file',
            format: (this.getExt(url).toLowerCase().toLowerCase() == 'doc' || this.getExt(url).toLowerCase().toLowerCase() == 'docx') ? 'doc' : (this.getExt(url).toLowerCase().toLowerCase() == 'xls' || this.getExt(url).toLowerCase().toLowerCase() == 'xlsx') ? 'xls' : this.getExt(url).toLowerCase().toLowerCase() == 'zip' ? 'zip' :this.getExt(url).toLowerCase().toLowerCase()=='pdf'?'pdf':this.getExt(url).toLowerCase().toLowerCase()=='txt'?'txt':'other',
            time,
            fileSize: symmetryRound(size / 1024, 1),
            fileName: name,
            isLeft: false,
        };
        wx.uploadFile({
            url: Api.updateImg, //测试地址,暂不使用
            filePath: url,
            name: 'file',
            header: {
                'content-type': 'multipart/form-data'
            },
            formData: {},
            success: async (res) => {
                let $res = JSON.parse(res.data)
                if ($res.code == 200) {
                    //文件上传成功后把图片路径数据提交到服务器，数据提交成功后，再进行下张图片的上传
                    message.content = $res.data;
                    // message.content = `<a href="${$res.data}" width="100px">`;
                    let timer = null;
                    try {
                         timer = setInterval(async () => {
                            const isSent = await zg.sendBroadcastMessage(this.data.roomID, $res.data);
                            if (isSent) {
                                this.setData({
                                    messageList: [...this.data.messageList, message],
                                    scrollToView: message.ID,
                                }, async () => {
                                    const res1 = await callSaveChatRecordApi({
                                        "info": $res.data,
                                        "fileName":name,
                                        "fileSize":size,
                                        "roleCode": this.data.roleCode,
                                        "roomId": this.data.roomID,
                                        "sendTime": moment().format('YYYY-MM-DD HH:mm:ss'),
                                        "type": "4",
                                        "userId": this.data.userId,
                                        "userName": this.data.username
                                    })
                                    wx.hideLoading();
                                    timer&&clearInterval(timer);
                                });

                            }
                        }, 1500)
                    } catch (error) {
                       timer&& clearInterval(timer)
                        wx.hideLoading();
                    }
                } else {

                }
            },
            fail: function (res) {
                wx.hideLoading();
            }
        })
    },
    /**
     * 选择拍摄视频或者照片
     */
    chooseImageFromCamera() {
        let self = this
        self.setData({
            moreFlag: false,
            isBackground: true,
        })
        wx.chooseImage({
            sourceType: ['camera'],
            count: 1,
            success: function (res) {
                let tempFilePaths = res.tempFilePaths;
                self.sendImg(tempFilePaths[0]);
            },
        })
    },
    /**
     * 播放音频
     */
    compareVersion(v1, v2) {
        v1 = v1.split('.')
        v2 = v2.split('.')
        const len = Math.max(v1.length, v2.length)

        while (v1.length < len) {
            v1.push('0')
        }
        while (v2.length < len) {
            v2.push('0')
        }

        for (let i = 0; i < len; i++) {
            const num1 = parseInt(v1[i])
            const num2 = parseInt(v2[i])

            if (num1 > num2) {
                return 1
            } else if (num1 < num2) {
                return -1
            }
        }

        return 0
    },
    copyClipBoardText: function (e) {
        console.log('777777', e);
        let text = e.currentTarget.dataset.txt[0].text;
        Taro.setClipboardData({
            data: text,
            success: function (res) {
                wx.showToast({
                    title: '复制成功',
                    icon: 'none',
                    duration: 3500,
                    mask: true
                })
            }

        })
    },
    playAudio(e) {
        wx.showToast({
            title: '播放中',
            icon: 'none',
            duration: 120 * 1000,
            mask: false
        })
        let url = e.currentTarget.dataset.url;
        let res = wx.getSystemInfoSync();
        if (res.platform == 'ios') {
            // 设置不遵循静音开关播放
            const version = wx.getSystemInfoSync().SDKVersion;
            if (this.compareVersion(version, '2.3.0') >= 0) {
                wx.setInnerAudioOption({
                    obeyMuteSwitch: false
                })
            } else {
                wx.showModal({
                    title: '提示',
                    content: '当前微信版本过低，静音模式下可能会导致播放音频失败，请升级到最新微信版本后重试。'
                })
            }
        }
        //下边两种播放方式都他妈挺操蛋的。mp3文件在微信浏览器 、微信开发者工具，pc端都可以播放
        //但是在真机上就播放不了。只要第一种方式偶尔还能播放。但是大概率都播放不了。最后一种方式怎么也播放不了。
        // const audioContext = wx.createInnerAudioContext()
        // audioContext.src = url;
        // audioContext.play()
        // audioContext.onPlay(() => {
        // })
        // audioContext.onEnded(() => {
        //
        // })
        // audioContext.onError((res) => {
        // })
        const backgroundAudioManager = wx.getBackgroundAudioManager();
        backgroundAudioManager.title = '语音';
        backgroundAudioManager.src = url;
        backgroundAudioManager.onEnded(()=>{
            wx.hideToast();
        })
        backgroundAudioManager.onError(()=>{
            wx.hideToast();
        })
    },
    previewImg(e) {
        let self = this;
        self.setData({
            isBackground: true
        })
        let url = e.currentTarget.dataset.url;
        console.log(333, url);
        wx.previewImage({
            current: url, // 当前显示图片的http链接
            urls: [url], // 需要预览的图片http链接列表
            success(res) {

            },

        })
    },
    async sendImg(url) {
        wx.showLoading({
            title: '发送中',
            mask: true
        })
        let time = new Date().getTime();
        let displayTimeHeader = this.judgeOverTwoMinute(time, this.data.messageList)
        let message = {
            ID: this.data.userID,
            name: this.data.username,
            displayTimeHeader,
            type: 'image',
            time,
            isLeft: false,
        };
        wx.uploadFile({
            url: Api.updateImg, //测试地址,暂不使用
            filePath: url,
            name: 'file',
            header: {
                'content-type': 'multipart/form-data'
            },
            formData: {},
            success: async (res) => {
                let $res = JSON.parse(res.data)
                if ($res.code == 200) {
                    //文件上传成功后把图片路径数据提交到服务器，数据提交成功后，再进行下张图片的上传
                    message.content = `<img src="${$res.data}" width="100px" >`;
                    message.url = $res.data;
                    let timer =null;
                    try {
                        timer = setInterval(async () => {
                            const isSent = await zg.sendBroadcastMessage(this.data.roomID, `<img src="${$res.data}" width="100px"/>`);
                            if (isSent) {
                                this.setData({
                                    messageList: [...this.data.messageList, message],
                                    scrollToView: message.ID,
                                }, async () => {
                                    const res1 = await callSaveChatRecordApi({
                                        "info": $res.data,
                                        "roleCode": this.data.roleCode,
                                        "roomId": this.data.roomID,
                                        "sendTime": moment().format('YYYY-MM-DD HH:mm:ss'),
                                        "type": "2",
                                        "userId": this.data.userId,
                                        "userName": this.data.username
                                    })
                                    timer&&clearInterval(timer);
                                    wx.hideLoading();
                                });

                            }
                        }, 1500)
                    } catch (error) {
                        timer&&clearInterval(timer);
                        wx.hideLoading();
                    }
                } else {

                }
            },
            fail: function (res) {
                wx.hideLoading();
            }
        })
    },
}
Page(pageConfig)
