$(function(){
let canvas = document.createElement('canvas');
	let mapChart = echarts.init(canvas, null, {
		width: 3984,
		height: 2160
	});
	let pOp = {
		// 两种方法绘制地图都可以
		geo: {
			map: 'world',
			label: {
				fontSize: 40
			},
			itemStyle: {
				areaColor: '#122d3e',
				borderColor: '#00FDFF'
			},
			emphasis: {
				itemStyle: {
					areaColor: '#96CDCD'
				}
			},
			top: 0,
			left: 0,
			right: 0,
			bottom: 0,
			boundingCoords: [
				[-180, 90],
				[180, -90]
			]
		},
		backgroundColor: '#030d1b'
	}

	const randomData0 = () => {
		let longitude = (Math.random() * 360 - 180).toFixed(6)
		let latitude = (Math.random() * 180 - 90).toFixed(6)
		let value = (Math.random() * 3000).toFixed(2)
		return [longitude, latitude, -1, value]
	}
	let data = []
	for (let i = 0; i < 50; i++) {
		data.push(randomData0())
	}

	mapChart.setOption(pOp);
	let option = {
		backgroundColor: '#000',
		tooltip: {
			trigger: 'item',
			backgroundColor: 'rgba(166, 200, 76, 0.82)',
			borderColor: '#FFFFCC',
			showDelay: 0,
			hideDelay: 0,
			enterable: true,
			transitionDuration: 0,
			extraCssText: 'z-index:100',
			formatter: function(params, ticket, callback) {
				//根据业务自己拓展要显示的内容
				var res = "";
				var name = params.name;
				var value = params.value[params.seriesIndex + 1];
				res = "<span style='color:#fff;'>" + name + "</span><br/>数据：" + value;
				return res;
			}
		},
		visualMap: [{
			// show: false,
			type: 'continuous',
			seriesIndex: 0,
			text: ['scatter3D'],
			textStyle: {
				color: '#333'
			},
			// dimension: 3,
			calculable: true,
			max: 3000,
			inRange: {
				color: ['#87aa66', '#eba438', '#d94d4c'],
				symbolSize: [8, 30]
			}
		}],
		globe: {
			baseTexture: mapChart,
			heightTexture: '/asset/get/s/data-1491889019097-rJQYikcpl.jpg',
			displacementScale: 0.04,
			shading: 'color',
			environment: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
				offset: 0,
				color: '#000000' // 天空颜色
			}, {
				offset: 0.7,
				color: '#000000' // 地面颜色
			}, {
				offset: 1,
				color: '#000000' // 地面颜色
			}], false),
			viewControl: {
				alpha: 30,
				beta: 160,
				// targetCoord: [116.46, 39.92],
				autoRotate: true,
				autoRotateAfterStill: 10,
				distance: 150
			},
			layers: [{
				type: 'blend',
				texture: mapChart
			}]
		},
		series: [{
			name: 'lines3D',
			type: 'lines3D',
			zlevel: 2,
			coordinateSystem: 'globe',
			label: {
				show: true,
				position: 'middle'
			},
			emphasis: {
				label: {
					show: true
				}
			},
			effect: {
				show: true,
				symbol: 'image://./images/airline.png',
				symbolSize: [20, 20]
			},
			lineStyle: {
				width: 2
			},
			blendMode: 'lighter',
			data: []
		}]
	}
	for (let i = 0; i < 30; i++) {
		option.series[0].data = option.series[0].data.concat(rodamData())
	}

	function rodamData() {
		// let name = '随机点' + Math.random().toFixed(5) * 100000
		let longitude = Math.random() * 108 + 13;
		// let longitude = 105.18
		let longitude2 = Math.random() * 360 - 180
		let latitude = Math.random() * 15 + 23;
		// let latitude = 37.51
		let latitude2 = Math.random() * 180 - 90
		return {
			coords: [
				[longitude, latitude],
				[longitude2, latitude2]
			],
			value: 2367
		}
	}

	let globel = echarts.init(document.getElementById('app'));
	globel.setOption(option);

 });







