let icon=document.querySelector(".icon");
let ul=document.querySelector("ul");
icon.addEventListener("click",()=>{
    ul.classList.toggle("showData");
    if(ul.className=="showData")
        {
            document.getElementById("bar").className="fa-solid fa-xmark-large";
        }
        else{
            document.getElementById("bar").className="fa-regular fa-bars";

        }
})
let s=document.getElementById("s");
let r=document.getElementById("r");
let b=document.getElementById("b");
let c=document.getElementById("c");
s.addEventListener("click",()=>{
    s.style.color="rgb(4,219,219)";
    r.style.color="white";
    b.style.color="white";
    c.style.color="white";
})
r.addEventListener("click",()=>{
    r.style.color="rgb(4,219,219)";
    s.style.color="white";
    b.style.color="white";
    c.style.color="white";
})
b.addEventListener("click",()=>{
    b.style.color="rgb(4,219,219)";
    r.style.color="white";
    s.style.color="white";
    c.style.color="white";
})
c.addEventListener("click",()=>{
    c.style.color="rgb(4,219,219)";
    b.style.color="white";
    r.style.color="white";
    s.style.color="white";
})
let crd=document.querySelectorAll(".crd");
let item=document.querySelector(".item");
let container=document.querySelector(".container");
let itemimage=document.getElementById("itemImage");
var t;
let buy=document.getElementById("buy");
 crd.forEach((value)=>
        {
        value.addEventListener("click",()=>
        {
            item.style.display="flex";
            container.style.display="none";
            t=value.firstElementChild.src;
            itemimage.src="t";
            let buytext=document.querySelector(".buytext")
            buy.addEventListener("click",function()
             {
                document.querySelector(".bpage").style.display="block";
                buytext.innerHTML=`<h3>Enter Details</h3>
                <input type="text" placeholder="Enter Your Name" id="name"><br>
                <input type="text" placeholder="Enter Your Address" id="address"><br>
                <input type="text" placeholder="Enter Your Mobile Number" id="mobile"><br>
                <h3>Payment Option:</h3>
                <select>
                    <option value="Google-Pay">Google-Pay</option>
                    <option value="Phone-Pay">Phone-Pay</option>
                    <option value="Bharat-Pay">Bharat-Pay</option>
                    <option value="Cash-on-delivery">Cash-on-delivery</option>
                </select><br>
                `
                let button=document.createElement("button");
                button.innerText="submit";
                buytext.appendChild(button);
                button.addEventListener("click",function()
            {
                let name=document.getElementById("name");
                if(name.value==""&&address.value==""&&mobile.value=="")
                    {
                        alert("please Enter Details");
                    }
                    else{
                        alert("your response recorded");
                        document.querySelector(".bpage").style.display="none";
                    }
            })
                let cross=document.querySelector(".cross");
                cross.addEventListener("click",function()
            {
                document.querySelector(".bpage").style.display="none";
            })
        })
            
            
        })
        })
        function connect()
        {
            let names=document.getElementById("names");
            let number=document.getElementById("number");
            if(names.value==""&&number.value=="")
                {
                    alert("please fill details");
                }
                else{
                    alert("thanks for connecting..")
                }
        }

        
    

