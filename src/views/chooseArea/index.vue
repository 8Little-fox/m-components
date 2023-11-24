<script lang='ts' setup>
import {  } from 'vue'

const changeArea = (val: any) => {
  console.log(val);
  
}
    
</script>

<template>
  <m-choose-area @change="changeArea"/>
</template>

<style lang='scss' scoped>
  
</style>