/**
 * Created by whale.jiang on 2018/5/15.
 */
'use strict';
!(function(){
    var p = document.getElementsByClassName('rainbow')[0];
    setTimeout(function(){
        p.style.animation = 'move 1s 1';
    },2500);
    setTimeout(function(){
        //p.style.textShadow = '0.08rem 0.08rem 0.08rem #dedede';
        p.style.top = '0rem';
    },3500)
})();