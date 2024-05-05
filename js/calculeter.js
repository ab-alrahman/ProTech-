/*S- The functions*/
function Unique(arr1, arr2) {
    let commonElements = [];
  
    for (let i = 0; i < arr1.length; i++) {
      if (arr2.includes(arr1[i])) {
        commonElements.push(arr1[i]);
      }
    }
    return commonElements.sort();
  }
  function finda(arr1, arr2) {
      let commonElements = [];
      let uniqueElements = [];
      for (let i = 0; i < arr1.length; i++) {
        if (arr2.includes(arr1[i])) {
          commonElements.push(arr1[i]);
        } else {
          uniqueElements.push(arr1[i]);
        }
      }
      for (let i = 0; i < arr2.length; i++) {
        if (!arr1.includes(arr2[i])) {
          uniqueElements.push(arr2[i]);
        }
      }
    let x = commonElements.concat(uniqueElements);
    return x;
    }
    function getUniqueElements(arr1, arr2) {
      let uniqueElements = [];
      for (let i = 0; i < arr1.length; i++) {
        if (!arr2.includes(arr1[i])) {
          uniqueElements.push(arr1[i]);
        }
      }
      return uniqueElements.sort();
    }
    /*E- The functions */
/*The div of answar*/ 
let answar=document.getElementById("thired");
/*The div of answar*/
let btnU=document.getElementById("u");
let btnN=document.getElementById("n");
let btnF=document.getElementById("f");
let btnMa=document.getElementById("ma");
let btnMb=document.getElementById("mb");
let btnStart=document.getElementById("start");
let btnRestart=document.getElementById("restart");

btnStart.onclick=function(){
  let firstInput=document.getElementById("omega").value.split(",");
  let secoundInput=document.getElementById("first").value.split(",");
  let thiredInput=document.getElementById("secound").value.split(",");
  btnU.style.display=`inline`;
  btnN.style.display=`inline`;
  btnF.style.display=`inline`;
  btnMa.style.display=`inline`;
  btnMb.style.display=`inline`;
  btnRestart.style.display=`inline`;
  btnStart.style.display=`none`;
}
btnU.onclick=function(){
  let firstInput=document.getElementById("omega").value.split(",");
  let secoundInput=document.getElementById("first").value.split(",");
  let thiredInput=document.getElementById("secound").value.split(",");
  answar.innerHTML=`A⋃B = {${finda(secoundInput,thiredInput).sort()}}`
}
btnN.onclick=function(){
  let firstInput=document.getElementById("omega").value.split(",");
  let secoundInput=document.getElementById("first").value.split(",");
  let thiredInput=document.getElementById("secound").value.split(",");
  answar.innerHTML=`A⋂B = {${Unique(secoundInput,thiredInput).sort()}}`
}
btnF.onclick=function(){
  let firstInput=document.getElementById("omega").value.split(",");
  let secoundInput=document.getElementById("first").value.split(",");
  let thiredInput=document.getElementById("secound").value.split(",");
  answar.innerHTML=`A-B = {${getUniqueElements(secoundInput,thiredInput).sort()}}`
}
btnMa.onclick=function(){
  let firstInput=document.getElementById("omega").value.split(",");
  let secoundInput=document.getElementById("first").value.split(",");
  let thiredInput=document.getElementById("secound").value.split(",");
  answar.innerHTML=`A' = {${getUniqueElements(firstInput,secoundInput).sort()}}`
}
btnMb.onclick=function(){
  let firstInput=document.getElementById("omega").value.split(",");
  let secoundInput=document.getElementById("first").value.split(",");
  let thiredInput=document.getElementById("secound").value.split(",");
  answar.innerHTML=`B' = {${getUniqueElements(firstInput,thiredInput).sort()}}`
}

btnRestart.onclick=function(){
  location.reload();
}
