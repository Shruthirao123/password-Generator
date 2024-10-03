 let inputslider = document.getElementById("inputslider");
let slidervalue = document.getElementById("slidervalue");
let passbox=document.getElementById('passbox');
let lowercase=document.getElementById('lowercase');
let uppercase=document.getElementById('uppercase');
let numbers=document.getElementById('numbers');
let symbols=document.getElementById('symbols');
let genbut=document.getElementById('genbut');
let copyicon= document.getElementById('copyicon');


let upperchar="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let lowerchar="qwertyuioplkjhgfdsazxcvbnm";
let num='0123456789';
let sym="~!@#$%^&*"

slidervalue.textContent = inputslider.value;

inputslider.addEventListener('input', () => {
  slidervalue.textContent = inputslider.value;
});

genbut.addEventListener('click',()=>{
  passbox.value=generatePassword();
})

function generatePassword(){
  let genPassword=""; 
  let allchars="";
  allchars+=lowercase.checked ? lowerchar:"";
  allchars+=uppercase.checked ? upperchar:"";
  allchars+=numbers.checked ? num:"";
  allchars+=symbols.checked ? sym:"";
  
  if(allchars==""|| allchars.length==0){
    return genPassword;
  }

  let i=1;
  while(i<=inputslider.value){
    genPassword += allchars.charAt(Math.floor(Math.random()*allchars.length));
    i++;
  }
    
  return genPassword;
}

copyicon.addEventListener('click',()=>{
  if(passbox.value !="" || passbox.value.length>=1){
    navigator.clipboard.writeText(passbox.value);
    copyicon.innerText="check";
    copyicon.title="Password copied";

    setTimeout(() => {
      copyicon.innerHTML="content_copy";
      copyicon.title="";
    }, 3000);
  }
  
})
 