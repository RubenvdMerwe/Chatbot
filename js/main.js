//links
//http://eloquentjavascript.net/09_regexp.html
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions

var messages = [], //array that hold the record of each string in chat
  lastUserMessage = "", //keeps track of the most recent input string from the user
  botMessage = "", //var keeps track of what the chatbot is going to say
  botName = "Ruben", //name of the chatbot
  userName = "You";
talking = true; //when false the speach function doesn't work
//
//
//****************************************************************
//****************************************************************
//****************************************************************
//****************************************************************
//****************************************************************
//****************************************************************
//****************************************************************
//edit this function to change what the chatbot says
function chatbotResponse() {
  talking = true;
  botMessage = "I dont have an answer for that question yet."; //the default message

  if (lastUserMessage === "hi" || lastUserMessage == "hello") {
    const hi = ["hi", "hello"];
    botMessage = hi[Math.floor(Math.random() * hi.length)];
  }

  if (lastUserMessage === "name" || lastUserMessage === "what is your name") {
    botMessage = "My name is " + botName;
  }

  if (
    lastUserMessage === "college" ||
    lastUserMessage === "What did you study?"
  ) {
    botMessage =
      "I studied for my Bachelor of Science in Information Technology(Software Engineering) ";
  }

  if (
    lastUserMessage === "experience" ||
    lastUserMessage === "What work experience do you have?"
  ) {
    botMessage =
      "I have no work experience as of yet, but I do believe I have the needed skills to succeed in my first work experience.";
  }

  if (
    lastUserMessage === "how" ||
    lastUserMessage === "How did you become interested in web development?"
  ) {
    botMessage =
      "I have an older cousin that is into web development and picked it up from him. I became interested in how websites work and shadowed him in one of my school holidays and became passionate about web development.";
  }

  if (
    lastUserMessage ===
    "What do you do if you can’t work out a coding issue by yourself?"
  ) {
    botMessage =
      "One thing that I have learned so far about development is that google is truly your friend and that most questions have been asked and answered with relative solutions to your problem. Asking colleagues, friends and experienced developers also work quite well for me. ";
  }

  if (lastUserMessage === "How would you reduce web application load time?") {
    botMessage =
      "There are various tools you can use to test and measure page speed. I personally use Google PageSpeed Insights. Ways to improve page loading speed includes choosing a performance optimized hosting solution, optimizing images, reducing redirects and caching.";
  }

  if (
    lastUserMessage ===
    "How well do you handle constructive criticism about your web development projects? Can you give me an example?"
  ) {
    botMessage =
      "Through my experience as a web developer, I've learned how important constructive criticism is to deliver products that meet a client's vision. I realized that constructive feedback is a way for clients to refine their needs. Receiving constructive feedback also helped me hone my skills and learn more about the client to maximize future projects.";
  }

  if (
    lastUserMessage ===
    "What is the job role of a Web Developer? In your opinion, what are the most important aspects of web development jobs and why?"
  ) {
    botMessage =
      " The specific role of a Web Developer will vary greatly depending on the specific job description, and whether or not a hiring manager is looking for back-end specialists or front-end web developers. A web developer designs, develops, enhances, tests and deploys web applications with an end goal of creating engaging and user-friendly site layout and function. A developer gathers and defines requirements, maintains websites, troubleshoots and fixes bugs, follows best practices and collaborates with other teams.";
  }
}
//****************************************************************
//****************************************************************
//****************************************************************
//****************************************************************
//****************************************************************
//****************************************************************
//****************************************************************
//
//
//
//this runs each time enter is pressed.
//It controls the overall input and output
function newEntry() {
  //if the message from the user isn't empty then run
  if (document.getElementById("chatbox").value != "") {
    //pulls the value from the chatbox ands sets it to lastUserMessage
    lastUserMessage = document.getElementById("chatbox").value;
    //sets the chat box to be clear
    document.getElementById("chatbox").value = "";
    //adds the value of the chatbox to the array messages
    messages.push("<b class='green'>" + userName + ":</b> " + lastUserMessage);
    //Speech(lastUserMessage);  //says what the user typed outloud
    //sets the variable botMessage in response to lastUserMessage
    chatbotResponse();
    //add the chatbot's name and message to the array messages
    messages.push("<b class='green'>" + botName + ":</b> " + botMessage);
    // says the message using the text to speech function written below
    Speech(botMessage);
    //outputs the last few array elements of messages to html
    for (var i = 1; i < 8; i++) {
      if (messages[messages.length - i])
        document.getElementById("chatlog" + i).innerHTML =
          messages[messages.length - i];
    }
  }
}

//text to Speech
//https://developers.google.com/web/updates/2014/01/Web-apps-that-talk-Introduction-to-the-Speech-Synthesis-API
function Speech(say) {
  if ("speechSynthesis" in window && talking) {
    var utterance = new SpeechSynthesisUtterance(say);
    //msg.voice = voices[10]; // Note: some voices don't support altering params
    //msg.voiceURI = 'native';
    //utterance.volume = 1; // 0 to 1
    //utterance.rate = 0.1; // 0.1 to 10
    //utterance.pitch = 1; //0 to 2
    //utterance.text = 'Hello World';
    //utterance.lang = 'en-US';
    speechSynthesis.speak(utterance);
  }
}

//runs the keypress() function when a key is pressed
document.onkeypress = keyPress;
//if the key pressed is 'enter' runs the function newEntry()
function keyPress(e) {
  var x = e || window.event;
  var key = x.keyCode || x.which;
  if (key == 13 || key == 3) {
    //runs this function when enter is pressed
    newEntry();
  }
  if (key == 38) {
    console.log("hi");
    //document.getElementById("chatbox").value = lastUserMessage;
  }
}

//clears the placeholder text ion the chatbox
//this function is set to run when the users brings focus to the chatbox, by clicking on it
function placeHolder() {
  document.getElementById("chatbox").placeholder = "";
}
