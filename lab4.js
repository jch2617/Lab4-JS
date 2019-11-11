/*
// Refer to these steps in the script below for clarification:
 1. The user is asked to play a game using a "yes" or "no" button. If the user chooses yes, the user is prompted to
enter his or her name, and the battle begins. If they choose "no", console log prints "come again soon".
 2. The application prompts the user for his or her name and uses it throughout the
game.
 3. The user starts with 40 “health points.” Grant starts with 10 “health points.”
 4. The game will use a while loop to simulate a turn-based fight between the user and
Grant.
 5. The application logs the progress of the fight after each iteration of the loop. 
 6. Each iteration of the while loop will remove random numbers of health points (either 1
or 2) from both the user and Grant.
 7. Each time Grant’s health points hit 0, he is “defeated” and the user gains 1 “win.” But
Grant’s health points are reset to 10. The user’s health points never reset.
 8. The game ends when either a) Grant has been defeated three times (i.e.,, the user has
three wins) or b) the user has been defeated (hit 0 health points).
 9. When the game is over, the application logs the winner.

*/

function comeAgain() {
  document.getElementById("demo").innerHTML = "Come again soon";
}
// step 2

let grantHealth=10;
let userHealth=40;
let grantDeaths=0;
// step 3

function chickenGame() {
  var userName = prompt("What is your name?"); 
  console.log(userName);
  
  while ( userHealth > 0 && grantDeaths < 3 ) {
    let grantHealthRand = Math.floor(Math.random() * (2) + 1);
    let userHealthRand = Math.floor(Math.random() * (2) + 1);
    grantHealth -= grantHealthRand;
    userHealth -= userHealthRand ;
    //step 4 & 6
    
    console.log(`Grant the Almighty Chicken has ${grantHealth} left`);
    console.log(`${userName} has ${userHealth} health left`);
    
    //step 5

    if (grantHealth <= 0) {
      grantDeaths++;
      grantHealth = 10;
      console.log('Grant died');
    } 
}

if (grantDeaths === 3) {
  console.log(`${userName} is victorious!`)
} else {
  console.log(`Grant is the winner. Better luck next time!`);
} 
//step 8 & 9
}


// Refer to steps at beginning of script for clarification