export function delay(duration){
	return new Promise((resolve,reject) => {
		setTimeout(resolve,duration)
	})
}


export function useTopFit(){
	const {statusBarHeight} = uni.getSystemInfoSync()
	let barHeight = statusBarHeight * 2 || 20
	let marginRight = 0
	// #ifdef MP-WEIXIN
	const menuinfo = uni.getMenuButtonBoundingClientRect()
	barHeight = (menuinfo.top) * 2
	marginRight = menuinfo.width * 2
	// #endif
	return  {
		barHeight:barHeight,
		marginRight:marginRight
	}
}

// 防抖
export function debounce(func, delay) {
	let timer = null;
	return function () {
		clearTimeout(timer);
		timer = setTimeout(() => {
			func.apply(this, arguments);
		}, delay);
	};
}