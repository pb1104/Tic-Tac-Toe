
document.addEventListener('DOMContentLoaded', function() {
    const boxes = document.querySelectorAll('.box');
    const resetb = document.querySelector('.reset');
    const tex = document.querySelector('.t');
    resetb.addEventListener('click',()=>{
        this.location.reload();
    })
let turn0 = true;
let p = 0;
const winpatterns = [
[0,1,2],[0,4,8],[0,3,6],[1,4,7],[2,5,8],[2,4,6],[3,4,5],[6,7,8]
]
    boxes.forEach((box) => {
        box.addEventListener('click', () => {
           if(turn0){
            box.innerHTML='O';
            turn0=false;
            p++;
           if(p < 9){
            tex.innerHTML = 'Player 2 Turn';
           }
           else{
            tex.innerHTML='Draw';
           }
           }
           else{
            box.innerHTML='X';
            turn0=true;
            p++;
            if(p < 9){
                tex.innerHTML = 'Player 1 Turn';
               }
               else{
                tex.innerHTML='Draw';
               }
           }
           box.disabled = true;
           check();
        });
    });
    const check = ()=>{
        let w = '';
        for(patterns of winpatterns){
          let p1 =boxes[patterns[0]].innerHTML;
          let p2=boxes[patterns[1]].innerHTML;
          let p3 =boxes[patterns[2]].innerHTML;
          if(p1 != '' && p2 != '' && p3 != ''){
            if(p1== p2 && p2 == p3){
                if(p1 == 'O'){
                     w = 'Player 1';
                }
                else{
                    w = 'player 2';
                }
                tex.innerHTML = w + ' Wins';
            }
          }
        }
    }
});
