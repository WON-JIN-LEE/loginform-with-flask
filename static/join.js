$(document).ready(function () {
    loginValidation() ;
});





function postJoin() {
    let id = $("#id-input").val();
    let pw = $("#pw-input").val();

       $.ajax({
        type: "post",
        url: "/join",
        data: {id_give: id , pw_give: pw },
        success: function (response) {
            alert(response['msg']);
            location ='/';
            }
    });
}



//join 유효성 검사
function loginValidation() {
  'use strict'

  // Fetch all the forms we want to apply custom Bootstrap validation styles to
  var forms = document.querySelectorAll('.needs-validation')
  // Loop over them and prevent submission
  Array.prototype.slice.call(forms)
      .forEach(function (form) {
        form.addEventListener('submit', function (event) {
          if (!form.checkValidity()) {
            event.preventDefault();
            event.stopPropagation();
          }

          form.classList.add('was-validated');
        }, false)
      })
}