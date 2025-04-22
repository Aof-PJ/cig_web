localStorage.getItem("domain") 
// console.log(domain)
PageData = localStorage.getItem("PageData")
listName = JSON.parse(localStorage.getItem("listName4"))
listAns = JSON.parse(localStorage.getItem("listAns4"))
console.log(listName)
console.log(listAns)
if(PageData < 4.5){
  window.location.href = `${domain}question-sec${PageData}.html`;
}

function ButtonNextQ() {
    var ans1 = ""; ansOther1 = ""; check1 = false
    var ans2 = ""; ansOther2 = ""; check2 = false
    var ans3 = ""; ansOther3 = ""; check3 = false
    var ans4 = ""; freq = ""; check4 = false
    

    Ans = document.getElementsByName("other1")
    for(ans of Ans){
        if(ans.checked){
            if(ans.value == "อื่นๆ"){
                ansOther = document.getElementById("other1").value
                if(ansOther != ""){
                    check1 = true
                    ans1 = ansOther
                }
            }else{
                check1 = true
                ans1 = ans.value
            }
        }
    }

    Ans = document.getElementsByName("other2")
    for(ans of Ans){
        if(ans.checked){
            if(ans.value == "อื่นๆ"){
                ansOther = document.getElementById("other2").value
                if(ansOther != ""){
                    check2 = true
                    ans2 = ansOther
                }
            }else{
                check2 = true
                ans2 = ans.value
            }
        }
    }

    Ans = document.getElementsByName("other3")
    for(ans of Ans){
        if(ans.checked){
            if(ans.value == "อื่นๆ"){
                ansOther = document.getElementById("other3").value
                if(ansOther != ""){
                    check3 = true
                    ans3 = ansOther
                }
            }else{
                check3 = true
                ans3 = ans.value
            }
        }
    }
    
    Ans = document.getElementsByName("other_f")
    freq = document.getElementById("freq").value
    for(ans of Ans){
        if(ans.checked){
            check4 = true
            ans4 = ans.value
        }
    }

    console.log(check1, check2, check3, check4)
    if(check1 && check2 && check3 && check4){
        console.log(ans1, ans2, ans3, ans4, freq)

        Index = listName.indexOf("OtherLiquid");
        listAns[Index] = ans1
        Index = listName.indexOf("volume");
        listAns[Index] = ans2
        Index = listName.indexOf("nicotine");
        listAns[Index] = ans3
        Index = listName.indexOf("duration");
        if(ans4 == 0){
            listAns[Index] = ">1mo"
        }else{
            listAns[Index] = ans4
        }
        Index = listName.indexOf("amount");
        listAns[Index] = freq

        Index = listName.indexOf("Calculate");
        if(ans2 == "null" || ans3 == "null"){
            listAns[Index] = "null"
        }else if(ans4 == 0){
            listAns[Index] = "<10"
        }else{
            listAns[Index] = (ans2 / ans4) * (ans3 * 10) * freq
        }

        PageData = 5
        localStorage.setItem("PageData", PageData);
        localStorage.setItem("listName4.75", JSON.stringify(listName));
        localStorage.setItem("listAns4.75", JSON.stringify(listAns));
        window.location.href = domain+"cigType/penn.html"
    }else{
        Swal.fire({
            title: 'กรุณาตอบคำถามให้ครบถ้วน',
            icon: 'error'
          });
    }
}