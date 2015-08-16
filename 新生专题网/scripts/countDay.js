// 开学倒计时
(function(doc){
	var countDay = doc.getElementById('count-day'),			// 取得div #count-day
		span = countDay.getElementsByTagName('span'),		// 
		targetTime = new Date("Sept 9, 2015 00:00:00");		// 开学时间
		
	countTimeRun();											// 先倒计时一次
	var interval = setInterval(countTimeRun, 1000);			// 倒计时开始


	// 传入一个两位数，返回十位和个位数组
	function weiShu(num) {
		var sw = parseInt(num / 10),
			gw = num % 10;
		return [sw, gw];
	}

	// 传入秒数，解析为day， hour， min， sec以数组的方式返回
	function parseTime(second) {
		var day = parseInt(second / 3600 / 24),
			hour = parseInt((second / 3600) % 24),
			min = parseInt((second / 60) % 60),
			sec = parseInt(second % 60);
		return [day, hour, min, sec];
	}


	function countTimeRun() {
		var now = new Date(),                                                      	// 取得现在的时间
			timeList = [],	
																	// 各位时间数组
			second = parseInt((targetTime.getTime() - now.getTime()) / 1000);	    // 距离开学时间还有second微秒

		// 计算得到距离的时间，分解为时分秒，再分解成个位十位存入数组
		for (var i = 0, len = parseTime(second).length; i < len; i++) {
			timeList.push(weiShu(parseTime(second)[i]));
		}
		// 推平数组
		timeList = [].concat.call(timeList[0], timeList[1], timeList[2], timeList[3]);

		//写入
		for (var i = 0, len = span.length; i < len; i++) {
			span[i].style.backgroundPosition = "0 " + timeList[i] * -24 + "px";
		}
	}
})(document);
