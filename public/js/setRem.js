function setRem() {
    var clientWidth = document.documentElement.clientWidth;
    if(clientWidth >420){
        clientWidth=420;
    }
    var nowRem = (clientWidth / 375 * 100);
    document.documentElement.style.fontSize = parseInt(nowRem) + "px";
};
setRem();
var timer;
window.onresize = function () {
    clearTimeout(timer)
    timer = setTimeout(function () {
        setRem();
    }, 100)
}