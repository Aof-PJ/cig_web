localStorage.getItem("domain") 
// console.log(domain)
PageData = localStorage.getItem("PageData")
listName = JSON.parse(localStorage.getItem("listName4"))
listAns = JSON.parse(localStorage.getItem("listAns4"))
// console.log(listName)
// console.log(listAns)
if(PageData < 5){
  window.location.href = `${domain}question-sec${PageData}.html`;
}

var brand = '00000000'
var otherBrand = '0'

Index = listName.indexOf("cigGen");
Gen = listAns[Index]
for(i=0; i<Gen.length; i++){
  if(Gen[i]=="1"){
    if(i==3){
      // listName.push("cigBrand"); listAns.push(brand)
      Index = listName.indexOf("cigBrand");
      listAns[Index] = brand
      // listName.push("otherBrand"); listAns.push(otherBrand)
      Index = listName.indexOf("otherBrand");
      listAns[Index] = otherBrand

      PageData = 5.3
      localStorage.setItem("PageData", PageData);
      localStorage.setItem("listName5", JSON.stringify(listName));
      localStorage.setItem("listAns5", JSON.stringify(listAns));
      window.location.href = domain+"question-sec5.3.html"
    }
  }
}

function ButtonNextQ() {
  var dataChecked = false
  var otherBrand = document.getElementById("otherBrand").value
  for(i=0; i<brand.length; i++){
    if(brand[i] == 1){
      if(i==7){
        if(otherBrand != ''){
          dataChecked = true
        }
      }else{
        otherBrand = '0'
        dataChecked = true
      }
    }
  }

  if(dataChecked){
    // console.log(brand, otherBrand)
    // listName.push("cigBrand"); listAns.push(brand)
    Index = listName.indexOf("cigBrand");
    listAns[Index] = brand
    // listName.push("otherBrand"); listAns.push(otherBrand)
    Index = listName.indexOf("otherBrand");
    listAns[Index] = otherBrand

    PageData = 5.1
    localStorage.setItem("PageData", PageData);
    localStorage.setItem("listName5", JSON.stringify(listName));
    localStorage.setItem("listAns5", JSON.stringify(listAns));
    window.location.href = domain+"question-sec5.1.html"
  }else{
    Swal.fire({
      title: 'กรุณาตอบคำถามให้ครบถ้วน',
      icon: 'error'
    });
  }
}

function showOtherBrand() {
  brand = ''
  otherBrand = '0'
  var otherBrand = document.getElementById("otherBrand");
  var cigBrand = document.getElementsByName("cigBrand")
  otherBrand.disabled = true; otherBrand.value = ""; 
  for(i=0; i<cigBrand.length; i++){
    if(cigBrand[i].checked){
      brand += 1
      if(i==7){
        otherBrand.disabled = false
      }
    }else{
      brand += 0
    }
  }
  // console.log(brand)
}