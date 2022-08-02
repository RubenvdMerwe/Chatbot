var messages = [],
  lastUserMessage = "",
  botMessage = "",
  botName = "Ruben",
  userName = "You";
talking = true;

function chatbotResponse() {
  talking = true;
  botMessage = "I dont have an answer for that question yet.";

  if (lastMessage === "hi" || lastMessage == "hello") {
    const hi = ["hi", "hello"];
    botMessage = hi[Math.floor(Math.random() * hi.length)];
  }

  if (lastMessage === "name" || lastMessage === "what is your name") {
    botMessage = "My name is " + botName;
  }

  if (lastMessage === "college" || lastMessage === "what did you study?") {
    botMessage =
      "I studied for my Bachelor of Science in Information Technology(Software Engineering) ";
  }

  if (
    lastMessage === "experience" ||
    lastMessage === "what work experience do you have?"
  ) {
    botMessage =
      "I have no work experience as of yet, but I do believe I have the needed skills to succeed in my first work experience.";
  }

  if (
    lastMessage === "how" ||
    lastMessage === "how did you become interested in web development?"
  ) {
    botMessage =
      "I have an older cousin that is into web development and picked it up from him. I became interested in how websites work and shadowed him in one of my school holidays and became passionate about web development.";
  }

  if (
    lastMessage ===
    "what do you do if you can’t work out a coding issue by yourself?"
  ) {
    botMessage =
      "One thing that I have learned so far about development is that google is truly your friend and that most questions have been asked and answered with relative solutions to your problem. Asking colleagues, friends and experienced developers also work quite well for me. ";
  }

  if (lastMessage === "how would you reduce web application load time?") {
    botMessage =
      "There are various tools you can use to test and measure page speed. I personally use Google PageSpeed Insights. Ways to improve page loading speed includes choosing a performance optimized hosting solution, optimizing images, reducing redirects and caching.";
  }

  if (
    lastMessage ===
    "how well do you handle constructive criticism about your web development projects? can you give me an example?"
  ) {
    botMessage =
      "Through my experience as a web developer, I've learned how important constructive criticism is to deliver products that meet a client's vision. I realized that constructive feedback is a way for clients to refine their needs. Receiving constructive feedback also helped me hone my skills and learn more about the client to maximize future projects.";
  }

  if (
    lastMessage ===
    "what is the job role of a web developer? in your opinion, what are the most important aspects of web development jobs and why?"
  ) {
    botMessage =
      " The specific role of a Web Developer will vary greatly depending on the specific job description, and whether or not a hiring manager is looking for back-end specialists or front-end web developers. a web developer designs, develops, enhances, tests and deploys web applications with an end goal of creating engaging and user-friendly site layout and function. A developer gathers and defines requirements, maintains websites, troubleshoots and fixes bugs, follows best practices and collaborates with other teams.";
  }
}

function newEntry() {
  if (document.getElementById("chatbox").value != "") {
    lastUserMessage = document.getElementById("chatbox").value;
    lastMessage = lastUserMessage.toLowerCase();
    document.getElementById("chatbox").value = "";
    messages.push("<b class='green'>" + userName + ":</b> " + lastUserMessage);
    chatbotResponse();
    messages.push("<b class='green'>" + botName + ":</b> " + botMessage);
    Speech(botMessage);
    for (var i = 1; i < 8; i++) {
      if (messages[messages.length - i])
        document.getElementById("chatlog" + i).innerHTML =
          messages[messages.length - i];
    }
  }
}

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

document.onkeypress = keyPress;
function keyPress(e) {
  var x = e || window.event;
  var key = x.keyCode || x.which;
  if (key == 13 || key == 3) {
    newEntry();
  }
  if (key == 38) {
    console.log("hi");
  }
}

function placeHolder() {
  document.getElementById("chatbox").placeholder = "";
}
