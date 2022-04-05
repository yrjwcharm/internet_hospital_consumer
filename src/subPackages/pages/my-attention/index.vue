<template>
  <view class="container">
    <at-virtual-scroll
      bench="10"
      v-if="attentionList.length!==0"
      :height="height"
      :items="attentionList"
      :item-height="113.0"
    >
      <template #default="{ index, item }">
        <AtSwipeAction
          :key="item.userId"
          :onOpened="handleSingle"
          :isOpened="false"
          @click="onDeleteAttention(item)"
          :options="[{
          text: '删除',
          style: {
          color:'#fff',
          backgroundColor: 'red'}}
          ]"
        >
          <view class="list-row-attention">
            <view class="list-row-wrap">
              <image :src="isExistImg(item.photoUrl)?item.photoUrl: require('@assets/home/avatar.png')" class="avatar"/>
              <view class="right-wrap">
                <view class="top">
                  <text class="name">{{ item.docName }}</text>
                  <text class="profession">{{ item.protitleName }}</text>
                </view>
                <view class="bottom">
                  <text class="hospital">{{ item.orgName }}</text>
                  <text class="major">{{ item.deptName }}</text>
                </view>
              </view>
            </view>
            <view class="major-responsibility">
              <text class="label">擅长：</text>
              <text class="value">{{ item.expertIn }}</text>
            </view>
          </view>
        </AtSwipeAction>
      </template>
    </at-virtual-scroll>
    <empty v-if="attentionList.length==0" :empty-img="require('@assets/empty.png')" :empty-text="'暂无数据哦～'"/>
  </view>
</template>
<script setup>
import {isExistImg} from "../../../utils/RegUtil";
import {computed, onMounted, ref} from "vue";
import {callAttentionApi, callAttentionListApi} from "../../../services/SyncRequest";
import store from "../../../store";
import Taro from "@tarojs/taro";
import empty from "@components/empty";
const itemHeight= ref(113);
const attentionList = computed(() => store.getters.getAttentionList);
const height = Taro.getSystemInfoSync().windowHeight;
onMounted(async () => {
    initData();
})
const initData=async ()=>{
  const res = await callAttentionListApi();
  if (res.code == 200) {
    store.commit('ADD_ATTENTION_LIST', res.data);
  }
}
const handleSingle = () => {

}
const onDeleteAttention =async ({docId,useFlag=0}) => {
  const res = await callAttentionApi({docId,useFlag});
  if(res.code ==200){
    Taro.showToast({
      title:'删除成功',
      icon:'none',
      duration:3500,
    })
    initData();
  }
}
</script>
<style lang="scss">
@import "../../../mixin";

.container {
  height: 100%;
  background: #f9f9f9;
  overflow-y: scroll;
}

.list-row-attention {
  display: flex;
  @include top_line();
  flex-direction: column;
  justify-content: center;
  height: 105PX;
  background: #fff;
  padding-left: 16PX;

  .list-row-wrap {
    display: flex;
    flex-direction: row;
    align-items: center;

    .avatar {
      width: 43PX;
      height: 43PX;
    }

    .right-wrap {
      margin-left: 12PX;
      display: flex;
      flex-direction: column;

      .top {
        display: flex;
        flex-direction: row;
        align-items: center;

        .name {
          @include commonFontStyle(16PX, 500, #333, PingFangSC-Medium)
        }

        .profession {
          margin-left: 7PX;
          @include commonFontStyle(14PX, 400, #333)
        }
      }

      .bottom {
        margin-top: 6PX;
        display: flex;
        flex-direction: row;
        align-items: center;

        .hospital {
          @include commonFontStyle(14PX, 400, #333)
        }

        .major {
          margin-left: 7PX;
          @include commonFontStyle(14PX, 400, #333)
        }
      }
    }
  }

  .major-responsibility {
    margin-top: 11PX;
    display: flex;
    flex-direction: row;
    align-items: center;

    .label {
      @include commonFontStyle(14PX, 400, #333)
    }

    .value {
      @include commonFontStyle(14PX, 400, #888888)
    }
  }
}
</style>
