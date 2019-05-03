var signupwindow;
var triggerBtn;
var closeBtn;

window.onload = function() {
  signupWindow = document.getElementById("signup");
  triggerBtn = document.getElementById("signupButton");
  closeBtn = document.getElementById("closeButton");

  triggerBtn.onclick = function() {
    signupWindow.style.display = "flex";
    console.log("Opening sign up window");
  };

  closeBtn.onclick = function() {
    signupWindow.style.display = "none";
    console.log("Closing sign up window");
  };

  console.log('test');
};

window.onclick = function(event) {
  if (event.target == signupWindow) {
    signupWindow.style.display = "none";
  }
};
