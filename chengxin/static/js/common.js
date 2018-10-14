// 移动端响应式匹配
(function () {
  document.addEventListener('DOMContentLoaded', function () {
	var deviceWidth = document.documentElement.clientWidth;
	var deviceHeight = document.documentElement.clientHeight;
			document.documentElement.style.fontSize = deviceWidth / 96 + 'px';
	   }, false);
	   
	window.onresize = function(){
		var deviceWidth = document.documentElement.clientWidth;
		var deviceHeight = document.documentElement.clientHeight;
			document.documentElement.style.fontSize = deviceWidth / 96+ 'px';
	};
})();

// ajax
function ajaxData(url,callback){
	$.ajax({
		type:"get",
		url:url,
		success:function(res){
			callback(res)
		}
	});
}

// 时间格式化
function formatDateTime(inputTime) {
	var date = new Date(inputTime);
	var y = date.getFullYear();
	var m = date.getMonth() + 1;
	m = m < 10 ? ('0' + m) : m;
	var d = date.getDate();
	d = d < 10 ? ('0' + d) : d;
	var h = date.getHours();
	h = h < 10 ? ('0' + h) : h;
	var minute = date.getMinutes();
	var second = date.getSeconds();
	minute = minute < 10 ? ('0' + minute) : minute;
	second = second < 10 ? ('0' + second) : second;
	return y + '-' + m + '-' + d + ' ' + h + ':' + minute + ':' + second;
}

// 时间
// 获取本地时间
function timeFn() {
	var nowdate = new Date();
	var y = nowdate.getFullYear();
	var m = nowdate.getMonth() + 1;
	var d = nowdate.getDate();
	var h = nowdate.getHours();
	var minutes = nowdate.getMinutes();
	var s = nowdate.getSeconds();
	m = m < 10 ? '0' + m : m;
	d = d < 10 ? '0' + d : d;
	h = h < 10 ? '0' + h : h;
	minutes = minutes < 10 ? '0' + minutes : minutes;
	s = s < 10 ? '0' + s : s;
	var nowTime = y + '年' + m + '月' + d + '日&nbsp;&nbsp;' + h + ':' + minutes + ':' + s;
	$('.date').html(nowTime)
}

timeFn();
setInterval(function() {
	timeFn()
}, 1000)

// 数字滚动增加特效
function updateNum(oldNum, newNum) {
	// 将数字转为字符串
	var oldNum = oldNum.toString();
	var newNum = newNum.toString();

	numberHTML = '';
	for(var i = newNum.length - 1; i >= 0; i--) {
		if(oldNum[i] !== newNum[i]) {
			if(oldNum[i] == undefined || oldNum[i] == null || oldNum[i] == "") {
				if(newNum[i] != ","){
					numberHTML = "<li class=\"group active\">" +
					"<span class=\"old\">0</span>" +
					"<span class=\"new\">" + newNum[i] + "</span></li>" + numberHTML;
				}else{
					numberHTML = "<li class=\"group active\">" +
					"<span class=\"old\">,</span>" +
					"<span class=\"new\">" + newNum[i] + "</span></li>" + numberHTML;
				}
			} else{
				numberHTML = "<li class=\"group active\">" +
				"<span class=\"old\">" + oldNum[i] + "</span>" +
				"<span class=\"new\">" + newNum[i] + "</span></li>" + numberHTML;
			}
		} else {
			numberHTML = "<li class=\"group\">" +
				"<span class=\"old\">" + oldNum[i] + "</span>" +
				"<span class=\"new\">" + newNum[i] + "</span></li>" + numberHTML;
		}

	}
	return numberHTML;
}


// 柱状图
// 基于准备好的dom，初始化echarts实例
var barChart = echarts.init(document.getElementById('barchart'));
function barChartFn(xData, barData) {
	var barOption = {
		color: ['#3398DB'],
		tooltip: {
			trigger: 'axis',
			axisPointer: { // 坐标轴指示器，坐标轴触发有效
				type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
			}
		},
		grid: {
			top: '10%',
			left: '0',
			right: '0',
			bottom: '0',
			containLabel: true
		},
		xAxis: [{
			type: 'category',
			axisLine: {
				lineStyle: {
					color: '#130C44'
				}
			},
			axisTick: {
				show: false,
				alignWithLabel: true
			},
			axisLabel: {
				color: '#fff',
			},
			data: xData,

		}],
		yAxis: [{
			type: 'value',
			axisLabel: {
				color: '#fff',
			},
			axisLine: {
				lineStyle: {
					color: '#130C44'
				}
			},
			splitLine: {
				lineStyle: {
					color: '#130C44'
				}
			},
		}],
		series: [{
			name: '岗位数量',
			type: 'bar',
			barMaxWidth: '10',
			itemStyle: {
				normal: {
					color: new echarts.graphic.LinearGradient(
						0, 0, 0, 1, [{
								offset: 0,
								color: '#C308CB'
							},
							{
								offset: 1,
								color: '#7704D1'
							}
						]
					)
				},
			},
			data: barData
		}]
	};

	barChart.setOption(barOption);
}
				
// 折线图函数
function lineChartFn(xlineData, linejobData, linehelpData, linetrainData) {
	var lineChart = echarts.init(document.getElementById('linechart'));
	var lineOption = {
		color: ['#DD5858', '#00B37A', '#D79D4B', '#40B3E2'],
		tooltip: {
			trigger: 'axis'
		},
		legend: {
			top: 3,
			textStyle: {
				color: '#fff',
			},
			data: ['党群E家', '阳光政务', '诚信之家']
		},
		grid: {
			top: '10%',
			left: '5%',
			right: '0',
			bottom: '0',
			containLabel: true
		},
		xAxis: [{
			type: 'category',
			axisLine: {
				lineStyle: {
					color: '#130C44'
				}
			},

			axisTick: {
				show: false,
				alignWithLabel: true
			},
			axisLabel: {
				color: '#fff',
				rotate: 50,
			},

			data: xlineData

		}],

		yAxis: {
			type: 'value',
			axisLabel: {
				color: '#fff',
			},
			axisLine: {
				lineStyle: {
					color: '#130C44'
				}
			},
			splitLine: {
				lineStyle: {
					color: '#130C44'
				}
			},

		},
		series: [{
				name: '党群E家',
				type: 'line',
				data: linejobData
			},
			{
				name: '阳光政务',
				type: 'line',
				data: linehelpData
			},
			{
				name: '诚信之家',
				type: 'line',
				data: linetrainData
			}

		]
	};

	lineChart.setOption(lineOption);
}

// 圆环图
// 流动人口
function pieChart1Fn(obj) {
	var pieChart1 = echarts.init(document.getElementById('piechart1'));
	var pieOption1 = {
		color: ['#FFB50A', '#8C04FA', '#10BD8F', '#0DB7DB'],
		legend: {
			bottom: '0',
			itemWidth: 10,
			itemHeight: 10,
			borderRadius: 10,
			padding: [10, 30],
			textStyle: {
				color: '#fff',
			},
			data: ['流动','辖区']
		},
		tooltip:{
			 trigger: 'item',
        	formatter: "{a} <br/>{b}: {d}%"
		},
		series: [{
			name: '流动人口',
			type: 'pie',
			radius: ['40%', '55%'],
			center: ['50%', '40%'],
			avoidLabelOverlap: false,
			label: {
				normal: {
					position: 'outside',
					formatter: '{d}%',
					color: '#fff',
				},
			},
			labelLine: {
				normal: {
					length: 0,
					length2: 15,
					lineStyle: {
						color: '#fff',
					},
				}
			},
			data: [
				{value: obj['liudong'],name: '流动'},
				{value: obj['xiaqu'],name: '辖区'}
			]
		}]
	}
	pieChart1.setOption(pieOption1);
}

// 流动党员
function pieChart2Fn(obj) {
	var pieChart2 = echarts.init(document.getElementById('piechart2'));
	var pieOption2 = {
		color: ['#FFB50A', '#8C04FA', '#10BD8F', '#10BD8F', '#0DB7DB'],
		legend: {
			bottom: '0',
			itemWidth: 10,
			itemHeight: 10,
			borderRadius: 10,
			padding: [10, 20],
			textStyle: {
				color: '#fff',
			},
			data: ['流动', '辖区']
		},
		tooltip:{
			 trigger: 'item',
        	formatter: "{a} <br/>{b}: {d}%"
		},
		series: [{
			name: '流动党员',
			type: 'pie',
			radius: ['40%', '55%'],
			center: ['50%', '40%'],
			label: {
				normal: {
					position: 'outside',
					formatter: '{d}%',
					color: '#fff',
				},
			},
			//minAngle: 20,
			labelLine: {
				normal: {
					length: 0,
					length2: 15,
					lineStyle: {
						color: '#fff',
					},
				}
			},
			data: [
				{value: obj['liudong'],name: '流动'},
				{value: obj['xiaqu'],name: '辖区'}
			]
		}]
	}
	pieChart2.setOption(pieOption2);
}

// 店铺
function pieChart3Fn(obj) {
	var pieChart3 = echarts.init(document.getElementById('piechart3'));
	var pieOption3 = {
		color: ['#FFB50A', '#8C04FA', '#10BD8F', '#10BD8F', '#0DB7DB'],
		legend: {
			bottom: '0',
			itemWidth: 10,
			itemHeight: 10,
			borderRadius: 10,
			padding: [10, 20],
			textStyle: {
				color: '#fff',
			},
			data: ['诚信','党员']
		},
		tooltip:{
			 trigger: 'item',
        	formatter: "{a} <br/>{b}: {d}%"
		},
		series: [{
			name: '店铺',
			type: 'pie',
			radius: ['40%', '55%'],
			center: ['50%', '40%'],
			label: {
				normal: {
					position: 'outside',
					formatter: '{d}%',
					color: '#fff',

				},
			},
			labelLine: {
				normal: {
					length: 0,
					length2: 15,
					lineStyle: {
						color: '#fff',
					},
				}
			},
			//minAngle: 20,
			data: [{
					value: obj['chengxin'],
					name: '诚信'
				},
				{
					value: obj['dangyuan'],
					name: '党员'
				}
			]
		}]
	}
	pieChart3.setOption(pieOption3);
}

// 政治面貌
function pieChart4Fn(obj) {
	var pieChart4 = echarts.init(document.getElementById('piechart4'));
	var pieOption4 = {
		color: ['#FFB50A', '#8C04FA', '#10BD8F', '#10BD8F', '#0DB7DB'],
		legend: {
			bottom: '0',
			itemWidth: 10,
			itemHeight: 10,
			borderRadius: 10,
			padding: [10, 20],
			textStyle: {
				color: '#fff',
			},
			data: ['党员', '其他党派', '无党派']
		},
		tooltip:{
			 trigger: 'item',
        	formatter: "{a} <br/>{b}: {d}%"
		},
		series: [{
			name: '政治面貌',
			type: 'pie',
			radius: ['40%', '55%'],
			center: ['50%', '40%'],
			label: {
				normal: {
					position: 'outside',
					formatter: '{d}%',
					color: '#fff',

				},
			},
			labelLine: {
				normal: {
					length: 0,
					length2: 15,
					lineStyle: {
						color: '#fff',
					},
				}
			},
			minAngle: 20,
			data: [{
					value: obj["dangyuan"],
					name: '党员'
				},
				{
					value: obj["qitadang"],
					name: '其他党派'
				},
				{
					value: obj["wudangpai"],
					name: '无党派'
				},

			]
		}]
	}
	pieChart4.setOption(pieOption4);
}

// 困难人员
function pieChart5Fn(obj) {
	var pieChart5 = echarts.init(document.getElementById('piechart5'));
	var pieOption5 = {
		color: ['#FFB50A', '#8C04FA', '#10BD8F', '#10BD8F', '#0DB7DB'],
		legend: {
			bottom: '0',
			itemWidth: 10,
			itemHeight: 10,
			borderRadius: 10,
			padding: [10, 40],
			textStyle: {
				color: '#fff',
			},
			data: ['重点人群', '低保户','困难户','空巢老人']
		},
		tooltip:{
			 trigger: 'item',
        	formatter: "{a} <br/>{b}: {d}%"
		},
		series: [{
			name: '困难人员',
			type: 'pie',
			radius: ['40%', '55%'],
			center: ['50%', '40%'],
			label: {
				position: 'outside',
				formatter: '{d}%',
				color: '#fff',
				align: 'left',
				verticalAlign: 'bottom'
			},
			itemStyle: {
				emphasis: {
					shadowBlur: 10,
					shadowOffsetX: 0,
					shadowColor: 'rgba(0, 0, 0, 0.5)'
				}
			},
			labelLine: {
				normal: {
					length: 0,
					length2: 15,
					lineStyle: {
						color: '#fff',
					},
				}
			},
			//minAngle: 20,
			data: [
				{value: obj["keyperson"],name: '重点人群'},
				{value: obj["dibao"],name: '低保户'},
				{value: obj["kunnan"],name: '困难户'},
				{value: obj["kongchao"],name: '空巢老人'},
				
			]
		}]
	}
	pieChart5.setOption(pieOption5);
}

// 大学生
function pieChart6Fn(obj) {
	var pieChart6 = echarts.init(document.getElementById('piechart6'));
	var pieOption6 = {
		color: ['#FFB50A', '#8C04FA', '#10BD8F', '#10BD8F', '#0DB7DB'],
		legend: {
			bottom: '0',
			itemWidth: 10,
			itemHeight: 10,
			borderRadius: 10,
			padding: [10, 20],
			textStyle: {
				color: '#fff',
			},
			data: ['大专以上', '大专','大专以下']
		},
		tooltip:{
			 trigger: 'item',
        	formatter: "{a} <br/>{b}: {d}%"
		},
		series: [{
			name: '大学生',
			type: 'pie',
			radius: ['40%', '55%'],
			center: ['50%', '40%'],
			label: {
				position: 'outside',
				formatter: '{d}%',
				color: '#fff',
				align: 'left',
				verticalAlign: 'bottom'
			},
			labelLine: {
				normal: {
					length: 0,
					length2: 15,
					lineStyle: {
						color: '#fff',
					},
				}
			},
			//minAngle: 20,
			data: [
				{value: obj["dazhuanys"],name: '大专以上'},
				{value: obj["dazhuan"],name: '大专'},
				{value: obj["dazhuanyx"],name: '大专以下'},
			]
		}]
	}
	pieChart6.setOption(pieOption6);
}

// 性别
function pieChart7Fn(obj) {
	var pieChart7 = echarts.init(document.getElementById('piechart7'));
	var pieOption7 = {
		color: ['#FFB50A', '#8C04FA', '#10BD8F', '#10BD8F', '#0DB7DB'],
		legend: {
			bottom: '0',
			itemWidth: 10,
			itemHeight: 10,
			borderRadius: 10,
			padding: [10, 20],
			textStyle: {
				color: '#fff',
			},
			data: ['男', '女']
		},
		tooltip:{
			 trigger: 'item',
        	formatter: "{a} <br/>{b}: {d}%"
		},
		series: [{
			name: '性别',
			type: 'pie',
			radius: ['40%', '55%'],
			center: ['50%', '40%'],
			label: {
				position: 'outside',
				formatter: '{d}%',
				color: '#fff',
				align: 'left',
				verticalAlign: 'bottom'
			},
			labelLine: {
				normal: {
					length: 0,
					length2: 15,
					lineStyle: {
						color: '#fff',
					},
				}
			},
			//minAngle: 20,
			data: [{
					value: obj["nan"],
					name: '男'
				},
				{
					value: obj["nv"],
					name: '女'
				},
			]
		}]
	}
	pieChart7.setOption(pieOption7);
}

// 就业
function pieChart8Fn(obj) {
	var pieChart8 = echarts.init(document.getElementById('piechart8'));
	var pieOption8 = {
		color: ['#FFB50A', '#8C04FA', '#10BD8F', '#10BD8F', '#0DB7DB'],
		legend: {
			bottom: '0',
			itemWidth: 10,
			itemHeight: 10,
			borderRadius: 10,
			padding: [10, 20],
			textStyle: {
				color: '#fff',
			},
			data: ['失业', '就业']
		},
		tooltip:{
			 trigger: 'item',
        	formatter: "{a} <br/>{b}: {d}%"
		},
		series: [{
			name: '就业',
			type: 'pie',
			radius: ['40%', '55%'],
			center: ['50%', '40%'],
			label: {
				position: 'outside',
				formatter: '{d}%',
				color: '#fff',
				align: 'left',
				verticalAlign: 'bottom'
			},
			labelLine: {
				normal: {
					length: 0,
					length2: 15,
					lineStyle: {
						color: '#fff',
					},
				}
			},
			//minAngle: 20,
			data: [{
					value: obj["shiye"],
					name: '失业'
				},
				{
					value: obj["jiuye"],
					name: '就业'
				},
			]
		}]
	}
	pieChart8.setOption(pieOption8);
}