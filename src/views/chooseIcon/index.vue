<script lang="ts" setup>
import { ref } from "vue";

const visible = ref(false);
</script>

<template>
  <div>
    <m-choose-icon title="选择图标" v-model:visible="visible"></m-choose-icon>
  </div>
</template>

<style lang="scss" scoped></style>
