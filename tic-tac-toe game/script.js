let boxes=document.querySelectorAll(".box");
let reset=document.querySelector("#reset");
let newbutton =document.querySelector("#new");
let msgcontainer=document.querySelector(".msg-container");
let msg=document.querySelector("#msg");

let turnO =true;// true then player O false then player X.
const winpatterns =[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
];
boxes.forEach((box)=> {
    box.addEventListener("click",()=>{
        console.log("box was clicked");
      if(turnO){//first playerO turn
        box.innerText="O";
        turnO =false;

      }else{// then playerX turn and then it becomes playerO turn
        box.innerText="X";
        turnO=true;
      }
box.disabled=true;
checkWinner();
    });

   });
   const disableboxes=()=>{
    for(let box of boxes){
      box.disabled=true;
    }
   }
   const enableboxes=()=>{
    for(let box of boxes){
      box.disabled=false;
      box.innerText="";
    }
   }
   const showWinner=(winner)=>{
    msg.innerText=`Congratulations, Winner is ${winner}`;
    msgcontainer.classList.remove("hide");
     disableboxes();
     }
   const checkWinner=()=>{
    for(let pattern of winpatterns)   {  
    //   console.log(pattern[0],pattern[1],pattern[2]) ;
    //    console.log(boxes[pattern[0]].innerText,boxes[pattern[1]].innerText,boxes[pattern[2]].innerText);

       let pos1Val= boxes[pattern[0]].innerText;
       let pos2Val= boxes[pattern[1]].innerText;
       let pos3Val= boxes[pattern[2]].innerText;


       if(pos1Val!=""&&pos2Val!=""&&pos3Val!=""){
        if(pos1Val===pos2Val&&pos2Val===pos3Val){
            console.log("winner",pos1Val);

            showWinner(pos1Val);
        }
       }
    


    }
   };
   const resetgame=()=>{
    turnO =true;
    enableboxes();
    msgcontainer.classList.add("hide");
   };
   const newgames=()=>{
    turnO=true;
   enableboxes();
   msgcontainer.classList.add("hide");
};
   reset.addEventListener("click",resetgame);
   newbutton.addEventListener("click",newgames);

