localStorage.getItem("domain") 
// console.log(domain)
PageData = localStorage.getItem("PageData")
listName = JSON.parse(localStorage.getItem("listName4.9"))
listAns = JSON.parse(localStorage.getItem("listAns4.9"))
console.log(listName)
console.log(listAns)

function ButtonNextQ() {
  var q1Check = false ; var ans1 = ''
  var q2Check = false ; var ans2 = ''
  var q3Check = false ; var ans3 = ''
  var q4Check = false ; var ans4 = ''
  var q5Check = false ; var ans5 = ''
  var q6Check = false ; var ans6 = ''
  var q7Check = false ; var ans7 = ''
  var q8Check = false ; var ans8 = ''
  var q9Check = false ; var ans9 = ''
  var q10Check = false ; var ans10 = ''
  var q11Check = false ; var ans11 = ''
  
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
      ans6 = q6.value
      q6Check = true
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
  q9s = document.getElementsByName("q9") // q9 Question
  for(q9 of q9s){
    if(q9.checked){
      ans9 = q9.value
      q9Check = true
    }
  }
  q10s = document.getElementsByName("q10") // q10 Question
  for(q10 of q10s){
    if(q10.checked){
      ans10 = q10.value
      q10Check = true
    }
  }
  q11s = document.getElementsByName("q11") // q11 Question
  for(q11 of q11s){
    if(q11.checked){
      ans11 = q11.value
      q11Check = true
    }
  }

  if(q1Check && q2Check && q3Check && q4Check && q5Check && q6Check && q7Check && q8Check && q9Check && q10Check && q11Check){
    Index = listName.indexOf("Addict1");
    listAns[Index] = ans1
    Index = listName.indexOf("Addict2");
    listAns[Index] = ans2
    Index = listName.indexOf("Addict3");
    listAns[Index] = ans3
    Index = listName.indexOf("Addict4");
    listAns[Index] = ans4
    Index = listName.indexOf("Addict5");
    listAns[Index] = ans5
    Index = listName.indexOf("Addict6");
    listAns[Index] = ans6
    Index = listName.indexOf("Addict7");
    listAns[Index] = ans7
    Index = listName.indexOf("Addict8");
    listAns[Index] = ans8
    Index = listName.indexOf("Addict9");
    listAns[Index] = ans9
    Index = listName.indexOf("Addict10");
    listAns[Index] = ans10
    Index = listName.indexOf("Addict11");
    listAns[Index] = ans11

    // console.log(ans1, ans2, ans3, ans4, ans5, ans6, ans7, ans8, ans9, ans10, ans11)
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