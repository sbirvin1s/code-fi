var phoneNum;

window.onload = event => {
  phoneNum = document.getElementById('phoneNumber');
  phoneNum.addEventListener('change', () => phoneMask());
}

function phoneMask() {
  if (phoneNum.value !== '') {
    var num = phoneNum.value.replace(/\D/g,'');

    if (num[0] !== '1') {
      phoneNum.value = '+1 ' + '(' + num.substring(0,3) + ') ' + num.substring(3,6) + '-' + num.substring(6,11);
    } else {
      phoneNum.value = '+' + num.substring(0,1) + ' (' + num.substring(1,4) + ') ' + num.substring(4,7) + '-' + num.substring(7,11);
    }
  }
}
