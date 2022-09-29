$(document).ready(function() {
    $("#submit").click(function() {
        var name = $("#name").val();
        var email = $("#email").val();
        var message = $("#message").val();
        var contact = $("#contact").val();
        $("#returnmessage").empty();
        if (name == '' || email == '' || contact == '') {
            alert("Please Fill Required Fields");
        } else {
            $.post("contact_form.php", {
            name1: name,
            email1: email,
            message1: message,
            contact1: contact
        }, function(data) {
            $("#returnmessage").append(data);
            if (data == "Your informations has been received, We will contact you soon.") {
            $("#form")[0].reset();
            }
        });
        }
    });
});