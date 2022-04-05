<template>
  <view class="container">
    <view class="brief-introduction">
      <view class="list-brief-header">
        <view class="list-row-wrap">
          <view class="left-container">
            <image class="avatar" :src="isExistImg(obj?.photoUrl)? obj.photoUrl:require('@assets/home/avatar.png')"/>
            <view class="right">
              <view class="top">
                <text class="name">{{ obj?.realName ?? '' }}</text>
                <text class="profession">{{ obj?.protitleName ?? '' }}</text>
                <text class="major_sub">{{ obj?.deptName ?? '' }}</text>
              </view>
              <view class="bottom">
                <text class="hospital">{{ obj?.orgName ?? '' }}</text>
                <view class="hos-level">
                  <text>{{ obj?.orgGradeName ?? '' }}</text>
                </view>
              </view>
            </view>
          </view>
          <view class="right-container" @tap="jumpToDoctorBrief(obj)">
            <text class="txt-brief">简介</text>
            <image :src="require('@assets/home/brief_arrow.png')" class="forward"/>
          </view>
        </view>
        <view class="major_field">
          <text class="label">擅长：</text>
          <text class="value">{{ obj?.expertIn ?? '' }}</text>
        </view>
      </view>
      <view class="good-evaluate">
        <view class="list-row-wrap">
          <image :src="require('@assets/home/line.png')" class="separator"/>
          <view class="accepts">
            <image :src="require('@assets/home/star.png')" class="star"/>
            <text class="accepts-count">{{ obj?.drScore ?? '' }}</text>
          </view>
          <view class="favorable-rating">
            <text>接诊量</text>
            <text class="favorable-rate">{{ obj?.treatCount ?? '' }}</text>
          </view>
        </view>
      </view>
    </view>
    <template v-for="(item,index) in state.listItems" :key="index">
      <view class="service">
        <view class="list-service">
          <view class="list-row-wrap">
            <text class="title">{{ item.title }}</text>
            <view class="right" @tap="visible=true">
              <text class="detail">服务须知</text>
              <image :src="require('@assets/home/service.png')" class="icon"/>
            </view>
          </view>
        </view>
        <template v-for="($item,index) in item.children??[]" :key="index">
          <view :class="index===(item.children??[]).length-1?'list-row-service':'list-row-service active'">
            <view class="list-row-wrap">
              <view class="left">
                <image
                  :src="$item?.treatType=='0'?require('@assets/home/picture.png'):$item?.treatType=='1'?require('@assets/home/video_topic.png'):require('@assets/home/consult-1.png')"
                  class="avatar"/>
                <view class="right-container">
                  <view class="top">
                    <text class="title">{{
                        $item?.treatType == '0' ? '图文问诊' : $item?.treatType == '1' ? '视频问诊' : '图文资讯'
                      }}
                    </text>
                    <text class="price">{{ $item?.registerFee }}</text>
                  </view>
                  <text class="bottom">{{
                      $item?.treatType == '0' ? '通过图文与医生在线沟通开药' : $item?.treatType == '1' ? '预约时间通过视频与医生进行沟通' : '通过图文与医生进行沟通(不开方)'
                    }}
                  </text>
                </view>
              </view>
              <view class="right" @tap="jumpToPhysicianVisit($item??{})">
                <text>剩余{{ $item?.mount }}</text>
              </view>
            </view>
          </view>
        </template>
      </view>
    </template>
    <view class="evaluate">
      <view class="list-row-header">
        <view class="list-row-wrap">
          <text class="title">
            患者评价（{{ evaluateList.length }}）
          </text>
          <view class="more-view" @tap="jumpToEvaluate">
            <text class="more">更多评价</text>
            <image :src="require('@assets/home/forward.png')" class="forward"/>
          </view>
        </view>
      </view>
      <template v-for="(item,index) in evaluateList.slice(0,2)" :key="index">
        <view :class="index==evaluateList.length-1?'list-row-bottom':'list-row-bottom active'">
          <view class="top">
            <view class="left">
              <image :src="isExistImg(item.photoUrl)?item.photoUrl:require('@assets/home/header.png')" class="img"/>
              <view class="right-wrap">
                <text class="name">{{ item.userName }}</text>
                <at-rate class="rate" :value="item.commentLevel" size="10"/>
              </view>
            </view>
            <text class="date">{{ item.commentTime }}</text>
          </view>
          <text class="bottom">{{ item.comment }}</text>
        </view>
      </template>
    </view>
    <AtModal :isOpened="visible" class='modal' :closeOnClickOverlay="false">
      <view class="modal-header">
        <text class='header-title'>服务须知</text>
      </view>
      <AtModalContent class='modal-content'>
        <view class='content'>
          <text>1、特别说明:目前线上问诊暂不支持医保支付，所发生的费用全部为自费。
          </text>
          <text>2、健康咨询只提供咨询服务，不开处方。
          </text>
          <text>3、健康咨询和复诊开药的图文问诊下单后24小时内医生接诊，若超时未接诊，系统将自动退单退款，款项将原路返回您的账户。医生接诊后，订单生效，在线与医生完成咨询，24点后系统将自动结束服务。
          </text>
          <text>4、复诊开药视频问诊由医生端按预约时间发起来电，请注意视频邀请。
          </text>
          <text>5、医生未接诊前，您可以随时在“我的问诊”中取消订单。</text>
          <text>6、医生可能会由于临时手术或坐诊的情况导致无法及时回复您，请耐心等待。
          </text>
          <text>7、若您情况紧急，以免耽误您的病情，建议直接前往医院就诊。
          </text>
        </view>
      </AtModalContent>
      <view class="modal-confirm" @tap="onConfirm">
        <text class="confirm">我知道了</text>
      </view>
      <!--      <AtModalAction > <button style='background:#3991fa;color:#fff;' @tap="confirm">我知道了</button> </AtModalAction>-->
    </AtModal>
  </view>
</template>

<script setup>
import {computed, onActivated, onMounted, reactive, ref, toRaw, toRefs} from "vue";
import Taro from '@tarojs/taro';
import {isExistImg} from "../../../utils/RegUtil";
import {callOpenServiceApi, callEvaluateList} from "../../../services/SyncRequest";
import {mapGetters, mapState, useStore} from "vuex";

const store = useStore();
const {item} = Taro.getCurrentInstance().router.params;
let obj = JSON.parse(item);
let visible = ref(false);
const onConfirm = () => {
  visible.value = false;
}
const evaluateList = computed(() => store.getters.getEvaluateList);
const state = reactive({
  listItems: []
})
// state.listItems=[{title:'复诊开药',children:arr},{title:'健康咨询',children:$arr}];

onMounted(async () => {

  const res = await Promise.all([callOpenServiceApi({docId: '1'}), callEvaluateList({docId: '1'})])
  if (res[0].code == 200) {
    console.log(333, res[0].data);
    state.listItems = [
      {title: '复诊开药', children: [res[0].data[0], res[0].data[1]]},
      {title: '健康咨询', children: [res[0].data[2]]}
    ]
  }
  res[1].code == 200 && store.commit('ADD_EVALUATE', res[1].data);

})
const jumpToEvaluate = () => {
  Taro.navigateTo({
    url: `/subPackagesA/pages/patient-evaluate/index`
  })
}
const jumpToDoctorBrief = (obj) => {
  Taro.navigateTo({
    url: `/subPackages/pages/doctor-brief/index?item=${JSON.stringify(obj)}`
  })
}
const jumpToPhysicianVisit = ($item) => {

  const {item} = Taro.getCurrentInstance().router.params;
  if ($item.treatType == 0)

    Taro.navigateTo({
      url: `/subPackagesB/pages/physician-visit-detail/index?treatType=${$item.treatType}&item=${JSON.stringify($item)}&regDoc=${item}`
    })
  else if ($item.treatType == 1)
    Taro.navigateTo({
      url: `/subPackages/pages/appoint-time/index`
    })
  else
    Taro.navigateTo({
      url: `/subPackagesB/pages/physician-visit-detail/index?treatType=${$item.treatType}&item=${JSON.stringify($item)}&regDoc=${item}`
    })
}
</script>

<style lang="scss">
@import "../../../mixin";

.at-modal__container {
  position: absolute;
  top: 50%;
  left: 50%;
  -webkit-transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  overflow: hidden;
  width: 311PX;
  height: 470PX;
  background: #FFFFFF;
  border-radius: 12PX;
}

.modal-header {
  height: 50PX;
  display: flex;

  .header-title {
    @include commonFontStyle(16PX, 400, #333);
    margin: 0 auto;
    margin-top: 20PX;
    margin-bottom: 9PX;
  }
}

.modal-confirm {
  display: flex;
  height: 54PX;
  @include top_line();

  .confirm {
    @include commonFontStyle(16PX, 400, #06B48D);
    margin: auto;
  }
}

.at-modal__content {
  padding: 0 16PX 16PX 16PX;
  min-height: 180rpx;
  max-height: 840rpx;
  color: #333;
  font-size: 28rpx;
  -webkit-box-sizing: content-box;
  box-sizing: content-box;
  width: auto;
}

.modal-content .content {
  display: flex;
  flex-direction: column;
  text-align: justify;
  text-justify: inter-ideograph;
  @include commonFontStyle(14PX, 400, #333);
  line-height: 22PX;
}

.container {
  height: 100%;
  overflow-y: scroll;
  background: #f9f9f9;
}

.brief-introduction {
  display: flex;
  background: #fff;
  flex-direction: column;
  position: relative;

  &:before {
    display: block;
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    content: '';
    border-top: 1px solid #EEEEEE;
    -webkit-transform: scale(0.5);
    transform: scaleY(0.5);
  }

  .list-brief-header {
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 120PX;
    width: 100%;
    padding-left: 16PX;
    padding-right: 16PX;
    position: relative;

    &:after {
      display: block;
      position: absolute;
      left: 0;
      bottom: 0;
      width: 100%;
      content: '';
      border-top: 1px solid #EEEEEE;
      -webkit-transform: scale(0.5);
      transform: scaleY(0.5);
    }

    .list-row-wrap {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: space-between;

      .left-container {
        display: flex;
        flex-direction: row;
        align-items: center;

        .avatar {
          width: 59PX;
          height: 59PX;
        }

        .right {
          margin-left: 14PX;
          display: flex;
          flex-direction: column;

          .top {
            display: flex;
            flex-direction: row;
            align-items: center;

            .name {
              @include commonFontStyle(18PX, 500, #333, PingFangSC-Medium)
            }

            .profession {
              margin-left: 8PX;
              @include commonFontStyle(14PX, 400, #333)
            }

            .major_sub {
              margin-left: 8PX;
              @include commonFontStyle(14PX, 400, #333)
            }
          }

          .bottom {
            margin-top: 7PX;
            display: flex;
            flex-direction: row;
            align-items: center;

            .hospital {
              @include commonFontStyle(14PX, 400, #333)
            }

            .hos-level {
              margin-left: 8PX;
              width: 32PX;
              height: 16PX;
              text-align: center;
              line-height: 16PX;
              background: rgba(6, 180, 141, 0.1);
              border-radius: 8PX;
              @include commonFontStyle(11PX, 400, #06B48D)
            }
          }
        }
      }

      .right-container {
        display: flex;
        flex-direction: row;
        align-items: center;

        .txt-brief {
          @include commonFontStyle(14PX, 400, #333)
        }

        .forward {
          margin-left: 6PX;
          width: 6PX;
          height: 11PX;
        }
      }
    }

    .major_field {
      margin-top: 11PX;

      .label {
        @include commonFontStyle(14PX, 400, #333)
      }

      .value {
        @include commonFontStyle(14PX, 400, #888)
      }

    }
  }


}

.service {
  background: #fff;
  margin-top: 8PX;

  .list-service {
    padding-left: 16PX;
    padding-right: 16PX;
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 34PX;

    .list-row-wrap {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: space-between;

      .title {
        @include commonFontStyle(15PX, 400, #333)
      }

      .right {
        display: flex;
        flex-direction: row;
        align-items: center;

        .detail {
          @include commonFontStyle(12PX, 400, #999)
        }

        .icon {
          margin-left: 7PX;
          width: 13PX;
          height: 13PX;
        }
      }
    }
  }

  .list-row-service {
    display: flex;
    //padding-left: 16PX;
    margin-left: 10PX;
    margin-right: 10PX;
    //padding-right: 16PX;
    flex-direction: column;
    justify-content: center;
    height: 89PX;
    position: relative;

    .list-row-wrap {
      display: flex;
      padding-left: 6PX;
      padding-right: 6PX;
      flex-direction: row;
      justify-content: space-between;

      .left {
        display: flex;
        flex-direction: row;

        .avatar {
          width: 34PX;
          height: 34PX;
        }

        .right-container {
          display: flex;
          margin-left: 16PX;
          flex-direction: column;

          .top {
            display: flex;
            flex-direction: row;
            align-items: center;

            .title {
              @include commonFontStyle(15PX, 400, #333)
            }

            .price {
              margin-left: 17PX;
              @include commonFontStyle(13PX, 400, #F66868)
            }
          }

          .bottom {
            margin-top: 4PX;
            @include commonFontStyle(13PX, 400, #666)
          }
        }
      }

      .right {
        width: 70PX;
        height: 26PX;
        text-align: center;
        line-height: 26PX;
        border-radius: 14PX;
        border: 1px solid #09BB8F;
        @include commonFontStyle(13PX, 400, #09BB8F)
      }

    }
  }
}

.active {
  &:after {
    display: block;
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    content: '';
    border-top: 1px solid rgba(204, 204, 204, 0.4);
    -webkit-transform: scale(0.5);
    transform: scaleY(0.5);
  }
}

.evaluate {
  background: #fff;

  .list-row-header {
    display: flex;
    padding-left: 16PX;
    padding-right: 16PX;
    flex-direction: column;
    justify-content: center;
    height: 47PX;
    @include bottom_line();

    .list-row-wrap {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: space-between;

      .title {
        @include commonFontStyle(15PX, 400, #333)
      }

      .more-view {
        display: flex;
        flex-direction: row;
        align-items: center;
        @include commonFontStyle(13PX, 400, #999);

        .forward {
          margin-left: 8PX;
          width: 6PX;
          height: 11PX;
        }
      }
    }
  }

  .list-row-bottom {
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 114PX;
    margin-left: 16PX;
    margin-right: 16PX;
    @include bottom_line();

    .top {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: space-between;

      .left {
        display: flex;
        flex-direction: row;
        align-items: center;

        .img {
          width: 34PX;
          height: 34PX;
        }

        .right-wrap {
          margin-left: 8PX;
          display: flex;
          flex-direction: column;

          .name {
            @include commonFontStyle(14PX, 400, #333)
          }

          .rate {
            margin-top: 5PX;
          }

        }
      }

      .date {
        @include commonFontStyle(13PX, 400, #999)
      }
    }

    .bottom {
      margin-top: 13PX;
      @include commonFontStyle(13PX, 400, #666)
    }
  }
}

.good-evaluate {
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 48PX;

  .list-row-wrap {
    display: flex;
    flex-direction: row;
    position: relative;
    align-items: center;
    justify-content: space-between;

    .separator {
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      margin: auto;
      width: 1PX;
      height: 16PX;
    }

    @include commonFontStyle(14PX, 400, #999);

    .accepts {
      flex: 1;
      text-align: center;

      .star {
        width: 16PX;
        height: 16PX;
      }

      .accepts-count {
        margin-left: 4PX;
        @include commonFontStyle(18PX, 500, #FF9C00, PingFangSC-Medium)
      }
    }

    .favorable-rating {
      flex: 1;
      text-align: center;

      .favorable-rate {
        margin-left: 4PX;
        @include commonFontStyle(18PX, 500, #06B48D, PingFangSC-Medium)
      }
    }

  }
}
</style>
