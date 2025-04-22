localStorage.getItem("domain") 

function ButtonNextQ(fileName) {
  button = document.getElementById("button");
  ansLst = []; qMiss = "";
  let allQChecker = 0
  for(k = 0; k<qName.length; k++){
    mainQ = SQ+k;
    AnsPerQ = '';
    let qChecker = 0
    for(i = 0; i<qName[k].length; i++){
      subQ = i+1
      choices = document.getElementsByName(`q${mainQ}_${subQ}`)
      var choiceCheck = 0
      var isAnswered = false
      choices.forEach(choice => {
        choiceCheck += 1
        if(choice.checked){
          qChecker += 1
          AnsPerQ += choice.value
          isAnswered = true
          // console.log(`q${mainQ}_${subQ} : ${choice.value}`) GET ANSWER HERE
        }else if(choiceCheck == 5 && !isAnswered){
          AnsPerQ += 0
        }
      })
    }
    // console.log(AnsPerQ)

    if(qChecker < subQ){
      document.getElementById(`alert${mainQ}`)
      .innerHTML = `<div style="color: red;">
                <h4>***กรุณากรอกข้อมูล***</h4>
              </div>`;
      if(qMiss.length == 0){
        qMiss += `${mainQ}`
      }else{
        qMiss += `, ${mainQ}`
      }
    }else{
      allQChecker += 1
      document.getElementById(`alert${mainQ}`)
      .innerHTML = ``
    }
    if(k+1 == qName.length && allQChecker != qName.length){
      Swal.fire(
        'กรุณาตอบให้ครบถ้วน',
        `ท่านยังตอบข้อที่ ${qMiss} ไม่ครบ`,
        'error'
      )
    }
    // listName.push(`Q${mainQ}`); listAns.push(AnsPerQ)
    Index = listName.indexOf(`Q${mainQ}`);
    listAns[Index] = AnsPerQ

  }
  
  if(allQChecker == qName.length){
    if(document.getElementsByClassName("buttonQ")[0].value == "submit"){
      button.disabled = !button.disabled     
      form = new FormData();
      form.append("PageData", page);
      for(j=0; j<listName.length; j++){
        form.append(listName[j], listAns[j]);
      }
      fetch(url_fetchDB, {
        mode: 'no-cors',
        method: "POST",
        body: form
      })
      .then(res => {
        PageData = 1
        localStorage.setItem("PageData", PageData);
        localStorage.setItem(`listName${page}`, JSON.stringify(listName));
        localStorage.setItem(`listAns${page}`, JSON.stringify(listAns));
        window.location.href = `${domain}${fileName}`
      })
    }else{
      PageData = page + 1
      localStorage.setItem("PageData", PageData);
      localStorage.setItem(`listName${page}`, JSON.stringify(listName));
      localStorage.setItem(`listAns${page}`, JSON.stringify(listAns));
      window.location.href = `${domain}${fileName}`;
    }
  }
}

const url = 'https://docs.google.com/spreadsheets/d/1dBmRhYzCj6MQv4k30yIFS2zXFbPnKYJilfIgxYAO47E/gviz/tq?'
var Row = ''
// var startQ = 1
// var endQ = 2
var qName = []
var SQ, EQ = ''

async function getapi(startQ, endQ) {
  SQ = startQ
  EQ = endQ
  // Fetch the data from the sheet
  fetch(url)
  .then(response => response.text())
  .then(rep => {
    const data = JSON.parse(rep.substring(47).slice(0,-2));
    // Row = data.table.rows
    for(n = startQ-1; n<endQ ;n++){
      Row = data.table.rows[n].c.map(cell => cell && cell.v ? cell.v : '');
      //console.log(Row)
      show(Row, n+1)
    }
    //console.log(qName)
  });
}
// getapi(startQ, endQ)

var tab = ''
function show(Head, num) {
  window["Q"+num] = [];
  qName.push(window["Q"+num]);
  var col = 1;
  tab += 
      `<table style="width:95%";>
      <tr>
        <th style="width:8%;">ข้อ</th>
        <th>คำถาม</th>
        <th style="width:10%;">เห็นด้วยอย่างยิ่ง</th>
        <th style="width:10%;">เห็นด้วย</th>
        <th style="width:10%;">ไม่แน่ใจ</th>
        <th style="width:10%;">ไม่เห็นด้วย</th>
        <th style="width:10%;">ไม่เห็นด้วยอย่างยิ่ง</th>
       </tr>
       <tr>
        <th id="alert${num}"></th>
        <th>${Head[0]}</th>
        <th></th>
        <th></th>
        <th></th>
        <th></th>
        <th></th>
       </tr>`;
  
  // Loop to access all rows 
  // for (let r of data.list) {
  for(i = 1; i<Head.length; i++){
      if(Head[i] != ''){
        tab += `
        <tr> 
          <th>${col}</th>
          <td>${Head[i]}</td>
          <th><input type="radio" name="q${num}_${col}" value="5"></th>
          <th><input type="radio" name="q${num}_${col}" value="4"></th>
          <th><input type="radio" name="q${num}_${col}" value="3"></th>
          <th><input type="radio" name="q${num}_${col}" value="2"></th>
          <th><input type="radio" name="q${num}_${col}" value="1"></th>
        </tr>`;
        window["Q"+num].push(`q${num}_${col}`);
        col += 1;
      }
  }
  tab += `</table><div style="margin: 3%;"></div>`
  // Setting innerHTML as tab variable
  document.getElementById("tableQ").innerHTML = tab;
}

// window.addEventListener('beforeunload', function (e) {
//   var confirmationMessage = 'คุณแน่ใจหรือว่าต้องการออกจากหน้าเว็บนี้?';

//   e.preventDefault();
//   e.returnValue = confirmationMessage;

//   if (e.defaultPrevented) {
//       // เพิ่มข้อความใน popup เมื่อเหตุการณ์ถูกยกเลิก
//       setTimeout(function() {
//           alert('ขอบคุณสำหรับการเยี่ยมชมเว็บไซต์ของเรา');
//       }, 0);
//   }

//   return confirmationMessage;
// });