function scuberGreetingForFeet(x){
  let result;
  if( x<=400){
    result = "This one is on me!";
  }
  else if (x<=2000){
    result = "That will be twenty bucks."
  }
  else if (x<=2500){
    result = "I will gladly take your thirty bucks."
  }
  else if (x>2500){
    result = "No can do."
  }

return result;
}

function ternaryCheckCity(city){
  let result;
  if(city==='NYC'){
    result="Ok, sounds good."
  }
  else if(city!== 'NYC'){
    result="No go."
  }
  return result;
}

function switchOnCharmFromTip(tips){
  let response;
  switch(tips){
    case 'generous':
      return response='Thank you so much.';
      break;
    case 'not as generous':
      return response="Thank you.";
      break;
   default:
     return response="Bye.";


  }
}