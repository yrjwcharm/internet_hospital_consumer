<template>
  <view class="container">
    <view class='rich-wrap'>
      <rich-text class='rich-text' :nodes="state.content" />
    </view>
  </view>
</template>
<script setup>
import {getCurrentInstance, onMounted, reactive, ref} from "vue";
import Taro from '@tarojs/taro'
  const state = reactive({
    content:''
  });
  onMounted(()=>{
    const {content} = Taro.getCurrentInstance().router.params;
    // let $content = decodeURIComponent(content);
    // let $_content = $content.replace(/\<p/gi, '<p class="rich-p"')//正则给p标签增加class
    //   .replace(/\<span/gi,'<span class="rich-span"')
    // console.log(333,$_content);
    state.content = content;
  })
</script>
<style lang="scss">
@import "../../../mixin";
  .container{
    height: 100%;
    overflow-y: scroll;
    background: #f9f9f9;
    @include top_line();
  }
  .rich-wrap {
    background: #fff;
    padding: 16PX;
    .rich-text {
      .rich-p {
        font-family: PingFangSC-Medium, PingFang SC;
        font-weight: 400;
        color: #333;
        .rich-span {
          font-size: 14PX !important;

        }
      }
      .rich-span {
        font-size: 14PX !important;
      }

    }
  }
</style>
