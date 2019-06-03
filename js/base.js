/**
 * Created by whale.jiang on 2018/5/15.
 * 對於rem佈局的設置
 */
;(function(designWidth, maxWidth) {
    var doc = document,
            win = window;
    var docEl = doc.documentElement;
    var tid;
    var rootItem,rootStyle;
    var options = {
        error:{
            isOpen:true,
            url:''
        },
    };

    function refreshRem() {
        var width = docEl.getBoundingClientRect().width;
        if (!maxWidth) {
            maxWidth = 540;
        };
        if (width > maxWidth) {
            width = maxWidth;
        }
        var rem = width * 100 / designWidth;
        rootStyle="html{font-size:"+rem+'px !important}';
        rootItem = document.getElementById('rootsize') || document.createElement("style");
        if(!document.getElementById('rootsize')){
            document.getElementsByTagName("head")[0].appendChild(rootItem);
            rootItem.id='rootsize';
        }
        if(rootItem.styleSheet){
            rootItem.styleSheet.disabled||(rootItem.styleSheet.cssText=rootStyle)
        }else{
            try{rootItem.innerHTML=rootStyle}catch(f){rootItem.innerText=rootStyle}
        }
        docEl.style.fontSize = rem + "px";
    };
    refreshRem();

    win.addEventListener("resize", function() {
        clearTimeout(tid);
        tid = setTimeout(refreshRem, 300);
    }, false);

    win.addEventListener("pageshow", function(e) {
        if (e.persisted) {
            clearTimeout(tid);
            tid = setTimeout(refreshRem, 300);
        }
    }, false);
    /**
     * 全局错误监控
     * */
    function errorWatch() {
        window.addEventListener('error',function (e) {
            console.log(e);
            (new Image).src = options.error.url;
        },true)
    };
    if(options.error.isOpen){errorWatch();}

    })(640, 640);