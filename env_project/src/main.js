import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vueEcharts from 'vue-echarts'
import { ElButton, ElCarousel, ElCarouselItem, ElRow, ElCol, ElPagination, ElTooltip, ElDivider, ElDialog } from 'element-plus'
import 'element-plus/lib/theme-chalk/index.css';
import 'regenerator-runtime/runtime';
import './assets/iconfont/iconfont.css';


const app = createApp(App)

app.use(store)
app.use(router)

app.component("vue-echarts", vueEcharts)

app.use(ElButton)
app.use(ElCarousel)
app.use(ElCarouselItem)
app.use(ElRow)
app.use(ElCol)
app.use(ElPagination)
app.use(ElTooltip)
app.use(ElDivider)
app.use(ElDialog)
app.mount('#app')