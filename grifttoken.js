// Random number gen for Colors
function randoColor() {
    return Math.floor(Math.random() * 26) * 10;
  }  
var root = document.querySelector(':root');

// Background color will have a 20% chance to be a gradient
// 20% to add the class bgGradient
function bgTypeChance() {
	const square = document.getElementById("squareid").classList;
	let x = Math.floor(Math.random() * 100)
  if (x >= 80) {
		square.add("bgGradient");
  } else {
		square.add("bgSolid");
  }
}
bgTypeChance();

// Non-rarity based colors - Text and Background
var tValR = randoColor();
var tValG = randoColor();
var tValB = randoColor();
var bgSolValR = randoColor();
var bgSolValG = randoColor();
var bgSolValB = randoColor();
var bgGrad1ValR = randoColor();
var bgGrad1ValG = randoColor();
var bgGrad1ValB = randoColor();
var bgGrad2ValR = randoColor();
var bgGrad2ValG = randoColor();
var bgGrad2ValB = randoColor();

// Standard Fonts: Arial, Verdana, Tahoma
// Professional: TNR, Georgia, Garamond
// Meme Fonts: Comic Sans, Impact, Papyrus
// Cursive Fonts: Brush Script MT
function fontTypeChance() {
	let x = Math.floor(Math.random() * 100);
  if (x >= 90) {
    // Mythic Rare 10%
  	const fontArray = ['Brush Script MS'];
    let y = fontArray[Math.floor(Math.random() * fontArray.length)];
    root.style.setProperty('--tFont', y);
    console.log(y);
  } else if (x >= 70) {
    // Rare 20%
  	const fontArray = ['Comic Sans', 'Impact', 'Papyrus'];
    let y = fontArray[Math.floor(Math.random() * fontArray.length)];
    root.style.setProperty('--tFont', y);
    console.log(y);
  } else if (x >= 40) {
    // Uncommon 30%
  	const fontArray = ['Times New Roman', 'Georgia', 'Garamond'];
    let y = fontArray[Math.floor(Math.random() * fontArray.length)];
    root.style.setProperty('--tFont', y);
    console.log(y);
  } else {
    // Common 40%
  	const fontArray = ['Arial', 'Verdana', 'Tahoma'];
    let y = fontArray[Math.floor(Math.random() * fontArray.length)];
    root.style.setProperty('--tFont', y);
    console.log(y);
  }
}
fontTypeChance();


// Rarity based border
// 1% red, 5% gold, 15% grey, 79% black
var bgStroke;
function bgStrokeRarity() {
  let bgStrokeVal = Math.floor(Math.random() * 101);
  console.log(bgStrokeVal);

  if (bgStrokeVal > 99) {
    bgStroke = 'red';
  } else if (bgStrokeVal > 94) {
    bgStroke = 'gold';
  } else if (bgStrokeVal > 79) {
    bgStroke = 'grey';
  } else {
    bgStroke = 'black';
  }
  return bgStroke; 
};
bgStrokeRarity();

// Sets all the colors
root.style.setProperty('--bgStroke', bgStroke);
root.style.setProperty('--tValR', tValR);
root.style.setProperty('--tValG', tValG);
root.style.setProperty('--tValB', tValB);
root.style.setProperty('--bgSolValR', bgSolValR);
root.style.setProperty('--bgSolValG', bgSolValG);
root.style.setProperty('--bgSolValB', bgSolValB);
root.style.setProperty('--bgGrad1ValR', bgGrad1ValR);
root.style.setProperty('--bgGrad1ValG', bgGrad1ValG);
root.style.setProperty('--bgGrad1ValB', bgGrad1ValB);
root.style.setProperty('--bgGrad2ValR', bgGrad2ValR);
root.style.setProperty('--bgGrad2ValG', bgGrad2ValG);
root.style.setProperty('--bgGrad2ValB', bgGrad2ValB);