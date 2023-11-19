<script lang="ts" setup>
const props = defineProps<{
  collapse: boolean;
}>();
const emits = defineEmits(['update:collapse'])
let toggle = () => {
  emits('update:collapse', !props.collapse);
};
</script>≠

<template>
 <div class="header">
  <span @click="toggle">
    <el-icon-expand v-if="collapse"></el-icon-expand>
    <el-icon-fold v-else></el-icon-fold>
  </span>
 </div>
</template>

<style lang="scss" scoped>
.header {
  padding: 0 20px;
}
</style>
