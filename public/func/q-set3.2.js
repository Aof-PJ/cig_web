localStorage.getItem("domain")
// console.log(domain)
PageData = localStorage.getItem("PageData")
listName = JSON.parse(localStorage.getItem("listName3"))
listAns = JSON.parse(localStorage.getItem("listAns3"))
age = JSON.parse(localStorage.getItem("age"));
console.log(listName)
console.log(listAns)
if(PageData < 3){
  window.location.href = `${domain}question-sec${PageData}.html`;
}
// console.log(listName, listAns)
function ButtonNextQ() {
  var q1Check = false ; var age_first = ''; var cigType = ''
  var q2Check = false ; var who = ''
  var q3Check = false ; var why = ''; var other_why = ''
  var q4Check = false ; var when = ''
  var q5Check = false ; var price = ''
  var q6Check = false ; var subs = ''
  var q6_otherCheck = false ; var other_sub = ''
  var q7Check = false ; var other_drug = ''
  
  questions = document.getElementsByName("cigType")
  Age_first = document.getElementById('age_first')
  for(question of questions){
    if(question.checked && Age_first.value != ""){
      cigType += "1"
      age_first = Age_first.value
      q1Check = true
    }else if(!question.checked && Age_first.value != ""){
      cigType += "0"
    }
  }
  questions = document.getElementsByName("who")
  for(question of questions){
    if(question.checked){
      who = question.value
      q2Check = true
    }
  }
  questions = document.getElementsByName("why")
  other_why = document.getElementById('other_why').value
  for(question of questions){
    if(question.checked){
      if(question.value == "other" && other_why != ""){
        why = other_why
        q3Check = true
      }else if(question.value != "other"){
        why = question.value
        q3Check = true
      }
    }
  }
  questions = document.getElementsByName("when")
  for(question of questions){
    if(question.checked){
      when = question.value
      q4Check = true
    }
  }
  question = document.getElementById("price")
  if(question.value != ""){
    price = question.value
    q5Check = true
  }

  questions = document.getElementsByName("q1")
  for(question of questions){
    if(question.checked){
      subs += question.value
    }
  }
  questions = document.getElementsByName("q2")
  for(question of questions){
    if(question.checked){
      subs += question.value
    }
  }
  questions = document.getElementsByName("q3")
  for(question of questions){
    if(question.checked){
      subs += question.value
    }
  }
  if(subs.length == 3){
    q6Check = true
  }
  
  questions = document.getElementsByName("q4")
  other_sub = document.getElementById("other_sub").value
  for(question of questions){
    if(question.checked){
      if(question.value == "0"){
        other_sub = question.value
        q6_otherCheck = true
      }else{
        if(other_sub != ""){
          q6_otherCheck = true
        }
      }
    }
  }

  questions = document.getElementsByName("isDrug")
  for(question of questions){
    if(question.checked){
      if(question.value == "0"){ // no
        other_drug = question.value
        q7Check = true
      }else{ // yes
        drugs = document.getElementsByName("other_drug")
        for(drug of drugs){
          if(drug.checked){
            other_drug += `, ${drug.value}`
            q7Check = true
          }
        }
      other_drug = other_drug.slice(2)
      }
    }
  }

  if(q1Check && q2Check && q3Check && q4Check && q5Check && q6Check && q6_otherCheck && q7Check){
    Index = listName.indexOf("age_first");
    listAns[Index] = age_first
    Index = listName.indexOf("cigType");
    listAns[Index] = cigType
    Index = listName.indexOf("who");
    listAns[Index] = who
    Index = listName.indexOf("why");
    listAns[Index] = why
    Index = listName.indexOf("when");
    listAns[Index] = when
    Index = listName.indexOf("price");
    listAns[Index] = price
    Index = listName.indexOf("substances");
    listAns[Index] = subs
    Index = listName.indexOf("substance_etc");
    listAns[Index] = other_sub
    Index = listName.indexOf("other_drug");
    listAns[Index] = other_drug
    console.log(other_drug)

    PageData = 4
    localStorage.setItem("PageData", PageData);
    localStorage.setItem("listName3", JSON.stringify(listName));
    localStorage.setItem("listAns3", JSON.stringify(listAns));
    window.location.href =  domain+"question-sec4.html";
  }else{
    Swal.fire({
      title: 'กรุณาตอบคำถามให้ครบถ้วน',
      icon: 'error'
    });
  }
}