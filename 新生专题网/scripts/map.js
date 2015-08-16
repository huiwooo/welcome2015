/**
 * Created by Alkali on 15/8/5.
 */
;(function(window, scrolldelay){

    var init = function() {

        var panoLatLng = new qq.maps.LatLng(29.535295, 106.605105);
        // ´´½¨½Ö¾°
        var pano = new qq.maps.Panorama(document.getElementById("streetscape"));
        var pano_service = new qq.maps.PanoramaService();
        pano_service.getPano(panoLatLng, 200, function(result){
            pano.setPano(result.svid);

            var x1 = result.latlng.lng;
            var y1 = result.latlng.lat;
            var x2 = 116.326088;
            var y2 = 39.882326;

            var alpha = Math.acos((y2 - y1) / Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2)));
            if (x2 - x1 < 0) {
                alpha = Math.PI * 2 - alpha;
            }

            pano.setPov({heading : alpha/Math.PI*180, pitch : 0});
        });

    }

    var toTopBtn = document.getElementById("to-top"),
        leftBtn = document.getElementById("btn-left"),
        rightBtn = document.getElementById("btn-right"),
        btnwrap = document.getElementById("btn-wrap"),
        enlargeMap = document.getElementById("enlarge-map"),
        streetscape = document.getElementById("streetscape");

    MyQuery.addLoadHandler(function () {
        rightBtn.children[0].setAttribute("style","display:none");
        rightBtn.children[1].setAttribute("style","display:none");
    });

    MyQuery.addHandler(btnwrap, "click", function (e) {
        e = e || window.event;
        var target = e.target || e.srcElement;
        if(target.className == "unchoose"){

            //°´Å¥ÇÐ»»
            leftBtn.className = "unchoose";
            rightBtn.className = "unchoose";
            target.className = "btn";
            leftBtn.children[0].setAttribute("style","display:none");
            leftBtn.children[1].setAttribute("style","display:none");
            rightBtn.children[0].setAttribute("style","display:none");
            rightBtn.children[1].setAttribute("style","display:none");
            target.children[0].setAttribute("style","display:inline");
            target.children[1].setAttribute("style","display:inline");

            //µØÍ¼ÇÐ»»
            if(target.id == "btn-left"){
                streetscape.style.display = "none";
                enlargeMap.style.display = "block";
            }
            if(target.id == "btn-right"){
                enlargeMap.style.display = "none";
                streetscape.style.display = "block";
                init();
            }
        }

    })

    MyQuery.addHandler(toTopBtn, "click", function () {
        toWhere(0, 50);
    });

    //Òþ²ØtoTop
    window.onscroll = function () {
        var sTop = document.documentElement.scrollTop + document.body.scrollTop;
        if(sTop >= 450){
            toTopBtn.style.display = "block";
        }else{
            toTopBtn.style.display = "none";
        }
    }

})(window);