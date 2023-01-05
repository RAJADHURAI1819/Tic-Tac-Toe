const t = Array.from(document.querySelectorAll('.xo'));
let p=document.getElementById('player');
let w=document.getElementById('won');
let player="X";
let a,b,c;
let list=["","","","","","","","",""];
let ttt=[];
let game=false;
let final=[ [0, 1, 2],[3, 4, 5],[6, 7, 8],[0, 3, 6],[1, 4, 7],[2, 5, 8],[0, 4, 8],[2, 4, 6]]
window.addEventListener('DOMContentLoaded', () => {
    function change(){
        if(player=="X"){
            p.innerText="2";
            player="O";
        }else{
            p.innerText="1";
            player="X";
        }
    }
    function result(i){
list[i]=player;
ttt.push(i);
if(ttt.length==9){
    w.innerText="Sorry Match is tie "; 
}else{
for(let i=0;i<final.length;i++){
a=list[final[i][0]];
b=list[final[i][1]];
c=list[final[i][2]];
if(a=="" || b=="" || c==""){
    continue;
}
if(a==b && b==c){
    game=true;
    if(player=="X"){
w.innerText="Player 1 won the game "; 
    }else{
        w.innerText="Player 2 won the game "; 
    }
    break;
}}
}
    }
    function update(a,i){
        if(a.innerText=="" && !game){
      a.innerText=player;
      a.classList.add(`${player}`)
    result(i);
      change();
    }
    }
    t.forEach((a,i) => {
       a.addEventListener('click',()=>{update(a,i)});
      });
})
function reset(){
    player="X";
    p.innerText="1";
    list=["","","","","","","","",""];
    ttt=[];
    game=false;
    t.forEach((a)=>{
        a.innerText="";
        a.classList.remove('X');
        a.classList.remove('O');
    })
    w.innerText="";
}