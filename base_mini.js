var tag=document.createElement("script");tag.src="https://www.youtube.com/iframe_api";var firstScriptTag=document.getElementsByTagName("script")[0];firstScriptTag.parentNode.insertBefore(tag,firstScriptTag);var imgArray=["https://front.nptu.edu.tw/var/file/9/1009/img/3679/004.png","https://front.nptu.edu.tw/var/file/9/1009/img/3679/003.png","https://front.nptu.edu.tw/var/file/9/1009/img/3679/002.png","https://front.nptu.edu.tw/var/file/9/1009/img/3679/001.png"];let rnd=parseInt(10*Math.random())%4,startime=parseInt(10*Math.random())%3,startArray=[0,39,115];function disappeared(){document.getElementById("image").style.animation="disappear 6s forwards",document.getElementById("top").style.animation="disappear2 10s forwards",document.getElementById("mute").style.display="inline"}var vdplayer;function onYouTubeIframeAPIReady(){vdplayer=new YT.Player("player",{videoId:"zIrA9Uc4haQ",height:"1080",width:"1920",playerVars:{autoplay:1,controls:1,showinfo:0,modestbranding:1,loop:1,playlist:"zIrA9Uc4haQ",fs:0,cc_load_policty:0,iv_load_policy:3,autohide:0,start:startArray[startime]},events:{onReady:onReady,onStateChange:onStateChange}})}function onReady(t){t.target.playVideo(),t.target.mute()}let mt=1;function mute(t){var e=document.getElementById("mute").getAttribute("class");mt%2==0?(e=e.replace("fa-volume-down","fa-volume-mute"),document.getElementById("mute").setAttribute("class",e),mt++,vdplayer.mute()):mt%2==1&&(e=e.replace("fa-volume-mute","fa-volume-down"),document.getElementById("mute").setAttribute("class",e),mt=0,vdplayer.unMute())}function onStateChange(t){disappeared()}function imageRandom(){document.getElementById("image").src=imgArray[rnd]}function gohome(){document.location.href="https://www.nptu.edu.tw"}document.onreadystatechange=function(){document.getElementById("image"),document.getElementById("mask");let t=document.getElementById("player");var e=$(window).width(),s=9*e/16;$("#sec").text(e),$("#base").css({height:s+"px"}),$("#base").css({width:e+"px"}),$("#mask").css({height:s+"px"}),$("#mask").css({width:e+"px"}),$("#vdo").css({height:s+"px"}),$("#vdo").css({width:e+"px"}),$("#image").css({height:s+"px"}),$("#image").css({width:e+"px"}),imageRandom(),e>=1024&&(t.width=e,t.height=s,$("#mask").css({height:s+"px"}),$("#mask").css({width:e+"px"}),$("#top").css({"margin-top":"0px"}),$("#bottom").css({"margin-top":s-195+"px"}),$("#scLogo").css({"margin-top":s-170+"px"}),$("#scLogo").css({"margin-right":.05*e+"px"})),e<1024&&e>=576?(image.style.width=e,image.style.height=s,$("#mask").css({height:s+"px"}),$("#mask").css({width:e+"px"}),document.getElementById("player").id="play",$("#base").css({height:s+"px"}),$("#base").css({width:e+"px"}),$("#nptulink").css({"margin-top":1*s/10+"px"}),$("#nptulink").css({"margin-left":"50px"}),$("#nptulink").css({"font-size":"48pt"}),$("#btnn").css({"margin-top":7*s/10+"px"}),$("#btnn").css({"margin-left":"50px"})):e<=576&&(image.style.width=e,image.style.height=s,$("#mask").css({height:s+"px"}),$("#mask").css({width:e+"px"}),$("#base").css({height:s+"px"}),$("#base").css({width:e+"px"}),document.getElementById("player").id="play",$("#nptulink").css({"margin-top":.5*s/10+"px"}),$("#nptulink").css({"margin-left":"50px"}),$("#nptulink").css({"font-size":e/16+"pt"}),$("#btnn").css({"margin-top":6*s/10+"px"}),$("#btnn").css({"margin-left":"50px"}),$("#btnn").css({"font-size":e/36+"pt"}))},window.onresize=function(){let t=document.getElementById("player");document.getElementById("image"),document.getElementById("mask");var e=$(window).width(),s=9*e/16;e>=1024?(t.width=e,t.height=s,$("#base").css({height:s+"px"}),$("#base").css({width:e+"px"}),$("#mask").css({height:s+"px"}),$("#mask").css({width:e+"px"}),$("#top").css({"margin-top":"0px"}),$("#bottom").css({"margin-top":s-195+"px"}),$("#scLogo").css({"margin-top":s-170+"px"}),$("#scLogo").css({"margin-right":.05*e+"px"})):e<1024&&e>=576&&($("#base").css({height:s+"px"}),$("#base").css({width:e+"px"}),$("#image").css({height:s+"px"}),$("#image").css({width:e+"px"}),$("#mask").css({height:s+"px"}),$("#mask").css({width:e+"px"}),$("#nptulink").css({"margin-top":1*s/10+"px"}),$("#nptulink").css({"margin-left":"50px"}),$("#nptulink").css({"font-size":"48pt"}),$("#btnn").css({"margin-top":7*s/10+"px"}),$("#btnn").css({"margin-left":"50px"})),e<=560&&($("#base").css({height:s+"px"}),$("#base").css({width:e+"px"}),$("#image").css({height:s+"px"}),$("#image").css({width:e+"px"}),$("#mask").css({height:s+"px"}),$("#mask").css({width:e+"px"}),$("#nptulink").css({"margin-top":.5*s/10+"px"}),$("#nptulink").css({"margin-left":"50px"}),$("#nptulink").css({"font-size":e/16+"pt"}),$("#btnn").css({"margin-top":6*s/10+"px"}),$("#btnn").css({"margin-left":"50px"}),$("#btnn").css({"font-size":e/36+"pt"}))};