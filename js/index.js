//1.柱状图模块
(function() {
    //tab栏切换数据
    var data = {
        2019: [4000, 6000, 13000, 9000, 6000, 12000, 6000],
        2020: [3500, 8000, 15000, 10000, 5000, 14000, 7000]
    };
    //1.实例化对象
    var myChart = echarts.init(document.querySelector(".bar .chart"));
    //2.指定配置和数据
    var option = {
        color: ['#2f89cf'],
        tooltip: {
            trigger: 'axis',
            axisPointer: { // 坐标轴指示器，坐标轴触发有效
                type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
            }
        },
        grid: {
            left: '1%',
            right: '3%',
            bottom: '3%',
            top: '10px',
            containLabel: true
        },
        xAxis: [{
            type: 'category',
            data: ['旅游行业', '教育培训', 'IT行业', '医疗行业', '电竞行业', '社交行业', '金融行业'],
            axisTick: {
                alignWithLabel: true,
                //刻度线样式
                lineStyle: {
                    color: ""
                }
            },
            axisLabel: {
                color: "rgba(255,255,255,.6)",
                fontSize: "12"
            },
            axisLine: {
                show: false
            }
        }],
        yAxis: [{
            type: 'value',
            axisLabel: {
                color: "rgba(255,255,255,.6)",
                fontSize: "12"
            },
            axisLine: {
                show: true,
                lineStyle: {
                    color: "rgba(255, 255, 255, .1)"
                }
            },
            splitLine: {
                lineStyle: {
                    color: "rgba(255, 255, 255, .1)"
                }
            }
        }],
        series: [{
            name: '就业访问',
            type: 'bar',
            //柱子大小
            barWidth: '35%',
            //设置圆角半径  可以设置指定4个圆角半径[5,5,0,0] 顺时针左上，右上，右下，左下
            itemStyle: {
                barBorderRadius: 5
            },
            data: [4000, 6000, 13000, 9000, 6000, 12000, 6000]
        }]
    };
    //3.将数据给实例化对象
    myChart.setOption(option);
    //4.让图表跟随屏幕自适应
    window.addEventListener("resize", function() {
        myChart.resize();
    });
    //5.实现tab栏切换功能
    $(".bar h2 a").on("click", function() {
        $(this).addClass("active").siblings("a").removeClass("active");
        currentData = data[this.dataset.year];
        option = {
            series: [{
                data: currentData
            }]
        };
        myChart.setOption(option);
    });

})();

//2.折线图模块
(function() {
    //1.实例化对象
    var myChart = echarts.init(document.querySelector(".line .chart"));
    //2.指定配置和数据
    var option = {
        color: ["#00f2f1", "#ed3f35"],
        tooltip: {
            trigger: 'axis',
        },
        legend: {
            data: ['新增实习生', '离职员工'],
            //修改图例组件文字颜色
            textStyle: {
                color: "#4c9bfd"
            },
            //修改图例组件位置
            right: "5%"
        },
        grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            top: '20%',
            //显示边框
            show: true,
            //边框颜色
            borderColor: "#012f4a",
            //包含刻度文字在内
            containLabel: true
        },
        xAxis: {
            type: 'category',
            boundaryGap: false,
            axisTick: {
                //刻度去除
                show: false
            },
            axisLabel: {
                color: "#4c9bfd"
            },
            axisLine: {
                //去除轴线
                show: false
            },
            //去除轴内间距
            boundaryGap: false,
            data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月']
        },
        yAxis: {
            type: 'value',
            axisTick: {
                //刻度去除
                show: false
            },
            axisLabel: {
                color: "#4c9bfd"
            },
            splitLine: {
                lineStyle: {
                    color: "#012f4a"
                }
            }
        },
        series: [{
                name: '新增实习生',
                type: 'line',
                //折线设置为圆滑
                smooth: true,
                data: [220, 202, 501, 534, 290, 330, 120, 225, 390, 450, 219, 250]
            },
            {
                name: '离职员工',
                type: 'line',
                //折线设置为圆滑
                smooth: true,
                data: [400, 331, 200, 123, 233, 523, 400, 142, 270, 274, 210, 430]
            }
        ]
    };
    //3.将数据给实例化对象
    myChart.setOption(option);
    //4.让图表跟随屏幕自适应
    window.addEventListener("resize", function() {
        myChart.resize();
    })
})();

//3.饼状图模块
(function() {
    //1.实例化对象
    var myChart = echarts.init(document.querySelector(".pie .chart"));
    //2.指定配置和数据
    var option = {
        //更换颜色
        color: [
            "#065abc",
            "#066eab",
            "#0682ab",
            "#06a0ab",
        ],
        tooltip: {
            trigger: 'item',
            formatter: '{a} <br/>{b}: {c} ({d}%)'
        },
        legend: {
            orient: 'vertical',
            bottom: "5%",
            // 修改图例标记的大小
            itemWidth: 10,
            itemHeight: 10,
            data: ['20岁以下', '20-29岁', '30-39岁', '40-49岁'],
            //图例列表的布局朝向 horizontal:横向布局  vertical:纵向布局
            orient: "horizontal",
            align: "auto",
            textStyle: {
                color: "rgba(255,255,255,.5)",
                fontSize: 12
            }
        },
        series: [{
            name: '年龄分布',
            type: 'pie',
            //水平居中
            center: ["50%", "40%"],
            //修改内外圆半径
            radius: ['40%', '60%'],
            avoidLabelOverlap: false,
            label: {
                //不显示标签文字
                show: false,
                position: 'center'
            },
            emphasis: {
                label: {
                    //标签内容显示与否
                    show: false,
                    /* fontSize: '30',
                    fontWeight: 'bold' */
                }
            },
            labelLine: {
                //不显示连接线
                show: false
            },
            data: [
                { value: 150, name: '20岁以下' },
                { value: 300, name: '20-29岁' },
                { value: 250, name: '30-39岁' },
                { value: 50, name: '40-49岁' },
            ]
        }]
    };
    //3.把数据给实例化对象
    myChart.setOption(option);
    //4.让图表跟随屏幕自动变化
    window.addEventListener("resize", function() {
        myChart.resize();
    })
})();

//4.柱状图-技能掌握模块
(function() {
    var myColor = ["#1089E7", "#F57474", "#56D0E3", "#F8B448", "#8B78F6", "#0682ab"];
    //1.实例化对象
    var myChart = echarts.init(document.querySelector(".bar1 .chart"));
    //2.指定配置和数据
    var option = {
        grid: {
            left: '21%',
            top: "2%",
            bottom: '0%',
        },
        xAxis: {
            show: false
        },
        yAxis: [{
            axisLine: {
                show: false
            },
            axisTick: {
                show: false
            },
            axisLabel: {
                color: "#fff"
            },
            data: ['React', 'Vue', 'Node', 'JavaScript', 'CSS3', 'HTML5']
        }, {
            //是否反向坐标
            inverse: true,
            data: [702, 610, 450, 793, 694, 528],
            // 不显示y轴的线
            axisLine: {
                show: false
            },
            // 不显示刻度
            axisTick: {
                show: false
            },
            // 把刻度标签里面的文字颜色设置为白色
            axisLabel: {
                color: "#fff"
            },
        }],
        series: [{
                name: '条',
                type: 'bar',
                data: [52, 69, 78, 44, 60, 70],
                //相当于z-index 层级
                yAxisIndex: 0,
                //修改第一组柱子的圆角
                itemStyle: {
                    barBorderRadius: 20,
                    //此时的color 可以修改柱子的颜色
                    color: function(params) {
                        // console.log(params); params里面存储的是6个柱子的对象
                        //params.dataIndex当前柱子额索引号
                        return myColor[params.dataIndex];
                    }
                },
                // 柱子之间的距离
                barCategoryGap: 50,
                //柱子的宽度
                barWidth: 10,
                //（柱子上）图形上的文本标签
                label: {
                    show: true,
                    //图形内显示
                    position: "inside",
                    //文字的显示格式 {c}会自动的解析data里面的数据
                    formatter: "{c}%"
                }
            },
            {
                name: '框',
                type: 'bar',
                data: [100, 100, 100, 100, 100, 100],
                yAxisIndex: 1,
                // 柱子之间的距离
                barCategoryGap: 50,
                //柱子的宽度
                barWidth: 15,
                itemStyle: {
                    color: "none",
                    borderColor: "#00c1de",
                    borderWidth: 3,
                    barBorderRadius: 15
                }
            }
        ]
    };
    //3.将数据给实例化对象
    myChart.setOption(option);
    //4.让图表跟随屏幕大小变化
    window.addEventListener("resize", function() {
        myChart.resize();
    })
})();

//5.折线图-播放量模块
(function() {
    //1.实例化对象
    var myChart = echarts.init(document.querySelector(".line1 .chart"));
    //2.指定配置和数据
    var option = {
        tooltip: {
            trigger: 'axis'
        },
        legend: {
            data: ['播放量', '转发量'],
            top: "0%",
            textStyle: {
                color: "rgba(255,255,255,.5)",
                fontSize: 12
            }
        },
        grid: {
            left: '10',
            right: '10',
            bottom: '10',
            top: "30",
            containLabel: true
        },
        xAxis: [{
            type: 'category',
            boundaryGap: false,
            data: ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24", "25", "26", "26", "28", "29", "30"],
            axisLabel: {
                textStyle: {
                    color: "rgba(255,255,255,.6)",
                    fontSize: 12
                }
            },
            axisLine: {
                lineStyle: {
                    color: "rgba(255,255,255,.2)"
                }
            }
        }],
        yAxis: [{
            type: 'value',
            axisTick: { show: false },
            axisLine: {
                lineStyle: {
                    color: "rgba(255,255,255,.1)"
                }
            },
            axisLabel: {
                textStyle: {
                    color: "rgba(255,255,255,.6)",
                    fontSize: 12
                }
            },
            // 修改分割线的颜色
            splitLine: {
                lineStyle: {
                    color: "rgba(255,255,255,.1)"
                }
            }
        }],
        series: [{
                name: '播放量',
                type: 'line',
                // 单独修改线的样式
                lineStyle: {
                    color: "#0184d5",
                    width: 2
                },
                //线圆滑
                smooth: true,
                areaStyle: {
                    // 渐变色，只需要复制即可
                    color: new echarts.graphic.LinearGradient(
                        0,
                        0,
                        0,
                        1, [{
                                offset: 0,
                                color: "rgba(1, 132, 213, 0.4)" // 渐变色的起始颜色
                            },
                            {
                                offset: 0.8,
                                color: "rgba(1, 132, 213, 0.1)" // 渐变线的结束颜色
                            }
                        ],
                        false
                    ),
                    shadowColor: "rgba(0, 0, 0, 0.1)"
                },
                // 设置拐点 小圆点
                symbol: "circle",
                // 拐点大小
                symbolSize: 8,
                // 设置拐点颜色以及边框
                itemStyle: {
                    color: "#0184d5",
                    borderColor: "rgba(221, 220, 107, .1)",
                    borderWidth: 12
                },
                // 开始不显示拐点， 鼠标经过显示
                showSymbol: false,
                data: [30, 40, 30, 40, 30, 40, 30, 60, 20, 40, 30, 40, 30, 40, 30, 40, 30, 60, 20, 40, 30, 40, 30, 40, 30, 40, 20, 60, 50, 40]
            },
            {
                name: "转发量",
                type: "line",
                smooth: true,
                lineStyle: {
                    normal: {
                        color: "#00d887",
                        width: 2
                    }
                },
                areaStyle: {
                    normal: {
                        color: new echarts.graphic.LinearGradient(
                            0,
                            0,
                            0,
                            1, [{
                                    offset: 0,
                                    color: "rgba(0, 216, 135, 0.4)"
                                },
                                {
                                    offset: 0.8,
                                    color: "rgba(0, 216, 135, 0.1)"
                                }
                            ],
                            false
                        ),
                        shadowColor: "rgba(0, 0, 0, 0.1)"
                    }
                },
                // 设置拐点 小圆点
                symbol: "circle",
                // 拐点大小
                symbolSize: 5,
                // 设置拐点颜色以及边框
                itemStyle: {
                    color: "#00d887",
                    borderColor: "rgba(221, 220, 107, .1)",
                    borderWidth: 12
                },
                // 开始不显示拐点， 鼠标经过显示
                showSymbol: false,
                data: [50, 30, 50, 60, 10, 50, 60, 40, 60, 40, 80, 30, 50, 60, 30, 10, 30, 60, 20, 50, 70, 40, 30, 40, 30, 20, 40, 30, 50, 20]
            }
        ]
    };
    //3.将数据给实例化对象
    myChart.setOption(option);
    //4.让图表跟随屏幕大小变化
    window.addEventListener("resize", function() {
        myChart.resize();
    })
})();

//6.饼状图-地区分布模块
(function() {
    //1.实例化对象
    var myChart = echarts.init(document.querySelector(".pie1 .chart"));
    //2.指定配置和数据
    var option = {
        color: ['#006cff', '#60cda0', '#ed8884', '#ff9f7f', '#0096ff', '#9fe6b8', '#32c5e9', '#1d9dff'],
        tooltip: {
            trigger: 'item',
            formatter: '{a} <br/>{b} : {c} ({d}%)'
        },
        legend: {
            left: 'center',
            top: 'bottom',
            //图例之间的距离
            itemGap: 5,
            itemWidth: 8,
            itemHeight: 8,
            textStyle: {
                fontSize: 10,
                color: "#fff"

            },
            data: ['云南', '北京', '山东', '河北', '江苏', '浙江', '四川', '湖北']
        },
        series: [{
            name: '面积模式',
            type: 'pie',
            radius: ["12%", "70%"],
            center: ['50%', '45%'],
            roseType: 'area',
            label: {
                fontSize: 10
            },
            labelLine: {
                length: 4,
                length2: 6
            },
            data: [
                { value: 20, name: '云南' },
                { value: 26, name: '北京' },
                { value: 24, name: '山东' },
                { value: 25, name: '河北' },
                { value: 20, name: '江苏' },
                { value: 25, name: '浙江' },
                { value: 30, name: '四川' },
                { value: 42, name: '湖北' }
            ]
        }]
    };
    //3.将数据给实例化对象
    myChart.setOption(option);
    //4.让图表跟随屏幕大小变化
    window.addEventListener("resize", function() {
        myChart.resize();
    })
})();