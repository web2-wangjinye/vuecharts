/**
 * 各种画echarts图表的方法都封装在这里
 * 注意：这里echarts没有采用按需引入的方式，只是为了方便学习
 */

import echarts from 'echarts'
const install = function (Vue) {
  Object.defineProperties(Vue.prototype, {
    $chart: {
      get () {
        return {
          line1: function (id) {
            this.chart = echarts.init(document.getElementById(id))
            this.chart.clear()
            const optionData = {
              xAxis: {
                type: 'category',
                data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
              },
              yAxis: {
                type: 'value'
              },
              series: [{
                data: [820, 932, 901, 934, 1290, 1330, 1320],
                type: 'line',
                smooth: true
              }]
            }
            this.chart.setOption(optionData)
          },
          pie1: function (id) {
            this.chart = echarts.init(document.getElementById(id))
            this.chart.clear()
            const optionData = {
              title: {
                text: '某站点用户访问来源',
                subtext: '纯属虚构',
                left: 'center',
                textStyle: {
                    color: 'red'
                },
                subtextStyle: {
                  color: 'green'
              }
            },
            tooltip: {
                trigger: 'item',
                formatter: '{a} <br/>{b} : {c} ({d}%)'
            },
            legend: {
              icon: 'circle',
              itemWidth: 10,
              itemHeight: 10,
              orient: 'vertical',
              left: 'left',
              data: ['直接访问', '邮件营销', '联盟广告', '视频广告', '搜索引擎'],
              textStyle: {
                // borderWidth: 2,
                // shadowBlur: 2,
                // shadowColor: 'yellow',
                // color: 'red',
                // borderColor: 'green'
              },
              formatter: function (name) {
                return echarts.format.truncateText(name, 80, '14px Microsoft Yahei', '…')
              },
                tooltip: {
                  show: true
              }
            },
            series: [
                {
                    name: '访问来源',
                    type: 'pie',
                    radius: '55%',
                    center: ['50%', '60%'],
                    data: [
                        {value: 335, name: '直接访问', selected: true},
                        {value: 310, name: '邮件营销'},
                        {value: 234, name: '联盟广告'},
                        {value: 135, name: '视频广告'},
                        {value: 1548, name: '搜索引擎'}
                    ],
                    emphasis: {
                        itemStyle: {
                            shadowBlur: 10,
                            shadowOffsetX: 0,
                            shadowColor: 'rgba(0, 0, 0, 0.5)'
                        }
                    }
                }
            ]
            }
            this.chart.setOption(optionData)
          }
        }
      }
    }
  })
}

export default {
  install
}
