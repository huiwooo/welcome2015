var doc = document,
	btnWrap = doc.getElementById("btn-wrap");
	bigDataNav = doc.getElementById("big-data-nav"),
	bigDataNavList = bigDataNav.getElementsByTagName("a"),
	findFriendNav = doc.getElementById("find-friend-nav"),
	findFriendNavList = findFriendNav.getElementsByTagName("a");


MyQuery.addHandler(bigDataNav, "click", function(event) {
	navListChange(this, event);
	
})
MyQuery.addHandler(findFriendNav, 'click', function(event) {
	navListChange(this, event);

})
	
function navListChange(nav, event){
	var event = event || window.event,
		target = event.target || event.srcElement,

		navList = nav.getElementsByTagName("a");
	for(var i = 0, len = navList.length; i < len; i ++) {
		MyQuery.removeClass(navList[i], "selected");
	}
	MyQuery.addClass(target, "selected");
}

// 按钮切换
MyQuery.addHandler(btnWrap, "click", function(event) {
	var event = event || window.event,
		target = event.target || event.srcElement,

		leftBtn = doc.getElementById("btn-left"),
		rightBtn = doc.getElementById("btn-right"),
		bigData = doc.getElementById("big-data"),
		findFriend = doc.getElementById("find-friend");
	switch(target.id){
		case "btn-left":
			leftBtnShow();
			break;
		case "btn-right":
			rightBtnShow();
			break;
	}
	function leftBtnShow(){
		MyQuery.addClass(rightBtn, 'unselected');
		MyQuery.removeClass(leftBtn, 'unselected');
		bigData.style.display = "none";
		findFriend.style.display = "block";
	}
	function rightBtnShow(){
		MyQuery.addClass(leftBtn, "unselected");
		MyQuery.removeClass(rightBtn, 'unselected');
		findFriend.style.display = "none";
		bigData.style.display = "block";
	}
})
