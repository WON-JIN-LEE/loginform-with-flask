$(document).ready(function () {

});

function postJoin() {
    let id = $("#id-input").val();
    let pw = $("#pw-input").val();
    let pw2 = $("#pw2-input").val();

    loginValidation();
    if(id === '' || pw=== '' || pw2=== '' ){
          return alert("공백을 채워주세요.")
    }else if(pw !== pw2) {
        return alert("비밀번호가 다릅니다.")
    }

    $.ajax({
        type: "post",
        url: "/join",
        data: {id_give: id , pw_give: pw },
        success: function (response) {
            alert(response['msg']);
            window.location ='/';
        }
    });
}



//join 유효성 검사
function loginValidation() {
    'use strict'

    let pw = $("#pw-input").val();
    let pw2 = $("#pw2-input").val();

    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    var forms = document.querySelectorAll('.needs-validation')
    // Loop over them and prevent submission
    Array.prototype.slice.call(forms)
        .forEach(function (form) {
            form.addEventListener('submit', function (event) {
                if (!form.checkValidity()|| pw !== pw2) {
                    event.preventDefault();
                    event.stopPropagation();
                }
                 form.classList.add('was-validated');
            }, false)
        })
}