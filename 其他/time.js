/**
 * Created by Administrator on 2019/7/15.
 */
function toDou(n) {
    if (n<10){
        return '0'+n;
    }
    else if (n>=10){
        return ''+n;
    }
}
window.onload=function () {
    // var str=[1,5,1,0,5,6];
    function tick() {
        var oTim=document.getElementById('time');
        var oImg=oTim.getElementsByTagName('img');
        var oDate=new Date;
        var str=toDou(oDate.getHours())+toDou(oDate.getMinutes())+toDou(oDate.getSeconds());
        for(var i=0;i<oImg.length;i++){
            oImg[i].src='img/'+str.charAt(i)+'.png';
        }
    }
    tick();
    setInterval(tick,1000);
    var oDiv=document.getElementById('rolls');
    var oul=document.getElementById('roll');
    var aLi=oul.getElementsByTagName('li');
    oul.innerHTML=oul.innerHTML+oul.innerHTML;
    oul.style.width=aLi[0].offsetWidth*aLi.length+'px';
    var aBtn1=document.getElementById('btn1');
    var aBtn2=document.getElementById('btn2');

    var a=2;
    function roll() {
        if (oul.offsetLeft<-oul.offsetWidth/2){
            oul.style.left='0';
        }
        if (oul.offsetLeft>0){
            oul.style.left=-oul.offsetWidth/2+'px';
        }
        oul.style.left=oul.offsetLeft+a+'px';
    }
    var move=setInterval(roll,30);
    aBtn1.onclick=function () {
        a=-2;
    };
    aBtn2.onclick=function () {
        a=2;
    };
    oDiv.onmouseover=function () {
        clearInterval(move);
    };
    oDiv.onmouseout=function () {
        move=setInterval(roll,30);
    };
};
