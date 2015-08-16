(function(doc) {

	// var doc = document;
	var scrollPicUl = doc.getElementById("scroll-pic-ul"), // ul
		scrollPicLi = scrollPicUl.getElementsByTagName('li'), // li
		prev = doc.getElementById('prev'),
		next = doc.getElementById('next'),
		imgWidth = 745,
		isPlaying = false,
		delay = 20,
		ulWidth = scrollPicLi.length * imgWidth,
		playTimer = null;


	scrollPicUl.style.width = ulWidth + "px";    //初始化ul宽度


	function run(distance) {
		if (isPlaying) return;

		isPlaying = true; // 开始动画 

		var targetLeft = parseInt(scrollPicUl.style.left) + distance,
			l = Math.ceil(distance / 20);

		if (distance < 0) {

			timer = setInterval(function() {

				scrollPicUl.style.left = parseInt(scrollPicUl.style.left) + l + 'px';

				if (parseInt(scrollPicUl.style.left) < targetLeft) {
					clearInterval(timer);
					scrollPicUl.style.left = targetLeft + "px";
					isPlaying = false;
				}

			}, delay)
		}

		if (distance > 0) {

			timer = setInterval(function() {

				scrollPicUl.style.left = parseInt(scrollPicUl.style.left) + l + 'px';

				if (parseInt(scrollPicUl.style.left) > targetLeft) {
					clearInterval(timer);
					scrollPicUl.style.left = targetLeft + "px";
					isPlaying = false;
				}

			}, delay)
		}
	}

	function nextFunc() {
		if (isPlaying) return;
		if (parseInt(scrollPicUl.style.left) == -ulWidth + imgWidth) {
			run(ulWidth - imgWidth);
			return
		}
		run(-imgWidth);
	}

	function prevFunc() {
		if (isPlaying) return;
		if (parseInt(scrollPicUl.style.left) == 0) {
			run(-ulWidth + imgWidth);
			return
		}
		run(imgWidth);
	}

	function start() {
		playTimer = setInterval(nextFunc, 1800);
	}

	function stop() {
		clearInterval(playTimer);
	}

	next.addEventListener("click", nextFunc, false);
	prev.addEventListener("click", prev, false);

	next.addEventListener("mouseover", stop, false);
	prev.addEventListener("mouseover", stop, false);
	scrollPicUl.addEventListener("mouseover", stop, false);

	next.addEventListener("mouseout", start, false);
	prev.addEventListener("mouseout", start, false);
	scrollPicUl.addEventListener("mouseout", start, false);


	start();


})(document);