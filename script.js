// function view() {
//     $.ajax({
//         type: "GET",
//         dataType: 'JSON',
//         url: 'http://localhost/javascript_1_zavdannya/server.php',
//         success: function (data) {
//             $('#result').innerHTML("<b>"+data+"<b>");
//         }
//     });
// }


$(document).ready(function () {

    $('#mainForm').on('submit', function(e) {
        e.preventDefault();
        var oneNumber = $('#firstNumber').val();
        var twoNumber = $('#secondNumber').val();
        var action = $('input[name=action]:checked').val();

        $.ajax({
            type: "POST",
            url: 'server.php',
            data: {
                oneNumber: oneNumber,
                twoNumber: twoNumber,
                action: action
            },
            success : function(data) {
                // oneNumber.val("");
                // twoNumber.val("");
                // action.val("");
                $('#result').html(data);
            },
            error: function (jqXHR, exception) {

            }
        })
    });
});
