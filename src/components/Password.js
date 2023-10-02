var showPassword;
var showConfirmPassword;

window.onload = event => {
  showPassword = document.getElementById('showPassword');
  showConfirmPassword = document.getElementById('showConfirmPassword');

  showPassword.addEventListener('click', () => toggleShowPassword(showPassword));

  if (showConfirmPassword) {
    showConfirmPassword.addEventListener('click', () => toggleShowPassword(showConfirmPassword));
  }
}



function toggleShowPassword( targetElement ) {
  event.preventDefault();
  const passwordInput = targetElement.closest('div').children[0].children[0];

  if (targetElement.getAttribute('class') === "Button_showPassword___inactive") {
    passwordInput.setAttribute('type', 'text');
    targetElement.setAttribute('class', 'Button_showPassword___active');
  } else {
    passwordInput.setAttribute('type', 'password');
    targetElement.setAttribute('class', 'Button_showPassword___inactive');
  }
};