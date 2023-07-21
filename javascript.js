const form = document.getElementById("idForForm");
const password = document.getElementById("pwrd");
const confirmPassword = document.getElementById("pwrd_confirm");
const feedback = document.getElementById("pwrdConfirm_message");

let isPasswordMatch = false;

confirmPassword.addEventListener("input", (e) => {
  if (password.value != confirmPassword.value) {
    feedback.innerHTML = "Password did not match.";
    isPasswordMatch = false;
  }
  else {
    feedback.innerHTML = "";
    isPasswordMatch = true;
  }
})

function checkPassword () {
  if (isPasswordMatch) {
    return true;
  }
  else {
    alert("Wait! Password did not match.");
    return false;
  }
}