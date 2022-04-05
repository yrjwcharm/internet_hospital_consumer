<template>
  <web-view :src="state.url" @message="handleMessage" />
</template>
<script setup>
 import  Taro from '@tarojs/taro';
 import {onMounted, reactive, ref} from "vue";
 onMounted(()=>{

 })
 const state = reactive({
   url:'https://www.baidu.com',
 });
 const handleMessage=()=>{

 }
</script>
<style>

</style>
