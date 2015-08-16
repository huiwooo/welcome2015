/**
 * Created by Alkali on 15/8/7.
 */
var MyQuery = {
    addHandler: function (oElement, sEvent, fnHandler) {
        oElement.addEventListener ? oElement.addEventListener(sEvent, fnHandler, false) : oElement.attachEvent("on" + sEvent, fnHandler)
    },
    removeHandler: function (oElement, sEvent, fnHandler) {
        oElement.removeEventListener ? oElement.removeEventListener(sEvent, fnHandler, false) : oElement.detachEvent("on" + sEvent, fnHandler)
    },
    addLoadHandler: function (fnHandler) {
        this.addHandler(window, "load", fnHandler)
    },
    hasClass: function (obj, cls) {
        return obj.className.match(new RegExp('(\\s|^)' + cls + '(\\s|$)'));
    },
    addClass: function (element, value) {
        if(MyQuery.hasClass(element, value)) return;
        if(!element.className){
            element.className = value;
        }else{
            var newClassName = element.className;
            newClassName += " ";
            newClassName += value;
            element.className = newClassName;
        }
    },
    removeClass: function (obj, cls) {
        if (MyQuery.hasClass(obj, cls)) {
            var reg = new RegExp('(\\s|^)' + cls + '(\\s|$)');
            obj.className = obj.className.replace(reg, ' ');
        }
    },
    ajax: function(url, method, callback) {
        var xhr = null;
        if (window.XMLHttpRequest) xhr = new XMLHttpRequest();
        if (window.ActiveXObject) xhr = new ActiveXObject("Microsoft.XMLHttp");
        xhr.onreadystatechange = function() {
            if ((xhr.status >= 200 &&xhr.status < 300) || xhr.status == 304) {
                    callback(xhr.responseText);
            }
        }
        xhr.open(method, url);
        xhr.send(null);
    }
};

//滚动函数
function toWhere(a, x){
    var sTop = document.documentElement.scrollTop + document.body.scrollTop;
    sTop = parseInt(sTop/10)*10;

    if(sTop == a){
        //判断当页面到达目的地，取消延时代码（否则会无法正常浏览页面）
        clearTimeout(scrolldelay);
    }

    if(sTop < a){
        //把内容滚动指定的像素数（第一个参数是向右滚动的像素数，第二个参数是向下滚动的像素数）
        window.scrollBy(0,x);
        //延时递归调用，模拟滚动效果
        scrolldelay = setTimeout(function () {
            toWhere(a,x);
        },1);
    }else if(sTop > a){
        window.scrollBy(0,-x);
        scrolldelay = setTimeout(function () {
            toWhere(a,x);
        },1);
    }
}