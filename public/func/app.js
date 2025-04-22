localStorage.getItem("domain")
function ButtonQ() {
  Swal.fire({
    title: 'แบบสอบถามนี้มีการถามถึงข้อมูลส่วนบุคคล',
    text: 'การที่ท่านทำแบบสอบถามนี้ถือว่าท่านได้ยินยอมให้ข้อมูลแล้ว',
    showCancelButton: true,
    confirmButtonText: 'OK',
  }).then((result) => {
    if (result.isConfirmed) {
      window.location.href = domain+"question-sec1.html";
    }
  })
}