localStorage.getItem("domain") 
// console.log(domain)
PageData = localStorage.getItem("PageData")
listName = JSON.parse(localStorage.getItem("listName1"))
listAns = JSON.parse(localStorage.getItem("listAns1"))
// console.log(listName)
// console.log(listAns)
if(PageData < 2){
  window.location.href = `${domain}question-sec${PageData}.html`;
}

function ButtonNextQ() {
  var tel = ''
  number = document.getElementById('number').value
  if(number != ""){
    // if((!isNaN(+number) && number.length==10) || (number == "-")){
    //   if(number != "-"){
    //     for(i=0; i<10; i++){
    //       tel += number[i]
    //       if(i==2 || i==5){
    //         tel += '-'
    //       }
    //     }
    //   }else{
    //     tel = "-"
    //   }
    if(!isNaN(+number)){
      tel = "'" + number;
    }else{
      tel = number;
    }
    console.log(tel)
    PageData = 3
    Index = listName.indexOf("number");
    listAns[Index] = tel
    localStorage.setItem("PageData", PageData);
    localStorage.setItem("listName2", JSON.stringify(listName));
    localStorage.setItem("listAns2", JSON.stringify(listAns));
    window.location.href = domain+"question-sec3.1.html"
  }else{
    Swal.fire(
      'กรุณากรอกเบอร์โทรศัพท์',
      'หากไม่ประสงค์จะกรอก ให้ใส่ "-"',
      'error'
    )
  }
}