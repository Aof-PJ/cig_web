localStorage.getItem("domain") 
// console.log(domain)
PageData = localStorage.getItem("PageData")
listName = JSON.parse(localStorage.getItem("listName4"))
listAns = JSON.parse(localStorage.getItem("listAns4"))
// console.log(listName)
// console.log(listAns)
if(PageData < 4.5){
  window.location.href = `${domain}question-sec${PageData}.html`;
}

function ButtonNextQ() {
  var q1Check = false ; var ans1 = ''
  var q2Check = false ; var ans2 = ''
  var q3Check = false ; var ans3 = ''
  var q4Check = false ; var ans4 = ''
  var q5Check = false ; var ans5 = ''
  var q6Check = false ; var ans6 = ''

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

  if(q1Check && q2Check && q3Check && q4Check && q5Check && q6Check){
    Index = listName.indexOf("IQ1");
    listAns[Index] = ans1
    Index = listName.indexOf("IQ2");
    listAns[Index] = ans2
    Index = listName.indexOf("IQ3");
    listAns[Index] = ans3
    Index = listName.indexOf("IQ4");
    listAns[Index] = ans4
    Index = listName.indexOf("IQ5");
    listAns[Index] = ans5
    Index = listName.indexOf("IQ6");
    listAns[Index] = ans6

    Index = listName.indexOf("Calcutale");
    listAns[Index] = "iqos"


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