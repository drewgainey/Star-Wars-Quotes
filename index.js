// constants used for random quotes
const trilogy = ["Prequel", "Orginal", "Sequel"];
const darkSideLightSide = ["Dark Side", "Light Side"];

//constants for DOM eletements
const button = document.getElementById("generateQuote");
const quoteText = document.getElementById('quote');
const trilogySelector = document.getElementById('trilogies');
const darkSideLightSideSelector = document.getElementById('darkSideLightSide');

//functions to randomly select trilogy and dark side or light side and the message to display

const getTrilogy = () => trilogy[Math.round(Math.random() * 2)];
const getDarkSideLightSide = () => darkSideLightSide[Math.round(Math.random())];
const getQuoteNum = () => Math.round(Math.random() * 4) + 1;

//function that runs when button is clicked to generate new quote
function getRandomQuote() {
  
  //generate random combo of trilogy and darkside or light side
  let randomTril = trilogySelector.value;
  let randomDarkSideLightSide = darkSideLightSideSelector.value;
  let randomQuoteNum = getQuoteNum();

  //get random quote
  let quote;

  if (randomDarkSideLightSide === "Dark Side") {
    switch (randomTril) {
      case "Prequel":
        switch (randomQuoteNum) {
          case 1:
            quote = "General Kenobi.";
            break;
          case 2:
            quote =
              "Did you ever hear the tragedy of Darth Plagueis The Wise? I thought not. Its not a story the Jedi would tell you. Its a Sith legend. Darth Plagueis was a Dark Lord of the Sith, so powerful and so wise he could use the Force to influence the midichlorians to create life… He had such a knowledge of the dark side that he could even keep the ones he cared about from dying. The dark side of the Force is a pathway to many abilities some consider to be unnatural. He became so powerful… the only thing he was afraid of was losing his power, which eventually, of course, he did. Unfortunately, he taught his apprentice everything he knew, then his apprentice killed him in his sleep. Ironic. He could save others from death, but not himself.";
            break;
          case 3:
            quote = "I am the senate!";
            break;
          case 4:
            quote = "Hello there.";
            break;
          case 5:
            quote = "Do it!";
            break;
        }
        break;

      case "Orginal":
        switch (randomQuoteNum) {
          case 1:
            quote = "Luke, I am your father.";
            break;
          case 2:
            quote =
              "If this is a consular ship, where is the ambassador? — Commander, tear this ship apart until you’ve found those plans. And bring me the passengers, I want them alive!";
            break;
          case 3:
            quote = "I find your lack of faith disturbing.";
            break;
          case 4:
            quote = "Join me and together we can rule the galaxy.";
            break;
          case 5:
            quote =
              "You are part of the Rebel Alliance and a traitor. Take her away!";
            break;
        }
        break;

      case "Sequel":
        switch (randomQuoteNum) {
          case 1:
            quote =
              "I Know What I Have To Do, But I Don't Know If I Have The Strength To Do It.";
            break;
          case 2:
            quote = "Let The Past Die. Kill It If You Have To.";
            break;
          case 3:
            quote = "There has been an awakening. Have you felt it?";
            break;
          case 4:
            quote = "I'll show you the dark side";
            break;
          case 5:
            quote =
              "Show Me, Grandfather. And I Will Finish What You Started.";
            break;
        }
        break;
    }
  } else {
    switch (randomTril) {
      case "Prequel":
        switch (randomQuoteNum) {
          case 1:
            quote = "Now this is pod racing!";
            break;
          case 2:
            quote = "What about the droid attack on the wookies.";
            break;
          case 3:
            quote = "I hate sand. It gets everywhere.";
            break;
          case 4:
            quote = "It's over Anikan. I have the high ground.";
            break;
          case 5:
            quote = "Only a sith deals in absolutes.";
            break;
        }
        break;

      case "Orginal":
        switch (randomQuoteNum) {
          case 1:
            quote = "May the force be with you.";
            break;
          case 2:
            quote =
              "Mos Eisley spaceport. You will never find a more wretched hive of scum and villainy.";
            break;
          case 3:
            quote =
              "These blast points — too accurate for sandpeople. Only imperial stormtroopers are so precise.";
            break;
          case 4:
            quote = "I suggest a new strategy, R2. Let the Wookiee win.";
            break;
          case 5:
            quote = "These arent the droids youre looking for.";
            break;
        }
        break;

      case "Sequel":
        switch (randomQuoteNum) {
          case 1:
            quote = "That's Not How The Force Works!";
            break;
          case 2:
            quote = "I am all the Jedi!";
            break;
          case 3:
            quote = "Amazing. Every Word Of What You Just Said Was Wrong.";
            break;
          case 4:
            quote = "Chewie, We're Home.";
            break;
          case 5:
            quote = "The Greatest Teacher, Failure Is.";
            break;
        }
        break;
    }
  }
  quoteText.innerHTML = quote;  
};

//add event listeners
button.addEventListener("click",getRandomQuote);

