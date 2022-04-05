// 以下是业务服务器API地址
// 局域网测试使用
// var WxApiRoot = 'http://localhost:8082/wx/';
export const WxApiRoot = 'https://interhospital.youjiankang.net/patient';
// export const WxApi ='https://interhospital.youjiankang.net/'
// export  const WxApiRoot = 'http://192.168.31.189:8081';
export const baseUrl = 'http://www.sinowis.com/'
export const WxApi = 'https://myjxs.youmaijiankang.com/'
export default {
  tmplIds:['hekqdlq-CpqVcor8SQ0VyY7erU7J89pLp3CiowHzQyw','7flcs0e0AvH4BXpLZM5VoZ2_JTXxxl22y53tjMD1azw','yc69FdfblD98_OD9-KuUgnib41sO7sSHGsU5Qj-cMb8'],
  imgUrl :WxApiRoot+'/ncov',
  getPatientApi:WxApiRoot+`/pt-service/baPatient/selectPatientByUserId`,
  getDataDic:WxApiRoot + `/pt-service/baDatadictDetail/getDatadictDetail`,
  isAttention:WxApiRoot+`/pt-service/buUserAttention/insertOrDeleteUserAttention`,
  queryAttentionById:WxApiRoot+`/pt-service/buUserAttention/checkUserAttentionByDocId`,
  queryAttentionList:WxApiRoot+`/pt-service/buUserAttention/getUserAttention`,
  createOrder:WxApiRoot + `/pt-service/buOrder/createRegisterOrder`,
  addPatient:WxApiRoot+`/pt-service/baPatient/insertPatient`,
  queryPatientByPatientId:WxApiRoot+`/pt-service/baPatient/selectPatientByPatientId`,
  queryInterrogationList:WxApiRoot+`/pt-service/buRegister/getRegisterInfoByRcStatus`,
  queryInterrogationDetail:WxApiRoot+`/pt-service/buRegister/getRegisterInfoByRegisterId`,
  updatePatient:WxApiRoot+`/pt-service/baPatient/updatePatient`,
  deletePatientApi:WxApiRoot+`/pt-service/baPatient/deletePatient`,
  addShippingAddr:WxApiRoot+`/pt-service/baUserAddress/insertAddr`,
  payApi:WxApiRoot+`/pt-service/buTrade/start`,
  queryShippingAddrList:WxApiRoot+`/pt-service/baUserAddress/getAllAddr`,
  queryShippingAddrInfoById:WxApiRoot+`/pt-service/baUserAddress/getAddrByAddrId`,
  updateShippingAddrInfoById:WxApiRoot+`/pt-service/baUserAddress/updateAddr`,
  getService:WxApiRoot+`/pt-service/doctorInfo/checkDoctorService`,
  getEvaluateList:WxApiRoot+`/pt-service/doctorInfo/checkDoctorComment`,
  getBannerList:WxApiRoot+'/pt-service/baCarousel/getCarouselByPlatform',
  noticeList:WxApiRoot+'/pt-service/baNotice/getNoticeByPlatform',
  getRegList:WxApiRoot+'/pt-service/doctorInfo/checkDoctorList',
  getClinicList:WxApiRoot+`/pt-service/baDepartment/getAllDepartment`,
  getJobList:WxApiRoot+`/pt-service/baDatadictDetail/getDatadictDetailChild`,
  getDoctorList:WxApiRoot+'/pt-service/doctorInfo/checkDoctorList?isRecom=1',
  getOpenId:WxApiRoot+"/pt-service/ba-patient-user-union/doLogin",
  loginRoom:WxApi+"ycysp/room/loginRoomUser",
  getToken:WxApi+"ycysp/jigou/getToken",
  updateImg:WxApi+"ycysp/oss/pic/upload",
  getRoomState:WxApi+"/ycysp/room/status/get",
  saveChatRecord:WxApi+"/ycysp/chat/record/save",
  getUserState:WxApi+"/ycysp/room/user/status/get",
  getChatRecordApi:WxApi+"/ycysp/chat/record/room/list",
  getMemberListApi:WxApi+"/ycysp/room/manage/user/list"
};
