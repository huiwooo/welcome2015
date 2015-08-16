/**
 * Created by Alkali on 15/8/7.
 */
;(function(){
    var shadow = document.getElementById("shadow"),//遮罩层
        loginForm = document.getElementById("login-form"),//登陆界面
        log = document.getElementById("login"),//index页面上的登陆标签
        loginClose = document.getElementById("login-close"),//登陆界面关闭按钮
        loginBtn = document.getElementById("login-btn"),//确定登陆按钮
        screenWidth = document.documentElement.clientWidth,//宽
        screenHeight = document.body.clientHeight;//高
    var fhl = document.getElementById("form-hobby-list"),//爱好标签列表
        informationForm = document.getElementById("information-form"),//完善信息界面
        skipBtn = document.getElementById("form-btn-skip"),//跳过按钮
        ensureBtn = document.getElementById("form-btn-ensure"),//确定按钮
        informationClose = document.getElementById("information-close");//完善信息界面关闭按钮
    shadow.style.width = screenWidth + "px";
    shadow.style.height = screenHeight + "px";
    MyQuery.addHandler(log, "click", function () {
        shadow.style.display = "block";
        loginForm.style.display = "block";

    });
    MyQuery.addHandler(loginClose, "click", function () {
        loginForm.style.display = "none";
        shadow.style.display = "none";
    });

    MyQuery.addHandler(loginBtn, "click", function () {
        var userName = document.getElementById("login-usertext").value,
            password = document.getElementById("login-pwtext").value;
        var regUserName = /[\u4e00-\u9fa5]/,
            regpw = /\d{6}/,
            regUserNum = /\d{11}/;
        if(userName.length == 0){
            alert("用户名不能为空");
            return false;
        }
        if(password.length == 0){
            alert("密码不能为空");
            return false;
        }
        if(userName.indexOf(" ") >=0 || password.indexOf(" ") >=0){
            alert("不要闹，别输入空格!");
            return false;
        }
        if(regUserName.test(userName) || regUserNum.test(userName)){
            if(regpw.test(password)){
                loginForm.style.display = "none";
                informationForm.style.display = "block";
            }else{
                alert("请输入身份证后六位");
                return false;
            }
        }else{
            alert("请输入正确的姓名或通知书号");
            return false;
        }
    });

    MyQuery.addHandler(fhl, "click", function (event) {
        event = event || window.event;
        var target = event.target || event.srcElement;
        if(MyQuery.hasClass(target, "unselected")){
            MyQuery.removeClass(target, "unselected");
            MyQuery.addClass(target, "selected");
        }else if(MyQuery.hasClass(target, "selected")){
            MyQuery.removeClass(target, "selected");
            MyQuery.addClass(target, "unselected");
        }
    });
    MyQuery.addHandler(informationClose, "click", function () {
        informationForm.style.display = "none";
        shadow.style.display = "none";
    })
    MyQuery.addHandler(skipBtn, "click", function(){
        informationForm.style.display = "none";
        shadow.style.display = "none";
    });
    MyQuery.addHandler(ensureBtn, "click", function(){
        var phoneNum = document.getElementById("form-pntext").value,
            qqNum = document.getElementById("form-qqtext").value;
        var regPhoneNum = /^1\d{10}$/,
            regQQNum = /^[1-9]\d{4,10}$/;
        var hasPhoneNum = true,
            hasQQNum = true,
            hasSpace = true;
        if(phoneNum.indexOf(" ") >=0 || qqNum.indexOf(" ") >= 0){
            alert("不要闹，别输入空格！");
            return false;
        }else{
            hasSpace = false;
        }
        if(phoneNum.length == 0){
            hasPhoneNum = false;
        }
        if(qqNum.length == 0){
            hasQQNum = false;
        }
        if(regPhoneNum.test(phoneNum) && !hasSpace || !hasPhoneNum){
            if(regQQNum.test(qqNum) && !hasSpace || !hasQQNum){
                loginForm.submit();
                informationForm.submit();
            }else{
                alert("请输入正确的QQ号");
            }
        }else{
            alert("请输入正确的手机号");
        }
    });
})();