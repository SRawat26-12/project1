var hr=0;
var min=0;
var sec=0;
var count=0;
var timer=false;


function start()
{
timer=true;
stopWatch();
}
function stop()
{
timer=false;
}
function reset()
{
timer=false;
hr=0;
min=0;
count=0;
document.getElementById("hr").innerHTML="00";
document.getElementById("min").innerHTML="00";
document.getElementById("sec").innerHTML="00";
document.getElementById("count").innerHTML="00";
}
function stopWatch()
{
if(timer==true)
{
    count++;
    if(count==100){
        sec++;
        count=0;
    }
    if(sec==60){
        min++;
        sec=0;
    }
    if(min==60)
    {
        hr++;
        min=0;
        sec=0;
    }
    var hrstring=hr;
    var minstring=min;
    var secstring=sec;
    var countstring=count;
    if(hr<10)
    {
        hrstring="0"+hrstring;
    }
    if(min<10)
    {
        mintring="0"+minstring;
    }
    if(sec<10)
    {
        secstring="0"+secstring;
    }
    if(count<10)
    {
        countstring="0"+countstring;
    }
    document.getElementById("hr").innerHTML=hrstring;
    document.getElementById("min").innerHTML=minstring;
    document.getElementById("sec").innerHTML=secstring;
    document.getElementById("count").innerHTML=countstring;
    setTimeout("stopWatch()",10);
}

}