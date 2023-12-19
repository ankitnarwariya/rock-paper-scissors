// Selectors
const user = document.querySelectorAll('.icon-container-user');
const machine = document.querySelectorAll('.icon-container-machine');
const triangle = document.querySelector('.triangle');
const userPick = document.querySelector('.user');
const machinePick = document.querySelector('.machine');
const dialog = document.querySelector("dialog");
const showButton = document.querySelector("#btn-rule");
const closeButton = document.querySelector("#rule-close-btn");
const winnerModal = document.querySelector('.winner-modal');
const winMsg = document.querySelector('.win-msg');
const playAgain = document.querySelector('.play-again');
const myScoreElem = document.querySelector('#my-score');
const machineScoreElem = document.querySelector('#machine-score');
const win_msg_2 = document.querySelector('.win-msg_2');
const nxtBtn = document.querySelector('.nxt-btn');

// Random Value 
const RandomNum = Math.floor(Math.random() * 3);
//console.log(RandomNum);


let myScoreCount = 0;
let machineScoreCount = 0;

// get from Local Storage 
let myScoreLs = JSON.parse(localStorage.getItem('myScoreCounting'));
let machineScoreLs = JSON.parse(localStorage.getItem('machineScoreCounting'));

 if(myScoreLs){
  myScoreElem.innerText = myScoreLs;
 }

 if(machineScoreLs){
  machineScoreElem.innerText = machineScoreLs;
 }



// Event Listeners
user.forEach((element, index) => {
  element.addEventListener('click', () =>{
    triangle.style.display = 'none';
    user.forEach(item => {
      item.style.display = 'none';
    });

    element.style.display = 'block'
    element.classList.add('show-user')

    userPick.style.visibility = 'visible';

    setTimeout(() => {
      
    machinePick.style.visibility = 'visible';

      setTimeout(() => {
        machine[RandomNum].style.display = 'block';
        machine[RandomNum].classList.add('show-machine')
      
      // winner and looser condition 
      if(index === 0 && RandomNum === 2 || index === 1 && RandomNum === 0 || index === 2 && RandomNum === 1 ){
        
        winnerModal.style.display = 'grid';
        winMsg.innerHTML = "You Won";
        nxtBtn.style.visibility = 'visible';


        // Increment the score and update the displayed score
        if (myScoreLs) {
          myScoreCount = myScoreLs + 1;
        } else {
          myScoreCount = 1;
        }

        myScoreElem.innerText = myScoreCount;

        localStorage.setItem('myScoreCounting', JSON.stringify(myScoreCount));


      }else if(index === 0 && RandomNum === 0 || index === 1 && RandomNum === 1 || index === 2 && RandomNum === 2 ){
        
        winnerModal.style.display = 'grid';
        winMsg.innerHTML = "Game Draw";
        win_msg_2.style.display = 'none'

      }else{
        
        winnerModal.style.display = 'grid';
        winMsg.innerHTML = "You Lost";

        if (machineScoreLs) {
          machineScoreCount = machineScoreLs + 1;
        } else {
          machineScoreCount = 1;
        }
        
        machineScoreElem.innerText = machineScoreCount;

        // Update the local storage with the new score
        localStorage.setItem('machineScoreCounting', JSON.stringify(machineScoreCount));

      }
    }, 600);

    }, 300)
  })
});

// play again button
playAgain.addEventListener('click', () => {
  window.location.reload();
})

// Rules Modal
showButton.addEventListener("click", () => dialog.show());
closeButton.addEventListener("click", () => dialog.close());