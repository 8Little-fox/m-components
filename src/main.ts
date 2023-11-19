import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router/index'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import * as Icons from '@element-plus/icons-vue'
import { toLine } from './utils'

const app = createApp(App)
app.use(ElementPlus);
for (const i in Icons) {
  app.component(`el-icon-${toLine(i)}`, (Icons as any)[i])
}
app.use(router)
app.mount('#app')