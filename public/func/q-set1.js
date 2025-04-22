localStorage.getItem("domain")
// console.log(domain)
var listAns = ["-", "-",
                "-", "0", "-", 
                "-", "-", "-", "-", "-", "-", "-", "-", "-",
                "0", "000000", 
                "-", "-", "-", "-", "---", "-", "-",

                "0000", "0", 
                "0000000", "0", // disposable
                "0000", "0", // brand mods
                "000000", "0", // brand pods
                "0000000", "0", // liquid mods
                "00000", "0", // liquid pods
                "0", // liquid other
                "0", "0", "0", "0", "0",// "%nicotine", "volume", puff, duration, amount
                "0", // Calculate
                "0", "0", "0", "0", // nicotine(Fager)
                "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", // penn
                "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0",// Addict
                // "0", "0", "0", "0", "0", "0", "0", "0", // iqos
                "0000", "000000000", "000000", "000", 
                "000000000", "00", "000000000", "000000", 
                "000000000", "00", "0000"]
                
var listName = ["date", "cig_3m",
                "number", "age", "gender", 
                "region", "religion", "status", "education", "faculty", "classes", "career", "income", "disease",
                "age_first", "cigType", 
                "who", "why", "when", "price", "substances", "substance_etc", "other_drug",

                "cigGen", "otherGen", 
                "disBrand", "disOther", // disposable
                "ModsBrand", "ModsOther", // brand mods
                "PodsBrand", "PodsOther", // brand pods
                "ModsLiquid", "ModsLiquid_other", // liquid mods
                "PodsLiquid", "PodsLiquid_other", // liquid pods
                "OtherLiquid", // liquid other
                "nicotine", "volume", "puff", "duration", "amount", // "%nicotine", "volume", puff, duration
                "Calculate", // Calculate
                "Fager1", "Fager2", "Fager3", "Fager4", // nicotine(Fager)
                "penn1", "penn2", "penn3", "penn4", "penn5", "penn6", "penn7", "penn8", "penn9", "penn10",// penn
                "Addict1", "Addict2", "Addict3", "Addict4", "Addict5", "Addict6", "Addict7", "Addict8", "Addict9", "Addict10", "Addict11",// Addict
                // "IQ1", "IQ2", "IQ3", "IQ4", "IQ5", "IQ6", // iqos
                "Q1", "Q2", "Q3", "Q4", 
                "Q5", "Q6", "Q7", "Q8", 
                "Q9", "Q10", "Q11"]
var PageData = 1
var link = "" 

function ButtonNextQ(choices) {
  button = document.getElementById("button");
  choices = document.getElementsByName('cig_3m')
  if (choices[1].checked){ // no = 0
    fet(choices[1].value)
    link = domain+"q1Response.html"
  }else if(choices[0].checked){ // yes = 1
    link = domain+"question-sec2.html"
    fet(choices[0].value)
  }else{
    document.getElementById("alert")
    .innerHTML = `<div style="color: red;">
                    <h4>***กรุณากรอกข้อมูล***</h4>
                  </div>`;
    Swal.fire({
      title: 'กรุณาตอบคำถามให้ครบถ้วน',
      icon: 'error'
    })
  }
}

function fet(cig_3m){
  button.disabled = !button.disabled     
  var form = new FormData(document.querySelector("form"));
  var currentdate = new Date(); 
  var datetime = currentdate.getDate() + "/"
                + (currentdate.getMonth()+1)  + "/" 
                + currentdate.getFullYear() + " @ "  
                + currentdate.getHours() + ":"  
                + currentdate.getMinutes() + ":" 
                + currentdate.getSeconds();
  form.append("PageData", 1);

  Index = listName.indexOf("date");
  listAns[Index] = datetime
  Index = listName.indexOf("cig_3m");
  listAns[Index] = cig_3m
  for(j=0; j<listName.length; j++){
    form.append(listName[j], listAns[j]);
  }
  if(cig_3m == 0){
    // console.log(listName, listAns)
    fetch(url_fetchDB, {
      mode: 'no-cors',
      method: "POST",
      body: form
    })
    .then(res => window.location.href = link)
  }else{
    PageData = 2
    localStorage.setItem("PageData", PageData);
    localStorage.setItem("listName1", JSON.stringify(listName));
    localStorage.setItem("listAns1", JSON.stringify(listAns));
    // console.log(listAns, listName)
    window.location.href = link
  }
}