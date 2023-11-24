<script lang="ts" setup>
import { ref, watch } from "vue";
import allAreas from '../lib/pac-code.json'
export interface AreaItem {
  code: string;
  name: string;
  children?: AreaItem[];
}
export interface Data {
  code: string;
  name: string;
}

const province = ref<string>("");
const city = ref<string>("");
const area = ref<string>("");
  let selectCity = ref<AreaItem[]>([])
  let selectArea = ref<AreaItem[]>([])
// 所有数据
const areas = ref(allAreas);
let emits = defineEmits(['change'])
watch(() => province.value, val => {
  if(val) {
    const cities = areas.value.find(item => item.code === province.value)?.children!
    selectCity.value = cities
  }
  city.value = ''
  area.value =''
})
watch(() => city.value, val => {
  if(val) {
    const areas = selectCity.value.find(item => item.code === city.value)?.children!
    selectArea.value = areas
  }
  area.value =''
})
watch(() => area.value, val => {
   const provinceData: Data = {
    code: province.value,
    name: areas.value.find(item => item.code === province.value)!.name
   }
   const cityData = {
    code: city.value,
    name: selectCity.value.find(item => item.code === city.value)!.name
   }
   const areaData = {
    code: val,
    name: selectArea.value.find(item => item.code === val)!.name
   }
   emits('change', {
    province: provinceData,
    city: cityData,
    area: areaData
   })
})
</script>

<template>
  <el-select placeholder="请选择省份" v-model="province" clearable>
    <el-option v-for="item of areas" :key="item.code" :value="item.code" :label="item.name"></el-option>
  </el-select>
  <el-select placeholder="请选择城市" v-model="city" style="margin: 0 10px;" :disabled="!province" clearable>
    <el-option  v-for="item of selectCity" :key="item.code" :value="item.code" :label="item.name"></el-option>
  </el-select>
  <el-select placeholder="请选择区域" v-model="area" :disabled="!province || !city" clearable>
    <el-option v-for="item of selectArea" :key="item.code" :value="item.code" :label="item.name"></el-option>
  </el-select>
</template>

<style lang="scss" scoped></style>
