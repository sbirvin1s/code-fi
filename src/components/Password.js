var showPassword = document.getElementById('showPassword');

showPassword.addEventListener('click', toggleShowPassword());



function toggleShowPassword() {
  const passwordInput = showPassword.closest('input');
  console.log('toggleShowPassword was called');

  if (showPassword.getAttribute('class') === "Button_showPassword___inactive") {
    passwordInput.setAttribute('type', 'text');
    showPassword.setAttribute('class', 'Button_showPassword___active');
  } else {
    passwordInput.setAttribute('type', 'password');
    showPassword.setAttribute('class', 'Button_showPassword___inactive');
  }
}