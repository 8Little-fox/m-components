<script lang="ts" setup>
import * as ElIcons from "@element-plus/icons-vue";
import { ref, watch } from "vue";
import { toLine } from "../../../utils/index";
import { useCopy } from "../../../hooks/useCopy";
const props = defineProps<{
  title: string;
  visible: boolean;
}>();
const emits = defineEmits(["update:visible"]);
const dialogVisible = ref<boolean>(props.visible);
const handlerClick = () => {
  emits("update:visible", !props.visible);
};
const handleClose = () => {
  dialogVisible.value = false;
  emits("update:visible", false);
};
watch(
  () => props.visible,
  (val) => {
    dialogVisible.value = val;
    emits("update:visible", val);
  }
);
const clickItem = (item: string) => {
  const text = `<el-icon-${toLine(item)}/>`
  useCopy(text)
  handleClose()
}
</script>

<template>
  <el-button @click="handlerClick" type="primary"
    >{{ title }} <slot></slot
  ></el-button>
  <el-dialog
    :title="title"
    :modelValue="dialogVisible"
    width="35%"
    :before-close="handleClose"
  >
    <div class="container">
      <div class="item" v-for="(item, index) of Object.keys(ElIcons)" :key="index"
       @click="clickItem(item)">
        <div>
          <component :is="`el-icon-${toLine(item)}`"></component>
          <div>{{ item }}</div>
        </div>
      </div>
    </div>
  </el-dialog>
</template>

<style lang="scss" scoped>
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  height: 60vh;
  overflow-y: auto;
  overflow-x: hidden;
}
.item {
  width: 20%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  margin-bottom: 20px;
}
svg {
  width: 2em;
  height: 2em;
}
</style>
