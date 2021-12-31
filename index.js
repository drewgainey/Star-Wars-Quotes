// constants used for random messages
const trilogy = ["Prequel", "Orginal", "Sequel"];
const darkSideLightSige = ["Dark Side", "Light Side"];

//functions to randomly select trilogy and dark side or light side and the message to display

const getTrilogy = () => trilogy[Math.round(Math.random() * 2)];
const getDarkSideLightSide = () => darkSideLightSige[Math.round(Math.random())];
const getMessageNum = () => Math.round(Math.random() * 4) + 1;

//function that runs when button is clicked to generate new quote
function getRandomQuote() {
  
  //generate random combo of trilogy and darkside or light side
  let randomTril = getTrilogy();
  let randomDarkSideLightSide = getDarkSideLightSide();
  let randomMessageNum = getMessageNum();

  //get random message
  let message;

  if (randomDarkSideLightSide === "Dark Side") {
    switch (randomTril) {
      case "Prequel":
        switch (randomMessageNum) {
          case 1:
            message = "General Kenobi.";
            break;
          case 2:
            message =
              "Did you ever hear the tragedy of Darth Plagueis The Wise? I thought not. Its not a story the Jedi would tell you. Its a Sith legend. Darth Plagueis was a Dark Lord of the Sith, so powerful and so wise he could use the Force to influence the midichlorians to create life… He had such a knowledge of the dark side that he could even keep the ones he cared about from dying. The dark side of the Force is a pathway to many abilities some consider to be unnatural. He became so powerful… the only thing he was afraid of was losing his power, which eventually, of course, he did. Unfortunately, he taught his apprentice everything he knew, then his apprentice killed him in his sleep. Ironic. He could save others from death, but not himself.";
            break;
          case 3:
            message = "I am the senate!";
            break;
          case 4:
            message = "Hello there.";
            break;
          case 5:
            message = "Do it!";
            break;
        }
        break;

      case "Orginal":
        switch (randomMessageNum) {
          case 1:
            message = "Luke, I am your father.";
            break;
          case 2:
            message =
              "If this is a consular ship, where is the ambassador? — Commander, tear this ship apart until you’ve found those plans. And bring me the passengers, I want them alive!";
            break;
          case 3:
            message = "I find your lack of faith disturbing.";
            break;
          case 4:
            message = "Join me and together we can rule the galaxy.";
            break;
          case 5:
            message =
              "You are part of the Rebel Alliance and a traitor. Take her away!";
            break;
        }
        break;

      case "Sequel":
        switch (randomMessageNum) {
          case 1:
            message =
              "I Know What I Have To Do, But I Don't Know If I Have The Strength To Do It.";
            break;
          case 2:
            message = "Let The Past Die. Kill It If You Have To.";
            break;
          case 3:
            message = "There has been an awakening. Have you felt it?";
            break;
          case 4:
            message = "I'll show you the dark side";
            break;
          case 5:
            message =
              "Show Me, Grandfather. And I Will Finish What You Started.";
            break;
        }
        break;
    }
  } else {
    switch (randomTril) {
      case "Prequel":
        switch (randomMessageNum) {
          case 1:
            message = "Now this is pod racing!";
            break;
          case 2:
            message = "What about the droid attack on the wookies.";
            break;
          case 3:
            message = "I hate sand. It gets everywhere.";
            break;
          case 4:
            message = "It's over Anikan. I have the high ground.";
            break;
          case 5:
            message = "Only a sith deals in absolutes.";
            break;
        }
        break;

      case "Orginal":
        switch (randomMessageNum) {
          case 1:
            message = "May the force be with you.";
            break;
          case 2:
            message =
              "Mos Eisley spaceport. You will never find a more wretched hive of scum and villainy.";
            break;
          case 3:
            message =
              "These blast points — too accurate for sandpeople. Only imperial stormtroopers are so precise.";
            break;
          case 4:
            message = "I suggest a new strategy, R2. Let the Wookiee win.";
            break;
          case 5:
            message = "These arent the droids youre looking for.";
            break;
        }
        break;

      case "Sequel":
        switch (randomMessageNum) {
          case 1:
            message = "That's Not How The Force Works!";
            break;
          case 2:
            message = "I am all the Jedi!";
            break;
          case 3:
            message = "Amazing. Every Word Of What You Just Said Was Wrong.";
            break;
          case 4:
            message = "Chewie, We're Home.";
            break;
          case 5:
            message = "The Greatest Teacher, Failure Is.";
            break;
        }
        break;
    }
  }
  document.getElementById('quote').innerHTML = message;  
};

//add event listeners
document.getElementById("generateQuote").addEventListener("click",getRandomQuote);

