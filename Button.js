class Button {
  constructor(label) {
    this.button = document.createElement("input");
    this.button.setAttribute("type", "button");
    this.button.setAttribute("value", label);  
    document.getElementById("buttonarea").appendChild(this.button);

    if (label == "Start") {
      this.button.setAttribute("id", "button");
    }else {
      this.button.setAttribute("id", "button2");
    }

    var self = this;
    this.button.onclick = function() {
      self.callback();
    }
  }
  callback() {
    startButton();
    var label = this.button.value;

    document.getElementById("statusmsg").innerHTML =
      "Speak the shape name!";

    if (label == "Start") {
      gameStart = true;
      this.shapeTimerID = setInterval(launchShape, 4000); // launch a new object every 2000 msec (2sec)
      tick();
      this.button.blur();
    } else if (label == "Stop") {
      gameStart = false;
      clearInterval(this.shapeTimerID);
    } else if (label == "Restart") {
      init();
      gameStart = true;
      this.shapeTimerID = setInterval(launchShape, 4000); // launch a new object every 2000 msec (2sec)
      tick();
      this.button.blur();
    }
  }
}
