var user=0;
let a = [
[0, 0, 0], 
[0, 0, 0],
[0, 0, 0]
];

// player1:user=1
// player2:user=-1
// true = empty
function check(buttonNum){
  var btnNum = "btn" + buttonNum;
  if(document.getElementById(btnNum).innerHTML == ""){
    return true;
  }
  else return false;
}

// function click2()
// function update(num,user){
  
// }

function end(){
  var area = document.getElementById("tt");
  var btn = `<button id="refresh-btn" onClick="window.location.reload();">RESTART</button>`
  area.innerHTML = btn;
}

function winner (){
  var title = document.getElementById("title");

  //row sum
  for(var row = 0; row < 3; row++){
    tempSumRow = 0;
    tempSumCol = 0;
    for(var col = 0; col < 3; col++){
      tempSumRow += a[row][col];
      tempSumCol += a[col][row];
    }
    if(tempSumRow == 3 || tempSumCol == 3){
      title.innerHTML = "Player X won 🎉🎉";
      end();
      return;
    } else if(tempSumRow == -3 || tempSumCol == -3){
      title.innerHTML = "Player O won 🎉🎉";
      end();
      return;
    }
  }

  //diagonal 1
  d1 = a[0][0]+a[1][1]+a[2][2];
  if(d1==3){
    title.innerHTML = "Player X won 🎉🎉";
    end();
    return;
  }
  else if (d1==-3){
     title.innerHTML = "Player O won 🎉🎉";
    end();
    return;
  }

  //diagonal 2
  d2 = a[0][2]+a[1][1]+a[2][0];
  if(d2==3){
    title.innerHTML = "Player X won 🎉🎉";
    end();
    return;
  }
  else if (d2==-3){
     title.innerHTML = "Player O won 🎉🎉";
    end();
    return;
  }

  //col
  // for(var row = 0; row < 3; row++){
  //   tempSum = 0;
  //   for(var col = 0; col < 3; col++){
  //     tempSum += a[col][row];
  //   }
  //   if(tempSum == 3){
  //     title.innerHTML = "Player X won 🎉🎉";
  //     return;
  //   } else if(tempSum == -3){
  //     title.innerHTML = "Player O won 🎉🎉";
  //     return;
  //   }
  // }
  
}


function draw(){
  var count=0;
  for (var x=1;x<=9;x++){
    if(check(x)){
      count+=1;
    }
  }
  if(count==0){
    document.getElementById("title").innerHTML="DRAW ! ";
    end();
  }  
} 
function clickk(ok){
  var btn = document.getElementById(ok.id);
  var title = document.getElementById("title");
  var buttonNum = ok.id[3];
  if(check(buttonNum)){
    if(user == 1){
      btn.innerHTML = "X";
      user = 0;
      title.innerHTML = `Player O's turn`;
      if(buttonNum<4)
      a[0][buttonNum-1]=1;
      else if (buttonNum < 7){
        
        a[1][buttonNum-4]=1;
      }
      else {
        a[2][buttonNum-7]=1;
      }
      draw();
      winner();
    }
    else {
      btn.innerHTML = "O";
      user = 1;
      title.innerHTML = `Player X's turn`;
      if(buttonNum<4)
      a[0][buttonNum-1]=-1;
      else if (buttonNum < 7){
        a[1][buttonNum-4]=-1;
      }
      else {
        a[2][buttonNum-7]=-1;
      }
       draw();
      winner();
    }
  }
  else{
    alert("already occupied !");
  }
  var title = document.getElementById("title");
  
  console.log(a);
  
}

function attempt1(){
  var str=document.getElementbyId()
  if(user==0){
  document.getElementById("btn1").innerHTML="X";
  }
  else if (user==1){
    document.getElementById("btn1").innerHTML="O";
  }
}

