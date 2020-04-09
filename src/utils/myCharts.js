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
              grid: {
                left: '3%',
                right: '3%',
                width: '94%',
                show: true,
                tooltip: {
                  show: true,
                  trigger: 'axis',
                  axisPointer: {
                        type: 'line'
                      }
                },
                // backgroundColor: ['#d0d885', '#d0d833'],
                // backgroundColor: 'green',
                borderColor: 'green',
                borderWidth: 2,
                shadowColor: 'rgba(0, 0, 0, 0.5)',
                shadowBlur: 10,
                containLabel: true
              },
              tooltip: {
                // show: true,
                // trigger: 'axis',
                // axisPointer: {
                //   type: 'line'
                // }
              },
              xAxis: {
                type: 'category',
                axisPointer: {
                  z: 100
              },
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
            let data = [
                  {value: 335, name: '直接访问', selected: true},
                  {value: 310, name: '邮件营销'},
                  {value: 234, name: '联盟广告'},
                  {value: 135, name: '视频广告'},
                  {value: 1548, name: '搜索引擎'}
              ]
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
              data: data,
              formatter: function (name) {
                var total = 0
                var target
                for (var i = 0, l = data.length; i < l; i++) {
                  total += data[i].value
                  if (data[i].name === name) {
                    target = data[i].value
                  }
                }
                var arr = [
                  '{names|' + name + '}',
                  '{pecents|' + ((target / total) * 100).toFixed(2) + '%}'
                ]
                return arr.join('-')
              },
              selector: true,
              selectorLabel: {
                fontWeight: 700,
                verticalAlign: 'middle',
                backgroundColor: 'red'
              },
              textStyle: {
                fontSize: 12,
                show: false,
                rich: {
                  // names: {
                  //   fontSize: 12,
                  //   verticalAlign: 'top'
                  // },
                  // pecents: {
                  //   fontSize: 12
                  // }
                },
                color: ['#4A90E2', '#2DCCA9', '#9013FE', '#FF5D5D', '#FFBE53', '#3E3F58', '#4f0202', '#ff7200']
              },
              tooltip: {
                  show: true
              }
            },
            series: [
                {
                    name: '访问来源',
                    type: 'pie',
                    roseType: 'radius',
                    radius: '55%',
                    center: ['50%', '60%'],
                    color: ['#4A90E2', '#2DCCA9', '#9013FE', '#FF5D5D', '#FFBE53', '#3E3F58', '#4f0202', '#ff7200'],
                    data: [
                        {value: 335, name: '直接访问'},
                        {value: 310, name: '邮件营销'},
                        {value: 234, name: '联盟广告'},
                        {value: 135, name: '视频广告'},
                        {value: 448, name: '搜索引擎'}
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
