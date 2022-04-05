<template>
  <view class="container">
    <view class="list-patient-info">
      <text class="title">
        患者信息
      </text>
      <template v-for="(item,index) in listItems">
        <view :class="index===listItems.length-1?'list-item':'list-item active'" @tap="openModal(index)">
          <view class="list-row-wrap">
            <view class="left">
              <text>{{ item.label }}</text>
            </view>
            <input :disabled="true" type="text" class="input" disabled :value="item.value">
            <image v-if="item.forward" :src="item.forward" class="forward"/>
          </view>
        </view>
      </template>
    </view>
    <view class="illness">
      <text class="title">请选择线下已确诊疾病</text>
      <view class="list-row">
        <template v-for="(item ,index) in illList">
          <view :class="item.checked?'list-item-illness active':'list-item-illness'" @tap="multiChoice(item)">
            <text>{{ item.label }}</text>
          </view>
        </template>
        <view class="list-item-illness illness-input">
          <input type="text" :value="ill" :onConfirm="bindConfirm" confirmType="send" class="input" placeholder="请输入疾病"
                 placeholderClass="placeholder-class">
        </view>
      </view>
      <view class="confirm-ill">
        <text>我确认已确诊此疾病并使用过该药，且无过敏历、无相关禁忌症和不良反应</text>
        <image :src="require('@assets/home/select.png')" class="img"/>
      </view>
      <view class="multi-pic">
        <text>处方/病历/检查报告（选填，最多6张）</text>
      </view>
      <view class="image-picker">
        <AtImagePicker
          :files="files"
          @change="onChange"
        />
      </view>
    </view>
    <AtFloatLayout
      :isOpened="isOpened"

      title="健康信息"
      @close="handleClose"
    >
      <view class="illness-since">
        <view class="since-illhistory">
          <text class="title">过往病史</text>
          <view class="right-wrap">
            <radio-group @change="onRadioChange">
              <label v-for="item in list">
                <radio style="transform: scale(0.7);" color="#06B48D" :value="item.value" :checked="item.checked">
                  {{ item.text }}
                </radio>
              </label>
            </radio-group>
          </view>
        </view>
        <view class="list-row">
          <template v-for="(item ,index) in sinceillList">
            <view :class="item.checked?'list-item-illness active':'list-item-illness'" @tap="multiChoiceSinceIll(item)">
              <text>{{ item.label }}</text>
            </view>
          </template>
        </view>
        <view class="other-ill">
          <text>其他</text>
          <AtTextarea
            class="textarea"
            :value="illness"
            @change="handleTextareaChange"
            :maxLength="200"
            placeholder='请补充您的确诊弊疾病名称'
          />
        </view>
        <template v-for="(item,index) in allergicList">
          <view :class="index==0?'list-row-ill top-line bottom-line':'list-row-ill bottom-line'">
            <view class="list-row-wrap">
              <text class="title">{{ item.label }}</text>
              <view class="right-wrap">
                <radio-group @change="onRadioChange1">
                  <label v-for="$item in item.list??[]">
                    <radio style="transform: scale(0.7);" color="#06B48D" :value="$item.value" :checked="$item.checked">
                      {{ $item.text }}
                    </radio>
                  </label>
                </radio-group>
              </view>
            </view>
          </view>
        </template>
        <view class="confirm-submit" @tap="confirmSubmit">
          <text>确定</text>
        </view>
      </view>
    </AtFloatLayout>
    <view class="footer" style="bottom:17PX;" @tap="submit">
      <view class="btn-submit-view">
        <text class="btn-submit-text">确认所填疾病，提交</text>
      </view>
    </view>
  </view>
</template>
<script setup>
import Taro from '@tarojs/taro'
import {ref} from "vue";
import {isEmpty} from "../../../utils/RegUtil";

const isIphoneX = Taro.getStorageSync('isIphoneX');
const ill = ref('');
const illness = ref('');
const onChange = () => {

}
const isOpened = ref(false);
const onFail = (mes) => {
  console.log(mes)
}
const submit = () => {
  Taro.navigateTo({
    url:'/subPackagesB/pages/submit-inquiry-success/index'
  })
}
const openModal = (index) => {
  console.log(333, index);
  if (index == listItems.value.length - 1) {
    isOpened.value = true;

  }
}
const onRadioChange = () => {

}
const onRadioChange1 = () => {

}
const handleClose = () => {
  isOpened.value = false;
}
const onImageClick = (index, file) => {
  console.log(index, file)
}
const files = ref([])
const list = ref([
  {
    value: '0',
    text: '无',
    checked: false
  },
  {
    value: '1',
    text: '有',
    checked: true
  },
])
const confirmSubmit=()=>{
  isOpened.value = false;
}
const allergicList = ref([
  {
    label: '药物过敏史',
    list: [
      {
        value: '0',
        text: '无',
        checked: false
      },
      {
        value: '1',
        text: '有',
        checked: true
      },
    ]
  },
  {
    label: '食物/接触过敏史',
    list: [
      {
        value: '0',
        text: '无',
        checked: false
      },
      {
        value: '1',
        text: '有',
        checked: true
      },
    ]
  },
  {
    label: '家族遗传病史',
    list: [
      {
        value: '0',
        text: '无',
        checked: false
      },
      {
        value: '1',
        text: '有',
        checked: true
      },
    ]
  },
  {
    label: '吸烟史',
    list: [
      {
        value: '0',
        text: '无',
        checked: false
      },
      {
        value: '1',
        text: '有',
        checked: true
      },
    ]
  }
])
const listItems = ref([
  {
    label: '真实姓名',
    value: '张可可',
    forward: '',
  },
  {
    label: '身份证号',
    value: '142601199412139117',
    forward: '',
  },
  {
    label: '手机号码',
    value: '18311410379',
    forward: '',
  },
  {
    label: '健康信息',
    value: '点击选择',
    forward: require('@assets/home/arrow.png'),

  }
])
const illList = ref([
  {
    label: '上呼吸道感染',
    checked: false,
  },
  {
    label: '泌尿道感染',
    checked: false,
  },
  {
    label: '皮肤感染',
    checked: false,
  },
  {
    label: '软组织感染',
    checked: false,
  },
  {
    label: '急性支气管炎',
    checked: false,
  },
  {
    label: '肺炎',
    checked: false,
  },
  {
    label: '淋病',
    checked: false,
  },
  {
    label: '伤寒',
    checked: false,
  },
  {
    label: '伤寒带菌者',
    checked: false,
  },
  {
    label: '呼吸道感染',
    checked: false,
  }
])
const sinceillList = ref([
  {
    label: '糖尿病',
    checked: false,
  },
  {
    label: '高血压',
    checked: false,
  },
  {
    label: '心脑血管疾病',
    checked: false,
  },
  {
    label: '高血脂',
    checked: false,
  },
  {
    label: '肝炎',
    checked: false,
  },
  {
    label: '高尿酸血症',
    checked: false,
  },
  {
    label: '支气管哮喘',
    checked: false,
  },
  {
    label: '结核病',
    checked: false,
  },
  {
    label: '恶性肿瘤',
    checked: false,
  },
  {
    label: '肝病',
    checked: false,
  },
  {
    label: '肾病',
    checked: false,
  }
])
const handleTextareaChange = () => {

}
const multiChoice = ($item) => {
  try {
    illList.value.map(item => {
      // item.checked = false; 单选
      if (Object.is(item, $item)) {
        item.checked = !$item.checked;
        // item.checked = true; //是否可以选中或不选中
        throw new Error();
      }
    })
  } catch (e) {

  }

}
const multiChoiceSinceIll = ($item) => {
  try {
    sinceillList.value.map(item => {
      // item.checked = false; 单选
      if (Object.is(item, $item)) {
        item.checked = !$item.checked;
        // item.checked = true; //是否可以选中或不选中
        throw new Error();
      }
    })
  } catch (e) {

  }
}
const bindConfirm = (e) => {
  if (isEmpty(e.detail.value)) {
    return;
  }
  illList.value.push({
    label: e.detail.value,
    checked: false
  })
}
</script>
<style lang="scss">
@import "../../../mixin";

$component: '.at-textarea';
#{$component} {
  border: 0;
  background: #F9F9F9;

  &__textarea {
    font-size: 13PX;
    font-family: PingFangSC-Regular, PingFang SC;
    font-weight: 400;
    color: #999;
    border-radius: 5PX;
    border-color: #ccc;
  }

  &__counter {
    color: #999;
  }
}

.textarea {
  margin-top: 13PX;
  margin-bottom: 16PX;
}

.at-image-picker__choose-btn {
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-justify-content: center;
  -ms-flex-pack: center;
  justify-content: center;
  -webkit-align-items: center;
  -ms-flex-align: center;
  align-items: center;
  font-size: 0;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  border-top: 1PX #ccc dashed;
  border-bottom: 1PX #ccc dashed;
  border-right: 1PX #ccc dashed;
  border-left: 1PX #ccc dashed;
}

.at-image-picker__choose-btn .add-bar {
  position: absolute;
  top: 50%;
  left: 50%;
  display: inline-block;
  width: 16PX;
  height: 2PX;
  border-radius: 0;
  background: #CCC;
}

.container {
  height: 100%;
  background: #f9f9f9;
  overflow-y: scroll;
  @include top_line();
}

.list-patient-info {
  display: flex;
  flex-direction: column;
  padding-top: 16PX;
  background: #fff;

  .title {
    padding-left: 16PX;
    @include commonFontStyle(16PX, 500, #333, PingFangSC-Medium)
  }

  .active {
    @include bottom_line();
  }

  .list-item {
    display: flex;
    padding-left: 16PX;
    padding-right: 16PX;
    flex-direction: column;
    height: 43PX;
    justify-content: center;

    .list-row-wrap {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: space-between;

      .left {
        width: 60PX;
        text-align: left;
        @include commonFontStyle(14PX, 400, #333)
      }

      .input {
        flex: 1;
        padding-left: 27PX;
        @include commonFontStyle(14PX, 400, #999)
      }

      .forward {
        width: 7PX;
        height: 13PX;
      }
    }
  }
}

.illness {
  margin-top: 10PX;
  padding: 16PX;
  margin-bottom: 93PX;
  display: flex;
  flex-direction: column;
  background: #fff;

  .title {
    @include commonFontStyle(16PX, 500, #333, PingFangSC-Medium);
  }

  .list-row {
    display: flex;
    flex-direction: row;
    align-items: center;
    flex-wrap: wrap;
    margin-top: 13PX;

    .list-item-illness {
      display: flex;
      flex-direction: column;
      justify-content: center;
      height: 28PX;
      margin-right: 8PX;
      margin-bottom: 8PX;
      padding: 0 12PX 0 12PX;
      background: #F9F9F9;
      border-radius: 14PX;
      @include commonFontStyle(14PX, 400, #333)
    }

    .active {
      background: rgba(6, 180, 141, 0.1);
      @include commonFontStyle(14PX, 400, #06B48D)
    }
  }
}

.input {
  caret-color: #666;
}

.illness-input {
  width: 94PX;
}

.placeholder-class {
  @include commonFontStyle(14PX, 400, #999)
}

.confirm-ill {
  margin-top: 8PX;
  position: relative;
  display: flex;
  flex-direction: column;
  height: 65PX;
  padding-left: 8PX;
  padding-right: 8PX;
  position: relative;
  justify-content: center;
  background: rgba(8, 183, 140, 0.1);
  border-radius: 5PX;
  @include commonFontStyle(14PX, 400, #333);
  .img{
    width: 19PX;
    position: absolute;
    right:0;
    top:0;
    height: 14PX;
  }

  .check {
    width: 19PX;
    height: 14PX;
    position: absolute;
    right: 0;
    top: 0;
  }
}

.multi-pic {
  margin-top: 21PX;
  @include commonFontStyle(14PX, 400, #999)
}

.image-picker {
  margin-top: 10PX;
}
//
//.at-float-layout__container {
//  border-radius: 8PX 8PX 0 0;
//}
.at-float-layout__container {
  border-radius: 8PX 8PX 0 0;
}
.at-float-layout .layout-header {
  position: relative;
  padding: 16PX;
  border-radius: 8PX 8PX 0 0;
  //line-height: 1.5;
  background-color: inherit;
}

.at-float-layout .layout-header__title {
  overflow: hidden;
  -o-text-overflow: ellipsis;
  text-overflow: ellipsis;
  white-space: nowrap;
  display: block;
  padding-right: 80rpx;
  @include commonFontStyle(16PX, 500, #333, PingFangSC-Medium)
}

.at-float-layout .layout-header__btn-close::before, .at-float-layout .layout-header__btn-close::after {
  background-color: #999;
}

.at-float-layout .layout-body {
  padding: 0 16PX 0 16PX;
}

.illness-since {
  display: flex;
  flex-direction: column;

  .since-illhistory {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;

    .title {
      @include commonFontStyle(14PX, 500, #333, PingFangSC-Medium)
    }

    .right-wrap {
      display: flex;
      flex-direction: row;
      align-items: center;

    }
  }

  .list-row {
    display: flex;
    flex-direction: row;
    align-items: center;
    flex-wrap: wrap;
    margin-top: 13PX;

    .list-item-illness {
      display: flex;
      flex-direction: column;
      justify-content: center;
      height: 28PX;
      margin-right: 8PX;
      margin-bottom: 8PX;
      padding: 0 12PX 0 12PX;
      background: #F9F9F9;
      border-radius: 14PX;
      @include commonFontStyle(14PX, 400, #333)
    }

    .active {
      background: rgba(6, 180, 141, 0.1);
      @include commonFontStyle(14PX, 400, #06B48D)
    }
  }

  .other-ill {
    display: flex;
    flex-direction: column;

  }
  .top-line {
    @include top_line();
  }

  .bottom-line {
    @include bottom_line();
  }
  .list-row-ill {
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 43PX;

    .list-row-wrap {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: space-between;

      .title {
        @include commonFontStyle(14PX, 500, #333, PingFangSC-Medium)
      }
    }
  }
}

.checkbox-list__checkbox {
  @include commonFontStyle(14PX, 400, #333)
}
  .confirm-submit{
    //display: flex;
    height: 40PX;
    margin-top: 16PX;
    margin-bottom: 17PX;
    line-height: 40PX;
    text-align: center;
    margin-left: 16PX;
    margin-right: 16PX;
    background: #06B48D;
    border-radius: 20PX;
    @include commonFontStyle(16PX,400,#fff)
  }
</style>
