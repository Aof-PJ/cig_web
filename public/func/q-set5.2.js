localStorage.getItem("domain") 
// console.log(domain)
PageData = localStorage.getItem("PageData")
listName = JSON.parse(localStorage.getItem("listName5.1"))
listAns = JSON.parse(localStorage.getItem("listAns5.1"))
// console.log(listName)
// console.log(listAns)
if(PageData < 5.2){
  window.location.href = `${domain}question-sec${PageData}.html`;
}

function ButtonNextQ() {
  var q1Check = false ; var ans1 = ''
  var q2Check = false ; var ans2 = ''
  var q3Check = false ; var ans3 = ''
  var q4Check = false ; var ans4 = ''
  var q5Check = false ; var ans5 = ''
  var q6Check = false ; var ans6_1 = ''; var ans6_2 = ''; var ans6_3 = ''; calN6 = '0'
  var q7Check = false ; var ans7 = ''
  var q8Check = false ; var ans8 = ''
  
  q1s = document.getElementsByName("q1") // q1 Question
  for(q1 of q1s){
    if(q1.checked){
      ans1 = q1.value
      q1Check = true
    }
  }
  q2s = document.getElementsByName("q2") // q2 Question
  for(q2 of q2s){
    if(q2.checked){
      ans2 = q2.value
      q2Check = true
    }
  }
  q3s = document.getElementsByName("q3") // q3 Question
  for(q3 of q3s){
    if(q3.checked){
      ans3 = q3.value
      q3Check = true
    }
  }
  q4s = document.getElementsByName("q4") // q4 Question
  for(q4 of q4s){
    if(q4.checked){
      ans4 = q4.value
      q4Check = true
    }
  }
  q5s = document.getElementsByName("q5") // q5 Question
  for(q5 of q5s){
    if(q5.checked){
      ans5 = q5.value
      q5Check = true
    }
  }
  q6s = document.getElementsByName("q6") // q6 Question
  for(q6 of q6s){
    if(q6.checked){
      if(q6.value == 3){
        other = document.getElementById("otherQ6.1").value
        if(other != ""){
          nicotine = Number(listAns[listName.indexOf("nicotine")]);
          q6Check = true
          ans6_1 = other; ans6_2 = "0"; ans6_3 = "0"

          cigGen = listAns[listName.indexOf("cigGen")][0]
          if(cigGen == "1"){
            puff = Number(listAns[listName.indexOf("puff")]);
            calN6 = ((nicotine * 10) * (puff/200)) * (other / 7) //puff
          }else{
            ml = Number(listAns[listName.indexOf("cartridge")]);
            calN6 = ((nicotine * 10) * ml) * (other / 7)
          }
        }
      }else if(q6.value == 2){
        other = document.getElementById("otherQ6.2").value
        if(other != ""){
          nicotine = Number(listAns[listName.indexOf("nicotine")]);
          q6Check = true
          ans6_1 = "0"; ans6_2 = other; ans6_3 = "0"

          cigGen = listAns[listName.indexOf("cigGen")][0]
          if(cigGen == "1"){
            puff = Number(listAns[listName.indexOf("puff")]);
            calN6 = ((nicotine * 10) * (puff/200)) * (other / 30) //puff
          }else{
            ml = Number(listAns[listName.indexOf("cartridge")]);
            calN6 = ((nicotine * 10) * ml) * (other / 30)
          }
        }
      }else{
        q6Check = true
        ans6_1 = "0"; ans6_2 = "0"; ans6_3 = ">1mo"
        calN6 = "0"
      }
    }
  }
  q7s = document.getElementsByName("q7") // q7 Question
  for(q7 of q7s){
    if(q7.checked){
      ans7 = q7.value
      q7Check = true
    }
  }
  q8s = document.getElementsByName("q8") // q8 Question
  for(q8 of q8s){
    if(q8.checked){
      ans8 = q8.value
      q8Check = true
    }
  }

  if(q1Check && q2Check && q3Check && q4Check && q5Check && q6Check && q7Check && q8Check){
    Index = listName.indexOf("N1");
    listAns[Index] = ans1
    Index = listName.indexOf("N2");
    listAns[Index] = ans2
    Index = listName.indexOf("N3");
    listAns[Index] = ans3
    Index = listName.indexOf("N4");
    listAns[Index] = ans4
    Index = listName.indexOf("N5");
    listAns[Index] = ans5
    Index = listName.indexOf("N6_1");
    listAns[Index] = ans6_1
    Index = listName.indexOf("N6_2");
    listAns[Index] = ans6_2
    Index = listName.indexOf("N6_3");
    listAns[Index] = ans6_3
    Index = listName.indexOf("calN6");
    listAns[Index] = calN6.toString()
    Index = listName.indexOf("N7");
    listAns[Index] = ans7
    Index = listName.indexOf("N8");
    listAns[Index] = ans8
    PageData = 6
    localStorage.setItem("PageData", PageData);
    localStorage.setItem("listName5", JSON.stringify(listName));
    localStorage.setItem("listAns5", JSON.stringify(listAns));
    window.location.href = domain+"question-sec6.html"
  }else{
    Swal.fire({
      title: 'กรุณาตอบคำถามให้ครบถ้วน',
      icon: 'error'
    });
  }
}

const inputQ6 = document.querySelectorAll('input[name="q6"]')
//inputQ6.addEventListener('change', q6Change);
for(const radioButton of inputQ6){
  radioButton.addEventListener('change', q6Change);
}
function q6Change(e){
  inp1 = document.getElementById("otherQ6.1")
  inp2 = document.getElementById("otherQ6.2")
  if(this.checked){
    if(this.value == 3){
      // console.log(inp1.disabled)
      inp1.disabled = false
      inp2.disabled = true
      inp2.value = ""
    }else if(this.value == 2){
      // console.log(inp2.disabled)
      inp1.disabled = true
      inp2.disabled = false
      inp1.value = ""
    }else{
      inp1.disabled = true
      inp2.disabled = true
      inp1.value = ""
      inp2.value = ""
    }
  }
}