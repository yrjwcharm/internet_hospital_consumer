<template>
  <view class="empty_data">
    <image :src="emptyImg" class="img"/>
    <text class="empty_text">{{emptyText}}</text>
  </view>
</template>

<script>
export default {
  name: "empty",
  props:{
    emptyText:{
      type:String,
      default:'',
    },
    emptyImg:{
      type:String,
      default: null
    }
  }
}
</script>

<style lang="scss">
@import "src/mixin";
.empty_data{
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 35%;
  .img{
    width: 200PX;
    height: 128PX;
  }
  .empty_text{
    margin-top: 25PX;
    @include commonFontStyle(16PX,400,#999999,)
  }

}
</style>
