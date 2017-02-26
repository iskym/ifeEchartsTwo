// JavaScript Document
window.onload=function(){
	//初始化echarts实例
	var myChart=echarts.init(document.getElementById('main'));
	//指定图表配置和数据
	var option = {
			title: {
					text:'mySecond',
					textStyle:{
							color:'#4b5352'
						}
				},
			tooltip:{},
			legend: {
					data:['population','gdp']
				},
			xAxis: {
					data:["2016","07","08","09","10","11","12","13","14","15"],
					axisLabel:{
							textStyle:{
									fontSize:26,
									color:'black'
								}
						},
					axisLine:{//x轴坐标线样式
							lineStyle:{
									color:'red',
									width:6
								}
						},
					z:999
				},
			yAxis: {
					inverse:true,
					position:'right',
					axisLine:{
							show:false
						},
					axisLabel:{
							textStyle:{
									fontSize:26
								}
						},
					nameTextStyle:{
							fontSize:16
						},
					splitLine:{ //Y周数据分割线
						lineStyle:{
							color:'pink'	
							}	
						}
				},
			color:['pink'],
			series:[{
					name:'population',
					type: 'bar',
					data:[1.2,3.5,2.1,2.4,3.6,2.1,1.2,3.5,2.1,2.4],
					itemStyle:{
							normal:{
									color:'#0888ea'
								}
						},
					barWidth:'20'
					
				},
				{
					name:'gdp',
					type: 'bar',
					data:[2.2,2.5,3.1,2.4,1.6,2.1,3.2,1.5,1.1,2.7],
					itemStyle:{
							normal:{
									color:'#05c8af'
								}
						},
					barWidth:'20',
					barGap:0
				}]
		};
		//使用 option
		myChart.setOption(option);
	
}
