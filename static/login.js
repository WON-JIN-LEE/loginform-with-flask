$(document).ready(function () {
});
console.log(123)
//회원가입 클릭 시
function clickJoin() {
       $.ajax({
        type: "GET",
        url: "/join",
        data: {},
        success: function (response) {
            }
    });
}

