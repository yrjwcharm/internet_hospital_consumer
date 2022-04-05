import {createStore} from 'vuex'
import {
  callAttentionApi,
  callPatientListApi,
  callQueryInterrogationList,
  callShippingAddrListApi
} from "./services/SyncRequest";

const state = {
  numbers: [1, 2, 3],
  evaluateList: [],
  serviceList: [],
  patientList: [],
  attentionList:[],
  shippingAddrList:[],
  interrogationList:[],
}

const mutations = {
  ADD_NUMBER(state, payload) {
    state.numbers.push(payload)
  },
  ADD_EVALUATE(state, payload) {
    state.evaluateList = payload;
  },
  ADD_PATIENT_LIST(state, payload) {
    state.patientList =payload;
  },
  ADD_ATTENTION_LIST(state,payload){
    state.attentionList = payload;
  },
  ADD_SHIPPING_LIST(state,payload){
    state.shippingAddrList = payload;
  },
  ADD_INTERROGATION_LIST(state,payload){
    state.interrogationList = payload;
  }
}

const actions = {
  addNumber(context, number) {
    context.commit('ADD_NUMBER', number)
  },
  async getPatient({commit},) {
    const res = await callPatientListApi();
    if (res.code == 200) {
      commit('ADD_PATIENT_LIST', res.data);
    }
  },
  async attention({commit}, params){
    const res = await  callAttentionApi(params);
     return new Promise((resolve, reject) => {
       resolve(res);
     })
  },
  async getShippingAddrList({commit}){
    const res = await  callShippingAddrListApi();
    if(res.code ==200){
      commit('ADD_SHIPPING_LIST',res.data);
    }
  },
  async getInterrogationList({commit},{rcStatus}){
    const res = await callQueryInterrogationList(rcStatus);
    if(res.code ==200){
      commit('ADD_INTERROGATION_LIST',Array.isArray(res.data)?res.data:[]);
    }
  }
}

const getters = {
  getNumbers(state) {
    return state.numbers
  },
  getEvaluateList(state) {
    return state.evaluateList
  },
  getPatientList(state){
    return state.patientList
  },
  getAttentionList(state){
    return state.attentionList
  },
  getShippingAddrList(state){
    return state.shippingAddrList;
  },
  getInterrogationList(state){
    return state.interrogationList
  },
}

const store = createStore({
  state,
  mutations,
  actions,
  getters
})

export default store
