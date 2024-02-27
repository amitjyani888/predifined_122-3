x = 0;
y = 0;
const screen_width = 0;
const screen_height = 0;
let apple = null;
let speak_data = "";
let to_number = "";
function setScreenDimensions(width, height) {

}

function loadAppleImage(imagePath) {
  
}

function setSpeakData(data) {
  
}

function setRecognizedNumber(number) {
  
}

function preload() {
  apple = loadImage("path/to/your/apple.png");

}
function recognitiononresult(event) {
  const content = event.results[0][0].transcript;
  to_number = Number(content);

  if (Number.isInteger(to_number)) {
    speak_data = `${to_number} apples drawn`;

    draw_apple = "set"; 
  } else {
    speak_data = "The speech did not recognize a number.";
  }
}
draw_apple = "";

var SpeechRecognition = window.webkitSpeechRecognition;

var recognition = new SpeechRecognition();

function start()
{
  document.getElementById("status").innerHTML = "System is listening please speak";  
  recognition.start();
} 
 
recognition.onresult = function(event) {

 console.log(event); 

 content = event.results[0][0].transcript;

    document.getElementById("status").innerHTML = "The speech has been recognized: " + content; 

}

function setup() {
  screen_width = window.innerWidth();
  screen_height = window.innerHeight() - 150;
  createCanvas(screen_width, screen_height - 150);
  canvas.position(0, 150); 
}


function draw() {
  if (draw_apple === "set") {
    for (let i = 1; i <= to_number; i++) {
      const x = Math.floor(Math.random() * 700);
      const y = Math.floor(Math.random() * 400);
      image(apple, x, y, apple.width, apple.height);
    }
  }
}

function speak(){
    var synth = window.speechSynthesis;

    var utterThis = new SpeechSynthesisUtterance(speak_data);

    synth.speak(utterThis);

    speak_data = "";
}
document.getElementById("speak_button").addEventListener("click", () => {
  speak(speak_data); 
});
