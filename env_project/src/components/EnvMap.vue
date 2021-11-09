<template>
  <div class="env-map wrap">
    <div class="map-title">PM2.5近况图</div>
    <vue-echarts class="map-charts"
                 :option="option"
                 style="width: 100%; height: 640px;"></vue-echarts>
  </div>
</template>

<script>
import { defineComponent, ref } from 'vue'
import axios from 'axios'
import * as echarts from 'echarts'

const data = [
  { name: '拉萨', value: 24 },
  { name: '上海', value: 25 },
  { name: '厦门', value: 26 },
  { name: '福州', value: 29 },
  { name: '广州', value: 38 },
  { name: '太原', value: 39 },
  { name: '昆明', value: 39 },
  { name: '沈阳', value: 50 },
  { name: '长春', value: 51 },
  { name: '南昌', value: 54 },
  { name: '海口', value: 54 },
  { name: '吉林', value: 56 },
  { name: '呼和浩特', value: 58 },
  { name: '成都', value: 58 },
  { name: '桂林', value: 59 },
  { name: '西安', value: 61 },
  { name: '重庆', value: 66 },
  { name: '南京', value: 67 },
  { name: '贵阳', value: 71 },
  { name: '北京', value: 79 },
  { name: '乌鲁木齐', value: 84 },
  { name: '杭州', value: 84 },
  { name: '济南', value: 92 },
  { name: '兰州', value: 99 },
  { name: '天津', value: 105 },
  { name: '诸暨', value: 112 },
  { name: '郑州', value: 113 },
  { name: '哈尔滨', value: 114 },
  { name: '济宁', value: 120 },
  { name: '石家庄', value: 147 },
  { name: '长沙', value: 175 },
  { name: '合肥', value: 229 },
  { name: '武汉', value: 273 },
  {
    name: '南宁',
    value: 88,
  },
  {
    name: '西宁',
    value: 54,
  },
  {
    name: '台北',
    value: 67,
  },
]
const geoCoordMap = {
  拉萨: [91.11, 29.97],
  上海: [121.48, 31.22],
  福州: [119.3, 26.08],
  海口: [110.35, 20.02],
  西宁: [101.74, 36.56],
  南宁: [108.33, 22.84],
  广州: [113.23, 23.16],
  昆明: [102.73, 25.04],
  深圳: [114.07, 22.62],
  沈阳: [123.38, 41.8],
  三亚: [109.511909, 18.252847],
  吉林: [126.57, 43.87],
  呼和浩特: [111.65, 40.82],
  成都: [104.06, 30.67],
  西安: [108.95, 34.27],
  重庆: [106.54, 29.59],
  南京: [118.78, 32.04],
  贵阳: [106.71, 26.57],
  北京: [116.46, 39.92],
  乌鲁木齐: [87.68, 43.77],
  杭州: [120.19, 30.26],
  兰州: [103.73, 36.03],
  天津: [117.2, 39.13],
  郑州: [113.65, 34.76],
  哈尔滨: [126.63, 45.75],
  石家庄: [114.48, 38.03],
  长沙: [113, 28.21],
  台北: [121.58, 25.04],
  合肥: [117.27, 31.86],
  武汉: [114.31, 30.52],
}

const convertData = function (data) {
  const res = []
  for (let i = 0; i < data.length; i++) {
    const geoCoord = geoCoordMap[data[i].name]
    if (geoCoord) {
      res.push({
        name: data[i].name,
        value: geoCoord.concat(data[i].value),
      })
    }
  }
  return res
}

// console.log(convertData(data))

export default defineComponent({
  name: 'EnvMap',
  setup() {
    const option = ref({})

    axios('/geo.json').then((res) => {
      echarts.registerMap('china', res.data)
      // 指定图表的配置项和数据
      option.value = {
        tooltip: {
          trigger: 'item', // hover触发器
        },
        visualMap: {
          // 根据map中的数据来控制颜色深浅。
          show: false,
        },
        geo: {
          show: true,
          map: 'china',
          roam: false, // 鼠标可缩放
          zoom: 1.5, // 地图初始大小
          // scaleLimit: {
          //   min: 1,
          //   max: 2
          // },
          center: [113.83531246, 34.0267395887],
          itemStyle: {
            borderColor: 'rgba(147, 235, 248, 1)',
            borderWidth: 1,
            areaColor: {
              type: 'radial',
              x: 0.5,
              y: 0.5,
              r: 0.8,
              colorStops: [
                {
                  offset: 0,
                  color: 'rgba(112, 184, 9, .3)', // 0% 处的颜色
                },
                {
                  offset: 1,
                  color: 'rgba(112, 184, 9, .8)', // 100% 处的颜色
                },
              ],
              globalCoord: false, // 缺省为 false
            },
            shadowColor: 'rgba(112, 184, 9, 1)',
            // shadowColor: 'rgba(255, 255, 255, 1)',
            shadowOffsetX: -2,
            shadowOffsetY: 2,
            shadowBlur: 10,
          },
          emphasis: {
            label: {
              show: false,
            },
            itemStyle: {
              areaColor: '#f6d62a',
              borderWidth: 0,
            },
          },
          label: {
            show: false,
          },
        },
        series: [
          {
            type: 'map',
            map: 'china',
            geoIndex: 0,
            aspectScale: 0.75, // 长宽比
            showLegendSymbol: false, // 存在legend时显示
            roam: false,
            zoom: 1.5,
            animation: false,
            // 这个是提示框
            tooltip: {
              show: false,
            },
            data: data,
          },
          {
            // 文字和标志
            name: 'PM2.5',
            type: 'scatter',
            coordinateSystem: 'geo',
            data: convertData(data),
            symbolSize: function (val) {
              return val[2] / 10
            },
            itemStyle: {
              color: '#fa6f12',
            },
            label: {
              show: false,
              // formatter: '{b}',
              // position: 'right',
              // show: true
            },
            emphasis: {
              lable: {
                show: true,
              },
            },
          },
          {
            // 地图点的动画效果
            name: 'PM2.5',
            type: 'effectScatter',
            coordinateSystem: 'geo',
            data: convertData(
              data
                .sort(function (a, b) {
                  return b.value - a.value
                })
                .slice(0, 10)
            ),
            symbolSize: function (val) {
              return val[2] / 10
            },
            showEffectOn: 'render',
            rippleEffect: {
              brushType: 'stroke',
            },
            itemStyle: {
              color: '#fa6f12',
            },
            emphasis: {
              scale: true,
            },
            zlevel: 1,
          },
        ],
      }
    })

    return {
      option,
    }
  },
})
</script>

<style lang="scss">
.env-map {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .map-title {
    font-size: 30px;
    color: #ccc;
    font-weight: 600;
    letter-spacing: 0.5rem;
    margin-bottom: 20px;
  }

  .map-charts {
  }
}
</style>
