const doc = document;

const upperLineLeftBox = document.querySelector('.upper_line_left_box');
const upperLineMiddleBox = document.querySelector('.upper_line_middle_box');
const upperLineRightBox = document.querySelector('.upper_line_right_box');

const middleLineLeftBox = document.querySelector('.middle_line_left_box');
const middleLineMiddleBox = document.querySelector('.middle_line_middle_box');
const middleLineRightBox = document.querySelector('.middle_line_right_box');

const lowerLineLeftBox = document.querySelector('.lower_line_left_box');
const lowerLineMiddleBox = document.querySelector('.lower_line_middle_box');
const lowerLineRightBox = document.querySelector('.lower_line_right_box');

const allBoxes = [];
allBoxes.push(upperLineLeftBox);
allBoxes.push(upperLineMiddleBox);
allBoxes.push(upperLineRightBox);
allBoxes.push(middleLineLeftBox);
allBoxes.push(middleLineMiddleBox);
allBoxes.push(middleLineRightBox);
allBoxes.push(lowerLineLeftBox);
allBoxes.push(lowerLineMiddleBox);
allBoxes.push(lowerLineRightBox);
console.log(allBoxes);

const newAllBoxes = { ...allBoxes };
/* console.log(newAllBoxes);
for (const key in newAllBoxes) {
  console.log(newAllBoxes[key]);
  newAllBoxes[key] = null;
  console.log(newAllBoxes[key]);
  
} */


// TODO: переделать все под объект!! см.выше
/* const allBoxes = {};
allBoxes[upperLineLeftBox] = upperLineLeftBox;
allBoxes[upperLineMiddleBox] = upperLineMiddleBox;
allBoxes[upperLineRightBox] = upperLineRightBox;
allBoxes[middleLineLeftBox] = middleLineLeftBox;
allBoxes[middleLineMiddleBox] = middleLineMiddleBox;
allBoxes[middleLineRightBox] = middleLineRightBox;
allBoxes[lowerLineLeftBox] = lowerLineLeftBox;
allBoxes[lowerLineMiddleBox] = lowerLineMiddleBox;
allBoxes[lowerLineRightBox] = lowerLineRightBox;
console.log(allBoxes); */

const settedBlocks = [0, 0, 0, 0, 0, 0, 0, 0];
 

function hasWin() {
    
    if (newAllBoxes[0] === 1 && newAllBoxes[1] === 1 && newAllBoxes[2] === 1) {
      setTimeout(function(){
      if(!alert('Первый пользователь выиграл!')) { window.location.reload(); } 
      },200);
    } else if (newAllBoxes[0] === 2 && newAllBoxes[1] === 2 && newAllBoxes[2] === 2) {
      setTimeout(function(){
      if(!alert('Второй пользователь выиграл!')) { window.location.reload(); } 
      },200);
    }
    if (newAllBoxes[3] === 1 && newAllBoxes[4] === 1 && newAllBoxes[5] === 1) {
      setTimeout(function(){
      if(!alert('Первый пользователь выиграл!')) { window.location.reload(); } 
      },200);
    } else if (newAllBoxes[3] === 2 && newAllBoxes[4] === 2 && newAllBoxes[5] === 2) {
      setTimeout(function(){
      if(!alert('Второй пользователь выиграл!')) { window.location.reload(); } 
      },200);
    }
    if (newAllBoxes[6] === 1 && newAllBoxes[7] === 1 && newAllBoxes[8] === 1) {
      setTimeout(function(){
      if(!alert('Первый пользователь выиграл!')) { window.location.reload(); } 
      },200);
    } else if (newAllBoxes[6] === 2 && newAllBoxes[7] === 2 && newAllBoxes[8] === 2) {
      setTimeout(function(){
      if(!alert('Второй пользователь выиграл!')) { window.location.reload(); } 
      },200);
    }
    if (newAllBoxes[0] === 1 && newAllBoxes[3] === 1 && newAllBoxes[6] === 1) {
      setTimeout(function(){
      if(!alert('Первый пользователь выиграл!')) { window.location.reload(); } 
      },200);
    } else if (newAllBoxes[0] === 2 && newAllBoxes[3] === 2 && newAllBoxes[6] === 2) {
      setTimeout(function(){
      if(!alert('Второй пользователь выиграл!')) { window.location.reload(); } 
      },200);
    }
    if (newAllBoxes[1] === 1 && newAllBoxes[4] === 1 && newAllBoxes[7] === 1) {
      setTimeout(function(){
      if(!alert('Первый пользователь выиграл!')) { window.location.reload(); } 
      },200);
    } else if (newAllBoxes[1] === 2 && newAllBoxes[4] === 2 && newAllBoxes[7] === 2) {
      setTimeout(function(){
      if(!alert('Второй пользователь выиграл!')) { window.location.reload(); } 
      },200);
    }
    if (newAllBoxes[2] === 1 && newAllBoxes[5] === 1 && newAllBoxes[8] === 1) {
      setTimeout(function(){
      if(!alert('Первый пользователь выиграл!')) { window.location.reload(); } 
      },200);
    } else if (newAllBoxes[2] === 2 && newAllBoxes[5] === 2 && newAllBoxes[8] === 2) {
      setTimeout(function(){
      if(!alert('Второй пользователь выиграл!')) { window.location.reload(); } 
      },200);
    }
    if (newAllBoxes[0] === 1 && newAllBoxes[4] === 1 && newAllBoxes[8] === 1) {
      setTimeout(function(){
      if(!alert('Первый пользователь выиграл!')) { window.location.reload(); } 
      },200);
    } else if (newAllBoxes[0] === 2 && newAllBoxes[4] === 2 && newAllBoxes[8] === 2) {
      setTimeout(function(){
      if(!alert('Второй пользователь выиграл!')) { window.location.reload(); } 
      },200);
    }
    if (newAllBoxes[2] === 1 && newAllBoxes[4] === 1 && newAllBoxes[6] === 1) {
      setTimeout(function(){
      if(!alert('Первый пользователь выиграл!')) { window.location.reload(); } 
      },200);
    } else if (newAllBoxes[2] === 2 && newAllBoxes[4] === 2 && newAllBoxes[6] === 2) {
      setTimeout(function(){
      if(!alert('Второй пользователь выиграл!')) { window.location.reload(); } 
      },200);
    }
}


let count = 0;
doc.addEventListener('click', (event) => {
  console.log(event.target);
  for (let i = 0; i < allBoxes.length; i += 1) {
    if (!allBoxes[i].hasChildNodes()) {
      if (event.target === allBoxes[i] && count % 2 === 0) {
        const imgCross = document.createElement('img');
        imgCross.setAttribute('src', '/img/cross.png');
        imgCross.setAttribute('class', 'cross');
        allBoxes[i].appendChild(imgCross);
        count += 1;
        settedBlocks[i] = 1;
        newAllBoxes[i] = 1;
        console.log(newAllBoxes);
        hasWin(newAllBoxes);
        
      } else if (event.target === allBoxes[i] && count % 1 === 0) {
        const imgCircle = document.createElement('img');
        imgCircle.setAttribute('src', '/img/circle.png');
        imgCircle.setAttribute('class', 'circle');
        allBoxes[i].appendChild(imgCircle);
        count += 1;
        settedBlocks[i] = 2;
        newAllBoxes[i] = 2;
        console.log(newAllBoxes);
        hasWin(newAllBoxes);
        
      }
      
    }
  }
  
  console.log(settedBlocks);
});



/* let count = 0;
doc.addEventListener('click', (event) => {
  console.log(event.target);
  for (let i = 0; i < allBoxes.length; i += 1) {
    if (!allBoxes[i].hasChildNodes()) {
      if (event.target === allBoxes[i] && count % 2 === 0) {
        const imgCross = document.createElement('img');
        imgCross.setAttribute('src', '/img/cross.png');
        imgCross.setAttribute('class', 'cross');
        allBoxes[i].appendChild(imgCross);
        count += 1;
        settedBlocks[i] = 1;
        hasWin();
      } else if (event.target === allBoxes[i] && count % 1 === 0) {
        const imgCircle = document.createElement('img');
        imgCircle.setAttribute('src', '/img/circle.png');
        imgCircle.setAttribute('class', 'circle');
        allBoxes[i].appendChild(imgCircle);
        count += 1;
        settedBlocks[i] = 2;
        hasWin();
      }
    }
  }
  console.log(settedBlocks);
}); */


