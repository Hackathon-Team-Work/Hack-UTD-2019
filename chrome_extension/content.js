chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
  if (request.message === "clicked_browser_action") {
    var theText = $("body p,div.speakable").text();

    console.log("received request");
    // console.log(theText);

    //generate a number
    var theNum = Math.round(Math.random() * 2 - 1);
    //send theText to background.js
    chrome.runtime.sendMessage({
      message: "run_analysis",
      content: theText,
      number: theNum
    });
  }
});
