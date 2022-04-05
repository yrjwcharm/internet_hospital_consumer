!function (e, t) {
    if ("object" == typeof exports && "object" == typeof module) module.exports = t(); else if ("function" == typeof define && define.amd) define([], t); else {
        var r = t();
        for (var o in r) ("object" == typeof exports ? exports : e)[o] = r[o]
    }
}("undefined" != typeof self ? self : this, (function () {
    return function (e) {
        var t = {};

        function r(o) {
            if (t[o]) return t[o].exports;
            var s = t[o] = {i: o, l: !1, exports: {}};
            return e[o].call(s.exports, s, s.exports, r), s.l = !0, s.exports
        }

        return r.m = e, r.c = t, r.d = function (e, t, o) {
            r.o(e, t) || Object.defineProperty(e, t, {enumerable: !0, get: o})
        }, r.r = function (e) {
            "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {value: "Module"}), Object.defineProperty(e, "__esModule", {value: !0})
        }, r.t = function (e, t) {
            if (1 & t && (e = r(e)), 8 & t) return e;
            if (4 & t && "object" == typeof e && e && e.__esModule) return e;
            var o = Object.create(null);
            if (r.r(o), Object.defineProperty(o, "default", {
                enumerable: !0,
                value: e
            }), 2 & t && "string" != typeof e) for (var s in e) r.d(o, s, function (t) {
                return e[t]
            }.bind(null, s));
            return o
        }, r.n = function (e) {
            var t = e && e.__esModule ? function () {
                return e.default
            } : function () {
                return e
            };
            return r.d(t, "a", t), t
        }, r.o = function (e, t) {
            return Object.prototype.hasOwnProperty.call(e, t)
        }, r.p = "", r(r.s = 5)
    }([function (e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0}), t.ZegoExpressWebRTM = t.ZegoDataReport = t.ZegoLogger = t.ZegoExpressWebRTMEngine = t.getReportSeq = t.getSeq = t.QUALITY_CONSTANT = t.QualityGrade = t.REPORT_ACTION = t.ENUM_RETRY_STATE = t.ENUM_PLAY_STATE_UPDATE = t.ENUM_PUBLISH_STATE_UPDATE = t.LinkedList = t.ListNode = t.E_CLIENT_TYPE = t.ENUM_SOURCE_TYPE = t.ENUM_DISPATCH_TYPE = t.ENUM_BROADCASTER_STATUS = t.ENUM_PLAY_SOURCE_TYPE = t.ENUM_PUBLISH_STATE_NEGO = t.ENUM_PUSH_SIGNAL_SUB_CMD = t.ENUM_SIGNAL_SUB_CMD = t.QUALITYLEVEL = t.MIXSTREAM_ERROR_CODE = t.SERVER_ERROR_CODE = t.ENUM_STREAM_UPDATE_CMD_PRI = t.ENUM_STREAM_UPDATE_CMD = t.MINIUM_HEARTBEAT_INTERVAL = t.STREAM_DELETE_REASON = t.ENUM_NETWORK_STATE = t.ENUM_RUN_STATE = t.ENUM_STREAM_UPDATE_TYPE = t.ENUM_STREAM_CMD_PRI = t.ENUM_STREAM_SUB_CMD = t.ENUM_PUBLISH_STREAM_STATE = t.MAX_RETRY_CONNECT_INTERVAL = t.MAX_TRANS_DATA_LENGTH = t.MAX_TRANS_TYPE_LENGTH = t.MAX_MIX_TASK_ID_LENGTH = t.MAX_MESSAGE_LENGTH = t.MAX_ROOM_ID_LENGTH = t.MAX_USER_NAME_LENGTH = t.MAX_USER_ID_LENGTH = t.MAX_STREAM_ID_LENGTH = t.MAX_TRY_HEARTBEAT_COUNT = t.SEND_MSG_TIMEOUT = t.SEND_MSG_RESET = t.MAX_TRY_CONNECT_COUNT = t.ENUM_CONNECT_STATE = t.ENUM_PROBE_STATE = t.ENUM_PLAY_STATE_NEGO = t.ENUM_PLAYER_STATE = t.ENUM_PLAY_STATE = t.ENUM_PUBLISH_STATE = t.ENUM_SCREEM_RESOLUTION_TYPE = t.ENUM_RESOLUTION_TYPE = t.ENUM_SIGNAL_STATE = t.ERROR_CODES = t.sdkErrorList = t.ENUM_REMOTE_TYPE = t.LOG_LEVEL = t.ENUM_LOG_LEVEL = t.ROOMVERSION = t.PROTO_VERSION = void 0, t.PROTO_VERSION = "2.8.0", t.ROOMVERSION = "V1", function (e) {
            e[e.debug = 0] = "debug", e[e.info = 1] = "info", e[e.warn = 2] = "warn", e[e.error = 3] = "error", e[e.report = 99] = "report", e[e.disable = 100] = "disable"
        }(t.ENUM_LOG_LEVEL || (t.ENUM_LOG_LEVEL = {})), t.LOG_LEVEL = {
            debug: 0,
            info: 1,
            warn: 2,
            error: 3,
            report: 99,
            disable: 100
        }, function (e) {
            e[e.disable = 0] = "disable", e[e.websocket = 1] = "websocket", e[e.https = 2] = "https"
        }(t.ENUM_REMOTE_TYPE || (t.ENUM_REMOTE_TYPE = {})), t.sdkErrorList = {
            CLIENT: "Client.",
            SERVER: "Server.",
            SUCCESS: {code: "Success", msg: "success."},
            PARAM: {code: "Error.Param", msg: "input error."},
            HEARTBEAT_TIMEOUT: {code: "Error.Timeout", msg: "heartbeat timeout."},
            LOGIN_TIMEOUT: {code: "Error.Timeout", msg: "login timeout."},
            SEND_MSG_TIMEOUT: {code: "Error.Timeout", msg: "send customsg timeout."},
            RESET_QUEUE: {code: "Error.Timeout", msg: "msg waiting ack is clear when reset."},
            LOGIN_DISCONNECT: {code: "Error.Network", msg: "network is broken and login fail."},
            KICK_OUT: {code: "Error.Kickout", msg: "kickout reason="},
            UNKNOWN: {code: "Error.Unknown", msg: "unknown error."},
            FREQ_LIMITED: {code: "Error.requencyLimited", msg: "Frequency Limited."}
        }, t.ERROR_CODES = {
            ROOM_SESSION_ID_ERR: 1000000152,
            FETCH_TRANS_UNKNOWN_CHANNEL: 1000001108,
            FETCH_TRANS_UNKNOWN_TYPE: 1000001109,
            FETCH_TRANS_WRONG_SEQ: 1000001110
        }, function (e) {
            e[e.disconnected = 0] = "disconnected", e[e.connecting = 1] = "connecting", e[e.connected = 2] = "connected"
        }(t.ENUM_SIGNAL_STATE || (t.ENUM_SIGNAL_STATE = {})), t.ENUM_RESOLUTION_TYPE = {
            LOW: {
                width: 320,
                height: 240,
                frameRate: 15,
                bitRate: 300
            },
            MEDIUM: {width: 640, height: 480, frameRate: 15, bitRate: 800},
            HIGH: {width: 1280, height: 720, frameRate: 20, bitRate: 1500}
        }, t.ENUM_SCREEM_RESOLUTION_TYPE = {
            LOW: {frameRate: 20, bitRate: 800},
            MEDIUM: {frameRate: 15, bitRate: 1500},
            HIGH: {frameRate: 5, bitRate: 2e3}
        }, t.ENUM_PUBLISH_STATE = {
            start: 0,
            waitingSessionRsp: 1,
            waitingOffserRsp: 2,
            waitingServerAnswer: 3,
            waitingServerICE: 4,
            connecting: 5,
            publishing: 6,
            stop: 7,
            didNotStart: 8
        }, t.ENUM_PLAY_STATE = {
            start: 0,
            waitingSessionRsp: 1,
            waitingOffserRsp: 2,
            waitingServerAnswer: 3,
            waitingServerICE: 4,
            connecting: 5,
            playing: 6,
            stop: 7,
            didNotStart: 8
        }, t.ENUM_PLAYER_STATE = {start: 0, playing: 1, stop: 2}, t.ENUM_PLAY_STATE_NEGO = {
            stop: 0,
            start: 1,
            waiterAnswer: 2,
            waitingCandidate: 3,
            sendCandidate: 4,
            iceConnected: 5,
            iceDisconnected: 6
        }, t.ENUM_PROBE_STATE = {tryProbe: 0, probed: 2}, t.ENUM_CONNECT_STATE = {
            disconnect: 0,
            connecting: 1,
            connected: 2
        }, t.MAX_TRY_CONNECT_COUNT = 1, t.SEND_MSG_RESET = 2, t.SEND_MSG_TIMEOUT = 1, t.MAX_TRY_HEARTBEAT_COUNT = 5, t.MAX_STREAM_ID_LENGTH = 256, t.MAX_USER_ID_LENGTH = 64, t.MAX_USER_NAME_LENGTH = 256, t.MAX_ROOM_ID_LENGTH = 128, t.MAX_MESSAGE_LENGTH = 1024, t.MAX_MIX_TASK_ID_LENGTH = 256, t.MAX_TRANS_TYPE_LENGTH = 128, t.MAX_TRANS_DATA_LENGTH = 4096, t.MAX_RETRY_CONNECT_INTERVAL = 12, t.ENUM_PUBLISH_STREAM_STATE = {
            waiting_url: 1,
            tryPublish: 2,
            update_info: 3,
            publishing: 4,
            stop: 5,
            retryPublish: 6
        }, t.ENUM_STREAM_SUB_CMD = {
            liveNone: 0,
            liveBegin: 2001,
            liveEnd: 2002,
            liveUpdate: 2003
        }, t.ENUM_STREAM_CMD_PRI = {
            liveBegin: "zegochat_js.room_stream_create_req",
            liveEnd: "zegochat_js.room_stream_delete_req",
            liveUpdate: "zegochat_js.room_stream_update_req"
        }, t.ENUM_STREAM_UPDATE_TYPE = {added: 1, deleted: 0}, function (e) {
            e[e.logout = 0] = "logout", e[e.trylogin = 1] = "trylogin", e[e.login = 2] = "login"
        }(t.ENUM_RUN_STATE || (t.ENUM_RUN_STATE = {})), function (e) {
            e[e.offline = 0] = "offline", e[e.online = 1] = "online"
        }(t.ENUM_NETWORK_STATE || (t.ENUM_NETWORK_STATE = {})), t.STREAM_DELETE_REASON = {
            0: {
                code: 1,
                description: "user_stop_publishing_stream_normal"
            },
            1: {code: 2, description: "user_heart_beat_timeout"},
            2: {code: 3, description: "user_repeat_login"},
            3: {code: 4, description: "user_kicked_out"},
            4: {code: 5, description: "user_offline"},
            100: {code: 6, description: "remove_by_server"}
        }, t.MINIUM_HEARTBEAT_INTERVAL = 3e3, t.ENUM_STREAM_UPDATE_CMD = {
            added: 12001,
            deleted: 12002,
            updated: 12003
        }, t.ENUM_STREAM_UPDATE_CMD_PRI = {
            added: 1,
            updated: 2,
            deleted: 3
        }, t.SERVER_ERROR_CODE = 1e4, t.MIXSTREAM_ERROR_CODE = 1e4, function (e) {
            e[e.low = 1] = "low", e[e.stantard = 2] = "stantard", e[e.hight = 3] = "hight", e[e.custome = 4] = "custome"
        }(t.QUALITYLEVEL || (t.QUALITYLEVEL = {})), t.ENUM_SIGNAL_SUB_CMD = {
            none: 0,
            joinLiveRequest: 1001,
            joinLiveResult: 1002,
            joinLiveInvite: 1003,
            joinLiveStop: 1004
        }, t.ENUM_PUSH_SIGNAL_SUB_CMD = {
            none: 0,
            pushJoinLiveRequest: 11001,
            pushJoinLiveResult: 11002,
            pushJoinLiveInvite: 11003,
            pushJoinLiveStop: 11004
        }, t.ENUM_PUBLISH_STATE_NEGO = {
            stop: 0,
            start: 1,
            waiterAnswer: 2,
            waitingCandidate: 3,
            sendCandidate: 4,
            iceConnected: 5,
            iceDisconnected: 6
        }, function (e) {
            e[e.cdn = 0] = "cdn", e[e.ultra = 1] = "ultra"
        }(t.ENUM_PLAY_SOURCE_TYPE || (t.ENUM_PLAY_SOURCE_TYPE = {})), function (e) {
            e[e.stop = 0] = "stop", e[e.start = 1] = "start"
        }(t.ENUM_BROADCASTER_STATUS || (t.ENUM_BROADCASTER_STATUS = {})), function (e) {
            e[e.cdn = 0] = "cdn", e[e.ultra = 1] = "ultra", e[e.customUrl = 2] = "customUrl"
        }(t.ENUM_DISPATCH_TYPE || (t.ENUM_DISPATCH_TYPE = {})), function (e) {
            e[e.CDN = 0] = "CDN", e[e.BGP = 1] = "BGP"
        }(t.ENUM_SOURCE_TYPE || (t.ENUM_SOURCE_TYPE = {})), function (e) {
            e[e.ClientType_None = 0] = "ClientType_None", e[e.ClientType_H5 = 1] = "ClientType_H5", e[e.ClientType_SmallPragram = 2] = "ClientType_SmallPragram", e[e.ClientType_Webrtc = 3] = "ClientType_Webrtc"
        }(t.E_CLIENT_TYPE || (t.E_CLIENT_TYPE = {}));
        var o = function () {
            function e(e, t) {
                void 0 === e && (e = null), void 0 === t && (t = null), this._id = null, this.next = null, this.prev = null, this._id = e, this._data = t
            }

            return Object.defineProperty(e.prototype, "id", {
                get: function () {
                    return this._id ? this._id : null
                }, set: function (e) {
                    this._id = e
                }, enumerable: !1, configurable: !0
            }), Object.defineProperty(e.prototype, "data", {
                get: function () {
                    return this._data
                }, set: function (e) {
                    this._data = e
                }, enumerable: !1, configurable: !0
            }), e.prototype.hasNext = function () {
                return this.next && this.next.id
            }, e.prototype.hasPrev = function () {
                return this.prev && this.prev.id
            }, e
        }();
        t.ListNode = o;
        var s = function () {
            function e() {
                this.start = new o, this.end = new o, this._idCounter = 0, this._numNodes = 0, this.start.next = this.end, this.start.prev = null, this.end.prev = this.start, this.end.next = null
            }

            return e.prototype.insertBefore = function (e, t) {
                var r = new o(this._idCounter, t);
                return r.next = e, r.prev = e.prev, e.prev && (e.prev.next = r), e.prev = r, ++this._idCounter, ++this._numNodes, r
            }, e.prototype.addLast = function (e) {
                return this.insertBefore(this.end, e)
            }, e.prototype.add = function (e) {
                return this.addLast(e)
            }, e.prototype.getFirst = function () {
                return 0 === this._numNodes ? null : this.start.next
            }, e.prototype.getLast = function () {
                return 0 === this._numNodes ? null : this.end.prev
            }, e.prototype.size = function () {
                return this._numNodes
            }, e.prototype.getFromFirst = function (e) {
                var t = 0, r = this.start.next;
                if (e >= 0) for (; t < e && null !== r;) r = r.next, ++t; else r = null;
                if (null === r) throw"Index out of bounds.";
                return r
            }, e.prototype.get = function (e) {
                return 0 === e ? this.getFirst() : e === this._numNodes - 1 ? this.getLast() : this.getFromFirst(e)
            }, e.prototype.remove = function (e) {
                return e.prev && (e.prev.next = e.next), e.next && (e.next.prev = e.prev), --this._numNodes, e
            }, e.prototype.removeFirst = function () {
                var e = null;
                return this._numNodes > 0 && this.start.next && (e = this.remove(this.start.next)), e
            }, e.prototype.removeLast = function () {
                var e = null;
                return this._numNodes > 0 && this.end.prev && (e = this.remove(this.end.prev)), e
            }, e.prototype.removeAll = function () {
                this.start.next = this.end, this.end.prev = this.start, this._numNodes = 0, this._idCounter = 0
            }, e.prototype.each = function (e) {
                for (var t = this.start; t.hasNext();) e(t = t.next)
            }, e.prototype.find = function (e) {
                for (var t = this.start, r = !1, o = null; t.hasNext() && !r;) e(t = t.next) && (o = t, r = !0);
                return o
            }, e.prototype.map = function (e) {
                for (var t = this.start, r = []; t.hasNext();) e(t = t.next) && r.push(t);
                return r
            }, e.prototype.push = function (e) {
                return this.addLast(e)
            }, e.prototype.unshift = function (e) {
                this._numNodes > 0 ? this.insertBefore(this.start.next, e) : this.insertBefore(this.end, e)
            }, e.prototype.pop = function () {
                return this.removeLast()
            }, e.prototype.shift = function () {
                return this.removeFirst()
            }, e
        }();
        t.LinkedList = s, t.ENUM_PUBLISH_STATE_UPDATE = {
            start: 0,
            error: 1,
            retry: 2
        }, t.ENUM_PLAY_STATE_UPDATE = {start: 0, error: 1, retry: 2, stop: 3}, t.ENUM_RETRY_STATE = {
            didNotStart: 0,
            retrying: 1,
            finished: 2
        }, t.REPORT_ACTION = {
            eventStart: "eventStart",
            eventEndWithMsgInfo: "eventEndWithMsgInfo",
            addEventMsg: "addEventMsg",
            addEvent: "addEvent",
            eventEnd: "eventEnd",
            addMsgInfo: "addMsgInfo"
        }, function (e) {
            e[e.Unknown = -1] = "Unknown", e[e.Excellent = 0] = "Excellent", e[e.Good = 1] = "Good", e[e.Middle = 2] = "Middle", e[e.Poor = 3] = "Poor", e[e.Die = 4] = "Die"
        }(t.QualityGrade || (t.QualityGrade = {})), function (e) {
            e[e.MinQuality = 0] = "MinQuality", e[e.DieQuality = 0] = "DieQuality", e[e.PoorMinQuality = 1] = "PoorMinQuality", e[e.MiddleMinQuality = 30] = "MiddleMinQuality", e[e.GoodMinQuality = 60] = "GoodMinQuality", e[e.ExcellentMinQuality = 85] = "ExcellentMinQuality", e[e.MaxQuality = 100] = "MaxQuality"
        }(t.QUALITY_CONSTANT || (t.QUALITY_CONSTANT = {}));
        var i = r(6);
        Object.defineProperty(t, "getSeq", {
            enumerable: !0, get: function () {
                return i.getSeq
            }
        }), Object.defineProperty(t, "getReportSeq", {
            enumerable: !0, get: function () {
                return i.getReportSeq
            }
        }), Object.defineProperty(t, "ZegoExpressWebRTMEngine", {
            enumerable: !0, get: function () {
                return i.ZegoExpressWebRTMEngine
            }
        }), Object.defineProperty(t, "ZegoLogger", {
            enumerable: !0, get: function () {
                return i.ZegoLogger
            }
        }), Object.defineProperty(t, "ZegoDataReport", {
            enumerable: !0, get: function () {
                return i.ZegoDataReport
            }
        }), Object.defineProperty(t, "ZegoExpressWebRTM", {
            enumerable: !0, get: function () {
                return i.ZegoExpressWebRTM
            }
        })
    }, function (e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0}), t.ZegoWechatLogEvent = t.ZegoRTCLogEvent = void 0;
        var o = r(4), s = function (e) {
            return e
        };
        t.ZegoRTCLogEvent = {
            kZegoTaskCreateStream: {
                event: "/sdk/create_stream",
                error: {
                    kBrowserNotSupportError: o.errorCodeList.PUBLISHER_BROWSER_NOT_SUPPORT,
                    kParamError: o.errorCodeList.PUBLISHER_PARAM,
                    kScreenCancelError: o.errorCodeList.PUBLISH_SCREEN_CANCELED,
                    kScreenFailedError: o.errorCodeList.PUBLISHER_SCREEN_FAILED,
                    kScreenNotSupportError: o.errorCodeList.PUBLISH_SCREEN_NOT_SUPPORT,
                    kHttpsRequiredError: o.errorCodeList.PUBLISHER_HTTPS_REQUIRED,
                    kGetUserMediaError: o.errorCodeList.PUBLISHER_GET_USER_MEDIA_FAIL
                },
                stream_type: s,
                screen: s,
                camera: s,
                custom: s
            },
            kZegoTaskPublishStart: {
                event: "/sdk/api/publish_request",
                error: {
                    kPublishParamError: o.errorCodeList.PUBLISHER_PARAM,
                    kPublishNetworkTimeoutError: o.errorCodeList.TIMEOUT,
                    kPublishDispatchTimeoutError: o.errorCodeList.DISPATCH_TIMEOUT,
                    kPublishDispatchError: o.errorCodeList.DISPATCH_ERROR,
                    kPublishNetworkBrokenError: o.errorCodeList.NETWORK_BROKEN,
                    kPublishNoPreviewError: o.errorCodeList.PUBLISH_NO_PREVIEW,
                    kPublishNoLoginError: o.errorCodeList.NOT_LOGIN,
                    kPublishRetryTimeoutError: o.errorCodeList.PUBLISHER_RETRY_TIMEOUT,
                    kMediaServerForbidError: o.errorCodeList.PUBLISHER_MEDIA_SERVER_FORBID,
                    kPublishSessionClosedError: o.errorCodeList.PUBLISHER_SESSION_CLOSED,
                    kPublishNegoTimeoutError: o.errorCodeList.PUBLISHER_SERVER_NEGO_TIMEOUT,
                    kCreateOfferError: o.errorCodeList.PUBLISHER_CREATE_OFFER_ERROR,
                    kSetLocalDescError: o.errorCodeList.PUBLISHER_SET_LOCAL_DESC_ERROR,
                    kSessionTimeoutError: o.errorCodeList.PUBLISHER_SESSION_TIMEOUT,
                    kSessionRequestError: o.errorCodeList.PUBLISHER_SESSION_REQUEST_FAIL,
                    kSetRemoteDescError: o.errorCodeList.PUBLISHER_SET_REMOTE_DESC_ERROR,
                    kMediaConnectionError: o.errorCodeList.PUBLISHER_MEDIA_CONNECTION_ERROR,
                    kWebsocketDisconnectedError: o.errorCodeList.PUBLISHER_WEBSOCKET_DISCONNECTED,
                    kMediaDescError: o.errorCodeList.PUBLISHER_MEDIA_DESC_ERROR,
                    kCandidateError: o.errorCodeList.PUBLISHER_CANDIDATE_ERROR,
                    kIsPublishing: o.errorCodeList.PUBLISHER_IS_PUBLISHING,
                    kClientIPChangedError: o.errorCodeList.PUBLISHER_CLIENT_IP_CHANGED,
                    kTTLOverTimeError: o.errorCodeList.PUBLISHER_TTL_OVERTIME
                },
                publishOption: s,
                message: s,
                session_id: s,
                stream: s,
                video_en_codec_id: s,
                cap_w: s,
                cap_h: s,
                w: s,
                h: s,
                video_en_fps: s,
                video_en_bps: s,
                audio_c_channel_count: s,
                audio_en_bps: s,
                aec_level: s,
                ans_level: s,
                agc: s,
                traffic_control_min_video_bitrate: s
            },
            kZegoTaskVideoCaptureSize: {event: "/sdk/api/publish_video_c_size", session_id: s, w: s, h: s},
            kZegoTaskVideoPlaySize: {event: "/sdk/play_video_size_changed", session_id: s, w: s, h: s},
            kZegoTaskRePublish: {event: "/sdk/republish", stream: s},
            kZegoTaskPublishStop: {
                event: "/sdk/stop_publish",
                error: {kParamError: o.errorCodeList.PUBLISHER_PARAM},
                stream: s
            },
            kZegoTaskPlayStart: {
                event: "/sdk/api/play_request", error: {
                    kStreamIDNullError: o.errorCodeList.STREAM_ID_NULL,
                    kPlayParamError: o.errorCodeList.PLAYER_PARAM,
                    kPlayStreamIDToLongError: o.errorCodeList.STREAMID_TOO_LONG,
                    kPlayStreamIDInvalidCharacterError: o.errorCodeList.STREAM_ID_INVALID_CHARACTER,
                    kPlayNoLoginError: o.errorCodeList.NOT_LOGIN,
                    kPlayRepeatedPullError: o.errorCodeList.REPEATED_PULL,
                    kPlayNetworkTimeoutError: o.errorCodeList.TIMEOUT,
                    kPlayDispatchTimeoutError: o.errorCodeList.DISPATCH_TIMEOUT,
                    kPlayDispatchError: o.errorCodeList.DISPATCH_ERROR,
                    kPlayNetworkBrokenError: o.errorCodeList.NETWORK_BROKEN,
                    kPlayUnsupportedResourceMode: o.errorCodeList.PLAYER_UNSUPPORTED_PROTOCOL,
                    kPlayRetryTimeoutError: o.errorCodeList.PLAYER_RETRY_TIMEOUT,
                    kPlaySessionClosedError: o.errorCodeList.PLAYER_SESSION_CLOSED,
                    kPlaySessionResetError: o.errorCodeList.PLAYER_SESSION_RESET,
                    kPlayNegoTimeoutError: o.errorCodeList.PLAYER_SERVER_NEGO_TIMEOUT,
                    kCreateOfferError: o.errorCodeList.PLAYER_CREATE_OFFER_ERROR,
                    kSetLocalDescError: o.errorCodeList.PLAYER_SET_LOCAL_DESC_ERROR,
                    kSessionRequestError: o.errorCodeList.PLAYER_SESSION_REQUEST_FAIL,
                    kSessionTimeoutError: o.errorCodeList.PLAYER_SESSION_TIMEOUT,
                    kSetRemoteDescError: o.errorCodeList.PLAYER_SET_REMOTE_DESC_ERROR,
                    kMediaConnectionError: o.errorCodeList.PLAYER_MEDIA_CONNECTION_ERROR,
                    kWebsocketDisconnectedError: o.errorCodeList.PLAYER_WEBSOCKET_DISCONNECTED,
                    kCandidateError: o.errorCodeList.PLAYER_CANDIDATE_ERROR,
                    kMediaDescError: o.errorCodeList.PLAYER_MEDIA_DESC_ERROR,
                    kIsPlaying: o.errorCodeList.PLAYER_IS_PLAYING,
                    kClientIPChangedError: o.errorCodeList.PLAYER_CLIENT_IP_CHANGED,
                    kTTLOverTimeError: o.errorCodeList.PLAYER_TTL_OVERTIME,
                    kProbeTimeOutError: o.errorCodeList.PLAYER_PROBE_TIMEOUT
                }, playOption: s, message: s, session_id: s, stream: s, audio_activate: s, video_activate: s
            },
            kZegoTaskRePlay: {event: "/sdk/replay", stream: s},
            kZegoTaskPlayStop: {
                event: "/sdk/stop_play",
                error: {kParamError: o.errorCodeList.PUBLISHER_PARAM},
                stream: s
            },
            kZegoPlayContentChanged: {
                event: "/sdk/play_content_changed",
                session_id: s,
                video_activate: s,
                audio_activate: s
            },
            kZegoTaskMixStart: {
                event: "/mix/start_mix",
                error: {
                    kParamError: o.errorCodeList.INPUT_PARAM,
                    kTaskIDNullError: o.errorCodeList.MIXER_TASK_ID_NULL,
                    kTaskIDToLongError: o.errorCodeList.MIXER_TASK_ID_TOO_LONG,
                    kTaskIDInvalidCharacterError: o.errorCodeList.MIXER_TASK_ID_INVALID_CHARACTER,
                    kInputListNullError: o.errorCodeList.MIXER_INPUTLIST_NULL,
                    kOutputListNullError: o.errorCodeList.MIXER_OUTPUTLIST_NULL,
                    kOutputTargetInvalidError: o.errorCodeList.MIXER_OUTPUT_TARGET_INVALID,
                    kOutputNoTargetError: o.errorCodeList.MIXER_NO_OUTPUT_TARGET,
                    kRequestError: o.errorCodeList.MIXER_START_REQUEST_ERROR,
                    kInternalError: o.errorCodeList.MIXER_INNER_ERROR,
                    kNoLoginError: o.errorCodeList.NOT_LOGIN
                },
                mix_stream_id: s,
                stream_cnt: s,
                input_stream_list: s,
                output_target_list: s
            },
            kZegoTaskMixStop: {
                event: "/mix/stop_mix",
                error: {
                    kParamError: o.errorCodeList.INPUT_PARAM,
                    kTaskIDNullError: o.errorCodeList.MIXER_TASK_ID_NULL,
                    kRequestError: o.errorCodeList.MIXER_STOP_REQUEST_ERROR,
                    kInternalError: o.errorCodeList.MIXER_INNER_ERROR,
                    kNoLoginError: o.errorCodeList.NOT_LOGIN
                }
            },
            kZegoTaskMixConfig: {
                event: "/mix/config_mix",
                error: {
                    kParamError: o.errorCodeList.INPUT_PARAM,
                    kVideoConfigInvalidError: o.errorCodeList.MIXER_VIDEO_CONFIG_INVALID,
                    kBackgroundImageUrlInvalidError: o.errorCodeList.MIXER_BACKGROUND_IMAGE_URL_INVALID,
                    kNoLoginError: o.errorCodeList.NOT_LOGIN
                },
                config: s
            },
            kZegoTaskEnumDevices: {
                event: "/device/list",
                error: {
                    kBrowserNotSupportError: o.errorCodeList.PUBLISHER_BROWSER_NOT_SUPPORT,
                    kEnumDevicesError: o.errorCodeList.ENUMERATE_DEVICES_FAIL
                },
                dev_list: s
            },
            kZegoTaskAudioOutput: {
                event: "/device/audio_capture",
                error: {
                    kBrowserNotSupportError: o.errorCodeList.PUBLISHER_BROWSER_NOT_SUPPORT,
                    kEnumDevicesError: o.errorCodeList.ENUMERATE_DEVICES_FAIL
                },
                session_id: s,
                device: s
            },
            kZegoTaskVideoCapture: {
                event: "/device/video_capture",
                error: {
                    kBrowserNotSupportError: o.errorCodeList.PUBLISHER_BROWSER_NOT_SUPPORT,
                    kEnumDevicesError: o.errorCodeList.ENUMERATE_DEVICES_FAIL
                },
                session_id: s,
                device: s
            },
            kZegoTaskDeviceInterrupt: {
                event: "/device/interrupt",
                error: {
                    kBrowserNotSupportError: o.errorCodeList.PUBLISHER_BROWSER_NOT_SUPPORT,
                    kEnumDevicesError: o.errorCodeList.ENUMERATE_DEVICES_FAIL
                },
                session_id: s,
                interrupt: s
            },
            kZegoTaskSetDebug: "/sdk/set_debug",
            kZegoTaskSetLog: "/sdk/set_log_config",
            kZegoTaskUseVideoDevice: {
                event: "/device/api/video_c",
                error: {
                    kParamError: o.errorCodeList.INPUT_PARAM,
                    kDevicesNoFoundError: o.errorCodeList.DEVICE_NOT_FOUND,
                    kLocalStreamError: o.errorCodeList.LOCALSTREAM_WRONG
                },
                device: s
            },
            kZegoTaskUseAudioDevice: {
                event: "/device/api/audio_c",
                error: {
                    kParamError: o.errorCodeList.INPUT_PARAM,
                    kDevicesNoFoundError: o.errorCodeList.DEVICE_NOT_FOUND,
                    kLocalStreamError: o.errorCodeList.LOCALSTREAM_WRONG
                },
                device: s
            },
            kZegoTaskCheckSystemRequirements: {event: "/sdk/check_system", capability: s},
            kZegoTaskMutePublishVideo: "/sdk/mute_publish_video",
            kZegoTaskMutePublishAudio: "/sdk/mute_publish_audio",
            kZegoTaskMuteMicrophone: "/sdk/mute_microphone",
            kZegoTaskMutePlayVideo: "/sdk/mute_play_video",
            kZegoTaskMutePlayAudio: "/sdk/mute_play_audio",
            kZegoTaskRemoteCameraUpdate: {event: "/sdk/remote_camera_update", stream: s, status: s},
            kZegoTaskRemoteMicUpdate: {event: "/sdk/remote_mic_update", stream: s, status: s},
            kZegoTaskGetSoundLevel: {
                event: "/sdk/get_sound_level",
                error: {kGetSoundLevelError: o.errorCodeList.GET_SOUND_LEVEL_FAIL}
            },
            kZegoTaskStopSoundLevel: "/sdk/stop_sound_level",
            kZegoTaskAddPublishCdnUrl: {
                event: "/sdk/add_publish_cdn_url",
                error: {kParamError: o.errorCodeList.INPUT_PARAM}
            },
            kZegoTaskRemovePublishCdnUrl: {
                event: "/sdk/remove_publish_cdn_url",
                error: {kParamError: o.errorCodeList.INPUT_PARAM},
                stream: s,
                target_url: s
            },
            kZegoTaskClearPublishCdnUrl: {
                event: "/sdk/clear_publish_cdn_url",
                error: {kParamError: o.errorCodeList.INPUT_PARAM}
            },
            kZegoTaskPublishTarget: {
                event: "/sdk/publish_target",
                error: {
                    kParamError: o.errorCodeList.INPUT_PARAM,
                    kPublishStreamNoFoundError: o.errorCodeList.PUBLISHER_STREAM_NO_FOUND,
                    kNoLoginError: o.errorCodeList.NOT_LOGIN,
                    kNoResponseError: o.errorCodeList.PUBLISH_TARGET_NO_RESPONSE,
                    kBizChannelError: o.errorCodeList.BIZ_CHANNEL_ERROR,
                    kInvalidChannelError: o.errorCodeList.INVALID_CHANNEL,
                    kUnknownServerError: o.errorCodeList.UNKNOWN_SERVER_ERROR
                }
            },
            kZegoTaskDestroyStream: {
                event: "/sdk/destroy_stream",
                error: {kLocalStreamError: o.errorCodeList.LOCALSTREAM_WRONG}
            },
            kZegoTaskScreenSharingEnded: "/sdk/screen_share_end",
            kZegoTaskAudioOutputChanged: {
                event: "/device/api/audio_output",
                session_id: s,
                stream: s,
                device: s,
                reason: s
            },
            kZegoEventPublishStat: "/sdk/publish_stat_report",
            kZegoEventPlayStat: "/sdk/play_stat_report",
            kZegoSetAudioConfig: {event: "/sdk/set_audio_config", error: {kParamError: o.errorCodeList.INPUT_PARAM}},
            kZegoSetVideoConfig: {
                event: "/sdk/set_video_config",
                error: {kParamError: o.errorCodeList.INPUT_PARAM, kLocalStreamError: o.errorCodeList.LOCALSTREAM_WRONG}
            },
            kZegoReplaceTrack: {event: "/sdk/replace_track", error: {kParamError: o.errorCodeList.INPUT_PARAM}},
            kZegoTaskLiveRoomGetStreamUpdateInfo: {
                event: "/liveroom/get_stream_update_info",
                stream_update_type: s,
                update_stream: s
            },
            kZegoTaskLiveRoomGetStreamExtraInfo: {event: "/liveroom/get_stream_extra_info", update_stream: s},
            kZegoTaskLiveRoomSendStreamExtraInfo: {
                event: "/liveroom/send_stream_extra_info",
                error: {
                    kParamError: o.errorCodeList.INPUT_PARAM,
                    kExtraInfoNullError: o.errorCodeList.PUBLISHER_EXTRA_INFO_NULL,
                    kNoLoginError: o.errorCodeList.NOT_LOGIN,
                    kPublishStreamNoFoundError: o.errorCodeList.PUBLISHER_STREAM_NO_FOUND,
                    kUpdateStreamInfoFailError: o.errorCodeList.PUBLISHER_UPDATE_STREAM_INFO_FAIL
                },
                stream: s,
                stream_extra_info: s,
                room_sid: s
            },
            kZegoTaskPlayDecodeFirstVideoFrame: {
                event: "/sdk/play_decode_first_video_frame",
                session_id: s,
                fft_consumed: s
            },
            kZegoVisibilityChange: {event: "/app/background"},
            kZegoSetCaptureVolume: {
                event: "/sdk/set_capture_volume",
                error: {kParamError: o.errorCodeList.INPUT_PARAM}
            },
            kZegoListener: {event: "/sdk/listener"},
            kZegoNetProbe: {event: "/sdk/net_probe"},
            kZegoNetProbeResult: {event: "/sdk/net_probe_result"}
        }, t.ZegoWechatLogEvent = {
            kZegoTaskCheckSystemRequirements: {
                event: "/sdk/check_system",
                error: {kCheckSystemGetSettingFailError: o.errorCodeList.WX_GET_SETTING_FAIL},
                capability: s
            },
            kZegoTaskPublishStart: {
                event: "/sdk/api/publish_request",
                error: {
                    kPublishStreamIDNullError: o.errorCodeList.STREAM_ID_NULL,
                    kPublishParamError: o.errorCodeList.PUBLISHER_PARAM,
                    kPublishStreamIDTooLongError: o.errorCodeList.STREAMID_TOO_LONG,
                    kPublishStreamIDInvalidCharacterError: o.errorCodeList.STREAM_ID_INVALID_CHARACTER,
                    kPublishNetworkTimeoutError: o.errorCodeList.TIMEOUT,
                    kPublishDispatchTimeoutError: o.errorCodeList.DISPATCH_TIMEOUT,
                    kPublishDispatchError: o.errorCodeList.DISPATCH_ERROR,
                    kPublishNetworkBrokenError: o.errorCodeList.NETWORK_BROKEN,
                    kPublishNoLoginError: o.errorCodeList.NOT_LOGIN,
                    kPublishRetryTimeoutError: o.errorCodeList.PUBLISHER_RETRY_TIMEOUT,
                    kIsPublishing: o.errorCodeList.PUBLISHER_IS_PUBLISHING
                },
                publishOption: s,
                stream: s,
                message: s
            },
            kZegoTaskPlayStart: {
                event: "/sdk/api/play_request",
                error: {
                    kPlayStreamIDNullError: o.errorCodeList.STREAM_ID_NULL,
                    kPlayParamError: o.errorCodeList.PLAYER_PARAM,
                    kPlayStreamIDTooLongError: o.errorCodeList.STREAMID_TOO_LONG,
                    kPlayStreamIDInvalidCharacterError: o.errorCodeList.STREAM_ID_INVALID_CHARACTER,
                    kPlayNoLoginError: o.errorCodeList.NOT_LOGIN,
                    kPlayRepeatedPullError: o.errorCodeList.REPEATED_PULL,
                    kPlayNetworkTimeoutError: o.errorCodeList.TIMEOUT,
                    kPlayDispatchTimeoutError: o.errorCodeList.DISPATCH_TIMEOUT,
                    kPlayDispatchError: o.errorCodeList.DISPATCH_ERROR,
                    kPlayNetworkBrokenError: o.errorCodeList.NETWORK_BROKEN,
                    kPlayRetryTimeoutError: o.errorCodeList.PLAYER_RETRY_TIMEOUT,
                    kIsPlaying: o.errorCodeList.PLAYER_IS_PLAYING
                },
                playOption: s,
                message: s,
                session_id: s,
                stream: s,
                audio_activate: s,
                video_activate: s
            },
            kZegoEventPublishStat: "/sdk/publish_stat_report",
            kZegoEventPlayStat: "/sdk/play_stat_report",
            kZegoTaskRePublish: "/sdk/republish",
            kZegoTaskRePlay: "/sdk/replay",
            kZegoTaskPublishStop: {
                event: "/sdk/stop_publish",
                error: {kParamError: o.errorCodeList.PUBLISHER_PARAM},
                stream: s
            },
            kZegoTaskPlayStop: {
                event: "/sdk/stop_play",
                error: {kParamError: o.errorCodeList.PUBLISHER_PARAM},
                stream: s
            },
            kZegoTaskLiveRoomGetStreamUpdateInfo: {
                event: "/liveroom/get_stream_update_info",
                stream_update_type: s,
                update_stream: s
            },
            kZegoTaskLiveRoomGetStreamExtraInfo: {event: "/liveroom/get_stream_extra_info", update_stream: s},
            kZegoTaskMixStart: {
                event: "/mix/start_mix",
                error: {
                    kParamError: o.errorCodeList.INPUT_PARAM,
                    kTaskIDNullError: o.errorCodeList.MIXER_TASK_ID_NULL,
                    kTaskIDToLongError: o.errorCodeList.MIXER_TASK_ID_TOO_LONG,
                    kTaskIDInvalidCharacterError: o.errorCodeList.MIXER_TASK_ID_INVALID_CHARACTER,
                    kInputListNullError: o.errorCodeList.MIXER_INPUTLIST_NULL,
                    kOutputListNullError: o.errorCodeList.MIXER_OUTPUTLIST_NULL,
                    kOutputTargetInvalidError: o.errorCodeList.MIXER_OUTPUT_TARGET_INVALID,
                    kOutputNoTargetError: o.errorCodeList.MIXER_NO_OUTPUT_TARGET,
                    kRequestError: o.errorCodeList.MIXER_START_REQUEST_ERROR,
                    kInternalError: o.errorCodeList.MIXER_INNER_ERROR
                },
                mix_stream_id: s,
                stream_cnt: s,
                input_stream_list: s,
                output_target_list: s
            },
            kZegoTaskMixStop: {
                event: "/mix/stop_mix",
                error: {
                    kParamError: o.errorCodeList.INPUT_PARAM,
                    kTaskIDNullError: o.errorCodeList.MIXER_TASK_ID_NULL,
                    kRequestError: o.errorCodeList.MIXER_STOP_REQUEST_ERROR,
                    kInternalError: o.errorCodeList.MIXER_INNER_ERROR
                }
            },
            kZegoTaskMixConfig: {
                event: "/mix/config_mix",
                error: {
                    kParamError: o.errorCodeList.INPUT_PARAM,
                    kVideoConfigInvalidError: o.errorCodeList.MIXER_VIDEO_CONFIG_INVALID,
                    kBackgroundImageUrlInvalidError: o.errorCodeList.MIXER_BACKGROUND_IMAGE_URL_INVALID
                },
                config: s
            },
            kZegoTaskLiveRoomSendStreamExtraInfo: {
                event: "/liveroom/send_stream_extra_info",
                error: {
                    kParamError: o.errorCodeList.INPUT_PARAM,
                    kExtraInfoNullError: o.errorCodeList.PUBLISHER_EXTRA_INFO_NULL,
                    kNoLoginError: o.errorCodeList.NOT_LOGIN,
                    kPublishStreamNoFoundError: o.errorCodeList.PUBLISHER_STREAM_NO_FOUND,
                    kUpdateStreamInfoFailError: o.errorCodeList.PUBLISHER_UPDATE_STREAM_INFO_FAIL
                },
                stream: s,
                stream_extra_info: s,
                room_sid: s
            }
        }
    }, function (e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0}), t.ZEGO_WECHATMINI_ACTION = t.ZEGO_WEBRTC_ACTION = void 0, function (e) {
            e.CONSTRUCTOR = "zc.0", e.CHECK_SUPPORT = "zc.csr", e.CREATE_STREAM = "zc.cs", e.DESTROY_STREAM = "zc.ds", e.START_PUBLISHING_STREAM = "zc.sps.0", e.START_PLAYING_STREAM = "zc.sps.1", e.STOP_PUBLISHING_STREAM = "zc.sps.0.0", e.STOP_PLAYING_STREAM = "zc.sps.1.0", e.ON_STREAM = "zc.os", e.ON_PUSH_STREAM_UPDATE = "zc.opsu", e.ACTIVATE_SEI_INSERT = "zc.asi", e.BIND_WINDOW_LISTENER = "zc.wl", e.MUTE_PUBLISH_STREAM_VIDEO = "zc.mpsv.0", e.MUTE_PUBLISH_STREAM_AUDIO = "zc.mpsa.0", e.MUTE_MIC = "zc.mm", e.MUTE_PLAY_STREAM_VIDEO = "zc.mpsv.1", e.MUTE_PLAY_STREAM_AUDIO = "zc.mpsa.1", e.SET_AUDIO_OUTPUT = "zc.sao", e.SET_CUSTOM_SIGNAL_URL = "zc.scsu", e.SET_TURN_OVER_TCP_ONLY = "zc.stoto", e.SET_VIDEO_CONFIG = "zc.svc", e.SET_AUDIO_CONFIG = "zc.sac", e.REPLACE_TRACK = "zc.rp", e.PRELOAD_EFFECT = "zc.pe.0", e.PLAY_EFFECT = "zc.pe.1", e.PAUSE_EFFECT = "zc.pe.2", e.RESUME_EFFECT = "zc.re", e.STOP_EFFECT = "zc.se", e.UNLOAD_EFFECT = "zc.ue", e.SET_EFFECT_VOLUME = "zc.sev", e.START_MIXING_AUDIO = "zc.sma.0", e.STOP_MIXING_AUDIO = "zc.sma.1", e.MIXING_BUFFER = "zc.mb", e.STOP_MIXING_BUFFER = "zc.smb", e.SET_MIXING_AUDIO_VOLUME = "zc.smav", e.ENABLE_STREAM = "zc.es", e.ENABLE_MIC_ONLY = "zc.emo", e.RDH_ACTIVE = "zc.rdh.a", e.RDH_MAX_TIME = "zc.rdh.m", e.RDH_WEBRTC_URL_RSP = "zc.rdh.hfwur", e.PUBLISH_STATE_HANDLE = "zc.psh.0", e.PLAY_STATE_HANDLE = "zc.psh.1", e.STATECENTER_ACTION_LISTENER = "zc.sc.al", e.SIGNAL_SET_SESSION_INFO = "zc.s.ssi", e.SIGNAL_RESET_CONNECT_TIMER = "zc.s.rct", e.SIGNAL_BIND_WEBSOCKET_HANDLE = "zc.s.bwh", e.SIGNAL_RESET_CHECK_MESSAGE = "zc.s.rcm", e.SIGNAL_UPDATE_TOKEN = "zc.s.ut", e.SIGNAL_SEND_MESSAGE_WITH_CALLBACK = "zc.s.smwc", e.SIGNAL_CONNECT_SERVER = "zc.s.cs.0", e.SIGNAL_START_CONNECT_TIMER = "zc.s.sct", e.SIGNAL_DISCONNECT_SERVER = "zc.s.dc", e.SIGNAL_CREATE_SESSION = "zc.s.cs.1", e.SIGNAL_REMOVE_SESSION = "zc.s.rs", e.SIGNAL_SEND_REMOVE_SESSION = "zc.s.srs", e.SIGNAL_SEND_MESSAGE = "zc.s.sm", e.SIGNAL_HANDLE_RESPOND_DATA = "zc.s.hrd", e.SIGNAL_ADD_SESSION = "zc.s.as", e.SIGNAL_HANDLE_PUSH_DATA = "zc.s.hpd", e.SIGNAL_HANDLE_PUSH_RESET_SESSION_DATA = "zc.s.hprsd", e.SIGNAL_SEND_MEDIA_DESC = "zc.s.smd", e.SIGNAL_SEND_CANDIDATE_INFO = "zc.s.sci", e.SIGNAL_SEND_MEDIA_DESC_ACK = "zc.s.smda", e.SIGNAL_SEND_CANDIDATE_INFO_ACK = "zc.s.scia", e.SIGNAL_SEND_CLOSE_SESSION_ACK = "zc.s.scsa", e.SIGNAL_SEND_RESET_SESSION_ACK = "zc.s.srsa", e.SIGNAL_REGISTER_PUSH_CALLBACK = "zc.s.rpc", e.SIGNAL_CHECK_MESSAGE_TIMEOUT = "zc.s.cmt", e.SIGNAL_SEND_HEARTBEAT = "zc.s.sh", e.SIGNAL_QUALITY_REPORT = "zc.s.qr", e.SIGNAL_SEND_STREAM_STATUS = "zc.s.sss", e.SIGNAL_ACTIVE_PLAY_VIDEO_STREAM = "zc.s.apvs", e.SIGNAL_ACTIVE_PLAY_AUDIO_STREAM = "zc.s.apas", e.SIGNAL_SEND_BROADCAST_STATUS = "zc.s.sbs", e.SIGNAL_SEND_NET_PROBE = "zc.s.snp", e.SIGNAL_SEND_NET_QUALITY_INFO_PUSH_ACK = "zc.s.npa", e.PUBLISHER_START_PUBLISH = "zc.p.0.sp.0", e.PUBLISHER_PUBLISH_SUCCESS = "zc.p.ps", e.PUBLISHER_ON_CREATE_PUBLISH_SESSION_SUCCESS = "zc.p.0.ocpss", e.PUBLISHER_HANDLE_CREATE_SESSION_WITH_SDP = "zc.p.0.hcsws", e.PUBLISHER_ON_CREATE_OFFER_SUCCESS = "zc.p.0.ocos", e.PUBLISHER_ON_SET_LOCAL_DESCRIPTION_SUCCESS = "zc.p.0.oslds", e.PUBLISHER_ON_GET_REMOTE_DESCRIPTION = "zc.p.0.ogrd", e.PUBLISHER_ON_RECV_MEDIA_DESC = "zc.p.0.ormd", e.PUBLISHER_ON_RECV_CANDIDATE_INFO = "zc.p.0.orci.0", e.PUBLISHER_ON_RECV_PUBLISH_EVENT = "zc.p.0.orpe", e.PUBLISHER_ON_RECV_CLIENT_INFO = "zc.p.0.orci.1", e.PUBLISHER_ON_ICE_CANDIDATE = "zc.p.0.oic", e.PUBLISHER_ON_CONNECTION_STATE_CHANGE = "zc.p.0.ocsc", e.PUBLISHER_ON_ICE_CONNECTION_STATE_CHANGE = "zc.p.0.oicsc", e.PUBLISHER_RESET_PUBLISH = "zc.p.0.rp", e.PUBLISHER_SET_PLAYER_QUALITY_TIMER = "zc.p.0.spqt", e.PUBLISHER_UPLOAD_PUBLISH_QUALITY = "zc.p.0.upq", e.PUBLISHER_ON_RECV_RESET_SESSION = "zc.p.0.orrs", e.PUBLISHER_ON_RECV_CLOSE_SESSION = "zc.p.0.orcs", e.PUBLISHER_SEND_CANDIDATE_INFO = "zc.p.0.sci", e.PUBLISHER_STATE_ERROR = "zc.p.0.psr", e.PUBLISHER_STOP_PUBLISH = "zc.p.0.sp.1", e.PUBLISHER_ON_DISCONNECT = "zc.p.0.od", e.PUBLISHER_START_SOUND_LEVEL = "zc.p.0.ssl.0", e.PUBLISHER_STOP_SOUND_LEVEL = "zc.p.0.ssl.1",e.PUBLISHER_PLAY_EFFECT = "zc.p.0.pe.0",e.PUBLISHER_PAUSE_EFFECT = "zc.p.0.pe.1",e.PUBLISHER_RESUME_EFFECT = "zc.p.0.re",e.PUBLISHER_STOP_EFFECT = "zc.p.0.se",e.PUBLISHER_START_MIXING_AUDIO = "zc.p.0.sma.0",e.PUBLISHER_STOP_MIXING_AUDIO = "zc.p.0.sma.1",e.PUBLISHER_MIXING_BUFFER = "zc.p.0.mb",e.PUBLISHER_SET_MIXING_AUDIO_VOLUME = "zc.p.0.smav",e.PUBLISHER_HANDLE_ENC_BITRATE = "zc.p.0.heb",e.PUBLISHER_ON_RECV_NET_QUALITY_INFO = "zc.p.0.nqi",e.PLAYER_START_PLAY = "zc.p.1.sp.0",e.PLAYER_ON_CREATE_PLAY_SESSION_SUCCESS = "zc.p.ocpss.1",e.PLAYER_HANDLE_CREATE_SESSION_WITH_SDP = "zc.p.hcsws.1",e.PLAYER_ON_CREATE_OFFER_SUCCESS = "zc.p.ocos.1",e.PLAYER_ON_SET_LOCAL_DESCRIPTION_SUCCESS = "zc.p.oslds.1",e.PLAYER_ON_RECV_MEDIA_DESC = "zc.p.ormd.1",e.PLAYER_ON_RECV_CANDIDATE_INFO = "zc.p.orci.1",e.PLAYER_ON_RECV_PLAY_EVENT = "zc.p.orpe.1",e.PLAYER_ON_RECV_CLIENT_INFO = "zc.p.orci.1.1",e.PLAYER_ON_ICE_CANDIDATE = "zc.p.oic.1",e.PLAYER_ON_CONNECTION_STATE_CHANGE = "zc.p.ocsc.1",e.PLAYER_ON_ICE_CONNECTION_STATE_CHANGE = "zc.p.oicsc.1",e.PLAYER_RESET_PLAY = "zc.p.rp.1",e.PLAYER_SET_PLAYER_QUALITY_TIMER = "zc.p.spqt.1",e.PLAYER_UPLOAD_PLAYER_QUALITY = "zc.p.upq.1",e.PLAYER_ON_RECV_RESET_SESSION = "zc.p.orrs.1",e.PLAYER_ON_RECV_CLOSE_SESSION = "zc.p.orcs.1",e.PLAYER_ON_RECV_STREAM_STATUS = "zc.p.orss.1",e.PLAYER_ON_GOT_REMOTE_STREAM = "zc.p.ogrs.1",e.PLAYER_SEND_CANDIDATE_INFO = "zc.p.sci.1",e.PLAYER_STATE_ERROR = "zc.p.psr.1",e.PLAYER_STOP_PLAY = "zc.p.1.sp.1",e.PLAYER_ON_DISCONNECT = "zc.p.od.1",e.PLAYER_START_SOUND_LEVEL = "zc.p.ssl.1",e.PLAYER_STOP_SOUND_LEVEL = "zc.p.ssl.1.1",e.PLAYER_ON_RECV_NET_QUALITY_INFO = "zc.p.1.nqi",e.PUBLISH_SET_CAPTURE_VOLUME = "zc.p.scv",e.STREAMHANDLER_MERGE_STREAM_BY_STREAM_SEQ = "zc.sh.msbss",e.STREAMHANDLER_MERGE_STREAM = "zc.sh.ms",e.STREAMHANDLER_PATCH_STREAM_LIST = "zc.sh.psl"
        }(t.ZEGO_WEBRTC_ACTION || (t.ZEGO_WEBRTC_ACTION = {})), function (e) {
            e.ADD_PUBLISH_CDN_URL = "zw.apcu", e.REMOVE_PUBLISH_CDN_URL = "zw.rpcu", e.STOP_MIXER_TASK = "zw.smt", e.ON_STREAM = "zw.os", e.ON_PUSH_STREAM_UPDATE = "zw.opsu", e.ON_PUBLISH_STATE_UPDATE = "zw.w.opsu", e.ON_PUBLISH_STATE_UPDATE_HANDLE = "zw.w.opsuh", e.WECHATMINI_SETPREFERPLAYSOURCETYPE = "zw.w.sppst.1", e.WECHATMINI_BIND_LISTENER = "zw.w.bl", e.WECHATMINI_DELETE_LISTENER = "zw.w.dl", e.WECHATMINI_UPDATE_PLAYER_STATE = "zw.w.ups", e.WECHATMINI_UPDATE_PLAYER_NET_STATUS = "zw.w.upns", e.WECHATMINI_SET_CUSTOM_SIGNAL_URL = "zw.w.scsu", e.WECHATMINI_GET_NEXT_URL = "zw.w.gnu", e.WECHATMINI_BIND_STREAM_CENTER_HANDLER = "zw.w.bsch", e.WECHATMINI_BIND_RTM_LISTENER = "zw.w.brl", e.PUBLISHMODULE_SET_PREFER_PUBLISH_SOURCE_TYPE = "zw.pu.sppst.0", e.PUBLISHMODULE_START_PUBLISHING_STREAM = "zw.pu.sps.0", e.PUBLISHMODULE_STOP_PUBLISHING_STREAM = "zw.pu.sps.0.0", e.PUBLISHMODULE_FETCH_PUBLISH_STREAM_URL = "zw.pu.fpsu.0", e.PUBLISHMODULE_HANDLE_FETCH_STREAM_PUBLISH_URL_RSP = "zw.pu.hfspur.0", e.PUBLISHMODULE_DO_PUBLISH_STREAM = "zw.pu.dps.0", e.PUBLISHMODULE_UPDATE_STREAM_INFO = "zw.pu.upi", e.PUBLISHMODULE_HANDLE_STREAM_UPDATE_RSP = "zw.pu.hsur", e.PLAYMODULE_START_PLAYING_STREAM = "zw.pl.sps.1", e.PLAYMODULE_STOP_PLAYING_STREAM = "zw.pl.sps.1.0", e.PLAYMODULE_START_PLAYING_STREAM_FROM_CDN = "zw.pl.spsfc", e.PLAYMODULE_START_PLAYING_STREAM_FROM_BGP = "zw.pl.spsfb", e.PLAYMODULE_DO_PLAY_STREAM = "zw.pl.dps", e.PLAYMODULE_FETCH_PLAY_STREAM_URL = "zw.pl.fpsu", e.PLAYMODULE_HANDLE_FETCH_STREAM_URL_RSP = "zw.pl.hfsur", e.STREAMCENTERWECHAT_RESET = "zw.scw.r.0", e.STREAMCENTERWECHAT_START_PUBLISHING_STREAM = "zw.scw.sps.0", e.STREAMCENTERWECHAT_START_PLAYING_STREAM = "zw.scw.sps.1", e.STREAMCENTERWECHAT_START_PLAYER = "zw.scw.sp.0", e.STREAMCENTERWECHAT_ON_STREAM_URL_UPDATE = "zw.scw.opuu.0", e.STREAMCENTERWECHAT_UPDATE_PLAYER_STATE = "zw.scw.ups.0", e.STREAMCENTERWECHAT_UPDATE_PLAYER_NET_STATUS = "zw.scw.upns", e.STREAMCENTERWECHAT_UPDATE_PUBLISHING_STATE = "zw.scw.ups.0.0", e.STREAMCENTERWECHAT_UPDATE_PLAYING_STATE = "zw.scw.ups.1.0", e.STREAMCENTERWECHAT_GET_NEXT_URL = "zw.scw.gnu", e.STREAMCENTERWECHAT_STOP_PUBLISHING_STREAM = "zw.scw.sps.0.0", e.STREAMCENTERWECHAT_STOP_PLAYING_STREAM = "zw.scw.sps.1.0", e.STREAMCENTERWECHAT_STOP_PLAYER = "zw.scw.sp.1", e.STREAMCENTERWECHAT_ON_PLAY_START = "zw.scw.ops.0", e.STREAMCENTERWECHAT_ON_PLAY_STOP = "zw.scw.ops.1", e.STREAMCENTERWECHAT_ON_PLAY_RETRY = "zw.scw.opr", e.PLAYWECHAT_TRY_START_PLAYER = "zw.pw.tsp.0", e.PLAYWECHAT_UPDATE_EVENT = "zw.pw.ue", e.PLAYWECHAT_GET_PLAY_URL = "zw.pw.gpu"
        }(t.ZEGO_WECHATMINI_ACTION || (t.ZEGO_WECHATMINI_ACTION = {}))
    }, function (e, t, r) {
        "use strict";
        var o = this && this.__awaiter || function (e, t, r, o) {
            return new (r || (r = Promise))((function (s, i) {
                function n(e) {
                    try {
                        l(o.next(e))
                    } catch (e) {
                        i(e)
                    }
                }

                function a(e) {
                    try {
                        l(o.throw(e))
                    } catch (e) {
                        i(e)
                    }
                }

                function l(e) {
                    var t;
                    e.done ? s(e.value) : (t = e.value, t instanceof r ? t : new r((function (e) {
                        e(t)
                    }))).then(n, a)
                }

                l((o = o.apply(e, t || [])).next())
            }))
        }, s = this && this.__generator || function (e, t) {
            var r, o, s, i, n = {
                label: 0, sent: function () {
                    if (1 & s[0]) throw s[1];
                    return s[1]
                }, trys: [], ops: []
            };
            return i = {
                next: a(0),
                throw: a(1),
                return: a(2)
            }, "function" == typeof Symbol && (i[Symbol.iterator] = function () {
                return this
            }), i;

            function a(i) {
                return function (a) {
                    return function (i) {
                        if (r) throw new TypeError("Generator is already executing.");
                        for (; n;) try {
                            if (r = 1, o && (s = 2 & i[0] ? o.return : i[0] ? o.throw || ((s = o.return) && s.call(o), 0) : o.next) && !(s = s.call(o, i[1])).done) return s;
                            switch (o = 0, s && (i = [2 & i[0], s.value]), i[0]) {
                                case 0:
                                case 1:
                                    s = i;
                                    break;
                                case 4:
                                    return n.label++, {value: i[1], done: !1};
                                case 5:
                                    n.label++, o = i[1], i = [0];
                                    continue;
                                case 7:
                                    i = n.ops.pop(), n.trys.pop();
                                    continue;
                                default:
                                    if (!(s = n.trys, (s = s.length > 0 && s[s.length - 1]) || 6 !== i[0] && 2 !== i[0])) {
                                        n = 0;
                                        continue
                                    }
                                    if (3 === i[0] && (!s || i[1] > s[0] && i[1] < s[3])) {
                                        n.label = i[1];
                                        break
                                    }
                                    if (6 === i[0] && n.label < s[1]) {
                                        n.label = s[1], s = i;
                                        break
                                    }
                                    if (s && n.label < s[2]) {
                                        n.label = s[2], n.ops.push(i);
                                        break
                                    }
                                    s[2] && n.ops.pop(), n.trys.pop();
                                    continue
                            }
                            i = t.call(e, n)
                        } catch (e) {
                            i = [6, e], o = 0
                        } finally {
                            r = s = 0
                        }
                        if (5 & i[0]) throw i[1];
                        return {value: i[0] ? i[1] : void 0, done: !0}
                    }([i, a])
                }
            }
        };
        Object.defineProperty(t, "__esModule", {value: !0}), t.ClientUtil = void 0;
        var i = r(0), n = r(1), a = r(9), l = function () {
            function e() {
            }

            return e.checkIllegalCharacters = function (e) {
                return /^([0-9a-zA-Z#!$%&()`'+-;<=.>@^_~,\\*])+$/.test(e) && /^[^:/]*$/g.test(e)
            }, e.isUrl = function (e) {
                return !!(e.startsWith("rtmp://") || e.startsWith("https://") && e.endsWith(".flv") || e.startsWith("https://") && e.endsWith(".m3u8"))
            }, e.registerCallback = function (e, t, r) {
                var o, s;
                t.success && (o = t.success, r[e + "SuccessCallback"] = o), t.error && (s = t.error, r[e + "ErrorCallback"] = s)
            }, e.actionErrorCallback = function (e, t) {
                return t[e + "ErrorCallback"]
            }, e.actionSuccessCallback = function (e, t) {
                return t[e + "SuccessCallback"]
            }, e.logReportCallback = function (t, r, o, s) {
                e.registerCallback(t, {
                    success: function (t, s) {
                        for (var i = [], n = 2; n < arguments.length; n++) i[n - 2] = arguments[n];
                        e.dataReportEvent(r, o, t, s, i)
                    }
                }, s)
            }, e.actionLogReportCallback = function (t, r, o, s, i) {
                e.actionSuccessCallback(t, r) && e.actionSuccessCallback(t, r)(o, s)
            }, e.getServerError = function (e) {
                var t = {
                    1: "parse json error.",
                    1001: "login is processing.",
                    1002: "liveroom request error.",
                    1003: "zpush connect fail.",
                    1004: "zpush handshake fail.",
                    1005: "zpush login fail.",
                    1006: "user login state is wrong.",
                    1007: "got no zpush addr",
                    1008: "token error",
                    1009: "dispatch error",
                    1010: "token expired",
                    1011: "token format error",
                    2002: "biz channel error",
                    1e9: "liveroom cmd error, code:"
                };
                if (0 === e) return {code: 0, message: ""};
                var r = {code: 0, message: "liveroom cmd error"};
                return r.code = e, r.message = e > 1e9 ? t[1e9] + e : t[e] ? t[e] + " code:" + e : "unknown error code:" + e, r
            }, e.unregisterCallback = function (e, t) {
                delete t[e + "SuccessCallback"], delete t[e + "ErrorCallback"]
            }, e.decodeServerError = function (e, t) {
                var r = {code: -1, message: "server error"};
                return e > 1e9 && (r.code = e - 1e9 + 52e6), t && (r.message = t), r
            }, e.getLiveRoomError = function (e) {
                return e > 1e9 ? {
                    1105: "ROOM_MAX_USER_COUNT",
                    1012: "PUBLISHER_ERROR_REPETITIVE_PUBLISH_STREAM",
                    2002: "ROOM_ERROR_AUTHENTICATION_FAILED",
                    2003: "ROOM_ERROR_LOGIN_TIMEOUT"
                }[e - 1e9] || "" : {
                    1: "PARSE_JSON_ERROR",
                    1001: "LOGIN_PROCESSING",
                    1002: "LIVEROMM_REQUEST_ERROR",
                    1003: "ZPUSH_REQUEST_FAIL",
                    1004: "ZPUSH_REQUEST_FAIL",
                    1005: "ZPUSH_REQUEST_FAIL",
                    1006: "LOGIN_STATE_WRONG",
                    1007: "ZPUSH_REQUEST_FAIL",
                    1008: "TOKEN_ERROR",
                    1009: "DIAPATCH_ERROR",
                    1010: "TOKEN_EXPIRED",
                    1011: "TOKEN_ERROR",
                    1012: "SUBCMD_ERROR",
                    1101: "ZEGO_AUTH_ERROR",
                    2001: "BIZ_CHANNEL_ERROR",
                    2002: "BIZ_CHANNEL_ERROR"
                }[e] || "ROOM_INNER_ERROR"
            }, e.mixServerError = function (e) {
                var t = {
                    1: "MIXER_START_REQUEST_ERROR",
                    2: "MIXER_START_REQUEST_ERROR",
                    3: "MIXER_AUTHENTICATION_FAILED",
                    150: "MIXER_INPUT_STREAM_NOT_EXISTS",
                    151: "MIXER_START_REQUEST_ERROR",
                    152: "MIXER_STOP_REQUEST_ERROR",
                    153: "MIXER_INPUT_PARAMETERS_ERROR",
                    154: "MIXER_EXCEED_MAX_OUTPUT_COUNT",
                    155: "MIXER_INPUT_PARAMETERS_ERROR",
                    156: "MIXER_VIDEO_CONFIG_INVALID",
                    157: "MIXER_NO_SERVICES",
                    158: "MIXER_EXCEED_MAX_INPUT_COUNT",
                    159: "MIXER_START_REQUEST_ERROR",
                    160: "MIXER_NOT_OWNER_STOPMIXER",
                    170: "MIXER_WATERMARK_PARAMETERS_ERROR",
                    171: "MIXER_WATERMARK_NULL",
                    175: "MIXER_REPEAT_INPUT",
                    190: "MIXER_START_REQUEST_ERROR"
                }, r = "MIXER_INNER_ERROR";
                return e > 1e9 && t[e - 1e9] && (r = t[e - 1e9]), r
            }, e.getKickoutError = function (e) {
                var t = {};
                switch (e) {
                    case 1:
                        t.code = 63000001, t.message = "zpush multiple login kickout", t.name = "MULTIPLE_LOGIN_KICKOUT";
                        break;
                    case 2:
                        t.code = 63000002, t.message = "zpush manual kickout", t.name = "MANUAL_KICKOUT";
                        break;
                    case 3:
                        t.code = 63000003, t.message = "kickout reason = " + e;
                        break;
                    case 4:
                        t.code = 63000001, t.message = "zpush multiple login kickout", t.name = "MULTIPLE_LOGIN_KICKOUT";
                        break;
                    default:
                        t.code = e, t.message = "kickout reason = " + e
                }
                return t
            }, e.dataReportEvent = function (e, t, r, o, s) {
                switch (r) {
                    case"eventStart":
                        e.eventStart(t, o);
                        break;
                    case"eventEndWithMsgInfo":
                        e.eventEndWithMsgInfo(t, o, s[0]);
                        break;
                    case"addEventMsg":
                        e.addEventMsg(t, o, s[0], s[1]);
                        break;
                    case"addEvent":
                        e.addEvent(t, o);
                        break;
                    case"eventEnd":
                        e.eventEnd(t, o);
                        break;
                    case"addMsgInfo":
                        e.addMsgInfo(t, s[0])
                }
            }, e.isKeepTryLogin = function (e) {
                switch (e) {
                    case 1002:
                    case 1003:
                        return !0;
                    default:
                        return !1
                }
            }, e.mergeStreamList = function (e, t, r, o) {
                var s, i = [], n = [], a = [];
                r || (r = []);
                for (var l = 0; l < r.length; l++) if (r[l].anchor_id_name != e && r[l].user_id != e) {
                    s = !1;
                    for (var _ = 0; _ < t.length; _++) if (r[l].stream_id === t[_].stream_id) {
                        r[l].extra_info !== t[_].extra_info && a.push(r[l]), s = !0;
                        break
                    }
                    s || i.push(r[l])
                }
                for (var d = 0; d < t.length; d++) {
                    s = !1;
                    for (var u = 0; u < r.length; u++) if (t[d].stream_id === r[u].stream_id) {
                        s = !0;
                        break
                    }
                    s || n.push(t[d])
                }
                t.splice(0);
                for (l = 0; l < r.length; l++) t.push(r[l]);
                o(i, n, a)
            }, e.checkInteger = function (e, t) {
                return 0 == t ? "number" == typeof e && e % 1 == 0 && e >= 0 : "number" == typeof e && e % 1 == 0 && e > 0
            }, e.checkValidNumber = function (e, t, r) {
                return t = t || 1, r = r || 1e4, "number" == typeof e && e % 1 == 0 && e >= t && e <= r
            }, e.uuid = function (e, t) {
                var r, o = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz".split(""), s = [];
                if (t = t || o.length, e) for (r = 0; r < e; r++) s[r] = o[0 | Math.random() * t]; else {
                    var i = void 0;
                    for (s[8] = s[13] = s[18] = s[23] = "-", s[14] = "4", r = 0; r < 36; r++) s[r] || (i = 0 | 16 * Math.random(), s[r] = o[19 == r ? 3 & i | 8 : i])
                }
                return s.join("")
            }, e.supportDetection = function (e, t, r, i) {
                return o(this, void 0, void 0, (function () {
                    var o, n, a, l, _, d, u, E;
                    return s(this, (function (s) {
                        switch (s.label) {
                            case 0:
                                return o = {
                                    webRTC: !1,
                                    customCapture: !1,
                                    camera: !1,
                                    microphone: !1,
                                    videoCodec: {H264: !1, H265: !1, VP8: !1, VP9: !1},
                                    screenSharing: e,
                                    errInfo: {}
                                }, i && "screenSharing" === i ? [2, t({
                                    result: e,
                                    errInfo: o.errInfo
                                })] : i && "customCapture" !== i || (((n = document.createElement("video")).captureStream || n.mozCaptureStream) && (o.customCapture = !0), "customCapture" !== i) ? (a = navigator && navigator.mediaDevices && navigator.mediaDevices.getUserMedia, l = "https:" !== window.location.protocol && "file:" !== window.location.protocol && -1 == window.location.hostname.indexOf("127.0.0.1") && -1 == window.location.hostname.indexOf("localhost"), i && "camera" !== i && "microphone" !== i ? [3, 9] : a ? l ? (o.camera = !1, console.error("webrtc requires https or localhost"), [3, 9]) : [3, 1] : [3, 9]) : (t({
                                    result: o.customCapture,
                                    errInfo: o.errInfo
                                }), [2]);
                            case 1:
                                if (i && "camera" !== i) return [3, 5];
                                s.label = 2;
                            case 2:
                                return s.trys.push([2, 4, , 5]), [4, navigator.mediaDevices.getUserMedia({video: !0})];
                            case 3:
                                return (_ = s.sent()) && (o.camera = !0) && _.getTracks().forEach((function (e) {
                                    return e.stop()
                                })), [3, 5];
                            case 4:
                                return d = s.sent(), o.errInfo.camera = {
                                    name: d.name,
                                    message: d.message
                                }, console.error("camera devices detect error: ", d.name, d.message), [3, 5];
                            case 5:
                                if (i && "microphone" !== i) return [3, 9];
                                s.label = 6;
                            case 6:
                                return s.trys.push([6, 8, , 9]), [4, navigator.mediaDevices.getUserMedia({audio: !0})];
                            case 7:
                                return (u = s.sent()) && (o.microphone = !0) && u.getTracks().forEach((function (e) {
                                    return e.stop()
                                })), [3, 9];
                            case 8:
                                return E = s.sent(), o.errInfo.microphone = {
                                    name: E.name,
                                    message: E.message
                                }, console.error("microphone devices detect error: ", E.name, E.message), [3, 9];
                            case 9:
                                return "camera" === i || "microphone" === i ? (t({
                                    result: o[i],
                                    errInfo: o.errInfo
                                }), [2]) : (this.supportVideoCodeType((function (e, r) {
                                    i || (o.videoCodec.H264 = e.H264, o.videoCodec.H265 = e.H265, o.videoCodec.VP8 = e.VP8, o.videoCodec.VP9 = e.VP9, o.webRTC = e.webRTC), r && ("string" == typeof r ? o.errInfo.extendedDate = r : o.errInfo.webRTC = {
                                        name: r.name,
                                        message: r.message
                                    }, console.error("videoCodec detect error: " + r)), t && t(i ? {
                                        result: e[i],
                                        errInfo: o.errInfo
                                    } : o)
                                }), r, i), [2])
                        }
                    }))
                }))
            }, e.getDevices = function (e, t) {
                void 0 !== navigator.mediaDevices && void 0 !== navigator.mediaDevices.enumerateDevices ? navigator.mediaDevices.enumerateDevices().then((function (t) {
                    for (var r = [], o = [], s = [], i = 0; i < t.length; i++) {
                        var n = t[i];
                        "audioinput" === n.kind && r.push({
                            deviceName: n.label,
                            deviceID: n.deviceId
                        }), "audiooutput" === n.kind && o.push({
                            deviceName: n.label,
                            deviceID: n.deviceId
                        }), "videoinput" === n.kind && s.push({deviceName: n.label, deviceID: n.deviceId})
                    }
                    e && e({microphones: r, speakers: o, cameras: s})
                })).catch((function (e) {
                    console.error("enumerate devices wrong " + e), t && t(n.ZegoRTCLogEvent.kZegoTaskEnumDevices.error.kEnumDevicesError)
                })) : t && t(n.ZegoRTCLogEvent.kZegoTaskEnumDevices.error.kBrowserNotSupportError)
            }, e.compareVersion = function (e, t) {
                e = e.split("."), t = t.split(".");
                for (var r = Math.max(e.length, t.length); e.length < r;) e.push("0");
                for (; t.length < r;) t.push("0");
                for (var o = 0; o < r; o++) {
                    var s = parseInt(e[o]), i = parseInt(t[o]);
                    if (s > i) return 1;
                    if (s < i) return -1
                }
                return 0
            }, e.isSupportLive = function (e, t) {
                var r = "当前微信版本过低，无法使用相关组件", o = "需要摄像头和录音功能的授权", s = wx.getSystemInfoSync().SDKVersion,
                    i = {code: 0, msg: ""};
                this.compareVersion(s, "1.7.0") < 0 && (i = {
                    code: 10001,
                    msg: r
                }, e && e(i)), wx.getSetting({
                    success: function (t) {
                        var r = t.authSetting;
                        r["scope.camera"] && r["scope.record"] || (i = {code: 10002, msg: o}), e && e(i)
                    }, fail: function (e) {
                        console.error("get setting error", e), t && t(e)
                    }
                })
            }, e.supportVideoCodeType = function (e, t, r) {
                return o(this, void 0, void 0, (function () {
                    var o, i, n, l, _, d, u, E, g, c;
                    return s(this, (function (s) {
                        switch (s.label) {
                            case 0:
                                return o = {
                                    webRTC: !1,
                                    H264: !1,
                                    VP8: !1,
                                    VP9: !1,
                                    H265: !1
                                }, r ? 1 !== t || "VP8" !== r && "H264" !== r ? [3, 2] : [4, (c = new a.CheckModule).checkSupportByType(r)] : [3, 2];
                            case 1:
                                return "boolean" == typeof (i = s.sent()) ? (o[r] = i, [2, e(o)]) : (o[r] = !1, [2, e(o, i)]);
                            case 2:
                                if ("webRTC" !== r && 1 !== t) return [3, 7];
                                s.label = 3;
                            case 3:
                                return s.trys.push([3, 5, , 6]), [4, (new RTCPeerConnection).createOffer({
                                    offerToReceiveAudio: !0,
                                    offerToReceiveVideo: !0
                                })];
                            case 4:
                                return s.sent(), o.webRTC = !0, [3, 6];
                            case 5:
                                return n = s.sent(), e && e(o, n), [3, 6];
                            case 6:
                                if ("webRTC" === r) return [2, e(o)];
                                s.label = 7;
                            case 7:
                                if (1 === t) {
                                    for (l = "", d = [], u = 0, E = _ = ["VP8", "H264"]; u < E.length; u++) g = E[u], c = new a.CheckModule, d.push(c.checkSupportByType(g));
                                    return Promise.all(d).then((function (t) {
                                        t.forEach((function (e, t) {
                                            "boolean" == typeof e ? o[_[t]] = !0 : (o[_[t]] = !1, l = e)
                                        })), l ? e(o, l) : e(o)
                                    })), [2]
                                }
                                try {
                                    (new RTCPeerConnection).createOffer({
                                        offerToReceiveAudio: !0,
                                        offerToReceiveVideo: !0
                                    }).then((function (t) {
                                        if (o.webRTC = !0, t && t.sdp) {
                                            var s = t.sdp.split("\r\n");
                                            if (o.H264 = s.some((function (e) {
                                                return e.startsWith("a=rtpmap:") && e.indexOf("H264/") > -1
                                            })), "H264" === r) return e(o);
                                            if (o.VP8 = s.some((function (e) {
                                                return e.startsWith("a=rtpmap:") && e.indexOf("VP8/") > -1
                                            })), "VP8" === r) return e(o);
                                            o.VP9 = s.some((function (e) {
                                                return e.startsWith("a=rtpmap:") && e.indexOf("VP9/") > -1
                                            })), o.H265 = s.some((function (e) {
                                                return e.startsWith("a=rtpmap:") && e.indexOf("H265/") > -1
                                            })), e && e(o)
                                        }
                                    }))
                                } catch (t) {
                                    e && e(o, t)
                                }
                                return [2]
                        }
                    }))
                }))
            }, e.inlineWorker = function (e) {
                if (Worker && e) {
                    var t = e.toString().trim().match(/^function\s*\w*\s*\([\w\s,]*\)\s*{([\w\W]*?)}$/)[1],
                        r = URL.createObjectURL(new window.Blob([t], {type: "text/javascript"}));
                    return new Worker(r)
                }
                return null
            }, e.getBrowser = function () {
                var e = window.navigator.userAgent, t = null != window.ActiveXObject && -1 != e.indexOf("MSIE"),
                    r = -1 != e.indexOf("Firefox"), o = null != window.opr, s = e.indexOf("Chrome") && window.chrome,
                    i = -1 != e.indexOf("Safari") && -1 != e.indexOf("Version");
                return t ? "IE" : r ? "Firefox" : o ? "Opera" : s ? "Chrome" : i ? "Safari" : "Unkown"
            }, e.getPublisherStateType = function (e) {
                return 0 == e || 1 == e ? 0 == e ? "PUBLISHING" : "NO_PUBLISH" : "PUBLISH_REQUESTING"
            }, e.getPlayerStateType = function (e) {
                return 0 == e || 1 == e ? 0 == e ? "PLAYING" : "NO_PLAY" : "PLAY_REQUESTING"
            }, e.getSteamUpdateType = function (e) {
                return 0 == e ? "DELETE" : "ADD"
            }, e.checkScreenParams = function (t, r) {
                if ("object" == typeof t && void 0 !== t.videoQuality && !e.checkInteger(t.videoQuality)) return r(n.ZegoRTCLogEvent.kZegoTaskCreateStream.error.kParamError, " videoQuality must be integer number"), !1;
                if ("object" == typeof t && 4 === t.videoQuality) {
                    if (void 0 === t.bitRate) return r(n.ZegoRTCLogEvent.kZegoTaskCreateStream.error.kParamError, " bitrate is required when videoQuality is 4"), !1;
                    if (!e.checkInteger(t.bitRate)) return r(n.ZegoRTCLogEvent.kZegoTaskCreateStream.error.kParamError, " bitrate must be integer number"), !1;
                    if (t.bitRate > 10240) return r(n.ZegoRTCLogEvent.kZegoTaskCreateStream.error.kParamError, " bitrate cannot greater than 10 Mbps"), !1;
                    if (void 0 === t.frameRate) return r(n.ZegoRTCLogEvent.kZegoTaskCreateStream.error.kParamError, " frameRate is required when videoQuality is 4"), !1;
                    if (!e.checkInteger(t.frameRate)) return r(n.ZegoRTCLogEvent.kZegoTaskCreateStream.error.kParamError, " frameRate must be integer number"), !1;
                    if (void 0 === t.width) return r(n.ZegoRTCLogEvent.kZegoTaskCreateStream.error.kParamError, " width is required when videoQuality is 4"), !1;
                    if (!e.checkInteger(t.width)) return r(n.ZegoRTCLogEvent.kZegoTaskCreateStream.error.kParamError, " width must be integer number"), !1;
                    if (void 0 === t.height) return r(n.ZegoRTCLogEvent.kZegoTaskCreateStream.error.kParamError, " height is required when videoQuality is 4"), !1;
                    if (!e.checkInteger(t.height)) return r(n.ZegoRTCLogEvent.kZegoTaskCreateStream.error.kParamError, " height must be integer number"), !1
                }
                return !0
            }, e.checkCameraParams = function (t, r) {
                return t.width && e.checkValidNumber(t.width) ? t.height && e.checkValidNumber(t.height) ? t.frameRate && e.checkValidNumber(t.frameRate) ? !(!t.bitRate || !e.checkValidNumber(t.bitRate)) || (r(n.ZegoRTCLogEvent.kZegoTaskCreateStream.error.kParamError, " bitrate must be integer number"), !1) : (r(n.ZegoRTCLogEvent.kZegoTaskCreateStream.error.kParamError, " frameRate must be integer number"), !1) : (r(n.ZegoRTCLogEvent.kZegoTaskCreateStream.error.kParamError, " height must be integer number"), !1) : (r(n.ZegoRTCLogEvent.kZegoTaskCreateStream.error.kParamError, " width must be integer number"), !1)
            }, e.isParamEmpty = function (e) {
                return null != e && "" !== e
            }, e.isTypeString = function (e) {
                return "string" == typeof e
            }, e.isTooLong = function (e, t) {
                return !(e.length >= t)
            }, e.isReDispatch = function (e) {
                var t = e.message.match(/action:(\d+)/), r = t ? Number(t[1]) : NaN;
                return [n.ZegoRTCLogEvent.kZegoTaskPlayStart.error.kTTLOverTimeError, n.ZegoRTCLogEvent.kZegoTaskPlayStart.error.kClientIPChangedError, n.ZegoRTCLogEvent.kZegoTaskPublishStart.error.kTTLOverTimeError, n.ZegoRTCLogEvent.kZegoTaskPublishStart.error.kClientIPChangedError].includes(e) || [6].includes(r)
            }, e.arrAvg = function (e, t, r) {
                return e.push(t), e.length > r && e.shift(), e.reduce((function (e, t) {
                    return e + t
                })) / e.length
            }, e.getNetQuality = function (e, t, r) {
                if (void 0 !== r) {
                    return .15 * this.calcQualityOfJitter(r) + .85 * Math.min(this.calcQualityOfRtt(e), this.calcQualityOfLostRate(t, !1))
                }
                return Math.min(this.calcQualityOfRtt(e), this.calcQualityOfLostRate(t, !0))
            }, e.calcQualityOfRtt = function (e) {
                return e < 600 ? 97 - Math.pow(.09 * e, 1.1) : 18 * Math.exp(.002 * (600 - e))
            }, e.calcQualityOfJitter = function (e) {
                return e <= 50 ? 98 - Math.pow(e, 1.15) : i.QUALITY_CONSTANT.PoorMinQuality
            }, e.calcQualityOfLostRate = function (e, t) {
                if (t) {
                    var r = e;
                    return r <= 55 ? 99 - Math.pow(.8 * r, 1.18) : i.QUALITY_CONSTANT.PoorMinQuality
                }
                var o = 100 * e;
                return o <= 40 ? 96 - Math.pow(o, 1.22) : i.QUALITY_CONSTANT.PoorMinQuality
            }, e.quality2QualityGrade = function (e) {
                i.QualityGrade.Unknown;
                return e >= i.QUALITY_CONSTANT.ExcellentMinQuality ? i.QualityGrade.Excellent : e >= i.QUALITY_CONSTANT.GoodMinQuality ? i.QualityGrade.Good : e >= i.QUALITY_CONSTANT.MiddleMinQuality ? i.QualityGrade.Middle : e >= i.QUALITY_CONSTANT.PoorMinQuality ? i.QualityGrade.Poor : i.QualityGrade.Die
            }, e
        }();
        t.ClientUtil = l
    }, function (e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0}), t.errorCodeList = t.innerErrList = void 0, t.innerErrList = {
            SUCCESS: {
                code: 0,
                message: ""
            }, SEND_MSG_TIMEOUT: {code: "Error.Timeout", message: "send custom message timeout."}
        }, t.errorCodeList = {
            NOT_LOGIN: {code: 1000002, message: "not login room"},
            STREAMID_TOO_LONG: {code: 1000014, message: "stream ID is too long"},
            STREAM_ID_NULL: {code: 1000015, message: "streamID is empty"},
            STREAM_ID_INVALID_CHARACTER: {code: 1000016, message: "stream ID contains illegal characters"},
            NETWORK_BROKEN: {code: 1000017, message: "network is broken"},
            LOCALSTREAM_WRONG: {code: 1000018, message: "local stream wrong"},
            GET_SOUND_LEVEL_FAIL: {code: 1000019, message: "get sound level error"},
            INPUT_PARAM: {code: 1100001, message: "input parm error."},
            TIMEOUT: {code: 1100002, message: "network timeout."},
            SOCKET_CLOSE: {code: 1100003, msg: "socket close"},
            UNKNOWN_SERVER_ERROR: {code: 1100999, message: "unknown server error"},
            INIT_SDK_WRONG: {code: 1101e3, message: "init sdk wrong"},
            WX_GET_SETTING_FAIL: {code: 1101001, message: "wx get setting fail"},
            USER_ID_NULL: {code: 1002005, message: "user ID is empty"},
            USER_ID_INVALID_CHARACTER: {code: 1002006, message: "user ID contains illegal characters"},
            USER_ID_TOO_LONG: {code: 1002007, message: "user ID is too long"},
            USER_NAME_NULL: {code: 1002008, message: "username is empty"},
            USER_NAME_TOO_LONG: {code: 1002010, message: "username is too long"},
            ROOM_ID_NULL: {code: 1002011, message: "room ID is empty"},
            ROOM_ID_INVALID_CHARACTER: {code: 1002012, message: "room ID contains illegal characters"},
            ROOM_ID_TOO_LONG: {code: 1002013, message: "room ID is too long"},
            LOGIN_TIMEOUT: {code: 1002031, message: "login timeout"},
            ROOM_MAX_USER_COUNT: {code: 1002034, message: "users logging into the room exceeds the maximum number"},
            MULTIPLE_LOGIN_KICKOUT: {code: 1002050, message: "kickout may be the same user ID login other"},
            ROOM_RETRY_TIMEOUT: {code: 1002053, message: "network is broken and login fail."},
            MANUAL_KICKOUT: {code: 1002055, message: "server has sent a signal to kick out"},
            ROOM_INNER_ERROR: {code: 1002099, message: "room inner error"},
            HEARTBEAT_TIMEOUT: {code: 1102001, message: "heartbeat timeout."},
            PARSE_JSON_ERROR: {code: 1102011, message: "parse json error."},
            LOGIN_PROCESSING: {code: 1102012, message: "login is processing."},
            LIVEROOM_REQUEST_ERROR: {code: 1102013, message: "liveroom request error."},
            ZPUSH_REQUEST_FAIL: {code: 1102014, message: "zpush request fail."},
            LOGIN_STATE_WRONG: {code: 1102015, message: "user login state is wrong."},
            TOKEN_ERROR: {code: 1102016, message: "token error"},
            DISPATCH_ERROR: {code: 1102017, message: "dispatch error"},
            TOKEN_EXPIRED: {code: 1102018, message: "token expired"},
            SUBCMD_ERROR: {code: 1102019, message: "subcmd error."},
            ZEGO_AUTH_ERROR: {code: 1102020, message: "zego auth error."},
            BIZ_CHANNEL_ERROR: {code: 1102021, message: "biz channel error."},
            DISPATCH_TIMEOUT: {code: 1102022, message: "dispatch request timeout"},
            CONNECT_FAILED: {code: 1102023, message: "connect signal fail"},
            INVALID_CHANNEL: {code: 1102024, message: "invalid channel"},
            PUBLISHER_MEDIA_SERVER_FORBID: {code: 1003025, message: "stream is forbided by media server"},
            PUBLISHER_EXTRA_INFO_NULL: {code: 1003050, message: "extra info of publishing stream is null"},
            PUBLISHER_EXTRA_INFO_TOO_LONG: {code: 1003051, message: "stream extra info is too long"},
            PUBLISHER_PARAM: {code: 1103001, message: "input param error"},
            PUBLISHER_BROWSER_NOT_SUPPORT: {code: 1103002, message: "browser do not support"},
            PUBLISHER_DISPATCH_FAIL: {code: 1103003, message: "dispatch request error"},
            PUBLISHER_SCREEN_FAILED: {code: 1103010, message: "screen fail"},
            ENUMERATE_DEVICES_FAIL: {code: 1103011, message: "enumerate devices fail"},
            PUBLISHER_DISPATCH_REQUEST_FAIL: {code: 1103020, message: "dispatch request fail"},
            PUBLISHER_SESSION_REQUEST_FAIL: {code: 1103021, message: "session request fail"},
            PUBLISHER_CREATE_OFFER_ERROR: {code: 1103022, message: "create offer error"},
            PUBLISHER_SET_LOCAL_DESC_ERROR: {code: 1103023, message: "setLocalDescription error"},
            PUBLISHER_MEDIA_DESC_ERROR: {code: 1103024, message: "mediaDesc error"},
            PUBLISHER_SET_REMOTE_DESC_ERROR: {code: 1103025, message: "other side offer error"},
            PUBLISHER_CANDIDATE_ERROR: {code: 1103026, message: "candidate error"},
            PUBLISHER_SESSION_CLOSED: {code: 1103027, message: "server session closed"},
            PUBLISHER_MEDIA_CONNECTION_ERROR: {code: 1103028, message: "ice connection error"},
            PUBLISHER_CONSTRAINTS_ERROR: {code: 1103029, message: "constraint error"},
            PUBLISHER_SERVER_NEGO_TIMEOUT: {code: 1103030, message: "negotiation timeout"},
            PUBLISH_NOT_PUBLISH: {code: 1103040, message: "publisher not found"},
            PUBLISH_DEVICE_OUT_ERR: {code: 1103041, message: "device change "},
            PUBLISH_SCREEN_CANCELED: {code: 1103042, message: "screen canceled"},
            PUBLISH_SCREEN_NOT_SUPPORT: {code: 1103043, message: "screen not support"},
            PUBLISH_NO_PREVIEW: {code: 1103044, message: "stream is not from zego"},
            VIDEO_DEVICE_FALSE: {code: 1103045, message: "video is false"},
            AUDIO_DEVICE_FALSE: {code: 1103046, message: "audio is false"},
            TRACK_NOT_FOUND: {code: 1103047, message: "track is not found"},
            DEVICE_NOT_FOUND: {code: 1103048, message: "device is not found"},
            REPEATED_PULL: {code: 1103049, message: "repeated pull same stream"},
            PUBLISHER_WEBSOCKET_DISCONNECTED: {code: 1103050, message: "websocket disconnected"},
            PUBLISHER_RETRY_TIMEOUT: {code: 1103051, message: "publisher retry timeout"},
            PUBLISHER_CDN_PUSH_ERROR: {code: 1103052, message: "publisher cdn push error"},
            PUBLISHER_HTTPS_REQUIRED: {code: 1103053, message: "https is required"},
            PUBLISHER_NO_PREVIEW: {code: 1103054, message: "no preview"},
            PUBLISHER_STREAM_NO_FOUND: {code: 1103055, message: "publish stream no found"},
            PUBLISHER_IS_PUBLISHING: {code: 1103056, message: "publish is publishing"},
            PUBLISHER_DECODE_AUDIO_FAIL: {code: 1103057, message: "decode audio data fail"},
            PUBLISHER_CLIENT_IP_CHANGED: {code: 1103058, message: "client ip changed"},
            PUBLISHER_TTL_OVERTIME: {code: 1103059, message: "ttl over time"},
            PUBLISHER_SESSION_TIMEOUT: {code: 1103060, message: "session request timeout"},
            PUBLISHER_GET_USER_MEDIA_FAIL: {code: 1103061, message: "get media fail"},
            PUBLISHER_UPDATE_STREAM_INFO_FAIL: {code: 1103062, message: "update stream info fail"},
            PUBLISH_TARGET_NO_RESPONSE: {code: 1103063, message: "publish target no response"},
            PLAYER_PARAM: {code: 1104001, message: "input parm error"},
            PLAYER_DISPATCH_REQUEST_FAIL: {code: 1104020, message: "dispatch request fail"},
            PLAYER_SESSION_REQUEST_FAIL: {code: 1104021, message: "session request fail"},
            PLAYER_CREATE_OFFER_ERROR: {code: 1104022, message: "create offer error"},
            PLAYER_SET_LOCAL_DESC_ERROR: {code: 1104023, message: "setLocalDescription error"},
            PLAYER_MEDIA_DESC_ERROR: {code: 1104024, message: "mediaDesc error"},
            PLAYER_SET_REMOTE_DESC_ERROR: {code: 1104025, message: "other side offer error"},
            PLAYER_CANDIDATE_ERROR: {code: 1104026, message: "candidate error"},
            PLAYER_SESSION_CLOSED: {code: 1104027, message: "server session closed"},
            PLAYER_MEDIA_CONNECTION_ERROR: {code: 1104028, message: "ice connection error"},
            PLAYER_WEBSOCKET_DISCONNECTED: {code: 1104029, message: "websocket disconnected"},
            PLAYER_SERVER_NEGO_TIMEOUT: {code: 1104030, message: "negotiation timeout"},
            PLAYER_RETRY_TIMEOUT: {code: 1104031, message: "player retry timeout"},
            PLAYER_IS_PLAYING: {code: 1104032, message: "player is playing"},
            PLAYER_CLIENT_IP_CHANGED: {code: 1104033, message: "client ip changed"},
            PLAYER_TTL_OVERTIME: {code: 1104034, message: "ttl is over time"},
            PLAYER_SESSION_RESET: {code: 1104035, message: "reset session push"},
            PLAYER_SESSION_TIMEOUT: {code: 1104036, message: "session request timeout"},
            PLAYER_PROBE_TIMEOUT: {code: 1104037, message: "probe time out"},
            PLAYER_UNSUPPORTED_PROTOCOL: {code: 1104038, message: "resource mode is not supported"},
            MIXER_NO_SERVICES: {code: 1005e3, message: "no mix stream service"},
            MIXER_TASK_ID_NULL: {code: 1005001, message: "mixer task is null"},
            MIXER_TASK_ID_TOO_LONG: {code: 1005002, message: "task ID is too long"},
            MIXER_TASK_ID_INVALID_CHARACTER: {code: 1005003, message: "task ID contains illegal characters"},
            MIXER_NO_OUTPUT_TARGET: {code: 1005005, message: "task configuration does not specify output"},
            MIXER_OUTPUT_TARGET_INVALID: {code: 1005006, message: "stream output target is incorrect"},
            MIXER_START_REQUEST_ERROR: {
                code: 1005010,
                message: "start mixer task fail, possibly due to network reasons"
            },
            MIXER_STOP_REQUEST_ERROR: {code: 1005011, message: "stop mixer task fail, possibly due to network reasons"},
            MIXER_NOT_OWNER_STOP_MIXER: {
                code: 1005012,
                message: " maxed task must be stopped by the start user of the task"
            },
            MIXER_INPUTLIST_NULL: {code: 1005020, message: "Mixed stream task input list is null"},
            MIXER_OUTPUTLIST_NULL: {code: 1005021, message: "Mixed stream task output list is null"},
            MIXER_VIDEO_CONFIG_INVALID: {code: 1005023, message: "invalid mixed stream task video configuration"},
            MIXER_EXCEED_MAX_INPUT_COUNT: {code: 1005025, message: "more than the maximum number of input streams"},
            MIXER_INPUT_STREAM_NOT_EXISTS: {code: 1005026, message: "Input stream does not exist"},
            MIXER_INPUT_PARAMETERS_ERROR: {code: 1005027, message: "mix stream input parameters are wrong"},
            MIXER_EXCEED_MAX_OUTPUT_COUNT: {code: 1005030, message: "more than the maximum number of output streams"},
            MIXER_AUTHENTICATION_FAILED: {code: 1005050, message: "mixed stream authentication failed"},
            MIXER_WATERMARK_NULL: {code: 1005061, mag: "input watermark is null"},
            MIXER_WATERMARK_PARAMETERS_ERROR: {code: 1005062, message: "input watermark parameter is wrong"},
            MIXER_WATERMARK_URL_INVALID: {code: 1005063, message: "illegal input watermark URL"},
            MIXER_BACKGROUND_IMAGE_URL_INVALID: {code: 1005067, message: "illegal input background image URL"},
            MIXER_REPEAT_INPUT: {code: 1005099, message: "mix stream input repeat"},
            MIXER_INNER_ERROR: {code: 1005099, message: "mixer internal error"},
            DEVICE_ERROR_TYPE_UNPLUGGED: {code: 1006006, message: "the device is unplugged"},
            IM_CONTENT_NULL: {code: 1009001, message: "message content is empty"},
            IM_CONTENT_TOO_LONG: {code: 1009002, message: "message content is too long"},
            IM_SEND_FAILED: {code: 1009010, message: "failed to send message"},
            FREQ_LIMITED: {code: 1109001, message: "frequency limited."}
        }
    }, function (e, t, r) {
        "use strict";
        var o, s = this && this.__extends || (o = function (e, t) {
            return (o = Object.setPrototypeOf || {__proto__: []} instanceof Array && function (e, t) {
                e.__proto__ = t
            } || function (e, t) {
                for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r])
            })(e, t)
        }, function (e, t) {
            function r() {
                this.constructor = e
            }

            o(e, t), e.prototype = null === t ? Object.create(t) : (r.prototype = t.prototype, new r)
        });
        Object.defineProperty(t, "__esModule", {value: !0}), t.ZegoExpressEngine = void 0;
        var i = r(0), n = r(7), a = function (e) {
            function t(t, r) {
                var o = this;
                return i.ZegoExpressWebRTMEngine.version = "2.8.0", (o = e.call(this, t, r, 1) || this).zegoWechatMini = new n.ZegoWechatMini(o.logger, o.dataReport, o.zegoWebRTM), o
            }

            return s(t, e), t.prototype.getNextUrl = function (e) {
                return this.zegoWechatMini.getNextUrl(e)
            }, t.prototype.startPlayingStream = function (e, t) {
                return this.zegoWechatMini.startPlayingStream(e, t)
            }, t.prototype.stopPlayingStream = function (e) {
                return this.zegoWechatMini.stopPlayingStream(e)
            }, t.prototype.updatePlayerNetStatus = function (e, t) {
                return this.zegoWechatMini.updatePlayerNetStatus(e, t)
            }, t.prototype.updatePlayerState = function (e, t) {
                return this.zegoWechatMini.updatePlayerState(e, t)
            }, t.prototype.checkSystemRequirements = function () {
                return this.zegoWechatMini.checkSystemRequirements()
            }, t.prototype.setMixerTaskConfig = function (e) {
                return this.zegoWechatMini.setMixerTaskConfig(e)
            }, t.prototype.startPublishingStream = function (e, t) {
                return this.zegoWechatMini.startPublishingStream(e, t)
            }, t.prototype.startMixerTask = function (e) {
                return this.zegoWechatMini.startMixerTask(e)
            }, t.prototype.stopPublishingStream = function (e) {
                return this.zegoWechatMini.stopPublishingStream(e)
            }, t.prototype.addPublishCdnUrl = function (e, t) {
                return 3 === arguments.length ? this.zegoWechatMini.addPublishCdnUrl(arguments[0], arguments[2]) : this.zegoWechatMini.addPublishCdnUrl(e, t)
            }, t.prototype.off = function (e, t) {
                return this.zegoWebRTM.stateCenter.listenerList[e] ? this.zegoWebRTM.off(e, t) : !!this.zegoWechatMini.stateCenter.listenerList[e] && this.zegoWechatMini.off(e, t)
            }, t.prototype.stopMixerTask = function (e) {
                return this.zegoWechatMini.stopMixerTask(e)
            }, t.prototype.on = function (e, t) {
                return this.zegoWebRTM.stateCenter.listenerList[e] ? this.zegoWebRTM.on(e, t) : !!this.zegoWechatMini.stateCenter.listenerList[e] && this.zegoWechatMini.on(e, t)
            }, t.prototype.removePublishCdnUrl = function (e, t) {
                return 3 === arguments.length ? this.zegoWechatMini.removePublishCdnUrl(arguments[0], arguments[2]) : this.zegoWechatMini.removePublishCdnUrl(e, t)
            }, t.prototype.setStreamExtraInfo = function (e, t) {
                return this.zegoWechatMini.setStreamExtraInfo(e, t)
            }, t
        }(i.ZegoExpressWebRTMEngine);
        t.ZegoExpressEngine = a
    }, function (e, t, r) {
        "undefined" != typeof self && self, e.exports = function (e) {
            var t = {};

            function r(o) {
                if (t[o]) return t[o].exports;
                var s = t[o] = {i: o, l: !1, exports: {}};
                return e[o].call(s.exports, s, s.exports, r), s.l = !0, s.exports
            }

            return r.m = e, r.c = t, r.d = function (e, t, o) {
                r.o(e, t) || Object.defineProperty(e, t, {enumerable: !0, get: o})
            }, r.r = function (e) {
                "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {value: "Module"}), Object.defineProperty(e, "__esModule", {value: !0})
            }, r.t = function (e, t) {
                if (1 & t && (e = r(e)), 8 & t) return e;
                if (4 & t && "object" == typeof e && e && e.__esModule) return e;
                var o = Object.create(null);
                if (r.r(o), Object.defineProperty(o, "default", {
                    enumerable: !0,
                    value: e
                }), 2 & t && "string" != typeof e) for (var s in e) r.d(o, s, function (t) {
                    return e[t]
                }.bind(null, s));
                return o
            }, r.n = function (e) {
                var t = e && e.__esModule ? function () {
                    return e.default
                } : function () {
                    return e
                };
                return r.d(t, "a", t), t
            }, r.o = function (e, t) {
                return Object.prototype.hasOwnProperty.call(e, t)
            }, r.p = "", r(r.s = 12)
        }([function (e, t, r) {
            "use strict";
            var o;
            Object.defineProperty(t, "__esModule", {value: !0}), t.createZegoWebSocket = t.LoggerStateCenter = t.ZegoDataReport = t.ZegoLogger = t.LinkedList = t.ListNode = t.getReportSeq = t.getSeq = t.REPORT_ACTION = t.E_CLIENT_TYPE = t.ENUM_PUSH_SIGNAL_SUB_CMD = t.ENUM_SIGNAL_SUB_CMD = t.SERVER_ERROR_CODE = t.ENUM_STREAM_UPDATE_CMD = t.MINIUM_HEARTBEAT_INTERVAL = t.ENUM_NETWORK_STATE = t.ENUM_RUN_STATE = t.MAX_TRANS_DATA_LENGTH = t.MAX_TRANS_TYPE_LENGTH = t.MAX_MIX_TASK_ID_LENGTH = t.MAX_MESSAGE_LENGTH = t.MAX_ROOM_ID_LENGTH = t.MAX_USER_NAME_LENGTH = t.MAX_USER_ID_LENGTH = t.MAX_STREAM_ID_LENGTH = t.MAX_TRY_HEARTBEAT_COUNT = t.SEND_MSG_TIMEOUT = t.SEND_MSG_RESET = t.MAX_TRY_CONNECT_COUNT = t.ENUM_CONNECT_STATE = t.ENUM_SCREEM_RESOLUTION_TYPE = t.ENUM_RESOLUTION_TYPE = t.ENUM_SIGNAL_STATE = t.ERROR_CODES = t.ENUM_REMOTE_TYPE = t.LOG_LEVEL = t.ENUM_LOG_LEVEL = t.ROOMVERSION = t.PROTO_VERSION = void 0, t.PROTO_VERSION = "1.8.0", t.ROOMVERSION = "V1", function (e) {
                e[e.debug = 0] = "debug", e[e.info = 1] = "info", e[e.warn = 2] = "warn", e[e.error = 3] = "error", e[e.report = 99] = "report", e[e.disable = 100] = "disable"
            }(t.ENUM_LOG_LEVEL || (t.ENUM_LOG_LEVEL = {})), t.LOG_LEVEL = {
                debug: 0,
                info: 1,
                warn: 2,
                error: 3,
                report: 99,
                disable: 100
            }, function (e) {
                e[e.disable = 0] = "disable", e[e.websocket = 1] = "websocket", e[e.https = 2] = "https"
            }(t.ENUM_REMOTE_TYPE || (t.ENUM_REMOTE_TYPE = {})), t.ERROR_CODES = {
                ROOM_SESSION_ID_ERR: 1000000152,
                FETCH_TRANS_UNKNOWN_CHANNEL: 1000001108,
                FETCH_TRANS_UNKNOWN_TYPE: 1000001109,
                FETCH_TRANS_WRONG_SEQ: 1000001110
            }, function (e) {
                e[e.disconnected = 0] = "disconnected", e[e.connecting = 1] = "connecting", e[e.connected = 2] = "connected"
            }(t.ENUM_SIGNAL_STATE || (t.ENUM_SIGNAL_STATE = {})), t.ENUM_RESOLUTION_TYPE = {
                LOW: {
                    width: 320,
                    height: 240,
                    frameRate: 15,
                    bitRate: 300
                },
                MEDIUM: {width: 640, height: 480, frameRate: 15, bitRate: 800},
                HIGH: {width: 1280, height: 720, frameRate: 20, bitRate: 1500}
            }, t.ENUM_SCREEM_RESOLUTION_TYPE = {
                LOW: {frameRate: 20, bitRate: 800},
                MEDIUM: {frameRate: 15, bitRate: 1200},
                HIGH: {frameRate: 5, bitRate: 2e3}
            }, t.ENUM_CONNECT_STATE = {
                disconnect: 0,
                connecting: 1,
                connected: 2
            }, t.MAX_TRY_CONNECT_COUNT = 1, t.SEND_MSG_RESET = 2, t.SEND_MSG_TIMEOUT = 1, t.MAX_TRY_HEARTBEAT_COUNT = 5, t.MAX_STREAM_ID_LENGTH = 256, t.MAX_USER_ID_LENGTH = 64, t.MAX_USER_NAME_LENGTH = 256, t.MAX_ROOM_ID_LENGTH = 128, t.MAX_MESSAGE_LENGTH = 1024, t.MAX_MIX_TASK_ID_LENGTH = 256, t.MAX_TRANS_TYPE_LENGTH = 128, t.MAX_TRANS_DATA_LENGTH = 4096, function (e) {
                e[e.logout = 0] = "logout", e[e.trylogin = 1] = "trylogin", e[e.login = 2] = "login"
            }(t.ENUM_RUN_STATE || (t.ENUM_RUN_STATE = {})), function (e) {
                e[e.offline = 0] = "offline", e[e.online = 1] = "online"
            }(t.ENUM_NETWORK_STATE || (t.ENUM_NETWORK_STATE = {})), t.MINIUM_HEARTBEAT_INTERVAL = 3e3, t.ENUM_STREAM_UPDATE_CMD = {
                added: 12001,
                deleted: 12002,
                updated: 12003
            }, t.SERVER_ERROR_CODE = 1e4, t.ENUM_SIGNAL_SUB_CMD = {
                none: 0,
                joinLiveRequest: 1001,
                joinLiveResult: 1002,
                joinLiveInvite: 1003,
                joinLiveStop: 1004
            }, t.ENUM_PUSH_SIGNAL_SUB_CMD = {
                none: 0,
                pushJoinLiveRequest: 11001,
                pushJoinLiveResult: 11002,
                pushJoinLiveInvite: 11003,
                pushJoinLiveStop: 11004
            }, function (e) {
                e[e.ClientType_None = 0] = "ClientType_None", e[e.ClientType_H5 = 1] = "ClientType_H5", e[e.ClientType_SmallProgram = 2] = "ClientType_SmallProgram", e[e.ClientType_Webrtc = 3] = "ClientType_Webrtc"
            }(t.E_CLIENT_TYPE || (t.E_CLIENT_TYPE = {})), t.REPORT_ACTION = {
                eventStart: "eventStart",
                eventEndWithMsgInfo: "eventEndWithMsgInfo",
                addEventMsg: "addEventMsg",
                addEvent: "addEvent",
                eventEnd: "eventEnd",
                addMsgInfo: "addMsgInfo"
            }, t.getSeq = (o = 1, function () {
                return o++
            }), t.getReportSeq = function () {
                var e = 1;
                return function () {
                    return e++
                }
            }();
            var s = function () {
                function e(e, t) {
                    void 0 === e && (e = null), void 0 === t && (t = null), this.next = null, this.prev = null, this._id = e, this._data = t
                }

                return Object.defineProperty(e.prototype, "id", {
                    get: function () {
                        return this._id ? this._id : null
                    }, set: function (e) {
                        this._id = e
                    }, enumerable: !1, configurable: !0
                }), Object.defineProperty(e.prototype, "data", {
                    get: function () {
                        return this._data
                    }, set: function (e) {
                        this._data = e
                    }, enumerable: !1, configurable: !0
                }), e.prototype.hasNext = function () {
                    return this.next && this.next.id
                }, e.prototype.hasPrev = function () {
                    return this.prev && this.prev.id
                }, e
            }();
            t.ListNode = s;
            var i = function () {
                function e() {
                    this.start = new s, this.end = new s, this._idCounter = 0, this._numNodes = 0, this.start.next = this.end, this.start.prev = null, this.end.prev = this.start, this.end.next = null
                }

                return e.prototype.insertBefore = function (e, t) {
                    var r = new s(this._idCounter, t);
                    return r.next = e, r.prev = e.prev, e.prev && (e.prev.next = r), e.prev = r, ++this._idCounter, ++this._numNodes, r
                }, e.prototype.addLast = function (e) {
                    return this.insertBefore(this.end, e)
                }, e.prototype.add = function (e) {
                    return this.addLast(e)
                }, e.prototype.getFirst = function () {
                    return 0 === this._numNodes ? null : this.start.next
                }, e.prototype.getLast = function () {
                    return 0 === this._numNodes ? null : this.end.prev
                }, e.prototype.size = function () {
                    return this._numNodes
                }, e.prototype.getFromFirst = function (e) {
                    var t = 0, r = this.start.next;
                    if (e >= 0) for (; t < e && null !== r;) r = r.next, ++t; else r = null;
                    if (null === r) throw"Index out of bounds.";
                    return r
                }, e.prototype.get = function (e) {
                    return 0 === e ? this.getFirst() : e === this._numNodes - 1 ? this.getLast() : this.getFromFirst(e)
                }, e.prototype.remove = function (e) {
                    return e.prev && (e.prev.next = e.next), e.next && (e.next.prev = e.prev), --this._numNodes, e
                }, e.prototype.removeFirst = function () {
                    var e = null;
                    return this._numNodes > 0 && this.start.next && (e = this.remove(this.start.next)), e
                }, e.prototype.removeLast = function () {
                    var e = null;
                    return this._numNodes > 0 && this.end.prev && (e = this.remove(this.end.prev)), e
                }, e.prototype.removeAll = function () {
                    this.start.next = this.end, this.end.prev = this.start, this._numNodes = 0, this._idCounter = 0
                }, e.prototype.each = function (e) {
                    for (var t = this.start; t.hasNext();) e(t = t.next)
                }, e.prototype.find = function (e) {
                    for (var t = this.start, r = !1, o = null; t.hasNext() && !r;) e(t = t.next) && (o = t, r = !0);
                    return o
                }, e.prototype.map = function (e) {
                    for (var t = this.start, r = []; t.hasNext();) e(t = t.next) && r.push(t);
                    return r
                }, e.prototype.push = function (e) {
                    return this.addLast(e)
                }, e.prototype.unshift = function (e) {
                    this._numNodes > 0 ? this.insertBefore(this.start.next, e) : this.insertBefore(this.end, e)
                }, e.prototype.pop = function () {
                    return this.removeLast()
                }, e.prototype.shift = function () {
                    return this.removeFirst()
                }, e
            }();
            t.LinkedList = i;
            var n = r(14);
            Object.defineProperty(t, "ZegoLogger", {
                enumerable: !0, get: function () {
                    return n.ZegoLogger
                }
            }), Object.defineProperty(t, "ZegoDataReport", {
                enumerable: !0, get: function () {
                    return n.ZegoDataReport
                }
            }), Object.defineProperty(t, "LoggerStateCenter", {
                enumerable: !0, get: function () {
                    return n.LoggerStateCenter
                }
            }), Object.defineProperty(t, "createZegoWebSocket", {
                enumerable: !0, get: function () {
                    return n.createZegoWebSocket
                }
            })
        }, function (e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {value: !0}), t.errorCodeList = void 0, t.errorCodeList = {
                SERVER: {code: 0, msg: "liverooom cmd error"},
                SUCCESS: {code: 0, msg: "success."},
                INIT: {code: 2000000001, msg: "init sdk wrong"},
                NOT_LOGIN: {code: 1000002, msg: "not login"},
                NETWORK_BROKEN: {code: 1000017, msg: "network is broken"},
                INPUT_PARAM: {code: 1100001, msg: "input parm error."},
                TIMEOUT: {code: 1100002, msg: "network timeout."},
                SOCKET_CLOSE: {code: 1100003, msg: "socket close"},
                INIT_SDK_WRONG: {code: 1101e3, msg: "init sdk wrong"},
                USER_ID_NULL: {code: 1002005, msg: "user ID is empty"},
                USER_ID_INVALID_CHARACTER: {code: 1002006, msg: "user ID contains illegal characters"},
                USER_ID_TOO_LONG: {code: 1002007, msg: "user ID is too long"},
                USER_NAME_NULL: {code: 1002008, msg: "username is empty"},
                USER_NAME_TOO_LONG: {code: 1002010, msg: "username is too long"},
                ROOM_ID_NULL: {code: 1002011, msg: "room ID is empty"},
                ROOM_ID_INVALID_CHARACTER: {code: 1002012, msg: "room ID contains illegal characters"},
                ROOM_ID_TOO_LONG: {code: 1002013, msg: "room ID is too long"},
                ROOM_NOT_EXIST: {code: 1002014, msg: "room not exist"},
                LOGIN_TIMEOUT: {code: 1002031, msg: "login timeout"},
                ROOM_MAX_USER_COUNT: {code: 1002034, msg: "users logging into the room exceeds the maximum number"},
                MULTIPLE_LOGIN_KICKOUT: {code: 1002050, msg: "kickout may be the same user ID login other"},
                ROOM_RETRY_TIMEOUT: {code: 1002053, msg: "network is broken and login fail."},
                MANUAL_KICKOUT: {code: 1002055, msg: "server has sent a signal to kick out"},
                REPEATEDLY_LOGIN: {code: 1002056, msg: "user repeatedly login"},
                REPEATEDLY_ENTER_ROOM: {code: 1002057, msg: "user repeatedly enter room"},
                ALREADY_LOGIN: {code: 1002058, msg: "user already logged in"},
                ROOM_INNER_ERROR: {code: 1002099, msg: "room inner error"},
                HEARTBEAT_TIMEOUT: {code: 1102001, msg: "heartbeat timeout."},
                PARSE_JSON_ERROR: {code: 1102011, msg: "parse json error."},
                LOGIN_PROCESSING: {code: 1102012, msg: "login is processing."},
                LIVEROMM_REQUEST_ERROR: {code: 1102013, msg: "liveroom request error."},
                ZPUSH_REQUEST_FAIL: {code: 1102014, msg: "zpush request fail."},
                LOGIN_STATE_WRONG: {code: 1102015, msg: "user login state is wrong."},
                TOKEN_ERROR: {code: 1102016, msg: "token error"},
                DIAPATCH_ERROR: {code: 1102017, msg: "dispatch error"},
                TOKEN_EXPIRED: {code: 1102018, msg: "token expired"},
                SUBCMD_ERROR: {code: 1102019, msg: "subcmd error."},
                ZEGO_AUTH_ERROR: {code: 1102020, msg: "zego auth error."},
                BIZ_CHANNEL_ERROR: {code: 1102021, msg: "biz channel error."},
                TRANS_FREQUENTLY: {code: 1102022, msg: "trans send frequently"},
                IM_CONTENT_NULL: {code: 1009001, msg: "message content is empty"},
                IM_CONTENT_TOO_LONG: {code: 1009002, msg: "message content is too long"},
                IM_SEND_FAILED: {code: 1009010, msg: "failed to send message"},
                FREQ_LIMITED: {code: 1109001, msg: "frequency limited."}
            }
        }, function (e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {value: !0}), t.ZEGO_RTM_ACTION = void 0, function (e) {
                e.ZEGOEXPRESSWEBRTM_CONSTRUCTOR = "zm.0", e.ZEGOEXPRESSWEBRTM_BIND_WINDOW_LISTENER = "zm.wl", e.ZEGOEXPRESSWEBRTM_SET_LOG_CONFIG = "zm.slf", e.ZEGOEXPRESSWEBRTM_SET_DEBUG_VERBOSE = "zm.sdv", e.ZEGOEXPRESSWEBRTM_LOGIN_ROOM = "zm.lg", e.ZEGOEXPRESSWEBRTM_LOGOUT_ROOM = "zm.lo", e.ZEGOEXPRESSWEBRTM_SEND_CUSTOM = "zm.scc", e.ZEGOEXPRESSWEBRTM_SEND_BCM = "zm.sbcm", e.ZEGOEXPRESSWEBRTM_SEND_RLM = "zm.srlm", e.ZEGOEXPRESSWEBRTM_SEND_BRM = "zm.sbrm", e.ZEGOEXPRESSWEBRTM_SEND_RAM = "zm.sram", e.ZEGOEXPRESSWEBRTM_ON = "zm.on", e.ZEGOEXPRESSWEBRTM_OFF = "zm.off", e.ZEGOEXPRESSWEBRTM_RENEWTOKEN = "zm.rntk", e.ZEGOEXPRESSWEBRTM_RESETTOKENTIMER = "zm.rstt", e.ZEGOEXPRESSWEBRTM_ENABLE_MULTI_ROOM = "zm.emr", e.ZEGOEXPRESSWEBRTM_SEND_PB = "zm.spb", e.ZEGOEXPRESSWEBRTM_GET_HEADER = "zm.gh", e.ROOM_LOGIN_ROOM = "zm.rm.lg", e.ROOM_TRY_LOGIN = "zm.rm.tl", e.ROOM_OPEN_HANDLER = "zm.rm.op", e.ROOM_HANDLE_LOGINRSP = "zm.rm.lgr", e.ROOM_CLOSEHANDLER = "zm.rm.clh", e.ROOM_LOGOUT = "zm.rm.lo", e.ROOM_RESET_ROOM = "zm.rm.rr", e.ROOM_DISCONNECT = "zm.rm.dcn", e.ROOM_KICK_OUT = "zm.rm.kco", e.ROOM_STATUS_CALLBACK = "zm.rm.scb", e.ROOM_RESETTOKEN_TIMER = "zm.rm.rst", e.HEARTBEAT_START = "zm.hb.st", e.HEARTBEAT_HEARTBEAT_RSP = "zm.hb.rsp", e.HEARTBEAT_RESET = "zm.hb.rst", e.SERVICE_PUSH = "zm.sv.ps", e.SERVICE_SEND = "zm.sv.sd", e.USER_LOGIN_RSP = "zm.us.lgr", e.USER_FETCH_USER = "zm.us.ftu", e.USER_FETCH_USER_RSP = "zm.us.urp", e.USER_USER_PUSH = "zm.us.uph", e.USER_MERGE_SEQ = "zm.us.mg", e.USER_MERGE_TIMEOUT = "zm.us.mto", e.USER_MERGE = "zm.us.mg", e.USER_HB_PATCH = "zm.us.pt", e.MESSAGE_SEND_RELIABLE = "zm.msg.sdr", e.MESSAGE_FETCH_RELIABLE = "zm.msg.frm", e.MESSAGE_RELIABLE_RSP = "zm.msg.rlr", e.MESSAGE_RELIABLE_PUSH = "zm.msg.rps", e.MESSAGE_SEND_ROOM_MSG = "zm.msg.srm", e.MESSAGE_SEND_CUSTOM_MSG = "zm.msg.scm", e.MESSAGE_SEND_BIG_MSG = "zm.msg.sbm", e.MESSAGE_BIG_MSG_PUSH = "zm.msg.bps", e.MESSAGE_SEND_RELAY_MSG = "zm.msg.slm", e.LIVE_SEND_SIGNAL = "zm.lv.ssg", e.LIVE_RESPOND_JOIN_LIVE = "zm.lv.rjl", e.LIVE_PUSH_SIGNAL = "zm.lv.pss", e.STATE_ACTION = "zm.st.at", e.ZEGOEXPRESSWEBRTM_LOGIN_HALL = "zm.lh", e.ZEGOEXPRESSWEBRTM_LOGOUT_HALL = "zm.loh", e.ZEGOEXPRESSWEBRTM_SEND_CUSTOM_MESSAGE = "zm.scm"
            }(t.ZEGO_RTM_ACTION || (t.ZEGO_RTM_ACTION = {}))
        }, function (e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {value: !0}), t.ClientUtil = void 0;
            var o = r(15), s = r(0), i = r(1), n = function () {
                function e() {
                }

                return e.checkConfigParam = function (e, t, r) {
                    return e && "number" == typeof e && this.checkInteger(e) ? !(!t || "string" != typeof t && !Array.isArray(t) || "" == t) || (r.error("ccp.0 server must be string or string array and not empty"), !1) : (r.error("ccp.0 appid must be positive integer number and not empty"), !1)
                }, e.checkPriConfigParam = function (e, t, r, o, s) {
                    return e && "number" == typeof e && this.checkInteger(e) ? t && "string" == typeof t ? "object" != typeof r || "string" != typeof r.deviceID ? (s.error("ccp.0 deviceID must be string and not empty"), !1) : 1 === o || 0 === o || (s.error("ccp.0 anType must be 0 or 1"), !1) : (s.error("ccp.0 dispatchServer must be string and not empty"), !1) : (s.error("ccp.0 appid must be positive integer number and not empty"), !1)
                }, e.checkIllegalCharacters = function (e) {
                    return /^([0-9a-zA-Z#!$%&()`'+-;<=.>@^_~,\\*])+$/.test(e) && /^[^:/]*$/g.test(e)
                }, e.isUrl = function (e) {
                    return !!(e.startsWith("rtmp://") || e.startsWith("https://") && e.endsWith(".flv") || e.startsWith("https://") && e.endsWith(".m3u8"))
                }, e.registerCallback = function (e, t, r) {
                    var o, s;
                    t.success && (o = t.success, r[e + "SuccessCallback"] = o), t.error && (s = t.error, r[e + "ErrorCallback"] = s)
                }, e.actionErrorCallback = function (e, t) {
                    return t[e + "ErrorCallback"]
                }, e.actionSuccessCallback = function (e, t) {
                    return t[e + "SuccessCallback"]
                }, e.logReportCallback = function (t, r, o, s) {
                    e.registerCallback(t, {
                        success: function (t, s) {
                            for (var i = [], n = 2; n < arguments.length; n++) i[n - 2] = arguments[n];
                            e.dataReportEvent(r, o, t, s, i)
                        }
                    }, s)
                }, e.proxyRes = function (t, r, o, s) {
                    return {
                        interResolve: function (e) {
                            t.uploadReport(r), o(e)
                        }, interReject: function (o, i) {
                            var n;
                            void 0 === i && (i = ""), (n = o.code < 2e9 && o.code > 1e9 ? e.decodeServerError(o.code, o.msg) : {
                                code: o.code,
                                message: o.msg
                            }) && t.addMsgInfo(r, {
                                error: n.code,
                                message: n.message + i
                            }), t.uploadReport(r), s({errorCode: o.code})
                        }
                    }
                }, e.getServerError = function (e) {
                    var t = {
                        1: "parse json error.",
                        1001: "login is processing.",
                        1002: "liveroom request error.",
                        1003: "zpush connect fail.",
                        1004: "zpush handshake fail.",
                        1005: "zpush login fail.",
                        1006: "user login state is wrong.",
                        1007: "got no zpush addr",
                        1008: "token error",
                        1009: "dispatch error",
                        1010: "token expired",
                        1011: "token format error",
                        2002: "biz channel error",
                        1e9: "liveroom cmd error, code:"
                    };
                    if (0 === e) return i.errorCodeList.SUCCESS;
                    var r = i.errorCodeList.ROOM_INNER_ERROR;
                    return r.code = e, r.msg = e > 1e9 ? t[1e9] + e : t[e] ? t[e] + " code:" + e : "unknown error code:" + e, r
                }, e.unregisterCallback = function (e, t) {
                    delete t[e + "SuccessCallback"], delete t[e + "ErrorCallback"]
                }, e.decodeServerError = function (e, t) {
                    var r = {code: -1, message: "server error"};
                    return r.code = e > 1e9 ? e - 1e9 + 52e6 : e + 2002e6, t && (r.message = t), r
                }, e.getLiveRoomError = function (e) {
                    return e > 1e9 ? {
                        1105: "ROOM_MAX_USER_COUNT",
                        1012: "PUBLISHER_ERROR_REPETITIVE_PUBLISH_STREAM",
                        2002: "ROOM_ERROR_AUTHENTICATION_FAILED",
                        2003: "ROOM_ERROR_LOGIN_TIMEOUT"
                    }[e - 1e9] || "" : {
                        1: "PARSE_JSON_ERROR",
                        1001: "LOGIN_PROCESSING",
                        1002: "LIVEROMM_REQUEST_ERROR",
                        1003: "ZPUSH_REQUEST_FAIL",
                        1004: "ZPUSH_REQUEST_FAIL",
                        1005: "ZPUSH_REQUEST_FAIL",
                        1006: "LOGIN_STATE_WRONG",
                        1007: "ZPUSH_REQUEST_FAIL",
                        1008: "TOKEN_ERROR",
                        1009: "DIAPATCH_ERROR",
                        1010: "TOKEN_EXPIRED",
                        1011: "TOKEN_ERROR",
                        1012: "SUBCMD_ERROR",
                        1101: "ZEGO_AUTH_ERROR",
                        2001: "BIZ_CHANNEL_ERROR",
                        2002: "BIZ_CHANNEL_ERROR"
                    }[e] || "ROOM_INNER_ERROR"
                }, e.getKickoutError = function (e) {
                    var t = {code: e, message: "kickout reason = " + e};
                    switch (e) {
                        case 1:
                            t.code = 63000001, t.message = "zpush multiple login kickout", t.name = "MULTIPLE_LOGIN_KICKOUT";
                            break;
                        case 2:
                            t.code = 63000002, t.message = "zpush manual kickout", t.name = "MANUAL_KICKOUT";
                            break;
                        case 3:
                            t.code = 63000003, t.message = "kickout reason = " + e;
                            break;
                        case 4:
                            t.code = 63000001, t.message = "zpush multiple login kickout", t.name = "MULTIPLE_LOGIN_KICKOUT";
                            break;
                        default:
                            t.code = e, t.message = "kickout reason = " + e
                    }
                    return t
                }, e.dataReportEvent = function (e, t, r, o, s) {
                    switch (r) {
                        case"eventStart":
                            e.eventStart(t, o);
                            break;
                        case"eventEndWithMsgInfo":
                            e.eventEndWithMsgInfo(t, o, s[0]);
                            break;
                        case"addEventMsg":
                            e.addEventMsg(t, o, s[0], s[1]);
                            break;
                        case"addEvent":
                            e.addEvent(t, o);
                            break;
                        case"eventEnd":
                            e.eventEnd(t, o);
                            break;
                        case"addMsgInfo":
                            e.addMsgInfo(t, s[0])
                    }
                }, e.isKeepTryLogin = function (e) {
                    switch (e) {
                        case 1002:
                        case 1003:
                            return !0;
                        default:
                            return !1
                    }
                }, e.mergeUserList = function (e, t, r, o) {
                    e.debug("msl.0 call");
                    var s, i = [], n = [];
                    r || (r = []);
                    for (var a = 0; a < r.length; a++) {
                        s = !1;
                        for (var l = 0; l < t.length; l++) if (r[a].userID === t[l].userID) {
                            s = !0;
                            break
                        }
                        s || i.push(r[a])
                    }
                    for (var _ = 0; _ < t.length; _++) {
                        s = !1;
                        for (var d = 0; d < r.length; d++) if (t[_].userID === r[d].userID) {
                            s = !0;
                            break
                        }
                        s || n.push(t[_])
                    }
                    for (t.splice(0), a = 0; a < r.length; a++) t.push(t[a]);
                    o(i, n), e.debug("msl.0 call success")
                }, e.checkInteger = function (e, t) {
                    return 0 == t ? "number" == typeof e && e % 1 == 0 && e >= 0 : "number" == typeof e && e % 1 == 0 && e > 0
                }, e.checkValidNumber = function (e, t, r) {
                    return t = t || 1, r = r || 1e4, "number" == typeof e && e % 1 == 0 && e >= t && e <= r
                }, e.generateRandumNumber = function (e) {
                    return parseInt(Math.random() * (e + 1) + "", 10)
                }, e.uuid = function (e, t) {
                    var r, o = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz".split(""), s = [];
                    if (t = t || o.length, e) for (r = 0; r < e; r++) s[r] = o[0 | Math.random() * t]; else {
                        var i = void 0;
                        for (s[8] = s[13] = s[18] = s[23] = "-", s[14] = "4", r = 0; r < 36; r++) s[r] || (i = 0 | 16 * Math.random(), s[r] = o[19 == r ? 3 & i | 8 : i])
                    }
                    return s.join("")
                }, e.compareVersion = function (e, t) {
                    e = e.split("."), t = t.split(".");
                    for (var r = Math.max(e.length, t.length); e.length < r;) e.push("0");
                    for (; t.length < r;) t.push("0");
                    for (var o = 0; o < r; o++) {
                        var s = parseInt(e[o]), i = parseInt(t[o]);
                        if (s > i) return 1;
                        if (s < i) return -1
                    }
                    return 0
                }, e.getBrowser = function () {
                    var e = window.navigator.userAgent, t = null != window.ActiveXObject && -1 != e.indexOf("MSIE"),
                        r = -1 != e.indexOf("Firefox"), o = null != window.opr,
                        s = e.indexOf("Chrome") && window.chrome,
                        i = -1 != e.indexOf("Safari") && -1 != e.indexOf("Version");
                    return t ? "IE" : r ? "Firefox" : o ? "Opera" : s ? "Chrome" : i ? "Safari" : "Unkown"
                }, e.isTestEnv = function (e) {
                    return -1 != e.indexOf("wss://wssliveroom-test.zego.im/ws") || -1 != e.indexOf("wss://test2-wsliveroom-api.zego.im/ws") || -1 != e.indexOf("wss://wsliveroom-test.zegocloud.com/ws") || -1 != e.indexOf("wss://wsliveroom-test.zego.im/ws") || -1 != e.indexOf("wss://webliveroom-test.zego.im/ws") || -1 != e.indexOf("wss://webliveroom-test-bak.zego.im/ws") || -1 != e.indexOf("wss://webliveroom-hk-test.zegocloud.com/ws") || -1 != e.indexOf("wss://webliveroom-hk-test-bak.zegocloud.com/ws")
                }, e.getLogLevel = function (e) {
                    return s.LOG_LEVEL[e]
                }, e.getUint64 = function (e, t, r) {
                    var o = r.getUint32(e, t), s = r.getUint32(e + 4, t),
                        i = t ? o + Math.pow(2, 32) * s : Math.pow(2, 32) * o + s;
                    return Number.isSafeInteger(i) || console.warn(i, "exceeds MAX_SAFE_INTEGER. Precision may be lost"), i
                }, e.decodeTokenExpire = function (t) {
                    try {
                        var r, s = Uint8Array.from(o.Base64.base64decode(t), (function (e) {
                            return e.charCodeAt(0)
                        })), i = new DataView(s.buffer);
                        return r = "function" == typeof i.getBigInt64 ? i.getBigUint64(0) : e.getUint64(0, !1, i), Number(r > 0 ? r : i.getBigUint64(0, !0))
                    } catch (e) {
                        console.error("token error")
                    }
                    return -1
                }, e
            }();
            t.ClientUtil = n
        }, function (e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {value: !0}), t.ZegoRTMLogEvent = void 0;
            var o = r(1), s = function (e) {
                return e
            };
            t.ZegoRTMLogEvent = {
                kZegoTaskInitSetting: {
                    event: "/sdk/init",
                    error: {kInvalidParamError: o.errorCodeList.INPUT_PARAM},
                    system_info: navigator ? navigator.appVersion : ""
                },
                kZegoTaskSetDebug: {event: "/sdk/set_debug", debug: s},
                kZegoTaskSetLog: {
                    event: "/sdk/set_log_config",
                    error: {kInvalidParamError: o.errorCodeList.INPUT_PARAM},
                    log_level: function (e) {
                        return e
                    },
                    remote_log_level: s,
                    log_url: s
                },
                kZegoTaskLoginRoom: {
                    event: "/sdk/login",
                    user_update: s,
                    max_member_count: s,
                    message: s,
                    token: s,
                    error: {
                        ROOM_ID_NULL: o.errorCodeList.ROOM_ID_NULL,
                        INPUT_PARAM: o.errorCodeList.INPUT_PARAM,
                        ROOM_ID_TOO_LONG: o.errorCodeList.ROOM_ID_TOO_LONG,
                        ROOM_ID_INVALID_CHARACTER: o.errorCodeList.ROOM_ID_INVALID_CHARACTER,
                        USER_ID_NULL: o.errorCodeList.USER_ID_NULL,
                        USER_ID_TOO_LONG: o.errorCodeList.USER_ID_TOO_LONG,
                        USER_ID_INVALID_CHARACTER: o.errorCodeList.USER_ID_INVALID_CHARACTER,
                        USER_NAME_NULL: o.errorCodeList.USER_NAME_NULL,
                        USER_NAME_TOO_LONG: o.errorCodeList.USER_NAME_TOO_LONG,
                        REPEATEDLY_LOGIN: o.errorCodeList.REPEATEDLY_LOGIN,
                        LOGIN_TIMEOUT: o.errorCodeList.LOGIN_TIMEOUT,
                        INNER_ERROR: o.errorCodeList.ROOM_INNER_ERROR,
                        NETWORK_BROKEN: o.errorCodeList.NETWORK_BROKEN
                    },
                    subEvent: {
                        create_socket: {event: "create_socket", server: s, try_cnt: s},
                        liveroom_login: {event: "liveroom_login", server: s, respond_info: s}
                    }
                },
                kZegoTaskReNewToken: {
                    event: "/sdk/reNewToken",
                    error: {INPUT_PARAM: o.errorCodeList.INPUT_PARAM, NOT_LOGIN: o.errorCodeList.NOT_LOGIN}
                },
                kZegoTaskLogoutRoom: {
                    event: "/sdk/logout",
                    error: {INPUT_PARAM: o.errorCodeList.INPUT_PARAM, ROOM_NOT_EXIST: o.errorCodeList.ROOM_NOT_EXIST}
                },
                kZegoTaskReLoginRoom: {
                    event: "/sdk/relogin",
                    error: {
                        ROOM_ID_NULL: o.errorCodeList.ROOM_ID_NULL,
                        ROOM_DISCONNECT: o.errorCodeList.NETWORK_BROKEN
                    },
                    subEvent: {
                        create_socket: {event: "create_socket", server: s, try_cnt: s},
                        liveroom_login: {event: "liveroom_login", server: s, respond_info: s}
                    }
                },
                kZegoTaskLoginHall: {
                    event: "/sdk/login_hall",
                    user_update: s,
                    device_id: s,
                    message: s,
                    token: s,
                    device_type: s,
                    an_type: s,
                    room_flag: s,
                    test_environment: s,
                    error: {
                        INPUT_PARAM: o.errorCodeList.INPUT_PARAM,
                        USER_ID_NULL: o.errorCodeList.USER_ID_NULL,
                        USER_ID_TOO_LONG: o.errorCodeList.USER_ID_TOO_LONG,
                        USER_ID_INVALID_CHARACTER: o.errorCodeList.USER_ID_INVALID_CHARACTER,
                        USER_NAME_NULL: o.errorCodeList.USER_NAME_NULL,
                        USER_NAME_TOO_LONG: o.errorCodeList.USER_NAME_TOO_LONG,
                        REPEATEDLY_LOGIN: o.errorCodeList.REPEATEDLY_LOGIN,
                        LOGIN_TIMEOUT: o.errorCodeList.LOGIN_TIMEOUT,
                        INNER_ERROR: o.errorCodeList.ROOM_INNER_ERROR,
                        NETWORK_BROKEN: o.errorCodeList.NETWORK_BROKEN
                    },
                    subEvent: {
                        dispatch_connection: {event: "dispatch_connection"},
                        create_socket: {event: "create_socket", server: s, try_cnt: s},
                        liveroom_login: {event: "liveroom_login", server: s, respond_info: s}
                    }
                },
                kZegoTaskLogoutHall: {event: "/sdk/logout_hall", error: {INPUT_PARAM: o.errorCodeList.INPUT_PARAM}},
                kZegoTaskEnterRoom: {
                    event: "/sdk/enter",
                    role: s,
                    error: {
                        INPUT_PARAM: o.errorCodeList.INPUT_PARAM,
                        ROOM_ID_NULL: o.errorCodeList.ROOM_ID_NULL,
                        ROOM_ID_TOO_LONG: o.errorCodeList.ROOM_ID_TOO_LONG,
                        ROOM_ID_INVALID_CHARACTER: o.errorCodeList.ROOM_ID_INVALID_CHARACTER,
                        NOT_LOGIN: o.errorCodeList.NOT_LOGIN,
                        REPEATEDLY_ENTER_ROOM: o.errorCodeList.REPEATEDLY_ENTER_ROOM
                    }
                },
                kZegoTaskLeaveRoom: {event: "/sdk/leave", error: {INPUT_PARAM: o.errorCodeList.INPUT_PARAM}},
                kZegoTaskReLoginHall: {
                    event: "/sdk/relogin",
                    error: {
                        ROOM_ID_NULL: o.errorCodeList.ROOM_ID_NULL,
                        ROOM_DISCONNECT: o.errorCodeList.NETWORK_BROKEN
                    },
                    subEvent: {
                        create_socket: {event: "create_socket", server: s, try_cnt: s},
                        liveroom_login: {event: "liveroom_login", server: s, respond_info: s}
                    }
                },
                kZegoTaskKickout: {event: "/sdk/kickout", user_id: s, error: {}},
                kZegoTaskRoomKickout: {event: "/sdk/room_kickout", user_id: s, room_id: s, message: s},
                kZegoTaskLiveRoomHB: {
                    event: "/liveroom/hb",
                    room_sid: s,
                    error: {NOT_LOGIN: o.errorCodeList.NOT_LOGIN, HB_TIMEOUT: o.errorCodeList.TIMEOUT}
                },
                kZegoTaskLiveSendRoomBigIM: {
                    event: "/liveroom/send_big_room_message",
                    room_sid: s,
                    error: {
                        INPUT_PARAM: o.errorCodeList.INPUT_PARAM,
                        IM_CONTENT_NULL: o.errorCodeList.IM_CONTENT_NULL,
                        IM_CONTENT_TOO_LONG: o.errorCodeList.IM_CONTENT_TOO_LONG,
                        ROOM_NOT_EXIST: o.errorCodeList.ROOM_NOT_EXIST
                    }
                },
                kZegoTaskLiveRoomSendCustomCommand: {
                    event: "/liveroom/send_custom_command",
                    room_sid: s,
                    error: {
                        INPUT_PARAM: o.errorCodeList.INPUT_PARAM,
                        IM_CONTENT_NULL: o.errorCodeList.IM_CONTENT_NULL,
                        IM_CONTENT_TOO_LONG: o.errorCodeList.IM_CONTENT_TOO_LONG,
                        ROOM_NOT_EXIST: o.errorCodeList.ROOM_NOT_EXIST
                    }
                },
                kZegoTaskLiveRoomSendRoomMessage: {
                    event: "/liveroom/send_room_message",
                    room_sid: s,
                    error: {
                        INPUT_PARAM: o.errorCodeList.INPUT_PARAM,
                        IM_CONTENT_NULL: o.errorCodeList.IM_CONTENT_NULL,
                        IM_CONTENT_TOO_LONG: o.errorCodeList.IM_CONTENT_TOO_LONG,
                        ROOM_NOT_EXIST: o.errorCodeList.ROOM_NOT_EXIST
                    }
                },
                kZegoTaskLiveRoomSendReliableMessage: {
                    event: "/liveroom/send_reliable_message",
                    room_sid: s,
                    error: {
                        INPUT_PARAM: o.errorCodeList.INPUT_PARAM,
                        TRANS_FREQUENTLY: o.errorCodeList.TRANS_FREQUENTLY,
                        ROOM_NOT_EXIST: o.errorCodeList.ROOM_NOT_EXIST
                    }
                },
                kZegoTaskLiveGetRoomBigIM: {event: "/liveroom/get_big_room_message"},
                kZegoTaskLiveRoomGetRoomMessage: {event: "/liveroom/get_room_message", room_sid: s},
                kZegoTaskLiveRoomGetCustomCommand: {event: "/liveroom/get_custom_command"},
                kZegoTaskLiveRoomGetUserUpdateInfo: {event: "/liveroom/get_user_update_info", user_update_type: s},
                kZegoListener: {event: "/sdk/listener"},
                kZegoEnableMultiRoom: {
                    event: "sdk/enable_multi_room",
                    error: {
                        kInvalidParamError: o.errorCodeList.INPUT_PARAM,
                        kAlreadyLoginError: o.errorCodeList.ALREADY_LOGIN
                    }
                }
            }
        }, function (e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {value: !0}), t.TryHandler = void 0;
            var o = function () {
                function e(e, t) {
                    this.logger = e, this.stateCenter = t, this.RETRY_MAX_TIME = 300, this.RETRY_START_TIME_INTERVAL = 4, this.RETRY_CONTINUE_COUNT = 2, this.RETRY_MAX_TIME_INTERVAL = 32, this.retryTimer = null, this.maxTimer = null, this.retryStartTime = 0, this.retryActiveCount = 1, this.isOverTime = !1
                }

                return e.prototype.init = function (e, t, r, o) {
                    this.invalid(), this.stopMaxTime(), this.isOverTime = !1, "number" == typeof e && e < 3600 && (this.RETRY_MAX_TIME = e), "number" == typeof t && (this.RETRY_START_TIME_INTERVAL = t), "number" == typeof r && (this.RETRY_CONTINUE_COUNT = r), "number" == typeof o && (this.RETRY_MAX_TIME_INTERVAL = o)
                }, e.prototype.invalid = function () {
                    this.retryTimer && clearTimeout(this.retryTimer), this.retryTimer = null, this.retryStartTime = 0, this.retryActiveCount = 1
                }, e
            }();
            t.TryHandler = o
        }, function (e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {value: !0}), t.HeartBeatHandler = void 0;
            var o = r(0), s = r(3), i = r(1), n = r(2), a = r(4), l = 3, _ = function () {
                function e(e, t, r, o, s) {
                    this.logger = e, this.stateCenter = t, this.dataReport = r, this.service = o, this.room = s, this.tryHeartbeatCount = 0, this.heartbeatTimer = null, this.loginHeartbeatTimer = null, this.initCount = 0
                }

                return e.prototype.init = function (e) {
                    var t, r = this;
                    if ("PRIVATE" == this.stateCenter.type) {
                        t = e.body.hb_interval < o.MINIUM_HEARTBEAT_INTERVAL ? o.MINIUM_HEARTBEAT_INTERVAL : e.body.hb_interval;
                        var s = e.body.hb_timeout || 4e4;
                        l = s / t + 1
                    } else t = e.body.hearbeat_interval < o.MINIUM_HEARTBEAT_INTERVAL ? o.MINIUM_HEARTBEAT_INTERVAL : e.body.hearbeat_interval;
                    this.tryHeartbeatCount = 0, this.heartbeatTimer && clearTimeout(this.heartbeatTimer), this.loginHeartbeatTimer = setTimeout((function () {
                        r.start(t)
                    }), t), this.initCount++
                }, e.prototype.start = function (e) {
                    var t = this;
                    this.logger.info(n.ZEGO_RTM_ACTION.HEARTBEAT_START + " call");
                    var r = o.getReportSeq();
                    if (this.dataReport.newReport(r, a.ZegoRTMLogEvent.kZegoTaskLiveRoomHB.event), this.dataReport.addMsgInfo(r, {room_sid: a.ZegoRTMLogEvent.kZegoTaskLiveRoomHB.room_sid(this.room.sessionID)}), !this.room.isLogin()) return this.logger.error(n.ZEGO_RTM_ACTION.HEARTBEAT_START + " state error"), this.dataReport.addMsgInfo(r, {
                        error: a.ZegoRTMLogEvent.kZegoTaskLiveRoomHB.error.NOT_LOGIN.code,
                        message: a.ZegoRTMLogEvent.kZegoTaskLiveRoomHB.error.NOT_LOGIN.msg
                    }), void this.dataReport.uploadReport(r);
                    if (++this.tryHeartbeatCount > l) return this.logger.error(n.ZEGO_RTM_ACTION.HEARTBEAT_START + " come to try limit"), this.dataReport.addMsgInfo(r, {
                        error: a.ZegoRTMLogEvent.kZegoTaskLiveRoomHB.error.HB_TIMEOUT.code,
                        message: a.ZegoRTMLogEvent.kZegoTaskLiveRoomHB.error.HB_TIMEOUT.msg
                    }), this.dataReport.uploadReport(r), void this.hbLogout(i.errorCodeList.HEARTBEAT_TIMEOUT);
                    var _ = function (e) {
                        if (0 !== ("PRIVATE" == t.stateCenter.type ? e.body && e.body.code : e.body && e.body.err_code)) {
                            var o = s.ClientUtil.decodeServerError(e.body.err_code || e.body.code, e.body.err_message || e.body.message);
                            t.dataReport.addMsgInfo(r, {error: o.code, message: o.message + e.body.err_code})
                        } else e.header && e.body || t.dataReport.addMsgInfo(r, {
                            error: e.code > 0 ? e.code : i.errorCodeList.ROOM_INNER_ERROR.code,
                            message: e.msg ? e.msg : i.errorCodeList.ROOM_INNER_ERROR
                        });
                        t.dataReport.uploadReport(r), "PRIVATE" == t.stateCenter.type ? t.handlePrivateHeartbeatRsp(e) : t.handleHeartbeatRsp(e)
                    };
                    this.service.heartBeat(_, _, this.room.sessionID, this.room.roomID, this.room.roomSessionID), this.heartbeatInterval = e;
                    var d = this.heartbeatInterval;
                    this.initCount >= 2 ? (d = Math.round(Math.random() * (this.heartbeatInterval + 1)), this.initCount = 1) : d = this.heartbeatInterval, this.heartbeatTimer = setTimeout((function () {
                        t.start(t.heartbeatInterval)
                    }), d), this.logger.info(n.ZEGO_RTM_ACTION.HEARTBEAT_START + " call success")
                }, e.prototype.handleHeartbeatRsp = function (e) {
                    return e.body && e.body.err_code && 0 !== e.body.err_code ? (this.logger.error(n.ZEGO_RTM_ACTION.HEARTBEAT_HEARTBEAT_RSP + " disconnect, server error=", e.body.err_code), e.body.err_code == o.ERROR_CODES.ROOM_SESSION_ID_ERR ? void this.hbLogout(i.errorCodeList.HEARTBEAT_TIMEOUT) : void this.hbLogout(s.ClientUtil.getServerError(e.body.err_code))) : e.header && e.body ? (this.tryHeartbeatCount = 0, this.heartbeatInterval = e.body.hearbeat_interval, this.heartbeatInterval < o.MINIUM_HEARTBEAT_INTERVAL && (this.heartbeatInterval = o.MINIUM_HEARTBEAT_INTERVAL), this.heartbeatRspNotiFy(e), void this.logger.info(n.ZEGO_RTM_ACTION.HEARTBEAT_HEARTBEAT_RSP + " call success")) : (this.logger.error(n.ZEGO_RTM_ACTION.HEARTBEAT_HEARTBEAT_RSP + " disconnect, error=", JSON.stringify(e)), void this.hbLogout(e))
                }, e.prototype.handlePrivateHeartbeatRsp = function (e) {
                    if (0 !== e.body.code) return this.logger.error(n.ZEGO_RTM_ACTION.HEARTBEAT_HEARTBEAT_RSP + " disconnect, server error=", e.body.code), e.body.code == o.ERROR_CODES.ROOM_SESSION_ID_ERR ? void this.hbLogout(i.errorCodeList.HEARTBEAT_TIMEOUT) : void this.hbLogout(s.ClientUtil.getServerError(e.body.code));
                    this.tryHeartbeatCount = 0, this.heartbeatInterval = e.body.hb_interval, this.heartbeatInterval < o.MINIUM_HEARTBEAT_INTERVAL && (this.heartbeatInterval = o.MINIUM_HEARTBEAT_INTERVAL), this.heartbeatRspNotiFy(e), this.logger.info(n.ZEGO_RTM_ACTION.HEARTBEAT_HEARTBEAT_RSP + " call success")
                }, e.prototype.heartbeatRspNotiFy = function (e) {
                }, e.prototype.hbLogout = function (e) {
                }, e.prototype.resetHeartbeat = function () {
                    clearTimeout(this.heartbeatTimer), this.heartbeatTimer = null, clearTimeout(this.loginHeartbeatTimer), this.loginHeartbeatTimer = null, this.tryHeartbeatCount = 0, this.initCount = 0, this.logger.info(n.ZEGO_RTM_ACTION.HEARTBEAT_RESET + " call success")
                }, e
            }();
            t.HeartBeatHandler = _
        }, function (e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {value: !0}), t.LiveHandler = void 0;
            var o = r(0), s = r(2), i = r(3), n = r(1), a = function () {
                function e(e, t, r, o) {
                    this.logger = e, this.stateCenter = t, this.service = r, this.room = o, this.joinLiveCallbackMap = {}, this.joinLiveRequestMap = {}
                }

                return e.prototype.resetLiveHandler = function () {
                    this.joinLiveCallbackMap = {}, this.joinLiveRequestMap = {}
                }, e.prototype.getSignalCmdContent = function (e, t, r) {
                    var o = {
                        request_id: e,
                        room_id: this.room.roomID,
                        from_userid: this.stateCenter.idName,
                        from_username: this.stateCenter.nickName,
                        to_userid: t
                    };
                    return null != r && (o.result = r), JSON.stringify(o)
                }, e.prototype.requestJoinLive = function (e, t, r, s) {
                    var i = this.stateCenter.getRequestId(), n = this.getSignalCmdContent(i, e);
                    return null != s && (this.joinLiveCallbackMap[i] = s, this.sendSignalCmd(o.ENUM_SIGNAL_SUB_CMD.joinLiveRequest, n, e, t, r), !0)
                }, e.prototype.sendSignalCmd = function (e, t, r, o, a) {
                    if (this.room.isLogin()) {
                        var l = {sub_cmd: e, signal_msg: t, dest_id_name: [r]};
                        this.service.sendSignalCmd(l, (function (e) {
                            o && o(e.header.seq)
                        }), (function (e) {
                            var t = n.errorCodeList.ROOM_INNER_ERROR;
                            if (!e.header || !e.body) return e.code && e.msg && (t = e), void (a && a(t, 0));
                            a && a(i.ClientUtil.getServerError(e.body.err_code), e.header.seq)
                        }), this.room.sessionID, this.room.roomID, this.room.roomSessionID), this.logger.info(s.ZEGO_RTM_ACTION.LIVE_SEND_SIGNAL + " call success" + e)
                    } else this.logger.error(s.ZEGO_RTM_ACTION.LIVE_SEND_SIGNAL + " state error")
                }, e.prototype.inviteJoinLive = function (e, t, r, s) {
                    var i = this.stateCenter.getRequestId(), n = this.getSignalCmdContent(i, e);
                    return null != s && (this.joinLiveCallbackMap[i] = s, this.sendSignalCmd(o.ENUM_SIGNAL_SUB_CMD.joinLiveInvite, n, e, t, r), !0)
                }, e.prototype.endJoinLive = function (e, t, r) {
                    var s = this.stateCenter.getRequestId(), i = this.getSignalCmdContent(s, e);
                    return this.sendSignalCmd(o.ENUM_SIGNAL_SUB_CMD.joinLiveStop, i, e, t, r), !0
                }, e.prototype.respondJoinLive = function (e, t, r, i) {
                    var n = this.joinLiveRequestMap[e];
                    if (!n) return this.logger.info(s.ZEGO_RTM_ACTION.LIVE_RESPOND_JOIN_LIVE + " no dest id name"), !1;
                    var a = 0;
                    !0 === t && (a = 1);
                    var l = this.getSignalCmdContent(e, n, a);
                    return this.sendSignalCmd(o.ENUM_SIGNAL_SUB_CMD.joinLiveResult, l, n, r, i), delete this.joinLiveRequestMap[e], !0
                }, e.prototype.handlePushSignalMsg = function (e) {
                    var t = JSON.parse(e.body.signal_msg);
                    switch (this.logger.info(s.ZEGO_RTM_ACTION.LIVE_PUSH_SIGNAL + " hpsm= ", t), e.body.sub_cmd) {
                        case o.ENUM_PUSH_SIGNAL_SUB_CMD.pushJoinLiveRequest:
                            this.handlePushJoinLiveRequestMsg(t);
                            break;
                        case o.ENUM_PUSH_SIGNAL_SUB_CMD.pushJoinLiveResult:
                            this.handlePushJoinLiveResultMsg(t);
                            break;
                        case o.ENUM_PUSH_SIGNAL_SUB_CMD.pushJoinLiveInvite:
                            this.handlePushJoinLiveInviteMsg(t);
                            break;
                        case o.ENUM_PUSH_SIGNAL_SUB_CMD.pushJoinLiveStop:
                            this.handlePushJoinLiveStopMsg(t)
                    }
                }, e.prototype.handlePushJoinLiveRequestMsg = function (e) {
                    var t = e.request_id;
                    if ("string" == typeof t) {
                        var r = e.from_userid;
                        "string" == typeof r ? (this.joinLiveRequestMap[t] = r, this.onRecvJoinLiveRequest(t, e.from_userid, e.from_username, e.room_id), this.logger.info(s.ZEGO_RTM_ACTION.LIVE_PUSH_SIGNAL + " onRecvJoinLiveRequest " + r)) : this.logger.error(s.ZEGO_RTM_ACTION.LIVE_PUSH_SIGNAL + " no from user")
                    } else this.logger.error(s.ZEGO_RTM_ACTION.LIVE_PUSH_SIGNAL + " no requestId")
                }, e.prototype.onRecvJoinLiveRequest = function (e, t, r, o) {
                    this.stateCenter.actionListener("recvJoinLiveRequest", e, t, r, o)
                }, e.prototype.handlePushJoinLiveInviteMsg = function (e) {
                    var t = e.request_id;
                    if ("string" == typeof t) {
                        var r = e.from_userid;
                        "string" == typeof r ? (this.joinLiveRequestMap[t] = r, this.onRecvInviteJoinLiveRequest(t, e.from_userid, e.from_username, e.room_id), this.logger.info(s.ZEGO_RTM_ACTION.LIVE_PUSH_SIGNAL + " onRecvInviteJoinLiveRequest " + r)) : this.logger.error(s.ZEGO_RTM_ACTION.LIVE_PUSH_SIGNAL + " no from user")
                    } else this.logger.error(s.ZEGO_RTM_ACTION.LIVE_PUSH_SIGNAL + "no requestId")
                }, e.prototype.onRecvInviteJoinLiveRequest = function (e, t, r, o) {
                    this.stateCenter.actionListener("recvInviteJoinLiveRequest", e, t, r, o)
                }, e.prototype.handlePushJoinLiveResultMsg = function (e) {
                    var t = e.request_id;
                    if ("string" == typeof t) {
                        var r = e.result;
                        if (null != r) {
                            var o = 1 == r;
                            if (this.joinLiveCallbackMap[t]) {
                                var i = this.joinLiveCallbackMap[t];
                                if (!i) return void this.logger.info(s.ZEGO_RTM_ACTION.LIVE_PUSH_SIGNAL + " no callback");
                                this.logger.info(s.ZEGO_RTM_ACTION.LIVE_PUSH_SIGNAL + " joinLiveRequest/invite result " + o), delete this.joinLiveCallbackMap[t], i(o, e.from_userid, e.from_username)
                            }
                        } else this.logger.info(s.ZEGO_RTM_ACTION.LIVE_PUSH_SIGNAL + " no result")
                    } else this.logger.error(s.ZEGO_RTM_ACTION.LIVE_PUSH_SIGNAL + " no requestId")
                }, e.prototype.handlePushJoinLiveStopMsg = function (e) {
                    var t = e.request_id;
                    "string" == typeof t ? (this.logger.info(s.ZEGO_RTM_ACTION.LIVE_PUSH_SIGNAL + " onRecvEndJoinLiveCommand " + e.from_userid), this.onRecvEndJoinLiveCommand(t, e.from_userid, e.from_username, e.room_id)) : this.logger.error(s.ZEGO_RTM_ACTION.LIVE_PUSH_SIGNAL + " no requestId")
                }, e.prototype.onRecvEndJoinLiveCommand = function (e, t, r, o) {
                    this.stateCenter.actionListener("recvEndJoinLiveCommand", e, t, r, o)
                }, e
            }();
            t.LiveHandler = a
        }, function (e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {value: !0}), t.MessageHandler = void 0;
            var o = r(0), s = r(3), i = r(1), n = r(2), a = r(4), l = function () {
                function e(e, t, r, o, s) {
                    var i = this;
                    this.logger = e, this.stateCenter = t, this.dataReport = r, this.service = o, this.room = s, this.sendRoomMsgTime = 0, this.sendRoomMsgInterval = 500, this.bigImCallbackMap = {}, this.bigImLastTimeIndex = 0, this.bigIMmessageList = [], this.bigImTimer = null, this.relayTimer = null, this.serverTimeOffset = 0, this.datiTimeWindow = 0, this.bigimTimeWindow = 0, this.isReliable = !1, this.transSeqMap = {}, this.onRecvReliableMessage = function (e) {
                        var t = e.map((function (e) {
                            return {
                                key: e.trans_type,
                                value: e.trans_data,
                                updateUser: {userID: e.trans_idname, userName: e.trans_nickname},
                                updateTime: e.trans_send_time
                            }
                        }));
                        i.stateCenter.actionListener("roomExtraInfoUpdate", i.room.roomID, t), e.forEach((function (e) {
                            i.stateCenter.actionListener("recvReliableMessage", e.trans_type, e.trans_seq, e.trans_data)
                        }))
                    }, this.realyMessageList = []
                }

                return e.prototype.loginRsp = function (e) {
                    var t = this;
                    if (null != e.body.ret_timestamp && "string" == typeof e.body.ret_timestamp) {
                        var r = parseFloat(e.body.ret_timestamp);
                        this.serverTimeOffset = 0 == r ? 0 : e.body.ret_timestamp - (new Date).getTime()
                    }
                    if (e.body.bigim_time_window && "number" == typeof e.body.bigim_time_window && (this.bigimTimeWindow = e.body.bigim_time_window), e.body.dati_time_window && "number" == typeof e.body.dati_time_window && (this.datiTimeWindow = e.body.dati_time_window), e.body.trans_seqs) for (var o = 0; o < e.body.trans_seqs.length; o++) {
                        var s = e.body.trans_seqs[o].trans_channel, i = e.body.trans_seqs[o].trans_seq_array;
                        (i = i.filter((function (e) {
                            var r = e.trans_type, o = e.trans_seq;
                            return !t.transSeqMap[r] || t.transSeqMap[r].seq < o
                        }))).length > 0 && this.fetchReliableMessage(s, i)
                    }
                }, e.prototype.sendReliableMessage = function (e, t, r, o) {
                    var l = this;
                    if (this.logger.info(n.ZEGO_RTM_ACTION.MESSAGE_SEND_RELIABLE + " call"), this.isReliable) return this.logger.error(n.ZEGO_RTM_ACTION.MESSAGE_SEND_RELIABLE + " send too often"), void o(a.ZegoRTMLogEvent.kZegoTaskLiveRoomSendReliableMessage.error.TRANS_FREQUENTLY);
                    this.transSeqMap[e] || (this.transSeqMap[e] = {seq: 0});
                    var _ = {
                        trans_type: e,
                        trans_data: t,
                        trans_local_seq: this.transSeqMap[e].seq,
                        trans_channel: "clt"
                    };
                    this.isReliable = !0, this.service.sendReliableMessage(_, (function (t) {
                        l.transSeqMap[e].seq = t.body.trans_seq, l.logger.info(n.ZEGO_RTM_ACTION.MESSAGE_SEND_RELIABLE + " trans " + e + " seq " + t.body.trans_seq), l.isReliable = !1, r({
                            seq: t.header.seq,
                            errorCode: 0
                        })
                    }), (function (e) {
                        var t = i.errorCodeList.ROOM_INNER_ERROR;
                        e.body && e.body.err_code ? (t = s.ClientUtil.getServerError(e.body.err_code), l.logger.error(n.ZEGO_RTM_ACTION.MESSAGE_SEND_ROOM_MSG + "  " + t.msg)) : t = e == i.errorCodeList.TIMEOUT ? i.errorCodeList.IM_SEND_FAILED : e, l.isReliable = !1, o(t)
                    }), this.room.sessionID, this.room.roomID, this.room.roomSessionID)
                }, e.prototype.fetchReliableMessage = function (e, t) {
                    var r = this, o = {trans_channel: e, fetch_array: t}, s = function (e) {
                        r.handleFetchTransRsp(e)
                    };
                    this.service.fetchReliableMessage(o, s, s, this.room.sessionID, this.room.roomID, this.room.roomSessionID), this.logger.info(n.ZEGO_RTM_ACTION.MESSAGE_FETCH_RELIABLE + " call success")
                }, e.prototype.handleFetchTransRsp = function (e) {
                    if (e.body && 0 != e.body.err_code) this.logger.error(n.ZEGO_RTM_ACTION.MESSAGE_RELIABLE_RSP + " trans send error " + e.body.err_code); else if (e.header && e.body) {
                        var t = e.body.trans_fetch_results, r = [];
                        if (Array.isArray(t) && t.length > 0) for (var s = 0; s < t.length; s++) {
                            var i = t[s];
                            if (i.err_code !== o.ERROR_CODES.FETCH_TRANS_UNKNOWN_TYPE) {
                                var a = i.trans_type, l = i.trans_seq;
                                i.err_code !== o.ERROR_CODES.FETCH_TRANS_WRONG_SEQ ? (!this.transSeqMap[a] || this.transSeqMap[a].seq < l ? (this.transSeqMap[a] = {seq: l}, r.push(i)) : this.logger.warn(n.ZEGO_RTM_ACTION.MESSAGE_RELIABLE_RSP + " fetch trans seq wrong"), r.length > 0 && this.onRecvReliableMessage(r)) : (this.logger.warn(n.ZEGO_RTM_ACTION.MESSAGE_RELIABLE_RSP + " fetch trans seq is wrong " + i.err_code), this.transSeqMap[a] = {seq: l})
                            } else this.logger.warn(n.ZEGO_RTM_ACTION.MESSAGE_RELIABLE_RSP + " fetch trans unknown type " + i.err_code)
                        }
                    } else this.logger.error(n.ZEGO_RTM_ACTION.MESSAGE_RELIABLE_RSP + " trans send error " + e)
                }, e.prototype.handlePushTransMsg = function (e) {
                    var t = e.body.trans_type, r = e.body.trans_seq;
                    !this.transSeqMap[t] || this.transSeqMap[t].seq < r ? (this.transSeqMap[t] = {seq: r}, this.onRecvReliableMessage([e.body])) : this.logger.warn(n.ZEGO_RTM_ACTION.MESSAGE_RELIABLE_PUSH + " trans seq wrong"), this.logger.info(n.ZEGO_RTM_ACTION.MESSAGE_RELIABLE_PUSH + " trans " + t + " seq " + r)
                }, e.prototype.sendRoomMsg = function (e, t, r, o, a, l) {
                    var _ = this;
                    if (!this.room.isLogin()) return this.logger.error(n.ZEGO_RTM_ACTION.MESSAGE_SEND_ROOM_MSG + " state error"), !1;
                    var d = Date.parse(new Date + "");
                    if (this.sendRoomMsgTime > 0 && this.sendRoomMsgTime + this.sendRoomMsgInterval > d) return this.logger.info(n.ZEGO_RTM_ACTION.MESSAGE_SEND_ROOM_MSG + " freq error"), l && l(i.errorCodeList.FREQ_LIMITED, 0, e, o), !1;
                    this.sendRoomMsgTime = d;
                    var u = "PRIVATE" == this.stateCenter.type ? {
                        room_header: {
                            room_id: this.room.roomID,
                            room_sid: this.room.roomSid || "0",
                            room_user_session_id: this.room.roomSessionID || "0"
                        }, msg_category: e, msg_type: 1, msg_content: o
                    } : {msg_category: e, msg_type: 1, msg_content: o};
                    return this.service.sendRoomMsg(u, (function (e) {
                        a({seq: e.header.seq, errorCode: 0, messageID: e.body.msg_id})
                    }), (function (e) {
                        var t, r, o = i.errorCodeList.ROOM_INNER_ERROR;
                        if (!e.header || !e.body) return e.code && e.msg && (o = e), void l({
                            seq: 0,
                            errorCode: o.code,
                            messageID: 0
                        });
                        o = (t = [s.ClientUtil.getServerError("PRIVATE" == _.stateCenter.type ? e.body.code : e.body.err_code), e.body.msg_id])[0], r = t[1], _.logger.error(n.ZEGO_RTM_ACTION.MESSAGE_SEND_ROOM_MSG + "  " + o.msg), _.logger.error(n.ZEGO_RTM_ACTION.MESSAGE_SEND_ROOM_MSG + "  " + o.msg), o == i.errorCodeList.TIMEOUT && (o = i.errorCodeList.IM_SEND_FAILED), l({
                            seq: e.header.seq,
                            errorCode: o.code,
                            messageID: r
                        })
                    }), this.room.sessionID, this.room.roomID, this.room.roomSessionID), this.logger.info(n.ZEGO_RTM_ACTION.MESSAGE_SEND_ROOM_MSG + "  call success"), !0
                }, e.prototype.handlePushRoomMsg = function (e) {
                    var t = this, r = o.getReportSeq();
                    this.dataReport.newReport(r), this.dataReport.addMsgInfo(r, {room_sid: a.ZegoRTMLogEvent.kZegoTaskLiveRoomGetRoomMessage.room_sid(e.header.session_id)});
                    var s = [];
                    "PRIVATE" == this.stateCenter.type ? e.body.chat_data.forEach((function (e) {
                        var o = {
                            fromUser: {userID: e.user_id, userName: e.user_name},
                            message: e.msg_content,
                            sendTime: e.send_time,
                            messageID: e.msg_id
                        };
                        s.push(o), t.dataReport.addMsgInfo(r, {from_msg_id: e.id_name})
                    })) : e.body.chat_data.forEach((function (e) {
                        var o = {
                            fromUser: {userID: e.id_name, userName: e.nick_name},
                            message: e.msg_content,
                            sendTime: e.send_time,
                            messageID: e.msg_id
                        };
                        s.push(o), t.dataReport.addMsgInfo(r, {from_msg_id: e.id_name})
                    })), this.dataReport.uploadReport(r, a.ZegoRTMLogEvent.kZegoTaskLiveRoomGetRoomMessage.event), this.stateCenter.actionListener("IMRecvBroadcastMessage", this.room.roomID, s), this.stateCenter.actionListener("_recvRoomMsg", e.body.chat_data, e.body.server_msg_id, e.body.ret_msg_id)
                }, e.prototype.sendCustomCommand = function (e, t, r, o) {
                    var a = this;
                    if (!this.room.isLogin()) return this.logger.error(n.ZEGO_RTM_ACTION.MESSAGE_SEND_CUSTOM_MSG + " state error"), !1;
                    var l = {
                        from_userid: this.stateCenter.idName,
                        from_username: this.stateCenter.nickName,
                        request_id: this.stateCenter.getRequestId(),
                        custom_content: t || "",
                        room_id: this.room.roomID
                    }, _ = "PRIVATE" == this.stateCenter.type ? {
                        room_header: {
                            room_id: this.room.roomID,
                            room_sid: this.room.roomSid || "0",
                            room_user_session_id: this.room.roomSessionID || "0"
                        }, request_id: this.stateCenter.getRequestId(), msg: t, destids: e
                    } : {dest_id_name: e, custom_msg: JSON.stringify(l)};
                    return this.service.sendCustomCommand(_, (function (e) {
                        r({seq: e.header.seq, errorCode: 0})
                    }), (function (e) {
                        var t,
                            r = s.ClientUtil.getServerError("PRIVATE" == a.stateCenter.type ? e.body.code : e.body.err_code);
                        a.logger.error(n.ZEGO_RTM_ACTION.MESSAGE_SEND_CUSTOM_MSG + " " + r.msg), t = r == i.errorCodeList.TIMEOUT ? i.errorCodeList.IM_SEND_FAILED : r, o({
                            seq: e.header.seq,
                            errorCode: t.code
                        })
                    }), this.room.sessionID, this.room.roomID, this.room.roomSessionID), this.logger.info(n.ZEGO_RTM_ACTION.MESSAGE_SEND_CUSTOM_MSG + " call success"), !0
                }, e.prototype.handlePushCustomMsg = function (e) {
                    var t, r, s, i, n, l;
                    if ("PRIVATE" == this.stateCenter.type) s = (t = [e.body.from_user_id, e.body.from_user_name, this.room.roomID, e.body.msg])[0], i = t[1], n = t[2], l = t[3]; else {
                        var _ = JSON.parse(e.body.custommsg);
                        s = (r = [_.from_userid, _.from_username, _.room_id, _.custom_content])[0], i = r[1], n = r[2], l = r[3]
                    }
                    var d = o.getReportSeq();
                    this.dataReport.newReport(d), this.dataReport.uploadReport(d, a.ZegoRTMLogEvent.kZegoTaskLiveRoomGetCustomCommand.event), this.stateCenter.actionListener("IMRecvCustomCommand", n, {
                        userID: s,
                        userName: i
                    }, l)
                }, e.prototype.sendBigRoomMessage = function (e, t, r, s, i, n) {
                    var a = this, l = this.bigimTimeWindow, _ = this.serverTimeOffset, d = (new Date).getTime() + _,
                        u = o.getSeq().toString();
                    if (this.bigImCallbackMap[u] = {success: i, error: n}, 0 == l) {
                        var E = {msg_category: e, msg_type: 1, msg_content: s, bigmsg_client_id: u};
                        this.sendBigRoomMessageInternal([E], (function (e) {
                            a.handleBigImMsgRsp(e)
                        }), (function (e) {
                            n && n(e)
                        }))
                    } else {
                        var g = Math.floor(d / l);
                        if (this.bigImLastTimeIndex < g && 0 == this.bigIMmessageList.length) {
                            this.bigImLastTimeIndex = g;
                            var c = {msg_category: e, msg_type: 1, msg_content: s, bigmsg_client_id: u};
                            this.sendBigRoomMessageInternal([c], (function (e) {
                                a.handleBigImMsgRsp(e)
                            }), (function (e) {
                                n && n(e)
                            }))
                        } else this.bigIMmessageList.push({
                            msg_category: e,
                            msg_type: 1,
                            msg_content: s,
                            bigmsg_client_id: u
                        }), 1 == this.bigIMmessageList.length && this.setBigImTimer(_, l)
                    }
                }, e.prototype.sendBigRoomMessageInternal = function (e, t, r) {
                    var o = {msgs: e};
                    this.service.sendBigRoomMessage(o, (function (e) {
                        t(e)
                    }), (function (e) {
                        var t = i.errorCodeList.ROOM_INNER_ERROR;
                        e.header && e.body || (e.code && e.msg && (t = e), r(t)), r(t)
                    }), this.room.sessionID, this.room.roomID, this.room.roomSessionID), this.logger.info(n.ZEGO_RTM_ACTION.MESSAGE_SEND_BIG_MSG + " sendBigRoomMessage called")
                }, e.prototype.handleBigImMsgRsp = function (e) {
                    this.bigimTimeWindow = e.body.bigim_time_window;
                    for (var t = 0; t < e.body.msgs.length; t++) {
                        var r = e.body.msgs[t].bigmsg_client_id, o = e.body.msgs[t].bigmsg_id;
                        if (this.bigImCallbackMap[r]) {
                            var s = this.bigImCallbackMap[r].success;
                            null != s && s({
                                seq: e.header.seq,
                                errorCode: 0,
                                messageID: o
                            }), delete this.bigImCallbackMap[r]
                        }
                    }
                }, e.prototype.setBigImTimer = function (e, t) {
                    var r = this, o = t - ((new Date).getTime() + e) % t, i = s.ClientUtil.generateRandumNumber(t) + o;
                    this.bigImTimer = setTimeout((function () {
                        r.onBigImTimer()
                    }), i)
                }, e.prototype.onBigImTimer = function () {
                    var e = this, t = (new Date).getTime() + this.serverTimeOffset;
                    this.bigImLastTimeIndex = Math.floor(t / this.bigimTimeWindow);
                    for (var r = [], o = [], s = 0; s < this.bigIMmessageList.length && !(s >= 20); s++) {
                        var i = this.bigIMmessageList[s];
                        r.push({
                            msg_category: i.msg_category,
                            msg_type: i.msg_type,
                            msg_content: i.msg_content,
                            bigmsg_client_id: i.bigmsg_client_id
                        }), o.push(i.bigmsg_client_id)
                    }
                    this.bigIMmessageList.length > 20 ? this.bigIMmessageList.splice(0, 20) : this.bigIMmessageList = [], this.sendBigRoomMessageInternal(r, (function (t) {
                        e.handleBigImMsgRsp(t)
                    }), (function (t, r) {
                        for (var s = 0; s < o.length; s++) {
                            var i = o[s], n = e.bigImCallbackMap[i];
                            n && (null != n.error && n.error(t, r), delete e.bigImCallbackMap[i])
                        }
                    })), this.bigImTimer && clearTimeout(this.bigImTimer), this.bigImTimer = null, this.bigIMmessageList.length > 0 && this.setBigImTimer(this.serverTimeOffset, this.bigimTimeWindow)
                }, e.prototype.handlePushMergeMsg = function (e) {
                    for (var t = 0; t < e.body.messages.length; t++) 14001 === e.body.messages[t].sub_cmd && this.handlePushBigRooMsg(e.body.messages[t].msg_body)
                }, e.prototype.handlePushBigRooMsg = function (e) {
                    var t;
                    try {
                        t = JSON.parse(e)
                    } catch (e) {
                        return void this.logger.warn(n.ZEGO_RTM_ACTION.MESSAGE_BIG_MSG_PUSH + "parse json error")
                    }
                    if (t) {
                        for (var r = t.room_id, o = [], s = 0; s < t.msg_data.length; s++) {
                            var i = t.msg_data[s];
                            i.id_name != this.stateCenter.idName ? o.push({
                                idName: i.id_name,
                                nickName: i.nick_name,
                                messageId: i.bigmsg_id,
                                category: i.msg_category,
                                type: i.msg_type,
                                content: i.msg_content,
                                time: i.send_time
                            }) : this.logger.info(n.ZEGO_RTM_ACTION.MESSAGE_BIG_MSG_PUSH + " self message")
                        }
                        0 == o.length ? this.logger.info(n.ZEGO_RTM_ACTION.MESSAGE_BIG_MSG_PUSH + " no other pushData except self") : this.onRecvBigRoomMessage(o, r), this.logger.info(n.ZEGO_RTM_ACTION.MESSAGE_BIG_MSG_PUSH + "call success")
                    } else this.logger.warn(n.ZEGO_RTM_ACTION.MESSAGE_BIG_MSG_PUSH + " cann't find message body")
                }, e.prototype.onRecvBigRoomMessage = function (e, t) {
                    var r = o.getReportSeq();
                    this.dataReport.newReport(r);
                    var s = [];
                    e.forEach((function (e) {
                        var t = {
                            fromUser: {userID: e.idName, userName: e.nickName},
                            message: e.content,
                            sendTime: e.time,
                            messageID: e.messageId
                        };
                        s.push(t)
                    })), this.dataReport.uploadReport(r, a.ZegoRTMLogEvent.kZegoTaskLiveGetRoomBigIM.event), this.stateCenter.actionListener("IMRecvBarrageMessage", t, s), this.stateCenter.actionListener("_recvBigRoomMessage", e, t)
                }, e.prototype.resetMessageInfo = function () {
                    this.transSeqMap = {}, this.realyMessageList = [], this.relayTimer && (clearTimeout(this.relayTimer), this.relayTimer = null), this.bigImLastTimeIndex = 0, this.bigIMmessageList = [], this.bigImCallbackMap = {}, this.bigImTimer && (clearTimeout(this.bigImTimer), this.bigImTimer = null), this.serverTimeOffset = 0, this.datiTimeWindow = 0, this.bigimTimeWindow = 0
                }, e.prototype.sendRelayMessage = function (e, t, r, o) {
                    var s = this.datiTimeWindow, i = this.serverTimeOffset;
                    s > 0 ? (this.realyMessageList.push({
                        type: e,
                        data: t,
                        success: r,
                        error: o
                    }), 1 == this.realyMessageList.length && this.setRelayTimer(i, s)) : this.sendRelayMessageInternal(e, t, r, o)
                }, e.prototype.sendRelayMessageInternal = function (e, t, r, o) {
                    this.logger.info(n.ZEGO_RTM_ACTION.MESSAGE_SEND_RELAY_MSG + " call");
                    var a = {relay_type: e, relay_data: t}, l = this.room;
                    this.service.sendRelayMessage(a, (function (e) {
                        r && r(e.header.seq, e.body.relay_result)
                    }), (function (e) {
                        var t = i.errorCodeList.ROOM_INNER_ERROR;
                        if (!e.header || !e.body) return e.code && e.msg && (t = e), void (o && o(t, 0));
                        o && o(s.ClientUtil.getServerError(e.body.err_code), e.header.seq)
                    }), l.sessionID, l.roomID, l.roomSessionID)
                }, e.prototype.setRelayTimer = function (e, t) {
                    var r = this, o = 2 * t - ((new Date).getTime() + e) % t, i = s.ClientUtil.generateRandumNumber(o);
                    this.logger.info(n.ZEGO_RTM_ACTION.MESSAGE_SEND_RELAY_MSG + " setTimer " + i), this.relayTimer = setTimeout((function () {
                        r.onRelayTimer()
                    }), i)
                }, e.prototype.onRelayTimer = function () {
                    if (0 != this.realyMessageList.length) {
                        var e = this.realyMessageList[0];
                        this.sendRelayMessageInternal(e.type, e.data, e.success, e.error), this.relayTimer && clearTimeout(this.relayTimer), this.relayTimer = null, this.realyMessageList.splice(0, 1), this.realyMessageList.length > 0 && this.setRelayTimer(this.serverTimeOffset, this.datiTimeWindow)
                    } else this.logger.info(n.ZEGO_RTM_ACTION.MESSAGE_SEND_RELAY_MSG + "  no relay data")
                }, e.prototype.getRoomChatInfo = function (e, t, r, o) {
                    if (this.logger.debug("zb.mh.grc call"), this.room.isLogin()) {
                        var s = {
                            room_header: {
                                room_id: this.room.roomID,
                                room_sid: this.room.roomSid || "0",
                                room_user_session_id: this.room.roomSessionID || "0"
                            }, msg_id: e, msg_count: t
                        }, i = function (e, t) {
                            if (0 !== e.body.code) o({errorCode: e.body.code, extendData: e.body.message || ""}); else {
                                var s = e.body.msg_data.map((function (e) {
                                    return {
                                        fromUser: {userID: e.user_id, userName: e.user_name},
                                        message: e.msg_content,
                                        sendTime: e.send_time,
                                        messageID: e.msg_id
                                    }
                                }));
                                r({chatData: s})
                            }
                        };
                        this.service.sendMessage("zegochat_js.room_im_chat_fetch", s, i, i), this.logger.info("zb.mh.grc call success")
                    } else this.logger.error("zb.mh.srm no enter room")
                }, e
            }();
            t.MessageHandler = l
        }, function (e, t, r) {
            "use strict";
            var o = this && this.__spreadArrays || function () {
                for (var e = 0, t = 0, r = arguments.length; t < r; t++) e += arguments[t].length;
                var o = Array(e), s = 0;
                for (t = 0; t < r; t++) for (var i = arguments[t], n = 0, a = i.length; n < a; n++, s++) o[s] = i[n];
                return o
            };
            Object.defineProperty(t, "__esModule", {value: !0}), t.UserHandler = void 0;
            var s = r(0), i = r(3), n = r(2), a = r(4), l = function () {
                function e(e, t, r, o, s) {
                    this.logger = e, this.stateCenter = t, this.dataReport = r, this.service = o, this.room = s, this.userQuerying = !1, this.userTempList = [], this.userSeq = 0, this.minUserSeq = 0, this.userList = [], this.userSeqMergeMap = {}, this.userListInterval = 3e4, this.userListMergeInterval = 5e3, this.anchor_info = {
                        anchor_id: "",
                        anchor_id_name: "",
                        anchor_nick_name: ""
                    }
                }

                return e.prototype.loginRsp = function (e, t) {
                    this.anchor_info = e.body.anchor_info || this.anchor_info, this.userListInterval = e.body.userlist_interval || this.userListInterval, this.userListMergeInterval = e.body.userlist_merge_timeout || this.userListMergeInterval, e.body.anchor_info && (this.stateCenter.actionListener("getAnchorInfo", e.body.anchor_info.anchor_id_name, e.body.anchor_info.anchor_nick_name), this.stateCenter.actionListener("_getAnchorInfo", e.body.anchor_info.anchor_id_name, e.body.anchor_info.anchor_nick_name)), e.body.online_count && this.stateCenter.actionListener("roomOnlineUserCountUpdate", this.room.roomID, e.body.online_count), this.logger.info(n.ZEGO_RTM_ACTION.USER_LOGIN_RSP + "  userStateUpdate " + this.stateCenter.userStateUpdate), this.stateCenter.userStateUpdate && this.fetchUserList(t)
                }, e.prototype.patchUserList = function (e) {
                    var t = this;
                    e.body.server_user_seq !== this.userSeq && this.stateCenter.userStateUpdate && !this.userSeqMergeMap && (this.logger.info(n.ZEGO_RTM_ACTION.USER_HB_PATCH + " call update user " + this.userSeq + " server " + e.body.server_user_seq), this.userSeqMergeTimer && clearTimeout(this.userSeqMergeTimer), this.userSeqMergeTimer = setTimeout((function () {
                        t.handleMergeTimeout()
                    }), this.userListMergeInterval)), this.minUserSeq = e.body.server_user_seq, null != e.body.online_count && 0 != e.body.online_count && this.stateCenter.actionListener("roomOnlineUserCountUpdate", this.room.roomID, e.body.online_count)
                }, e.prototype.resetUserHandler = function () {
                    this.userQuerying = !1, this.lastUserQueryTime = 0, this.userTempList = [], this.userSeq = 0, this.minUserSeq = 0, this.userList = void 0, this.userSeqMergeMap = {}, this.userSeqMergeTimer = void 0, this.userQueryTimer = void 0, this.userListInterval = 3e4, this.userListMergeInterval = 5e3, this.anchor_info = {
                        anchor_id: "",
                        anchor_id_name: "",
                        anchor_nick_name: ""
                    }
                }, e.prototype.fetchUserList = function (e) {
                    this.userQuerying ? this.logger.warn(n.ZEGO_RTM_ACTION.USER_FETCH_USER + " is already querying") : (this.userQuerying = !0, this.userTempList = [], this.fetchUserListWithPage(0, e || 0), this.logger.info(n.ZEGO_RTM_ACTION.USER_FETCH_USER + " the first time call"))
                }, e.prototype.fetchUserListWithPage = function (e, t) {
                    var r = this, o = function (e) {
                        "PRIVATE" == r.stateCenter.type ? r.handleFetchUserListPrivateRsp(e) : r.handleFetchUserListRsp(e, t)
                    };
                    "PRIVATE" == this.stateCenter.type && (this.room.roomID, this.room.roomSid, this.room.roomSessionID), "V1" === s.ROOMVERSION ? this.service.fetchUserList({
                        user_index: e,
                        sort_type: 0
                    }, o, o, this.room.sessionID, this.room.roomID, this.room.roomSessionID) : this.service.fetchUserListV2({
                        marker: 0 === e ? "" : e + "",
                        mode: 0,
                        limit: 100
                    }, o, o, this.room.sessionID, this.room.roomID, this.room.roomSessionID)
                }, e.prototype.handleFetchUserListRsp = function (e, t) {
                    var r = this;
                    if (e.body && 0 != e.body.err_code) return this.userQuerying = !1, this.lastUserQueryTime = Date.now() + this.userListInterval, void this.logger.info(n.ZEGO_RTM_ACTION.USER_FETCH_USER_RSP + " fetch error " + e.body.err_code);
                    if (!e.header || !e.body) return this.userQuerying = !1, this.lastUserQueryTime = Date.now() + this.userListInterval, void this.logger.info(n.ZEGO_RTM_ACTION.USER_FETCH_USER_RSP + " fetch error " + e);
                    if (this.stateCenter.userStateUpdate) {
                        this.userTempList = o(this.userTempList, e.body.user_baseinfos);
                        var a = e.body.ret_user_index;
                        if (a != e.body.server_user_index) return this.logger.info(n.ZEGO_RTM_ACTION.USER_FETCH_USER_RSP + " fetch another page"), void this.fetchUserListWithPage(a + 1, t);
                        this.userSeq = e.body.server_user_seq;
                        for (var l = [], _ = [], d = 0; d < this.userTempList.length; d++) {
                            var u = {
                                userID: this.userTempList[d].id_name,
                                userName: this.userTempList[d].nick_name,
                                role: this.userTempList[d].role
                            };
                            l.push(u), _.push({
                                idName: this.userTempList[d].id_name,
                                nickName: this.userTempList[d].nick_name,
                                role: this.userTempList[d].role
                            })
                        }
                        this.stateCenter.actionListener("_getTotalUserList", this.room.roomID, _), t == s.ENUM_RUN_STATE.login ? (this.userList && i.ClientUtil.mergeUserList(this.logger, this.userList, l, (function (e, t) {
                            0 !== e.length && r.onUserStateUpdate(r.room.roomID, "ADD", e), 0 !== t.length && r.onUserStateUpdate(r.room.roomID, "DELETE", t)
                        })), this.userList = l) : (this.userList = l, 0 !== l.length && this.onUserStateUpdate(this.room.roomID, "ADD", l)), this.userQuerying = !1, this.lastUserQueryTime = Date.now() + this.userListInterval, this.userTempList = [], this.logger.info(n.ZEGO_RTM_ACTION.USER_FETCH_USER_RSP + " call success user_list " + l + " count " + l.length)
                    }
                }, e.prototype.handlePushUserStateUpdateMsg = function (e) {
                    if (this.logger.info(n.ZEGO_RTM_ACTION.USER_USER_PUSH + " call"), this.stateCenter.userStateUpdate) if (this.userSeq !== e.body.user_list_seq) if (this.userSeq + e.body.user_actions.length === e.body.user_list_seq) {
                        this.userSeq = e.body.user_list_seq;
                        var t, r, o = [];
                        if ("PRIVATE" == this.stateCenter.type) {
                            t = 0, r = 1;
                            for (var s = 0; s < e.body.user_actions.length; s++) {
                                var i = {
                                    action: e.body.user_actions[s].action,
                                    idName: e.body.user_actions[s].user_id,
                                    nickName: e.body.user_actions[s].user_name,
                                    role: e.body.user_actions[s].role,
                                    loginTime: e.body.user_actions[s].login_time
                                };
                                o.push(i)
                            }
                        } else {
                            for (t = 1, r = 2, s = 0; s < e.body.user_actions.length; s++) i = {
                                action: e.body.user_actions[s].Action,
                                idName: e.body.user_actions[s].IdName,
                                nickName: e.body.user_actions[s].NickName,
                                role: e.body.user_actions[s].Role,
                                loginTime: e.body.user_actions[s].LoginTime
                            }, o.push(i);
                            this.stateCenter.actionListener("_userStateUpdate", e.body.room_id, o)
                        }
                        var a = [], l = [];
                        o.forEach((function (e) {
                            e.action == t ? a.push({
                                userID: e.idName,
                                userName: e.nickName,
                                role: e.role
                            }) : e.action == r && l.push({userID: e.idName, userName: e.nickName, role: e.role})
                        })), this.userList && (this.userList = this.userList.concat(a).filter((function (e) {
                            return !l.some((function (t) {
                                return t.userID == e.userID
                            }))
                        }))), 0 !== a.length && this.onUserStateUpdate(e.body.room_id || e.body.room_pushheader.room_id, "ADD", a), 0 !== l.length && this.onUserStateUpdate(e.body.room_id || e.body.room_pushheader.room_id, "DELETE", l), this.logger.info(n.ZEGO_RTM_ACTION.USER_USER_PUSH + " call success")
                    } else this.mergeUserByUserSeq(e.body.user_list_seq, e.body.user_actions); else this.logger.warn(n.ZEGO_RTM_ACTION.USER_USER_PUSH + " user_list_seq is the same with local seq"); else this.logger.info(n.ZEGO_RTM_ACTION.USER_USER_PUSH + " userStateUpdate is false")
                }, e.prototype.onUserStateUpdate = function (e, t, r) {
                    var o = this, i = s.getReportSeq();
                    this.dataReport.newReport(i, a.ZegoRTMLogEvent.kZegoTaskLiveRoomGetUserUpdateInfo.event);
                    var n = r.filter((function (e) {
                        return e.userID !== o.stateCenter.idName
                    }));
                    0 != n.length && ("PRIVATE" !== this.stateCenter.type && (n = n.map((function (e) {
                        return {userID: e.userID, userName: e.userName}
                    }))), this.stateCenter.actionListener("roomUserUpdate", e, t, n), this.dataReport.addMsgInfo(i, {user_update_type: "ADD" == t ? a.ZegoRTMLogEvent.kZegoTaskLiveRoomGetUserUpdateInfo.user_update_type("added") : a.ZegoRTMLogEvent.kZegoTaskLiveRoomGetUserUpdateInfo.user_update_type("deleted")}), this.dataReport.uploadReport(i))
                }, e.prototype.mergeUserByUserSeq = function (e, t) {
                    var r = this;
                    this.userSeqMergeMap || (this.logger.warn(n.ZEGO_RTM_ACTION.USER_MERGE_SEQ + " new merge userlist " + this.userSeq + " server " + e), this.userSeqMergeMap = {}, this.userSeqMergeTimer && clearTimeout(this.userSeqMergeTimer), this.userSeqMergeTimer = setTimeout((function () {
                        r.handleMergeTimeout()
                    }), this.userListMergeInterval)), this.userSeqMergeMap[e] = t, this.logger.warn(n.ZEGO_RTM_ACTION.USER_MERGE_SEQ + "  merge userlist " + this.userSeq + " server " + e + " userlist " + t.length)
                }, e.prototype.mergeUser = function (e) {
                    var t = this;
                    this.logger.info(n.ZEGO_RTM_ACTION.USER_MERGE + " merge userlist " + this.userSeq + " userSeqList " + e.join(",")), this.userSeq = e[e.length - 1], this.lastUserQueryTime = Date.now() + this.userListInterval;
                    var r = {};
                    e.forEach((function (e) {
                        t.userSeqMergeMap && t.userSeqMergeMap[e].forEach((function (e) {
                            r[e.IdName] = e
                        }))
                    })), this.userSeqMergeMap = null;
                    var o = Object.values(r).map((function (e) {
                        return {
                            action: e.Action,
                            idName: e.IdName,
                            nickName: e.NickName,
                            role: e.Role,
                            loginTime: e.LoginTime ? String(e.LoginTime) : ""
                        }
                    }));
                    o.sort((function (e, t) {
                        return e.loginTime.localeCompare(t.loginTime)
                    }));
                    var s = [], i = [];
                    o.forEach((function (e) {
                        1 == e.action ? s.push({
                            userID: e.idName,
                            userName: e.nickName,
                            role: e.role
                        }) : 2 == e.action && i.push({userID: e.idName, userName: e.nickName, role: e.role})
                    })), this.userList = this.userList && this.userList.concat(s).filter((function (e) {
                        return !i.some((function (t) {
                            return t.userID == e.userID
                        }))
                    })), 0 !== s.length && this.onUserStateUpdate(this.room.roomID, "ADD", s), 0 !== i.length && this.onUserStateUpdate(this.room.roomID, "DELETE", i), this.stateCenter.actionListener("_userStateUpdate", this.room.roomID, o)
                }, e.prototype.handleMergeTimeout = function () {
                    var e = this, t = Object.keys(this.userSeqMergeMap).map((function (e) {
                        return +e
                    })).sort((function (e, t) {
                        return e - t
                    }));
                    if (t[t.length - 1] - t[0] + 1 === t.length || t[t.length - 1] >= this.minUserSeq) this.mergeUser(t); else {
                        this.userSeqMergeMap = null;
                        var r = this.lastUserQueryTime - Date.now();
                        this.logger.info(n.ZEGO_RTM_ACTION.USER_MERGE_TIMEOUT + "  fetch merge userlist " + this.userSeq + " userSeqList " + t.join(",") + " wait " + r), r > 0 ? (this.userQueryTimer && clearTimeout(this.userQueryTimer), this.userQueryTimer = setTimeout((function () {
                            e.fetchUserList()
                        }), r)) : this.fetchUserList()
                    }
                }, e.prototype.loginPrivateRsp = function (e) {
                    this.logger.info(n.ZEGO_RTM_ACTION.USER_FETCH_USER, " userStateUpdate " + this.stateCenter.userStateUpdate), this.stateCenter.userStateUpdate && this.fetchUserList()
                }, e.prototype.handleFetchUserListPrivateRsp = function (e) {
                    if (this.logger.debug(n.ZEGO_RTM_ACTION.USER_FETCH_USER + " call"), e.body.code && 0 !== e.body.code) return this.userQuerying = !1, void this.logger.info(n.ZEGO_RTM_ACTION.USER_FETCH_USER + " fetch error " + e.body.code + " " + e.body.message);
                    if (this.stateCenter.userStateUpdate) {
                        this.userTempList = o(this.userTempList, e.body.users), this.userSeq = e.body.userlist_seq, this.logger.info(n.ZEGO_RTM_ACTION.USER_FETCH_USER + " set user Seq " + this.userSeq);
                        for (var t = [], r = 0; r < this.userTempList.length; r++) {
                            var s = {
                                userID: this.userTempList[r].user_id,
                                userName: this.userTempList[r].user_name,
                                role: this.userTempList[r].role
                            };
                            t.push(s)
                        }
                        this.userQuerying = !1, this.onUserStateUpdate(this.room.roomID, "ADD", t), this.userTempList = [], this.logger.info(n.ZEGO_RTM_ACTION.USER_FETCH_USER + " call success user_list " + t + " count " + t.length)
                    }
                }, e
            }();
            t.UserHandler = l
        }, function (e, t, r) {
            "use strict";
            var o = this && this.__assign || function () {
                return (o = Object.assign || function (e) {
                    for (var t, r = 1, o = arguments.length; r < o; r++) for (var s in t = arguments[r]) Object.prototype.hasOwnProperty.call(t, s) && (e[s] = t[s]);
                    return e
                }).apply(this, arguments)
            }, s = this && this.__spreadArrays || function () {
                for (var e = 0, t = 0, r = arguments.length; t < r; t++) e += arguments[t].length;
                var o = Array(e), s = 0;
                for (t = 0; t < r; t++) for (var i = arguments[t], n = 0, a = i.length; n < a; n++, s++) o[s] = i[n];
                return o
            };
            Object.defineProperty(t, "__esModule", {value: !0}), t.LiveRoomService = void 0;
            var i = r(0), n = r(11), a = r(2), l = r(1), _ = function () {
                function e(e, t) {
                    this.stateCenter = e, this.logger = t, this.service = new n.ZegoSocketService(this.stateCenter.ENV), this.cmdSeq = 0, this.responseRouters = {}
                }

                return e.prototype.checkResponse = function (e) {
                    return e.header.appid !== this.stateCenter.appid || e.header.user_id !== this.stateCenter.userid
                }, e.prototype.handleSendCommandMsgRsp = function (e) {
                    var t = this, r = this.service.sendCommandMap[e.header.seq];
                    if (null != r) {
                        var o = r._data;
                        delete this.service.sendCommandMap[e.header.seq], this.service.sendCommandList.remove(r), 0 === e.body.err_code ? setTimeout((function () {
                            o && null != o.success && o.success(e, t.cmdSeq)
                        }), 0) : setTimeout((function () {
                            o && null != o.error && o.error(e, t.cmdSeq)
                        }), 0)
                    }
                }, e.prototype.onPush = function () {
                    var e = this;
                    this.service.onMessage = function (t) {
                        t instanceof ArrayBuffer ? e.stateCenter.actionListener("_protobufResponse", t) : t.header ? (0 !== t.body.err_code ? t.body.err_message && e.logger.error(a.ZEGO_RTM_ACTION.SERVICE_PUSH + " cmd=" + t.header.cmd + ", err_code=" + t.body.err_code + ", err_message=" + t.body.err_message + " ") : e.logger.info(a.ZEGO_RTM_ACTION.SERVICE_PUSH + " cmd=" + t.header.cmd + ", msg=" + JSON.stringify(t) + " "), ["login", "logout"].indexOf(t.header.cmd) > -1 ? e.handleSendCommandMsgRsp(t) : e.checkResponse(t) ? e.logger.error(a.ZEGO_RTM_ACTION.SERVICE_PUSH + "  check session fail.") : (e.logger.info(a.ZEGO_RTM_ACTION.SERVICE_PUSH + " cmd=" + t.header.cmd + ",function=" + !!e.responseRouters[t.header.cmd]), e.handleSendCommandMsgRsp(t), e.responseRouters[t.header.cmd] && e.responseRouters[t.header.cmd](t, e.cmdSeq))) : e.logger.error(a.ZEGO_RTM_ACTION.SERVICE_PUSH + " msg type error ")
                    }
                }, e.prototype.handlePushKickout = function (e) {
                    var t, r, o, i;
                    if ((null === (t = null == e ? void 0 : e.body) || void 0 === t ? void 0 : t.protocol) && 1 != (null === (r = null == e ? void 0 : e.body) || void 0 === r ? void 0 : r.protocol)) {
                        var n = null === (o = null == e ? void 0 : e.header) || void 0 === o ? void 0 : o.room_id,
                            l = this.stateCenter.roomModulesList.find((function (e) {
                                return e.roomID == n
                            }));
                        if (!l) return void this.logger.error(a.ZEGO_RTM_ACTION.SERVICE_PUSH + " room no found ignore " + JSON.stringify(null === (i = e.header) || void 0 === i ? void 0 : i.room_id));
                        l.roomHandler.handlePushKickout(e)
                    } else s(this.stateCenter.roomModulesList).forEach((function (t) {
                        return t.roomHandler.handlePushKickout(e, !0)
                    }))
                }, e.prototype.handlePushCustomMsg = function (e) {
                    var t, r = null === (t = null == e ? void 0 : e.header) || void 0 === t ? void 0 : t.room_id,
                        o = this.stateCenter.roomModulesList.find((function (e) {
                            return e.roomID == r
                        }));
                    o ? o.messageHandler.handlePushCustomMsg(e) : this.logger.error(a.ZEGO_RTM_ACTION.SERVICE_PUSH + " room no found ignore " + JSON.stringify(e))
                }, e.prototype.handlePushRoomMsg = function (e) {
                    var t, r = null === (t = null == e ? void 0 : e.header) || void 0 === t ? void 0 : t.room_id,
                        o = this.stateCenter.roomModulesList.find((function (e) {
                            return e.roomID == r
                        }));
                    o ? o.messageHandler.handlePushRoomMsg(e) : this.logger.error(a.ZEGO_RTM_ACTION.SERVICE_PUSH + " room no found ignore " + JSON.stringify(e))
                }, e.prototype.handlePushUserStateUpdateMsg = function (e) {
                    var t, r = null === (t = null == e ? void 0 : e.header) || void 0 === t ? void 0 : t.room_id,
                        o = this.stateCenter.roomModulesList.find((function (e) {
                            return e.roomID == r
                        }));
                    o ? o.userHandler.handlePushUserStateUpdateMsg(e) : this.logger.error(a.ZEGO_RTM_ACTION.SERVICE_PUSH + " room no found ignore " + JSON.stringify(e))
                }, e.prototype.handlePushMergeMsg = function (e) {
                    var t, r = null === (t = null == e ? void 0 : e.header) || void 0 === t ? void 0 : t.room_id,
                        o = this.stateCenter.roomModulesList.find((function (e) {
                            return e.roomID == r
                        }));
                    o ? o.messageHandler.handlePushMergeMsg(e) : this.logger.error(a.ZEGO_RTM_ACTION.SERVICE_PUSH + " room no found ignore " + JSON.stringify(e))
                }, e.prototype.handlePushTransMsg = function (e) {
                    var t, r = null === (t = null == e ? void 0 : e.header) || void 0 === t ? void 0 : t.room_id,
                        o = this.stateCenter.roomModulesList.find((function (e) {
                            return e.roomID == r
                        }));
                    o ? o.messageHandler.handlePushTransMsg(e) : this.logger.error(a.ZEGO_RTM_ACTION.SERVICE_PUSH + " room no found ignore " + JSON.stringify(e))
                }, e.prototype.handleBigImMsgRsp = function (e) {
                    var t, r = null === (t = null == e ? void 0 : e.header) || void 0 === t ? void 0 : t.room_id,
                        o = this.stateCenter.roomModulesList.find((function (e) {
                            return e.roomID == r
                        }));
                    o ? o.messageHandler.handleBigImMsgRsp(e) : this.logger.error(a.ZEGO_RTM_ACTION.SERVICE_PUSH + " room no found ignore " + JSON.stringify(e))
                }, e.prototype.handlePushSignalMsg = function (e) {
                    var t, r = null === (t = null == e ? void 0 : e.header) || void 0 === t ? void 0 : t.room_id,
                        o = this.stateCenter.roomModulesList.find((function (e) {
                            return e.roomID == r
                        }));
                    o ? o.liveHandler.handlePushSignalMsg(e) : this.logger.error(a.ZEGO_RTM_ACTION.SERVICE_PUSH + " room no found ignore " + JSON.stringify(e))
                }, e.prototype.closeHandler = function (e) {
                    this.service.closeHandler(e)
                }, e.prototype.openHandler = function (e) {
                    this.service.openHandler(e)
                }, e.prototype.errorHandler = function (e) {
                    this.service.errorHandler(e)
                }, e.prototype.getHeader = function (e, t, r, o) {
                    return {
                        Protocol: "V1" === i.ROOMVERSION ? "req" : "req_v2",
                        cmd: e,
                        appid: this.stateCenter.appid,
                        seq: ++this.cmdSeq,
                        user_id: this.stateCenter.userid,
                        session_id: t || "",
                        room_id: r || "",
                        room_session_id: o || "",
                        biz_version: this.stateCenter.bizVersion || ""
                    }
                }, e.prototype.startCheck = function () {
                    this.service.startCheck()
                }, e.prototype.stopCheck = function () {
                    this.service.stopCheck()
                }, e.prototype.isDisConnect = function () {
                    return !this.service || this.service.isDisConnect()
                }, e.prototype.createSocket = function (e) {
                    var t = this;
                    this.service.createSocket(e), this.responseRouters = o(o({}, this.responseRouters), {
                        push_kickout: function (e) {
                            t.handlePushKickout(e)
                        }, push_custommsg: function (e) {
                            t.handlePushCustomMsg(e)
                        }, push_im_chat: function (e) {
                            t.handlePushRoomMsg(e)
                        }, push_userlist_update: function (e) {
                            t.handlePushUserStateUpdateMsg(e)
                        }, push_merge_message: function (e) {
                            t.handlePushMergeMsg(e)
                        }, push_trans: function (e) {
                            t.handlePushTransMsg(e)
                        }, push_signal: function (e) {
                            t.handlePushSignalMsg(e)
                        }
                    })
                }, e.prototype.closeSocket = function () {
                    this.service.closeSocket()
                }, e.prototype.sendMessage = function (e, t, r, o, s, i) {
                    var n, _, d;
                    if (this.service.isDisConnect()) return this.logger.error(a.ZEGO_RTM_ACTION.SERVICE_SEND + " socket is disconnect"), o(l.errorCodeList.SOCKET_CLOSE), 0;
                    var u = (null == i ? void 0 : i.roomID) ? i.roomID : null === (n = this.stateCenter.roomModulesList[0]) || void 0 === n ? void 0 : n.roomID,
                        E = (null == i ? void 0 : i.roomSessionID) ? i.roomSessionID : null === (_ = this.stateCenter.roomModulesList[0]) || void 0 === _ ? void 0 : _.roomSessionID,
                        g = (null == i ? void 0 : i.sessionID) ? i.sessionID : null === (d = this.stateCenter.roomModulesList[0]) || void 0 === d ? void 0 : d.sessionID,
                        c = s || this.getHeader(e, g, u, E);
                    return this.logger.info(a.ZEGO_RTM_ACTION.SERVICE_SEND + " sendMsg:" + JSON.stringify({
                        header: c,
                        body: t
                    })), this.service.sendMessage(c, t, r, o)
                }, e.prototype.on = function (e, t) {
                    this.responseRouters[e] = t
                }, e.prototype.login = function (e, t, r) {
                    var o = this.getHeader(e.isMulti ? "enter" : "login", e.sessionID, e.roomID, e.roomSessionID), s = {
                        id_name: this.stateCenter.idName,
                        nick_name: this.stateCenter.nickName,
                        role: this.stateCenter.role,
                        token: e.token,
                        version: this.stateCenter.sdKVersion,
                        room_name: e.roomID,
                        user_state_flag: this.stateCenter.userStateUpdate ? 1 : 0,
                        room_create_flag: this.stateCenter.roomCreateFlag,
                        client_type: 0 === this.stateCenter.ENV ? i.E_CLIENT_TYPE.ClientType_Webrtc : i.E_CLIENT_TYPE.ClientType_SmallProgram,
                        third_token: e.thirdToken,
                        user_count_limit: this.stateCenter.maxMemberCount,
                        relate_service: this.stateCenter.relateService.join() || "",
                        login_logic: this.stateCenter.isMultiRoom ? 3 : 1
                    };
                    return this.sendMessage("", s, t, r, o)
                }, e.prototype.logout = function (e, t, r) {
                    var o = e.isMulti ? "quit" : "logout", s = {reserve: 0};
                    return "logout" == o && (s.login_logic = this.stateCenter.isMultiRoom ? 3 : 1), this.sendMessage(o, s, t, r, void 0, {
                        sessionID: e.sessionID,
                        roomID: e.roomID,
                        roomSessionID: e.roomSessionID
                    })
                }, e.prototype.heartBeat = function (e, t, r, o, s) {
                    return this.sendMessage("hb", {reserve: 0}, e, t, void 0, {
                        sessionID: r,
                        roomID: o,
                        roomSessionID: s
                    })
                }, e.prototype.fetchUserList = function (e, t, r, o, s, i) {
                    return this.sendMessage("user_list", e, t, r, void 0, {sessionID: o, roomID: s, roomSessionID: i})
                }, e.prototype.fetchUserListV2 = function (e, t, r, o, s, i) {
                    return this.sendMessage("user_list_v2", e, t, r, void 0, {
                        sessionID: o,
                        roomID: s,
                        roomSessionID: i
                    })
                }, e.prototype.fetchReliableMessage = function (e, t, r, o, s, i) {
                    return this.sendMessage("trans_fetch", e, t, r, void 0, {sessionID: o, roomID: s, roomSessionID: i})
                }, e.prototype.sendReliableMessage = function (e, t, r, o, s, i) {
                    return this.sendMessage("trans", e, t, r, void 0, {sessionID: o, roomID: s, roomSessionID: i})
                }, e.prototype.sendRoomMsg = function (e, t, r, o, s, i) {
                    return this.sendMessage("im_chat", e, t, r, void 0, {sessionID: o, roomID: s, roomSessionID: i})
                }, e.prototype.sendCustomCommand = function (e, t, r, o, s, i) {
                    return this.sendMessage("custommsg", e, t, r, void 0, {sessionID: o, roomID: s, roomSessionID: i})
                }, e.prototype.sendBigRoomMessage = function (e, t, r, o, s, i) {
                    return this.sendMessage("bigim_chat", e, t, r, void 0, {sessionID: o, roomID: s, roomSessionID: i})
                }, e.prototype.sendRelayMessage = function (e, t, r, o, s, i) {
                    return this.sendMessage("relay", e, t, r, void 0, {sessionID: o, roomID: s, roomSessionID: i})
                }, e.prototype.sendSignalCmd = function (e, t, r, o, s, i) {
                    return this.sendMessage("signal", e, t, r, void 0, {sessionID: o, roomID: s, roomSessionID: i})
                }, e.prototype.sendPB = function (e) {
                    return this.service.isDisConnect() ? (this.logger.error(a.ZEGO_RTM_ACTION.ZEGOEXPRESSWEBRTM_SEND_PB + " socket is disconnected"), !1) : this.service.sendPB(e)
                }, e
            }();
            t.LiveRoomService = _
        }, function (e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {value: !0}), t.ZegoSocketService = void 0;
            var o = r(0), s = r(1), i = function () {
                function e(e) {
                    this.socket = null, this.sendCommandList = new o.LinkedList, this.sendCommandMap = {}, this.sendDataCheckOnceCount = 100, this.sendDataDropTimeout = 1e4, this.sendDataCheckInterval = 2e3, this.ENV = e
                }

                return e.prototype.createSocket = function (e) {
                    this.socket = o.createZegoWebSocket(e, this.ENV % 2)
                }, e.prototype.closeSocket = function () {
                    this.socket && (this.socket.onclose = null, this.socket.onerror = null, this.socket.close(), this.socket = null)
                }, e.prototype.isDisConnect = function () {
                    return !this.socket || 1 !== this.socket.readyState
                }, e.prototype.sendMessage = function (e, t, r, o, s) {
                    void 0 === r && (r = null), void 0 === o && (o = null), void 0 === s && (s = {timeOut: 6e3});
                    var i = {header: e, body: t}, n = {
                        data: i,
                        seq: e.seq,
                        deleted: !1,
                        sendTime: Date.parse(new Date + ""),
                        timeOut: s.timeOut,
                        success: r,
                        error: o
                    }, a = this.sendCommandList.push(n);
                    return this.sendCommandMap[n.seq] = a, this.socket && this.socket.send(JSON.stringify(i)), e.seq
                }, e.prototype.sendPB = function (e) {
                    return this.socket && this.socket.send(e), !0
                }, e.prototype.checkSendMessageList = function (e) {
                    for (var t = e.getFirst(); null != t;) e.remove(t), t._data && t._data.error && setTimeout((function () {
                        t && t._data && t._data.error && t._data.error(s.errorCodeList.TIMEOUT, t._data.data.header.seq, t._data.data.body.custom_msg)
                    }), 0), t = e.getFirst()
                }, e.prototype.checkMessageListTimeout = function (e, t) {
                    for (var r = e.getFirst(), o = Date.parse(new Date + ""), i = 0; !(null == r || r._data && r._data.sendTime + r._data.timeOut > o || (r._data && delete t[r._data.data.header.seq], e.remove(r), r._data && null == r._data.error || r._data && r._data.sendTime + this.sendDataDropTimeout < o || setTimeout((function () {
                        r && r._data && r._data.error && r._data.error(s.errorCodeList.TIMEOUT, r._data.data.header.seq, r._data.data.body.custom_msg)
                    }), 0), ++i >= this.sendDataCheckOnceCount));) r = e.getFirst()
                }, e.prototype.startCheck = function () {
                    var e = this;
                    this.checkMessageListTimeout(this.sendCommandList, this.sendCommandMap), this.sendDataCheckTimer = setTimeout((function () {
                        e.startCheck()
                    }), this.sendDataCheckInterval)
                }, e.prototype.stopCheck = function () {
                    this.checkSendMessageList(this.sendCommandList), clearTimeout(this.sendDataCheckTimer)
                }, e.prototype.openHandler = function (e) {
                    var t = this;
                    this.socket && (this.socket.onopen = function (r) {
                        t.socket.binaryType = "arraybuffer", t.responseHandler(), e(r)
                    })
                }, e.prototype.responseHandler = function () {
                    var e = this;
                    this.socket && (this.socket.onmessage = function (t) {
                        var r = "string" == typeof t.data ? JSON.parse(t.data) : t.data;
                        e.onMessage(r)
                    })
                }, e.prototype.closeHandler = function (e) {
                    this.socket && (this.socket.onclose = function (t) {
                        e(t)
                    })
                }, e.prototype.errorHandler = function (e) {
                    this.socket && (this.socket.onerror = e)
                }, e.prototype.onMessage = function (e) {
                }, e
            }();
            t.ZegoSocketService = i
        }, function (e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {value: !0}), t.ZegoExpressWebRTM = t.ZegoDataReport = t.ZegoLogger = t.getSeq = t.getReportSeq = t.ZegoExpressWebRTMEngine = void 0;
            var o = r(13);
            Object.defineProperty(t, "ZegoExpressWebRTM", {
                enumerable: !0, get: function () {
                    return o.ZegoExpressWebRTM
                }
            });
            var s = r(0), i = function () {
                function e(t, r, i) {
                    void 0 === i && (i = 0), this.logger = new s.ZegoLogger(i), this.dataReport = new s.ZegoDataReport(this.logger), this.zegoWebRTM = new o.ZegoExpressWebRTM(t, r, this.logger, this.dataReport, e.version, i)
                }

                return e.prototype.loginRoom = function (e, t, r, o) {
                    return this.zegoWebRTM.loginRoom(e, t, r, o)
                }, e.prototype.logoutRoom = function (e) {
                    return this.zegoWebRTM.logoutRoom(e)
                }, e.prototype.renewToken = function (e, t) {
                    return this.zegoWebRTM.renewToken(e, t)
                }, e.prototype.sendBarrageMessage = function (e, t) {
                    return this.zegoWebRTM.sendBarrageMessage(e, t)
                }, e.prototype.sendBroadcastMessage = function (e, t) {
                    return this.zegoWebRTM.sendBroadcastMessage(e, t)
                }, e.prototype.sendCustomCommand = function (e, t, r) {
                    return this.zegoWebRTM.sendCustomCommand(e, t, r)
                }, e.prototype.setRoomExtraInfo = function (e, t, r) {
                    return this.zegoWebRTM.setRoomExtraInfo(e, t, r)
                }, e.prototype.setLogConfig = function (e) {
                    return this.zegoWebRTM.setLogConfig(e)
                }, e.prototype.setDebugVerbose = function (e) {
                    return this.zegoWebRTM.setDebugVerbose(e)
                }, e.prototype.on = function (e, t) {
                    return this.zegoWebRTM.on(e, t)
                }, e.prototype.getVersion = function () {
                    return this.zegoWebRTM.getVersion()
                }, e.prototype.off = function (e, t) {
                    return this.zegoWebRTM.off(e, t)
                }, e.prototype.loginHall = function (e, t, r) {
                    return this.zegoWebRTM.loginHall(e, t, r)
                }, e.prototype.logoutHall = function () {
                    return this.zegoWebRTM.logoutHall()
                }, e.prototype.enterRoom = function (e, t) {
                    return this.zegoWebRTM.enterRoom(e, t)
                }, e.prototype.leaveRoom = function () {
                    return this.zegoWebRTM.leaveRoom()
                }, e.prototype.sendRelayMessage = function (e, t, r, o) {
                    this.zegoWebRTM.sendRelayMessage(e, t, r, o)
                }, e.prototype.requestJoinLive = function (e, t, r, o) {
                    return this.zegoWebRTM.requestJoinLive(e, t, r, o)
                }, e.prototype.inviteJoinLive = function (e, t, r, o) {
                    return this.zegoWebRTM.inviteJoinLive(e, t, r, o)
                }, e.prototype.endJoinLive = function (e, t, r) {
                    return this.zegoWebRTM.endJoinLive(e, t, r)
                }, e.prototype.respondJoinLive = function (e, t, r, o) {
                    return this.zegoWebRTM.respondJoinLive(e, t, r, o)
                }, e.prototype.enableMultiRoom = function (e) {
                    return this.zegoWebRTM.enableMultiRoom(e)
                }, e.version = s.PROTO_VERSION, e
            }();
            t.ZegoExpressWebRTMEngine = i;
            var n = r(0);
            Object.defineProperty(t, "getReportSeq", {
                enumerable: !0, get: function () {
                    return n.getReportSeq
                }
            }), Object.defineProperty(t, "getSeq", {
                enumerable: !0, get: function () {
                    return n.getSeq
                }
            }), Object.defineProperty(t, "ZegoLogger", {
                enumerable: !0, get: function () {
                    return n.ZegoLogger
                }
            }), Object.defineProperty(t, "ZegoDataReport", {
                enumerable: !0, get: function () {
                    return n.ZegoDataReport
                }
            })
        }, function (e, t, r) {
            "use strict";
            var o = this && this.__awaiter || function (e, t, r, o) {
                return new (r || (r = Promise))((function (s, i) {
                    function n(e) {
                        try {
                            l(o.next(e))
                        } catch (e) {
                            i(e)
                        }
                    }

                    function a(e) {
                        try {
                            l(o.throw(e))
                        } catch (e) {
                            i(e)
                        }
                    }

                    function l(e) {
                        var t;
                        e.done ? s(e.value) : (t = e.value, t instanceof r ? t : new r((function (e) {
                            e(t)
                        }))).then(n, a)
                    }

                    l((o = o.apply(e, t || [])).next())
                }))
            }, s = this && this.__generator || function (e, t) {
                var r, o, s, i, n = {
                    label: 0, sent: function () {
                        if (1 & s[0]) throw s[1];
                        return s[1]
                    }, trys: [], ops: []
                };
                return i = {
                    next: a(0),
                    throw: a(1),
                    return: a(2)
                }, "function" == typeof Symbol && (i[Symbol.iterator] = function () {
                    return this
                }), i;

                function a(i) {
                    return function (a) {
                        return function (i) {
                            if (r) throw new TypeError("Generator is already executing.");
                            for (; n;) try {
                                if (r = 1, o && (s = 2 & i[0] ? o.return : i[0] ? o.throw || ((s = o.return) && s.call(o), 0) : o.next) && !(s = s.call(o, i[1])).done) return s;
                                switch (o = 0, s && (i = [2 & i[0], s.value]), i[0]) {
                                    case 0:
                                    case 1:
                                        s = i;
                                        break;
                                    case 4:
                                        return n.label++, {value: i[1], done: !1};
                                    case 5:
                                        n.label++, o = i[1], i = [0];
                                        continue;
                                    case 7:
                                        i = n.ops.pop(), n.trys.pop();
                                        continue;
                                    default:
                                        if (!((s = (s = n.trys).length > 0 && s[s.length - 1]) || 6 !== i[0] && 2 !== i[0])) {
                                            n = 0;
                                            continue
                                        }
                                        if (3 === i[0] && (!s || i[1] > s[0] && i[1] < s[3])) {
                                            n.label = i[1];
                                            break
                                        }
                                        if (6 === i[0] && n.label < s[1]) {
                                            n.label = s[1], s = i;
                                            break
                                        }
                                        if (s && n.label < s[2]) {
                                            n.label = s[2], n.ops.push(i);
                                            break
                                        }
                                        s[2] && n.ops.pop(), n.trys.pop();
                                        continue
                                }
                                i = t.call(e, n)
                            } catch (e) {
                                i = [6, e], o = 0
                            } finally {
                                r = s = 0
                            }
                            if (5 & i[0]) throw i[1];
                            return {value: i[0] ? i[1] : void 0, done: !0}
                        }([i, a])
                    }
                }
            }, i = this && this.__spreadArrays || function () {
                for (var e = 0, t = 0, r = arguments.length; t < r; t++) e += arguments[t].length;
                var o = Array(e), s = 0;
                for (t = 0; t < r; t++) for (var i = arguments[t], n = 0, a = i.length; n < a; n++, s++) o[s] = i[n];
                return o
            };
            Object.defineProperty(t, "__esModule", {value: !0}), t.ZegoExpressWebRTM = void 0;
            var n = r(0), a = r(1), l = r(3), _ = r(0), d = r(16), u = r(17), E = r(18), g = r(19), c = r(21), h = r(2),
                T = r(4), m = r(24), p = r(10), R = r(25), S = function () {
                    function e(e, t, r, o, s, i) {
                        this.logger = r, this.dataReport = o, this.version = s, this.stateCenter = new E.StateCenter(this.logger, this.dataReport), this.stateCenter.ENV = i;
                        var a = _.getReportSeq();
                        if (this.dataReport.newReport(a), (0 == i || 1 == i) && this.setDebug(t), l.ClientUtil.checkConfigParam(e, t, this.logger)) {
                            if (this.stateCenter.appid = e, this.stateCenter.configOK = !0, this.stateCenter.sdKVersion = this.version, 0 == i || 1 == i ? ("string" == typeof t ? (this.stateCenter.server = t, this.stateCenter.serverBak = t) : Array.isArray(t) && t.length > 0 && (this.stateCenter.server = t[0], this.stateCenter.serverBak = t[1] || t[0]), this.service = new p.LiveRoomService(this.stateCenter, this.logger)) : 2 != i && 3 != i || (this.service = new R.LiveRoomPrivateService(this.stateCenter, this.logger), this.module = new c.LiveRoomModules(this.stateCenter, this.logger, this.dataReport, this.service), this.stateCenter.priModules = this.module, this.module.dispatchServer = t, this.stateCenter.type = "PRIVATE"), 0 == i || 2 == i) this.bindWindowListener(), this.logger.info(h.ZEGO_RTM_ACTION.ZEGOEXPRESSWEBRTM_CONSTRUCTOR + "  " + navigator.appVersion), this.stateCenter.networkState = navigator ? navigator.onLine ? n.ENUM_NETWORK_STATE.online : n.ENUM_NETWORK_STATE.offline : n.ENUM_NETWORK_STATE.online, this.dataReport.addMsgInfo(a, {system_info: T.ZegoRTMLogEvent.kZegoTaskInitSetting.system_info}); else if (1 == i || 3 == i) {
                                this.bindWxListener();
                                try {
                                    var d = wx.getSystemInfoSync(), u = {
                                        brand: d.brand,
                                        model: d.model,
                                        system: d.system,
                                        platform: d.platform,
                                        version: d.version,
                                        SDKVersion: d.SDKVersion
                                    };
                                    this.dataReport.addMsgInfo(a, {system_info: u})
                                } catch (e) {
                                    this.logger.warn(h.ZEGO_RTM_ACTION.ZEGOEXPRESSWEBRTM_CONSTRUCTOR + " get system info error")
                                }
                            }
                            this.logger.setSessionInfo(this.stateCenter.appid, "", "", "", "", this.version)
                        } else this.logger.error(h.ZEGO_RTM_ACTION.ZEGOEXPRESSWEBRTM_CONSTRUCTOR + " init sdk error"), this.dataReport.addMsgInfo(a, T.ZegoRTMLogEvent.kZegoTaskInitSetting.error.kInvalidParamError);
                        this.dataReport.uploadReport(a, T.ZegoRTMLogEvent.kZegoTaskInitSetting.event)
                    }

                    return Object.defineProperty(e.prototype, "modules", {
                        get: function () {
                            return {service: this.service}
                        }, enumerable: !1, configurable: !0
                    }), e.prototype.bindWindowListener = function () {
                        var e = this, t = navigator.userAgent.match(/iPad/i) || navigator.userAgent.match(/iPhone/i),
                            r = l.ClientUtil.getBrowser(), o = t ? "pagehide" : "Firefox" === r ? "beforeunload" : "unload";
                        window.addEventListener(o, (function () {
                            e.logger.info(h.ZEGO_RTM_ACTION.ZEGOEXPRESSWEBRTM_BIND_WINDOW_LISTENER + " " + o), "PUBLIC" === e.stateCenter.type ? e.logoutRoom() : (e.leaveRoom(), e.logoutHall()), e.logoutRoom()
                        })), window.addEventListener("offline", (function () {
                            e.netOffLineHandle()
                        })), window.addEventListener("online", (function () {
                            e.netOnLineHandle()
                        }))
                    }, e.prototype.bindWxListener = function () {
                        var e = this;
                        wx.onNetworkStatusChange((function (t) {
                            t.isConnected ? e.netOnLineHandle() : e.netOffLineHandle()
                        }))
                    }, e.prototype.netOnLineHandle = function () {
                        var e = this;
                        this.logger.info(h.ZEGO_RTM_ACTION.ZEGOEXPRESSWEBRTM_BIND_WINDOW_LISTENER + "network is online"), this.stateCenter.networkState = n.ENUM_NETWORK_STATE.online, this.stateCenter.roomModulesList.forEach((function (t) {
                            t.roomTryHandler && e.service.isDisConnect() ? t.roomTryHandler.active() : t.roomTryHandler && (t.roomTryHandler.stopMaxTime(), t.roomHandler.roomStateHandle("CONNECTED", {
                                code: 0,
                                msg: ""
                            }))
                        }))
                    }, e.prototype.netOffLineHandle = function () {
                        this.logger.info(h.ZEGO_RTM_ACTION.ZEGOEXPRESSWEBRTM_BIND_WINDOW_LISTENER + " network is broken"), this.stateCenter.networkState = n.ENUM_NETWORK_STATE.offline, this.stateCenter.roomModulesList.forEach((function (e) {
                            e.roomTryHandler && (e.roomTryHandler.invalid(), e.roomTryHandler.onactive = function (t, r) {
                                e.roomHandler.disconnectedHandle(r)
                            }, e.roomTryHandler.startMaxTime(), e.roomHandler.roomStateHandle("CONNECTING", a.errorCodeList.NETWORK_BROKEN))
                        }))
                    }, e.prototype.setLogConfig = function (e) {
                        this.logger.info(h.ZEGO_RTM_ACTION.ZEGOEXPRESSWEBRTM_SET_LOG_CONFIG + " call");
                        var t = _.getReportSeq();
                        if (this.dataReport.newReport(t), e.logLevel && ["debug", "info", "warn", "error", "report", "disable"].includes(e.logLevel) && (this.logger.setLogLevel(e.logLevel), this.dataReport.addMsgInfo(t, {log_level: T.ZegoRTMLogEvent.kZegoTaskSetLog.log_level(e.logLevel)})), e.remoteLogLevel && ["debug", "info", "warn", "error", "report", "disable"].includes(e.remoteLogLevel) && (this.logger.setRemoteLogLevel(e.remoteLogLevel), this.dataReport.addMsgInfo(t, {remote_log_level: T.ZegoRTMLogEvent.kZegoTaskSetLog.remote_log_level(e.remoteLogLevel)})), "string" == typeof e.logURL && (e.logURL.startsWith("wss://") || e.logURL.startsWith("https://"))) this.logger.setLogServer(e.logURL), this.dataReport.addMsgInfo(t, {log_url: T.ZegoRTMLogEvent.kZegoTaskSetLog.log_url(e.logURL)}), this.dataReport.uploadReport(t, T.ZegoRTMLogEvent.kZegoTaskSetLog.event); else if (e.logURL) return this.logger.error(h.ZEGO_RTM_ACTION.ZEGOEXPRESSWEBRTM_SET_LOG_CONFIG + "log url must be a wss or https url"), this.dataReport.addMsgInfo(t, T.ZegoRTMLogEvent.kZegoTaskSetLog.error.kInvalidParamError), this.dataReport.uploadReport(t, T.ZegoRTMLogEvent.kZegoTaskSetLog.event), !1;
                        return this.logger.info(h.ZEGO_RTM_ACTION.ZEGOEXPRESSWEBRTM_SET_LOG_CONFIG + " call success"), !0
                    }, e.prototype.setDebugVerbose = function (e) {
                        var t = _.getReportSeq();
                        this.dataReport.newReport(t), "boolean" == typeof e && (this.stateCenter.debug = e, this.stateCenter.debugCustom = !0, this.dataReport.addMsgInfo(t, {debug: T.ZegoRTMLogEvent.kZegoTaskSetDebug.debug(e ? "true" : "false")})), this.dataReport.uploadReport(t, T.ZegoRTMLogEvent.kZegoTaskSetDebug.event), this.logger.info(h.ZEGO_RTM_ACTION.ZEGOEXPRESSWEBRTM_SET_DEBUG_VERBOSE + " call success")
                    }, e.prototype.setDebug = function (e) {
                        "string" == typeof e && e.indexOf("wss") > -1 ? this.stateCenter.debug = l.ClientUtil.isTestEnv(e) : Array.isArray(e) && e.length > 0 && e.every((function (e) {
                            return "string" == typeof e && e.indexOf("wss") > -1
                        })) ? this.stateCenter.debug = l.ClientUtil.isTestEnv(e[0]) || l.ClientUtil.isTestEnv(e[1]) : this.logger.info(h.ZEGO_RTM_ACTION.ZEGOEXPRESSWEBRTM_CONSTRUCTOR + " server wrong"), this.stateCenter.testEnvironment = this.stateCenter.debug
                    }, e.prototype.renewToken = function (e, t) {
                        var r, o = _.getReportSeq();
                        if (this.dataReport.newReport(o), void 0 !== t && ("string" != typeof t || "" == t)) return this.logger.error(h.ZEGO_RTM_ACTION.ZEGOEXPRESSWEBRTM_RENEWTOKEN + " roomID must be string and no empty"), !1;
                        var s = this.getRoomModules(t) || this.stateCenter.roomModulesList[0];
                        return s ? "string" == typeof e && s.roomTryHandler ? (null === (r = s.roomTryHandler) || void 0 === r || r.renewToken(e), this.dataReport.uploadReport(o, T.ZegoRTMLogEvent.kZegoTaskReNewToken.event), !0) : "string" != typeof e || s.roomTryHandler ? (this.logger.error(h.ZEGO_RTM_ACTION.ZEGOEXPRESSWEBRTM_RENEWTOKEN + " token must be string and not empty"), this.dataReport.addMsgInfo(o, {
                            error: T.ZegoRTMLogEvent.kZegoTaskReNewToken.error.INPUT_PARAM.code,
                            message: T.ZegoRTMLogEvent.kZegoTaskReNewToken.error.INPUT_PARAM.msg + " param token error"
                        }), this.dataReport.uploadReport(o, T.ZegoRTMLogEvent.kZegoTaskReNewToken.event), !1) : (this.logger.error(h.ZEGO_RTM_ACTION.ZEGOEXPRESSWEBRTM_RENEWTOKEN + " calling must after loginRoom"), this.dataReport.addMsgInfo(o, {
                            error: T.ZegoRTMLogEvent.kZegoTaskReNewToken.error.NOT_LOGIN.code,
                            message: T.ZegoRTMLogEvent.kZegoTaskReNewToken.error.NOT_LOGIN.msg
                        }), this.dataReport.uploadReport(o, T.ZegoRTMLogEvent.kZegoTaskReNewToken.event), !1) : (this.logger.error(h.ZEGO_RTM_ACTION.ZEGOEXPRESSWEBRTM_RENEWTOKEN + " calling must after loginRoom"), this.dataReport.addMsgInfo(o, {
                            error: T.ZegoRTMLogEvent.kZegoTaskReNewToken.error.NOT_LOGIN.code,
                            message: T.ZegoRTMLogEvent.kZegoTaskReNewToken.error.NOT_LOGIN.msg
                        }), this.dataReport.uploadReport(o, T.ZegoRTMLogEvent.kZegoTaskReNewToken.event), !1)
                    }, e.prototype.loginRoom = function (e, t, r, a) {
                        var l = this;
                        return new Promise((function (_, E) {
                            return o(l, void 0, void 0, (function () {
                                var o, l, c, m, p, R = this;
                                return s(this, (function (s) {
                                    switch (s.label) {
                                        case 0:
                                            return 1 !== this.stateCenter.ENV ? [3, 2] : [4, new Promise((function (e) {
                                                wx.getNetworkType({
                                                    success: function (t) {
                                                        R.stateCenter.networkState = "none" === t.networkType ? n.ENUM_NETWORK_STATE.offline : n.ENUM_NETWORK_STATE.online, e()
                                                    }, fail: function (t) {
                                                        R.logger.error(h.ZEGO_RTM_ACTION.ZEGOEXPRESSWEBRTM_CONSTRUCTOR + " network " + JSON.stringify(t)), R.stateCenter.networkState = n.ENUM_NETWORK_STATE.online, e()
                                                    }
                                                })
                                            }))];
                                        case 1:
                                            s.sent(), s.label = 2;
                                        case 2:
                                            return o = this.loginReport(_, E, t, a), l = o.interResolve, c = o.interReject, !(a = a || {}).maxMemberCount && (a.maxMemberCount = 0), (m = u.checkParams({
                                                roomID: {
                                                    order: 0,
                                                    value: e,
                                                    rules: [{
                                                        name: u.RULE_PARAM_NAME.NOT_EMPTY,
                                                        error: T.ZegoRTMLogEvent.kZegoTaskLoginRoom.error.ROOM_ID_NULL
                                                    }, {
                                                        name: u.RULE_PARAM_NAME.TYPE_STRING,
                                                        error: T.ZegoRTMLogEvent.kZegoTaskLoginRoom.error.INPUT_PARAM,
                                                        extMsg: "roomID must be string"
                                                    }, {
                                                        name: u.RULE_PARAM_NAME.MAX_LENGTH_128,
                                                        error: T.ZegoRTMLogEvent.kZegoTaskLoginRoom.error.ROOM_ID_TOO_LONG
                                                    }, {
                                                        name: u.RULE_PARAM_NAME.ILLEGAL_CHARACTERS,
                                                        error: T.ZegoRTMLogEvent.kZegoTaskLoginRoom.error.ROOM_ID_INVALID_CHARACTER
                                                    }]
                                                },
                                                token: {
                                                    order: 1,
                                                    value: t,
                                                    rules: [{
                                                        name: u.RULE_PARAM_NAME.NOT_EMPTY,
                                                        error: T.ZegoRTMLogEvent.kZegoTaskLoginRoom.error.INPUT_PARAM
                                                    }, {
                                                        name: u.RULE_PARAM_NAME.TYPE_STRING,
                                                        error: T.ZegoRTMLogEvent.kZegoTaskLoginRoom.error.INPUT_PARAM
                                                    }]
                                                },
                                                user: {
                                                    order: 2,
                                                    value: r,
                                                    rules: [{
                                                        name: u.RULE_PARAM_NAME.NOT_EMPTY,
                                                        error: T.ZegoRTMLogEvent.kZegoTaskLoginRoom.error.INPUT_PARAM,
                                                        extMsg: " param user error."
                                                    }, {
                                                        name: u.RULE_PARAM_NAME.TYPE_OBJECT,
                                                        error: T.ZegoRTMLogEvent.kZegoTaskLoginRoom.error.INPUT_PARAM,
                                                        extMsg: " param user error."
                                                    }]
                                                },
                                                "user.userID": {
                                                    order: 3,
                                                    value: r.userID,
                                                    rules: [{
                                                        name: u.RULE_PARAM_NAME.NOT_EMPTY,
                                                        error: T.ZegoRTMLogEvent.kZegoTaskLoginRoom.error.USER_ID_NULL,
                                                        extMsg: " param user error."
                                                    }, {
                                                        name: u.RULE_PARAM_NAME.TYPE_STRING,
                                                        error: T.ZegoRTMLogEvent.kZegoTaskLoginRoom.error.INPUT_PARAM,
                                                        extMsg: " param userID error."
                                                    }, {
                                                        name: u.RULE_PARAM_NAME.MAX_LENGTH_100,
                                                        error: T.ZegoRTMLogEvent.kZegoTaskLoginRoom.error.USER_ID_TOO_LONG
                                                    }, {
                                                        name: u.RULE_PARAM_NAME.ILLEGAL_CHARACTERS,
                                                        error: T.ZegoRTMLogEvent.kZegoTaskLoginRoom.error.USER_ID_INVALID_CHARACTER
                                                    }]
                                                },
                                                "user.userName": {
                                                    order: 4,
                                                    value: r.userName,
                                                    rules: [{
                                                        name: u.RULE_PARAM_NAME.TYPE_STRING,
                                                        error: T.ZegoRTMLogEvent.kZegoTaskLoginRoom.error.INPUT_PARAM,
                                                        extMsg: " userName must be string."
                                                    }, {
                                                        name: u.RULE_PARAM_NAME.MAX_LENGTH_256,
                                                        error: T.ZegoRTMLogEvent.kZegoTaskLoginRoom.error.USER_NAME_TOO_LONG
                                                    }]
                                                },
                                                config: {order: 5, value: a, rules: []},
                                                "config.maxMemberCount": {
                                                    order: 6,
                                                    value: a.maxMemberCount,
                                                    rules: [{
                                                        name: u.RULE_PARAM_NAME.TYPE_INTEGER,
                                                        error: T.ZegoRTMLogEvent.kZegoTaskLoginRoom.error.INPUT_PARAM,
                                                        extMsg: " maxMemberCount must be integer number."
                                                    }]
                                                }
                                            }, {
                                                action: h.ZEGO_RTM_ACTION.ZEGOEXPRESSWEBRTM_LOGIN_ROOM,
                                                logger: this.logger
                                            })) !== u.RULE_SUCCESS ? (c(m.error, m.extMsg), [2]) : (p = this.getRoomModules(e)) ? (c(T.ZegoRTMLogEvent.kZegoTaskLoginRoom.error.REPEATEDLY_LOGIN), [2]) : (p = new g.LiveRoomModules(e, this.stateCenter, this.logger, this.dataReport, this.service), this.stateCenter.roomModulesList.length > 0 && 1 == this.stateCenter.isMultiRoom ? p.isMulti = !0 : i(this.stateCenter.roomModulesList).forEach((function (e) {
                                                return e.roomHandler.logout()
                                            })), this.stateCenter.roomModulesList.push(p), p.roomTryHandler || (p.roomTryHandler = new d.RetryRoomHandler(this.logger, this.stateCenter, p)), p.roomTryHandler.init(this.stateCenter.roomRetryTime), p.roomTryHandler.initRoom(p.roomHandler, e, t, r, this.stateCenter.server, this.stateCenter.serverBak, a), p.roomTryHandler.onactive = function (e, t) {
                                                e ? l(e) : c(t)
                                            }, p.roomTryHandler.active(!0), this.stateCenter.setMultiRoom = !0, [2])
                                    }
                                }))
                            }))
                        }))
                    }, e.prototype.loginReport = function (e, t, r, o) {
                        var s = this;
                        0 !== this.stateCenter.reportSeqList.login && (this.dataReport.uploadReport(this.stateCenter.reportSeqList.login), this.stateCenter.reportSeqList.login = 0, l.ClientUtil.unregisterCallback(T.ZegoRTMLogEvent.kZegoTaskLoginRoom.event, this.stateCenter.reportList));
                        var i = _.getReportSeq();
                        return this.stateCenter.reportSeqList.login = i, this.dataReport.newReport(i, T.ZegoRTMLogEvent.kZegoTaskLoginRoom.event), "string" == typeof r && this.dataReport.addMsgInfo(i, {
                            token: T.ZegoRTMLogEvent.kZegoTaskLoginRoom.token(r),
                            isMulti: this.stateCenter.isMultiRoom
                        }), o && (o.userUpdate && "boolean" == typeof o.userUpdate && this.dataReport.addMsgInfo(i, {user_update: T.ZegoRTMLogEvent.kZegoTaskLoginRoom.user_update(o.userUpdate + "")}), o.maxMemberCount && "number" == typeof o.maxMemberCount && this.dataReport.addMsgInfo(i, {max_member_count: T.ZegoRTMLogEvent.kZegoTaskLoginRoom.max_member_count(o.maxMemberCount + "")})), l.ClientUtil.logReportCallback(T.ZegoRTMLogEvent.kZegoTaskLoginRoom.event, this.dataReport, i, this.stateCenter.reportList), {
                            interResolve: function (t) {
                                s.dataReport.uploadReport(i), s.stateCenter.reportSeqList.login = 0, l.ClientUtil.unregisterCallback(T.ZegoRTMLogEvent.kZegoTaskLoginRoom.event, s.stateCenter.reportList), e(t)
                            }, interReject: function (e, r) {
                                var o, n;
                                void 0 === r && (r = ""), e.code < 2e9 && e.code > 1e9 || e.code < 1e6 ? (o = l.ClientUtil.decodeServerError(e.code, e.msg), n = l.ClientUtil.getLiveRoomError(e.code)) : o = {
                                    code: e.code,
                                    message: e.msg
                                }, o && s.dataReport.addMsgInfo(i, {
                                    error: o.code,
                                    message: o.message + r
                                }), s.dataReport.uploadReport(i), s.stateCenter.reportSeqList.login = 0, l.ClientUtil.unregisterCallback(T.ZegoRTMLogEvent.kZegoTaskLoginRoom.event, s.stateCenter.reportList), n && a.errorCodeList[n] && (e.code = a.errorCodeList[n].code), e.code && e.msg && "" !== r ? t({
                                    code: e.code,
                                    msg: e.msg + r
                                }) : t(e)
                            }
                        }
                    }, e.prototype.logoutRoom = function (e) {
                        var t = _.getReportSeq();
                        if (this.dataReport.newReport(t), this.dataReport.addMsgInfo(t, {
                            roomid: e,
                            isMulti: this.stateCenter.isMultiRoom
                        }), void 0 === e) i(this.stateCenter.roomModulesList).forEach((function (e) {
                            return e.roomHandler.logout(!0)
                        })); else {
                            if ("string" != typeof e || "" == e) return this.logger.error(h.ZEGO_RTM_ACTION.ZEGOEXPRESSWEBRTM_LOGOUT_ROOM + " roomID must be string and not empty"), this.dataReport.addMsgInfo(t, {
                                error: T.ZegoRTMLogEvent.kZegoTaskLogoutRoom.error.INPUT_PARAM.code,
                                message: T.ZegoRTMLogEvent.kZegoTaskLogoutRoom.error.INPUT_PARAM.msg + " param roomID error"
                            }), void this.dataReport.uploadReport(t, T.ZegoRTMLogEvent.kZegoTaskLogoutRoom.event);
                            var r = this.getRoomModules(e);
                            r ? (r.roomHandler.logout(), this.dataReport.uploadReport(t, T.ZegoRTMLogEvent.kZegoTaskLogoutRoom.event)) : (this.logger.error(h.ZEGO_RTM_ACTION.ZEGOEXPRESSWEBRTM_LOGOUT_ROOM + " room not exist"), this.dataReport.addMsgInfo(t, {
                                error: T.ZegoRTMLogEvent.kZegoTaskLogoutRoom.error.ROOM_NOT_EXIST.code,
                                message: T.ZegoRTMLogEvent.kZegoTaskLogoutRoom.error.ROOM_NOT_EXIST.msg
                            }), this.dataReport.uploadReport(t, T.ZegoRTMLogEvent.kZegoTaskLogoutRoom.event))
                        }
                    }, e.prototype.loginHall = function (e, t, r) {
                        var i = this;
                        return new Promise((function (a, l) {
                            return o(i, void 0, void 0, (function () {
                                var o, i, _, d, u = this;
                                return s(this, (function (s) {
                                    switch (s.label) {
                                        case 0:
                                            return 3 !== this.stateCenter.ENV ? [3, 2] : [4, new Promise((function (e) {
                                                wx.getNetworkType({
                                                    success: function (t) {
                                                        u.stateCenter.networkState = "none" === t.networkType ? n.ENUM_NETWORK_STATE.offline : n.ENUM_NETWORK_STATE.online, e()
                                                    }, fail: function (t) {
                                                        u.logger.error(h.ZEGO_RTM_ACTION.ZEGOEXPRESSWEBRTM_LOGIN_HALL + " network " + JSON.stringify(t)), u.stateCenter.networkState = n.ENUM_NETWORK_STATE.online, e()
                                                    }
                                                })
                                            }))];
                                        case 1:
                                            s.sent(), s.label = 2;
                                        case 2:
                                            return o = this.loginHallReport(a, l, e, r), i = o.interResolve, _ = o.interReject, r = r || {}, "string" != typeof e || "" == e ? (this.logger.error(h.ZEGO_RTM_ACTION.ZEGOEXPRESSWEBRTM_LOGIN_HALL + " token format error"), _(T.ZegoRTMLogEvent.kZegoTaskLoginHall.error.INPUT_PARAM, "token format error"), [2]) : "object" != typeof t || "string" != typeof t.userID || "string" != typeof t.userName ? (this.logger.error(h.ZEGO_RTM_ACTION.ZEGOEXPRESSWEBRTM_LOGIN_HALL + " user error"), _(T.ZegoRTMLogEvent.kZegoTaskLoginHall.error.INPUT_PARAM, " user error"), [2]) : "object" != typeof r || "string" != typeof r.deviceID ? (this.logger.error(h.ZEGO_RTM_ACTION.ZEGOEXPRESSWEBRTM_LOGIN_HALL + " deviceID error"), _(T.ZegoRTMLogEvent.kZegoTaskLoginHall.error.INPUT_PARAM, " deviceID error"), [2]) : "object" != typeof r || "string" != typeof r.deviceType ? (this.logger.error(h.ZEGO_RTM_ACTION.ZEGOEXPRESSWEBRTM_LOGIN_HALL + " deviceType error"), _(T.ZegoRTMLogEvent.kZegoTaskLoginHall.error.INPUT_PARAM, " deviceType error"), [2]) : "object" != typeof r || 1 !== r.anType && 0 !== r.anType ? (this.logger.error(h.ZEGO_RTM_ACTION.ZEGOEXPRESSWEBRTM_LOGIN_HALL + " anType error"), _(T.ZegoRTMLogEvent.kZegoTaskLoginHall.error.INPUT_PARAM, " anType error"), [2]) : ((d = this.module).hallToken = e, d.deviceID = r.deviceID, d.deviceType = r.deviceType, d.anType = r.anType, this.stateCenter.idName = t.userID, this.stateCenter.nickName = t.userName || t.userID, this.logger.info(h.ZEGO_RTM_ACTION.ZEGOEXPRESSWEBRTM_LOGIN_HALL + JSON.stringify(r)), r && "boolean" == typeof r.roomFlag && (r.roomFlag ? d.roomFlag = 1 : d.roomFlag = 0), r && "boolean" == typeof r.testEnvironment && (this.stateCenter.testEnvironment = r.testEnvironment), r && "boolean" == typeof r.userUpdate && (this.stateCenter.userStateUpdate = r.userUpdate), d.hallRunState !== n.ENUM_RUN_STATE.logout && (d.hallHandler.resetHall(), d.hallHandler.hallStateHandle("DISCONNECTED", T.ZegoRTMLogEvent.kZegoTaskLoginHall.error.REPEATEDLY_LOGIN), d.setRoomRunState(n.ENUM_RUN_STATE.logout), d.roomPrivateHandler.resetRoom()), this.dispatchServer((function () {
                                                d.retryHallHandler || (d.retryHallHandler = new m.RetryHallHandler(u.logger, u.stateCenter, u.module)), d.retryHallHandler.init(u.stateCenter.roomRetryTime), d.retryHallHandler.initRoom(u.module.hallHandler, t, u.stateCenter.server, r), d.retryHallHandler.onactive = function (e, t) {
                                                    e ? i(e) : _(t)
                                                }, d.retryHallHandler.active(!0)
                                            })), [2])
                                    }
                                }))
                            }))
                        }))
                    }, e.prototype.loginHallReport = function (e, t, r, o) {
                        var s = this;
                        0 !== this.stateCenter.reportSeqList.login && (this.dataReport.uploadReport(this.stateCenter.reportSeqList.login), this.stateCenter.reportSeqList.login = 0, l.ClientUtil.unregisterCallback(T.ZegoRTMLogEvent.kZegoTaskLoginHall.event, this.stateCenter.reportList));
                        var i = _.getReportSeq();
                        return this.stateCenter.reportSeqList.login = i, this.dataReport.newReport(i, T.ZegoRTMLogEvent.kZegoTaskLoginHall.event), "string" == typeof r && this.dataReport.addMsgInfo(i, {token: T.ZegoRTMLogEvent.kZegoTaskLoginHall.token(r)}), o && (o.userUpdate && "boolean" == typeof o.userUpdate && this.dataReport.addMsgInfo(i, {user_update: T.ZegoRTMLogEvent.kZegoTaskLoginHall.user_update(o.userUpdate + "")}), o.deviceID && "string" == typeof o.deviceID && this.dataReport.addMsgInfo(i, {user_update: T.ZegoRTMLogEvent.kZegoTaskLoginHall.device_id(o.deviceID)}), o.deviceType && "string" == typeof o.deviceType && this.dataReport.addMsgInfo(i, {user_update: T.ZegoRTMLogEvent.kZegoTaskLoginHall.device_type(o.deviceType)}), o.anType && "number" == typeof o.anType && this.dataReport.addMsgInfo(i, {user_update: T.ZegoRTMLogEvent.kZegoTaskLoginHall.an_type(o.anType + "")}), o.roomFlag && "boolean" == typeof o.roomFlag && this.dataReport.addMsgInfo(i, {user_update: T.ZegoRTMLogEvent.kZegoTaskLoginHall.room_flag(o.roomFlag + "")}), o.testEnvironment && "boolean" == typeof o.testEnvironment && this.dataReport.addMsgInfo(i, {user_update: T.ZegoRTMLogEvent.kZegoTaskLoginHall.test_environment(o.testEnvironment + "")})), l.ClientUtil.logReportCallback(T.ZegoRTMLogEvent.kZegoTaskLoginHall.event, this.dataReport, i, this.stateCenter.reportList), {
                            interResolve: function (t) {
                                s.dataReport.uploadReport(i), s.stateCenter.reportSeqList.login = 0, l.ClientUtil.unregisterCallback(T.ZegoRTMLogEvent.kZegoTaskLoginHall.event, s.stateCenter.reportList), e(t)
                            }, interReject: function (e, r) {
                                void 0 === r && (r = ""), s.dataReport.addMsgInfo(i, {
                                    error: e.code,
                                    message: e.msg + r
                                }), s.dataReport.uploadReport(i), s.stateCenter.reportSeqList.login = 0, l.ClientUtil.unregisterCallback(T.ZegoRTMLogEvent.kZegoTaskLoginHall.event, s.stateCenter.reportList), t({
                                    code: e.code,
                                    msg: e.msg + r
                                })
                            }
                        }
                    }, e.prototype.logoutHall = function () {
                        var e = _.getReportSeq();
                        this.dataReport.newReport(e), this.module.hallHandler.logout(), this.module.setRoomRunState(n.ENUM_RUN_STATE.logout), this.module.roomPrivateHandler.resetRoom(), this.dataReport.uploadReport(e, T.ZegoRTMLogEvent.kZegoTaskLogoutHall.event)
                    }, e.prototype.enterRoom = function (e, t) {
                        var r = this;
                        return new Promise((function (o, s) {
                            var i = _.getReportSeq();
                            if (r.dataReport.newReport(i), "string" != typeof e || "" == e || ![0, 1].includes(t)) return r.logger.error(h.ZEGO_RTM_ACTION.ZEGOEXPRESSWEBRTM_LOGIN_ROOM + " param error"), void o({
                                errorCode: T.ZegoRTMLogEvent.kZegoTaskEnterRoom.error.INPUT_PARAM.code,
                                extendedData: T.ZegoRTMLogEvent.kZegoTaskEnterRoom.error.INPUT_PARAM.msg
                            });
                            var a = r.module;
                            if (!a.isLogin()) return r.logger.error(h.ZEGO_RTM_ACTION.ZEGOEXPRESSWEBRTM_LOGIN_ROOM + " no login hall before entering room"), void o({
                                errorCode: T.ZegoRTMLogEvent.kZegoTaskEnterRoom.error.NOT_LOGIN.code,
                                extendedData: T.ZegoRTMLogEvent.kZegoTaskEnterRoom.error.NOT_LOGIN.msg
                            });
                            a.runRoomState !== n.ENUM_RUN_STATE.logout && (r.logger.info(h.ZEGO_RTM_ACTION.ZEGOEXPRESSWEBRTM_LOGIN_ROOM + " reset"), r.module.roomPrivateHandler.resetRoom(), r.module.roomPrivateHandler.roomStateHandle("DISCONNECTED", T.ZegoRTMLogEvent.kZegoTaskEnterRoom.error.REPEATEDLY_ENTER_ROOM)), a.pri_roomID = e, r.stateCenter.role = t, r.dataReport.addMsgInfo(i, {role: T.ZegoRTMLogEvent.kZegoTaskEnterRoom.role(t + "")}), a.setRoomRunState(n.ENUM_RUN_STATE.trylogin), a.roomPrivateHandler.roomStateHandle("CONNECTING", {
                                code: 0,
                                msg: ""
                            });
                            var l = function (t, l) {
                                if (t.body && 0 !== t.body.code || 1100002 == t.code) {
                                    a.setRoomRunState(n.ENUM_RUN_STATE.logout);
                                    var _ = t.body && t.body.code || t.code, d = t.body && t.body.message || t.msg;
                                    a.roomPrivateHandler.roomStateHandle("DISCONNECTED", {
                                        code: _,
                                        msg: d
                                    }), r.dataReport.addMsgInfo(i, {
                                        error: _,
                                        message: d
                                    }), r.dataReport.uploadReport(i, T.ZegoRTMLogEvent.kZegoTaskEnterRoom.event), s({
                                        errorCode: _,
                                        extendedData: d
                                    })
                                } else a.roomID = e, a.timeStamp = t.header.timeStamp, a.roomSid = t.body.room_header.room_sid, a.roomSessionID = t.body.room_header.room_user_session_id, a.userSeq = t.body.userlist_seq, r.dataReport.uploadReport(i, T.ZegoRTMLogEvent.kZegoTaskEnterRoom.event), a.setRoomRunState(n.ENUM_RUN_STATE.login), a.roomPrivateHandler.roomStateHandle("CONNECTED", {
                                    code: 0,
                                    msg: ""
                                }), r.module.userHandler.loginPrivateRsp(t), a.roomLoginResponse(t), o({
                                    errorCode: 0,
                                    extendedData: ""
                                })
                            };
                            setTimeout((function () {
                                a.roomPrivateHandler.enterRoom(l, l)
                            }), 20)
                        }))
                    }, e.prototype.leaveRoom = function () {
                        var e = this;
                        return new Promise((function (t) {
                            var r = _.getReportSeq();
                            e.dataReport.newReport(r), e.module.roomPrivateHandler.roomStateHandle("DISCONNECTED", {
                                code: 0,
                                msg: ""
                            });
                            var o = function (o, s) {
                                0 !== o.body.code ? (e.dataReport.addMsgInfo(r, {
                                    error: o.body.code,
                                    message: o.body.message
                                }), e.dataReport.uploadReport(r, T.ZegoRTMLogEvent.kZegoTaskLeaveRoom.event), t({
                                    errorCode: o.body.code,
                                    extendedData: o.body.message
                                })) : (e.dataReport.uploadReport(r, T.ZegoRTMLogEvent.kZegoTaskLeaveRoom.event), t({
                                    errorCode: 0,
                                    extendedData: ""
                                }))
                            };
                            e.module.roomPrivateHandler.leaveRoom(o, o)
                        }))
                    }, e.prototype.sendCustomCommand = function (e, t, r) {
                        var o = this;
                        return new Promise((function (s, i) {
                            o._sendCustomCommand(e, t, r).then((function (e) {
                                s({errorCode: e.errorCode, extendedData: e.extendedData})
                            })).catch((function (e) {
                                i(e)
                            }))
                        }))
                    }, e.prototype._sendCustomCommand = function (e, t, r) {
                        var o = this;
                        return new Promise((function (s, i) {
                            var d = _.getReportSeq();
                            o.dataReport.newReport(d, T.ZegoRTMLogEvent.kZegoTaskLiveRoomSendCustomCommand.event);
                            var u = l.ClientUtil.proxyRes(o.dataReport, d, s, i), E = u.interResolve, g = u.interReject;
                            if ("string" != typeof e || "" == e) return o.logger.error(h.ZEGO_RTM_ACTION.ZEGOEXPRESSWEBRTM_SEND_CUSTOM + " roomid must be string and not empty"), void g(a.errorCodeList.INPUT_PARAM, " param roomID error");
                            if (!(r instanceof Array) || r.find((function (e) {
                                return "string" != typeof e
                            }))) return o.logger.error(h.ZEGO_RTM_ACTION.ZEGOEXPRESSWEBRTM_SEND_CUSTOM + " dstMembers must be string array"), void g(T.ZegoRTMLogEvent.kZegoTaskLiveRoomSendCustomCommand.error.INPUT_PARAM, " param toUserList error");
                            if ("PUBLIC" === o.stateCenter.type && "string" != typeof t && "object" != typeof t) return o.logger.error(h.ZEGO_RTM_ACTION.ZEGOEXPRESSWEBRTM_SEND_CUSTOM + " custom content must be a non empty string or object"), void g(T.ZegoRTMLogEvent.kZegoTaskLiveRoomSendCustomCommand.error.INPUT_PARAM, " param command error");
                            if ("PRIVATE" === o.stateCenter.type && "string" != typeof t) return o.logger.error(h.ZEGO_RTM_ACTION.ZEGOEXPRESSWEBRTM_SEND_CUSTOM + " custom content must be a not empty string"), void g(T.ZegoRTMLogEvent.kZegoTaskLiveRoomSendCustomCommand.error.INPUT_PARAM, " param command error");
                            if ("string" == typeof t && t.length > n.MAX_MESSAGE_LENGTH) return o.logger.error(h.ZEGO_RTM_ACTION.ZEGOEXPRESSWEBRTM_SEND_CUSTOM + " command too long"), void g(T.ZegoRTMLogEvent.kZegoTaskLiveRoomSendCustomCommand.error.IM_CONTENT_TOO_LONG);
                            var c = o.getRoomModules(e);
                            c ? (o.dataReport.addMsgInfo(d, {room_sid: T.ZegoRTMLogEvent.kZegoTaskLiveRoomSendCustomCommand.room_sid(c.sessionID)}), c.messageHandler.sendCustomCommand(r, t, E, g)) : g(T.ZegoRTMLogEvent.kZegoTaskLiveRoomSendCustomCommand.error.ROOM_NOT_EXIST)
                        }))
                    }, e.prototype.sendBroadcastMessage = function (e, t) {
                        var r = this;
                        return new Promise((function (o, s) {
                            r._sendBroadcastMessage(e, t).then((function (e) {
                                o({errorCode: e.errorCode, messageID: e.messageID, extendedData: e.extendedData})
                            })).catch((function (e) {
                                s(e)
                            }))
                        }))
                    }, e.prototype._sendBroadcastMessage = function (e, t, r, o) {
                        var s = this;
                        return void 0 === r && (r = 1), void 0 === o && (o = 1), new Promise((function (i, a) {
                            var d = _.getReportSeq();
                            s.dataReport.newReport(d, T.ZegoRTMLogEvent.kZegoTaskLiveRoomSendRoomMessage.event);
                            var u = l.ClientUtil.proxyRes(s.dataReport, d, i, a), E = u.interResolve, g = u.interReject;
                            if ("string" != typeof e || "" == e) return s.logger.error(h.ZEGO_RTM_ACTION.ZEGOEXPRESSWEBRTM_SEND_BCM + " roomid must be string and not empty"), void g(T.ZegoRTMLogEvent.kZegoTaskLiveRoomSendRoomMessage.error.INPUT_PARAM, " param roomID error");
                            if (void 0 === t || "" == t) return s.logger.error(h.ZEGO_RTM_ACTION.ZEGOEXPRESSWEBRTM_SEND_BCM + " message is empty"), void g(T.ZegoRTMLogEvent.kZegoTaskLiveRoomSendRoomMessage.error.IM_CONTENT_NULL);
                            if ("string" != typeof t) return s.logger.error(h.ZEGO_RTM_ACTION.ZEGOEXPRESSWEBRTM_SEND_BCM + " message must be string"), void g(T.ZegoRTMLogEvent.kZegoTaskLiveRoomSendRoomMessage.error.INPUT_PARAM, " param message error");
                            if (t.length > n.MAX_MESSAGE_LENGTH) return s.logger.error(h.ZEGO_RTM_ACTION.ZEGOEXPRESSWEBRTM_SEND_BCM + " message too long"), void g(T.ZegoRTMLogEvent.kZegoTaskLiveRoomSendRoomMessage.error.IM_CONTENT_TOO_LONG);
                            var c = s.getRoomModules(e);
                            c ? (s.dataReport.addMsgInfo(d, {room_sid: T.ZegoRTMLogEvent.kZegoTaskLiveRoomSendRoomMessage.room_sid(c.sessionID)}), c.messageHandler.sendRoomMsg(r, o, e, t, E, g)) : g(T.ZegoRTMLogEvent.kZegoTaskLiveRoomSendRoomMessage.error.ROOM_NOT_EXIST)
                        }))
                    }, e.prototype.setRoomExtraInfo = function (e, t, r) {
                        return this._setRoomExtraInfo(e, t, r)
                    }, e.prototype._setRoomExtraInfo = function (e, t, r) {
                        var o = this;
                        return new Promise((function (s, i) {
                            var a = _.getReportSeq();
                            o.dataReport.newReport(a, T.ZegoRTMLogEvent.kZegoTaskLiveRoomSendReliableMessage.event);
                            var d = l.ClientUtil.proxyRes(o.dataReport, a, s, i), u = d.interResolve, E = d.interReject;
                            if ("string" != typeof e || "" == e) return o.logger.error(h.ZEGO_RTM_ACTION.ZEGOEXPRESSWEBRTM_SEND_BCM + " roomid must be string and not empty"), void E(T.ZegoRTMLogEvent.kZegoTaskLiveRoomSendRoomMessage.error.INPUT_PARAM, " param roomID error");
                            if (!t || "string" != typeof t) return o.logger.error(h.ZEGO_RTM_ACTION.ZEGOEXPRESSWEBRTM_SEND_RLM + " type must be string"), void E({errorCode: T.ZegoRTMLogEvent.kZegoTaskLiveRoomSendReliableMessage.error.INPUT_PARAM.code});
                            if (t.length > n.MAX_TRANS_TYPE_LENGTH) return o.logger.error(h.ZEGO_RTM_ACTION.ZEGOEXPRESSWEBRTM_SEND_RLM + " type is too long"), void E({errorCode: T.ZegoRTMLogEvent.kZegoTaskLiveRoomSendReliableMessage.error.INPUT_PARAM.code});
                            if (!r || "string" != typeof r) return o.logger.error(h.ZEGO_RTM_ACTION.ZEGOEXPRESSWEBRTM_SEND_RLM + " data must be string"), void E({errorCode: T.ZegoRTMLogEvent.kZegoTaskLiveRoomSendReliableMessage.error.INPUT_PARAM.code});
                            if (r.length > n.MAX_TRANS_DATA_LENGTH) return o.logger.error(h.ZEGO_RTM_ACTION.ZEGOEXPRESSWEBRTM_SEND_RLM + " type is too long"), void E({errorCode: T.ZegoRTMLogEvent.kZegoTaskLiveRoomSendReliableMessage.error.INPUT_PARAM.code});
                            var g = o.getRoomModules(e);
                            g ? (o.dataReport.addMsgInfo(a, {room_sid: T.ZegoRTMLogEvent.kZegoTaskLiveRoomSendReliableMessage.room_sid(g.sessionID)}), g.messageHandler.sendReliableMessage(t, r, u, E)) : E(T.ZegoRTMLogEvent.kZegoTaskLiveRoomSendReliableMessage.error.ROOM_NOT_EXIST)
                        }))
                    }, e.prototype.sendBarrageMessage = function (e, t) {
                        var r = this;
                        return new Promise((function (o, s) {
                            r._sendBarrageMessage(e, t).then((function (e) {
                                o({errorCode: e.errorCode, messageID: e.messageID, extendedData: e.extendedData})
                            })).catch((function (e) {
                                s(e)
                            }))
                        }))
                    }, e.prototype._sendBarrageMessage = function (e, t, r, o) {
                        var s = this;
                        return void 0 === r && (r = 1), void 0 === o && (o = 1), new Promise((function (i, a) {
                            var d = _.getReportSeq();
                            s.dataReport.newReport(d, T.ZegoRTMLogEvent.kZegoTaskLiveSendRoomBigIM.event);
                            var u = l.ClientUtil.proxyRes(s.dataReport, d, i, a), E = u.interResolve, g = u.interReject;
                            if ("string" != typeof e || "" == e) return s.logger.error(h.ZEGO_RTM_ACTION.ZEGOEXPRESSWEBRTM_SEND_BRM + "roomid must be string and not empty"), void g(T.ZegoRTMLogEvent.kZegoTaskLiveSendRoomBigIM.error.INPUT_PARAM, " param roomID error");
                            if (void 0 === t || "" == t) return s.logger.error(h.ZEGO_RTM_ACTION.ZEGOEXPRESSWEBRTM_SEND_BRM + " message is empty"), void g(T.ZegoRTMLogEvent.kZegoTaskLiveSendRoomBigIM.error.IM_CONTENT_NULL);
                            if ("string" != typeof t) return s.logger.error(h.ZEGO_RTM_ACTION.ZEGOEXPRESSWEBRTM_SEND_BRM + " message must be string"), void g(T.ZegoRTMLogEvent.kZegoTaskLiveSendRoomBigIM.error.INPUT_PARAM, " param message error");
                            if (t.length > n.MAX_MESSAGE_LENGTH) return s.logger.error(h.ZEGO_RTM_ACTION.ZEGOEXPRESSWEBRTM_SEND_BRM + " message too long"), void g(T.ZegoRTMLogEvent.kZegoTaskLiveSendRoomBigIM.error.IM_CONTENT_TOO_LONG);
                            var c = s.getRoomModules(e);
                            c ? (s.dataReport.addMsgInfo(d, {room_sid: T.ZegoRTMLogEvent.kZegoTaskLiveSendRoomBigIM.room_sid(c.sessionID)}), c.messageHandler.sendBigRoomMessage(r, o, e, t, E, g)) : g(T.ZegoRTMLogEvent.kZegoTaskLiveSendRoomBigIM.error.ROOM_NOT_EXIST)
                        }))
                    }, e.prototype.sendRelayMessage = function (e, t, r, o, s) {
                        var i = this.getRoomModules(s) || this.stateCenter.roomModulesList[0];
                        i ? i.messageHandler.sendRelayMessage(e, t, r, o) : o && o(a.errorCodeList.ROOM_NOT_EXIST, 0)
                    }, e.prototype.requestJoinLive = function (e, t, r, o, s) {
                        var i = this.getRoomModules(s) || this.stateCenter.roomModulesList[0];
                        return i ? i.liveHandler.requestJoinLive(e, t, r, o) : (r && r(a.errorCodeList.ROOM_NOT_EXIST, 0), !1)
                    }, e.prototype.inviteJoinLive = function (e, t, r, o, s) {
                        var i = this.getRoomModules(s) || this.stateCenter.roomModulesList[0];
                        return i ? i.liveHandler.inviteJoinLive(e, t, r, o) : (r && r(a.errorCodeList.ROOM_NOT_EXIST, 0), !1)
                    }, e.prototype.endJoinLive = function (e, t, r, o) {
                        var s = this.getRoomModules(o) || this.stateCenter.roomModulesList[0];
                        return s ? s.liveHandler.endJoinLive(e, t, r) : (r && r(a.errorCodeList.ROOM_NOT_EXIST, 0), !1)
                    }, e.prototype.respondJoinLive = function (e, t, r, o, s) {
                        var i = this.getRoomModules(s) || this.stateCenter.roomModulesList[0];
                        return i ? i.liveHandler.respondJoinLive(e, t, r, o) : (o && o(a.errorCodeList.ROOM_NOT_EXIST, 0), !1)
                    }, e.prototype.getVersion = function () {
                        return this.version
                    }, e.prototype.setSdkBizVersion = function (e) {
                        "string" == typeof e && "" !== e && (this.stateCenter.bizVersion = e)
                    }, e.prototype.setSdkLoginRelateService = function (e) {
                        Array.isArray(e) && e.every((function (e) {
                            return "string" == typeof e
                        })) && (this.stateCenter.relateService = e)
                    }, e.prototype.on = function (e, t) {
                        return this.stateCenter.listenerList[e] ? "function" != typeof t ? (this.logger.error(h.ZEGO_RTM_ACTION.ZEGOEXPRESSWEBRTM_ON + " listener callBack must be funciton"), !1) : (-1 == this.stateCenter.listenerList[e].indexOf(t) && this.stateCenter.listenerList[e].push(t), !0) : (this.logger.error(h.ZEGO_RTM_ACTION.ZEGOEXPRESSWEBRTM_ON + " event " + e + " no found"), !1)
                    }, e.prototype.off = function (e, t) {
                        if (!this.stateCenter.listenerList[e]) return this.logger.error(h.ZEGO_RTM_ACTION.ZEGOEXPRESSWEBRTM_OFF + " listener no found"), !1;
                        var r = this.stateCenter.listenerList[e];
                        return t ? r.splice(r.indexOf(t), 1) : this.stateCenter.listenerList[e] = [], !0
                    }, e.prototype._on = function (e, t) {
                        return this.stateCenter.listenerList[e] ? "function" != typeof t ? (this.logger.error(h.ZEGO_RTM_ACTION.ZEGOEXPRESSWEBRTM_ON + " listener callBack must be funciton"), !1) : (-1 == this.stateCenter.listenerList[e].indexOf(t) && this.stateCenter.listenerList[e].push(t), !0) : (this.logger.error(h.ZEGO_RTM_ACTION.ZEGOEXPRESSWEBRTM_ON + " event " + e + " no found"), !1)
                    }, e.prototype._off = function (e, t) {
                        if (!this.stateCenter.listenerList[e]) return this.logger.error(h.ZEGO_RTM_ACTION.ZEGOEXPRESSWEBRTM_OFF + " listener no found"), !1;
                        var r = this.stateCenter.listenerList[e];
                        return t ? r.splice(r.indexOf(t), 1) : this.stateCenter.listenerList[e] = [], !0
                    }, e.prototype.isTestEnvironment = function () {
                        return this.stateCenter.testEnvironment
                    }, e.prototype.isLogin = function (e) {
                        var t = this.getRoomModules(e) || this.stateCenter.roomModulesList[0];
                        return !!t && t.isLogin()
                    }, e.prototype.getMultiRoom = function () {
                        return this.stateCenter.isMultiRoom
                    }, e.prototype.getAppID = function () {
                        return this.stateCenter.appid
                    }, e.prototype.getUserID = function () {
                        return this.stateCenter.idName
                    }, e.prototype.getToken = function (e) {
                        return (this.getRoomModules(e) || this.stateCenter.roomModulesList[0]).token
                    }, e.prototype.getAnType = function () {
                        return this.module.anType
                    }, e.prototype.getRoomSid = function () {
                        return this.module.roomSid
                    }, e.prototype.setRoomCreateFlag = function (e) {
                        this.stateCenter.roomCreateFlag = e
                    }, e.prototype.setRole = function (e) {
                        this.stateCenter.role = e
                    }, e.prototype.getSessionId = function (e) {
                        var t = this.getRoomModules(e) || this.stateCenter.roomModulesList[0];
                        return t ? t.sessionID : "0"
                    }, e.prototype.getRoomSessionID = function (e) {
                        var t = this.getRoomModules(e) || this.stateCenter.roomModulesList[0];
                        return t ? t.roomSessionID : "0"
                    }, e.prototype.sendPB = function (e) {
                        return e instanceof Uint8Array ? this.service.sendPB(e) : (this.logger.error(h.ZEGO_RTM_ACTION.ZEGOEXPRESSWEBRTM_SEND_PB + " type error"), !1)
                    }, e.prototype.getHeader = function (e) {
                        var t = this.stateCenter.roomModulesList[0];
                        if (t && t.isLogin()) {
                            var r = t.roomID, o = t.sessionID, s = t.roomSessionID;
                            return this.service.getHeader(e, o, r, s)
                        }
                        this.logger.error(h.ZEGO_RTM_ACTION.ZEGOEXPRESSWEBRTM_GET_HEADER + " room no found or no login")
                    }, e.prototype.enableMultiRoom = function (e) {
                        var t = _.getReportSeq();
                        return this.dataReport.newReport(t, T.ZegoRTMLogEvent.kZegoEnableMultiRoom.event), this.dataReport.addMsgInfo(t, {isMulti: e}), "boolean" != typeof e ? (this.logger.error(h.ZEGO_RTM_ACTION.ZEGOEXPRESSWEBRTM_ENABLE_MULTI_ROOM + " param must be boolean"), this.dataReport.uploadReport(t, void 0, T.ZegoRTMLogEvent.kZegoEnableMultiRoom.error.kAlreadyLoginError), !1) : this.stateCenter.roomModulesList.length > 0 || this.stateCenter.setMultiRoom ? (this.logger.error(h.ZEGO_RTM_ACTION.ZEGOEXPRESSWEBRTM_ENABLE_MULTI_ROOM + " multi room can only be set once before first login"), this.dataReport.uploadReport(t, void 0, T.ZegoRTMLogEvent.kZegoEnableMultiRoom.error.kAlreadyLoginError), !1) : (this.dataReport.uploadReport(t), this.stateCenter.isMultiRoom = e, this.stateCenter.setMultiRoom = !0, !0)
                    }, e.prototype.getRoomModules = function (e) {
                        return this.stateCenter.roomModulesList.find((function (t) {
                            return t.roomID == e
                        }))
                    }, e.prototype.dispatchServer = function (e) {
                        var t = this;
                        this.logger.info("zc.hh.dc call");
                        var r = this.dispatchBodyData(), o = this.module.dispatchServer;
                        if (l.ClientUtil.actionSuccessCallback(T.ZegoRTMLogEvent.kZegoTaskLoginHall.event, this.stateCenter.reportList) && l.ClientUtil.actionSuccessCallback(T.ZegoRTMLogEvent.kZegoTaskLoginHall.event, this.stateCenter.reportList)(n.REPORT_ACTION.eventStart, T.ZegoRTMLogEvent.kZegoTaskLoginHall.subEvent.dispatch_connection.event), XMLHttpRequest) {
                            var s = new XMLHttpRequest;
                            s.open("POST", o), s.setRequestHeader("Content-type", "application/json; charset=utf-8"), s.onreadystatechange = function () {
                                if (200 == s.status && 4 == s.readyState && s.responseText && "" !== s.responseText) {
                                    var r = JSON.parse(s.responseText);
                                    r.server_addrs && 0 !== r.server_addrs.length && (t.stateCenter.server = r.server_addrs[0].replace(":443", ""), t.module.sessionExpire = r.session_expire + "", l.ClientUtil.actionSuccessCallback(T.ZegoRTMLogEvent.kZegoTaskLoginHall.event, t.stateCenter.reportList) && l.ClientUtil.actionSuccessCallback(T.ZegoRTMLogEvent.kZegoTaskLoginHall.event, t.stateCenter.reportList)(n.REPORT_ACTION.eventEndWithMsgInfo, T.ZegoRTMLogEvent.kZegoTaskLoginHall.subEvent.dispatch_connection.event, {
                                        server: t.stateCenter.server,
                                        session_expire: t.module.sessionExpire
                                    }), e && e())
                                }
                            }, s.send(JSON.stringify(r))
                        } else wx.request({
                            url: o,
                            header: {"Content-Type": "application/json"},
                            method: "POST",
                            data: JSON.stringify(r),
                            dataType: "json",
                            success: function (r) {
                                r.data.server_addrs && 0 !== r.data.server_addrs.length && (t.stateCenter.server = r.data.server_addrs[0].replace(":443", ""), t.module.sessionExpire = r.data.session_expire + "", e && e())
                            },
                            fail: function (e) {
                                console.error("send failed " + e.statusCode)
                            }
                        })
                    }, e.prototype.dispatchBodyData = function () {
                        return {
                            seq: 1,
                            timestamp: (new Date).getTime,
                            app_id: this.stateCenter.appid,
                            user_id: this.stateCenter.idName,
                            user_name: this.stateCenter.nickName,
                            net_type: 2,
                            device_id: this.module.deviceID,
                            login_token: this.module.hallToken,
                            an_type: this.module.anType
                        }
                    }, e.prototype.getRoomBroadcastMessages = function (e, t) {
                        var r = this;
                        return new Promise((function (o, s) {
                            r.module.messageHandler.getRoomChatInfo(e, t, o, s)
                        }))
                    }, e.prototype.sendCustomMessage = function (e, t, r) {
                        var o = this;
                        return new Promise((function (s) {
                            if (e && "string" == typeof e && 0 === e.length) if (t && "string" == typeof t) if (r) if (o.module.isLogin()) {
                                var i = function (e) {
                                    if (e.body.code && 0 !== e.body.code) return o.logger.error(h.ZEGO_RTM_ACTION.ZEGOEXPRESSWEBRTM_SEND_CUSTOM_MESSAGE + " server error=", e.body.code), void s(e);
                                    s(e), o.logger.info(h.ZEGO_RTM_ACTION.ZEGOEXPRESSWEBRTM_SEND_CUSTOM_MESSAGE + " call success.")
                                };
                                o.module.service.sendMessage(e, r, i, i)
                            } else o.logger.error(h.ZEGO_RTM_ACTION.ZEGOEXPRESSWEBRTM_SEND_CUSTOM_MESSAGE + " hallState is not login"); else o.logger.error(h.ZEGO_RTM_ACTION.ZEGOEXPRESSWEBRTM_SEND_CUSTOM_MESSAGE + " rsbodyDatapCmd error"); else o.logger.error(h.ZEGO_RTM_ACTION.ZEGOEXPRESSWEBRTM_SEND_CUSTOM_MESSAGE + " rspCmd error"); else o.logger.error(h.ZEGO_RTM_ACTION.ZEGOEXPRESSWEBRTM_SEND_CUSTOM_MESSAGE + " reqCmd error")
                        }))
                    }, e.prototype.getQueueSimpleList = function () {
                        var e = this;
                        return new Promise((function (t, r) {
                            e.sendCustomMessage("zegochat_js.queue_list_req", "zegochat_js.queue_list_rsp", {}).then((function (o) {
                                o.body.code && 0 !== o.body.code ? (e.logger.error("zc.gqs.0 get list error, code = " + o.body.code), r({
                                    errorCode: o.body.code,
                                    extendData: o.body.message
                                })) : t({queues: o.body.queues})
                            }))
                        }))
                    }, e
                }();
            t.ZegoExpressWebRTM = S
        }, function (e, t, r) {
            "undefined" != typeof self && self, e.exports = function (e) {
                var t = {};

                function r(o) {
                    if (t[o]) return t[o].exports;
                    var s = t[o] = {i: o, l: !1, exports: {}};
                    return e[o].call(s.exports, s, s.exports, r), s.l = !0, s.exports
                }

                return r.m = e, r.c = t, r.d = function (e, t, o) {
                    r.o(e, t) || Object.defineProperty(e, t, {enumerable: !0, get: o})
                }, r.r = function (e) {
                    "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {value: "Module"}), Object.defineProperty(e, "__esModule", {value: !0})
                }, r.t = function (e, t) {
                    if (1 & t && (e = r(e)), 8 & t) return e;
                    if (4 & t && "object" == typeof e && e && e.__esModule) return e;
                    var o = Object.create(null);
                    if (r.r(o), Object.defineProperty(o, "default", {
                        enumerable: !0,
                        value: e
                    }), 2 & t && "string" != typeof e) for (var s in e) r.d(o, s, function (t) {
                        return e[t]
                    }.bind(null, s));
                    return o
                }, r.n = function (e) {
                    var t = e && e.__esModule ? function () {
                        return e.default
                    } : function () {
                        return e
                    };
                    return r.d(t, "a", t), t
                }, r.o = function (e, t) {
                    return Object.prototype.hasOwnProperty.call(e, t)
                }, r.p = "", r(r.s = 3)
            }([function (e, t, r) {
                "use strict";
                Object.defineProperty(t, "__esModule", {value: !0}), t.E_CLIENT_TYPE = t.ENUM_LOG_LEVEL = t.ENUM_REMOTE_TYPE = t.ZEGO_ENV = t.ZEGO_BROWSER_TYPE = void 0, function (e) {
                    e[e.IE = 0] = "IE", e[e.FIREFOX = 1] = "FIREFOX", e[e.CHROME = 2] = "CHROME", e[e.SAFARI = 3] = "SAFARI", e[e.OPERA = 4] = "OPERA", e[e.WEIXIN = 5] = "WEIXIN", e[e.WEIXINMINI = 6] = "WEIXINMINI", e[e.UNKOWN = 7] = "UNKOWN"
                }(t.ZEGO_BROWSER_TYPE || (t.ZEGO_BROWSER_TYPE = {})), function (e) {
                    e[e.BROWSER = 0] = "BROWSER", e[e.WEIXINMINI = 1] = "WEIXINMINI"
                }(t.ZEGO_ENV || (t.ZEGO_ENV = {})), function (e) {
                    e[e.DISABLE = 0] = "DISABLE", e[e.WEBSOCKET = 1] = "WEBSOCKET", e[e.HTTPS = 2] = "HTTPS"
                }(t.ENUM_REMOTE_TYPE || (t.ENUM_REMOTE_TYPE = {})), t.ENUM_LOG_LEVEL = {
                    DEBUG: 0,
                    INFO: 1,
                    WARN: 2,
                    ERROR: 3,
                    REPORT: 99,
                    DISABLE: 100,
                    debug: 0,
                    info: 1,
                    warn: 2,
                    error: 3,
                    report: 99,
                    disable: 100
                }, function (e) {
                    e[e.ClientType_None = 0] = "ClientType_None", e[e.ClientType_H5 = 1] = "ClientType_H5", e[e.ClientType_SmallPragram = 2] = "ClientType_SmallPragram", e[e.ClientType_Webrtc = 3] = "ClientType_Webrtc"
                }(t.E_CLIENT_TYPE || (t.E_CLIENT_TYPE = {}))
            }, function (e, t, r) {
                "use strict";
                Object.defineProperty(t, "__esModule", {value: !0}), t.LoggerStateCenter = void 0;
                var o = function () {
                    function e() {
                        this._testEnvironment = !0, this._ENV = 0, this._debug = !0
                    }

                    return e.getInstance = function () {
                        return e.instance || (e.instance = new e, e.instance.init()), e.instance
                    }, e.prototype.init = function () {
                    }, Object.defineProperty(e.prototype, "testEnvironment", {
                        get: function () {
                            return this._testEnvironment
                        }, set: function (e) {
                            this._testEnvironment = e
                        }, enumerable: !1, configurable: !0
                    }), Object.defineProperty(e.prototype, "ENV", {
                        get: function () {
                            return this._ENV
                        }, set: function (e) {
                            this._ENV = e
                        }, enumerable: !1, configurable: !0
                    }), Object.defineProperty(e.prototype, "debug", {
                        get: function () {
                            return this._debug
                        }, set: function (e) {
                            this._debug = e
                        }, enumerable: !1, configurable: !0
                    }), e.instance = new e, e
                }();
                t.LoggerStateCenter = o
            }, function (e, t, r) {
                "use strict";
                Object.defineProperty(t, "__esModule", {value: !0}), t.createZegoWebSocket = t.ZegoWeiXinMiniWebSocket = void 0;
                var o = r(0), s = function () {
                    function e(e, t) {
                        this.url = e, this.readyState = 3, this._websocket = wx.connectSocket({url: e}), this.init()
                    }

                    return e.prototype.init = function () {
                        var e = this;
                        this._websocket && (this.readyState = 0, this._websocket.onOpen((function (t) {
                            e.readyState = e._websocket.readyState, "function" == typeof e.onopen && (e.onopen(t), e._websocket.onClose((function (t) {
                                e.readyState = e._websocket.readyState, "function" == typeof e.onclose && e.onclose(t)
                            })), e._websocket.onMessage((function (t) {
                                "function" == typeof e.onmessage && e.onmessage(t)
                            })))
                        })), this._websocket.onError((function (t) {
                            e.readyState = e._websocket.readyState, "function" == typeof e.onerror && e.onerror(t)
                        })))
                    }, e.prototype.onopen = function (e) {
                    }, e.prototype.onerror = function (e) {
                    }, e.prototype.onclose = function (e) {
                    }, e.prototype.onmessage = function (e) {
                    }, e.prototype.send = function (e) {
                        this._websocket && this._websocket.send({data: e})
                    }, e.prototype.close = function () {
                        this._websocket && this._websocket.close()
                    }, e
                }();
                t.ZegoWeiXinMiniWebSocket = s, t.createZegoWebSocket = function (e, t) {
                    return t % 2 === o.ZEGO_ENV.BROWSER ? new WebSocket(e) : new s(e)
                }
            }, function (e, t, r) {
                "use strict";
                Object.defineProperty(t, "__esModule", {value: !0}), t.LoggerStateCenter = t.createZegoWebSocket = t.ZegoDataReport = t.ZegoLogger = void 0;
                var o = r(1);
                Object.defineProperty(t, "LoggerStateCenter", {
                    enumerable: !0, get: function () {
                        return o.LoggerStateCenter
                    }
                });
                var s = r(2);
                Object.defineProperty(t, "createZegoWebSocket", {
                    enumerable: !0, get: function () {
                        return s.createZegoWebSocket
                    }
                });
                var i = r(4);
                Object.defineProperty(t, "ZegoDataReport", {
                    enumerable: !0, get: function () {
                        return i.ZegoDataReport
                    }
                });
                var n = r(5);
                Object.defineProperty(t, "ZegoLogger", {
                    enumerable: !0, get: function () {
                        return n.ZegoLogger
                    }
                })
            }, function (e, t, r) {
                "use strict";
                var o = this && this.__assign || function () {
                    return (o = Object.assign || function (e) {
                        for (var t, r = 1, o = arguments.length; r < o; r++) for (var s in t = arguments[r]) Object.prototype.hasOwnProperty.call(t, s) && (e[s] = t[s]);
                        return e
                    }).apply(this, arguments)
                };
                Object.defineProperty(t, "__esModule", {value: !0}), t.ZegoDataReport = void 0;
                var s = function () {
                    function e(e) {
                        this.dataStatistics = {}, this.logger = e
                    }

                    return e.prototype.newReport = function (e, t) {
                        this.dataStatistics[e] = {
                            event_time: Date.now(),
                            time_consumed: 0,
                            seq: e,
                            error: 0,
                            message: "success",
                            event: t,
                            events: []
                        }
                    }, e.prototype.addMsgExt = function (e, t) {
                        this.dataStatistics[e] ? this.dataStatistics[e].msg_ext = t : console.warn(e + " not exist")
                    }, e.prototype.addMsgInfo = function (e, t) {
                        this.dataStatistics[e] ? Object.assign(this.dataStatistics[e], t) : console.warn(e + " not exist")
                    }, e.prototype.eventStart = function (e, t) {
                        this.dataStatistics[e] ? null != this.dataStatistics[e].events ? this.dataStatistics[e].events.push({
                            event: t,
                            event_time: Date.now(),
                            time_consumed: 0
                        }) : this.logger.warn("zd.es.0 no events") : this.logger.warn("zd.es.0 no seq match")
                    }, e.prototype.eventEnd = function (e, t, r) {
                        if (this.dataStatistics[e]) {
                            var o = this.dataStatistics[e].events;
                            if (o && 0 !== o.length) {
                                for (var s = o.length - 1; s >= 0; s--) if (o[s].event == t && 0 == o[s].time_consumed) {
                                    o[s].time_consumed = Date.now() - o[s].event_time;
                                    break
                                }
                            } else this.logger.info("zd.ee.0 no events")
                        } else this.logger.info("zd.ee.0 no seq match")
                    }, e.prototype.eventEndWithMsg = function (e, t, r) {
                        if (this.dataStatistics[e]) {
                            var s = this.dataStatistics[e].events;
                            if (s) {
                                for (var i = s.length - 1; i >= 0; i--) if (s[i].event == t && 0 == s[i].time_consumed) {
                                    s[i].time_consumed = Date.now() - s[i].event_time, null == s[i].msg_ext && (s[i].msg_ext = {}), s[i].msg_ext = o({}, r);
                                    break
                                }
                            } else this.logger.warn("zd.ee.0 no events")
                        } else this.logger.warn("zd.ee.0 no seq match")
                    }, e.prototype.eventEndWithMsgInfo = function (e, t, r) {
                        if (this.dataStatistics[e]) {
                            var o = this.dataStatistics[e].events;
                            if (o) {
                                for (var s = o.length - 1; s >= 0; s--) if (o[s].event == t && 0 == o[s].time_consumed) {
                                    o[s].time_consumed = Date.now() - o[s].event_time, Object.assign(o[s], r);
                                    break
                                }
                            } else this.logger.warn("zd.ee.0 no events")
                        } else this.logger.warn("zd.ee.0 no seq match")
                    }, e.prototype.addEventInfo = function (e, t, r, o) {
                        if (this.dataStatistics[e]) {
                            var s = this.dataStatistics[e].events;
                            if (null != s) {
                                for (var i = s.length - 1; i >= 0; i--) if (s[i].event == t && null != s[i].time_consumed) {
                                    null == s[i].msg_ext ? s[i].msg_ext = {} : s[i].msg_ext && (s[i].msg_ext[r] = o);
                                    break
                                }
                            } else this.logger.warn("zd.aei.0 no events")
                        } else this.logger.warn("zd.aei.0 no seq match")
                    }, e.prototype.addEventMsg = function (e, t, r, o) {
                        if (this.dataStatistics[e]) {
                            var s = this.dataStatistics[e].events;
                            if (null != s) {
                                for (var i = s.length - 1; i >= 0; i--) if (s[i].event == t) {
                                    s[i][r] = o;
                                    break
                                }
                            } else this.logger.warn("zd.aem.0 no events")
                        } else this.logger.warn("zd.aem.0 no seq match")
                    }, e.prototype.addEvent = function (e, t, r) {
                        this.dataStatistics[e] ? this.dataStatistics[e].events && (r ? this.dataStatistics[e].events.push({
                            event: t,
                            event_time: Date.now(),
                            msg_ext: r
                        }) : this.dataStatistics[e].events.push({
                            event: t,
                            event_time: Date.now()
                        })) : this.logger.warn("zd.ae.0 no seq match")
                    }, e.prototype.uploadReport = function (e, t, r, o) {
                        var s = this.dataStatistics[e];
                        null != s && (t && (s.event = t), s.time_consumed = Date.now() - s.event_time, r && this.addMsgInfo(e, {
                            error: r.code,
                            message: r.message || r.msg + " " + (o || "")
                        }), this.logger.report(s), delete this.dataStatistics[e])
                    }, e
                }();
                t.ZegoDataReport = s
            }, function (e, t, r) {
                "use strict";
                var o = this && this.__assign || function () {
                    return (o = Object.assign || function (e) {
                        for (var t, r = 1, o = arguments.length; r < o; r++) for (var s in t = arguments[r]) Object.prototype.hasOwnProperty.call(t, s) && (e[s] = t[s]);
                        return e
                    }).apply(this, arguments)
                };
                Object.defineProperty(t, "__esModule", {value: !0}), t.ZegoLogger = void 0;
                var s = r(0), i = r(2), n = r(1), a = r(6), l = function () {
                    function e(e) {
                        this.logLevel = s.ENUM_LOG_LEVEL.INFO, this.logRemoteLevel = 0, this.websocket = null, this.logUploadTimer = null, this.logUploadInterval = 1e4, this.logCache = [], this.logCacheSend = [], this.logCacheMax = 100, this.existUserID = !1, this.stateCenter = n.LoggerStateCenter.getInstance(), this.env = e
                    }

                    return e.prototype.setLogLevel = function (e) {
                        var t = s.ENUM_LOG_LEVEL[e];
                        return void 0 !== t && (this.logLevel = t, !0)
                    }, e.prototype.setRemoteLogLevel = function (e) {
                        var t = s.ENUM_LOG_LEVEL[e];
                        return void 0 !== t && (this.logRemoteLevel = t, !0)
                    }, e.prototype.setSessionInfo = function (e, t, r, o, s, i) {
                        this.appid = e, this.roomid = t, this.sessionid = r, this.userid = o, this.userName = s, this.version = i
                    }, e.prototype.report = function (e) {
                        var t = this.logReportParamList(s.ENUM_LOG_LEVEL.REPORT, e);
                        this.logLevel !== s.ENUM_LOG_LEVEL.DISABLE && this.logLevel <= s.ENUM_LOG_LEVEL.REPORT && console.debug(t), this.RemoteLog(s.ENUM_LOG_LEVEL.REPORT, t, !0)
                    }, e.prototype.debug = function () {
                        for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
                        var r = this.logParamList(s.ENUM_LOG_LEVEL.DEBUG, e.join(""));
                        this.logLevel !== s.ENUM_LOG_LEVEL.DISABLE && this.logLevel <= s.ENUM_LOG_LEVEL.DEBUG && console.debug(r), this.log(s.ENUM_LOG_LEVEL.DEBUG, r)
                    }, e.prototype.info = function () {
                        for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
                        var r = this.logParamList(s.ENUM_LOG_LEVEL.INFO, e.join(""));
                        this.logLevel !== s.ENUM_LOG_LEVEL.DISABLE && this.logLevel <= s.ENUM_LOG_LEVEL.INFO && console.info(r), this.log(s.ENUM_LOG_LEVEL.INFO, r)
                    }, e.prototype.warn = function () {
                        for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
                        var r = this.logParamList(s.ENUM_LOG_LEVEL.WARN, e.join(""));
                        this.logLevel !== s.ENUM_LOG_LEVEL.DISABLE && this.logLevel <= s.ENUM_LOG_LEVEL.WARN && console.warn(r), this.log(s.ENUM_LOG_LEVEL.WARN, r)
                    }, e.prototype.error = function () {
                        for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
                        var r = this.logParamList(s.ENUM_LOG_LEVEL.ERROR, e.join(""));
                        this.logLevel !== s.ENUM_LOG_LEVEL.DISABLE && this.logLevel <= s.ENUM_LOG_LEVEL.ERROR && (console.error(r), window ? this.stateCenter.debug && window.alert(e.join("").substr(e.join("").indexOf(" ") + 1, 4500)) : wx && this.stateCenter.debug && wx.showModal({
                            title: "",
                            content: e.join("").substr(e.join("").indexOf(" ") + 1, 4500)
                        })), this.log(s.ENUM_LOG_LEVEL.ERROR, r)
                    }, e.prototype.log = function (e, t) {
                        this.logRemoteLevel !== s.ENUM_LOG_LEVEL.DISABLE && this.logRemoteLevel <= e && this.RemoteLog(e, t)
                    }, e.prototype.setLogServer = function (e) {
                        try {
                            return e.startsWith("wss:") ? (this.logType = s.ENUM_REMOTE_TYPE.WEBSOCKET, this.openWebSocketLogServer(e)) : e.startsWith("https:") ? (this.logType = s.ENUM_REMOTE_TYPE.HTTPS, this.openHttpsLogServer(e)) : this.logType = s.ENUM_REMOTE_TYPE.DISABLE, !0
                        } catch (e) {
                            return this.error(JSON.stringify(e)), !1
                        }
                    }, e.prototype.stopLogServer = function () {
                        this.logType == s.ENUM_REMOTE_TYPE.WEBSOCKET ? this.stopWebSocketServer() : this.logType == s.ENUM_REMOTE_TYPE.HTTPS && (this.SendHttpsLog(), this.stopHttpsServer()), this.logType = s.ENUM_REMOTE_TYPE.DISABLE
                    }, e.prototype.stopWebSocketServer = function () {
                        this.websocket && (this.websocket.onclose = null, this.websocket.onerror = null, this.websocket.close(), this.websocket = null)
                    }, e.prototype.openHttpsLogServer = function (e) {
                        var t = this;
                        this.url = e, e && (this.stopHttpsServer(), this.logUploadTimer || (this.logUploadTimer = setInterval((function () {
                            t.SendHttpsLog()
                        }), this.logUploadInterval)))
                    }, e.prototype.stopHttpsServer = function () {
                        this.logUploadTimer && (clearInterval(this.logUploadTimer), this.logUploadTimer = null)
                    }, e.prototype.RemoteLog = function (e, t, r) {
                        if (void 0 === r && (r = !1), "" != this.url) if (this.logType == s.ENUM_REMOTE_TYPE.WEBSOCKET) this.RemoteWebSocketLog(e, t); else if (this.logType == s.ENUM_REMOTE_TYPE.HTTPS) this.RemoteHttpsLog(e, t, r); else if (this.logLevel !== s.ENUM_LOG_LEVEL.DISABLE && this.logLevel <= e) for (this.logCacheSend.push(t); this.logCacheSend.length > this.logCacheMax;) this.logCacheSend.shift()
                    }, e.prototype.RemoteWebSocketLog = function (e, t) {
                        if ("string" == typeof t && t.length > 4e3) console.info("log over maximum, ignore"); else if (null == this.websocket || 2 == this.websocket.readyState || 3 == this.websocket.readyState) {
                            var r = this.url;
                            this.url = "", this.setLogServer(r), this.logCacheSend.length < this.logCacheMax && this.logCacheSend.push(t)
                        } else if (0 == this.websocket.readyState) this.logCacheSend.length < this.logCacheMax && this.logCacheSend.push(t); else if (1 == this.websocket.readyState) if (this.logCacheSend.length > 0) {
                            for (var o = "", s = 0; s < this.logCacheSend.length; s++) (o + this.logCacheSend[s]).length > 4e3 && (this.websocket.send(o), o = ""), o = o + this.logCacheSend[s] + "\n";
                            t = o + t, this.logCacheSend = [], this.websocket.send(t)
                        } else this.websocket.send(t); else console.warn("wrong socket state:" + this.websocket.readyState), this.logCacheSend.length < this.logCacheMax && this.logCacheSend.push(t)
                    }, e.prototype.RemoteHttpsLog = function (e, t, r) {
                        this.logCacheSend.push(t), (this.logCacheSend.length >= this.logCacheMax || !0 === r) && this.SendHttpsLog()
                    }, e.prototype.logParamList = function (e, t) {
                        var r = a.getCurrentTime(),
                            o = [t.substr(0, t.indexOf(" ")) || t, t.substr(t.indexOf(" ") + 1, 4500) || t], s = {
                                time: r,
                                level: e,
                                action: o[0],
                                content: o[1],
                                appid: this.appid,
                                roomid: this.roomid,
                                userid: this.userid,
                                userName: this.userName,
                                sessionid: this.sessionid
                            };
                        return JSON.stringify(s)
                    }, e.prototype.logReportParamList = function (e, t) {
                        var r = a.getCurrentTime();
                        return t = o(o({}, t), {
                            time: r,
                            level: e,
                            console: this.env % 2 === s.ZEGO_ENV.BROWSER ? "rtc" : "xcx",
                            appid: this.appid,
                            room_id: this.roomid,
                            roomid: this.roomid,
                            userid: this.userid,
                            id_name: this.userid,
                            userName: this.userName,
                            sessionid: this.sessionid,
                            sdk_version: this.version,
                            test_environment: this.stateCenter.testEnvironment,
                            version: this.version,
                            event_id: this.appid + "_" + this.userid + "_" + t.event_time + "_" + t.seq
                        }), JSON.stringify(t)
                    }, e.prototype.openWebSocketLogServer = function (e) {
                        if (this.url != e) {
                            if (this.url = e, !e) return;
                            this.stopWebSocketServer(), this.websocket = i.createZegoWebSocket(e, this.env), this.websocket.onopen = function () {
                            }, this.websocket.onclose = function () {
                                for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
                                console.warn("onclose   websocket error:", e)
                            }, this.websocket.onmessage = function () {
                            }, this.websocket.onerror = function () {
                                for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
                                console.warn("open log websocket error:", e)
                            }
                        }
                    }, e.prototype.SendHttpsLog = function () {
                        0 != this.logCacheSend.length && (this.env % 2 === s.ZEGO_ENV.BROWSER ? this.SendHttpsLogWeb() : this.SendHttpsLogWeChatMini())
                    }, e.prototype.SendHttpsLogWeb = function () {
                        var e = this, t = this.logCacheSend.join("\n"), r = new XMLHttpRequest;
                        r.onreadystatechange = function () {
                            if (4 == r.readyState) if (200 == r.status) {
                                if (0 == r.responseText.length) return;
                                try {
                                    var t = JSON.parse(r.responseText).interval;
                                    "number" == typeof t && e.logUploadInterval !== t && (e.timeInterval = t, e.openHttpsLogServer(e.url))
                                } catch (e) {
                                    console.log("send result failed " + e)
                                }
                            } else console.log("send failed " + r.status)
                        }, r.open("POST", this.url, !0), 0 == this.env ? r.send(t) : 2 == this.env && (r.setRequestHeader("content-type", "application/json"), r.send(JSON.stringify({
                            user_id: this.userid,
                            log: t
                        }))), this.logCacheSend = []
                    }, e.prototype.SendHttpsLogWeChatMini = function () {
                        var e = this;
                        !this.existUserID && this.userid && this.logCacheSend.forEach((function (t) {
                            Array.isArray(t) && t.forEach((function (r, o) {
                                var s = JSON.parse(r);
                                s && "" == JSON.parse(r).userid ? (s.userid = e.userid, s.id_name = e.userid, t[o] = JSON.stringify(s)) : e.existUserID = !0
                            }))
                        }));
                        var t = this.logCacheSend.join("\n"),
                            r = 1 == this.env ? t : JSON.stringify({user_id: this.userid, log: t});
                        wx.request({
                            url: this.url, data: r, method: "POST", success: function (t) {
                                if (0 != t.data.length) {
                                    var r = t && t.data && t.data.interval;
                                    "number" == typeof r && e.logUploadInterval !== r && (e.timeInterval = r, e.openHttpsLogServer(e.url))
                                }
                            }, fail: function (e) {
                                console.log("send failed " + e.statusCode)
                            }
                        }), this.logCacheSend = []
                    }, e
                }();
                t.ZegoLogger = l
            }, function (e, t, r) {
                "use strict";
                Object.defineProperty(t, "__esModule", {value: !0}), t.getCurrentTime = t.getCurrentEnv = t.getBrowser = void 0;
                var o = r(0);
                t.getBrowser = function () {
                    var e = window.navigator.userAgent, t = null != window.ActiveXObject && -1 != e.indexOf("MSIE"),
                        r = -1 != e.indexOf("Firefox"), s = null != window.opr,
                        i = e.indexOf("Chrome") && window.chrome,
                        n = -1 != e.indexOf("Safari") && -1 != e.indexOf("Version"),
                        a = e.toLowerCase().match(/MicroMessenger/i) && "micromessenger" === e.toLowerCase().match(/MicroMessenger/i)[0];
                    return t ? o.ZEGO_BROWSER_TYPE.IE : r ? o.ZEGO_BROWSER_TYPE.FIREFOX : s ? o.ZEGO_BROWSER_TYPE.OPERA : i ? o.ZEGO_BROWSER_TYPE.CHROME : n ? o.ZEGO_BROWSER_TYPE.SAFARI : a ? o.ZEGO_BROWSER_TYPE.WEIXIN : o.ZEGO_BROWSER_TYPE.UNKOWN
                }, t.getCurrentEnv = function () {
                    var e = window.navigator.userAgent;
                    return new Promise((function (t) {
                        -1 == e.indexOf("MicroMessage") ? t(o.ZEGO_ENV.BROWSER) : wx.miniProgram.getEnv((function (e) {
                            e.miniprogram
                        }))
                    }))
                };
                var s = ["00", "01", "02", "03", "04", "05", "06", "07", "08", "09"];
                t.getCurrentTime = function () {
                    var e = new Date;
                    return [e.getFullYear() + "/", (s[e.getMonth() + 1] || e.getMonth() + 1) + "/", (s[e.getDate()] || e.getDate()) + " ", (s[e.getHours()] || e.getHours()) + ":", (s[e.getMinutes()] || e.getMinutes()) + ":", s[e.getSeconds()] || e.getSeconds(), "." + e.getTime() % 1e3].join("")
                }
            }])
        }, function (e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {value: !0}), t.Base64 = void 0;
            var o = function () {
                function e() {
                }

                return e.base64encode = function (t) {
                    var r, o, s, i, n, a;
                    for (s = t.length, o = 0, r = ""; o < s;) {
                        if (i = 255 & t.charCodeAt(o++), o == s) {
                            r += e.base64EncodeChars.charAt(i >> 2), r += e.base64EncodeChars.charAt((3 & i) << 4), r += "==";
                            break
                        }
                        if (n = t.charCodeAt(o++), o == s) {
                            r += e.base64EncodeChars.charAt(i >> 2), r += e.base64EncodeChars.charAt((3 & i) << 4 | (240 & n) >> 4), r += e.base64EncodeChars.charAt((15 & n) << 2), r += "=";
                            break
                        }
                        a = t.charCodeAt(o++), r += e.base64EncodeChars.charAt(i >> 2), r += e.base64EncodeChars.charAt((3 & i) << 4 | (240 & n) >> 4), r += e.base64EncodeChars.charAt((15 & n) << 2 | (192 & a) >> 6), r += e.base64EncodeChars.charAt(63 & a)
                    }
                    return r
                }, e.base64decode = function (t) {
                    var r, o, s, i, n, a, l;
                    for (a = t.length, n = 0, l = ""; n < a;) {
                        do {
                            r = e.base64DecodeChars[255 & t.charCodeAt(n++)]
                        } while (n < a && -1 == r);
                        if (-1 == r) break;
                        do {
                            o = e.base64DecodeChars[255 & t.charCodeAt(n++)]
                        } while (n < a && -1 == o);
                        if (-1 == o) break;
                        l += String.fromCharCode(r << 2 | (48 & o) >> 4);
                        do {
                            if (61 == (s = 255 & t.charCodeAt(n++))) return l;
                            s = e.base64DecodeChars[s]
                        } while (n < a && -1 == s);
                        if (-1 == s) break;
                        l += String.fromCharCode((15 & o) << 4 | (60 & s) >> 2);
                        do {
                            if (61 == (i = 255 & t.charCodeAt(n++))) return l;
                            i = e.base64DecodeChars[i]
                        } while (n < a && -1 == i);
                        if (-1 == i) break;
                        l += String.fromCharCode((3 & s) << 6 | i)
                    }
                    return l
                }, e.utf16to8 = function (e) {
                    var t, r, o, s;
                    for (t = "", o = e.length, r = 0; r < o; r++) (s = e.charCodeAt(r)) >= 1 && s <= 127 ? t += e.charAt(r) : s > 2047 ? (t += String.fromCharCode(224 | s >> 12 & 15), t += String.fromCharCode(128 | s >> 6 & 63), t += String.fromCharCode(128 | s >> 0 & 63)) : (t += String.fromCharCode(192 | s >> 6 & 31), t += String.fromCharCode(128 | s >> 0 & 63));
                    return t
                }, e.utf8to16 = function (e) {
                    var t, r, o, s, i, n;
                    for (t = "", o = e.length, r = 0; r < o;) switch ((s = e.charCodeAt(r++)) >> 4) {
                        case 0:
                        case 1:
                        case 2:
                        case 3:
                        case 4:
                        case 5:
                        case 6:
                        case 7:
                            t += e.charAt(r - 1);
                            break;
                        case 12:
                        case 13:
                            i = e.charCodeAt(r++), t += String.fromCharCode((31 & s) << 6 | 63 & i);
                            break;
                        case 14:
                            i = e.charCodeAt(r++), n = e.charCodeAt(r++), t += String.fromCharCode((15 & s) << 12 | (63 & i) << 6 | (63 & n) << 0)
                    }
                    return t
                }, e.base64EncodeChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", e.base64DecodeChars = [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 62, -1, -1, -1, 63, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, -1, -1, -1, -1, -1, -1, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, -1, -1, -1, -1, -1, -1, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, -1, -1, -1, -1, -1], e
            }();
            t.Base64 = o
        }, function (e, t, r) {
            "use strict";
            var o, s = this && this.__extends || (o = function (e, t) {
                return (o = Object.setPrototypeOf || {__proto__: []} instanceof Array && function (e, t) {
                    e.__proto__ = t
                } || function (e, t) {
                    for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r])
                })(e, t)
            }, function (e, t) {
                function r() {
                    this.constructor = e
                }

                o(e, t), e.prototype = null === t ? Object.create(t) : (r.prototype = t.prototype, new r)
            });
            Object.defineProperty(t, "__esModule", {value: !0}), t.RetryRoomHandler = void 0;
            var i = r(5), n = r(0), a = r(2), l = r(1), _ = r(3), d = function (e) {
                function t(t, r, o) {
                    var s = e.call(this, t, r) || this;
                    return s.logger = t, s.stateCenter = r, s.room = o, s
                }

                return s(t, e), t.prototype.renewToken = function (e) {
                    if (this.token = e, this.room.token = this.token, "03" === e.substr(0, 2)) {
                        var t = _.ClientUtil.decodeTokenExpire(e.substr(2));
                        this.roomHandler.resetTokenTimer(1e3 * t - (new Date).getTime() - this.stateCenter.local_time_deviation - 3e4)
                    }
                    this.stateCenter.actionListener("_tokenRenewed", e, this.room.roomID)
                }, t.prototype.initRoom = function (e, t, r, o, s, i, n) {
                    this.roomHandler = e, this.roomID = t, this.renewToken(r), this.user = o, this.server = s, this.serverBak = i || s, this.config = n
                }, t.prototype.active = function (e) {
                    var t = this;
                    if (this.logger.info(a.ZEGO_RTM_ACTION.ROOM_LOGIN_ROOM + " retry call"), this.roomHandler.setRunState(n.ENUM_RUN_STATE.trylogin), this.room.isMulti && this.room.service.isDisConnect()) this.logger.info(a.ZEGO_RTM_ACTION.ROOM_LOGIN_ROOM + " service is disconnected, multi room stop retry"); else if (this.stateCenter.networkState != n.ENUM_NETWORK_STATE.offline) if (this.retryTimer) this.logger.info(a.ZEGO_RTM_ACTION.ROOM_LOGIN_ROOM + " has actived, ignore"); else if (this.isOverTime) this.logger.info(a.ZEGO_RTM_ACTION.ROOM_LOGIN_ROOM + " retry over time, stop retry"); else {
                        if (1 == this.retryActiveCount) this.retryActiveInterval = Math.floor(Math.random() * (1 - this.RETRY_START_TIME_INTERVAL) + this.RETRY_START_TIME_INTERVAL); else {
                            var r = Math.pow(2, Math.round(this.retryActiveCount / this.RETRY_CONTINUE_COUNT + 1));
                            this.retryActiveInterval = r > this.RETRY_MAX_TIME_INTERVAL ? this.RETRY_MAX_TIME_INTERVAL : r
                        }
                        this.retryTimer = setTimeout((function () {
                            t.roomHandler.login(t.retryActiveCount % 2 == 1 ? t.server : t.serverBak, t.roomID, t.token, t.user, t.config, (function (e) {
                                t.handleLoginFinish(e)
                            }), (function (e, r) {
                                t.handleLoginFinish(!1, e, r)
                            })), t.retryTimer && clearTimeout(t.retryTimer), t.retryTimer = null, t.retryActiveCount++
                        }), e ? 0 : 1e3 * this.retryActiveInterval)
                    } else this.logger.info(a.ZEGO_RTM_ACTION.ROOM_LOGIN_ROOM + " network is broken, stop retry")
                }, t.prototype.startMaxTime = function () {
                    var e = this;
                    this.maxTimer || (this.maxTimer = setTimeout((function () {
                        e.logger.info(a.ZEGO_RTM_ACTION.ROOM_LOGIN_ROOM + " over max time " + e.RETRY_MAX_TIME + "s, stop retry"), e.isOverTime = !0, e.roomHandler.resetRoom(), e.stopMaxTime(), e.invalid(), e.onactive(!1, l.errorCodeList.LOGIN_TIMEOUT)
                    }), 1e3 * this.RETRY_MAX_TIME))
                }, t.prototype.stopMaxTime = function () {
                    this.maxTimer && clearTimeout(this.maxTimer), this.maxTimer = null
                }, t.prototype.onactive = function (e, t) {
                }, t.prototype.handleError = function (e, t) {
                    if (this.RETRY_MAX_TIME < 3) return !1;
                    if (t) {
                        var r = e.code + "";
                        return !["1000002002", "1000005030", "1000005035", "1010", "1011", "1013", "1014", "1015", "1016", "1017", "1018", "1019", "1020", "1021", "1023"].includes(r) && (!!["1100040001", "1100040100"].includes(r) || this.room.lastRunState == n.ENUM_RUN_STATE.login && (this.room.sessionID = "", this.invalid(), !0))
                    }
                    return !0
                }, t.prototype.handleLoginFinish = function (e, t, r) {
                    t ? this.handleError(t, r) ? (!this.maxTimer && this.startMaxTime(), this.active()) : (this.roomHandler.resetRoom(), this.stopMaxTime(), this.invalid(), this.onactive(e, t)) : (this.stopMaxTime(), this.invalid(), this.onactive(e, {
                        code: 0,
                        msg: ""
                    }))
                }, t
            }(i.TryHandler);
            t.RetryRoomHandler = d
        }, function (e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {value: !0}), t.checkParams = t.RULE_SUCCESS = t.RULE_PARAM_NAME = void 0;
            var o, s = r(3);
            !function (e) {
                e.NOT_EMPTY = "NOT_EMPTY", e.ILLEGAL_CHARACTERS = "ILLEGAL_CHARACTERS", e.TYPE_STRING = "TYPE_STRING", e.TYPE_INTEGER = "TYPE_INTEGER", e.TYPE_OBJECT = "TYPE_OBJECT", e.MAX_LENGTH_10 = "MAX_LENGTH_10", e.MAX_LENGTH_64 = "MAX_LENGTH_64", e.MAX_LENGTH_100 = "MAX_LENGTH_100", e.MAX_LENGTH_128 = "MAX_LENGTH_128", e.MAX_LENGTH_256 = "MAX_LENGTH_256", e.MAX_LENGTH_1024 = "MAX_LENGTH_1024"
            }(o = t.RULE_PARAM_NAME || (t.RULE_PARAM_NAME = {})), t.RULE_SUCCESS = {error: {code: 0, msg: "suc"}};
            var i = {
                NOT_EMPTY: function (e, r, o, s, i) {
                    return void 0 === r || "" === r || null === r ? (s.error(o + " " + e + " is empty"), i) : t.RULE_SUCCESS
                }, ILLEGAL_CHARACTERS: function (e, r, o, i, n) {
                    return s.ClientUtil.checkIllegalCharacters(r) ? t.RULE_SUCCESS : (i.error(o + " " + e + " contains illegal characters"), n)
                }, TYPE_STRING: function (e, r, o, s, i) {
                    return "string" != typeof r ? (s.error(o + " " + e + " must be string"), i) : t.RULE_SUCCESS
                }, TYPE_INTEGER: function (e, r, o, i, n) {
                    return s.ClientUtil.checkInteger(r, !1) ? t.RULE_SUCCESS : (i.error(o + " " + e + "  must be integer number"), n)
                }, TYPE_OBJECT: function (e, r, o, s, i) {
                    return r && "object" == typeof r ? t.RULE_SUCCESS : (s.error(o + " " + e + "  must be object"), i)
                }, MAX_LENGTH_10: function (e, r, o, s, i) {
                    return r.length > 10 ? (s.error(o + " " + e + " is too long"), i) : t.RULE_SUCCESS
                }, MAX_LENGTH_64: function (e, r, o, s, i) {
                    return r.length > 64 ? (s.error(o + " " + e + " is too long"), i) : t.RULE_SUCCESS
                }, MAX_LENGTH_100: function (e, r, o, s, i) {
                    return r.length > 100 ? (s.error(o + " " + e + " is too long"), i) : t.RULE_SUCCESS
                }, MAX_LENGTH_128: function (e, r, o, s, i) {
                    return r.length > 128 ? (s.error(o + " " + e + " is too long"), i) : t.RULE_SUCCESS
                }, MAX_LENGTH_256: function (e, r, o, s, i) {
                    return r.length > 256 ? (s.error(o + " " + e + " is too long"), i) : t.RULE_SUCCESS
                }, MAX_LENGTH_1024: function (e, r, o, s, i) {
                    return r.length > 1024 ? (s.error(o + " " + e + " is too long"), i) : t.RULE_SUCCESS
                }
            };
            t.checkParams = function (e, r) {
                var s = [], n = {};
                for (var a in e) n[e[a].order] = e[a], e[a].key = a;
                for (var l in n) s.push(n[l]);
                for (var _ = 0; _ < s.length; _++) for (var d = s[_].rules, u = 0; u < d.length; u++) {
                    var E = {key: s[_].key, value: s[_].value, action: r.action, logger: r.logger}, g = E.key,
                        c = E.value, h = E.action, T = E.logger, m = d[u].name ? "" + d[u].name : "";
                    if ((void 0 === c && m === o.NOT_EMPTY || void 0 !== c) && i[m]) {
                        var p = i[m](g, c, h, T, d[u]);
                        if (p != t.RULE_SUCCESS) return p
                    }
                }
                return t.RULE_SUCCESS
            }
        }, function (e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {value: !0}), t.StateCenter = void 0;
            var o = r(0), s = r(2), i = r(4), n = function () {
                function e(e, t) {
                    this.logger = e, this.dataReport = t, this._debug = !1, this._testEnvironment = !1, this._env = 0, this.type = "PUBLIC", this.debugCustom = !1, this.configOK = !1, this.role = 2, this.relateService = [], this.maxMemberCount = 0, this.roomCreateFlag = 1, this.local_time_deviation = 0, this.callbackList = {}, this.listenerList = {
                        roomUserUpdate: [],
                        roomOnlineUserCountUpdate: [],
                        getAnchorInfo: [],
                        _getAnchorInfo: [],
                        IMRecvCustomCommand: [],
                        IMRecvBroadcastMessage: [],
                        recvReliableMessage: [],
                        roomExtraInfoUpdate: [],
                        IMRecvBarrageMessage: [],
                        recvJoinLiveRequest: [],
                        recvInviteJoinLiveRequest: [],
                        recvEndJoinLiveCommand: [],
                        roomLoginResponse: [],
                        HBResponse: [],
                        roomStateUpdate: [],
                        _roomStateUpdate: [],
                        _getTotalUserList: [],
                        _userStateUpdate: [],
                        _recvBigRoomMessage: [],
                        _recvRoomMsg: [],
                        _kickout: [],
                        tokenWillExpire: [],
                        hallStateUpdate: [],
                        _hallStateUpdate: [],
                        roomTokenWillExpire: [],
                        _tokenRenewed: [],
                        _protobufResponse: []
                    }, this.reportList = {}, this.reportSeqList = {
                        login: 0,
                        relogin: 0
                    }, this.networkState = o.ENUM_NETWORK_STATE.offline, this.roomRetryTime = 300, this.roomModulesList = [], this.isMultiRoom = !1, this.setMultiRoom = !1, this._sdkVersion = "unknown"
                }

                return Object.defineProperty(e.prototype, "debug", {
                    get: function () {
                        return this._debug
                    }, set: function (e) {
                        this._debug = e, o.LoggerStateCenter.getInstance().debug = e
                    }, enumerable: !1, configurable: !0
                }), Object.defineProperty(e.prototype, "testEnvironment", {
                    get: function () {
                        return this._testEnvironment
                    }, set: function (e) {
                        this._testEnvironment = e, o.LoggerStateCenter.getInstance().testEnvironment = e
                    }, enumerable: !1, configurable: !0
                }), Object.defineProperty(e.prototype, "ENV", {
                    get: function () {
                        return this._env
                    }, set: function (e) {
                        this._env = e, o.LoggerStateCenter.getInstance().ENV = e
                    }, enumerable: !1, configurable: !0
                }), Object.defineProperty(e.prototype, "roomid", {
                    get: function () {
                        return this.roomModulesList[0] ? this.roomModulesList[0].roomID : ""
                    }, enumerable: !1, configurable: !0
                }), Object.defineProperty(e.prototype, "serverTimeOffset", {
                    get: function () {
                        return this.roomModulesList[0] ? this.roomModulesList[0].messageHandler.serverTimeOffset : 0
                    }, enumerable: !1, configurable: !0
                }), e.prototype.getRequestId = function () {
                    return this.idName + "-" + o.getSeq()
                }, e.prototype.actionListener = function (e) {
                    for (var t = this, r = [], n = 1; n < arguments.length; n++) r[n - 1] = arguments[n];
                    if (this.listenerList[e]) {
                        var a = o.getReportSeq();
                        this.dataReport.newReport(a, i.ZegoRTMLogEvent.kZegoListener.event), this.dataReport.addMsgInfo(a, {
                            listener: e,
                            params: r
                        }), this.dataReport.uploadReport(a)
                    }
                    this.listenerList[e] && this.listenerList[e].forEach((function (o) {
                        try {
                            o.apply(void 0, r)
                        } catch (r) {
                            t.logger.error(s.ZEGO_RTM_ACTION.STATE_ACTION + " ", e, " ", JSON.stringify(r))
                        }
                    }))
                }, Object.defineProperty(e.prototype, "sdKVersion", {
                    get: function () {
                        return this._sdkVersion
                    }, set: function (e) {
                        this._sdkVersion = e
                    }, enumerable: !1, configurable: !0
                }), e
            }();
            t.StateCenter = n
        }, function (e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {value: !0}), t.LiveRoomModules = void 0;
            var o = r(0), s = r(6), i = r(7), n = r(8), a = r(20), l = r(9), _ = function () {
                function e(e, t, r, _, d) {
                    this.roomID = e, this.stateCenter = t, this.logger = r, this.dataReport = _, this.service = d, this.runState = o.ENUM_RUN_STATE.logout, this.lastRunState = o.ENUM_RUN_STATE.logout, this.lastRoomState = "DISCONNECTED", this.roomState = "DISCONNECTED", this.roomSessionID = "0", this.sessionID = "0", this.isMulti = !1, this.token = "", this.thirdToken = "", this.roomHandler = new a.RoomHandler(this.logger, this.stateCenter, this.dataReport, this.service, this), this.heartBeatHandler = new s.HeartBeatHandler(this.logger, this.stateCenter, this.dataReport, this.service, this), this.userHandler = new l.UserHandler(this.logger, this.stateCenter, this.dataReport, this.service, this), this.messageHandler = new n.MessageHandler(this.logger, this.stateCenter, this.dataReport, this.service, this), this.liveHandler = new i.LiveHandler(this.logger, this.stateCenter, this.service, this), this.init()
                }

                return e.prototype.init = function () {
                    this.bindHeatBeatHandler(), this.bindRoomHandler(), this.bindMessageHandler(), this.bindLiveHandler()
                }, e.prototype.bindHeatBeatHandler = function () {
                    var e = this;
                    this.heartBeatHandler.hbLogout = function (t) {
                        e.roomHandler.handleHbLogout(t)
                    }, this.heartBeatHandler.heartbeatRspNotiFy = function (t) {
                        e.messageHandler.loginRsp(t), e.userHandler.patchUserList(t), e.HBResponse(t)
                    }
                }, e.prototype.bindRoomHandler = function () {
                    var e = this;
                    this.roomHandler.loginSuccessCallBack = function (t, r) {
                        e.heartBeatHandler.init(r), e.service.startCheck(), e.userHandler.loginRsp(r, t), e.messageHandler.loginRsp(r), e.handleMultiRoom(), e.roomLoginResponse(r)
                    }, this.roomHandler.resetRoomCallBack = function () {
                        e.heartBeatHandler.resetHeartbeat(), e.liveHandler.resetLiveHandler(), e.messageHandler.resetMessageInfo(), e.userHandler.resetUserHandler(), e.roomTryHandler && (e.roomTryHandler.invalid(), e.roomTryHandler.stopMaxTime(), e.roomTryHandler = void 0)
                    }
                }, e.prototype.bindUserHandler = function () {
                }, e.prototype.bindMessageHandler = function () {
                }, e.prototype.bindLiveHandler = function () {
                }, e.prototype.HBResponse = function (e) {
                    this.stateCenter.actionListener("HBResponse", e)
                }, e.prototype.roomLoginResponse = function (e) {
                    this.stateCenter.actionListener("roomLoginResponse", e)
                }, e.prototype.handleMultiRoom = function () {
                    this.stateCenter.roomModulesList.forEach((function (e) {
                        e.runState !== o.ENUM_RUN_STATE.login && e.roomTryHandler && 1 == e.isMulti && (e.roomTryHandler.onactive = function (t, r) {
                            r && 0 !== r.code ? e.roomHandler.roomStateHandle("DISCONNECTED", r) : e.roomHandler.roomStateHandle("CONNECTED", r)
                        }, e.roomTryHandler.startMaxTime(), e.roomTryHandler.active())
                    }))
                }, e.prototype.isLogin = function () {
                    return this.runState === o.ENUM_RUN_STATE.login
                }, e
            }();
            t.LiveRoomModules = _
        }, function (e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {value: !0}), t.RoomHandler = void 0;
            var o = r(0), s = r(3), i = r(2), n = r(1), a = r(4), l = function () {
                function e(e, t, r, o, s) {
                    this.logger = e, this.stateCenter = t, this.dataReport = r, this.service = o, this.room = s, this.tryLoginTimer = null, this.tryLoginCount = 0, this.tryLoginInterval = 1e4, this.tokenTimer = null, this.beforeExpire = 30
                }

                return e.prototype.resetTokenTimer = function (e) {
                    var t = this;
                    e = (e = e < 0 ? 0 : e) > 2147483648 ? 2147483648 : e, this.logger.info(i.ZEGO_RTM_ACTION.ROOM_RESETTOKEN_TIMER + "  call: " + e), this.tokenTimer && clearTimeout(this.tokenTimer), this.tokenTimer = setTimeout((function () {
                        t.stateCenter.actionListener("tokenWillExpire", t.room.roomID), t.stateCenter.actionListener("roomTokenWillExpire", t.room.roomID)
                    }), e)
                }, e.prototype.stopTokenTimer = function () {
                    clearTimeout(this.tokenTimer)
                }, e.prototype.setRunState = function (e) {
                    this.room.lastRunState = this.room.runState, this.room.runState = e
                }, e.prototype.resetTryLogin = function () {
                    this.tryLoginTimer && clearTimeout(this.tryLoginTimer), this.tryLoginTimer = null
                }, e.prototype.resetRoom = function (e) {
                    var t = this;
                    if (this.logger.info(i.ZEGO_RTM_ACTION.ROOM_RESET_ROOM + " call"), this.stateCenter.roomModulesList.length > 1 && !e && (this.room.isMulti = !0), this.resetTryLogin(), "0" !== this.room.sessionID && this.room.runState !== o.ENUM_RUN_STATE.logout) {
                        var r = function (e) {
                            t.handleLogoutRsp(e)
                        };
                        this.service.logout(this.room, r, r)
                    }
                    this.setRunState(o.ENUM_RUN_STATE.logout), this.room.sessionID = "", this.room.roomSessionID = "", this.room.isMulti || (this.stateCenter.userid = "", this.logger.setSessionInfo(this.stateCenter.appid, this.room.roomID, this.room.sessionID, this.stateCenter.idName, this.stateCenter.nickName, this.stateCenter.sdKVersion), this.service.closeSocket()), this.resetRoomCallBack(), this.stateCenter.roomModulesList = this.stateCenter.roomModulesList.filter((function (e) {
                        return e !== t.room
                    }));
                    var s = this.stateCenter.roomModulesList[0];
                    s && (s.isMulti = !1, s.runState !== o.ENUM_RUN_STATE.login && s.roomTryHandler && (s.roomTryHandler.startMaxTime(), s.roomTryHandler.active())), this.logger.info(i.ZEGO_RTM_ACTION.ROOM_RESET_ROOM + " call success")
                }, e.prototype.resetRoomCallBack = function () {
                }, e.prototype.loginSuccessCallBack = function (e, t) {
                }, e.prototype.handlePushKickout = function (e, t) {
                    var r = this;
                    this.logger.info(i.ZEGO_RTM_ACTION.ROOM_KICK_OUT + "  call " + JSON.stringify(e));
                    var l = o.getReportSeq();
                    this.dataReport.newReport(l, a.ZegoRTMLogEvent.kZegoTaskKickout.event), this.dataReport.addMsgInfo(l, {user_id: a.ZegoRTMLogEvent.kZegoTaskKickout.user_id(this.stateCenter.idName)});
                    var _ = s.ClientUtil.getKickoutError(e.body.reason);
                    this.dataReport.addMsgInfo(l, {error: _.code, message: _.message}), this.dataReport.uploadReport(l);
                    var d = this.room.roomTryHandler;
                    if (d) if (d.onactive = function (e, t) {
                        r.disconnectedHandle(t), r.stateCenter.actionListener("_kickout", t)
                    }, e.body.need_relogin && 1 == e.body.need_relogin) this.room.sessionID = "", d.startMaxTime(), d.active(); else {
                        this.resetRoom(t);
                        var u = {};
                        e && e.body.custom_reason ? u.custom_kickout_message = e.body.custom_reason : _.name && n.errorCodeList[_.name] && (u.custom_kickout_message = n.errorCodeList[_.name].msg + " kickout，reason: " + e.body.reason), _.name && n.errorCodeList[_.name] ? this.disconnectedHandle(n.errorCodeList[_.name], JSON.stringify(u)) : this.disconnectedHandle(n.errorCodeList.ROOM_INNER_ERROR, JSON.stringify(u)), this.stateCenter.actionListener("_kickout", {
                            code: n.errorCodeList.MANUAL_KICKOUT.code,
                            msg: n.errorCodeList.MANUAL_KICKOUT.msg + e.body.reason
                        })
                    } else this.logger.info(i.ZEGO_RTM_ACTION.ROOM_KICK_OUT + " try handler no found")
                }, e.prototype.handleHbLogout = function (e) {
                    var t = this, r = this.room.roomTryHandler;
                    r && (r.onactive = function (e, r) {
                        t.disconnectedHandle(r)
                    }, [n.errorCodeList.HEARTBEAT_TIMEOUT, n.errorCodeList.SOCKET_CLOSE, n.errorCodeList.TIMEOUT].includes(e) || e.msg.endsWith("1000002001") || e.msg.endsWith("1000000152") ? (r.startMaxTime(), r.active()) : (r.stopMaxTime(), r.invalid(), this.resetRoom(), this.disconnectedHandle(e)))
                }, e.prototype.onDisconnect = function (e) {
                    var t = this;
                    if (this.logger.error(i.ZEGO_RTM_ACTION.ROOM_DISCONNECT + " " + e.msg), "string" == typeof e.code && "Error.Network" === e.code) this.dataReport.addMsgInfo(this.stateCenter.reportSeqList.relogin, {
                        error: a.ZegoRTMLogEvent.kZegoTaskReLoginRoom.error.ROOM_DISCONNECT.code,
                        message: a.ZegoRTMLogEvent.kZegoTaskReLoginRoom.error.ROOM_DISCONNECT.msg
                    }); else if ("number" == typeof e.code) {
                        var r;
                        (r = e.code < 2e9 && e.code > 1e9 || e.code < 1e6 ? s.ClientUtil.decodeServerError(e.code, e.msg) : {
                            code: e.code,
                            message: e.msg
                        }) && this.dataReport.addMsgInfo(this.stateCenter.reportSeqList.relogin, {
                            error: r.code,
                            message: r.message
                        })
                    }
                    this.dataReport.uploadReport(this.stateCenter.reportSeqList.relogin), this.stateCenter.reportSeqList.relogin = 0, s.ClientUtil.unregisterCallback(a.ZegoRTMLogEvent.kZegoTaskReLoginRoom.event, this.stateCenter.reportList);
                    var o = this.room.roomTryHandler;
                    o ? (o.onactive = function (e, r) {
                        r && 0 !== r.code ? t.roomStateHandle("DISCONNECTED", r) : t.roomStateHandle("CONNECTED", r)
                    }, o.startMaxTime(), o.active()) : this.logger.error(i.ZEGO_RTM_ACTION.ROOM_DISCONNECT + " try handler no found")
                }, e.prototype.onConnecting = function (e) {
                    this.roomStateHandle("CONNECTING", e)
                }, e.prototype.disconnectedHandle = function (e, t) {
                    e && 0 !== e.code ? (this.stopTokenTimer(), this.roomStateHandle("DISCONNECTED", e, t)) : this.roomStateHandle("CONNECTED", e, t)
                }, e.prototype.roomStateHandle = function (e, t, r) {
                    this.logger.info(i.ZEGO_RTM_ACTION.ROOM_STATUS_CALLBACK + " " + e + " " + JSON.stringify(t)), this.room.lastRoomState = this.room.roomState, this.room.roomState = e, this.room.roomState !== this.room.lastRoomState && (this.stateCenter.actionListener("roomStateUpdate", this.room.roomID, e, t ? t.code : 0, r), this.stateCenter.actionListener("_roomStateUpdate", this.room.roomID, e, t ? t.code : 0, r))
                }, e.prototype.login = function (e, t, r, l, _, d, u) {
                    if (this.logger.info(i.ZEGO_RTM_ACTION.ROOM_LOGIN_ROOM + " call:", t, r), !this.room.isMulti && this.logger.setSessionInfo(this.stateCenter.appid, t, "", l.userID, "", this.stateCenter.sdKVersion), _ && (_.userUpdate && "boolean" == typeof _.userUpdate && (this.stateCenter.userStateUpdate = _.userUpdate), _.maxMemberCount && "number" == typeof _.maxMemberCount && (this.stateCenter.maxMemberCount = _.maxMemberCount)), !this.stateCenter.configOK) return this.logger.error(i.ZEGO_RTM_ACTION.ROOM_LOGIN_ROOM + " init sdk wrong"), void u(n.errorCodeList.INIT);
                    if (this.room.runState !== o.ENUM_RUN_STATE.trylogin && this.setRunState(o.ENUM_RUN_STATE.trylogin), this.room.roomID = t, this.room.token = r, this.room.thirdToken = r, this.stateCenter.idName = l.userID, this.stateCenter.nickName = l.userName || l.userID, s.ClientUtil.registerCallback("login", {
                        success: d,
                        error: u
                    }, this.stateCenter.callbackList), 0 === this.stateCenter.reportSeqList.login) {
                        var E = o.getReportSeq();
                        this.stateCenter.reportSeqList.relogin = E, this.dataReport.newReport(E, a.ZegoRTMLogEvent.kZegoTaskReLoginRoom.event), this.dataReport.addMsgInfo(E, {server: e}), s.ClientUtil.logReportCallback(a.ZegoRTMLogEvent.kZegoTaskReLoginRoom.event, this.dataReport, E, this.stateCenter.reportList)
                    }
                    this.resetTryLogin(), this.onConnecting({
                        code: 0,
                        msg: ""
                    }), this.tryLogin(e), this.logger.info(i.ZEGO_RTM_ACTION.ROOM_LOGIN_ROOM + " call success")
                }, e.prototype.tryLogin = function (e) {
                    var t = this;
                    if (this.room.runState === o.ENUM_RUN_STATE.trylogin) {
                        var r = 0 !== this.stateCenter.reportSeqList.login ? a.ZegoRTMLogEvent.kZegoTaskLoginRoom.event : a.ZegoRTMLogEvent.kZegoTaskReLoginRoom.event;
                        if (this.service.isDisConnect()) try {
                            this.service.closeSocket(), this.logger.debug(i.ZEGO_RTM_ACTION.ROOM_TRY_LOGIN + " new websocket"), s.ClientUtil.actionSuccessCallback(r, this.stateCenter.reportList) && (this.tryLoginCount > 1 && s.ClientUtil.actionSuccessCallback(r, this.stateCenter.reportList)(o.REPORT_ACTION.eventEnd, a.ZegoRTMLogEvent.kZegoTaskLoginRoom.subEvent.create_socket.event), s.ClientUtil.actionSuccessCallback(r, this.stateCenter.reportList)(o.REPORT_ACTION.eventStart, a.ZegoRTMLogEvent.kZegoTaskLoginRoom.subEvent.create_socket.event), s.ClientUtil.actionSuccessCallback(r, this.stateCenter.reportList)(o.REPORT_ACTION.addEventMsg, a.ZegoRTMLogEvent.kZegoTaskLoginRoom.subEvent.create_socket.event, a.ZegoRTMLogEvent.kZegoTaskLoginRoom.subEvent.create_socket.server("server"), e)), this.service.createSocket(e), this.service.openHandler((function () {
                                t.openHandler()
                            })), this.service.closeHandler((function (e) {
                                t.logger.error(i.ZEGO_RTM_ACTION.ROOM_TRY_LOGIN + " close " + JSON.stringify(e.code ? e.code : e)), t.service.closeSocket(), t.closeHandler(e)
                            })), this.service.errorHandler((function (e) {
                                t.logger.error(i.ZEGO_RTM_ACTION.ROOM_TRY_LOGIN + " error " + JSON.stringify(e.code ? e.code : e)), t.service.closeSocket(), t.closeHandler(e)
                            }))
                        } catch (e) {
                            this.logger.error(i.ZEGO_RTM_ACTION.ROOM_TRY_LOGIN + "  websocket err:" + JSON.stringify(e))
                        } else {
                            this.logger.info(i.ZEGO_RTM_ACTION.ROOM_TRY_LOGIN + " use current websocket and sent login"), s.ClientUtil.actionSuccessCallback(r, this.stateCenter.reportList) && s.ClientUtil.actionSuccessCallback(r, this.stateCenter.reportList)(o.REPORT_ACTION.eventStart, a.ZegoRTMLogEvent.kZegoTaskLoginRoom.subEvent.liveroom_login.event);
                            var n = function (e, r) {
                                t.handleLoginRsp(e, r)
                            };
                            this.service.login(this.room, n, n)
                        }
                        this.tryLoginTimer = setTimeout((function () {
                            t.logger.info(i.ZEGO_RTM_ACTION.ROOM_TRY_LOGIN + " over time no response, login timeout"), s.ClientUtil.actionErrorCallback("login", t.stateCenter.callbackList)(a.ZegoRTMLogEvent.kZegoTaskLoginRoom.error.LOGIN_TIMEOUT)
                        }), this.tryLoginInterval), this.logger.info(i.ZEGO_RTM_ACTION.ROOM_TRY_LOGIN + " call success")
                    } else this.logger.error("zb.rh.tl state error")
                }, e.prototype.openHandler = function () {
                    var e = this;
                    this.logger.info(i.ZEGO_RTM_ACTION.ROOM_OPEN_HANDLER + " websocket.onpen call");
                    var t = 0 !== this.stateCenter.reportSeqList.login ? a.ZegoRTMLogEvent.kZegoTaskLoginRoom.event : a.ZegoRTMLogEvent.kZegoTaskReLoginRoom.event;
                    s.ClientUtil.actionSuccessCallback(t, this.stateCenter.reportList) && s.ClientUtil.actionSuccessCallback(t, this.stateCenter.reportList)(o.REPORT_ACTION.eventEndWithMsgInfo, a.ZegoRTMLogEvent.kZegoTaskLoginRoom.subEvent.create_socket.event, {try_cnt: this.tryLoginCount}), this.service.onPush(), s.ClientUtil.actionSuccessCallback(t, this.stateCenter.reportList) && s.ClientUtil.actionSuccessCallback(t, this.stateCenter.reportList)(o.REPORT_ACTION.eventStart, a.ZegoRTMLogEvent.kZegoTaskLoginRoom.subEvent.liveroom_login.event);
                    var r = function (t, r) {
                        e.handleLoginRsp(t, r)
                    };
                    this.service.login(this.room, r, r)
                }, e.prototype.handleLoginRsp = function (e, t) {
                    var r = 0 !== this.stateCenter.reportSeqList.login ? a.ZegoRTMLogEvent.kZegoTaskLoginRoom.event : a.ZegoRTMLogEvent.kZegoTaskReLoginRoom.event;
                    if (s.ClientUtil.actionSuccessCallback(r, this.stateCenter.reportList) && s.ClientUtil.actionSuccessCallback(r, this.stateCenter.reportList)(o.REPORT_ACTION.eventEndWithMsgInfo, a.ZegoRTMLogEvent.kZegoTaskLoginRoom.subEvent.liveroom_login.event), this.room.runState === o.ENUM_RUN_STATE.trylogin) if (e.header && e.body) {
                        if (e.header.seq !== t && 0 == this.room.isMulti) return void this.logger.error(i.ZEGO_RTM_ACTION.ROOM_HANDLE_LOGINRSP + " in wrong seq, local=", t + "", ",recv=", e.header.seq);
                        0 !== e.body.err_code ? (this.logger.error(i.ZEGO_RTM_ACTION.ROOM_HANDLE_LOGINRSP + " server error=", e.body.err_code), this.handleLoginFail(e)) : (this.logger.info(i.ZEGO_RTM_ACTION.ROOM_HANDLE_LOGINRSP + " call success."), this.handleLoginSuccess(e))
                    } else this.logger.error(i.ZEGO_RTM_ACTION.ROOM_HANDLE_LOGINRSP + " " + JSON.stringify(e)), this.handleLoginFail(e); else this.logger.error(i.ZEGO_RTM_ACTION.ROOM_HANDLE_LOGINRSP + " state error")
                }, e.prototype.handleLoginFail = function (e) {
                    this.resetTryLogin();
                    var t = a.ZegoRTMLogEvent.kZegoTaskLoginRoom.error.INNER_ERROR;
                    e.header && e.body ? t = s.ClientUtil.getServerError(e.body.err_code) : e.code && e.msg && (t = e), s.ClientUtil.actionErrorCallback("login", this.stateCenter.callbackList)(t, !0)
                }, e.prototype.handleLoginSuccess = function (e) {
                    var t = {}, r = this.room.lastRunState;
                    if (this.setRunState(o.ENUM_RUN_STATE.login), this.stateCenter.userid = e.body.user_id, this.room.sessionID = e.body.session_id, this.room.roomSessionID = e.body.room_session_id, e.body.ret_timestamp && "03" === this.room.token.substr(0, 2)) {
                        var i = (new Date).getTime() - e.body.ret_timestamp;
                        this.stateCenter.local_time_deviation = i < 5e3 ? 0 : i;
                        var n = s.ClientUtil.decodeTokenExpire(this.room.token.substr(2));
                        this.resetTokenTimer(1e3 * n - (new Date).getTime() - this.stateCenter.local_time_deviation - 3e4)
                    }
                    !this.room.isMulti && this.logger.setSessionInfo(this.stateCenter.appid, this.room.roomID, this.room.sessionID, this.stateCenter.idName, this.stateCenter.nickName, this.stateCenter.sdKVersion), e.body.config_info && (this.logger.setRemoteLogLevel(e.body.config_info.log_level), t.log_level = e.body.config_info.log_level, "" == e.body.config_info.log_url || this.logger.url || (this.logger.setLogServer(e.body.config_info.log_url), t.log_url = e.body.config_info.log_url)), e.body.cluster_env && 1 === e.body.cluster_env && (this.stateCenter.testEnvironment = !0, t.test_environment = "true", !this.stateCenter.debugCustom && (this.stateCenter.debug = !0));
                    var l = 0 !== this.stateCenter.reportSeqList.login ? a.ZegoRTMLogEvent.kZegoTaskLoginRoom.event : a.ZegoRTMLogEvent.kZegoTaskReLoginRoom.event;
                    s.ClientUtil.actionSuccessCallback(l, this.stateCenter.reportList) && s.ClientUtil.actionSuccessCallback(l, this.stateCenter.reportList)(o.REPORT_ACTION.addEventMsg, a.ZegoRTMLogEvent.kZegoTaskLoginRoom.subEvent.liveroom_login.event, a.ZegoRTMLogEvent.kZegoTaskLoginRoom.subEvent.liveroom_login.respond_info("respond_info"), t), this.resetTryLogin(), this.loginSuccessCallBack(r, e), s.ClientUtil.actionSuccessCallback("login", this.stateCenter.callbackList) && s.ClientUtil.actionSuccessCallback("login", this.stateCenter.callbackList)(!0), this.roomStateHandle("CONNECTED", {
                        code: 0,
                        msg: ""
                    })
                }, e.prototype.closeHandler = function (e) {
                    this.logger.error(i.ZEGO_RTM_ACTION.ROOM_CLOSEHANDLER + " room websocket close " + JSON.stringify(e.code ? e.code : e)), this.room.runState !== o.ENUM_RUN_STATE.logout ? this.room.runState === o.ENUM_RUN_STATE.trylogin ? (this.resetTryLogin(), s.ClientUtil.actionErrorCallback("login", this.stateCenter.callbackList)(1006 == e.code ? a.ZegoRTMLogEvent.kZegoTaskLoginRoom.error.LOGIN_TIMEOUT : e)) : this.room.runState === o.ENUM_RUN_STATE.login && (this.logger.info(i.ZEGO_RTM_ACTION.ROOM_CLOSEHANDLER + " is called because of network broken"), this.resetTryLogin(), this.onDisconnect(a.ZegoRTMLogEvent.kZegoTaskLoginRoom.error.NETWORK_BROKEN)) : this.logger.info(i.ZEGO_RTM_ACTION.ROOM_CLOSEHANDLER + " onclose logout flow call websocket.close")
                }, e.prototype.logout = function (e) {
                    this.logger.info(i.ZEGO_RTM_ACTION.ROOM_LOGOUT + " call"), this.room.runState !== o.ENUM_RUN_STATE.logout ? (this.resetRoom(e), this.roomStateHandle("DISCONNECTED", {
                        code: 0,
                        msg: ""
                    }), this.stopTokenTimer(), this.logger.info(i.ZEGO_RTM_ACTION.ROOM_LOGOUT + " call success")) : this.logger.warn("zb.rh.lo at logout")
                }, e.prototype.handleLogoutRsp = function (e) {
                    this.logger.info(i.ZEGO_RTM_ACTION.ROOM_LOGOUT + " result=", e.body && e.body.err_code ? e.body.err_code : "-1")
                }, e
            }();
            t.RoomHandler = l
        }, function (e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {value: !0}), t.LiveRoomModules = void 0;
            var o = r(0), s = r(6), i = r(7), n = r(8), a = r(9), l = r(22), _ = r(23), d = r(1), u = r(4),
                E = function () {
                    function e(e, t, r, d) {
                        this.stateCenter = e, this.logger = t, this.dataReport = r, this.service = d, this.roomID = "", this.dispatchServer = "", this.deviceID = "", this.deviceType = "", this.anType = 0, this.sessionExpire = "", this.pri_roomID = "", this.roomSid = "0", this.roomFlag = 1, this.timeStamp = 0, this.netType = 2, this.userSeq = 0, this.hallRunState = o.ENUM_RUN_STATE.logout, this.hallToken = "", this.roomSessionID = "", this.lastHallRunState = o.ENUM_RUN_STATE.logout, this.runRoomState = o.ENUM_RUN_STATE.logout, this.lastRunRoomState = o.ENUM_RUN_STATE.logout, this.lastHallState = "DISCONNECTED", this.hallState = "DISCONNECTED", this.lastRoomState = "DISCONNECTED", this.roomState = "DISCONNECTED", this.sessionID = "", this.hallHandler = new l.HallHandler(this.logger, this.stateCenter, this.dataReport, this.service, this), this.roomPrivateHandler = new _.RoomPrivateHandler(this.logger, this.stateCenter, this.dataReport, this.service, this), this.heartBeatHandler = new s.HeartBeatHandler(this.logger, this.stateCenter, this.dataReport, this.service, this.stateCenter.priModules), this.userHandler = new a.UserHandler(this.logger, this.stateCenter, this.dataReport, this.service, this.stateCenter.priModules), this.messageHandler = new n.MessageHandler(this.logger, this.stateCenter, this.dataReport, this.service, this.stateCenter.priModules), this.liveHandler = new i.LiveHandler(this.logger, this.stateCenter, this.service, this.stateCenter.priModules), this.init()
                    }

                    return e.prototype.init = function () {
                        this.bindSocketHandler(), this.bindHeatBeatHandler(), this.bindHallHandler(), this.bindMessageHandler(), this.bindLiveHandler(), this.bindRoomHandler()
                    }, e.prototype.bindSocketHandler = function () {
                        var e = this;
                        this.service.handleHallKickout = function (t) {
                            e.hallHandler.handleHallKickout(t)
                        }, this.service.handlePushKickout = function (t) {
                            e.logger.info("zb.cm.bsh.0  call hpk");
                            var r = o.getReportSeq();
                            e.dataReport.newReport(r, u.ZegoRTMLogEvent.kZegoTaskRoomKickout.event), e.dataReport.addMsgInfo(r, {
                                user_id: u.ZegoRTMLogEvent.kZegoTaskRoomKickout.user_id(e.stateCenter.idName),
                                room_id: u.ZegoRTMLogEvent.kZegoTaskRoomKickout.room_id(e.stateCenter.priModules.roomID)
                            }), e.dataReport.addMsgInfo(r, {
                                error: t.body.reason,
                                message: t.body.message
                            }), e.dataReport.uploadReport(r), e.setRoomRunState(o.ENUM_RUN_STATE.logout), e.roomPrivateHandler.resetRoom();
                            var s = {};
                            t && t.body && (t.body.reason && (s.custom_kickout_message = t.body.message), t.body.reason && (s.reason = t.body.reason)), e.roomPrivateHandler.roomStateHandle("DISCONNECTED", {
                                code: d.errorCodeList.MULTIPLE_LOGIN_KICKOUT.code,
                                msg: s
                            }), e.logger.info("zb.cm.bsh.0  call hpk success")
                        }, this.service.handlePushUserStateUpdateMsg = function (t) {
                            e.userHandler.handlePushUserStateUpdateMsg(t)
                        }, this.service.handlePushTransMsg = function (t) {
                            e.messageHandler.handlePushTransMsg(t)
                        }, this.service.handlePushRoomMsg = function (t) {
                            e.messageHandler.handlePushRoomMsg(t)
                        }, this.service.handlePushCustomMsg = function (t) {
                            e.messageHandler.handlePushCustomMsg(t)
                        }, this.service.handlePushMergeMsg = function (t) {
                            e.messageHandler.handlePushMergeMsg(t)
                        }, this.service.handlePushSignalMsg = function (t) {
                            e.liveHandler.handlePushSignalMsg(t)
                        }
                    }, e.prototype.bindHeatBeatHandler = function () {
                        var e = this;
                        this.heartBeatHandler.hbLogout = function (t) {
                            e.hallHandler.handleHbLogout(t)
                        }, this.heartBeatHandler.heartbeatRspNotiFy = function (t) {
                            e.messageHandler.loginRsp(t), e.HBResponse(t)
                        }
                    }, e.prototype.bindHallHandler = function () {
                        var e = this;
                        this.hallHandler.loginSuccessCallBack = function (t, r) {
                            if (e.heartBeatHandler.init(r), e.service.startCheck(), e.runRoomState === o.ENUM_RUN_STATE.login) {
                                var s = function (t, r) {
                                    0 !== t.body.code ? (e.setRoomRunState(o.ENUM_RUN_STATE.logout), e.roomPrivateHandler.roomStateHandle("DISCONNECTED", {
                                        code: t.body.code,
                                        msg: t.body.message
                                    })) : (e.timeStamp = t.header.timeStamp, e.roomSid = t.body.room_header.room_sid, e.roomSessionID = t.body.room_header.room_user_session_id, e.userSeq = t.body.userlist_seq, e.setRoomRunState(o.ENUM_RUN_STATE.login), e.roomPrivateHandler.roomStateHandle("CONNECTED", {
                                        code: 0,
                                        msg: ""
                                    }), e.userHandler.loginPrivateRsp(t), e.roomLoginResponse(t))
                                };
                                e.roomPrivateHandler.enterRoom(s, s)
                            }
                        }, this.hallHandler.resetRoomCallBack = function () {
                            e.heartBeatHandler.resetHeartbeat(), e.liveHandler.resetLiveHandler(), e.messageHandler.resetMessageInfo(), e.userHandler.resetUserHandler()
                        }
                    }, e.prototype.bindUserHandler = function () {
                    }, e.prototype.bindMessageHandler = function () {
                    }, e.prototype.bindLiveHandler = function () {
                    }, e.prototype.bindRoomHandler = function () {
                        var e = this;
                        this.roomPrivateHandler.resetRoomCallBack = function () {
                            e.liveHandler.resetLiveHandler(), e.messageHandler.resetMessageInfo(), e.userHandler.resetUserHandler()
                        }
                    }, e.prototype.HBResponse = function (e) {
                        this.stateCenter.actionListener("HBResponse", e)
                    }, e.prototype.roomLoginResponse = function (e) {
                        this.stateCenter.actionListener("roomLoginResponse", e)
                    }, e.prototype.setRoomRunState = function (e) {
                        this.roomPrivateHandler.setRoomRunState(e)
                    }, e.prototype.isLogin = function () {
                        return this.hallRunState === o.ENUM_RUN_STATE.login
                    }, e
                }();
            t.LiveRoomModules = E
        }, function (e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {value: !0}), t.HallHandler = void 0;
            var o = r(0), s = r(3), i = r(0), n = r(2), a = r(1), l = r(4), _ = function () {
                function e(e, t, r, o, s) {
                    this.logger = e, this.stateCenter = t, this.dataReport = r, this.service = o, this.room = s, this.tryLoginTimer = null, this.tryLoginCount = 0, this.tryLoginInterval = 1e4
                }

                return e.prototype.setRunState = function (e) {
                    this.room.lastHallRunState = this.room.hallRunState, this.room.hallRunState = e
                }, e.prototype.resetTryLogin = function () {
                    this.tryLoginTimer && clearTimeout(this.tryLoginTimer), this.tryLoginTimer = null
                }, e.prototype.resetHall = function () {
                    var e = this;
                    if (this.logger.info(n.ZEGO_RTM_ACTION.ROOM_RESET_ROOM + " call"), this.resetTryLogin(), "0" !== this.room.sessionID && this.room.hallRunState !== o.ENUM_RUN_STATE.logout) {
                        var t = function (t) {
                            e.handleLogoutRsp(t)
                        };
                        this.service.logoutHall(t, t)
                    }
                    this.setRunState(o.ENUM_RUN_STATE.logout), this.stateCenter.userid = "", this.room.sessionID = "", this.room.roomSessionID = "", this.logger.setSessionInfo(this.stateCenter.appid, this.room.roomID, this.room.sessionID, this.stateCenter.idName, this.stateCenter.nickName, this.stateCenter.sdKVersion), this.service.closeSocket(), this.resetRoomCallBack(), this.logger.info(n.ZEGO_RTM_ACTION.ROOM_RESET_ROOM + " call success")
                }, e.prototype.resetRoomCallBack = function () {
                }, e.prototype.loginSuccessCallBack = function (e, t) {
                }, e.prototype.handleHallKickout = function (e) {
                    this.logger.info(n.ZEGO_RTM_ACTION.ROOM_KICK_OUT + "  call " + e);
                    var t = i.getReportSeq();
                    this.dataReport.newReport(t, l.ZegoRTMLogEvent.kZegoTaskKickout.event), this.dataReport.addMsgInfo(t, {user_id: l.ZegoRTMLogEvent.kZegoTaskKickout.user_id(this.stateCenter.idName)});
                    var r = s.ClientUtil.getKickoutError(e.body.reason);
                    this.dataReport.addMsgInfo(t, {
                        error: r.code,
                        message: r.message
                    }), this.dataReport.uploadReport(t), this.resetHall();
                    var o = {};
                    e && e.body && (e.body.reason && (o.custom_kickout_message = e.body.message), e.body.reason && (o.reason = e.body.reason)), this.stateCenter.actionListener("roomStateUpdate", this.room.roomID, "DISCONNECTED", a.errorCodeList.MULTIPLE_LOGIN_KICKOUT.code, o)
                }, e.prototype.handleHbLogout = function (e) {
                    var t = this, r = this.room.retryHallHandler;
                    r && (r.onactive = function (e, r) {
                        t.disconnectedHandle(r)
                    }, e == a.errorCodeList.HEARTBEAT_TIMEOUT || e.msg.endsWith("1000002001") || e.msg.endsWith("1000000152") ? (r.startMaxTime(), r.active()) : (r.stopMaxTime(), r.invalid(), this.resetHall(), this.disconnectedHandle(e)))
                }, e.prototype.onDisconnect = function (e) {
                    var t = this;
                    if (this.logger.error(n.ZEGO_RTM_ACTION.ROOM_DISCONNECT + " " + e.msg), "string" == typeof e.code && "Error.Network" === e.code) this.dataReport.addMsgInfo(this.stateCenter.reportSeqList.relogin, {
                        error: l.ZegoRTMLogEvent.kZegoTaskReLoginHall.error.ROOM_DISCONNECT.code,
                        message: l.ZegoRTMLogEvent.kZegoTaskReLoginHall.error.ROOM_DISCONNECT.msg
                    }); else if ("number" == typeof e.code) {
                        var r;
                        (r = e.code < 2e9 && e.code > 1e9 || e.code < 1e6 ? s.ClientUtil.decodeServerError(e.code, e.msg) : {
                            code: e.code,
                            message: e.msg
                        }) && this.dataReport.addMsgInfo(this.stateCenter.reportSeqList.relogin, {
                            error: r.code,
                            message: r.message
                        })
                    }
                    this.dataReport.uploadReport(this.stateCenter.reportSeqList.relogin), this.stateCenter.reportSeqList.relogin = 0, s.ClientUtil.unregisterCallback(l.ZegoRTMLogEvent.kZegoTaskReLoginHall.event, this.stateCenter.reportList);
                    var o = this.room.retryHallHandler;
                    o ? (o.onactive = function (e, r) {
                        r ? t.hallStateHandle("DISCONNECTED", r) : t.hallStateHandle("CONNECTED", r)
                    }, o.startMaxTime(), o.active()) : this.logger.error(n.ZEGO_RTM_ACTION.ROOM_DISCONNECT + " try handler no found")
                }, e.prototype.onConnecting = function (e) {
                    this.hallStateHandle("CONNECTING", e)
                }, e.prototype.disconnectedHandle = function (e) {
                    e ? this.hallStateHandle("DISCONNECTED", e) : this.hallStateHandle("CONNECTED", e)
                }, e.prototype.hallStateHandle = function (e, t, r) {
                    this.logger.info(n.ZEGO_RTM_ACTION.ROOM_STATUS_CALLBACK + " " + e + " " + JSON.stringify(t)), this.room.lastHallState = this.room.hallState, this.room.hallState = e, this.room.hallState !== this.room.lastHallState && (this.stateCenter.actionListener("hallStateUpdate", e, t ? t.code : 0, r || ""), this.stateCenter.actionListener("_hallStateUpdate", e, t ? t.code : 0, r || ""), this.stateCenter.actionListener("_roomStateUpdate", this.room.roomID, e, t ? t.code : 0, r))
                }, e.prototype.loginHall = function (e, t, r, _, d) {
                    if (this.logger.info(n.ZEGO_RTM_ACTION.ROOM_LOGIN_ROOM + " call:"), this.logger.setSessionInfo(this.stateCenter.appid, "", "", t.userID, "", this.stateCenter.sdKVersion), !this.stateCenter.configOK) return this.logger.error(n.ZEGO_RTM_ACTION.ROOM_LOGIN_ROOM + " init sdk wrong"), void d(a.errorCodeList.INIT);
                    if (this.room.hallRunState !== o.ENUM_RUN_STATE.trylogin && this.setRunState(o.ENUM_RUN_STATE.trylogin), this.stateCenter.idName = t.userID, this.stateCenter.nickName = t.userName || t.userID, s.ClientUtil.registerCallback("login", {
                        success: _,
                        error: d
                    }, this.stateCenter.callbackList), 0 === this.stateCenter.reportSeqList.login) {
                        var u = i.getReportSeq();
                        this.stateCenter.reportSeqList.relogin = u, this.dataReport.newReport(u, l.ZegoRTMLogEvent.kZegoTaskReLoginHall.event), s.ClientUtil.logReportCallback(l.ZegoRTMLogEvent.kZegoTaskReLoginHall.event, this.dataReport, u, this.stateCenter.reportList)
                    }
                    this.resetTryLogin(), this.onConnecting({
                        code: 0,
                        msg: ""
                    }), this.tryLoginHall(e), this.logger.info(n.ZEGO_RTM_ACTION.ROOM_LOGIN_ROOM + " call success")
                }, e.prototype.tryLoginHall = function (e) {
                    var t = this;
                    if (this.room.hallRunState === o.ENUM_RUN_STATE.trylogin) {
                        var r = 0 !== this.stateCenter.reportSeqList.login ? l.ZegoRTMLogEvent.kZegoTaskLoginHall.event : l.ZegoRTMLogEvent.kZegoTaskReLoginHall.event;
                        if (this.service.isDisConnect()) try {
                            this.service.closeSocket(), this.logger.debug(n.ZEGO_RTM_ACTION.ROOM_TRY_LOGIN + " new websocket"), s.ClientUtil.actionSuccessCallback(r, this.stateCenter.reportList) && (this.tryLoginCount > 1 && s.ClientUtil.actionSuccessCallback(r, this.stateCenter.reportList)(i.REPORT_ACTION.eventEnd, l.ZegoRTMLogEvent.kZegoTaskLoginHall.subEvent.create_socket.event), s.ClientUtil.actionSuccessCallback(r, this.stateCenter.reportList)(i.REPORT_ACTION.eventStart, l.ZegoRTMLogEvent.kZegoTaskLoginHall.subEvent.create_socket.event), s.ClientUtil.actionSuccessCallback(r, this.stateCenter.reportList)(i.REPORT_ACTION.addEventMsg, l.ZegoRTMLogEvent.kZegoTaskLoginHall.subEvent.create_socket.event, l.ZegoRTMLogEvent.kZegoTaskLoginHall.subEvent.create_socket.server("server"), e)), this.service.createSocket(e), this.service.openHandler((function () {
                                t.openHandler()
                            })), this.service.closeHandler((function (e) {
                                t.logger.error(n.ZEGO_RTM_ACTION.ROOM_TRY_LOGIN + " close " + JSON.stringify(e)), t.service.closeSocket(), t.closeHandler(e)
                            })), this.service.errorHandler((function (e) {
                                t.logger.error(n.ZEGO_RTM_ACTION.ROOM_TRY_LOGIN + " error " + JSON.stringify(e)), t.service.closeSocket(), t.closeHandler(e)
                            }))
                        } catch (e) {
                            this.logger.error(n.ZEGO_RTM_ACTION.ROOM_TRY_LOGIN + "  websocket err:" + JSON.stringify(e))
                        } else {
                            this.logger.info(n.ZEGO_RTM_ACTION.ROOM_TRY_LOGIN + " use current websocket and sent login"), s.ClientUtil.actionSuccessCallback(r, this.stateCenter.reportList) && s.ClientUtil.actionSuccessCallback(r, this.stateCenter.reportList)(i.REPORT_ACTION.eventStart, l.ZegoRTMLogEvent.kZegoTaskLoginHall.subEvent.liveroom_login.event);
                            var a = function (e, r) {
                                t.handleLoginRsp(e, r)
                            };
                            this.service.loginHall(a, a)
                        }
                        this.tryLoginTimer = setTimeout((function () {
                            t.logger.info(n.ZEGO_RTM_ACTION.ROOM_TRY_LOGIN + " over time no response, login timeout"), s.ClientUtil.actionErrorCallback("login", t.stateCenter.callbackList)(l.ZegoRTMLogEvent.kZegoTaskLoginHall.error.LOGIN_TIMEOUT)
                        }), this.tryLoginInterval), this.logger.info(n.ZEGO_RTM_ACTION.ROOM_TRY_LOGIN + " call success")
                    } else this.logger.error("zb.rh.tl state error")
                }, e.prototype.openHandler = function () {
                    var e = this;
                    this.logger.info(n.ZEGO_RTM_ACTION.ROOM_OPEN_HANDLER + " websocket.onpen call");
                    var t = 0 !== this.stateCenter.reportSeqList.login ? l.ZegoRTMLogEvent.kZegoTaskLoginHall.event : l.ZegoRTMLogEvent.kZegoTaskReLoginHall.event;
                    s.ClientUtil.actionSuccessCallback(t, this.stateCenter.reportList) && s.ClientUtil.actionSuccessCallback(t, this.stateCenter.reportList)(i.REPORT_ACTION.eventEndWithMsgInfo, l.ZegoRTMLogEvent.kZegoTaskLoginHall.subEvent.create_socket.event, {try_cnt: this.tryLoginCount}), this.service.onPush(), s.ClientUtil.actionSuccessCallback(t, this.stateCenter.reportList) && s.ClientUtil.actionSuccessCallback(t, this.stateCenter.reportList)(i.REPORT_ACTION.eventStart, l.ZegoRTMLogEvent.kZegoTaskLoginHall.subEvent.liveroom_login.event);
                    var r = function (t, r) {
                        e.handleLoginRsp(t, r)
                    };
                    this.service.loginHall(r, r)
                }, e.prototype.handleLoginRsp = function (e, t) {
                    var r = 0 !== this.stateCenter.reportSeqList.login ? l.ZegoRTMLogEvent.kZegoTaskLoginHall.event : l.ZegoRTMLogEvent.kZegoTaskReLoginHall.event;
                    if (s.ClientUtil.actionSuccessCallback(r, this.stateCenter.reportList) && s.ClientUtil.actionSuccessCallback(r, this.stateCenter.reportList)(i.REPORT_ACTION.eventEndWithMsgInfo, l.ZegoRTMLogEvent.kZegoTaskLoginHall.subEvent.liveroom_login.event), this.room.hallRunState === o.ENUM_RUN_STATE.trylogin) {
                        if (e.header.seq === t) return 0 !== e.body.code ? (this.logger.error(n.ZEGO_RTM_ACTION.ROOM_HANDLE_LOGINRSP + " server error=", e.body.code), void this.handleLoginFail(e)) : (this.logger.info(n.ZEGO_RTM_ACTION.ROOM_HANDLE_LOGINRSP + " call success."), void this.handleLoginSuccess(e));
                        this.logger.error(n.ZEGO_RTM_ACTION.ROOM_HANDLE_LOGINRSP + " in wrong seq, local=", t + "", ",recv=", e.header.seq)
                    } else this.logger.error(n.ZEGO_RTM_ACTION.ROOM_HANDLE_LOGINRSP + " state error")
                }, e.prototype.handleLoginFail = function (e) {
                    this.resetTryLogin();
                    var t = {code: e.body.code, msg: e.body.message};
                    s.ClientUtil.actionErrorCallback("login", this.stateCenter.callbackList)(t, !0)
                }, e.prototype.handleLoginSuccess = function (e) {
                    var t = {}, r = this.room.lastHallRunState;
                    this.setRunState(o.ENUM_RUN_STATE.login), this.stateCenter.userid = e.body.user_uid, this.room.sessionID = e.body.session_id, this.room.timeStamp = e.header.timestamp, this.room.roomSessionID = e.body.room_session_id, this.logger.setSessionInfo(this.stateCenter.appid, this.room.roomID, this.room.sessionID, this.stateCenter.idName, this.stateCenter.nickName, this.stateCenter.sdKVersion), e.body.log_sever_addr && "" != e.body.log_sever_addr && this.logger.logRemoteLevel !== o.ENUM_LOG_LEVEL.disable && (this.logger.setLogServer(e.body.log_sever_addr), t.log_url = e.body.log_sever_addr), e.body.cluster_env && 1 === e.body.cluster_env && (this.stateCenter.testEnvironment = !0, t.test_environment = "true", !this.stateCenter.debugCustom && (this.stateCenter.debug = !0));
                    var n = 0 !== this.stateCenter.reportSeqList.login ? l.ZegoRTMLogEvent.kZegoTaskLoginHall.event : l.ZegoRTMLogEvent.kZegoTaskReLoginHall.event;
                    s.ClientUtil.actionSuccessCallback(n, this.stateCenter.reportList) && s.ClientUtil.actionSuccessCallback(n, this.stateCenter.reportList)(i.REPORT_ACTION.addEventMsg, l.ZegoRTMLogEvent.kZegoTaskLoginHall.subEvent.liveroom_login.event, l.ZegoRTMLogEvent.kZegoTaskLoginHall.subEvent.liveroom_login.respond_info("respond_info"), t), this.resetTryLogin(), this.loginSuccessCallBack(r, e), s.ClientUtil.actionSuccessCallback("login", this.stateCenter.callbackList) && s.ClientUtil.actionSuccessCallback("login", this.stateCenter.callbackList)(!0), this.hallStateHandle("CONNECTED", {
                        code: 0,
                        msg: ""
                    })
                }, e.prototype.closeHandler = function (e) {
                    this.logger.error(n.ZEGO_RTM_ACTION.ROOM_CLOSEHANDLER + " room websocket close " + JSON.stringify(e.code)), this.room.hallRunState !== o.ENUM_RUN_STATE.logout ? this.room.hallRunState === o.ENUM_RUN_STATE.trylogin ? (this.resetTryLogin(), s.ClientUtil.actionErrorCallback("login", this.stateCenter.callbackList)(1006 == e.code ? l.ZegoRTMLogEvent.kZegoTaskLoginHall.error.LOGIN_TIMEOUT : e)) : this.room.hallRunState === o.ENUM_RUN_STATE.login && (this.logger.info(n.ZEGO_RTM_ACTION.ROOM_CLOSEHANDLER + " is called because of network broken"), this.resetTryLogin(), this.onDisconnect(l.ZegoRTMLogEvent.kZegoTaskLoginHall.error.NETWORK_BROKEN)) : this.logger.info(n.ZEGO_RTM_ACTION.ROOM_CLOSEHANDLER + " onclose logout flow call websocket.close")
                }, e.prototype.logout = function () {
                    this.logger.info(n.ZEGO_RTM_ACTION.ROOM_LOGOUT + " call"), this.room.hallRunState !== o.ENUM_RUN_STATE.logout ? (this.resetHall(), this.hallStateHandle("DISCONNECTED", {
                        code: 0,
                        msg: ""
                    }), this.logger.info(n.ZEGO_RTM_ACTION.ROOM_LOGOUT + " call success")) : this.logger.warn("zb.rh.lo at logout")
                }, e.prototype.handleLogoutRsp = function (e) {
                    this.logger.info(n.ZEGO_RTM_ACTION.ROOM_LOGOUT + "result=", e.body && e.body.err_code ? e.body.err_code : "")
                }, e
            }();
            t.HallHandler = _
        }, function (e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {value: !0}), t.RoomPrivateHandler = void 0;
            var o = r(0), s = r(2), i = function () {
                function e(e, t, r, o, s) {
                    this.logger = e, this.stateCenter = t, this.dataReport = r, this.service = o, this.room = s, this.tryLoginTimer = null, this.tryLoginCount = 0, this.tryLoginInterval = 1e4
                }

                return e.prototype.setRoomRunState = function (e) {
                    this.room.lastRunRoomState = this.room.runRoomState, this.room.runRoomState = e
                }, e.prototype.enterRoom = function (e, t) {
                    this.service.enterRoom(e, t)
                }, e.prototype.leaveRoom = function (e, t) {
                    this.resetRoom(e, t)
                }, e.prototype.resetRoom = function (e, t) {
                    this.logger.info(s.ZEGO_RTM_ACTION.ROOM_RESET_ROOM + " call");
                    var r = e || function () {
                    }, i = t || function () {
                    };
                    this.room.runRoomState !== o.ENUM_RUN_STATE.logout && this.service.leaveRoom(r, i), this.setRoomRunState(o.ENUM_RUN_STATE.logout), this.room.roomSid = "0", this.room.roomSessionID = "0", this.logger.setSessionInfo(this.stateCenter.appid, this.room.roomID, this.room.sessionID, this.stateCenter.idName, this.stateCenter.nickName, this.stateCenter.sdKVersion), this.resetRoomCallBack(), this.logger.info(s.ZEGO_RTM_ACTION.ROOM_RESET_ROOM + " call success")
                }, e.prototype.resetRoomCallBack = function () {
                }, e.prototype.loginSuccessCallBack = function (e, t) {
                }, e.prototype.roomStateHandle = function (e, t, r) {
                    this.logger.info(s.ZEGO_RTM_ACTION.ROOM_STATUS_CALLBACK + " " + e + " " + JSON.stringify(t)), this.room.lastRoomState = this.room.roomState, this.room.roomState = e, this.room.roomState !== this.room.lastRoomState && (this.stateCenter.actionListener("roomStateUpdate", this.room.roomID, e, t ? t.code : 0, r || ""), this.stateCenter.actionListener("_roomStateUpdate", this.room.roomID, e, t ? t.code : 0, r || ""))
                }, e
            }();
            t.RoomPrivateHandler = i
        }, function (e, t, r) {
            "use strict";
            var o, s = this && this.__extends || (o = function (e, t) {
                return (o = Object.setPrototypeOf || {__proto__: []} instanceof Array && function (e, t) {
                    e.__proto__ = t
                } || function (e, t) {
                    for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r])
                })(e, t)
            }, function (e, t) {
                function r() {
                    this.constructor = e
                }

                o(e, t), e.prototype = null === t ? Object.create(t) : (r.prototype = t.prototype, new r)
            });
            Object.defineProperty(t, "__esModule", {value: !0}), t.RetryHallHandler = void 0;
            var i = r(5), n = r(0), a = r(2), l = r(1), _ = function (e) {
                function t(t, r, o) {
                    var s = e.call(this, t, r) || this;
                    return s.logger = t, s.stateCenter = r, s.room = o, s
                }

                return s(t, e), t.prototype.initRoom = function (e, t, r, o) {
                    this.hallHandler = e, this.user = t, this.server = r, this.config = o
                }, t.prototype.active = function (e) {
                    var t = this;
                    if (this.logger.info(a.ZEGO_RTM_ACTION.ROOM_LOGIN_ROOM + " retry call"), this.stateCenter.networkState != n.ENUM_NETWORK_STATE.offline) if (this.retryTimer) this.logger.info(a.ZEGO_RTM_ACTION.ROOM_LOGIN_ROOM + " has actived, ignore"); else if (this.isOverTime) this.logger.info(a.ZEGO_RTM_ACTION.ROOM_LOGIN_ROOM + " retry over time, stop retry"); else {
                        if (1 == this.retryActiveCount) this.retryActiveInterval = Math.floor(Math.random() * (1 - this.RETRY_START_TIME_INTERVAL) + this.RETRY_START_TIME_INTERVAL); else {
                            var r = Math.pow(2, Math.round(this.retryActiveCount / this.RETRY_CONTINUE_COUNT + 1));
                            this.retryActiveInterval = r > this.RETRY_MAX_TIME_INTERVAL ? this.RETRY_MAX_TIME_INTERVAL : r
                        }
                        this.retryTimer = setTimeout((function () {
                            t.hallHandler.loginHall(t.server, t.user, t.config, (function (e) {
                                t.handleLoginFinish(e)
                            }), (function (e, r) {
                                t.handleLoginFinish(!1, e, r)
                            })), t.retryTimer && clearTimeout(t.retryTimer), t.retryTimer = null, t.retryActiveCount++
                        }), e ? 0 : 1e3 * this.retryActiveInterval)
                    } else this.logger.info(a.ZEGO_RTM_ACTION.ROOM_LOGIN_ROOM + " network is broken, stop retry")
                }, t.prototype.startMaxTime = function () {
                    var e = this;
                    this.maxTimer || (this.maxTimer = setTimeout((function () {
                        console.warn("over max time " + e.RETRY_MAX_TIME + "s, stop retry"), e.isOverTime = !0, e.hallHandler.resetHall(), e.stopMaxTime(), e.invalid(), e.onactive(!1, l.errorCodeList.LOGIN_TIMEOUT)
                    }), 1e3 * this.RETRY_MAX_TIME))
                }, t.prototype.stopMaxTime = function () {
                    this.maxTimer && clearTimeout(this.maxTimer), this.maxTimer = null
                }, t.prototype.onactive = function (e, t) {
                }, t.prototype.handleError = function (e, t) {
                    if (this.RETRY_MAX_TIME < 3) return !1;
                    if (t) {
                        var r = e.code + "";
                        return !["1000002002", "1000005030", "1000005035", "1010", "1011", "1013", "1014", "1015", "1016", "1017", "1018", "1019", "1020", "1021", "1023"].includes(r) && (!!["1100040001", "1100040100"].includes(r) || this.room.lastHallRunState == n.ENUM_RUN_STATE.login && (this.room.sessionID = "", this.invalid(), !0))
                    }
                    return !0
                }, t.prototype.handleLoginFinish = function (e, t, r) {
                    t ? this.handleError(t, r) ? (!this.maxTimer && this.startMaxTime(), this.active()) : (this.hallHandler.resetHall(), this.stopMaxTime(), this.invalid(), this.onactive(e, t)) : (this.stopMaxTime(), this.invalid(), this.onactive(e))
                }, t
            }(i.TryHandler);
            t.RetryHallHandler = _
        }, function (e, t, r) {
            "use strict";
            var o, s = this && this.__extends || (o = function (e, t) {
                return (o = Object.setPrototypeOf || {__proto__: []} instanceof Array && function (e, t) {
                    e.__proto__ = t
                } || function (e, t) {
                    for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r])
                })(e, t)
            }, function (e, t) {
                function r() {
                    this.constructor = e
                }

                o(e, t), e.prototype = null === t ? Object.create(t) : (r.prototype = t.prototype, new r)
            });
            Object.defineProperty(t, "__esModule", {value: !0}), t.LiveRoomPrivateService = void 0;
            var i = r(11), n = r(0), a = r(2), l = function (e) {
                function t(t, r) {
                    var o = e.call(this, t, r) || this;
                    return o.stateCenter = t, o.logger = r, o.service = new i.ZegoSocketService(o.stateCenter.ENV), o.cmdSeq = 0, o.responseRouters = {}, o
                }

                return s(t, e), t.prototype.checkResponse = function (e) {
                    return e.header.app_id !== this.stateCenter.appid || e.header.user_uid !== this.stateCenter.userid || this.stateCenter.priModules.hallRunState !== n.ENUM_RUN_STATE.login
                }, t.prototype.handleSendCommandMsgRsp = function (e) {
                    var t = this, r = this.service.sendCommandMap[e.header.seq];
                    if (null != r) {
                        var o = r._data;
                        delete this.service.sendCommandMap[e.header.seq], this.service.sendCommandList.remove(r), 0 === e.body.code ? setTimeout((function () {
                            o && null != o.success && o.success(e, t.cmdSeq)
                        }), 0) : setTimeout((function () {
                            o && null != o.error && o.error(e, t.cmdSeq)
                        }), 0)
                    }
                }, t.prototype.onPush = function () {
                    var e = this;
                    this.service.onMessage = function (t) {
                        e.logger.info(a.ZEGO_RTM_ACTION.SERVICE_PUSH + " msg=" + JSON.stringify(t) + " "), 0 !== t.body.code && t.body.code && e.logger.error(a.ZEGO_RTM_ACTION.SERVICE_PUSH + " cmd=" + t.header.cmd + ", code=" + t.body.code + ", message=" + t.body.message + " "), ["zegochat_js.user_login_ws_rsp", "zegochat_js.user_logout_rsp"].indexOf(t.header.cmd) > -1 ? e.handleSendCommandMsgRsp(t) : e.stateCenter.priModules.isLogin() ? e.checkResponse(t) ? e.logger.error(a.ZEGO_RTM_ACTION.SERVICE_PUSH + "  check session fail.") : (e.logger.info(a.ZEGO_RTM_ACTION.SERVICE_PUSH + " cmd=" + t.header.cmd + ",function=" + !!e.responseRouters[t.header.cmd]), e.handleSendCommandMsgRsp(t), e.responseRouters[t.header.cmd] && e.responseRouters[t.header.cmd](t, e.cmdSeq)) : e.logger.warn(a.ZEGO_RTM_ACTION.SERVICE_PUSH + "  already logout")
                    }
                }, t.prototype.handleHallKickout = function (e) {
                }, t.prototype.handlePushKickout = function (e) {
                }, t.prototype.handlePushCustomMsg = function (e) {
                }, t.prototype.handlePushRoomMsg = function (e) {
                }, t.prototype.handlePushUserStateUpdateMsg = function (e) {
                }, t.prototype.handlePushMergeMsg = function (e) {
                }, t.prototype.handlePushTransMsg = function (e) {
                }, t.prototype.handleBigImMsgRsp = function (e) {
                }, t.prototype.handlePushSignalMsg = function (e) {
                }, t.prototype.closeHandler = function (e) {
                    this.service.closeHandler(e)
                }, t.prototype.openHandler = function (e) {
                    this.service.openHandler(e)
                }, t.prototype.errorHandler = function (e) {
                    this.service.errorHandler(e)
                }, t.prototype.getHeader = function (e) {
                    return {
                        cmd: e,
                        seq: ++this.cmdSeq,
                        timestamp: Math.ceil((new Date).getTime() / 1e3) + "",
                        app_id: this.stateCenter.appid,
                        user_uid: this.stateCenter.userid || "0",
                        session_id: this.stateCenter.priModules.sessionID || "0"
                    }
                }, t.prototype.startCheck = function () {
                    this.service.startCheck()
                }, t.prototype.stopCheck = function () {
                    this.service.stopCheck()
                }, t.prototype.isDisConnect = function () {
                    return !this.service || this.service.isDisConnect()
                }, t.prototype.createSocket = function (e) {
                    var t = this;
                    this.service.createSocket(e), this.responseRouters = {
                        "zegochat_js.push_user_kickout": function (e) {
                            t.handleHallKickout(e)
                        }, "zegochat_js.push_room_kickout": function (e) {
                            t.handlePushKickout(e)
                        }, "zegochat_js.push_room_custommsg_req": function (e) {
                            t.handlePushCustomMsg(e)
                        }, "zegochat_js.push_room_im_chat_req": function (e) {
                            t.handlePushRoomMsg(e)
                        }, "zegochat_js.push_room_userlist_update_req": function (e) {
                            t.handlePushUserStateUpdateMsg(e)
                        }, push_merge_message: function (e) {
                            t.handlePushMergeMsg(e)
                        }, push_trans: function (e) {
                            t.handlePushTransMsg(e)
                        }, push_signal: function (e) {
                            t.handlePushSignalMsg(e)
                        }
                    }
                }, t.prototype.closeSocket = function () {
                    this.service.closeSocket()
                }, t.prototype.sendMessage = function (e, t, r, o) {
                    if (this.service.isDisConnect()) return this.logger.info(a.ZEGO_RTM_ACTION.SERVICE_SEND + " socket is disconnect"), 0;
                    var s = this.getHeader(e);
                    return this.logger.info(a.ZEGO_RTM_ACTION.SERVICE_SEND + " sendMsg:" + JSON.stringify({
                        header: s,
                        body: t
                    })), this.service.sendMessage(s, t, r, o)
                }, t.prototype.on = function (e, t) {
                    this.responseRouters[e] = t
                }, t.prototype.loginHall = function (e, t) {
                    var r = {
                        user_id: this.stateCenter.idName,
                        device_id: this.stateCenter.priModules.deviceID,
                        session_expire: this.stateCenter.priModules.sessionExpire,
                        user_name: this.stateCenter.nickName,
                        device_type: this.stateCenter.priModules.deviceType,
                        net_type: this.stateCenter.priModules.netType,
                        token: this.stateCenter.priModules.hallToken,
                        an_type: this.stateCenter.priModules.anType + ""
                    };
                    this.sendMessage("zegochat_js.user_login_ws_req", r, e, t)
                }, t.prototype.logoutHall = function (e, t) {
                    var r = {user_id: this.stateCenter.idName || 0};
                    this.sendMessage("zegochat_js.user_logout_req", r, e, t)
                }, t.prototype.enterRoom = function (e, t) {
                    var r = {
                        room_header: {
                            room_id: this.stateCenter.priModules.roomID,
                            room_sid: this.stateCenter.priModules.roomSid || "0",
                            room_user_session_id: this.stateCenter.priModules.roomSessionID || "0"
                        }, room_name: "", role: this.stateCenter.role, room_flag: this.stateCenter.priModules.roomFlag
                    };
                    this.sendMessage("zegochat_js.room_enter_req", r, e, t)
                }, t.prototype.leaveRoom = function (e, t) {
                    var r = {
                        room_header: {
                            room_id: this.stateCenter.priModules.roomID,
                            room_sid: this.stateCenter.priModules.roomSid,
                            room_user_session_id: this.stateCenter.priModules.roomSessionID
                        }
                    };
                    this.sendMessage("zegochat_js.room_quit_req", r, e, t)
                }, t.prototype.heartBeat = function (e, t) {
                    return this.sendMessage("zegochat_js.user_hb_req", {reserve: 0}, e, t)
                }, t.prototype.fetchUserList = function (e, t, r) {
                    return this.sendMessage("zegochat_js.room_userlist_req", e, t, r)
                }, t.prototype.fetchReliableMessage = function (e, t, r) {
                    return this.sendMessage("trans_fetch", e, t, r)
                }, t.prototype.sendReliableMessage = function (e, t, r) {
                    return this.sendMessage("trans", e, t, r)
                }, t.prototype.sendRoomMsg = function (e, t, r) {
                    return this.sendMessage("zegochat_js.room_im_chat", e, t, r)
                }, t.prototype.sendCustomCommand = function (e, t, r) {
                    return this.sendMessage("zegochat_js.room_custommsg_req", e, t, r)
                }, t.prototype.sendBigRoomMessage = function (e, t, r) {
                    return this.sendMessage("bigim_chat", e, t, r)
                }, t.prototype.sendRelayMessage = function (e, t, r) {
                    return this.sendMessage("relay", e, t, r)
                }, t.prototype.sendSignalCmd = function (e, t, r) {
                    return this.sendMessage("signal", e, t, r)
                }, t
            }(r(10).LiveRoomService);
            t.LiveRoomPrivateService = l
        }])
    }, function (e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0}), t.ZegoWechatMini = void 0;
        var o = r(2), s = r(8), i = r(0), n = r(1), a = r(3), l = r(11), _ = r(4), d = function () {
            function e(e, t, r, o) {
                void 0 === o && (o = 1), this.logger = e, this.dataReport = t, this.rtm = r, this.stateCenter = new s.StateCenter(this.logger, this.dataReport), this.stateCenter.clientType = "wxMini", this.stateCenter.type = 3 === o ? "PRIVATE" : "PUBLIC", this.wechatMiniModules = new l.WechatMiniModules(this.logger, this.dataReport, this.stateCenter, this.rtm)
            }

            return e.prototype.checkSystemRequirements = function () {
                return this.wechatMiniModules.checkSystemRequirements()
            }, e.prototype.getVersion = function () {
                return i.PROTO_VERSION
            }, e.prototype.on = function (e, t) {
                return this.wechatMiniModules.bindListener(e, t)
            }, e.prototype.off = function (e, t) {
                return this.wechatMiniModules.deleteListener(e, t)
            }, e.prototype.startPublishingStream = function (e, t) {
                return this.wechatMiniModules.publishModule.startPublishingStream(e, t)
            }, e.prototype.stopPublishingStream = function (e) {
                return this.wechatMiniModules.publishModule.stopPublishingStream(e)
            }, e.prototype.getNextUrl = function (e) {
                return this.wechatMiniModules.getNextUrl(e)
            }, e.prototype.setCustomSignalUrl = function (e, t) {
                if (void 0 === t && (t = !0), this.logger.info(o.ZEGO_WECHATMINI_ACTION.WECHATMINI_SET_CUSTOM_SIGNAL_URL + " call: " + JSON.stringify(e)), !e || 0 == e.length) return this.logger.error(o.ZEGO_WECHATMINI_ACTION.WECHATMINI_SET_CUSTOM_SIGNAL_URL + " param error"), !1;
                var r = !0;
                return e.forEach((function (e) {
                    return 0 != e.indexOf("rtmp://") && (r = !1)
                })), r ? (t ? this.stateCenter.customUrl = e : this.stateCenter.customPlayUrl = e, !0) : (this.logger.error(o.ZEGO_WECHATMINI_ACTION.WECHATMINI_SET_CUSTOM_SIGNAL_URL + " url is not correct"), !1)
            }, e.prototype.addPublishCdnUrl = function (e, t) {
                var r;
                this.logger.info(o.ZEGO_WECHATMINI_ACTION.ADD_PUBLISH_CDN_URL + " call " + e + " " + t);
                var s = null === (r = this.wechatMiniModules.streamCenter.publisherList[e]) || void 0 === r ? void 0 : r.room;
                return new Promise((function (r, o) {
                    s.streamHandler._publishTarget({type: "addpush", streamID: e, pushUrl: t}, r, o)
                }))
            }, e.prototype.removePublishCdnUrl = function (e, t) {
                var r;
                this.logger.info(o.ZEGO_WECHATMINI_ACTION.REMOVE_PUBLISH_CDN_URL + " call " + e + " " + t);
                var s = null === (r = this.wechatMiniModules.streamCenter.publisherList[e]) || void 0 === r ? void 0 : r.room;
                return new Promise((function (r, o) {
                    s.streamHandler._publishTarget({type: "delpush", streamID: e, pushUrl: t}, r, o)
                }))
            }, e.prototype.startMixerTask = function (e) {
                var t = this;
                return new Promise((function (r, o) {
                    e.outputConfig && e.outputConfig.outputFps && (e.outputConfig.outputFPS = e.outputConfig.outputFps);
                    var s = i.getReportSeq();
                    t.dataReport.newReport(s, n.ZegoWechatLogEvent.kZegoTaskMixStart.event), a.ClientUtil.logReportCallback("kZegoTaskMixStart" + e.taskID, t.dataReport, s, t.stateCenter.reportList);
                    t.stateCenter.roomList[0].streamHandler.updateMixStream(e, (function (o) {
                        t.dataReport.uploadReport(s), a.ClientUtil.unregisterCallback("kZegoTaskMixStart" + e.taskID, t.stateCenter.reportList), r(o)
                    }), (function (r) {
                        var i, n, l, d = "", u = _.errorCodeList;
                        r.errorCode < 2e9 && r.errorCode > 1e9 ? l = u[d = a.ClientUtil.mixServerError(r.errorCode)] : r.errorCode < 1e6 && (l = a.ClientUtil.decodeServerError(r.errorCode, r.extendedData), d = a.ClientUtil.getLiveRoomError(r.errorCode)), l ? t.dataReport.addMsgInfo(s, l) : t.dataReport.addMsgInfo(s, r), t.dataReport.uploadReport(s), a.ClientUtil.unregisterCallback("kZegoTaskMixStart" + e.taskID, t.stateCenter.reportList), d && (r.errorCode = null === (i = u[d]) || void 0 === i ? void 0 : i.code, r.extendedData = (null === (n = u[d]) || void 0 === n ? void 0 : n.message) || ""), o(r)
                    }))
                }))
            }, e.prototype.setMixerTaskConfig = function (e) {
                var t = this;
                return new Promise((function (r, o) {
                    var s = i.getReportSeq();
                    t.dataReport.newReport(s, n.ZegoWechatLogEvent.kZegoTaskMixConfig.event), a.ClientUtil.logReportCallback("kZegoTaskMixConfig", t.dataReport, s, t.stateCenter.reportList), t.stateCenter.roomList[0].streamHandler.setMixerTaskConfig(e).then((function (e) {
                        t.dataReport.uploadReport(s), a.ClientUtil.unregisterCallback("kZegoTaskMixConfig", t.stateCenter.reportList), r(e)
                    })).catch((function (e) {
                        t.dataReport.addMsgInfo(s, e), t.dataReport.uploadReport(s), a.ClientUtil.unregisterCallback("kZegoTaskMixConfig", t.stateCenter.reportList), o(e)
                    }))
                }))
            }, e.prototype.stopMixerTask = function (e) {
                var t = this;
                return new Promise((function (r, s) {
                    var l = i.getReportSeq();
                    if (t.dataReport.newReport(l, n.ZegoWechatLogEvent.kZegoTaskMixStop.event), !e || "string" != typeof e || e.length > i.MAX_MIX_TASK_ID_LENGTH || !a.ClientUtil.checkIllegalCharacters(e)) return t.logger.error(o.ZEGO_WECHATMINI_ACTION.STOP_MIXER_TASK + " taskID must be string less 256"), t.dataReport.addMsgInfo(l, {
                        error: n.ZegoWechatLogEvent.kZegoTaskMixStop.error.kParamError.code,
                        message: n.ZegoWechatLogEvent.kZegoTaskMixStop.error.kParamError.message + " param taskID error"
                    }), t.dataReport.uploadReport(l), void s({
                        errorCode: n.ZegoWechatLogEvent.kZegoTaskMixStop.error.kParamError.code,
                        extendedData: n.ZegoWechatLogEvent.kZegoTaskMixStop.error.kParamError.message + " param taskID error"
                    });
                    t.stateCenter.roomList[0].streamHandler.stopMixStream(e, (function (e) {
                        t.dataReport.uploadReport(l), r(e)
                    }), (function (e) {
                        var r, o, n, d = "", u = _.errorCodeList;
                        e.errorCode < 2e9 && e.errorCode > 1e9 ? n = u[d = a.ClientUtil.mixServerError(e.errorCode - i.MIXSTREAM_ERROR_CODE)] : e.errorCode < 1e6 && (n = a.ClientUtil.decodeServerError(e.errorCode, e.extendedData), d = a.ClientUtil.getLiveRoomError(e.errorCode)), n ? t.dataReport.addMsgInfo(l, n) : t.dataReport.addMsgInfo(l, e), t.dataReport.uploadReport(l), d && (e.errorCode = null === (r = u[d]) || void 0 === r ? void 0 : r.code, e.extendedData = (null === (o = u[d]) || void 0 === o ? void 0 : o.message) || ""), s(e)
                    }))
                }))
            }, e.prototype.setStreamExtraInfo = function (e, t) {
                var r = this;
                return new Promise((function (o, s) {
                    var a = i.getReportSeq();
                    r.dataReport.newReport(a, n.ZegoWechatLogEvent.kZegoTaskLiveRoomSendStreamExtraInfo.event), r.dataReport.addMsgInfo(a, {
                        stream: n.ZegoWechatLogEvent.kZegoTaskLiveRoomSendStreamExtraInfo.stream(e),
                        stream_extra_info: n.ZegoWechatLogEvent.kZegoTaskLiveRoomSendStreamExtraInfo.stream_extra_info(t)
                    });
                    var l = function (e, t) {
                        r.logger.error("zb.ssei " + t), r.dataReport.addMsgInfo(a, {
                            error: e.code,
                            message: e.message + " " + t
                        }), r.dataReport.uploadReport(a), s({errorCode: e.code, extendedData: e.message + " " + t})
                    };
                    if ("string" == typeof e && "" != e) if ("string" == typeof t && "" != t) if (r.rtm.service.isDisConnect()) l(n.ZegoWechatLogEvent.kZegoTaskLiveRoomSendStreamExtraInfo.error.kNoLoginError, "not login"); else if (r.stateCenter.publishStreamList[e]) {
                        var _ = r.wechatMiniModules.streamCenter.getRoomByStreamID(e);
                        _ ? (r.dataReport.addMsgInfo(a, {room_sid: n.ZegoWechatLogEvent.kZegoTaskLiveRoomSendStreamExtraInfo.room_sid(_.sessionID)}), _.streamHandler.setStreamExtraInfo(e, t, o, l), r.dataReport.uploadReport(a)) : l(n.ZegoWechatLogEvent.kZegoTaskLiveRoomSendStreamExtraInfo.error.kNoLoginError, "not login")
                    } else l(n.ZegoWechatLogEvent.kZegoTaskLiveRoomSendStreamExtraInfo.error.kPublishStreamNoFoundError, "publish stream no found"); else l(n.ZegoWechatLogEvent.kZegoTaskLiveRoomSendStreamExtraInfo.error.kParamError, "extraInfo must be string and no empty"); else l(n.ZegoWechatLogEvent.kZegoTaskLiveRoomSendStreamExtraInfo.error.kParamError, "streamID must be string and not empty")
                }))
            }, e.prototype.startPlayingStream = function (e, t) {
                return this.wechatMiniModules.playModule.startPlayingStream(e, t)
            }, e.prototype.stopPlayingStream = function (e) {
                this.wechatMiniModules.playModule.stopPlayingStream(e)
            }, e.prototype.updatePlayerState = function (e, t) {
                this.wechatMiniModules.updatePlayerState(e, t)
            }, e.prototype.updatePlayerNetStatus = function (e, t) {
                this.wechatMiniModules.updatePlayerNetStatus(e, t)
            }, e
        }();
        t.ZegoWechatMini = d
    }, function (e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0}), t.StateCenter = void 0;
        var o = r(0), s = r(2), i = r(0), n = r(1), a = function () {
            function e(e, t) {
                this.logger = e, this.dataReport = t, this.debug = !1, this.testEnvironment = !1, this.pullLimited = !0, this.configOK = !1, this.relateService = [], this.role = 2, this.maxMemberCount = 0, this.roomCreateFlag = 1, this.callbackList = {}, this.publishStreamList = {}, this.streamUrlMap = {}, this.cmdCallback = {}, this.customUrl = [], this.customPlayUrl = [], this.turnOverTcpOnly = !1, this.customSetTcpOrUdp = !1, this.supportUdp = !1, this.audioEffectBuffer = {}, this.audioBitRate = 48e3, this.cdnSeq = 0, this.listenerList = {
                    roomStreamUpdate: [],
                    streamExtraInfoUpdate: [],
                    playerStateUpdate: [],
                    publisherStateUpdate: [],
                    screenSharingEnded: [],
                    publishQualityUpdate: [],
                    playQualityUpdate: [],
                    remoteCameraStatusUpdate: [],
                    remoteMicStatusUpdate: [],
                    soundLevelUpdate: [],
                    capturedSoundLevelUpdate: [],
                    videoDeviceStateChanged: [],
                    audioDeviceStateChanged: [],
                    deviceError: [],
                    _deviceError: [],
                    _remoteCameraStatusUpdate: [],
                    _remoteMicStatusUpdate: [],
                    _streamUpdated: []
                }, this.reportList = {}, this.reportSeqList = {
                    startPublish: {},
                    rePublish: {},
                    startPlay: {},
                    rePlay: {},
                    stopPublish: {},
                    stopPlay: {}
                }, this.streamTrigger = {}, this.mixStreamAdvance = {}, this.audioStreamList = {}, this.deviceInfos = null, this.deviceChangeTimer = null, this.deviceStateOut = !1, this.networkState = i.ENUM_NETWORK_STATE.offline, this.streamRetryTime = 300, this.checkList = [], this.anchor_info = {
                    anchor_id: "",
                    anchor_id_name: "",
                    anchor_nick_name: ""
                }, this.streamConnectTime = 0, this.clientIP = "", this.type = "PUBLIC", this.roomList = [], this.isMultiRoom = !1
            }

            return e.prototype.getRequestId = function () {
                return this.idName + "-" + i.getSeq()
            }, e.prototype.getSignalCmdContent = function (e, t, r, o) {
                var s = {
                    request_id: t,
                    room_id: e,
                    from_userid: this.idName,
                    from_username: this.nickName,
                    to_userid: r
                };
                return null != o && (s.result = o), JSON.stringify(s)
            }, e.prototype.actionListener = function (e) {
                for (var t = this, r = [], i = 1; i < arguments.length; i++) r[i - 1] = arguments[i];
                if (!["playQualityUpdate", "publishQualityUpdate", "soundLevelUpdate", "capturedSoundLevelUpdate"].includes(e) && this.listenerList[e]) {
                    var a = o.getReportSeq();
                    this.dataReport.newReport(a, n.ZegoRTCLogEvent.kZegoListener.event), this.dataReport.addMsgInfo(a, {
                        listener: e,
                        params: r
                    }), this.dataReport.uploadReport(a)
                }
                this.listenerList[e] && this.listenerList[e].forEach((function (o) {
                    try {
                        setTimeout((function () {
                            o.apply(void 0, r)
                        }), 0)
                    } catch (r) {
                        t.logger.error(s.ZEGO_WEBRTC_ACTION.STATECENTER_ACTION_LISTENER + " " + e + " " + r)
                    }
                }))
            }, e.prototype.getRoomByRoomID = function (e) {
                return this.roomList.find((function (t) {
                    return t.roomID == e
                }))
            }, e.prototype.getPlayRoom = function (e) {
                return this.roomList.find((function (t) {
                    return !!t.streamList.find((function (t) {
                        return t.stream_id == e
                    }))
                }))
            }, e
        }();
        t.StateCenter = a
    }, function (e, t, r) {
        "use strict";
        var o = this && this.__awaiter || function (e, t, r, o) {
            return new (r || (r = Promise))((function (s, i) {
                function n(e) {
                    try {
                        l(o.next(e))
                    } catch (e) {
                        i(e)
                    }
                }

                function a(e) {
                    try {
                        l(o.throw(e))
                    } catch (e) {
                        i(e)
                    }
                }

                function l(e) {
                    var t;
                    e.done ? s(e.value) : (t = e.value, t instanceof r ? t : new r((function (e) {
                        e(t)
                    }))).then(n, a)
                }

                l((o = o.apply(e, t || [])).next())
            }))
        }, s = this && this.__generator || function (e, t) {
            var r, o, s, i, n = {
                label: 0, sent: function () {
                    if (1 & s[0]) throw s[1];
                    return s[1]
                }, trys: [], ops: []
            };
            return i = {
                next: a(0),
                throw: a(1),
                return: a(2)
            }, "function" == typeof Symbol && (i[Symbol.iterator] = function () {
                return this
            }), i;

            function a(i) {
                return function (a) {
                    return function (i) {
                        if (r) throw new TypeError("Generator is already executing.");
                        for (; n;) try {
                            if (r = 1, o && (s = 2 & i[0] ? o.return : i[0] ? o.throw || ((s = o.return) && s.call(o), 0) : o.next) && !(s = s.call(o, i[1])).done) return s;
                            switch (o = 0, s && (i = [2 & i[0], s.value]), i[0]) {
                                case 0:
                                case 1:
                                    s = i;
                                    break;
                                case 4:
                                    return n.label++, {value: i[1], done: !1};
                                case 5:
                                    n.label++, o = i[1], i = [0];
                                    continue;
                                case 7:
                                    i = n.ops.pop(), n.trys.pop();
                                    continue;
                                default:
                                    if (!(s = n.trys, (s = s.length > 0 && s[s.length - 1]) || 6 !== i[0] && 2 !== i[0])) {
                                        n = 0;
                                        continue
                                    }
                                    if (3 === i[0] && (!s || i[1] > s[0] && i[1] < s[3])) {
                                        n.label = i[1];
                                        break
                                    }
                                    if (6 === i[0] && n.label < s[1]) {
                                        n.label = s[1], s = i;
                                        break
                                    }
                                    if (s && n.label < s[2]) {
                                        n.label = s[2], n.ops.push(i);
                                        break
                                    }
                                    s[2] && n.ops.pop(), n.trys.pop();
                                    continue
                            }
                            i = t.call(e, n)
                        } catch (e) {
                            i = [6, e], o = 0
                        } finally {
                            r = s = 0
                        }
                        if (5 & i[0]) throw i[1];
                        return {value: i[0] ? i[1] : void 0, done: !0}
                    }([i, a])
                }
            }
        };
        Object.defineProperty(t, "__esModule", {value: !0}), t.CheckModule = void 0;
        var i = r(10), n = function () {
            function e() {
                var e = this;
                this.iceconnectionstatechangeTimes = 0, this.isCheckAll = !1;
                var t = document.createElement("canvas");
                t.getContext("2d").fillStyle = "rgba(255, 255, 255, 0)";
                try {
                    this.localStream = t.captureStream()
                } catch (e) {
                    console.error("canvas captureStream error", e)
                }
                this.timer = setTimeout((function () {
                    e.resolve("Detection timeout"), e.hangup()
                }), 5e3)
            }

            return e.prototype.checkSupportByType = function (e) {
                return o(this, void 0, void 0, (function () {
                    var t, r, o = this;
                    return s(this, (function (s) {
                        switch (s.label) {
                            case 0:
                                return this.checkType = e, t = {}, this.localPc = new RTCPeerConnection(t), this.remotePc = new RTCPeerConnection(t), r = new Promise((function (e) {
                                    return o.resolve = e
                                })), this.localPc.addEventListener("icecandidate", (function (e) {
                                    return o.onIceCandidate(o.localPc, e)
                                })), this.remotePc.addEventListener("icecandidate", (function (e) {
                                    return o.onIceCandidate(o.remotePc, e)
                                })), this.remotePc.addEventListener("iceconnectionstatechange", (function (t) {
                                    "connected" === o.remotePc.iceConnectionState && (o.iceconnectionstatechangeResult = !0), 2 == ++o.iceconnectionstatechangeTimes && o.iceCandidate && (clearTimeout(o.timer), "connected" === o.remotePc.iceConnectionState ? o.resolve(!0) : o.resolve("The browser does not support " + e + " format"), o.hangup())
                                })), this.localStream.getTracks().forEach((function (e) {
                                    return o.localPc.addTrack(e, o.localStream)
                                })), [4, this.check(e)];
                            case 1:
                                return s.sent(), [4, r];
                            case 2:
                                return [2, s.sent()]
                        }
                    }))
                }))
            }, e.prototype.check = function (e) {
                return o(this, void 0, void 0, (function () {
                    var t, r;
                    return s(this, (function (o) {
                        switch (o.label) {
                            case 0:
                                return o.trys.push([0, 2, , 3]), [4, this.localPc.createOffer({
                                    offerToReceiveAudio: !0,
                                    offerToReceiveVideo: !0
                                })];
                            case 1:
                                return (t = o.sent()).sdp = i.SdpUtil.getSDPByVideDecodeType(t.sdp, e), this.onCreateOfferSuccess(t), [3, 3];
                            case 2:
                                return r = o.sent(), this.onCreateSessionDescriptionError(r), [3, 3];
                            case 3:
                                return [2]
                        }
                    }))
                }))
            }, e.prototype.onCreateOfferSuccess = function (e) {
                return o(this, void 0, void 0, (function () {
                    var t, r, o, i;
                    return s(this, (function (s) {
                        switch (s.label) {
                            case 0:
                                return s.trys.push([0, 2, , 3]), [4, this.localPc.setLocalDescription(e)];
                            case 1:
                                return s.sent(), [3, 3];
                            case 2:
                                return t = s.sent(), this.onSetSessionDescriptionError(t), [2];
                            case 3:
                                return s.trys.push([3, 5, , 6]), [4, this.remotePc.setRemoteDescription(e)];
                            case 4:
                                return s.sent(), [3, 6];
                            case 5:
                                return r = s.sent(), this.onSetSessionDescriptionError(r), [2];
                            case 6:
                                return s.trys.push([6, 9, , 10]), [4, this.remotePc.createAnswer()];
                            case 7:
                                return o = s.sent(), [4, this.onCreateAnswerSuccess(o)];
                            case 8:
                                return s.sent(), [3, 10];
                            case 9:
                                return i = s.sent(), this.onCreateSessionDescriptionError(i), [2];
                            case 10:
                                return [2]
                        }
                    }))
                }))
            }, e.prototype.onCreateAnswerSuccess = function (e) {
                return o(this, void 0, void 0, (function () {
                    var t, r;
                    return s(this, (function (o) {
                        switch (o.label) {
                            case 0:
                                return o.trys.push([0, 2, , 3]), [4, this.remotePc.setLocalDescription(e)];
                            case 1:
                                return o.sent(), [3, 3];
                            case 2:
                                return t = o.sent(), this.onSetSessionDescriptionError(t), [2];
                            case 3:
                                return o.trys.push([3, 5, , 6]), [4, this.localPc.setRemoteDescription(e)];
                            case 4:
                                return o.sent(), [3, 6];
                            case 5:
                                return r = o.sent(), this.onSetSessionDescriptionError(r), [2];
                            case 6:
                                return [2]
                        }
                    }))
                }))
            }, e.prototype.onIceCandidate = function (e, t) {
                return o(this, void 0, void 0, (function () {
                    var r;
                    return s(this, (function (o) {
                        switch (o.label) {
                            case 0:
                                return o.trys.push([0, 2, , 3]), [4, this.getOtherPc(e).addIceCandidate(t.candidate)];
                            case 1:
                                return o.sent(), [3, 3];
                            case 2:
                                return r = o.sent(), console.error(this.checkType, this.getPcName(e) + " addIceCandidate error", r), clearTimeout(this.timer), this.hangup(), this.resolve(r), [3, 3];
                            case 3:
                                return "remotePc" === this.getPcName(e) && t.candidate && (this.iceCandidate = !0), this.iceconnectionstatechangeResult && "localPc" === this.getPcName(e) && (clearTimeout(this.timer), this.hangup(), this.resolve(!0)), [2]
                        }
                    }))
                }))
            }, e.prototype.getOtherPc = function (e) {
                return e === this.localPc ? this.remotePc : this.localPc
            }, e.prototype.getPcName = function (e) {
                return e === this.localPc ? "localPc" : "remotePc"
            }, e.prototype.onCreateSessionDescriptionError = function (e) {
                console.error("Failed to create session description: " + e.toString()), clearTimeout(this.timer), this.hangup(), this.resolve(e)
            }, e.prototype.onSetSessionDescriptionError = function (e) {
                console.error("Failed to set session description: " + e.toString()), clearTimeout(this.timer), this.hangup(), this.resolve(e)
            }, e.prototype.hangup = function () {
                this.localPc.close(), this.remotePc.close(), this.iceconnectionstatechangeTimes = 0, this.localStream.getTracks().forEach((function (e) {
                    return e.stop()
                }))
            }, e
        }();
        t.CheckModule = n
    }, function (e, t, r) {
        "use strict";
        var o = this && this.__spreadArrays || function () {
            for (var e = 0, t = 0, r = arguments.length; t < r; t++) e += arguments[t].length;
            var o = Array(e), s = 0;
            for (t = 0; t < r; t++) for (var i = arguments[t], n = 0, a = i.length; n < a; n++, s++) o[s] = i[n];
            return o
        };
        Object.defineProperty(t, "__esModule", {value: !0}), t.SdpUtil = void 0;
        var s = function () {
            function e() {
            }

            return e.zegoSdp = function (e) {
                var t = e.split("\r\n"), r = [], s = [];
                t.forEach((function (e) {
                    var t = e.match(/a=rtpmap:(\d+)\s+((H264\/90000)|(opus\/48000\/2))/);
                    t && t[1] && t[2] && ("H264/90000" === t[2] && r.push(t[1]), "opus/48000/2" === t[2] && s.push(t[1]))
                }));
                var i = [];
                return t.map((function (e) {
                    var t = !0, n = e.match(/((a=rtcp-fb:)|(a=rtpmap:)|(a=fmtp:))(\d+)/);
                    if (n && n[5] && (o(r, s).some((function (e) {
                        return e == n[5]
                    })) || (t = !1)), e.indexOf("m=video") > -1) {
                        var a = e.split(" ");
                        e = o([a[0], a[1], a[2]], r).join(" ")
                    } else if (e.indexOf("m=audio") > -1) {
                        a = e.split(" ");
                        e = o([a[0], a[1], a[2]], s).join(" ")
                    }
                    t && i.push(e)
                })), i.join("\r\n")
            }, e.getSDPByVideDecodeType = function (e, t) {
                var r = {str: "", arr: [], obj: {H264: [], H265: [], VP8: [], VP9: [], OHTER: []}};
                if (!e.includes("m=video")) return e;
                var s = /m=video.+/.exec(e)[0];
                s = s.match(/[\s|\d]+/g)[1].replace(" ", ""), r.str = s, r.arr = r.str.split(" "), r.arr.forEach((function (t) {
                    var o = new RegExp("a=rtpmap:" + t + ".+").exec(e)[0];
                    o.includes("H264") ? r.obj.H264.push(t) : o.includes("H265") ? r.obj.H265.push(t) : o.includes("VP8") ? r.obj.VP8.push(t) : o.includes("VP9") ? r.obj.VP9.push(t) : r.obj.OHTER.push(t)
                })), r.obj.OHTER.forEach((function (t) {
                    var o = new RegExp("a=fmtp:" + t + ".+apt=(\\d+)").exec(e), s = o && o[1];
                    s && (r.obj.H264.includes(s) ? r.obj.H264.push(t) : r.obj.H265.includes(s) ? r.obj.H265.push(t) : r.obj.VP8.includes(s) ? r.obj.VP8.push(t) : r.obj.VP9.includes(s) && r.obj.VP9.push(t))
                }));
                var i = [];
                return "VP9" === t ? i = o(r.obj.H265, r.obj.H264, r.obj.VP8) : "VP8" === t ? i = o(r.obj.H265, r.obj.H264, r.obj.VP9) : "H264" === t ? i = o(r.obj.H265, r.obj.VP8, r.obj.VP9) : "H265" === t && (i = o(r.obj.VP8, r.obj.H264, r.obj.VP9)), i.forEach((function (t) {
                    var o = r.arr.indexOf(t);
                    r.arr.splice(o, 1);
                    var s = new RegExp("a=rtpmap:" + t + ".+\\s\\n", "g"),
                        i = new RegExp("a=rtcp-fb:" + t + ".+\\s\\n", "g"),
                        n = new RegExp("a=fmtp:" + t + ".+\\s\\n", "g");
                    e = (e = (e = e.replace(s, "")).replace(i, "")).replace(n, "")
                })), e = e.replace(s, r.arr.join(" "))
            }, e
        }();
        t.SdpUtil = s
    }, function (e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0}), t.WechatMiniModules = void 0;
        var o = r(0), s = r(12), i = r(15), n = r(16), a = r(17), l = r(0), _ = r(1), d = r(3), u = r(2),
            E = function () {
                function e(e, t, r, o) {
                    this.logger = e, this.dataReport = t, this.stateCenter = r, this.rtm = o, this.currentPlaySourceType = l.ENUM_DISPATCH_TYPE.cdn, this.mixStreamList = {}, this.ultraPlaySourceType = "rtmp_v2", this.streamCenter = new s.ZegoStreamCenterWechat(this.logger, this.stateCenter, this.dataReport), this.publishModule = new n.PublishModule(this.logger, this.dataReport, this.stateCenter, this.streamCenter, this.rtm), this.playModule = new a.PlayModule(this.logger, this.dataReport, this.stateCenter, this.streamCenter, this.rtm), this.init()
                }

                return e.prototype.init = function () {
                    this.bindRTMListener(), this.bindStreamCenterHandler()
                }, e.prototype.bindRTMListener = function () {
                    var e = this;
                    this.rtm._on("roomLoginResponse", (function (t) {
                        e.logger.info("zc.rlr call " + JSON.stringify(t));
                        var r = t.header.room_id;
                        e.stateCenter.appid = e.rtm.getAppID(), e.stateCenter.idName = e.rtm.getUserID(), e.stateCenter.testEnvironment = e.rtm.isTestEnvironment(), e.stateCenter.isMultiRoom = e.rtm.getMultiRoom();
                        var o = e.rtm.getToken(r), s = e.rtm.getSessionId(r), n = e.rtm.getRoomSessionID(r),
                            a = e.stateCenter.getRoomByRoomID(r);
                        if (!a) {
                            var l = new i.StreamHandler(e.logger, e.stateCenter, e.rtm, e.dataReport, e.streamCenter, r);
                            e.bindStreamHandler(l), a = {
                                roomID: r,
                                streamHandler: l,
                                sessionID: s,
                                roomSessionID: n,
                                token: o,
                                isResetRoom: !1,
                                streamList: [],
                                streamInfoList: []
                            }, e.stateCenter.roomList.push(a), l.handleStreamStart(t, a)
                        }
                        a.sessionID = s, a.roomSessionID = n, a.token = a.token, e.logger.info("zc.rlr end " + r)
                    })), this.rtm._on("HBResponse", (function (t) {
                        var r, o = null === (r = null == t ? void 0 : t.header) || void 0 === r ? void 0 : r.room_id,
                            s = e.stateCenter.getRoomByRoomID(o);
                        null == s || s.streamHandler.patchStreamList(t)
                    })), this.rtm._on("_roomStateUpdate", (function (t, r, o, s) {
                        if ("DISCONNECTED" == r) {
                            e.logger.info(u.ZEGO_WECHATMINI_ACTION.WECHATMINI_BIND_RTM_LISTENER + " _roomStateUpdate " + t + " disconnected " + (o ? o + " " : "") + (s || ""));
                            var i = e.stateCenter.getRoomByRoomID(t);
                            if (i) {
                                var n = e.stateCenter.roomList.findIndex((function (e) {
                                    return e.roomID == t
                                }));
                                i.isResetRoom = !0, i.streamHandler.reset(), e.streamCenter.reset(t), e.stateCenter.roomList.splice(n, 1)
                            }
                        } else e.logger.info("zc.rsu " + t + " state: " + r)
                    })), this.rtm.service.on("stream", (function (t) {
                        var r,
                            o = (null === (r = null == t ? void 0 : t.header) || void 0 === r ? void 0 : r.room_id) || "",
                            s = e.stateCenter.getRoomByRoomID(o);
                        s ? s.streamHandler.handleStreamUpdateRsp(t) : e.logger.error(u.ZEGO_WECHATMINI_ACTION.ON_STREAM + " room no found")
                    })), this.rtm.service.on("push_stream_update", (function (t) {
                        var r,
                            o = (null === (r = null == t ? void 0 : t.header) || void 0 === r ? void 0 : r.room_id) || "",
                            s = e.stateCenter.getRoomByRoomID(o);
                        s ? s.streamHandler.handlePushStreamUpdateMsg(t) : e.logger.error(u.ZEGO_WECHATMINI_ACTION.ON_PUSH_STREAM_UPDATE + " room no found")
                    })), this.rtm.service.on("zegochat_js.push_room_stream_update_req", (function (t) {
                        var r,
                            o = (null === (r = null == t ? void 0 : t.header) || void 0 === r ? void 0 : r.room_id) || "",
                            s = e.stateCenter.getRoomByRoomID(o);
                        s ? s.streamHandler.handlePriPushStreamUpdateMsg(t) : e.logger.error(u.ZEGO_WECHATMINI_ACTION.ON_STREAM + " room no found")
                    }))
                }, e.prototype.bindStreamHandler = function (e) {
                    var t = this;
                    e.onStreamUpdated = function (e, r, o) {
                        var s = o.map((function (e) {
                            return "PRIVATE" === t.stateCenter.type ? {
                                streamID: e.stream_id,
                                user: {userID: e.user_id, userName: e.user_name},
                                extraInfo: e.extra_info
                            } : {streamID: e.streamID, user: e.user, extraInfo: e.extraInfo}
                        })), i = l.getReportSeq();
                        if (t.dataReport.newReport(i, _.ZegoWechatLogEvent.kZegoTaskLiveRoomGetStreamUpdateInfo.event), t.dataReport.addMsgInfo(i, {
                            stream_update_type: _.ZegoWechatLogEvent.kZegoTaskLiveRoomGetStreamUpdateInfo.stream_update_type(1 === r ? "added" : "deleted"),
                            update_stream: _.ZegoWechatLogEvent.kZegoTaskLiveRoomGetStreamUpdateInfo.update_stream(o)
                        }), t.dataReport.uploadReport(i), t.stateCenter.actionListener("roomStreamUpdate", e, d.ClientUtil.getSteamUpdateType(r), s), 1 === r) {
                            var n = [];
                            s.forEach((function (e) {
                                e.extraInfo && n.push({streamID: e.streamID, user: e.user, extraInfo: e.extraInfo})
                            })), n.length > 0 && t.stateCenter.actionListener("streamExtraInfoUpdate", e, n)
                        }
                    }, e.onPublishStateUpdate = function (e, r, o) {
                        t.logger.info(u.ZEGO_WECHATMINI_ACTION.ON_PUBLISH_STATE_UPDATE + " " + r);
                        var s = t.stateCenter.reportSeqList.startPublish[r];
                        t.streamCenter.publishingList[r] && (0 == e || 1 == e) && s && (t.dataReport.eventEndWithMsgInfo(s, "PublishState", {type: e}), 1 == e && t.dataReport.addMsgInfo(s, o), t.dataReport.uploadReport(s), delete t.stateCenter.reportSeqList.startPublish[r]), t.stateCenter.actionListener("publisherStateUpdate", {
                            state: d.ClientUtil.getPublisherStateType(e),
                            streamID: r,
                            errorCode: o.code,
                            extendedData: o.message
                        })
                    }, e.onStreamExtraInfoUpdated = function (e, r) {
                        var o;
                        o = "PUBLIC" === t.stateCenter.type ? r.map((function (e) {
                            return {streamID: e.streamID, user: e.user, extraInfo: e.extraInfo}
                        })) : r.map((function (e) {
                            return {
                                streamID: e.stream_id,
                                user: {userID: e.user_id, userName: e.user_name},
                                extraInfo: e.extra_info,
                                title: e.title,
                                streamVer: e.stream_ver
                            }
                        }));
                        var s = l.getReportSeq();
                        t.dataReport.newReport(s, _.ZegoWechatLogEvent.kZegoTaskLiveRoomGetStreamExtraInfo.event), t.dataReport.addMsgInfo(s, {update_stream: _.ZegoWechatLogEvent.kZegoTaskLiveRoomGetStreamExtraInfo.update_stream(o)}), t.dataReport.uploadReport(s), t.stateCenter.actionListener("streamExtraInfoUpdate", e, o)
                    }
                }, e.prototype.bindStreamCenterHandler = function () {
                    var e = this;
                    this.streamCenter.onPlayStateUpdate = function (t, r, o) {
                        var s = e.stateCenter.reportSeqList.startPlay[r];
                        e.streamCenter.playingList.find((function (e) {
                            return e.streamID === r
                        })) && (0 == t || 1 == t) && s && (e.dataReport.eventEndWithMsgInfo(s, "PlayState", {type: t}), 1 == t && o && e.dataReport.addMsgInfo(s, o), e.dataReport.uploadReport(s), delete e.stateCenter.reportSeqList.startPlay[r]), e.stateCenter.actionListener("playerStateUpdate", {
                            state: d.ClientUtil.getPlayerStateType(t),
                            streamID: r,
                            errorCode: o && o.code,
                            extendedData: o && o.message
                        })
                    }, this.streamCenter.onPublishStateUpdate = function (t, r, o) {
                        e.onPublishStateUpdateHandle(t, r, o)
                    }, this.streamCenter.onPublishQualityUpdate = function (t, r) {
                        e.stateCenter.actionListener("publishQualityUpdate", t, r)
                    }, this.streamCenter.onPlayQualityUpdate = function (t, r) {
                        e.stateCenter.actionListener("playQualityUpdate", t, r)
                    }
                }, e.prototype.onPublishStateUpdateHandle = function (e, t, r) {
                    var s = this;
                    this.logger.info(u.ZEGO_WECHATMINI_ACTION.ON_PUBLISH_STATE_UPDATE_HANDLE + " call");
                    var i = this.streamCenter.publisherList[t].room;
                    if (i) if (0 == e) {
                        if (this.stateCenter.publishStreamList[t]) if (this.stateCenter.publishStreamList[t].state != l.ENUM_PUBLISH_STREAM_STATE.tryPublish || i.streamList.find((function (e) {
                            return e.stream_id == t
                        }))) this.stateCenter.publishStreamList[t].state = l.ENUM_PUBLISH_STREAM_STATE.publishing, i.streamHandler.onPublishStateUpdate(e, t, r), this.dataReport.uploadReport(this.stateCenter.reportSeqList.startPublish[t]), delete this.stateCenter.reportSeqList.startPublish[t], d.ClientUtil.unregisterCallback("kZegoTaskPublishStart" + t, this.stateCenter.reportList); else {
                            this.stateCenter.publishStreamList[t].state = l.ENUM_PUBLISH_STREAM_STATE.update_info;
                            var n = void 0;
                            n = "PUBLIC" === this.stateCenter.type ? l.ENUM_STREAM_SUB_CMD.liveBegin : o.ENUM_STREAM_CMD_PRI.liveBegin, i.streamHandler.updateStreamInfo(t, n, this.stateCenter.publishStreamList[t].extra_info, (function (e) {
                                "PRIVATE" === s.stateCenter.type && s.stateCenter.publishStreamList[t] && s.stateCenter.publishStreamList[t].state == l.ENUM_PUBLISH_STREAM_STATE.update_info && (s.stateCenter.publishStreamList[t].state = l.ENUM_PUBLISH_STREAM_STATE.stop, i.streamHandler.onPublishStateUpdate(1, t, e), s.publishModule.stopPublishingStream(t))
                            })), this.dataReport.uploadReport(this.stateCenter.reportSeqList.startPublish[t]), delete this.stateCenter.reportSeqList.startPublish[t], d.ClientUtil.unregisterCallback("kZegoTaskPublishStart" + t, this.stateCenter.reportList)
                        }
                    } else i.streamHandler.onPublishStateUpdate(e, t, r), 1 == e && (this.logger.info(u.ZEGO_WECHATMINI_ACTION.ON_PUBLISH_STATE_UPDATE_HANDLE + " stop publish called by sdk"), this.publishModule.stopPublishingStream(t)); else this.logger.error("zc.opsuh.0 room not exist")
                }, e.prototype.bindListener = function (e, t) {
                    return this.logger.info(u.ZEGO_WECHATMINI_ACTION.WECHATMINI_BIND_LISTENER + " call"), this.stateCenter.listenerList[e] ? "function" != typeof t ? (this.logger.error(u.ZEGO_WECHATMINI_ACTION.WECHATMINI_BIND_LISTENER + " listener callBack must be function"), !1) : (-1 == this.stateCenter.listenerList[e].indexOf(t) && this.stateCenter.listenerList[e].push(t), !0) : (this.logger.error(u.ZEGO_WECHATMINI_ACTION.WECHATMINI_BIND_LISTENER + " event " + e + " no found"), !1)
                }, e.prototype.deleteListener = function (e, t) {
                    if (this.logger.info(u.ZEGO_WECHATMINI_ACTION.WECHATMINI_DELETE_LISTENER + " call"), !this.stateCenter.listenerList[e]) return this.logger.error(u.ZEGO_WECHATMINI_ACTION.WECHATMINI_DELETE_LISTENER + " listener no found"), !1;
                    var r = this.stateCenter.listenerList[e];
                    return t ? r.splice(r.indexOf(t), 1) : this.stateCenter.listenerList[e] = [], !0
                }, e.prototype.checkSystemRequirements = function () {
                    var e = this;
                    return new Promise((function (t, r) {
                        var o = l.getReportSeq();
                        e.dataReport.newReport(o, _.ZegoWechatLogEvent.kZegoTaskCheckSystemRequirements.event);
                        d.ClientUtil.isSupportLive((function (r) {
                            e.dataReport.addMsgInfo(o, {check_system: r}), e.dataReport.uploadReport(o), t(r)
                        }), (function (t) {
                            e.dataReport.addMsgInfo(o, _.ZegoWechatLogEvent.kZegoTaskCheckSystemRequirements.error.kCheckSystemGetSettingFailError), e.dataReport.uploadReport(o), r(t)
                        }))
                    }))
                }, e.prototype.updatePlayerState = function (e, t) {
                    this.logger.info(u.ZEGO_WECHATMINI_ACTION.WECHATMINI_UPDATE_PLAYER_STATE + " call " + e), this.streamCenter.updatePlayerState(e, t)
                }, e.prototype.updatePlayerNetStatus = function (e, t) {
                    this.logger.info(u.ZEGO_WECHATMINI_ACTION.WECHATMINI_UPDATE_PLAYER_NET_STATUS + " call " + e), this.streamCenter.updatePlayerNetStatus(e, t)
                }, e.prototype.getNextUrl = function (e) {
                    return "string" != typeof e || "" == e ? (this.logger.error(u.ZEGO_WECHATMINI_ACTION.WECHATMINI_GET_NEXT_URL + " stream ID must be string and not empty"), "") : this.streamCenter.getNextUrl(e)
                }, e.prototype.setCustomSignalUrl = function (e, t) {
                    if (void 0 === t && (t = !0), this.logger.info(u.ZEGO_WECHATMINI_ACTION.WECHATMINI_SET_CUSTOM_SIGNAL_URL + " call: " + JSON.stringify(e)), !e || 0 == e.length) return this.logger.error(u.ZEGO_WECHATMINI_ACTION.WECHATMINI_SET_CUSTOM_SIGNAL_URL + " param error"), !1;
                    var r = !0;
                    e.forEach((function (e) {
                        return 0 != e.indexOf("rtmp://") && (r = !1)
                    })), r ? t ? this.stateCenter.customUrl = e : this.stateCenter.customPlayUrl = e : this.logger.error(u.ZEGO_WECHATMINI_ACTION.WECHATMINI_SET_CUSTOM_SIGNAL_URL + " url is not correct")
                }, e
            }();
        t.WechatMiniModules = E
    }, function (e, t, r) {
        "use strict";
        var o, s = this && this.__extends || (o = function (e, t) {
            return (o = Object.setPrototypeOf || {__proto__: []} instanceof Array && function (e, t) {
                e.__proto__ = t
            } || function (e, t) {
                for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r])
            })(e, t)
        }, function (e, t) {
            function r() {
                this.constructor = e
            }

            o(e, t), e.prototype = null === t ? Object.create(t) : (r.prototype = t.prototype, new r)
        });
        Object.defineProperty(t, "__esModule", {value: !0}), t.ZegoStreamCenterWechat = void 0;
        var i = r(2), n = r(13), a = r(0), l = r(1), _ = r(3), d = r(14), u = 0, E = 1, g = 2, c = 0, h = 1,
            T = function (e) {
                function t(t, r, o) {
                    var s = e.call(this) || this;
                    return s.playerList = {}, s.publisherList = {}, s.playerCount = 0, s.playingList = [], s.publishingList = [], s.eventSeq = 0, s.streamEventMap = {}, s.streamReportMap = {}, s.publishSuccessCallBackList = {}, s.publishErrorCallBackList = {}, s.playSuccessCallBackList = {}, s.playErrorCallBackList = {}, s.logger = t, s.dataReport = o, s.stateCenter = r, s
                }

                return s(t, e), t.prototype.updatePlayingState = function (e, t, r) {
                    if (this.logger.info(i.ZEGO_WECHATMINI_ACTION.STREAMCENTERWECHAT_UPDATE_PLAYING_STATE + " " + e), null == e) return !1;
                    if (r) {
                        var o = this.playerList[e], s = this.stateCenter.reportSeqList.startPlay[e];
                        if (this.dataReport.eventStart(s, "updatePlayingState"), o) return this.logger.error(i.ZEGO_WECHATMINI_ACTION.STREAMCENTERWECHAT_UPDATE_PLAYING_STATE + " player already exist"), this.dataReport.eventEndWithMsgInfo(s, "updatePlayingState", {message: "player already exist"}), this.dataReport.uploadReport(s, void 0), delete this.stateCenter.reportSeqList.startPlay[e], !1;
                        var n = this.stateCenter.getPlayRoom(e) || this.stateCenter.roomList[0];
                        if (!n) return this.logger.error(i.ZEGO_WECHATMINI_ACTION.STREAMCENTERWECHAT_UPDATE_PLAYING_STATE + " room no found"), !1;
                        this.playerList[e] = new d.ZegoPlayWechat(this.logger, e, this, this.dataReport, this.stateCenter, n)
                    }
                    return this.updateStreamState(e, r, t, this.playingList), r ? (this.streamEventMap[e] = this.stateCenter.reportSeqList.startPlay[e], this.eventSeq += 1, this.streamReportMap[e] = this.eventSeq, this.dataReport.newReport(this.eventSeq), this.dataReport.eventStart(this.eventSeq, "GotPlayInfo")) : this.reportPlayEvent(e), !0
                }, t.prototype.updatePublishingState = function (e, t, r, o) {
                    if (void 0 === r && (r = ""), void 0 === o && (o = !1), this.logger.info(i.ZEGO_WECHATMINI_ACTION.STREAMCENTERWECHAT_UPDATE_PUBLISHING_STATE + " " + t), null == t) return !1;
                    if (o) {
                        var s = this.publisherList[t], n = this.stateCenter.reportSeqList.startPublish[t];
                        if (this.dataReport.eventStart(n, "updatePublishingState"), s) return this.logger.error(i.ZEGO_WECHATMINI_ACTION.STREAMCENTERWECHAT_UPDATE_PUBLISHING_STATE + " player already exist"), this.dataReport.eventEndWithMsgInfo(n, "updatePublishingState", {message: "player already exist"}), this.dataReport.uploadReport(n, void 0), delete this.stateCenter.reportSeqList.startPublish[t], !1;
                        this.publisherList[t] = new d.ZegoPlayWechat(this.logger, t, this, this.dataReport, this.stateCenter, e)
                    }
                    return this.updateStreamState(t, o, r, this.publishingList), o ? (this.streamEventMap[t] = this.stateCenter.reportSeqList.startPublish[t], this.eventSeq += 1, this.streamReportMap[t] = this.eventSeq, this.dataReport.newReport(this.eventSeq), this.dataReport.eventStart(this.eventSeq, "GotPublishInfo")) : this.reportPublishEvent(t), !0
                }, t.prototype.updateStreamState = function (e, t, r, o) {
                    if (e) if (r && "string" == typeof r || (r = ""), 1 == t) o.push({
                        streamID: e,
                        params: r
                    }); else for (var s = 0; s < o.length; s++) if (o[s].streamID == e) {
                        o.splice(s--, 1);
                        break
                    }
                }, t.prototype.isPlaying = function () {
                    return 0 != this.playingList.length
                }, t.prototype.isPublishing = function () {
                    return 0 != this.publishingList.length
                }, t.prototype.startPlayingStream = function (e, t, r) {
                    if (this.logger.info(i.ZEGO_WECHATMINI_ACTION.STREAMCENTERWECHAT_START_PLAYING_STREAM + " call " + e), this.streamEventMap[e]) {
                        var o = "";
                        0 == r ? o = "cdn" : 1 == r && (o = "ultra_src"), _.ClientUtil.actionLogReportCallback("kZegoTaskPlayStart" + e, this.stateCenter.reportList, a.REPORT_ACTION.addEventMsg, "get_play_url", ["type", o]), _.ClientUtil.actionLogReportCallback("kZegoTaskPlayStart" + e, this.stateCenter.reportList, a.REPORT_ACTION.addEventMsg, "get_play_url", ["urls", t])
                    }
                    var s = this.streamReportMap[e];
                    return s && this.dataReport.eventEndWithMsg(s, "GotPlayInfo", {
                        type: 0 == r ? "cdn" : "ultra_src",
                        urls: t
                    }), this.startPlayer(e, t, r, c)
                }, t.prototype.startPlayer = function (e, t, r, o) {
                    var s = this.playerList[e];
                    if (o == h && (s = this.publisherList[e]), !s) return this.logger.error(i.ZEGO_WECHATMINI_ACTION.STREAMCENTERWECHAT_START_PLAYER + " player don't exist"), !1;
                    var n = [];
                    o == c ? n = this.playingList : o == h && (n = this.publishingList);
                    for (var a = !1, l = "", _ = 0; _ < n.length; _++) if (n[_].streamID == e) {
                        a = !0, l = n[_].params;
                        break
                    }
                    if (!a) return this.logger.warn(i.ZEGO_WECHATMINI_ACTION.STREAMCENTERWECHAT_START_PLAYER + " should not start"), !1;
                    if (s.urls = t, s.params = l, s.reconnectLimit = this.getReconnectLimit(r), s.dispatchType = r, s.playerType = o, s.playerSeq = this.streamEventMap[e], s.playerReportSeq = this.streamReportMap[e], !s) return this.logger.info(i.ZEGO_WECHATMINI_ACTION.STREAMCENTERWECHAT_START_PLAYER + " new player failed"), !1;
                    ++this.playerCount;
                    var d = s.tryStartPlayer(0);
                    return this.logger.info(i.ZEGO_WECHATMINI_ACTION.STREAMCENTERWECHAT_START_PLAYER + " call result: " + d), !0
                }, t.prototype.getNextUrl = function (e) {
                    this.logger.info(i.ZEGO_WECHATMINI_ACTION.STREAMCENTERWECHAT_GET_NEXT_URL + " call " + e);
                    var t, r = this.publisherList[e] || this.playerList[e];
                    if (!r) return this.logger.error(i.ZEGO_WECHATMINI_ACTION.STREAMCENTERWECHAT_GET_NEXT_URL + " player don't exist"), "";
                    this.publishingList.find((function (t) {
                        return t.streamID === e
                    })) ? (t = !0, this.onPublishStateUpdate(a.ENUM_PUBLISH_STATE_UPDATE.retry, e, {
                        code: 0,
                        message: ""
                    })) : (t = !1, this.onPlayStateUpdate(g, e, {code: 0, message: ""}));
                    var o = r.getPlayerUrl();
                    if (t) {
                        if (!this.stateCenter.reportSeqList.startPublish[e]) {
                            var s = a.getReportSeq();
                            this.stateCenter.reportSeqList.startPublish[e] = s, this.dataReport.newReport(s, l.ZegoWechatLogEvent.kZegoTaskRePublish), r.pushBegin = !1, _.ClientUtil.logReportCallback("kZegoTaskPublishStart" + e, this.dataReport, s, this.stateCenter.reportList)
                        }
                    } else if (!this.stateCenter.reportSeqList.startPlay[e]) {
                        s = a.getReportSeq();
                        this.stateCenter.reportSeqList.startPlay[e] = s, this.dataReport.newReport(s, l.ZegoWechatLogEvent.kZegoTaskRePlay), r.playBegin = !1, _.ClientUtil.logReportCallback("kZegoTaskPlayStart" + e, this.dataReport, s, this.stateCenter.reportList)
                    }
                    return o
                }, t.prototype.stopPlayingStream = function (e) {
                    this.logger.info(i.ZEGO_WECHATMINI_ACTION.STREAMCENTERWECHAT_STOP_PLAYING_STREAM + " call " + e), null != e && (this.stopPlayer(e), delete this.streamEventMap[e], delete this.streamReportMap[e], this.updatePlayingState(e))
                }, t.prototype.stopPlayer = function (e) {
                    this.logger.info(i.ZEGO_WECHATMINI_ACTION.STREAMCENTERWECHAT_STOP_PLAYER + " call " + e);
                    var t = this.playerList[e], r = this.publisherList[e];
                    t || r ? (t && (t.stopPlayer(), delete this.playerList[e]), r && (r.stopPlayer(), delete this.publisherList[e]), --this.playerCount) : this.logger.info(i.ZEGO_WECHATMINI_ACTION.STREAMCENTERWECHAT_STOP_PLAYER + " play not exist " + e), this.logger.info(i.ZEGO_WECHATMINI_ACTION.STREAMCENTERWECHAT_STOP_PLAYER + " call success")
                }, t.prototype.startPublishingStream = function (e, t, r) {
                    if (this.logger.info(i.ZEGO_WECHATMINI_ACTION.STREAMCENTERWECHAT_START_PUBLISHING_STREAM + " call " + e), this.streamEventMap[e]) {
                        var o = "";
                        0 == r ? o = "cdn" : 1 == r && (o = "ultra_src"), _.ClientUtil.actionLogReportCallback("kZegoTaskPublishStart" + e, this.stateCenter.reportList, a.REPORT_ACTION.addEventMsg, "type", o), _.ClientUtil.actionLogReportCallback("kZegoTaskPublishStart" + e, this.stateCenter.reportList, a.REPORT_ACTION.addEventMsg, "urls", t)
                    }
                    var s = this.streamReportMap[e];
                    return s && this.dataReport.eventEndWithMsg(s, "GotPublishInfo", {
                        type: 0 == r ? "cdn" : "ultra_src",
                        urls: t
                    }), this.startPlayer(e, t, r, h)
                }, t.prototype.stopPublishingStream = function (e) {
                    if (this.logger.info(i.ZEGO_WECHATMINI_ACTION.STREAMCENTERWECHAT_STOP_PUBLISHING_STREAM + " call " + e), null != e) {
                        var t = this.publisherList[e].room;
                        this.stopPlayer(e), delete this.streamEventMap[e], delete this.streamReportMap[e], this.updatePublishingState(t, e, "", !1)
                    }
                }, t.prototype.updatePlayerState = function (e, t) {
                    var r = this.playerList[e], o = this.publisherList[e];
                    r || o ? (r && r.updateEvent(t), o && o.updateEvent(t)) : this.logger.error(i.ZEGO_WECHATMINI_ACTION.STREAMCENTERWECHAT_UPDATE_PLAYER_STATE + " no player " + e), this.logger.info(i.ZEGO_WECHATMINI_ACTION.STREAMCENTERWECHAT_UPDATE_PLAYER_STATE + " updatePlayerEvent success")
                }, t.prototype.updatePlayerNetStatus = function (e, t) {
                    var r = this.playerList[e], o = this.publisherList[e];
                    r || o ? (r && r.updatePlayerNetStatus(t), o && o.updatePlayerNetStatus(t)) : this.logger.error(i.ZEGO_WECHATMINI_ACTION.STREAMCENTERWECHAT_UPDATE_PLAYER_NET_STATUS + " no player " + e), this.logger.info(i.ZEGO_WECHATMINI_ACTION.STREAMCENTERWECHAT_UPDATE_PLAYER_NET_STATUS + " updatePlayerNetStatus success")
                }, t.prototype.reset = function (e) {
                    for (var t in this.logger.info(i.ZEGO_WECHATMINI_ACTION.STREAMCENTERWECHAT_RESET + " call"), this.publisherList) (this.publisherList[t].room.roomID == e || !e) && this.stopPublishingStream(t);
                    var r = function (t) {
                        var r = o.playerList[t].room;
                        if (r.roomID != e || !r.streamList.find((function (e) {
                            return e.stream_id == t
                        })) && 1 != o.stateCenter.roomList.length) {
                            if (r.roomID == e && o.stateCenter.roomList.length > 1) {
                                var s = o.stateCenter.roomList.find((function (t) {
                                    return t.roomID !== e
                                }));
                                s ? o.playerList[t].room = s : o.stopPlayingStream(t)
                            }
                        } else o.stopPlayingStream(t)
                    }, o = this;
                    for (var s in this.playerList) r(s);
                    this.logger.info(i.ZEGO_WECHATMINI_ACTION.STREAMCENTERWECHAT_RESET + " call success")
                }, t.prototype.reportPublishEvent = function (e, t) {
                    if (this.streamReportMap[e]) {
                        var r = this.streamReportMap[e];
                        this.dataReport.addMsgExt(r, {
                            stream: e,
                            error: t
                        }), this.dataReport.addMsgInfo(r, {itemtype: "WXPublishStream"}), this.dataReport.uploadReport(r, "WXPublishStream"), delete this.streamReportMap[e]
                    }
                }, t.prototype.reportPlayEvent = function (e, t) {
                    if (this.streamReportMap[e]) {
                        var r = this.streamReportMap[e];
                        this.dataReport.addMsgExt(r, {
                            stream: e,
                            error: t
                        }), this.dataReport.addMsgInfo(r, {itemtype: "WXPlayStream"}), this.dataReport.uploadReport(r, "WXPlayStream"), delete this.streamReportMap[e]
                    }
                }, t.prototype.onPlayStateUpdate = function (e, t, r) {
                }, t.prototype.onPlayQualityUpdate = function (e, t) {
                }, t.prototype.onPublishStateUpdate = function (e, t, r) {
                }, t.prototype.onPublishQualityUpdate = function (e, t) {
                }, t.prototype.onPublisherStreamUrlUpdate = function (e, t) {
                }, t.prototype.onPublisherStreamUrlFail = function (e, t) {
                }, t.prototype.onPlayerStreamUrlUpdate = function (e, t) {
                }, t.prototype.getReconnectLimit = function (e) {
                    return 1
                }, t.prototype.onPlayerStart = function (e, t) {
                    this.logger.info(i.ZEGO_WECHATMINI_ACTION.STREAMCENTERWECHAT_ON_PLAY_START + " call " + e), t == c ? this.onPlayStateUpdate(u, e, {
                        code: 0,
                        message: ""
                    }) : t == h && this.onPublishStateUpdate(u, e, {code: 0, message: ""})
                }, t.prototype.onPlayerStop = function (e, t, r) {
                    this.logger.info(i.ZEGO_WECHATMINI_ACTION.STREAMCENTERWECHAT_ON_PLAY_STOP + " call " + e), t == c ? (this.reportPlayEvent(e, r), this.logger.warn(i.ZEGO_WECHATMINI_ACTION.STREAMCENTERWECHAT_ON_PLAY_STOP + " play error"), this.onPlayStateUpdate(E, e, r)) : t == h && (this.reportPublishEvent(e, r), this.logger.warn(i.ZEGO_WECHATMINI_ACTION.STREAMCENTERWECHAT_ON_PLAY_STOP + " publish error"), this.onPublishStateUpdate(E, e, r))
                }, t.prototype.onPlayerRetry = function (e, t) {
                    this.logger.info(i.ZEGO_WECHATMINI_ACTION.STREAMCENTERWECHAT_ON_PLAY_RETRY + " call " + e), t == c ? this.onPlayStateUpdate(g, e, {
                        code: 0,
                        message: ""
                    }) : t == h && this.onPublishStateUpdate(g, e, {code: 0, message: ""})
                }, t.prototype.onPlayerQuality = function (e, t, r) {
                    var o = {
                        video: {
                            videoBitrate: t.videoBitrate,
                            videoFPS: t.videoFPS,
                            videoWidth: t.videoWidth,
                            videoHeight: t.videoHeight
                        }, audio: {audioBitrate: t.audioBitrate}
                    };
                    r == c ? this.onPlayQualityUpdate(e, o) : r == h && this.onPublishQualityUpdate(e, o)
                }, t.prototype.onStreamUrlUpdate = function (e, t, r) {
                    this.logger.info(i.ZEGO_WECHATMINI_ACTION.STREAMCENTERWECHAT_ON_STREAM_URL_UPDATE + " call " + e), 0 == r ? this.playSuccessCallBackList[e](e, t) : this.publishSuccessCallBackList[e](e, t)
                }, t.prototype.getTotalStreamId = function (e) {
                    return e
                }, t.prototype.getRealStreamId = function (e) {
                    return e
                }, t.prototype.getRoomByStreamID = function (e) {
                    return this.publisherList[e] ? this.publisherList[e].room : this.playerList[e] ? this.playerList[e].room : void 0
                }, t
            }(n.ZegoStreamCenter);
        t.ZegoStreamCenterWechat = T
    }, function (e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0}), t.ZegoStreamCenter = void 0;
        var o = function () {
            this.publisherList = {}, this.playerList = {}
        };
        t.ZegoStreamCenter = o
    }, function (e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0}), t.ZegoPlayWechat = void 0;
        var o = r(2), s = r(3), i = r(0), n = r(1), a = function () {
            function e(e, t, r, o, s, n) {
                this.logger = e, this.streamId = t, this.streamCenter = r, this.dataReport = o, this.stateCenter = s, this.room = n, this.urls = [], this.tryUrls = [], this.playUrlIndex = 0, this.playUrlTryCount = 0, this.currentUrl = null, this.retryIndex = 0, this.reconnectCount = 0, this.state = i.ENUM_PLAYER_STATE.stop, this.reconnectLimit = 0, this.sourceType = 0, this.playerType = 0, this.playerSeq = 0, this.playerReportSeq = 0, this.publishQualitySeq = 0, this.publishQualityCount = 0, this.publishQulaityMaxCount = 30, this.playQualitySeq = 0, this.playQualityCount = 0, this.playQulaityMaxCount = 30, this.everSuccess = !1, this.pushBegin = !1, this.playBegin = !1, this.playerLogUploadTime = (new Date).getTime(), this.seq = -1
            }

            return e.prototype.resetPlayer = function () {
                this.state = i.ENUM_PLAYER_STATE.stop
            }, e.prototype.newPlayer = function () {
                this.resetPlayer();
                var e = this.getCurrentPlayerUrl(), t = e;
                0 != this.params.length && (t = e + "?" + this.params);
                var r = (new Date).getTime();
                return t = t.indexOf("?") > -1 ? t + "&zgseq=" + r + "&zgdid=" + this.room.sessionID : t + "?zgseq=" + r + "&zgdid=" + this.room.sessionID, e !== this.currentUrl ? (this.currentUrl = e, this.streamCenter.onStreamUrlUpdate(this.streamId, t, this.playerType)) : this.streamCenter.onPlayerRetry(this.streamId, this.playerType), 0 == this.everSuccess ? 0 == this.playerType ? (this.dataReport.eventStart(this.playerReportSeq, "PlayBegin"), this.dataReport.addEventInfo(this.playerReportSeq, "PlayBegin", "url", t), this.tryUrls.push(t)) : (this.dataReport.eventStart(this.playerReportSeq, "PublishBegin"), this.dataReport.addEventInfo(this.playerReportSeq, "PublishBegin", "url", t), this.tryUrls.push(t)) : 0 == this.playerType ? this.dataReport.addEventInfo(this.playerSeq, "PlayRetry", "url", t) : this.dataReport.addEventInfo(this.playerSeq, "PublishRetry", "url", t), this.state = i.ENUM_PLAYER_STATE.start, !0
            }, e.prototype.stopPlayer = function () {
                0 == this.playerType ? this.dataReport.eventEndWithMsg(this.playerReportSeq, "PlayStat", {quality: this.playerInfo}) : (this.dataReport.addEventInfo(this.playerReportSeq, "PublishStat", "quality", this.playerInfo), this.dataReport.eventEndWithMsg(this.playerReportSeq, "PublishStat", {quality: this.playerInfo}))
            }, e.prototype.tryStartPlayer = function (e) {
                for (this.logger.info(o.ZEGO_WECHATMINI_ACTION.PLAYWECHAT_TRY_START_PLAYER + " call"); this.playUrlTryCount < this.urls.length;) if (++this.reconnectCount > this.reconnectLimit) this.playUrlTryCount++, this.playUrlIndex = (this.playUrlIndex + 1) % this.urls.length, this.reconnectCount = 0; else if (this.logger.info(o.ZEGO_WECHATMINI_ACTION.PLAYWECHAT_TRY_START_PLAYER + " index: " + this.playUrlIndex + ", url: " + this.getCurrentPlayerUrl()), this.newPlayer()) break;
                if (this.playUrlTryCount >= this.urls.length) {
                    this.logger.info(o.ZEGO_WECHATMINI_ACTION.PLAYWECHAT_TRY_START_PLAYER + " stream: " + this.streamId), this.resetPlayer();
                    var t = "";
                    0 == this.playerType ? t = "PlayEnd" : 1 == this.playerType && (t = "PublishEnd", this.reportQualityStatics());
                    var r = {error: e, reason: "no url to retry"};
                    this.dataReport.addEvent(this.playerSeq, t, r), this.streamCenter.onPlayerStop(this.streamId, this.playerType, e)
                }
            }, e.prototype.getPlayerUrl = function () {
                this.logger.info(o.ZEGO_WECHATMINI_ACTION.PLAYWECHAT_GET_PLAY_URL + " call " + this.streamId);
                var e = this.urls[++this.retryIndex % this.urls.length], t = e;
                0 != this.params.length && (t = e + "?" + this.params);
                var r = (new Date).getTime();
                return t = t.indexOf("?") > -1 ? t + "&zgseq=" + r + "&zgdid=" + this.room.sessionID : t + "?zgseq=" + r + "&zgdid=" + this.room.sessionID, this.tryUrls.push(t), this.logger.info(o.ZEGO_WECHATMINI_ACTION.PLAYWECHAT_GET_PLAY_URL + " call streamId: " + this.streamId + " url: " + t), t
            }, e.prototype.shouldRetryPlay = function (e) {
                var t = e.detail.code;
                return 3001 == t || 3002 == t || 3003 == t || 3005 == t
            }, e.prototype.isPlayFailed = function (e) {
                var t = e.detail.code;
                return -2301 == t || 2101 == t || 2102 == t
            }, e.prototype.shouldRetryPublish = function (e) {
                var t = e.detail.code;
                return 3001 == t || 3002 == t || 3003 == t || 3004 == t || 3005 == t
            }, e.prototype.isPublishFailed = function (e) {
                var t = e.detail.code;
                return -1301 == t || -1302 == t || -1303 == t || -1304 == t || -1305 == t || -1306 == t || -1307 == t || -1308 == t || -1309 == t || -1310 == t || -1311 == t
            }, e.prototype.updateEvent = function (e) {
                if (0 == this.playerType) {
                    if (this.playBegin || (this.playBegin = !0, s.ClientUtil.actionSuccessCallback("kZegoTaskPlayStart" + this.streamId, this.stateCenter.reportList) && s.ClientUtil.actionSuccessCallback("kZegoTaskPlayStart" + this.streamId, this.stateCenter.reportList)(i.REPORT_ACTION.eventStart, "play_begin")), 2004 == e.detail.code) this.everSuccess ? this.dataReport.eventEnd(this.playerReportSeq, "PlayRetry") : (this.everSuccess = !0, this.dataReport.eventStart(this.playerReportSeq, "PlayStat"), s.ClientUtil.actionSuccessCallback("kZegoTaskPlayStart" + this.streamId, this.stateCenter.reportList) && (s.ClientUtil.actionSuccessCallback("kZegoTaskPlayStart" + this.streamId, this.stateCenter.reportList)(i.REPORT_ACTION.addEventMsg, "play_begin", "try_urls", this.tryUrls), s.ClientUtil.actionSuccessCallback("kZegoTaskPlayStart" + this.streamId, this.stateCenter.reportList)(i.REPORT_ACTION.eventEnd, "play_begin"), s.ClientUtil.actionSuccessCallback("kZegoTaskPlayStart" + this.streamId, this.stateCenter.reportList)(i.REPORT_ACTION.eventStart, "play_state"))), this.logger.info(o.ZEGO_WECHATMINI_ACTION.PLAYWECHAT_UPDATE_EVENT + " play suc: " + this.streamId), this.state = i.ENUM_PLAYER_STATE.playing, this.streamCenter.onPlayerStart(this.streamId, this.playerType); else if (2009 == e.detail.code) ; else if (this.shouldRetryPlay(e)) ; else if (this.isPlayFailed(e)) {
                        this.logger.info(o.ZEGO_WECHATMINI_ACTION.PLAYWECHAT_UPDATE_EVENT + " play error: " + this.streamId), this.resetPlayer();
                        e.detail.code;
                        s.ClientUtil.actionSuccessCallback("kZegoTaskPlayStart" + this.streamId, this.stateCenter.reportList) && (s.ClientUtil.actionSuccessCallback("kZegoTaskPlayStart" + this.streamId, this.stateCenter.reportList)(i.REPORT_ACTION.addEventMsg, "play_begin", "error_code", e.detail.code), s.ClientUtil.actionSuccessCallback("kZegoTaskPlayStart" + this.streamId, this.stateCenter.reportList)(i.REPORT_ACTION.addEventMsg, "play_begin", "try_urls", this.tryUrls), s.ClientUtil.actionSuccessCallback("kZegoTaskPlayStart" + this.streamId, this.stateCenter.reportList)(i.REPORT_ACTION.eventEnd, "play_begin"), s.ClientUtil.actionSuccessCallback("kZegoTaskPlayStart" + this.streamId, this.stateCenter.reportList)(i.REPORT_ACTION.addMsgInfo, void 0, {})), this.playBegin = !1, this.streamCenter.onPlayerStop(this.streamId, this.playerType, {
                            code: e.detail.code,
                            msg: "play fail"
                        })
                    }
                    this.everSuccess || this.dataReport.eventEnd(this.playerReportSeq, "PlayBegin")
                } else 1 == this.playerType && (this.pushBegin || (this.pushBegin = !0, s.ClientUtil.actionSuccessCallback("kZegoTaskPublishStart" + this.streamId, this.stateCenter.reportList) && s.ClientUtil.actionSuccessCallback("kZegoTaskPublishStart" + this.streamId, this.stateCenter.reportList)(i.REPORT_ACTION.eventStart, "push_begin")), 1002 == e.detail.code ? (this.everSuccess ? this.dataReport.eventEnd(this.playerReportSeq, "PublishRetry") : (this.everSuccess = !0, this.dataReport.eventStart(this.playerReportSeq, "PublishStat"), s.ClientUtil.actionSuccessCallback("kZegoTaskPublishStart" + this.streamId, this.stateCenter.reportList) && (s.ClientUtil.actionSuccessCallback("kZegoTaskPublishStart" + this.streamId, this.stateCenter.reportList)(i.REPORT_ACTION.addEventMsg, "push_begin", "try_urls", this.tryUrls), s.ClientUtil.actionSuccessCallback("kZegoTaskPublishStart" + this.streamId, this.stateCenter.reportList)(i.REPORT_ACTION.eventEnd, "push_begin"), this.stateCenter.publishStreamList[this.streamId] && this.stateCenter.publishStreamList[this.streamId].state == i.ENUM_PUBLISH_STREAM_STATE.tryPublish && s.ClientUtil.actionSuccessCallback("kZegoTaskPublishStart" + this.streamId, this.stateCenter.reportList)(i.REPORT_ACTION.eventStart, "publish_state"))), this.logger.info(o.ZEGO_WECHATMINI_ACTION.PLAYWECHAT_UPDATE_EVENT + " play suc: " + this.streamId), this.state = i.ENUM_PLAYER_STATE.playing, this.streamCenter.onPlayerStart(this.streamId, this.playerType)) : this.shouldRetryPublish(e) || this.isPublishFailed(e) && (this.logger.info(o.ZEGO_WECHATMINI_ACTION.PLAYWECHAT_UPDATE_EVENT + " publish error: " + this.streamId), this.resetPlayer(), s.ClientUtil.actionSuccessCallback("kZegoTaskPublishStart" + this.streamId, this.stateCenter.reportList) && (s.ClientUtil.actionSuccessCallback("kZegoTaskPublishStart" + this.streamId, this.stateCenter.reportList)(i.REPORT_ACTION.addEventMsg, "push_begin", "error_code", e.detail.code), s.ClientUtil.actionSuccessCallback("kZegoTaskPublishStart" + this.streamId, this.stateCenter.reportList)(i.REPORT_ACTION.addEventMsg, "push_begin", "try_urls", this.tryUrls), s.ClientUtil.actionSuccessCallback("kZegoTaskPublishStart" + this.streamId, this.stateCenter.reportList)(i.REPORT_ACTION.eventEnd, "push_begin"), s.ClientUtil.actionSuccessCallback("kZegoTaskPublishStart" + this.streamId, this.stateCenter.reportList)(i.REPORT_ACTION.addMsgInfo, void 0, {})), this.pushBegin = !1, this.streamCenter.onPlayerStop(this.streamId, this.playerType, {
                    code: e.detail.code,
                    msg: "publish fail"
                })), this.everSuccess || this.dataReport.eventEnd(this.playerReportSeq, "PublishBegin"))
            }, e.prototype.updatePlayerNetStatus = function (e) {
                var t = {
                    videoBitrate: e.detail.info.videoBitrate,
                    audioBitrate: e.detail.info.audioBitrate,
                    videoFPS: e.detail.info.videoFPS,
                    videoHeight: e.detail.info.videoHeight,
                    videoWidth: e.detail.info.videoWidth,
                    videoGOP: e.detail.info.videoGOP,
                    netSpeed: e.detail.info.netSpeed,
                    netJitter: e.detail.info.netJitter
                };
                if (this.playerInfo = t, 1 == this.playerType) {
                    var r = {
                        videoBitrate: e.detail.info.videoBitrate,
                        audioBitrate: e.detail.info.audioBitrate,
                        videoFPS: e.detail.info.videoFPS,
                        videoGOP: e.detail.info.videoGOP,
                        netSpeed: e.detail.info.netSpeed,
                        netJitter: e.detail.info.netJitter,
                        videoWidth: e.detail.info.videoWidth,
                        videoHeight: e.detail.info.videoHeight
                    };
                    if (0 == this.publishQualitySeq && (this.publishQualitySeq = i.getReportSeq(), this.dataReport.newReport(this.publishQualitySeq), this.dataReport.addMsgInfo(this.publishQualitySeq, {stream_id: this.streamId})), this.dataReport.addEvent(this.publishQualitySeq, "PublishQuality", r), this.publishQualityCount += 1, this.publishQualityCount >= this.publishQulaityMaxCount) (new Date).getTime() - this.playerLogUploadTime > 45e3 && (this.reportQualityStatics(), this.playerLogUploadTime = (new Date).getTime())
                } else if (0 == this.playerType) {
                    r = {
                        videoBitrate: e.detail.info.videoBitrate,
                        audioBitrate: e.detail.info.audioBitrate,
                        videoFPS: e.detail.info.videoFPS,
                        videoGOP: e.detail.info.videoGOP,
                        netSpeed: e.detail.info.netSpeed,
                        netJitter: e.detail.info.netJitter,
                        videoWidth: e.detail.info.videoWidth,
                        videoHeight: e.detail.info.videoHeight
                    };
                    if (0 == this.playQualitySeq && (this.playQualitySeq = i.getReportSeq(), this.dataReport.newReport(this.playQualitySeq), this.dataReport.addMsgInfo(this.playQualitySeq, {stream_id: this.streamId})), this.dataReport.addEvent(this.playQualitySeq, "PlayQuality", r), this.playQualityCount += 1, this.playQualityCount >= this.playQulaityMaxCount) (new Date).getTime() - this.playerLogUploadTime > 45e3 && (this.reportPlayQualityStatics(), this.playerLogUploadTime = (new Date).getTime())
                }
                this.streamCenter.onPlayerQuality(this.streamId, t, this.playerType)
            }, e.prototype.getCurrentPlayerUrl = function () {
                return this.urls[this.playUrlIndex % this.urls.length]
            }, e.prototype.reportQualityStatics = function () {
                this.dataReport.addMsgInfo(this.publishQualitySeq, {itemtype: "WXPublishStateUpdate"}), this.dataReport.uploadReport(this.publishQualitySeq, n.ZegoWechatLogEvent.kZegoEventPublishStat), this.publishQualityCount = 0, this.publishQualitySeq = 0
            }, e.prototype.reportPlayQualityStatics = function () {
                this.dataReport.addMsgInfo(this.playQualitySeq, {itemtype: "WXPlayStateUpdate"}), this.dataReport.uploadReport(this.playQualitySeq, n.ZegoWechatLogEvent.kZegoEventPlayStat), this.playQualityCount = 0, this.playQualitySeq = 0
            }, e
        }();
        t.ZegoPlayWechat = a
    }, function (e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0}), t.StreamHandler = void 0;
        var o = r(0), s = r(3), i = r(0), n = r(1), a = r(4), l = r(2), _ = function () {
            function e(e, t, r, o, s, i) {
                this.logger = e, this.stateCenter = t, this.rtm = r, this.dataReport = o, this.streamCenter = s, this.roomID = i, this.minStreamSeq = 0, this.streamSeq = 0, this.streamQuerying = !1, this.streamSeqMergeMap = null, this.streamListHBMergeInterval = 2e3, this.streamListMergeInterval = 5e3
            }

            return e.prototype.setCDNInfo = function (e, t) {
                e.urlFlv = t.urls_flv instanceof Array ? t.urls_flv[0] : "string" == typeof t.urls_flv ? t.urls_flv : "", e.urlHls = t.urls_m3u8 instanceof Array ? t.urls_m3u8[0] : "string" == typeof t.urls_m3u8 ? t.urls_m3u8 : "", e.urlHttpsFlv = t.urls_https_flv instanceof Array ? t.urls_https_flv[0] : "string" == typeof t.urls_https_flv ? t.urls_https_flv : "", e.urlHttpsHls = t.urls_https_m3u8 instanceof Array ? t.urls_https_m3u8[0] : "string" == typeof t.urls_https_m3u8 ? t.urls_https_m3u8 : "", e.urlRtmp = t.urls_rtmp instanceof Array ? t.urls_rtmp[0] : "string" == typeof t.urls_rtmp ? t.urls_rtmp : ""
            }, e.prototype.onStreamUpdated = function (e, t, r) {
            }, e.prototype.onStreamExtraInfoUpdated = function (e, t) {
            }, e.prototype.handleStreamStart = function (e, t) {
                this.logger.info("zb.sh.hss call stream update"), this.room = t, e.body ? (this.streamListHBMergeInterval = e.body.stream_list_hb_wait_merge_time || 2e3, this.streamListMergeInterval = e.body.stream_list_push_merge_timeout || 5e3, this.streamQuerying = !1, this.handleFullUpdateStream(e.body.stream_seq, e.body.stream_info || []), this.handleReconnectStream(e.body.stream_info), this.logger.info("zb.sh.hss call end")) : this.logger.error("zb.sh.hss server response wrong")
            }, e.prototype.onPublishStateUpdate = function (e, t, r) {
            }, e.prototype.updateStreamInfo = function (e, t, r, i) {
                var n, l, _, d = this;
                if (void 0 === r && (r = ""), this.logger.info("zb.sh.usi call"), "PUBLIC" === this.stateCenter.type) {
                    var u = {stream_id: e, extra_info: r}, E = JSON.stringify(u);
                    l = {
                        sub_cmd: t,
                        stream_msg: E,
                        third_token: null === (n = this.room) || void 0 === n ? void 0 : n.token
                    }, _ = "stream"
                } else l = {
                    room_header: {
                        room_id: this.roomID,
                        room_sid: this.rtm.getRoomSid() || "0",
                        room_user_session_id: this.rtm.getRoomSessionID() || "0"
                    }, stream_id: e, extra_info: r, title: "", stream_sid: this.stateCenter.publishStreamList[e].sid
                }, _ = t;
                var g = this.room;
                this.room.streamInfoList[e] = {}, this.room.streamInfoList[e].seq = this.rtm.service.sendMessage(_, l, (function (e, t) {
                    d.handleStreamUpdateRsp(e)
                }), (function (n, l) {
                    var _ = d.room;
                    if (_ && !_.isResetRoom && !d.rtm.service.isDisConnect() && n.code && n.code == a.errorCodeList.TIMEOUT.code && _.streamInfoList[e].seq == l) 2001 == t && d.stateCenter.publishStreamList[e] && d.stateCenter.publishStreamList[e].state == o.ENUM_PUBLISH_STREAM_STATE.update_info || 2002 == t ? setTimeout((function () {
                        d.updateStreamInfo(e, t, r, i)
                    }), 0) : i && i(a.errorCodeList.TIMEOUT); else if (n.body && n.body.err_code) {
                        var u = s.ClientUtil.getServerError(n.body.err_code);
                        i && i(u, l), t === o.ENUM_STREAM_SUB_CMD.liveBegin && d.onPublishStateUpdate(o.ENUM_PUBLISH_STATE_UPDATE.error, e, u)
                    }
                }), void 0, {
                    sessionID: null == g ? void 0 : g.sessionID,
                    roomID: null == g ? void 0 : g.roomID,
                    roomSessionID: null == g ? void 0 : g.roomSessionID
                }), this.logger.info("zb.sh.usi call success cmd " + t)
            }, e.prototype.handleStreamUpdateRsp = function (e) {
                if (this.rtm.service.isDisConnect()) this.logger.error("zb.sh.hsur not login"); else if (0 == e.body.err_code) {
                    this.logger.info("zb.sh.hsur stream seq " + this.streamSeq + " server seq " + e.body.stream_seq), "PUBLIC" === this.stateCenter.type ? this.streamSeq = e.body.stream_seq : this.streamSeq++;
                    var t = this.room;
                    if (t) if ("PUBLIC" === this.stateCenter.type) for (var r = function (r) {
                        var i = e.body.stream_info[r].stream_id, n = s.stateCenter.publishStreamList[i];
                        if (!n) return s.logger.info("hsur.0 stream is not exist"), {value: void 0};
                        n.state == o.ENUM_PUBLISH_STREAM_STATE.update_info && (n.state = o.ENUM_PUBLISH_STREAM_STATE.publishing, t.streamList.find((function (e) {
                            return e.stream_id == i
                        })) || t.streamList.push(e.body.stream_info[r]), s.onPublishStateUpdate(o.ENUM_PUBLISH_STATE_UPDATE.start, i, {
                            code: 0,
                            message: ""
                        })), delete t.streamInfoList[i]
                    }, s = this, i = 0; i < e.body.stream_info.length; i++) {
                        var n = r(i);
                        if ("object" == typeof n) return n.value
                    } else {
                        var a = e.body.stream_id;
                        this.stateCenter.publishStreamList[a] && this.stateCenter.publishStreamList[a].state == o.ENUM_PUBLISH_STREAM_STATE.update_info && (this.stateCenter.publishStreamList[a].state = o.ENUM_PUBLISH_STREAM_STATE.publishing, this.stateCenter.publishStreamList[a].sid = e.body.stream_sid, this.stateCenter.publishStreamList[a].ver = e.body.stream_ver, t.streamList.find((function (e) {
                            return e.stream_id == a
                        })) || t.streamList.push({
                            stream_id: e.body.stream_id,
                            stream_seq: e.body.stream_seq,
                            stream_sid: e.body.stream_sid,
                            stream_ver: e.body.stream_ver,
                            user_id: "",
                            user_name: ""
                        }), this.onPublishStateUpdate(0, a, {code: 0, message: ""})), delete t.streamInfoList[a]
                    } else this.logger.info("hsur.0 room no found")
                } else this.logger.error("zb.sh.hsur stream update error " + e.body.err_code)
            }, e.prototype.handleFetchStreamListRsp = function (e) {
                this.logger.info("zb.sh.hfslr call"), this.streamQuerying = !1, 0 === e.body.err_code ? this.streamSeq !== e.body.stream_seq ? (this.handleFullUpdateStream(e.body.stream_seq, e.body.stream_info), this.logger.info("zb.sh.hfslr call success")) : this.logger.info("zb.sh.hfslr same seq") : this.logger.info("zb.sh.hfslr server error=", e.body.err_code)
            }, e.prototype.handleFullUpdateStream = function (e, t) {
                var r = this;
                this.logger.info("zb.sh.hfus call"), this.streamSeq = e, this.logger.debug("zb.sh.hfus server seq " + this.streamSeq), s.ClientUtil.mergeStreamList(this.stateCenter.idName, this.room.streamList, t, (function (e, t, s) {
                    0 !== e.length && (r.logger.debug("zb.sh.hfus callback addstream"), r.onStreamUpdated(r.roomID, o.ENUM_STREAM_UPDATE_TYPE.added, r.makeCallbackStreamList(e))), 0 !== t.length && (r.logger.debug("zb.sh.hfus callback delstream"), r.onStreamUpdated(r.roomID, o.ENUM_STREAM_UPDATE_TYPE.deleted, r.makeCallbackStreamList(t))), 0 !== s.length && (r.logger.debug("zb.sh.hfus callback updatestream"), r.onStreamExtraInfoUpdated(r.roomID, r.makeCallbackStreamList(s)))
                })), this.logger.info("zb.sh.hfus call success")
            }, e.prototype.handlePushStreamUpdateMsg = function (e) {
                if (this.logger.info("zb.sh.hpsum call"), e.body.stream_info && 0 !== e.body.stream_info.length) {
                    if (e.body.stream_info.length + this.streamSeq !== e.body.stream_seq) return this.logger.info("zb.sh.hpsum call updatestream"), void this.fetchStreamList();
                    switch (this.streamSeq = e.body.stream_seq, e.body.stream_cmd) {
                        case o.ENUM_STREAM_UPDATE_CMD.added:
                            this.handleAddedStreamList(e.body.stream_info);
                            break;
                        case o.ENUM_STREAM_UPDATE_CMD.deleted:
                            this.handleDeletedStreamList(e.body.stream_info);
                            break;
                        case o.ENUM_STREAM_UPDATE_CMD.updated:
                            this.handleUpdatedStreamList(e.body.stream_info)
                    }
                    this.logger.info("zb.sh.hpsum call success")
                } else this.logger.info("zb.sh.hpsum, emtpy list")
            }, e.prototype.handlePriPushStreamUpdateMsg = function (e) {
                if (this.logger.info("zb.sh.hpsum call"), e.body.streams_info && 0 !== e.body.streams_info.length) {
                    if (e.body.streams_info.length + this.streamSeq !== e.body.stream_seq) return this.logger.info("zb.sh.hpsum call updatestream"), void this.mergeStreamByStreamSeq(e.body.stream_cmd, e.body.stream_seq, e.body.streams_info);
                    switch (this.streamSeq = e.body.stream_seq, e.body.stream_cmd) {
                        case o.ENUM_STREAM_UPDATE_CMD_PRI.added:
                            this.handleAddedStreamList(e.body.streams_info);
                            break;
                        case o.ENUM_STREAM_UPDATE_CMD_PRI.deleted:
                            this.handleDeletedStreamList(e.body.streams_info);
                            break;
                        case o.ENUM_STREAM_UPDATE_CMD_PRI.updated:
                            this.handleUpdatedStreamList(e.body.streams_info)
                    }
                    this.logger.info("zb.sh.hpsum call success")
                } else this.logger.info("zb.sh.hpsum, emtpy list")
            }, e.prototype.handleAddedStreamList = function (e) {
                this.logger.debug("zb.sh.hasl call");
                for (var t, r = [], s = 0; s < e.length; s++) if (e[s].anchor_id_name != this.stateCenter.idName && e[s].user_id !== this.stateCenter.idName) {
                    t = !1;
                    for (var i = 0; i < this.room.streamList.length; i++) if (e[s].stream_id === this.room.streamList[i].stream_id) {
                        t = !0;
                        break
                    }
                    t || r.push(e[s])
                } else this.logger.debug("hdsl.0 have self stream added");
                if (0 !== r.length) {
                    this.logger.debug("zb.sh.hasl callback addstream");
                    for (var n = 0; n < r.length; n++) this.room.streamList.push(r[n]);
                    this.onStreamUpdated(this.roomID, o.ENUM_STREAM_UPDATE_TYPE.added, this.makeCallbackStreamList(r))
                }
                this.logger.info("zb.sh.hasl call success")
            }, e.prototype.handleDeletedStreamList = function (e) {
                this.logger.debug("zb.sh.hdsl call");
                for (var t = [], r = 0; r < e.length; r++) if (e[r].anchor_id_name != this.stateCenter.idName && e[r].user_id !== this.stateCenter.idName) {
                    for (var s = this.room.streamList.length - 1; s >= 0; s--) if (e[r].stream_id === this.room.streamList[s].stream_id) {
                        this.room.streamList.splice(s--, 1), t.push(e[r]);
                        break
                    }
                } else this.logger.debug("zb.sh.hdsl have self stream deleted");
                0 !== t.length && (this.logger.debug("zb.sh.hdsl callback delstream"), this.onStreamUpdated(this.roomID, o.ENUM_STREAM_UPDATE_TYPE.deleted, this.makeCallbackStreamList(t))), this.logger.info("zb.sh.hdsl call")
            }, e.prototype.handleUpdatedStreamList = function (e) {
                this.logger.debug("zb.sh.husl call");
                for (var t = [], r = 0; r < e.length; r++) if (e[r].anchor_id_name != this.stateCenter.idName && e[r].user_id !== this.stateCenter.idName) {
                    for (var o = 0; o < this.room.streamList.length; o++) if (e[r].stream_id === this.room.streamList[o].stream_id) {
                        e[r].extra_info !== this.room.streamList[o].extra_info && (this.room.streamList[o] = e[r], t.push(e[r]));
                        break
                    }
                } else this.logger.debug("hsul.0 have self stream updated");
                0 !== t.length && (this.logger.debug("zb.sh.husl callback updatestream"), this.onStreamExtraInfoUpdated(this.roomID, this.makeCallbackStreamList(t))), this.logger.info("zb.sh.husl call success")
            }, e.prototype.fetchStreamList = function () {
                if (this.logger.info("zb.sh.fsl call"), this.rtm.service.isDisConnect()) this.logger.info("zb.sh.fsl state error"); else if (this.streamQuerying) this.logger.info("zb.sh.fsl already doing"); else if (this.streamQuerying = !0, this.logger.debug("zb.sh.fsl send fetch request"), "PUBLIC" === this.stateCenter.type) {
                    var e = {reserve: 0}, t = this.room;
                    this.rtm.service.sendMessage("stream_info", e, this.handleFetchStreamListRsp.bind(this), (function (e, t) {
                    }), void 0, {
                        roomID: null == t ? void 0 : t.roomID,
                        sessionID: null == t ? void 0 : t.sessionID,
                        roomSessionID: null == t ? void 0 : t.roomSessionID
                    }), this.logger.info("zb.sh.fsl call success")
                } else {
                    if (!this.rtm.isLogin(this.roomID)) return void this.logger.info("zb.sh.fsl room state error");
                    e = {
                        room_header: {
                            room_id: this.roomID,
                            room_sid: this.rtm.getRoomSid() || "0",
                            room_user_session_id: this.rtm.getRoomSessionID() || "0"
                        }
                    };
                    this.rtm.service.sendMessage("zegochat_js.room_info_req", e, this.handleFetchStreamListRsp.bind(this), (function (e, t) {
                    }))
                }
            }, e.prototype.handleReconnectStream = function (e) {
                this.logger.info("zb.sh.hrs call");
                var t = this.streamCenter.publisherList, r = this.streamCenter.playerList, s = function (r) {
                    if (t[r].roomID !== i.roomID) return "continue";
                    if (t[r].publisher.state != o.ENUM_PUBLISH_STATE.publishing || e.find((function (e) {
                        return e.stream_id == r
                    }))) {
                        if (t[r].publisher.state == o.ENUM_PUBLISH_STATE.stop && e.find((function (e) {
                            return e.stream_id == r
                        }))) {
                            n = void 0;
                            n = "PUBLIC" === i.stateCenter.type ? o.ENUM_STREAM_SUB_CMD.liveEnd : o.ENUM_STREAM_CMD_PRI.liveEnd, i.updateStreamInfo(r, n);
                            for (var s = 0; s < i.room.streamList.length; s++) if (i.room.streamList[s].stream_id == r) {
                                i.room.streamList.splice(s--, 1);
                                break
                            }
                        }
                    } else {
                        var n = void 0;
                        n = "PUBLIC" === i.stateCenter.type ? o.ENUM_STREAM_SUB_CMD.liveBegin : o.ENUM_STREAM_CMD_PRI.liveBegin, i.updateStreamInfo(r, n, i.stateCenter.publishStreamList[r].extra_info)
                    }
                }, i = this;
                for (var n in t) s(n);
                for (var n in t) {
                    if (t[n].roomID === this.roomID) if (t[n].isReDispatch) this.logger.info("zb.sh.hrs " + n + "retry dispatch"), (a = t[n].retryDispatchHandler).stopMaxTime(), a.invalid(), a.initStream(n, t[n].publishOption, !0), a.active(0), t[n].isReDispatch = !1
                }
                for (var n in r) {
                    var a;
                    if (r[n].roomID === this.roomID) if (r[n].isReDispatch) this.logger.info("zb.sh.hrs " + n + "retry dispatch"), (a = r[n].retryDispatchHandler).stopMaxTime(), a.invalid(), a.initStream(n, r[n].playOption, !1), a.active(0), r[n].isReDispatch = !1
                }
                this.logger.info("zb.sh.hrs end")
            }, e.prototype.makeCallbackStreamList = function (e) {
                var t = [];
                if ("PUBLIC" === this.stateCenter.type) {
                    if (e && e.length > 0) for (var r = 0; r < e.length; r++) {
                        var o = {
                            user: {userID: e[r].anchor_id_name, userName: e[r].anchor_nick_name},
                            extraInfo: e[r].extra_info,
                            streamID: e[r].stream_id,
                            roomID: "",
                            urlFlv: "",
                            urlRtmp: "",
                            urlHls: "",
                            urlHttpsFlv: "",
                            urlHttpsHls: "",
                            streamGID: e[r].stream_gid,
                            closeType: e[r].close_type
                        };
                        this.setCDNInfo(o, e[r]), t.push(o)
                    }
                } else if (e && e.length > 0) for (r = 0; r < e.length; r++) {
                    o = {
                        user_id: e[r].user_id,
                        user_name: e[r].user_name,
                        stream_id: e[r].stream_id,
                        stream_sid: e[r].stream_sid,
                        extra_info: e[r].extra_info,
                        title: e[r].title,
                        stream_ver: e[r].stream_ver
                    };
                    t.push(o)
                }
                return t
            }, e.prototype.updateMixStream = function (e, t, r) {
                var l, _ = this;
                if (this.logger.info("zb.sh.ums call"), !e.noTaskID && !e.taskID) return this.logger.error("zb.sh.ums no taskId found"), r({
                    errorCode: n.ZegoRTCLogEvent.kZegoTaskMixStart.error.kTaskIDNullError.code,
                    extendedData: n.ZegoRTCLogEvent.kZegoTaskMixStart.error.kTaskIDNullError.message
                }), !1;
                if (!e.noTaskID && "string" != typeof e.taskID) return this.logger.error("zb.rh.lg taskId must be string"), r({
                    errorCode: n.ZegoRTCLogEvent.kZegoTaskMixStart.error.kParamError.code,
                    extendedData: n.ZegoRTCLogEvent.kZegoTaskMixStart.error.kParamError.message
                }), !1;
                if (!e.noTaskID && e.taskID.length > o.MAX_MIX_TASK_ID_LENGTH) return this.logger.error("zb.sh.ums taskId is too long"), r({
                    errorCode: n.ZegoRTCLogEvent.kZegoTaskMixStart.error.kTaskIDToLongError.code,
                    extendedData: n.ZegoRTCLogEvent.kZegoTaskMixStart.error.kTaskIDToLongError.message
                }), !1;
                if (!e.noTaskID && !s.ClientUtil.checkIllegalCharacters(e.taskID)) return this.logger.error("zb.sh.ums task ID contains illegal characters"), r({
                    errorCode: n.ZegoRTCLogEvent.kZegoTaskMixStart.error.kTaskIDInvalidCharacterError.code,
                    extendedData: n.ZegoRTCLogEvent.kZegoTaskMixStart.error.kTaskIDInvalidCharacterError.message
                }), !1;
                if (!e.inputList || 0 == e.inputList.length) return this.logger.error("zb.sh.ums input list wrong"), r({
                    errorCode: n.ZegoRTCLogEvent.kZegoTaskMixStart.error.kInputListNullError.code,
                    extendedData: n.ZegoRTCLogEvent.kZegoTaskMixStart.error.kInputListNullError.message
                }), !1;
                e.inputList.forEach((function (e) {
                    "AUDIO" === e.contentType && (!e.layout && (e.layout = {
                        top: 0,
                        left: 0,
                        bottom: 0,
                        right: 0
                    }), e.layout.top = 0, e.layout.left = 0, e.layout.bottom = 1, e.layout.right = 1)
                }));
                for (var d = e.inputList.every((function (e) {
                    return "AUDIO" === e.contentType
                })), u = 0; u < e.inputList.length; u++) {
                    var E = e.inputList[u];
                    if ("object" != typeof E.layout) return this.logger.error("zb.sh.ums input layout must be object"), r({
                        errorCode: n.ZegoRTCLogEvent.kZegoTaskMixStart.error.kParamError.code,
                        extendedData: n.ZegoRTCLogEvent.kZegoTaskMixStart.error.kParamError.message
                    }), !1;
                    if (!(s.ClientUtil.checkInteger(E.layout.top, !1) && s.ClientUtil.checkInteger(E.layout.bottom, !1) && s.ClientUtil.checkInteger(E.layout.left, !1) && s.ClientUtil.checkInteger(E.layout.right, !1))) return this.logger.error("zb.sh.ums top、left、bottom、right must be integer number"), r({
                        errorCode: n.ZegoRTCLogEvent.kZegoTaskMixStart.error.kParamError.code,
                        extendedData: n.ZegoRTCLogEvent.kZegoTaskMixStart.error.kParamError.message
                    }), !1
                }
                if (!e.outputList || 0 == e.outputList.length) return this.logger.error("zb.sh.ums no output list found"), r({
                    errorCode: n.ZegoRTCLogEvent.kZegoTaskMixStart.error.kOutputListNullError.code,
                    extendedData: n.ZegoRTCLogEvent.kZegoTaskMixStart.error.kOutputListNullError.message
                }), !1;
                if (e.outputList.some((function (e) {
                    return "string" == typeof e && !s.ClientUtil.isUrl(e) && !s.ClientUtil.checkIllegalCharacters(e) || "object" == typeof e && e.target && !s.ClientUtil.isUrl(e.target) && !s.ClientUtil.checkIllegalCharacters(e.target)
                }))) return this.logger.error("zb.sh.ums stream output target is incorrect"), r({
                    errorCode: n.ZegoRTCLogEvent.kZegoTaskMixStart.error.kOutputTargetInvalidError.code,
                    extendedData: n.ZegoRTCLogEvent.kZegoTaskMixStart.error.kOutputTargetInvalidError.message
                }), !1;
                if (!(d || e.outputConfig && "object" == typeof e.outputConfig)) return this.logger.error("zb.sh.ums no output config found"), r({
                    errorCode: n.ZegoRTCLogEvent.kZegoTaskMixStart.error.kOutputNoTargetError.code,
                    extendedData: n.ZegoRTCLogEvent.kZegoTaskMixStart.error.kOutputNoTargetError.message
                }), !1;
                if (d && (void 0 === e.outputConfig && (e.outputConfig = {
                    outputBitrate: 0,
                    outputFPS: 0,
                    outputWidth: 0,
                    outputHeight: 0
                }), e.outputConfig.outputBitrate = .001, e.outputConfig.outputFPS = 1, e.outputConfig.outputWidth = 1, e.outputConfig.outputHeight = 1), !(d || e.outputConfig.outputBitrate && s.ClientUtil.checkInteger(e.outputConfig.outputBitrate))) return this.logger.error("zb.sh.ums bitrate param is required and must be integer number"), r({
                    errorCode: n.ZegoRTCLogEvent.kZegoTaskMixStart.error.kParamError.code,
                    extendedData: n.ZegoRTCLogEvent.kZegoTaskMixStart.error.kParamError.message
                }), !1;
                if (!e.outputConfig.outputFPS || !s.ClientUtil.checkInteger(e.outputConfig.outputFPS)) return this.logger.error("zb.sh.ums fps param is required and must be integer number"), r({
                    errorCode: n.ZegoRTCLogEvent.kZegoTaskMixStart.error.kParamError.code,
                    extendedData: n.ZegoRTCLogEvent.kZegoTaskMixStart.error.kParamError.message
                }), !1;
                if (!e.outputConfig.outputWidth || !s.ClientUtil.checkInteger(e.outputConfig.outputWidth)) return this.logger.error("zb.sh.ums width param is required and must be integer number"), r({
                    errorCode: n.ZegoRTCLogEvent.kZegoTaskMixStart.error.kParamError.code,
                    extendedData: n.ZegoRTCLogEvent.kZegoTaskMixStart.error.kParamError.message
                }), !1;
                if (!e.outputConfig.outputHeight || !s.ClientUtil.checkInteger(e.outputConfig.outputHeight)) return this.logger.error("zb.sh.ums height param is required and must be integer number"), r({
                    errorCode: n.ZegoRTCLogEvent.kZegoTaskMixStart.error.kParamError.code,
                    extendedData: n.ZegoRTCLogEvent.kZegoTaskMixStart.error.kParamError.message
                }), !1;
                if (void 0 !== e.outputConfig.outputAudioCodecID && !s.ClientUtil.checkInteger(e.outputConfig.outputAudioCodecID, !1)) return this.logger.error("zb.sh.ums AudioCodecID param must be integer number"), r({
                    errorCode: n.ZegoRTCLogEvent.kZegoTaskMixStart.error.kParamError.code,
                    extendedData: n.ZegoRTCLogEvent.kZegoTaskMixStart.error.kParamError.message
                }), !1;
                if (void 0 !== e.outputConfig.outputAudioBitrate && !s.ClientUtil.checkInteger(e.outputConfig.outputAudioBitrate)) return this.logger.error("zb.sh.ums AudioBitrate param must be integer number"), r({
                    errorCode: n.ZegoRTCLogEvent.kZegoTaskMixStart.error.kParamError.code,
                    extendedData: n.ZegoRTCLogEvent.kZegoTaskMixStart.error.kParamError.message
                }), !1;
                if (void 0 !== e.outputConfig.outputAudioChannels && !s.ClientUtil.checkInteger(e.outputConfig.outputAudioChannels, !1)) return this.logger.error("zb.sh.ums AudioChannels param must be integer number"), r({
                    errorCode: n.ZegoRTCLogEvent.kZegoTaskMixStart.error.kParamError.code,
                    extendedData: n.ZegoRTCLogEvent.kZegoTaskMixStart.error.kParamError.message
                }), !1;
                var g = 0;
                e.outputConfig.singleStreamPassThrough && "boolean" == typeof e.outputConfig.singleStreamPassThrough && (g = e.outputConfig.singleStreamPassThrough ? 1 : 0);
                var c = {
                    task_id: e.taskID,
                    id_name: this.stateCenter.idName,
                    live_channel: this.roomID,
                    appid: this.stateCenter.appid,
                    version: o.PROTO_VERSION,
                    bypass: g
                }, h = this.stateCenter.mixStreamAdvance;
                h && (h.videoCodec && (c.extra_params = [{
                    key: "video_encode",
                    value: h.videoCodec
                }]), h.backgroundColor && (c.output_bg_color = h.backgroundColor), h.backgroundImage && (c.output_bg_image = h.backgroundImage), h.waterMark && (c.watermark = h.waterMark), h.extraParams && (!c.extra_params && (c.extra_params = []), (l = c.extra_params).push.apply(l, h.extraParams)));
                var T = [];
                for (u = 0; u < e.inputList.length; u++) {
                    var m = e.inputList[u], p = m.streamID;
                    this.stateCenter.testEnvironment && (p = "zegotest-" + this.stateCenter.appid + "-" + m.streamID), T.push({
                        stream_id: p,
                        content_control: "AUDIO" === m.contentType ? 1 : 0,
                        rect: {
                            layer: u,
                            top: m.layout.top,
                            left: m.layout.left,
                            bottom: m.layout.bottom,
                            right: m.layout.right
                        }
                    })
                }
                c.MixInput = T, s.ClientUtil.actionSuccessCallback("kZegoTaskMixStart" + e.taskID, this.stateCenter.reportList) && s.ClientUtil.actionSuccessCallback("kZegoTaskMixStart" + e.taskID, this.stateCenter.reportList)(i.REPORT_ACTION.addMsgInfo, void 0, {
                    mix_stream_id: n.ZegoRTCLogEvent.kZegoTaskMixStart.mix_stream_id(e.taskID),
                    stream_cnt: n.ZegoRTCLogEvent.kZegoTaskMixStart.stream_cnt(T.length),
                    input_stream_list: n.ZegoRTCLogEvent.kZegoTaskMixStart.input_stream_list(T)
                });
                var R = [];
                e.outputList.forEach((function (t) {
                    var o = {}, s = "";
                    if ("string" == typeof t) s = t; else {
                        if ("object" != typeof t || !t.target) return _.logger.error("zb.sh.ums output target required"), r({
                            errorCode: n.ZegoRTCLogEvent.kZegoTaskMixStart.error.kOutputTargetInvalidError.code,
                            extendedData: n.ZegoRTCLogEvent.kZegoTaskMixStart.error.kOutputTargetInvalidError.message
                        }), !1;
                        s = t.target
                    }
                    s.startsWith("rtmp://") || s.startsWith("https://") && s.endsWith(".flv") || s.startsWith("https://") && s.endsWith(".m3u8") ? o.mixurl = s : _.stateCenter.testEnvironment ? o.stream_id = "zegotest-" + _.stateCenter.appid + "-" + s : o.stream_id = s, o.bitrate = 1e3 * e.outputConfig.outputBitrate, o.fps = e.outputConfig.outputFPS, o.width = e.outputConfig.outputWidth, o.height = e.outputConfig.outputHeight, e.outputConfig.outputAudioCodecID && (o.audio_enc_id = e.outputConfig.outputAudioCodecID), "vp8" === h.videoCodec ? o.audio_enc_id = 3 : "h264" === h.videoCodec && (o.audio_enc_id = 0), e.outputConfig.outputAudioBitrate && (o.audio_bitrate = 1e3 * e.outputConfig.outputAudioBitrate), e.outputConfig.outputAudioChannels && (o.audio_channel_cnt = e.outputConfig.outputAudioChannels), _.stateCenter.testEnvironment ? o.testenv = 1 : o.testenv = 0, R.push(o)
                })), c.MixOutput = R, s.ClientUtil.actionSuccessCallback("kZegoTaskMixStart" + e.taskID, this.stateCenter.reportList) && s.ClientUtil.actionSuccessCallback("kZegoTaskMixStart" + e.taskID, this.stateCenter.reportList)(i.REPORT_ACTION.addMsgInfo, void 0, {output_target_list: n.ZegoRTCLogEvent.kZegoTaskMixStart.output_target_list(R)});
                var S = {channel: "zeus", cmd: "start_mix", req_body: JSON.stringify(c)};
                return this.logger.debug("zb.sh.ums send command"), this.sendBizChannelRequest(S, (function (e, i, n) {
                    _.logger.debug("zb.sh.ums receive message");
                    var a = "zegotest-" + _.stateCenter.appid + "-";
                    if (0 != n.length) {
                        for (var l = JSON.parse(n), d = [], u = 0; u < l.play.length; u++) {
                            var E = {rtmpURL: "", hlsURL: "", flvURL: ""}, g = l.play[u].stream_alias || "";
                            _.stateCenter.testEnvironment && g && g.startsWith(a) && (g = g.slice(a.length)), E.streamID = g, l.play[u].rtmp_url && l.play[u].rtmp_url.length > 0 && (E.rtmpURL = l.play[u].rtmp_url), l.play[u].hls_url && l.play[u].hls_url.length > 0 && (E.hlsURL = l.play[u].hls_url), l.play[u].hdl_url && l.play[u].hdl_url.length > 0 && (E.flvURL = l.play[u].hdl_url), d.push(E)
                        }
                        if (t) {
                            var c = {mixerOutputList: d};
                            t({errorCode: 0, extendedData: JSON.stringify(c)})
                        }
                    } else r && r({
                        errorCode: s.ClientUtil.getServerError(o.MIXSTREAM_ERROR_CODE + 1).code,
                        extendedData: ""
                    })
                }), (function (e, t, o) {
                    if ("number" == typeof e) {
                        _.logger.debug("zb.sh.ums error: " + e);
                        var i = [];
                        if (1000000150 == e && 0 != o.length) for (var l = JSON.parse(o), d = "zegotest-" + _.stateCenter.appid + "-", u = 0; u < l.non_exist_streams.length; u++) {
                            var E = l.non_exist_streams[u];
                            _.stateCenter.testEnvironment && E.startsWith(d) ? i.push(E.slice(d.length)) : i.push(E)
                        }
                        r && r({errorCode: s.ClientUtil.getServerError(e).code, extendedData: ""})
                    } else {
                        _.logger.debug("zb.sh.ums error code " + e.code);
                        var g = void 0;
                        g = e == a.errorCodeList.TIMEOUT ? n.ZegoRTCLogEvent.kZegoTaskMixStart.error.kRequestError : n.ZegoRTCLogEvent.kZegoTaskMixStart.error.kInternalError, r && r({
                            errorCode: g.code,
                            extendedData: g.message
                        })
                    }
                })), !0
            }, e.prototype.sendBizChannelRequest = function (e, t, r, o) {
                var s = this;
                void 0 === o && (o = !1), e = Object.assign(e, {is_retry_req: o ? 1 : 0});
                var i = this.room;
                this.rtm.service.sendMessage("biz_channel", e, (function (e, r) {
                    t(e.header.seq, e.body.cmd, e.body.rsp_body)
                }), (function (o, i) {
                    var n = o.body.err_code, a = o.body.rsp_body;
                    "number" != typeof n || 2002 !== n ? r(n, i, a) : s.sendBizChannelRequest(e, t, r, !0)
                }), void 0, {
                    roomID: null == i ? void 0 : i.roomID,
                    sessionID: null == i ? void 0 : i.sessionID,
                    roomSessionID: null == i ? void 0 : i.roomSessionID
                })
            }, e.prototype.setMixerTaskConfig = function (e) {
                var t = this;
                return new Promise((function (r, o) {
                    var a, l = {}, _ = {};
                    if (e && e.videoCodec) {
                        var d = e.videoCodec.toLowerCase();
                        if (-1 == ["vp8", "h264"].indexOf(d)) return t.logger.error("zb.sh.ums param videoCode error"), o({
                            errorCode: n.ZegoRTCLogEvent.kZegoTaskMixConfig.error.kVideoConfigInvalidError.code,
                            extendedData: n.ZegoRTCLogEvent.kZegoTaskMixConfig.error.kVideoConfigInvalidError.message
                        }), !1;
                        l.videoCodec = d, _.video_codec = d
                    }
                    if (e.backgroundColor) {
                        if (!s.ClientUtil.checkInteger(e.backgroundColor)) return t.logger.error("zb.sh.ums param backgroundColor must be integer number"), o({
                            errorCode: n.ZegoRTCLogEvent.kZegoTaskMixConfig.error.kParamError.code,
                            extendedData: n.ZegoRTCLogEvent.kZegoTaskMixConfig.error.kParamError.message
                        }), !1;
                        l.backgroundColor = e.backgroundColor, _.background_color = e.backgroundColor
                    }
                    if (e.backgroundImage) {
                        if ("string" != typeof e.backgroundImage) return t.logger.error("zb.sh.ums param outputBgImage error"), o({
                            errorCode: n.ZegoRTCLogEvent.kZegoTaskMixConfig.error.kParamError.code,
                            extendedData: n.ZegoRTCLogEvent.kZegoTaskMixConfig.error.kParamError.message
                        }), !1;
                        if (!e.backgroundImage.startsWith("preset-id://") || !e.backgroundImage.endsWith(".jpg") && !e.backgroundImage.endsWith(".png")) return t.logger.error("zb.sh.ums illegal input background image URL"), o({
                            errorCode: n.ZegoRTCLogEvent.kZegoTaskMixConfig.error.kBackgroundImageUrlInvalidError.code,
                            extendedData: n.ZegoRTCLogEvent.kZegoTaskMixConfig.error.kBackgroundImageUrlInvalidError.message
                        }), !1;
                        l.backgroundImage = e.backgroundImage, _.background_image = e.backgroundImage
                    }
                    e.waterMark && (l.waterMark = e.waterMark, _.water_mark = e.waterMark), e.extraParams && (l.extraParams || (l.extraParams = []), (a = l.extraParams).push.apply(a, e.extraParams)), t.stateCenter.mixStreamAdvance = l, s.ClientUtil.actionSuccessCallback("kZegoTaskMixConfig", t.stateCenter.reportList) && s.ClientUtil.actionSuccessCallback("kZegoTaskMixConfig", t.stateCenter.reportList)(i.REPORT_ACTION.addMsgInfo, void 0, {config: n.ZegoRTCLogEvent.kZegoTaskMixConfig.config(_)}), r({
                        errorCode: 0,
                        extendedData: ""
                    })
                }))
            }, e.prototype.stopMixStream = function (e, t, r, i, l) {
                var _ = this;
                this.logger.info("zb.sh.sms call");
                var d = {
                    id_name: this.stateCenter.idName,
                    live_channel: this.roomID,
                    appid: this.stateCenter.appid,
                    version: o.PROTO_VERSION
                };
                "string" == typeof e && (d.task_id = e), null != i ? this.stateCenter.testEnvironment ? d.stream_id = "zegotest-" + this.stateCenter.appid + "-" + i : d.stream_id = i : null != l && (d.mixurl = l);
                var u = {channel: "zeus", cmd: "stop_mix", req_body: JSON.stringify(d)};
                return this.sendBizChannelRequest(u, (function () {
                    t && t({errorCode: 0})
                }), (function (e) {
                    if ("number" == typeof e) r && r({
                        errorCode: s.ClientUtil.getServerError(o.MIXSTREAM_ERROR_CODE + e).code,
                        extendedData: ""
                    }); else {
                        _.logger.error("zb.sh.sms stop mix fail " + JSON.stringify(e));
                        var t = void 0;
                        t = e == a.errorCodeList.TIMEOUT ? n.ZegoRTCLogEvent.kZegoTaskMixStop.error.kRequestError : n.ZegoRTCLogEvent.kZegoTaskMixStop.error.kInternalError, r && r({
                            errorCode: t.code,
                            extendedData: t.message
                        })
                    }
                })), !0
            }, e.prototype.updateStreamExtraInfo = function (e, t, r, s) {
                var i;
                this.logger.info("zb.sh.usei call"), i = "PUBLIC" === this.stateCenter.type ? o.ENUM_STREAM_SUB_CMD.liveUpdate : o.ENUM_STREAM_CMD_PRI.liveUpdate, this.stateCenter.publishStreamList[e] && this.stateCenter.publishStreamList[e].state >= o.ENUM_PUBLISH_STREAM_STATE.update_info ? (this.stateCenter.publishStreamList[e].extra_info = t, this.updateStreamInfo(e, i, t), r({errorCode: 0})) : s(n.ZegoRTCLogEvent.kZegoTaskLiveRoomSendStreamExtraInfo.error.kUpdateStreamInfoFailError)
            }, e.prototype.setStreamExtraInfo = function (e, t, r, o) {
                this.updateStreamExtraInfo(e, t, r, o)
            }, e.prototype._publishTarget = function (e, t, r) {
                var s = this;
                this.logger.info("zb.sh.ptcall");
                var i = Math.ceil((new Date).getTime() / 1e3), l = e.streamID;
                this.stateCenter.testEnvironment && (l = "zegotest-" + this.stateCenter.appid + "-" + e.streamID);
                var _ = {
                    appid: this.stateCenter.appid,
                    biz_type: 0,
                    timestamp: i,
                    seq: this.stateCenter.cdnSeq++,
                    version: 1 * o.PROTO_VERSION,
                    stream_id: l,
                    pushurl: e.pushUrl
                }, d = {channel: "media", cmd: e.type, req_body: JSON.stringify(_)};
                this.logger.debug("zb.sh.pt send command"), this.sendBizChannelRequest(d, (function (o, i, l) {
                    if (s.logger.info("zb.sh.pt receive message"), 0 != l.length) {
                        var _ = JSON.parse(l), d = _.code, u = _.message;
                        d && 0 != d ? (s.logger.error("zb.sh.pt " + e.type + " error code: " + d + " " + u), r(a.errorCodeList.UNKNOWN_SERVER_ERROR, " cmd: " + e.type + " " + d + " " + u)) : (s.logger.info("zb.sh.pt " + e.type + " success"), t && t({
                            errorCode: 0,
                            extendedData: ""
                        }))
                    } else r(n.ZegoRTCLogEvent.kZegoTaskPublishTarget.error.kNoResponseError)
                }), (function (t, o, i) {
                    s.logger.info("zb.sh.pt error: " + t);
                    var a = n.ZegoRTCLogEvent.kZegoTaskPublishTarget.error.kUnknownServerError;
                    2001 == t ? n.ZegoRTCLogEvent.kZegoTaskPublishTarget.error.kInvalidChannelError : 2002 == t && (a = n.ZegoRTCLogEvent.kZegoTaskPublishTarget.error.kBizChannelError), s.logger.error("zb.sh.pt "), r(a, " cmd: " + e.type + " " + t + "   ")
                }))
            }, e.prototype.patchStreamList = function (e) {
                var t = this;
                e.body.stream_seq === this.streamSeq || this.streamSeqMergeMap || (this.logger.info(l.ZEGO_WEBRTC_ACTION.STREAMHANDLER_PATCH_STREAM_LIST + " call update stream " + this.streamSeq + " server " + e.body.stream_seq), this.streamSeqMergeTimer && clearTimeout(this.streamSeqMergeTimer), this.streamSeqMergeTimer = setTimeout((function () {
                    t.handleMergeTimeout()
                }), this.streamListHBMergeInterval)), this.minStreamSeq = e.body.stream_seq
            }, e.prototype.mergeStreamByStreamSeq = function (e, t, r) {
                var o = this;
                this.streamSeqMergeMap || (this.logger.warn(l.ZEGO_WEBRTC_ACTION.STREAMHANDLER_MERGE_STREAM_BY_STREAM_SEQ + " new merge stream list " + this.streamSeq + " server " + t), this.streamSeqMergeMap = {}, this.streamSeqMergeTimer && clearTimeout(this.streamSeqMergeTimer), this.streamSeqMergeTimer = setTimeout((function () {
                    o.handleMergeTimeout()
                }), this.streamListMergeInterval)), this.logger.info(l.ZEGO_WEBRTC_ACTION.STREAMHANDLER_MERGE_STREAM_BY_STREAM_SEQ + " " + this.streamSeqMergeMap + " " + e + " " + t + " " + r), this.streamSeqMergeMap[t] = {
                    cmd: e,
                    streamList: r
                }
            }, e.prototype.handleMergeTimeout = function () {
                if (this.streamSeqMergeMap) {
                    var e = Object.keys(this.streamSeqMergeMap).map((function (e) {
                        return +e
                    })).sort((function (e, t) {
                        return e - t
                    }));
                    e[e.length - 1] - e[0] + 1 === e.length || e[e.length - 1] >= this.minStreamSeq ? this.mergeStream(e) : (this.streamSeqMergeMap = null, this.fetchStreamList())
                }
            }, e.prototype.mergeStream = function (e) {
                var t = this;
                this.logger.info(l.ZEGO_WEBRTC_ACTION.STREAMHANDLER_MERGE_STREAM + " merge streamList " + this.streamSeq + " streamSeqList " + e.join(","));
                var r = e[e.length - 1], s = [];
                e.forEach((function (e) {
                    if (t.streamSeqMergeMap && t.streamSeqMergeMap[e]) switch (t.streamSeqMergeMap[e].cmd) {
                        case o.ENUM_STREAM_UPDATE_CMD.added:
                            t.streamSeqMergeMap[e].streamList.forEach((function (e) {
                                var t = s.findIndex((function (t) {
                                    return t.stream_id == e.stream_id
                                }));
                                -1 !== t && s.splice(t), s.push(e)
                            }));
                            break;
                        case o.ENUM_STREAM_UPDATE_CMD.deleted:
                            t.streamSeqMergeMap[e].streamList.forEach((function (e) {
                                var t = s.findIndex((function (t) {
                                    return t.stream_id == e.stream_id
                                }));
                                -1 !== t && s.splice(t)
                            }));
                            break;
                        case o.ENUM_STREAM_UPDATE_CMD.updated:
                            t.streamSeqMergeMap[e].streamList.forEach((function (e) {
                                var t = s.findIndex((function (t) {
                                    return t.stream_id == e.stream_id
                                }));
                                -1 !== t && s.splice(t), s.push(e)
                            }))
                    }
                })), this.streamSeqMergeMap = null, this.logger.info(l.ZEGO_WEBRTC_ACTION.STREAMHANDLER_MERGE_STREAM + " " + s), this.handleFullUpdateStream(r, s)
            }, e.prototype.reset = function () {
                this.minStreamSeq = 0, this.streamSeqMergeMap = null, this.streamSeqMergeTimer && (clearTimeout(this.streamSeqMergeTimer), this.streamSeqMergeTimer = void 0), this.streamListHBMergeInterval = 2e3, this.streamListMergeInterval = 5e3
            }, e.prototype.getRoomInfo = function () {
                var e = this;
                return new Promise((function (t, r) {
                    if (e.rtm.isLogin(e.roomID)) {
                        var o = function (e, o) {
                            if (0 !== e.body.code) r({errorCode: e.body.code, extendData: e.body.message}); else {
                                var s = e.body.streams_info.map((function (e) {
                                    return {
                                        streamID: e.stream_id,
                                        user: {userID: e.user_id, userName: e.user_name},
                                        extraInfo: e.extra_info
                                    }
                                }));
                                t({streamList: s})
                            }
                        }, s = {
                            room_header: {
                                room_id: e.roomID,
                                room_sid: e.rtm.getRoomSid() || "0",
                                room_user_session_id: e.rtm.getRoomSessionID() || "0"
                            }
                        };
                        e.rtm.service.sendMessage("zegochat_js.room_info_req", s, o, o)
                    } else e.logger.error("zn.rh.gri no enter room")
                }))
            }, e
        }();
        t.StreamHandler = _
    }, function (e, t, r) {
        "use strict";
        var o = this && this.__assign || function () {
            return (o = Object.assign || function (e) {
                for (var t, r = 1, o = arguments.length; r < o; r++) for (var s in t = arguments[r]) Object.prototype.hasOwnProperty.call(t, s) && (e[s] = t[s]);
                return e
            }).apply(this, arguments)
        };
        Object.defineProperty(t, "__esModule", {value: !0}), t.PublishModule = void 0;
        var s = r(0), i = r(0), n = r(2), a = r(1), l = r(3), _ = function () {
            function e(e, t, r, o, s) {
                this.logger = e, this.dataReport = t, this.stateCenter = r, this.streamCenter = o, this.rtm = s, this.preferPublishSourceType = i.ENUM_DISPATCH_TYPE.ultra, this.ultraPlaySourceType = "rtmp_v2"
            }

            return e.prototype.startPublishingStream = function (e, t) {
                var r = this;
                return new Promise((function (s, _) {
                    r.logger.info(n.ZEGO_WECHATMINI_ACTION.PUBLISHMODULE_START_PUBLISHING_STREAM + " call");
                    var d = i.getReportSeq();
                    r.stateCenter.reportSeqList.startPublish[e] = d, r.dataReport.newReport(d, a.ZegoWechatLogEvent.kZegoTaskPublishStart.event);
                    var u = function (t, s) {
                        r.logger.error(n.ZEGO_WECHATMINI_ACTION.PUBLISHMODULE_START_PUBLISHING_STREAM + " " + (s || t.message)), r.dataReport.uploadReport(d, void 0, t, s), delete r.stateCenter.reportSeqList.startPublish[e], _(o(o({}, t), {
                            errorCode: t.code,
                            extendedData: t.message + (s ? " " + s : "")
                        }))
                    };
                    if (l.ClientUtil.isParamEmpty(e)) if (l.ClientUtil.isTypeString(e)) {
                        if (!l.ClientUtil.isTooLong(e, i.MAX_STREAM_ID_LENGTH)) return u(a.ZegoWechatLogEvent.kZegoTaskPublishStart.error.kPublishStreamIDTooLongError), !1;
                        if (!l.ClientUtil.checkIllegalCharacters(e)) return u(a.ZegoWechatLogEvent.kZegoTaskPublishStart.error.kPublishStreamIDInvalidCharacterError), !1;
                        if (r.stateCenter.isMultiRoom && (!t || "string" != typeof t.roomID || "" == t.roomID)) return u(a.ZegoWechatLogEvent.kZegoTaskPublishStart.error.kPublishParamError, "  roomID is need if set multi room"), !1;
                        var E = (null == t ? void 0 : t.roomID) ? t.roomID : r.stateCenter.roomList[0].roomID,
                            g = r.stateCenter.getRoomByRoomID(E);
                        if (r.dataReport.addMsgInfo(d, {publish_room_id: E}), g) {
                            if (r.stateCenter.customUrl && 0 != r.stateCenter.customUrl.length) return r.stateCenter.publishStreamList[e] = {
                                state: i.ENUM_PUBLISH_STREAM_STATE.waiting_url,
                                extra_info: t && t.extraInfo ? t.extraInfo : null
                            }, r.streamCenter.updatePublishingState(g, e, t && t.streamParams ? t.streamParams : void 0, !0) ? (r.streamCenter.publishSuccessCallBackList[e] = function (e, t) {
                                s({streamID: e, url: t})
                            }, r.streamCenter.startPublishingStream(e, r.stateCenter.customUrl, 1)) : void u(a.ZegoWechatLogEvent.kZegoTaskPublishStart.error.kIsPublishing, "cannot start publish");
                            if (r.rtm.service.isDisConnect()) u(a.ZegoWechatLogEvent.kZegoTaskPublishStart.error.kPublishNoLoginError); else {
                                if (!r.streamCenter.updatePublishingState(g, e, t && t.streamParams ? t.streamParams : void 0, !0)) return u(a.ZegoWechatLogEvent.kZegoTaskPublishStart.error.kIsPublishing, "cannot start publish"), !1;
                                l.ClientUtil.logReportCallback("kZegoTaskPublishStart" + e, r.dataReport, d, r.stateCenter.reportList), g.streamHandler.onPublishStateUpdate(i.ENUM_PUBLISH_STATE_UPDATE.retry, e, {
                                    code: 0,
                                    message: ""
                                }), r.dataReport.addMsgInfo(d, {
                                    stream: a.ZegoWechatLogEvent.kZegoTaskPublishStart.stream(e),
                                    publishOption: a.ZegoWechatLogEvent.kZegoTaskPublishStart.publishOption(t)
                                }), !t || "CDN" != t.sourceType && "BGP" != t.sourceType || r.setPreferPublishSourceType(i.ENUM_SOURCE_TYPE[t.sourceType]), r.stateCenter.publishStreamList[e] = {
                                    state: i.ENUM_PUBLISH_STREAM_STATE.waiting_url,
                                    extra_info: t && t.extraInfo ? t.extraInfo : null
                                }, r.logger.info(n.ZEGO_WECHATMINI_ACTION.PUBLISHMODULE_START_PUBLISHING_STREAM + " fetch stream url"), l.ClientUtil.actionLogReportCallback("kZegoTaskPublishStart" + e, r.stateCenter.reportList, i.REPORT_ACTION.eventStart, "get_publish_url"), r.streamCenter.publishSuccessCallBackList[e] = function (e, t) {
                                    l.ClientUtil.actionLogReportCallback("kZegoTaskPublishStart" + e, r.stateCenter.reportList, i.REPORT_ACTION.eventEnd, "get_publish_url"), s({
                                        streamID: e,
                                        url: t
                                    })
                                }, r.streamCenter.publishErrorCallBackList[e] = function (e) {
                                    u(e)
                                }, r.fetchPublishStreamUrl(e, g)
                            }
                        } else u(a.ZegoWechatLogEvent.kZegoTaskPublishStart.error.kPublishParamError, "room no found")
                    } else u(a.ZegoWechatLogEvent.kZegoTaskPublishStart.error.kPublishParamError); else u(a.ZegoWechatLogEvent.kZegoTaskPublishStart.error.kPublishStreamIDNullError)
                }))
            }, e.prototype.setPreferPublishSourceType = function (e, t) {
                return this.logger.info(n.ZEGO_WECHATMINI_ACTION.PUBLISHMODULE_SET_PREFER_PUBLISH_SOURCE_TYPE + " call"), e !== i.ENUM_DISPATCH_TYPE.cdn && e !== i.ENUM_DISPATCH_TYPE.ultra && e !== i.ENUM_DISPATCH_TYPE.customUrl ? (this.logger.error(n.ZEGO_WECHATMINI_ACTION.PUBLISHMODULE_SET_PREFER_PUBLISH_SOURCE_TYPE + " sourceType only can be number 0 1 2"), !1) : e !== i.ENUM_DISPATCH_TYPE.customUrl || "string" == typeof t && "" != t ? (this.preferPublishSourceType = e, this.customCdnUrl = t, this.logger.info(n.ZEGO_WECHATMINI_ACTION.PUBLISHMODULE_SET_PREFER_PUBLISH_SOURCE_TYPE + " call success"), !0) : (this.logger.error(n.ZEGO_WECHATMINI_ACTION.PUBLISHMODULE_SET_PREFER_PUBLISH_SOURCE_TYPE + " customUrl must be string and not empty"), !1)
            }, e.prototype.fetchPublishStreamUrl = function (e, t) {
                var r = this;
                this.logger.info(n.ZEGO_WECHATMINI_ACTION.PUBLISHMODULE_FETCH_PUBLISH_STREAM_URL + " call"), this.logger.info(n.ZEGO_WECHATMINI_ACTION.PUBLISHMODULE_FETCH_PUBLISH_STREAM_URL + " send fetch publish request");
                var o, s = "";
                this.preferPublishSourceType == i.ENUM_DISPATCH_TYPE.cdn ? s = "cdn" : this.preferPublishSourceType == i.ENUM_DISPATCH_TYPE.ultra && (s = "bgp"), o = "PUBLIC" === this.stateCenter.type ? {
                    stream_id: e,
                    url_type: this.ultraPlaySourceType,
                    publish_type: s,
                    header_kvs: [{key: "grpc-metadata-push", value: this.customCdnUrl || ""}]
                } : {stream_id: e, dispatch_type: 1, stream_type: 2, an_type: this.rtm.stateCenter.priModules.anType};
                var l = this.rtm.service.sendMessage("PRIVATE" === this.stateCenter.type ? "zegochat_js.stream_dispatch_req" : "stream_publish", o, (function (e) {
                    r.handleFetchStreamPublishUrlRsp(e)
                }), (function (o, s) {
                    r.streamCenter.publishErrorCallBackList[e](a.ZegoWechatLogEvent.kZegoTaskPublishStart.error.kPublishDispatchError), t.streamHandler.onPublishStateUpdate(i.ENUM_PUBLISH_STATE_UPDATE.error, e, a.ZegoWechatLogEvent.kZegoTaskPublishStart.error.kPublishDispatchError), r.streamCenter.stopPublishingStream(e)
                }), void 0, {sessionID: t.sessionID, roomID: t.roomID, roomSessionID: t.roomSessionID});
                -1 !== l && (this.stateCenter.streamUrlMap[l] = e), this.logger.info(n.ZEGO_WECHATMINI_ACTION.PUBLISHMODULE_FETCH_PUBLISH_STREAM_URL + " call success")
            }, e.prototype.handleFetchStreamPublishUrlRsp = function (e) {
                var t;
                this.logger.info(n.ZEGO_WECHATMINI_ACTION.PUBLISHMODULE_HANDLE_FETCH_STREAM_PUBLISH_URL_RSP + " call");
                var r = null === (t = null == e ? void 0 : e.header) || void 0 === t ? void 0 : t.room_id,
                    o = this.stateCenter.getRoomByRoomID(r);
                if (o) {
                    var s = this.stateCenter.streamUrlMap[e.header.seq];
                    s && delete this.stateCenter.streamUrlMap[e.header.seq];
                    var l = "PUBLIC" === this.stateCenter.type ? e.body.err_code : e.body.code;
                    if (0 !== l) return this.logger.info(n.ZEGO_WECHATMINI_ACTION.PUBLISHMODULE_HANDLE_FETCH_STREAM_PUBLISH_URL_RSP + " server error= " + l), void (this.stateCenter.publishStreamList[s] && (this.logger.error(n.ZEGO_WECHATMINI_ACTION.PUBLISHMODULE_HANDLE_FETCH_STREAM_PUBLISH_URL_RSP + " liveRoom cmd error"), this.streamCenter.publishErrorCallBackList[s](a.ZegoWechatLogEvent.kZegoTaskPublishStart.error.kPublishDispatchError), o.streamHandler.onPublishStateUpdate(i.ENUM_PUBLISH_STATE_UPDATE.error, s, {
                        code: a.ZegoWechatLogEvent.kZegoTaskPublishStart.error.kPublishDispatchError.code,
                        message: "server error= " + l
                    }), this.streamCenter.stopPublishingStream(s)));
                    if (e.body.stream_url_info) {
                        var _ = "PUBLIC" === this.stateCenter.type ? e.body.stream_url_info.stream_id : e.body.stream_id,
                            d = [];
                        if ("PUBLIC" === this.stateCenter.type) d = e.body.stream_url_info.urls_ws; else {
                            var u = e.body.stream_url_info.stream_url, E = e.body.stream_url_info.ip_infos,
                                g = /^rtmp:\/\/(.*?)\/.*({.*})/;
                            E.forEach((function (e) {
                                var t = e.ip_address + ":" + e.port, r = u.replace(g.exec(u)[1], t);
                                r = r.replace(g.exec(u)[2], _), d.push(r)
                            }))
                        }
                        if (!this.stateCenter.publishStreamList[_]) return void this.logger.error(n.ZEGO_WECHATMINI_ACTION.PUBLISHMODULE_HANDLE_FETCH_STREAM_PUBLISH_URL_RSP + " cannot find stream");
                        this.stateCenter.publishStreamList[_].url_rtmp = d, this.stateCenter.publishStreamList[_].state = i.ENUM_PUBLISH_STREAM_STATE.tryPublish, this.doPublishStream(_, d, o)
                    }
                } else this.logger.error(n.ZEGO_WECHATMINI_ACTION.PUBLISHMODULE_HANDLE_FETCH_STREAM_PUBLISH_URL_RSP + " room no found")
            }, e.prototype.doPublishStream = function (e, t, r) {
                return this.logger.info(n.ZEGO_WECHATMINI_ACTION.PUBLISHMODULE_DO_PUBLISH_STREAM + " call " + e + "streamUrl: " + t), !t || t.length <= 0 ? (this.streamCenter.publishErrorCallBackList[e](a.ZegoWechatLogEvent.kZegoTaskPublishStart.error.kPublishDispatchError), r.streamHandler.onPublishStateUpdate(i.ENUM_PUBLISH_STATE_UPDATE.error, e, a.ZegoWechatLogEvent.kZegoTaskPublishStart.error.kPublishDispatchError), !1) : (this.streamCenter.startPublishingStream(e, t, this.preferPublishSourceType), this.logger.info(n.ZEGO_WECHATMINI_ACTION.PUBLISHMODULE_DO_PUBLISH_STREAM + " call success"), !0)
            }, e.prototype.stopPublishingStream = function (e) {
                var t = this;
                this.logger.info(n.ZEGO_WECHATMINI_ACTION.PUBLISHMODULE_STOP_PUBLISHING_STREAM + " call " + e);
                var r = i.getReportSeq();
                this.dataReport.newReport(r, a.ZegoWechatLogEvent.kZegoTaskPublishStop.event), this.dataReport.addMsgInfo(r, {stream_id: e});
                var o = function (o, s) {
                    t.logger.error(n.ZEGO_WECHATMINI_ACTION.PUBLISHMODULE_STOP_PUBLISHING_STREAM + " " + (s || o.message)), t.dataReport.uploadReport(r, void 0, o, s), delete t.stateCenter.reportSeqList.startPublish[e]
                };
                if (!l.ClientUtil.isParamEmpty(e)) return o(a.ZegoWechatLogEvent.kZegoTaskPublishStart.error.kPublishStreamIDNullError), !1;
                if (!l.ClientUtil.isTypeString(e)) return this.logger.error(n.ZEGO_WECHATMINI_ACTION.PUBLISHMODULE_STOP_PUBLISHING_STREAM + " room no found"), !1;
                var _ = this.streamCenter.publisherList[e], d = null == _ ? void 0 : _.room;
                if (!d) return o(a.ZegoWechatLogEvent.kZegoTaskPublishStart.error.kPublishParamError, " room no found"), !1;
                if (_ && _.state !== i.ENUM_PLAYER_STATE.stop && d.streamHandler.onPublishStateUpdate(i.ENUM_PUBLISH_STATE_UPDATE.error, e, {
                    code: 0,
                    message: ""
                }), this.streamCenter.stopPublishingStream(e), this.stateCenter.publishStreamList[e]) {
                    if (this.stateCenter.publishStreamList[e].state >= i.ENUM_PUBLISH_STREAM_STATE.update_info) {
                        var u = void 0;
                        u = "PUBLIC" === this.stateCenter.type ? i.ENUM_STREAM_SUB_CMD.liveEnd : s.ENUM_STREAM_CMD_PRI.liveEnd, d.streamHandler.updateStreamInfo(e, u);
                        for (var E = 0; E < d.streamList.length; E++) if (d.streamList[E].stream_id == e) {
                            d.streamList.splice(E--, 1);
                            break
                        }
                    }
                    delete this.stateCenter.publishStreamList[e]
                }
                return this.stateCenter.streamUrlMap[e] && delete this.stateCenter.streamUrlMap[e], this.dataReport.uploadReport(r), this.logger.info(n.ZEGO_WECHATMINI_ACTION.PUBLISHMODULE_STOP_PUBLISHING_STREAM + " call success"), !0
            }, e
        }();
        t.PublishModule = _
    }, function (e, t, r) {
        "use strict";
        var o = this && this.__assign || function () {
            return (o = Object.assign || function (e) {
                for (var t, r = 1, o = arguments.length; r < o; r++) for (var s in t = arguments[r]) Object.prototype.hasOwnProperty.call(t, s) && (e[s] = t[s]);
                return e
            }).apply(this, arguments)
        };
        Object.defineProperty(t, "__esModule", {value: !0}), t.PlayModule = void 0;
        var s = r(0), i = r(1), n = r(3), a = r(2), l = function () {
            function e(e, t, r, o, i) {
                this.logger = e, this.dataReport = t, this.stateCenter = r, this.streamCenter = o, this.rtm = i, this.mixStreamList = {}, this.preferPlaySourceType = s.ENUM_PLAY_SOURCE_TYPE.ultra, this.ultraPlaySourceType = "rtmp_v2"
            }

            return e.prototype.startPlayingStream = function (e, t) {
                var r = this;
                return new Promise((function (l, _) {
                    r.logger.info(a.ZEGO_WECHATMINI_ACTION.PLAYMODULE_START_PLAYING_STREAM + " call " + e);
                    var d = s.getReportSeq();
                    r.stateCenter.reportSeqList.startPlay[e] = d, r.dataReport.newReport(d, i.ZegoWechatLogEvent.kZegoTaskPlayStart.event);
                    var u = function (t, s) {
                        r.logger.error(a.ZEGO_WECHATMINI_ACTION.PLAYMODULE_START_PLAYING_STREAM + " " + (s || t.message)), r.dataReport.uploadReport(d, void 0, t, s), delete r.stateCenter.reportSeqList.startPlay[e], _(o(o({}, t), {
                            errorCode: t.code,
                            extendedData: t.message + (s ? " " + s : "")
                        }))
                    };
                    if (n.ClientUtil.isParamEmpty(e)) if (n.ClientUtil.isTypeString(e)) if (n.ClientUtil.isTooLong(e, s.MAX_STREAM_ID_LENGTH)) if (n.ClientUtil.checkIllegalCharacters(e)) {
                        if (r.stateCenter.customPlayUrl && 0 != r.stateCenter.customPlayUrl.length) return r.streamCenter.updatePlayingState(e, t ? t.streamParams : void 0, !0) ? (r.streamCenter.playErrorCallBackList[e] = function (e) {
                            u(e)
                        }, r.streamCenter.startPlayingStream(e, r.stateCenter.customPlayUrl, 1)) : void u(i.ZegoWechatLogEvent.kZegoTaskPlayStart.error.kPlayStreamIDInvalidCharacterError, "cannot start play");
                        if (r.rtm.service.isDisConnect()) u(i.ZegoWechatLogEvent.kZegoTaskPlayStart.error.kPlayNoLoginError); else if (r.streamCenter.updatePlayingState(e, t ? t.streamParams : void 0, !0)) {
                            if (r.streamCenter.onPlayStateUpdate(s.ENUM_PLAY_STATE_UPDATE.retry, e, {
                                code: 0,
                                message: ""
                            }), n.ClientUtil.logReportCallback("kZegoTaskPlayStart" + e, r.dataReport, d, r.stateCenter.reportList), r.dataReport.addMsgInfo(d, {
                                stream: i.ZegoWechatLogEvent.kZegoTaskPlayStart.stream(e),
                                playOption: i.ZegoWechatLogEvent.kZegoTaskPlayStart.playOption(t)
                            }), r.streamCenter.playSuccessCallBackList[e] = function (e, t) {
                                n.ClientUtil.actionLogReportCallback("kZegoTaskPlayStart" + e, r.stateCenter.reportList, s.REPORT_ACTION.eventEnd, "get_play_url"), l({
                                    streamID: e,
                                    url: t
                                })
                            }, r.streamCenter.playErrorCallBackList[e] = function (t) {
                                n.ClientUtil.actionLogReportCallback("kZegoTaskPlayStart" + e, r.stateCenter.reportList, s.REPORT_ACTION.eventEnd, "get_play_url"), u(t)
                            }, t && t.isMix) return r.mixStreamList[e] = {ultra_url_rtmp: null}, void r.fetchPlayStreamUrl(e, "rtmp_cdn", s.ENUM_DISPATCH_TYPE.cdn);
                            n.ClientUtil.actionLogReportCallback("kZegoTaskPlayStart" + e, r.stateCenter.reportList, s.REPORT_ACTION.eventStart, "get_play_url"), t && "CDN" == t.sourceType || r.preferPlaySourceType === s.ENUM_PLAY_SOURCE_TYPE.cdn ? r.startPlayingStreamFromCDN(e) : r.startPlayingStreamFromBGP(e)
                        } else u(i.ZegoWechatLogEvent.kZegoTaskPlayStart.error.kPlayStreamIDInvalidCharacterError, "cannot start play")
                    } else u(i.ZegoWechatLogEvent.kZegoTaskPlayStart.error.kPlayStreamIDInvalidCharacterError); else u(i.ZegoWechatLogEvent.kZegoTaskPlayStart.error.kPlayStreamIDTooLongError); else u(i.ZegoWechatLogEvent.kZegoTaskPlayStart.error.kPlayParamError); else u(i.ZegoWechatLogEvent.kZegoTaskPlayStart.error.kPlayStreamIDNullError)
                }))
            }, e.prototype.stopPlayingStream = function (e) {
                this.logger.info(a.ZEGO_WECHATMINI_ACTION.PLAYMODULE_STOP_PLAYING_STREAM + " call " + e);
                var t = s.getReportSeq();
                if (this.dataReport.newReport(t, i.ZegoWechatLogEvent.kZegoTaskPlayStop.event), this.dataReport.addMsgInfo(t, {stream_id: e}), "string" != typeof e || "" == e) return this.logger.error(a.ZEGO_WECHATMINI_ACTION.PLAYMODULE_STOP_PLAYING_STREAM + " stream ID must be string and not empty"), this.dataReport.addMsgInfo(t, i.ZegoWechatLogEvent.kZegoTaskPlayStart.error.kPlayParamError), void this.dataReport.uploadReport(t);
                var r = this.streamCenter.playerList[e];
                for (var o in r && r.state !== s.ENUM_PLAYER_STATE.stop && this.streamCenter.onPlayStateUpdate(s.ENUM_PLAY_STATE_UPDATE.error, e, {
                    code: 0,
                    message: ""
                }), this.streamCenter.stopPlayingStream(e), this.stateCenter.streamUrlMap) if (this.stateCenter.streamUrlMap[o] === e) {
                    delete this.stateCenter.streamUrlMap[o];
                    break
                }
                this.mixStreamList[e] && delete this.mixStreamList[e], this.dataReport.uploadReport(t), this.logger.info(a.ZEGO_WECHATMINI_ACTION.PLAYMODULE_STOP_PLAYING_STREAM + " call success")
            }, e.prototype.startPlayingStreamFromCDN = function (e) {
                this.logger.info(a.ZEGO_WECHATMINI_ACTION.PLAYMODULE_START_PLAYING_STREAM_FROM_CDN + " call " + e);
                var t = this.stateCenter.getPlayRoom(e) || this.stateCenter.roomList[0];
                if (t) {
                    for (var r = null, o = 0; o < t.streamList.length; o++) if (t.streamList[o].stream_id === e) {
                        r = t.streamList[o].urls_rtmp || [];
                        break
                    }
                    return !r || r.length <= 0 ? (this.logger.error(a.ZEGO_WECHATMINI_ACTION.PLAYMODULE_START_PLAYING_STREAM_FROM_CDN + " cannot find stream url,Please check if CDN is configured "), this.streamCenter.onPlayStateUpdate(s.ENUM_PLAY_STATE_UPDATE.error, e, i.ZegoWechatLogEvent.kZegoTaskPlayStart.error.kPlayDispatchError), !1) : (this.logger.info(a.ZEGO_WECHATMINI_ACTION.PLAYMODULE_START_PLAYING_STREAM_FROM_CDN + " play stream"), this.doPlayStream(e, r, s.ENUM_DISPATCH_TYPE.cdn))
                }
                this.logger.error(a.ZEGO_WECHATMINI_ACTION.PLAYMODULE_START_PLAYING_STREAM_FROM_CDN + " room no found")
            }, e.prototype.startPlayingStreamFromBGP = function (e) {
                return this.logger.info(a.ZEGO_WECHATMINI_ACTION.PLAYMODULE_START_PLAYING_STREAM_FROM_BGP + " fetch stream url"), this.fetchPlayStreamUrl(e, this.ultraPlaySourceType, s.ENUM_DISPATCH_TYPE.ultra), !0
            }, e.prototype.doPlayStream = function (e, t, r) {
                return this.logger.info(a.ZEGO_WECHATMINI_ACTION.PLAYMODULE_DO_PLAY_STREAM + " call"), this.streamCenter.startPlayingStream(e, t, r), !0
            }, e.prototype.fetchPlayStreamUrl = function (e, t, r) {
                var o = this;
                if (this.logger.info(a.ZEGO_WECHATMINI_ACTION.PLAYMODULE_FETCH_PLAY_STREAM_URL + " call " + e), this.rtm.service.isDisConnect()) this.logger.info(a.ZEGO_WECHATMINI_ACTION.PLAYMODULE_FETCH_PLAY_STREAM_URL + " state error"); else {
                    var n;
                    this.logger.info(a.ZEGO_WECHATMINI_ACTION.PLAYMODULE_FETCH_PLAY_STREAM_URL + " send fetch request"), n = "PRIVATE" === this.stateCenter.type ? {
                        stream_id: e,
                        dispatch_type: 2,
                        stream_type: 2,
                        an_type: this.rtm.stateCenter.priModules.anType
                    } : {stream_ids: [e], url_type: t};
                    var l = this.rtm.service.sendMessage("PRIVATE" === this.stateCenter.type ? "zegochat_js.stream_dispatch_req" : "stream_url", n, (function (e) {
                        o.handleFetchStreamUrlRsp(e, r)
                    }), (function (e) {
                        o.stateCenter.streamUrlMap[l] ? o.streamCenter.onPlayStateUpdate(s.ENUM_PLAY_STATE_UPDATE.error, o.stateCenter.streamUrlMap[l], i.ZegoWechatLogEvent.kZegoTaskPlayStart.error.kPlayDispatchError) : o.logger.info(a.ZEGO_WECHATMINI_ACTION.PLAYMODULE_FETCH_PLAY_STREAM_URL + " already stop play")
                    }));
                    -1 !== l && (this.stateCenter.streamUrlMap[l] = e, this.streamCenter.playerList[e] && (this.streamCenter.playerList[e].seq = l)), this.logger.info(a.ZEGO_WECHATMINI_ACTION.PLAYMODULE_FETCH_PLAY_STREAM_URL + " call success")
                }
            }, e.prototype.handleFetchStreamUrlRsp = function (e, t) {
                var r;
                this.logger.info(a.ZEGO_WECHATMINI_ACTION.PLAYMODULE_HANDLE_FETCH_STREAM_URL_RSP + " call ");
                var o = this.stateCenter.streamUrlMap[e.header.seq];
                o && delete this.stateCenter.streamUrlMap[e.header.seq];
                var n = "PUBLIC" === this.stateCenter.type ? e.body.err_code : e.body.code;
                if (0 !== n) return this.logger.error(a.ZEGO_WECHATMINI_ACTION.PLAYMODULE_HANDLE_FETCH_STREAM_URL_RSP + " server error= " + n), void this.streamCenter.onPlayStateUpdate(s.ENUM_PLAY_STATE_UPDATE.error, o, i.ZegoWechatLogEvent.kZegoTaskPlayStart.error.kPlayDispatchError);
                var l = "", _ = [];
                if ("PRIVATE" === this.stateCenter.type) {
                    if (e.body.stream_url_info && e.body.stream_url_info.ip_infos.length > 0) {
                        l = e.body.stream_id, _ = [];
                        var d = e.body.stream_url_info.stream_url, u = e.body.stream_url_info.ip_infos,
                            E = /^rtmp:\/\/(.*?)\/.*({.*})/;
                        u.forEach((function (e) {
                            var t = e.ip_address + ":" + e.port, r = d.replace(E.exec(d)[1], t);
                            r = r.replace(E.exec(d)[2], l), _.push(r)
                        }))
                    }
                } else e.body.stream_url_infos && e.body.stream_url_infos.length > 0 && (l = e.body.stream_url_infos[0].stream_id, _ = e.body.stream_url_infos[0].urls_ws);
                var g = !1,
                    c = this.stateCenter.getRoomByRoomID(null === (r = null == e ? void 0 : e.header) || void 0 === r ? void 0 : r.room_id);
                if (c) if (e.header.seq === this.streamCenter.playerList[l].seq) {
                    for (var h = 0; h < c.streamList.length; h++) if (c.streamList[h].stream_id == l) {
                        c.streamList[h].urltra_url_rtmp = _, g = !0;
                        break
                    }
                    !g && this.mixStreamList[l] && (this.mixStreamList[l].urltra_url_rtmp = _, t = s.ENUM_DISPATCH_TYPE.cdn, g = !0), g || (this.logger.info(a.ZEGO_WECHATMINI_ACTION.PLAYMODULE_HANDLE_FETCH_STREAM_URL_RSP + "cannot find streamInfo in existing stream list"), c.streamList.push({
                        stream_id: l,
                        urltra_url_rtmp: _
                    })), this.doPlayStream(l, _, t), this.logger.info(a.ZEGO_WECHATMINI_ACTION.PLAYMODULE_HANDLE_FETCH_STREAM_URL_RSP + " call success")
                } else this.logger.info(a.ZEGO_WECHATMINI_ACTION.PLAYMODULE_HANDLE_FETCH_STREAM_URL_RSP + " seq is not match, ignore " + l); else this.logger.error(a.ZEGO_WECHATMINI_ACTION.PLAYMODULE_HANDLE_FETCH_STREAM_URL_RSP + " room no found")
            }, e.prototype.setPreferPlaySourceType = function (e) {
                return this.logger.info(a.ZEGO_WECHATMINI_ACTION.WECHATMINI_SETPREFERPLAYSOURCETYPE + " call"), e !== s.ENUM_PLAY_SOURCE_TYPE.cdn && e !== s.ENUM_PLAY_SOURCE_TYPE.ultra ? (this.logger.error(a.ZEGO_WECHATMINI_ACTION.WECHATMINI_SETPREFERPLAYSOURCETYPE + " sourceType can be number 0 or 1, which can be represented auto or ultra"), !1) : (this.preferPlaySourceType = e, this.logger.info(a.ZEGO_WECHATMINI_ACTION.WECHATMINI_SETPREFERPLAYSOURCETYPE + " call success"), !0)
            }, e
        }();
        t.PlayModule = l
    }])
}));
