localStorage.getItem("domain") 
// console.log(domain)
PageData = localStorage.getItem("PageData")
listName = JSON.parse(localStorage.getItem("listName2"))
listAns = JSON.parse(localStorage.getItem("listAns2"))
// console.log(listName)
// console.log(listAns)
if(PageData < 3){
  window.location.href = `${domain}question-sec${PageData}.html`;
}
// console.log(listName, listAns)

function ButtonNextQ() {
  var q1Check = false ; var age = ''; var gender = ''
  var q2Check = false ; var region = ''
  var q3Check = false ; var religion = ''; var other_religion = ''
  var q4Check = false ; var St = ''; var other_status = ''
  var q5Check = false ; var education = ''; var other_education = ''
  var q6Check = false ; var other_health = ''; var classes = '';
  var q7Check = false ; var career = ''
  var q8Check = false ; var income = ''
  var q9Check = false ; var disease = ''; var other_disease = ''
  
  questions = document.getElementsByName("gender")
  Age = document.getElementById('age')
  for(question of questions){
    if(question.checked && Age.value != ""){
      gender = question.value
      age = Age.value
      q1Check = true
    }
  }
  questions = document.getElementsByName("region")
  for(question of questions){
    if(question.checked){
      region = question.value
      q2Check = true
    }
  }

  questions = document.getElementsByName("religion")
  other_religion = document.getElementById('other_religion').value
  for(question of questions){
    if(question.checked){
      if(question.value == "other" && other_religion != ""){
        religion = other_religion
        q3Check = true
      }else if(question.value != "other"){
        religion = question.value
        q3Check = true
      }
    }
  }

  questions = document.getElementsByName("status")
  other_status = document.getElementById('other_status').value
  for(question of questions){
    if(question.checked){
      if(question.value == "other" && other_status != ""){
        St = other_status
        q4Check = true
      }else if(question.value != "other"){
        St = question.value
        q4Check = true
      }
    }
  }

  questions = document.getElementsByName("education")
  other_education = document.getElementById('other_education').value
  for(question of questions){
    if(question.checked){
      if(question.value == "other" && other_education != ""){
        education = other_education
        q5Check = true
      }else if(question.value != "other"){
        education = question.value
        q5Check = true
      }
    }
  }

  questions = document.getElementsByName("isHealth")
  Other_health = document.getElementById('other_health').value
  classes = document.getElementById('classes').value
  for(question of questions){
    if(question.checked){
      if(question.value == "0"){ // no
        other_health = question.value
        classes = "0"
        q6Check = true
      }else{ // yes
        if(classes != ""){
          healths = document.getElementsByName("other_health")
          for(health of healths){
            if(health.checked){
              if(health.value != "other"){
                other_health = health.value
                q6Check = true
              }else{
                if(Other_health != ""){
                  other_health = Other_health
                  q6Check = true
                }else{
                  q6Check = false
                }
              }
            }
          }
        }
      }
    }
  }

  questions = document.getElementsByName("career")
  for(question of questions){
    if(question.checked){
      career = question.value
      q7Check = true
    }
  }
  questions = document.getElementsByName("income")
  for(question of questions){
    if(question.checked){
      income = question.value
      q8Check = true
    }
  }
  questions = document.getElementsByName("disease")
  other_disease = document.getElementById('other_disease').value
  for(question of questions){
    if(question.checked){
      if(question.value == "other" && other_disease != ""){
        disease = other_disease
        q9Check = true
      }else if(question.value != "other"){
        disease = question.value
        q9Check = true
      }
    }
  }

  console.log(q1Check, q2Check, q3Check, q4Check, q5Check, q6Check, q7Check, q8Check, q9Check)
  if(q1Check && q2Check && q3Check && q4Check && q5Check && q6Check && q7Check && q8Check && q9Check){
    Index = listName.indexOf("age");
    listAns[Index] = age
    Index = listName.indexOf("gender");
    listAns[Index] = gender
    Index = listName.indexOf("religion");
    listAns[Index] = religion
    Index = listName.indexOf("status");
    listAns[Index] = St
    Index = listName.indexOf("region");
    listAns[Index] = region
    Index = listName.indexOf("education");
    listAns[Index] = education
    Index = listName.indexOf("faculty");
    listAns[Index] = other_health
    Index = listName.indexOf("classes");
    listAns[Index] = classes
    Index = listName.indexOf("career");
    listAns[Index] = career
    Index = listName.indexOf("income");
    listAns[Index] = income
    Index = listName.indexOf("disease");
    listAns[Index] = disease
    localStorage.setItem("listName3", JSON.stringify(listName));
    localStorage.setItem("listAns3", JSON.stringify(listAns));
    localStorage.setItem("age", JSON.stringify(Number(age)));
    window.location.href =  domain+"question-sec3.2.html";
  }else{
    Swal.fire({
      title: 'กรุณาตอบคำถามให้ครบถ้วน',
      icon: 'error'
    });
  }
}