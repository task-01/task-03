const formValue = document.getElementById('inputForm')
const calculationMark1 = document.getElementById('calculationMark1')
const calculationMark2 = document.getElementById('calculationMark2')
const calculationMark3 = document.getElementById('calculationMark3')
const calculationMark4 = document.getElementById('calculationMark4')
const calculationMark5 = document.getElementById('calculationMark5')
let total = 0;
let state = 'start';
$('#calculationMark').addClass("calculationMark");
$(document).ready(function(){
  $("#calculationMark1").click(function() {
    console.log('i')
    calculationMark1.disabled = true
    if(calculationMark2.disabled = true)calculationMark2.disabled = true;
    if(calculationMark3.disabled = true)calculationMark3.disabled = true;
    if(calculationMark4.disabled = true)calculationMark4.disabled = true;
    if(calculationMark5.disabled = true)calculationMark5.disabled = true;
  });
  $("#calculationMark2").click(function() {
    console.log('i')
    calculationMark2.disabled = true
    if(calculationMark1.disabled = true)calculationMark1.disabled = true;
    if(calculationMark3.disabled = true)calculationMark3.disabled = true;
    if(calculationMark4.disabled = true)calculationMark4.disabled = true;
    if(calculationMark5.disabled = true)calculationMark5.disabled = true;
  });
  $("#calculationMark3").click(function() {
    console.log('i')
    calculationMark3.disabled = true
    if(calculationMark1.disabled = true)calculationMark1.disabled = true;
    if(calculationMark2.disabled = true)calculationMark2.disabled = true;
    if(calculationMark4.disabled = true)calculationMark4.disabled = true;
    if(calculationMark5.disabled = true)calculationMark5.disabled = true;
  });
  $("#calculationMark4").click(function() {
    console.log('i')
    calculationMark4.disabled = true
    if(calculationMark1.disabled = true)calculationMark1.disabled = true;
    if(calculationMark2.disabled = true)calculationMark2.disabled = true;
    if(calculationMark3.disabled = true)calculationMark3.disabled = true;
    if(calculationMark5.disabled = true)calculationMark5.disabled = true;
  });
  $("#calculationMark5").click(function() {
    console.log('i')
    calculationMark5.disabled = true
    if(calculationMark1.disabled = true)calculationMark1.disabled = true;
    if(calculationMark2.disabled = true)calculationMark2.disabled = true;
    if(calculationMark3.disabled = true)calculationMark3.disabled = true;
    if(calculationMark4.disabled = true)calculationMark4.disabled = true;
  });
  $("#equal_btn").click(function() {
    if(calculationMark1.disabled = true)calculationMark1.disabled = false;
    if(calculationMark2.disabled = true)calculationMark2.disabled = false;
    if(calculationMark3.disabled = true)calculationMark3.disabled = false;
    if(calculationMark4.disabled = true)calculationMark4.disabled = false;
    if(calculationMark5.disabled = true)calculationMark5.disabled = false;
    console.log(eval(total))
    formValue.value = eval(total)
  });
  $("#allclear_btn").click(function() {
    if(calculationMark1.disabled = true)calculationMark1.disabled = false;
    if(calculationMark2.disabled = true)calculationMark2.disabled = false;
    if(calculationMark3.disabled = true)calculationMark3.disabled = false;
    if(calculationMark4.disabled = true)calculationMark4.disabled = false;
    if(calculationMark5.disabled = true)calculationMark5.disabled = false;
    total = 0; 
    formValue.value = 0;
    formValue.value = ''
  });
});
function buttonValue(btn) {
  console.log(formValue.value += btn.value);
  if(formValue.value.charAt(0) == 0) {
    total = 0; 
    formValue.value = 0;
    formValue.value = '';
    alert('最初は記号や０以外にしてください')
    return;
  }else if(formValue.value.charAt(0) == 1,2,3,4,5,6,7,8,9) {
    state ==='calBtn'
    if(total === 0) {
      total = btn.value;  
    }else{
      total += btn.value; 
      //formValue.value += btn.value 
    };
    if(calculationMark1.disabled = true)calculationMark1.disabled = false;
    if(calculationMark2.disabled = true)calculationMark2.disabled = false;
    if(calculationMark3.disabled = true)calculationMark3.disabled = false;
    if(calculationMark4.disabled = true)calculationMark4.disabled = false;
    if(calculationMark5.disabled = true)calculationMark5.disabled = false;
  }
  if(formValue.value.charAt(0) == '+')formValue.value = 0, formValue.value = '';
  else if(formValue.value.charAt(0) == '-')formValue.value = 0, formValue.value = '';
  else if(formValue.value.charAt(0) == '*')formValue.value = 0, formValue.value = '';
  else if(formValue.value.charAt(0) == '/')formValue.value = 0, formValue.value = '';
  else if(formValue.value.charAt(0) == '.')formValue.value = 0, formValue.value = '';
}