let re=document.getElementById('inputtext');
let fun=(number)=>{
    re.value=re.value+number;
}
let result=()=>{
try{
    re.value=eval(re.value)
}
catch(err)
{
    alert("Enter the valid input");
}

}
function clr()
{
    re.value="";
}
function del()
{
    re.value=re.value.slice(0,-1)
}