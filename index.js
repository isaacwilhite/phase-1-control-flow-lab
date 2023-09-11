
function scuberGreetingForFeet(rideLengthInt){
  if (rideLengthInt <= 400) {
    return"This one is on me!"
  }
  else if (rideLengthInt >= 400 && rideLengthInt <= 2000) {
    return "That will be twenty bucks."
  }
  else if (rideLengthInt > 2000 && rideLengthInt <= 2500) {
    return "I will gladly take your thirty bucks."
  }
  else if (rideLengthInt > 2500) {
    return "No can do."
  }
}

function ternaryCheckCity(cityDestination){
  if (cityDestination === "NYC") {
    return "Ok, sounds good."
  }
    return 'No go.'
  
}

function switchOnCharmFromTip(tipString){
  if (tipString === 'generous')
  {return "Thank you so much."}
  else if (tipString === 'not as generous') {
    return "Thank you."
  }
  else {
    return "Bye."
  }
}