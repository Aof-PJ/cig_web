localStorage.getItem("domain") 
// console.log(domain)
PageData = localStorage.getItem("PageData")
listName = JSON.parse(localStorage.getItem("listName5"))
listAns = JSON.parse(localStorage.getItem("listAns5"))
// console.log(listName)
// console.log(listAns)
if(PageData < 5.1){
  window.location.href = `${domain}question-sec${PageData}.html`;
}

cigGen = listAns[listName.indexOf("cigGen")][0]
if(cigGen == "1"){  
  document.getElementById("cartridgeQ").style.display = "none";
}else{
  document.getElementById("puffQ").style.display = "none";
}

function ButtonNextQ() {
  var q1Check = false
  var q2Check = false
  var q3Check = false
  var ans1 = '0'
  var ans2 = '0'
  var ans3 = '0'
  
  nicotines = document.getElementsByName("nicotine") // nicotine Question
  for(nicotine of nicotines){
    if(nicotine.checked){
      if(nicotine.value == "other"){
        other = document.getElementById("other1").value
        if(other != ""){
          q1Check = true
          ans1 = other
        }
      }else{
        q1Check = true
        ans1 = nicotine.value
      }
    }
  }

  cigGen = listAns[listName.indexOf("cigGen")][0]
  if(cigGen == "1"){  
    puffs = document.getElementsByName("puff") // puff Question
    for(puff of puffs){
      if(puff.checked){
        if(puff.value == "other"){
          other = document.getElementById("other3").value
          if(other != ""){
            q3Check = true
            ans3 = other
          }
        }else{
          q3Check = true
          ans3 = puff.value
        }
      }
    }
  }else{
    cartridges = document.getElementsByName("cartridge") // cartridge Question
    for(cartridge of cartridges){
      if(cartridge.checked){
        if(cartridge.value == "other"){
          other = document.getElementById("other2").value
          if(other != ""){
            q2Check = true
            ans2 = other
          }
        }else{
          q2Check = true
          ans2 = cartridge.value
        }
      }
    }
  }

  if(q1Check && (q2Check || q3Check)){
    //console.log(ans1, ans2)
    Index = listName.indexOf("nicotine");
    listAns[Index] = ans1
    Index = listName.indexOf("cartridge");
    listAns[Index] = ans2
    Index = listName.indexOf("puff");
    listAns[Index] = ans3

    PageData = 5.2
    localStorage.setItem("PageData", PageData);
    localStorage.setItem("listName5.1", JSON.stringify(listName));
    localStorage.setItem("listAns5.1", JSON.stringify(listAns));
    window.location.href = domain+"question-sec5.2.html"
  }else{
    Swal.fire({
      title: 'กรุณาตอบคำถามให้ครบถ้วน',
      icon: 'error'
    });
  }
}

const other1 = document.querySelectorAll('input[name="nicotine"]')
for(const radioButton of other1){
  radioButton.addEventListener('change', otherChange1);
}
function otherChange1(e){
  inpOther = document.getElementById("other1")
  if(this.checked){
    if(this.value == 'other'){
      inpOther.disabled = false
    }else{
      inpOther.disabled = true
      inpOther.value = ""
    }
  }
}

const other2 = document.querySelectorAll('input[name="cartridge"]')
for(const radioButton of other2){
  radioButton.addEventListener('change', otherChange2);
}
function otherChange2(e){
  inpOther = document.getElementById("other2")
  if(this.checked){
    if(this.value == 'other'){
      inpOther.disabled = false
    }else{
      inpOther.disabled = true
      inpOther.value = ""
    }
  }
}

const other3 = document.querySelectorAll('input[name="puff"]')
for(const radioButton of other3){
  radioButton.addEventListener('change', otherChange3);
}
function otherChange3(e){
  inpOther = document.getElementById("other3")
  if(this.checked){
    if(this.value == 'other'){
      inpOther.disabled = false
    }else{
      inpOther.disabled = true
      inpOther.value = ""
    }
  }
}