localStorage.getItem("domain") 
// console.log(domain)
PageData = localStorage.getItem("PageData")
listName = JSON.parse(localStorage.getItem("listName3"))
listAns = JSON.parse(localStorage.getItem("listAns3"))
console.log(listName)
console.log(listAns)
if(PageData < 4){
  window.location.href = `${domain}question-sec${PageData}.html`;
}

var gen = '00000'
var otherGen = ''
var pageway

function ButtonNextQ() {
  var dataChecked = false
  var otherGen = document.getElementById("otherGen").value
  for(i=0; i<gen.length; i++){
    if(gen[i] == "1"){
      pageway = i
      if(i == 4){ // Other
        if(otherGen != ''){
          dataChecked = true
        }
      }else{
        dataChecked = true
        otherGen = '0'
      }
    }
  }
  if(dataChecked){
    // console.log(gen, otherGen)
    // listName.push("cigGen"); listAns.push(gen)
    Index = listName.indexOf("cigGen");
    listAns[Index] = gen
    // listName.push("otherGen"); listAns.push(otherGen)
    Index = listName.indexOf("otherGen");
    listAns[Index] = otherGen

    PageData = 4.5
    localStorage.setItem("PageData", PageData);
    localStorage.setItem("listName4", JSON.stringify(listName));
    localStorage.setItem("listAns4", JSON.stringify(listAns));
    if(pageway == 0){
      window.location.href = domain+"cigType/disposable.html"
    }else if(pageway == 1){
      window.location.href = domain+"cigType/mods_brand.html"
    }else if(pageway == 2){
      window.location.href = domain+"cigType/pods_brand.html"
    }else if(pageway == 3){
      window.location.href = domain+"cigType/iqos.html"
    }else if(pageway == 4){
      window.location.href = domain+"cigType/other.html"
    }
    // window.location.href = domain+"question-sec5.html"
  }else{
    Swal.fire({
      title: 'กรุณาตอบคำถามให้ครบถ้วน',
      icon: 'error'
    });
  }
}

function showOtherGen() {
  gen = ''
  var genChecked = document.getElementsByName("cigGen");
  var otherGen = document.getElementById("otherGen");
  otherGen.disabled = true; otherGen.value = ''
  for(i=0; i<genChecked.length; i++){
    if(genChecked[i].checked){
      gen += 1
      if(i==4){
        otherGen.disabled = false
      }
    }else{
      gen += 0
    }
  }
  // console.log("gen",gen)
}