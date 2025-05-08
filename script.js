console.log("Hello World");

// Create an array of objects to display the chore item and the goofy "motivational" command for each

let chores = [
  {
    Item: "Wash the Dishes",
    Command:
      "You're one unwashed bowl away from a literal food swamp in your kitchen sink.",
  },
  {
    Item: "Start a Load of Laundry",
    Command:
      "Don't forget to dry them afterwards. No one needs mushrooms sprouting out of their pants.",
  },
  {
    Item: "Fold Laundry",
    Command:
      "I know good and well you see that mountain of unfolded mess. Get it done before two hobbits start climbing it with the One Ring.",
  },
  {
    Item: "Dust an Entire Room",
    Command:
      "No one wants furry lungs, bro. Vacuums and dusters are our friends.",
  },
  {
    Item: "Vacuum an Entire Room",
    Command:
      "Dirty floors suck. Know what else sucks? Vacuums. Handle that before you start sprouting carrots in the carpet.",
  },
  {
    Item: "Change your Bedding",
    Command:
      "The human body sheds about 600,000 skin cells per day. Now imagine how many have built up on those sheets of yours since you last changed them.",
  },
  {
    Item: "Wipe Down Kitchen Surfaces",
    Command: "The grease...the grime...the crumbs...just ew. Wipe e'm down.",
  },
  {
    Item: "Deep Clean the Bathroom",
    Command:
      "And when I say deep, I mean DEEP. I mean break out the chemicals and the elbow grease. Scrub like your life depends on it!",
  },
  {
    Item: "De-clutter the Junk Drawer",
    Command:
      "You knew it had to happen one day. I mean, the drawer probably won't even fully close because it's so full of randomness. Time to purge!",
  },
  {
    Item: "Organize Cabinets",
    Command:
      "Aren't you sick of getting pummeled in the face by an avalanche of tupperware or cough syrup bottles or whatever random items you may have in there every time you open the cabinet door?",
  },
  {
    Item: "Sweep and Mop Flooring in One Room",
    Command:
      "No one wants to sound like they're Irish-dancing on Rice Krispies when they walk across a room, my guy. Handle that.",
  },
  {
    Item: "Sort Unwanted Clothes for Donations",
    Command:
      "They're taking up precious storage space, and they're probably not even that cute anyway.",
  },
  {
    Item: "Clean Baseboards",
    Command:
      "Yes, I'm serious. Run your fingertip across the top and you tell ME if you think they're 'fine'.",
  },
  {
    Item: "Wash Windows",
    Command:
      "The whole point of having a window is to, ya know, SEE outside. To VIEW the great outdoors. You can't do that if there's smudges all over the glass.",
  },
  {
    Item: "Take out the Trash",
    Command:
      "Look, you owe it to yourself to NOT have an actual bag of garbage sitting in your home. That's why we got rid of that ex of yours, remember?",
  },
];

console.log(chores)

// get random chore from array

function getChore(chores) {
    return chores[Math.floor(Math.random() * chores.length)];
}

console.log(getChore(chores))

// display random item on screen with event listeners and event handlers

let choreDisplay = document.getElementById("chore-display");
let choreButton = document.getElementById("get-chore");

choreButton.addEventListener("click", getRandomChore);

function getRandomChore(event) {
  event.preventDefault();
  let randomChore = Math.floor(Math.random() * chores.length);
  let chore = chores[randomChore]; // this was my biggest hangup in this function!
  console.log(chores[randomChore]); // from problem solving lab 2

  let choreDivElement = document.createElement("div");
  let choreTitleElement = document.createElement("h4");
  let choreCommandElement = document.createElement("p");

  choreDivElement.classList.add("chores-div");
  choreDisplay.innerHTML = ""; // from problem solving lab 2 interactions
  choreTitleElement.innerHTML = chore.Item;
  choreCommandElement.innerHTML = chore.Command;

  choreDivElement.appendChild(choreTitleElement);
  choreDivElement.appendChild(choreCommandElement);

  choreDisplay.appendChild(choreDivElement);

  // everything past console.log came from JS music playlist/Level 2 demos
}
