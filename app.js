let boxes = document.querySelectorAll(".button");
let winner = document.querySelector(".win");
let reset = document.querySelector(".reset");
let player=0;

let win = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,4,8],
    [6,4,2],
    [0,3,6],
    [1,4,7],
    [7,5,8]
];

reset.addEventListener("click",()=>
{
 enablebutton();
})

boxes.forEach(box => {
box.addEventListener("click", ()=> {
    
    console.log("box clicked");
    if(player===0)
    {
    box.innerHTML="0";
    player=1;
    }
    else
    {box.innerHTML="x";
        player=0;
    }
    box.disabled=true;
    
    checkwin();
  })
})

function checkwin (){
for(check=0; check<=7; check++)
{

    x=win[check][0];
    y=win[check][1];
    z=win[check][2];
    if(boxes[x].innerHTML!="" && boxes[y].innerHTML!="" &&  boxes[z].innerHTML!="")
    {  if(boxes[x].innerHTML==="0" && boxes[y].innerHTML==="0" &&  boxes[z].innerHTML==="0")
            {winner.style.display="content";
                winner.innerHTML="Player 1st WON";
                winner.style.fontSize ="3em";
                winner.style.display="unset";
                disablebutton();
            }
        if(boxes[x].innerHTML==="x" && boxes[y].innerHTML==="x" &&  boxes[z].innerHTML==="x")
            {winner.innerHTML="Player 2nd WON";
                winner.style.fontSize ="3em";
                winner.style.display="unset";
                disablebutton();

            }
       
    }
}
    
} 
function disablebutton ()
{
    for(box of boxes)
    {
        box.disabled=true;
    }
}
function enablebutton()
{
    for (box of boxes)
    {
       box.disabled=false;
        winner.style.display="false";
//box.style.backgroundColor="blue";
box.innerHTML="";

    }
    winner.style.display="none";
}