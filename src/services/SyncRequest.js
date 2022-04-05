import Api from '../config/Api';
import {request} from '../utils/HttpUtils'

export   function  callGetOpenIdApi({code,appid}){
  return request(Api.getOpenId+`?code=${code}&appId=${appid}`,{},"GET",false,true);
}
export  function callBannerApi(orgId){
  return request(Api.getBannerList+`?orgId=${orgId}`)
}
export function  callDoctorListApi(){
  return request(Api.getDoctorList);
}
export function callRegDocListApi({orgId='416798656289701888',deptId,protitle,}){
  return request(Api.getRegList+`?orgId=${orgId}&deptId=${deptId}&protitle=${protitle}`)
}
export function callClinicListApi({orgId}){
  return request(Api.getClinicList+`?orgId=${orgId}`)
}
export function callJobListApi({parentId='404148843207327744'}){
  return request(Api.getJobList+`?parentId=${parentId}`)
}
export function callOpenServiceApi({docId='1'}){
  return request(Api.getService+`?docId=${docId}`)
}
export function  callPatientListApi(){
  return request(Api.getPatientApi,{},"GET",false,false)
}
export function callGetDataDicApi({dictId}){
  return request(Api.getDataDic+`?dictId=${dictId}`,{},"GET",false,false)
}
export function callAttentionApi({docId,useFlag}){
  return request(Api.isAttention+`?docId=${docId}&useflag=${useFlag}`,{},"GET",false,false);
}
export function  callIsAttentionByIdApi(docId){
  return request(Api.queryAttentionById+`?docId=${docId}`,{},"GET",false,false);
}
export function  callAttentionListApi(){
  return request(Api.queryAttentionList,{},"GET",false,false);
}
export function  callCreateOrderApi(params){
  return request(Api.createOrder,params,"POST",false,false);
}
export function callPayApi({orderId,openId}){
  return request(Api.payApi+`?orderId=${orderId}&openId=${openId}`,{},"POST",false,false)
}
export function callAddPatientApi(params){
  return request(Api.addPatient,params,"POST",false,false)
}
export function callUpdatePatient(params){
  return request(Api.updatePatient,params,"POST",false,false);
}
export function  callAddShippingAddrApi(params){
  return request(Api.addShippingAddr,params,"POST",false,false);
}
export function callShippingAddrListApi(){
  return request(Api.queryShippingAddrList,{},"GET",false,false);
}
export function callQueryAddrByAddrIdApi(addrId){
  return request(Api.queryShippingAddrInfoById+`?addrId=${addrId}`,{},"GET",false,false);
}
export function callQueryInterrogationList(status){
  return request(Api.queryInterrogationList+`?rcStatus=${status}`,{},"GET",false,false)
}
export function callUpdateAddrByAddrIdApi(params){
  return request(Api.updateShippingAddrInfoById,params,"POST",false,false);
}

export function  callDeletePatientApi(patientId){
  return request(Api.deletePatientApi+`?patientId=${patientId}`,"GET",false,false)
}
export function  callQueryPatientByPatientId(patientId){
  return request(Api.queryPatientByPatientId+`?patientId=${patientId}`,"GET",false,false)
}
export function  callEvaluateList({docId='1'}){
  return request(Api.getEvaluateList+`?docId=${docId}`,{},"GET",false,false)
}
export function callQueryInterrogationDetail(id){
  return request(Api.queryInterrogationDetail+`?registerId=${id}`,{},"GET",false,false);
}
export function  callNoticeList(orgId){
  return request(Api.noticeList+`?orgId=${orgId}`,{},"GET",false,false);
}
export  function  callLoginRoomApi({userId,roomId}){
  return request(Api.loginRoom+`?userId=${userId}&roomId=${roomId}`,{},"GET",false,true);
}

export function callGetTokenApi({userId,roomId}){
  return request(Api.getToken+`?roomId=${roomId}&userId=${userId}`,{},"GET",false,true);
}
export function callGetRoomStateApi({roomId}){
  return request(Api.getRoomState+`?roomId=${roomId}`,{},"GET",false,true);
}
export function callUserStateApi({roomId,userId}){
  return request(Api.getUserState+`?roomId=${roomId}&userId=${userId}`,{},"GET",false,true);
}
export function callSaveChatRecordApi(params){
  return request(Api.saveChatRecord,params,"POST",false,true);
}

export  function  callGetChatRecordApi({roomId}){
  return request(Api.getChatRecordApi+`?roomId=${roomId}`,"GET",false,true);
}
export function  callGetMemberListApi({roomId}){
  return request(Api.getMemberListApi+`?roomId=${roomId}`,"GET",false,true);
}
