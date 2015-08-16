var cqupt_img_wrap = document.getElementById("cqupt-img-wrap");
var cqupt_img = document.getElementById("cqupt-img");
var star = document.getElementById("star");
var star_wrap = document.getElementById("star-wrap");
var cqupt_img = document.getElementById("cqupt-img");
var cqupt_img_wrap = document.getElementById("cqupt-img-wrap");
var video_wrap = document.getElementById("video-wrap");
var original_video = document.getElementById("original-video");
var star_word = document.getElementById("star-word");
var toTopBtn = document.getElementById("to-top");
var teacher_wrap = document.getElementById("teacher-wrap");
var excellent_teacher = document.getElementById("excellent-teacher");

//隐藏toTop
window.onscroll = function () {
    var sTop = document.documentElement.scrollTop + document.body.scrollTop;
    if(sTop >= 450){
        toTopBtn.style.display = "block";
    }else{
        toTopBtn.style.display = "none";
    }
}
MyQuery.addHandler(toTopBtn, "click", function () {
    toWhere(0, 50);
});


function img_change(){
	//显示内容
	cqupt_img.style.display="block";
	//隐藏内容
    excellent_teacher.style.display="none";
	star.style.display="none";
	original_video.style.display="none";
	//修改另两个按钮的颜色和背景颜色
	star_wrap.style.background="#fceea6";
	star_wrap.style.color="#ff6f30";
	video_wrap.style.background="#fceea6";
	video_wrap.style.color="#ff6f30";
    teacher_wrap.style.background="#fceea6";
    teacher_wrap.style.color="#ff6f30";
	//修改本按钮的颜色及背景颜色
	cqupt_img_wrap.style.background="#ff6f30";
	cqupt_img_wrap.style.color="#ffefeb";
}
function star_change(){
	//显示内容
	star.style.display="block";
	//隐藏内容
    excellent_teacher.style.display="none";
	cqupt_img.style.display="none";
	original_video.style.display="none";
	//修改另两个按钮的颜色和背景颜色
	cqupt_img_wrap.style.background="#fceea6";
	cqupt_img_wrap.style.color="#ff6f30";
	video_wrap.style.background="#fceea6";
	video_wrap.style.color="#ff6f30";
    teacher_wrap.style.background="#fceea6";
    teacher_wrap.style.color="#ff6f30";
	//修改本按钮的颜色及背景颜色
	star_wrap.style.background="#ff6f30";
	star_wrap.style.color="#ffefeb";
}
function video_change(){
	//显示内容
	original_video.style.display="block";
	//隐藏内容
    excellent_teacher.style.display="none";
	star.style.display="none";
	cqupt_img.style.display="none";
	//修改另两个按钮的颜色和背景颜色
	star_wrap.style.background="#fceea6";
	star_wrap.style.color="#ff6f30";
	cqupt_img_wrap.style.background="#fceea6";
	cqupt_img_wrap.style.color="#ff6f30";
    teacher_wrap.style.background="#fceea6";
    teacher_wrap.style.color="#ff6f30";
	//修改本按钮的颜色及背景颜色
	video_wrap.style.background="#ff6f30";
	video_wrap.style.color="#ffefeb";
}
function excellent_change(){
    //显示内容
    excellent_teacher.style.display="block";
    //隐藏内容
    original_video.style.display="none";
    star.style.display="none";
    cqupt_img.style.display="none";
    //修改另两个按钮的颜色和背景颜色
    star_wrap.style.background="#fceea6";
    star_wrap.style.color="#ff6f30";
    cqupt_img_wrap.style.background="#fceea6";
    cqupt_img_wrap.style.color="#ff6f30";
    video_wrap.style.color="#ff6f30";
    video_wrap.style.background="#fceea6";
    //修改本按钮的颜色及背景颜色
    teacher_wrap.style.background="#ff6f30";
    teacher_wrap.style.color="#ffefeb";
}
//分页代码
var star_page1 = document.getElementById("star").getElementsByTagName("div")[0];
var star_page2 = document.getElementById("star").getElementsByTagName("div")[9];
var cqupt_img_page1 = document.getElementById("cqupt-img").getElementsByTagName("div")[0];
var cqupt_img_page2 = document.getElementById("cqupt-img").getElementsByTagName("div")[9];
var cqupt_img_page3 = document.getElementById("cqupt-img").getElementsByTagName("div")[18];
var cqupt_img_page4 = document.getElementById("cqupt-img").getElementsByTagName("div")[27];
var cqupt_img_page5 = document.getElementById("cqupt-img").getElementsByTagName("div")[36];
var video_page1 = document.getElementById("original-video").getElementsByTagName("div")[0];
var video_page2 = document.getElementById("original-video").getElementsByTagName("div")[9];
var teacher_page1 = document.getElementById("excellent-teacher").getElementsByTagName("div")[0];
var teacher_page2 = document.getElementById("excellent-teacher").getElementsByTagName("div")[9];
var teacher_page3 = document.getElementById("excellent-teacher").getElementsByTagName("div")[18];

var star_page_prevli = document.getElementById("star").getElementsByTagName("ul")[0].getElementsByTagName("li")[0].getElementsByTagName("a")[0];
var star_page_li1 = document.getElementById("star").getElementsByTagName("ul")[0].getElementsByTagName("li")[1].getElementsByTagName("a")[0];
var star_page_li2 = document.getElementById("star").getElementsByTagName("ul")[0].getElementsByTagName("li")[2].getElementsByTagName("a")[0];
var star_page_nextli = document.getElementById("star").getElementsByTagName("ul")[0].getElementsByTagName("li")[3].getElementsByTagName("a")[0];

var cqupt_page_prevli = document.getElementById("cqupt-img").getElementsByTagName("ul")[0].getElementsByTagName("li")[0].getElementsByTagName("a")[0];
var cqupt_page_li1 = document.getElementById("cqupt-img").getElementsByTagName("ul")[0].getElementsByTagName("li")[1].getElementsByTagName("a")[0];
var cqupt_page_li2 = document.getElementById("cqupt-img").getElementsByTagName("ul")[0].getElementsByTagName("li")[2].getElementsByTagName("a")[0];
var cqupt_page_li3 = document.getElementById("cqupt-img").getElementsByTagName("ul")[0].getElementsByTagName("li")[3].getElementsByTagName("a")[0];
var cqupt_page_li4 = document.getElementById("cqupt-img").getElementsByTagName("ul")[0].getElementsByTagName("li")[4].getElementsByTagName("a")[0];
var cqupt_page_li5 = document.getElementById("cqupt-img").getElementsByTagName("ul")[0].getElementsByTagName("li")[5].getElementsByTagName("a")[0];
var cqupt_page_nextli = document.getElementById("cqupt-img").getElementsByTagName("ul")[0].getElementsByTagName("li")[3].getElementsByTagName("a")[0];

var video_page_prevli = document.getElementById("original-video").getElementsByTagName("ul")[0].getElementsByTagName("li")[0].getElementsByTagName("a")[0];
var video_page_li1 = document.getElementById("original-video").getElementsByTagName("ul")[0].getElementsByTagName("li")[1].getElementsByTagName("a")[0];
var video_page_li2 = document.getElementById("original-video").getElementsByTagName("ul")[0].getElementsByTagName("li")[2].getElementsByTagName("a")[0];
var video_page_nextli = document.getElementById("original-video").getElementsByTagName("ul")[0].getElementsByTagName("li")[3].getElementsByTagName("a")[0];

var teacher_page_prevli = document.getElementById("excellent-teacher").getElementsByTagName("ul")[0].getElementsByTagName("li")[0].getElementsByTagName("a")[0];
var teacher_page_li1 = document.getElementById("excellent-teacher").getElementsByTagName("ul")[0].getElementsByTagName("li")[1].getElementsByTagName("a")[0];
var teacher_page_li2 = document.getElementById("excellent-teacher").getElementsByTagName("ul")[0].getElementsByTagName("li")[2].getElementsByTagName("a")[0];
var teacher_page_li3 = document.getElementById("excellent-teacher").getElementsByTagName("ul")[0].getElementsByTagName("li")[3].getElementsByTagName("a")[0];
var teacher_page_nextli = document.getElementById("excellent-teacher").getElementsByTagName("ul")[0].getElementsByTagName("li")[3].getElementsByTagName("a")[0];
//设置默认按钮颜色
star_page_li1.style.background="#5db9aa";
cqupt_page_li1.style.background="#5db9aa";
video_page_li1.style.background="#5db9aa";
teacher_page_li1.style.background="#5db9aa";
//设置标示当前按钮所在位置
var cqupt_no = 1;
var teacher_no = 1;

function star_page1_page() { 
    star_page1.style.display="block";
    star_page2.style.display="none";
    star_page_li1.style.background="#5db9aa";
    star_page_li2.style.background="#ff6f30";
}
function star_page2_page() {
    star_page1.style.display="none";
    star_page2.style.display="block";
    star_page_li2.style.background="#5db9aa";
    star_page_li1.style.background="#ff6f30";
}

function cqupt_img_page1_page() {
    cqupt_img_page1.style.display="block";
    cqupt_img_page2.style.display="none";
    cqupt_img_page3.style.display="none";
    cqupt_img_page4.style.display="none";
    cqupt_img_page5.style.display="none";

    cqupt_page_li1.style.background="#5db9aa";
    cqupt_page_li2.style.background="#ff6f30";
    cqupt_page_li3.style.background="#ff6f30";
    cqupt_page_li4.style.background="#ff6f30";
    cqupt_page_li5.style.background="#ff6f30";
    cqupt_no = 1;
}
function cqupt_img_page2_page() {
    cqupt_img_page1.style.display="none";
    cqupt_img_page2.style.display="block";
    cqupt_img_page3.style.display="none";
    cqupt_img_page4.style.display="none";
    cqupt_img_page5.style.display="none";
    cqupt_page_li2.style.background="#5db9aa";
    cqupt_page_li1.style.background="#ff6f30";
    cqupt_page_li3.style.background="#ff6f30";
    cqupt_page_li4.style.background="#ff6f30";
    cqupt_page_li5.style.background="#ff6f30";
    cqupt_no = 2;
}
function cqupt_img_page3_page() {
    cqupt_img_page1.style.display="none";
    cqupt_img_page2.style.display="none";
    cqupt_img_page3.style.display="block";
    cqupt_img_page4.style.display="none";
    cqupt_img_page5.style.display="none";
    cqupt_page_li3.style.background="#5db9aa";
    cqupt_page_li1.style.background="#ff6f30";
    cqupt_page_li2.style.background="#ff6f30";
    cqupt_page_li4.style.background="#ff6f30";
    cqupt_page_li5.style.background="#ff6f30";
    cqupt_no = 3;
}
function cqupt_img_page4_page() {
    cqupt_img_page1.style.display="none";
    cqupt_img_page2.style.display="none";
    cqupt_img_page3.style.display="none";
    cqupt_img_page4.style.display="block";
    cqupt_img_page5.style.display="none";
    cqupt_page_li4.style.background="#5db9aa";
    cqupt_page_li1.style.background="#ff6f30";
    cqupt_page_li2.style.background="#ff6f30";
    cqupt_page_li3.style.background="#ff6f30";
    cqupt_page_li5.style.background="#ff6f30";
    cqupt_no = 4;
}

function cqupt_img_prev(){
    if(cqupt_no > 1){
        cqupt_no --;
    }
    if(cqupt_no == 1){
        cqupt_img_page1_page();
    }else if (cqupt_no == 2){
        cqupt_img_page2_page();
    }else if (cqupt_no == 3){
        cqupt_img_page3_page();
    }else if (cqupt_no == 4){
        cqupt_img_page4_page();
    }
}
function cqupt_img_next(){
    if(cqupt_no <  4){
        cqupt_no ++;
    }
    if(cqupt_no == 1){
        cqupt_img_page1_page();
    }else if (cqupt_no == 2){
        cqupt_img_page2_page();
    }else if (cqupt_no == 3){
        cqupt_img_page3_page();
    }else if (cqupt_no == 4){
        cqupt_img_page4_page();
    }
}

function original_video_page1() { 
    video_page1.style.display="block";
    video_page2.style.display="none";
    video_page_li1.style.background="#5db9aa";
    video_page_li2.style.background="#ff6f30";
}
function original_video_page2() {  
    video_page1.style.display="none";
    video_page2.style.display="block";
    video_page_li2.style.background="#5db9aa";
    video_page_li1.style.background="#ff6f30";
}
function teacher_page1_page() {  
    teacher_page1.style.display="block";
    teacher_page2.style.display="none";
    teacher_page3.style.display="none";
    teacher_page_li2.style.background="#ff6f30";
    teacher_page_li3.style.background="#ff6f30";
    teacher_page_li1.style.background="#5db9aa";
    teacher_no = 1;
}
function teacher_page2_page() {  
    teacher_page1.style.display="none";
    teacher_page2.style.display="block";
    teacher_page3.style.display="none";
    teacher_page_li2.style.background="#5db9aa";
    teacher_page_li1.style.background="#ff6f30";
    teacher_page_li3.style.background="#ff6f30";
    teacher_no = 2;
}
function teacher_page3_page() {  
    teacher_page1.style.display="none";
    teacher_page2.style.display="none";
    teacher_page3.style.display="block";
    teacher_page_li3.style.background="#5db9aa";
    teacher_page_li1.style.background="#ff6f30";
    teacher_page_li2.style.background="#ff6f30";
    teacher_no = 3;
}
function teacher_page_prev(){
    if(teacher_no>1){
        teacher_no--;
    }
    if(teacher_no == 1){
        teacher_page1_page();
    }else if (teacher_no == 2){
        teacher_page2_page();
    }else if(teacher_no == 3){
        teacher_page3_page();
    }
}
function teacher_page_next(){
    if(teacher_no<3){
        teacher_no++;
    }
    
    if(teacher_no == 1){
        teacher_page1_page();
    }else if (teacher_no == 2){
        teacher_page2_page();
    }else if(teacher_no == 3){
        teacher_page3_page();
    }
}

//innerHTML引入大图片
//第1页校园风物
var cqupt_img_page1_box = document.getElementById("cqupt-img-page1").getElementsByTagName("div");
cqupt_img_page1_box[0].innerHTML = "<a href='images/cqupt-img/1_big.jpg'><img src='images/cqupt-img/1_big.jpg'></a><p class='start-word'>枫叶重邮</p>";
cqupt_img_page1_box[1].innerHTML = "<a href='images/cqupt-img/2_big.jpg'><img src='images/cqupt-img/2_big.jpg'></a><p class='start-word'>春华秋实</p>";
cqupt_img_page1_box[2].innerHTML = "<a href='images/cqupt-img/4_big.jpg'><img src='images/cqupt-img/4_big.jpg'></a><p class='start-word'>传媒学院</p>";
cqupt_img_page1_box[3].innerHTML = "<a href='images/cqupt-img/6_big.jpg'><img src='images/cqupt-img/6_big.jpg'></a><p class='start-word'>巨型电话</p>";
cqupt_img_page1_box[4].innerHTML = "<a href='images/cqupt-img/7_big.jpg'><img src='images/cqupt-img/7_big.jpg'></a><p class='start-word'>林荫小道</p>";
cqupt_img_page1_box[5].innerHTML = "<a href='images/cqupt-img/8_big.jpg'><img src='images/cqupt-img/8_big.jpg'></a><p class='start-word'>求实创新</p>";
cqupt_img_page1_box[6].innerHTML = "<a href='images/cqupt-img/10_big.jpg'><img src='images/cqupt-img/10_big.jpg'></a><p class='start-word'>信科</p>";
cqupt_img_page1_box[7].innerHTML = "<a href='images/cqupt-img/11_big.jpg'><img src='images/cqupt-img/11_big.jpg'></a><p class='start-word'>数图一角</p>";
//第2页校园风物
var cqupt_img_page2_box = document.getElementById("cqupt-img-page2").getElementsByTagName("div");
cqupt_img_page2_box[0].innerHTML = "<a href='images/cqupt-img/14_big.jpg'><img src='images/cqupt-img/14_big.jpg'></a><p class='start-word'>俯视图</p>";
cqupt_img_page2_box[1].innerHTML = "<a href='images/cqupt-img/IMG_0611.jpg'><img src='images/cqupt-img/IMG_0611.jpg'></a><p class='start-word'>风雨操场</p>";
cqupt_img_page2_box[2].innerHTML = "<a href='images/cqupt-img/IMG_0630.jpg'><img src='images/cqupt-img/IMG_0630.jpg'></a><p class='start-word'>校园大道</p>";
cqupt_img_page2_box[3].innerHTML = "<a href='images/cqupt-img/IMG_0642.jpg'><img src='images/cqupt-img/IMG_0642.jpg'></a><p class='start-word'>通信学院</p>";
cqupt_img_page2_box[4].innerHTML = "<a href='images/cqupt-img/IMG_0651.jpg'><img src='images/cqupt-img/IMG_0651.jpg'></a><p class='start-word'>逸夫楼</p>";
cqupt_img_page2_box[5].innerHTML = "<a href='images/cqupt-img/IMG_0664.jpg'><img src='images/cqupt-img/IMG_0664.jpg'></a><p class='start-word'>林荫小道</p>";
cqupt_img_page2_box[6].innerHTML = "<a href='images/cqupt-img/IMG_0667.jpg'><img src='images/cqupt-img/IMG_0667.jpg'></a><p class='start-word'>二教</p>";
cqupt_img_page2_box[7].innerHTML = "<a href='images/cqupt-img/IMG_0671.jpg'><img src='images/cqupt-img/IMG_0671.jpg'></a><p class='start-word'>雨红莲</p>";

//第3页校园风物
var cqupt_img_page3_box = document.getElementById("cqupt-img-page3").getElementsByTagName("div");
cqupt_img_page3_box[0].innerHTML = "<a href='images/cqupt-img/IMG_0696.jpg'><img src='images/cqupt-img/IMG_0696.jpg'></a><p class='start-word'>二教</p>";
cqupt_img_page3_box[1].innerHTML = "<a href='images/cqupt-img/IMG_0743.jpg'><img src='images/cqupt-img/IMG_0743.jpg'></a><p class='start-word'>八十万</p>";
cqupt_img_page3_box[2].innerHTML = "<a href='images/cqupt-img/保卫处武装部.jpg'><img src='images/cqupt-img/保卫处武装部.jpg'></a><p class='start-word'>保卫科</p>";
cqupt_img_page3_box[3].innerHTML = "<a href='images/cqupt-img/教务处.jpg'><img src='images/cqupt-img/教务处.jpg'></a><p class='start-word'>四教</p>";
cqupt_img_page3_box[4].innerHTML = "<a href='images/cqupt-img/就业辅导中心.jpg'><img src='images/cqupt-img/就业辅导中心.jpg'></a><p class='start-word'>就业辅导中心</p>";
cqupt_img_page3_box[5].innerHTML = "<a href='images/cqupt-img/图书馆（老）.jpg'><img src='images/cqupt-img/图书馆（老）.jpg'></a><p class='start-word'>老图书馆</p>";
cqupt_img_page3_box[6].innerHTML = "<a href='images/cqupt-img/物业管理中心（1）.jpg'><img src='images/cqupt-img/物业管理中心（1）.jpg'></a><p class='start-word'>物业管理中心</p>";
cqupt_img_page3_box[7].innerHTML = "<a href='images/cqupt-img/IMG_0671.jpg'><img src='images/cqupt-img/IMG_0671.jpg'></a><p class='start-word'>校医院</p>";
//第4校园风物
var cqupt_img_page4_box = document.getElementById("cqupt-img-page4").getElementsByTagName("div");
cqupt_img_page4_box[0].innerHTML = "<a href='images/cqupt-img/中心食堂.jpg'><img src='images/cqupt-img/中心食堂.jpg'></a><p class='start-word'>中心食堂</p>";
cqupt_img_page4_box[1].innerHTML = "<a href='images/cqupt-img/重邮共青团.jpg'><img src='images/cqupt-img/重邮共青团.jpg'></a><p class='start-word'>重邮共青团</p>";
// cqupt_img_page4_box[2].innerHTML = "<a href='images/cqupt-img/IMG_0630.jpg'><img src='images/cqupt-img/IMG_0630.jpg'></a><p class='start-word'>理学院-周贤菊</p>";
// cqupt_img_page4_box[3].innerHTML = "<a href='images/cqupt-img/IMG_0642.jpg'><img src='images/cqupt-img/IMG_0642.jpg'></a><p class='start-word'>光电工程学院-罗元</p>";
// cqupt_img_page4_box[4].innerHTML = "<a href='images/cqupt-img/IMG_0651.jpg'><img src='images/cqupt-img/IMG_0651.jpg'></a><p class='start-word'>理学院-郑继明</p>";
// cqupt_img_page4_box[5].innerHTML = "<a href='images/cqupt-img/IMG_0664.jpg'><img src='images/cqupt-img/IMG_0664.jpg'></a><p class='start-word'>通信与信息工程学院-胡庆</p>";
// cqupt_img_page4_box[6].innerHTML = "<a href='images/cqupt-img/IMG_0667.jpg'><img src='images/cqupt-img/IMG_0667.jpg'></a><p class='start-word'>体育学院-高冬</p>";
// cqupt_img_page4_box[7].innerHTML = "<a href='images/cqupt-img/IMG_0671.jpg'><img src='images/cqupt-img/IMG_0671.jpg'></a><p class='start-word'>法学院-彭语良</p>";


//第1页优秀教师
var teacher_page1_box = document.getElementById("teacher-page1").getElementsByTagName("div");
teacher_page1_box[0].innerHTML = "<a href='images/teacher-img/teacher1.jpg'><img src='images/teacher-img/teacher1.jpg'></a><p class='start-word'>外国语学院-张琬悦</p>";
teacher_page1_box[1].innerHTML = "<a href='images/teacher-img/teacher2.jpg'><img src='images/teacher-img/teacher2.jpg'></a><p class='start-word'>马克思主义学院-周兴茂</p>";
teacher_page1_box[2].innerHTML = "<a href='images/teacher-img/teacher3.jpg'><img src='images/teacher-img/teacher3.jpg'></a><p class='start-word'>理学院-周贤菊</p>";
teacher_page1_box[3].innerHTML = "<a href='images/teacher-img/teacher4.jpg'><img src='images/teacher-img/teacher4.jpg'></a><p class='start-word'>光电工程学院-罗元</p>";
teacher_page1_box[4].innerHTML = "<a href='images/teacher-img/teacher5.jpg'><img src='images/teacher-img/teacher5.jpg'></a><p class='start-word'>理学院-郑继明</p>";
teacher_page1_box[5].innerHTML = "<a href='images/teacher-img/teacher6.jpg'><img src='images/teacher-img/teacher6.jpg'></a><p class='start-word'>通信与信息工程学院-胡庆</p>";
teacher_page1_box[6].innerHTML = "<a href='images/teacher-img/teacher7.jpg'><img src='images/teacher-img/teacher7.jpg'></a><p class='start-word'>体育学院-高冬</p>";
teacher_page1_box[7].innerHTML = "<a href='images/teacher-img/teacher8.jpg'><img src='images/teacher-img/teacher8.jpg'></a><p class='start-word'>法学院-彭语良</p>";

//第2页优秀教师
var teacher_page2_box = document.getElementById("teacher-page2").getElementsByTagName("div");
teacher_page2_box[0].innerHTML = "<a href='images/teacher-img/teacher9.jpg'><img src='images/teacher-img/teacher9.jpg'></a><p class='start-word'>通信与信息工程学院-蒋青</p>";
teacher_page2_box[1].innerHTML = "<a href='images/teacher-img/teacher10.jpg'><img src='images/teacher-img/teacher10.jpg'></a><p class='start-word'>计算机科学与技术学院-熊安萍</p>";
teacher_page2_box[2].innerHTML = "<a href='images/teacher-img/teacher11.jpg'><img src='images/teacher-img/teacher11.jpg'></a><p class='start-word'>传媒艺术学院-王睿</p>";
teacher_page2_box[3].innerHTML = "<a href='images/teacher-img/teacher12.jpg'><img src='images/teacher-img/teacher12.jpg'></a><p class='start-word'>体育学院-王樱桃</p>";
teacher_page2_box[4].innerHTML = "<a href='images/teacher-img/teacher13.jpg'><img src='images/teacher-img/teacher13.jpg'></a><p class='start-word'>自动化学院-付蔚</p>";
teacher_page2_box[5].innerHTML = "<a href='images/teacher-img/teacher14.jpg'><img src='images/teacher-img/teacher14.jpg'></a><p class='start-word'>理学院-朱伟</p>";
teacher_page2_box[6].innerHTML = "<a href='images/teacher-img/teacher15.jpg'><img src='images/teacher-img/teacher15.jpg'></a><p class='start-word'>理学院-张清华</p>";
teacher_page2_box[7].innerHTML = "<a href='images/teacher-img/teacher16.jpg'><img src='images/teacher-img/teacher16.jpg'></a><p class='start-word'>马克思主义学院-闵绪国</p>";

//第3页优秀教师
var teacher_page3_box = document.getElementById("teacher-page3").getElementsByTagName("div");
teacher_page3_box[0].innerHTML = "<a href='images/teacher-img/teacher17.jpg'><img src='images/teacher-img/teacher17.jpg'></a><p class='start-word'>传媒艺术学院-陈祺祺</p>";
teacher_page3_box[1].innerHTML = "<a href='images/teacher-img/teacher18.jpg'><img src='images/teacher-img/teacher18.jpg'></a><p class='start-word'>生物信息学院-袁帅</p>";
teacher_page3_box[2].innerHTML = "<a href='images/teacher-img/teacher19.jpg'><img src='images/teacher-img/teacher19.jpg'></a><p class='start-word'>外国语学院-高非</p>";
teacher_page3_box[3].innerHTML = "<a href='images/teacher-img/teacher20.jpg'><img src='images/teacher-img/teacher20.jpg'></a><p class='start-word'>通信与信息工程学院-漆晶</p>";
// teacher_page3_box[4].innerHTML = "<a href='images/teacher-img/teacher.jpg'><img src='images/teacher-img/teacher.jpg'></a><p class='start-word'>123</p>";
// teacher_page3_box[5].innerHTML = "<a href='images/teacher-img/teacher.jpg'><img src='images/teacher-img/teacher.jpg'></a><p class='start-word'>123</p>";
// teacher_page3_box[6].innerHTML = "<a href='images/teacher-img/teacher.jpg'><img src='images/teacher-img/teacher.jpg'></a><p class='start-word'>123</p>";
// teacher_page3_box[7].innerHTML = "<a href='images/teacher-img/teacher.jpg'><img src='images/teacher-img/teacher.jpg'></a><p class='start-word'>123</p>";

