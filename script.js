let str="";
let buttons = document.getElementsByClassName('button');
// converting button to an array using Array.from(src)
Array.from(buttons).forEach((item)=>{
    item.addEventListener("click",(e)=>{
        if(e.target.innerHTML=='='){
            str=eval(str);
            document.querySelector("input").value=str;
        }
        else if(e.target.innerHTML=='AC'){
            str="";
            document.querySelector("input").value=str;
        }
        else if(e.target.innerHTML=='C'){
            str=str.substring(0, str.length-1);
            document.querySelector("input").value=str;
        }
        else{
            str=str+e.target.innerHTML; //return html content of the tag clicked
            document.querySelector("input").value=str;
        }
        console.log(e.target.innerHTML);
    })
})