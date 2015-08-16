var doc = document,
    btnwrap = doc.getElementById("btn-wrap"),
    leftBtn = doc.getElementById("btn-left"),
    rightBtn = doc.getElementById("btn-right"),
    strategyNav = doc.getElementById("strategy-nav"),
    strategyNavList = strategyNav.getElementsByTagName("a"),
    orgNav = doc.getElementById("org-nav"),
    orgNavList = orgNav.getElementsByTagName('a'),
    strategyContent = doc.getElementById("new-student-strategy"),
    orgContent = doc.getElementById("school-org"),
    wikiContent = doc.getElementById("wiki-content"),
    pageIndexWrap = doc.getElementById("page-index"),
    ruxuexizhi = doc.getElementById("ruxuexuzhi"),
    tuanweizhishubumen = doc.getElementById("tuanweizhishubumen");

sendAjax(ruxuexizhi);

MyQuery.addHandler(leftBtn, "click", function() {
    MyQuery.addClass(rightBtn, "unselected");
    MyQuery.removeClass(leftBtn, "unselected");

    orgContent.style.display = "none";
    strategyContent.style.display = "block";

    sendAjax(ruxuexizhi)
});
MyQuery.addHandler(rightBtn, "click", function() {
    MyQuery.addClass(leftBtn, "unselected");
    MyQuery.removeClass(rightBtn, "unselected");

    orgContent.style.display = "block";
    strategyContent.style.display = "none";

    sendAjax(tuanweizhishubumen);
});
MyQuery.addHandler(strategyNav, "click", function(event) {
    var event = event || window.event,
        target = event.target || event.srcElement;
    if (target.tagName.toLowerCase() != "a") return;
    navListChange(this, target);
    sendAjax(target)

});
MyQuery.addHandler(orgNav, 'click', function(event) {
    var event = event || window.event,
        target = event.target || event.srcElement;
    if (target.tagName.toLowerCase() != "a") return;
    navListChange(this, target);
    sendAjax(target)

});

function navListChange(nav, target) {
    navList = nav.getElementsByTagName("a");
    for (var i = 0, len = navList.length; i < len; i++) {
        MyQuery.removeClass(navList[i], "selected");
    }
    MyQuery.addClass(target, "selected");

}

function sendAjax(target) {
    var url = "./json/" + target.id + ".json";

    MyQuery.ajax(url, "GET", function(response) {
        var page = response.split("<EOP>"),
            inputPageIndex = doc.createElement("a"),
            pageIndexContent = '',
            pageIndex = null;
        wikiContent.innerHTML = page[0];
        console.log(page[0]);
        if(page.length <= 1) return;
        for (var i = 0; i < page.length; i++) {
            pageIndexContent += "<a>" + (i + 1) + "</a>";
        }
        pageIndexWrap.innerHTML = pageIndexContent;
        pageIndex = pageIndexWrap.getElementsByTagName("a");
        pageIndex[0].className = "selected";
        MyQuery.addHandler(pageIndexWrap, "click", function(event) {
            var event = event || window.event,
                target = event.target || event.srcElement;
            if (target.tagName.toLowerCase() != "a") return;

                navListChange(this, target);
            wikiContent.innerHTML = page[parseInt(target.innerHTML) - 1];
        })
    })
}

var toTopBtn = document.getElementById("to-top");
MyQuery.addHandler(toTopBtn, "click", function() {
    toWhere(0, 100);
});
//隐藏toTop
window.onscroll = function() {
    var sTop = document.documentElement.scrollTop + document.body.scrollTop;
    if (sTop < 580) {
        toTopBtn.style.display = "none";
    } else {
        toTopBtn.style.display = "block";
    }
}