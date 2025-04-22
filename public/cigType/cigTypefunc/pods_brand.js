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
    var ans = ""; check = false
    var ansOther = ""

    Ans = document.getElementsByName("cigBrand")
    for(a of Ans){
        if(a.checked){
            if(a.title == "อื่นๆ"){
                ansOther = document.getElementById("otherBrand").value
                if(ansOther != ""){
                    check = true
                }
            }else{
                check = true
                ansOther = "0"
            }
            ans = a.value
        }
    }

    if(check){
        // console.log(ans, ansOther)

        Index = listName.indexOf("PodsBrand");
        listAns[Index] = ans
        Index = listName.indexOf("PodsOther");
        listAns[Index] = ansOther

        PageData = 4.75
        localStorage.setItem("PageData", PageData);
        localStorage.setItem("listName4.5", JSON.stringify(listName));
        localStorage.setItem("listAns4.5", JSON.stringify(listAns));
        window.location.href = domain+"cigType/pods_l.html"
    }else{
        Swal.fire({
            title: 'กรุณาตอบคำถามให้ครบถ้วน',
            icon: 'error'
          });
    }
}