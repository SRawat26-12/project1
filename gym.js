function home()
{
    document.getElementById("homes").style.color="rgb(20,251,20)";
    document.getElementById("programs").style.color="white";
    document.getElementById("blogs").style.color="white";
    document.getElementById("plans").style.color="white";
    document.getElementById("contacts").style.color="white";
}
function program()
{
    document.getElementById("programs").style.color="rgb(20,251,20)";
    document.getElementById("homes").style.color="white";
    document.getElementById("blogs").style.color="white";
    document.getElementById("plans").style.color="white";
    document.getElementById("contacts").style.color="white";
}
function blog()
{
    document.getElementById("blogs").style.color="rgb(20,251,20)";
    document.getElementById("programs").style.color="white";
    document.getElementById("homes").style.color="white";
    document.getElementById("plans").style.color="white";
    document.getElementById("contacts").style.color="white";
}
function plan()
{
    document.getElementById("plans").style.color="rgb(20,251,20)";
    document.getElementById("programs").style.color="white";
    document.getElementById("blogs").style.color="white";
    document.getElementById("homes").style.color="white";
    document.getElementById("contacts").style.color="white";
}
function contact()
{
    document.getElementById("contacts").style.color="rgb(20,251,20)";
    document.getElementById("programs").style.color="white";
    document.getElementById("blogs").style.color="white";
    document.getElementById("plans").style.color="white";
    document.getElementById("homes").style.color="white";
}
function submit()
{
    let name=document.getElementById('name');
    let number=document.getElementById('number');
    if(name.value==""&&number.value=="")
    {
        alert("please fill details ")
    }
    else{
        alert("thanks for join:  "+ name.value);
    }
}