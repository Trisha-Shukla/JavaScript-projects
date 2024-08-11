let ele=document.querySelector(".container").children;

function generate(){
    let value="ABCDEFGHhdhjkhfjf678876d@*&^%$#@(*)&Tjdfsgd"
    let pass="";
    for(let i=0;i<15;i++){
        let random=Math.floor(Math.random()*value.length);
        pass+=value.charAt(random);

    }
    ele[1].innerText=pass;
    console.log(ele[1].value);
}
ele[2].addEventListener("click",generate);