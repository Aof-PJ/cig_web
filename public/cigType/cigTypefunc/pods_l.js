localStorage.getItem("domain") 
// console.log(domain)
PageData = localStorage.getItem("PageData")
listName = JSON.parse(localStorage.getItem("listName4.5"))
listAns = JSON.parse(localStorage.getItem("listAns4.5"))
// console.log(listName)
// console.log(listAns)
if(PageData < 4.75){
  window.location.href = `${domain}question-sec${PageData}.html`;
}

function ButtonNextQ() {
    var ans1 = ""; check1 = false
    var ansOther = ""
    var ans2 = ""; check2 = false
    var nicotine = "", puff = ""

    Ans = document.getElementsByName("Pods_B")
    for(ans of Ans){
        if(ans.checked){
            if(ans.value == "อื่นๆ"){
                ansOther = document.getElementById("otherPods").value
                if(ansOther != ""){
                    check1 = checkOther()
                    nicotine = document.getElementById("nicotine").value
                    puff = document.getElementById("puff").value
                }
            }else{
                check1 = true
                nicotine = ans.value.split(", ")[0]
                puff = ans.value.split(", ")[1]
            }
            ans1 = ans.title
        }
    }

    Ans = document.getElementsByName("Pods_f")
    freq = document.getElementById("freq").value
    for(ans of Ans){
        if(ans.checked && freq!=""){
            check2 = true
            ans2 = ans.value
        }
    }

    // console.log(check1, check2)
    if(check1 && check2){
        // console.log(ans1, ansOther, ans2)
        // console.log(puff, nicotine)

        Index = listName.indexOf("PodsLiquid");
        listAns[Index] = ans1
        Index = listName.indexOf("PodsLiquid_other");
        listAns[Index] = ansOther
        
        Index = listName.indexOf("volume");
        listAns[Index] = puff
        Index = listName.indexOf("nicotine");
        listAns[Index] = nicotine
        Index = listName.indexOf("duration");
        if(ans2 == 0){
            listAns[Index] = ">1mo"
        }else{
            listAns[Index] = ans2
        }
        Index = listName.indexOf("amount");
        listAns[Index] = freq

        Index = listName.indexOf("Calculate");
        if(ans2 != 0){
            listAns[Index] = (puff / ans2) * (nicotine * 10) * freq
        }else{
            listAns[Index] = "<10"
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

function checkOther() {
    q1 = document.getElementById("puff").value
    q2 = document.getElementById("nicotine").value
    
    if(q1 != "" && q2 != ""){
        return true
    }else{
        return false
    }
}