<script lang="ts" setup>
import { ref } from "vue";
import mChooseIcon from "../../components/chooseIcon/src/index.vue";

const visible = ref(false);
</script>

<template>
  <div>
    <mChooseIcon title="选择图标" v-model:visible="visible"></mChooseIcon>
  </div>
</template>

<style lang="scss" scoped></style>
