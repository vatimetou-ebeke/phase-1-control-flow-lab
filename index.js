function scuberGreetingForFeet(distance){
  // Write your code here!
  //let result
  if (distance<=400) {
    return "This one is on me!";
  } else if (distance>=2000 && distance<2500) {
    return "I will gladly take your thirty bucks.";
  } else {
    return "No can do."
  }


}

function ternaryCheckCity(city){
  // Write your code here!
  return city==='NYC'?'Ok, sounds good.':'No go.'
}

function switchOnCharmFromTip(tips){
  // Write your code here!
  switch(tips){

    case "generous":
      return "Thank you so much."
    case "not as generous":
      return "Thank you."
    default:
      return "Bye."
  }
}