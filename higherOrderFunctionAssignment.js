// Anwsers:
// Question 1:

function countdown(num){
    var stopTimeinterval = setInterval(() => {
    num == 0 ? console.log("DONE!") : console.log(num);   
      --num;
      if(num < 0){
        clearInterval(stopTimeinterval);
    };    
    },1000);
}

// Question 2:

function randomGame(){
    var count = 0;
    var stopTimeinterval = setInterval(()=>{
        count++;
        if(Math.random() > .75){
            clearInterval(stopTimeinterval);
            console.log(count);
        }
    },1000);
}

// QUestion 3:
function isEven(num){
    if(num % 2 == 0){
   return true;
    }else{
   return false;
    }
}



// Question 4
function isOdd(num){
    if(num % 2 !== 0){
   return true;
    }else{
   return false;
    }
}

// Question 5:
function isPrime(num){
    for(var i=2; i<num; i++){
     if(num % i == 0 || num <= 1){
       return false;
     } else{
        return true;
     }
    } 
 }

//  Question 6:
 function numberFact(num, callback){
    return callback(num);
  }

//   Question 7:

  function find(arr, callback){
      for(let i = 0; i < arr.length; i+=1){
        if(callback(arr[i])){
            return arr[i];
        }
      }
  }
  
  
//  Question 8:
  
  function findIndex(arr, callback){
      for(var i = 0; i < arr.length; i+=1){
          if(callback(arr[i])){
              return arr.indexOf(arr[i]);
          }
      }
  }
  
  
// Question 9:
  
  function specialMultiply(num1, num2){
      if(arguments.length == 2){
          return num1 * num2;
      }
      return function multiply(b){
          return num1 * num2;
      }
  }