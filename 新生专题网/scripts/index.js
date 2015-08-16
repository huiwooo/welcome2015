;(function(window){
    var toTopBtn = document.getElementById("to-top"),
        nav = document.getElementById("nav"),
        mapBox = document.getElementById("map-box"),
        showTitle = document.getElementById("showTitle");

    MyQuery.addHandler(toTopBtn, "click", function () {
        toWhere(0, 50);
    });

    MyQuery.addHandler(nav, "click", function (event) {
        event = event || window.event;
        var target = event.target || event.srcElement;
        switch (target.id){
            case "home":
                toWhere(0, 100);
                break;
            case "map":
                toWhere(570, 10);
                break;
            case "exhibition":
            case "encyclopedias":
                toWhere(1360, 10);
                break;
            case "style":
            case "hi":
            case "about-us":
                toWhere(1910, 10);
                break;
        }
        event.preventDefault();
        event.returnValue = false;//for ie
    });

    MyQuery.addHandler(mapBox, "mouseover", function (event) {
        event = event || window.event;
        var target = event.target || event.srcElement;
        switch (target.id){
            case "yifulou":
                setInner(target.id);
                showTitle.style.left = "128px";
                showTitle.style.top = "142px";
                break;
            case "third-building":
                setInner(target.id);
                showTitle.style.left = "169px";
                showTitle.style.top = "53px";
                break;
            case "fengyu":
                setInner(target.id);
                showTitle.style.left = "224px";
                showTitle.style.top = "83px";
                break;
            case "taiji":
                setInner(target.id);
                showTitle.style.left = "324px";
                showTitle.style.top = "35px";
                break;
            case "laocaochang":
                setInner(target.id);
                showTitle.style.left = "328px";
                showTitle.style.top = "156px";
                break;
            case "laotu":
                setInner(target.id);
                showTitle.style.left = "415px";
                showTitle.style.top = "197px";
                break;
            case "xinxiaomen":
                setInner(target.id);
                showTitle.style.left = "146px";
                showTitle.style.top = "262px";
                break;
            case "shutu":
                setInner(target.id);
                showTitle.style.left = "197px";
                showTitle.style.top = "220px";
                break;
            case "laoxiaomen":
                setInner(target.id);
                showTitle.style.left = "280px";
                showTitle.style.top = "298px";
                break;
            case "map-box":
                showTitle.style.display = "none";
        }
    });

    function getTitle(id){
        return document.getElementById(id).alt;
    }
    function setInner(id){
        var alt = getTitle(id);
        showTitle.innerHTML = alt;
        showTitle.style.display = "block";
    }
//隐藏toTop
    window.onscroll = function () {
        var sTop = document.documentElement.scrollTop + document.body.scrollTop;
        if(sTop < 580){
            toTopBtn.style.display = "none";
        }else{
            toTopBtn.style.display = "block";
        }
    }
})(window);