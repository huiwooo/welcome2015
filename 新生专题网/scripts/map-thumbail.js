;
(function(doc) {
	var glass = doc.getElementById("glass"),
		map = doc.getElementById("enlarge-map"),
		thumbnail = doc.getElementById("thumbnail"),
		disWidth = thumbnail.clientWidth - glass.clientWidth - 12,
		disHeight = thumbnail.clientHeight - glass.clientHeight - 12,
		glassHeight = 130,
		mapHeight = 2660,
		widthScale = mapHeight / glassHeight;

	glass.onmousedown = function(event) {

		var event = event || window.event,
			x = event.clientX - glass.offsetLeft,
			y = event.clientY - glass.offsetTop;


		doc.onmousemove = function(event) {
			var event = event || window.event;

			glass.style.left = event.clientX - x + "px";
			glass.style.top = event.clientY - y + "px";

			if (parseInt(glass.style.left) < 0) {
				glass.style.left = 0;
			}
			if (parseInt(glass.style.top) < 0) {
				glass.style.top = 0;
			}
			if (parseInt(glass.style.left) > disWidth) {
				glass.style.left = disWidth + 'px';
			}
			if (parseInt(glass.style.top) > disHeight) {
				glass.style.top = disHeight + 'px';
			}
			glass.style.backgroundPosition = (-parseInt(glass.style.left) - 1) + "px " + (-parseInt(glass.style.top) - 1) + "px";
			map.style.backgroundPosition = (-parseInt(glass.style.left) - 1) * widthScale + "px " + (-parseInt(glass.style.top) - 1) * widthScale + "px"
		}
		doc.onmouseup = function() {
			doc.onmousemove = null;
			doc.onmouseup = null;
		}
	}

	map.onmousedown = function(event) {
		var event = event || window.event,
			args = "",
			left = 0,
			top = 0,
			x = event.clientX,
			y = event.clientY,
			px = new RegExp('px');
			
		map.onmousemove = function(event) {
			var event = event || window.event;

			args = map.style.backgroundPosition.split(" ");
			left = args[0].replace(px, ' ')*1;
			top = args[1].replace(px, ' ')*1;
			var str =  (left -	 parseInt(x - event.clientX)) + "px " +  (top - parseInt(y - event.clientY)) + "px";
			console.log(str);
			map.style.backgroundPosition = str;

			if(left < 0) {

			}

		}
		map.onmouseup = function() {
			map.onmousemove = '';
			map.onmouseup = '';
		}
	}
})(document);