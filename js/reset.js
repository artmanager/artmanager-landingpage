function resetPassword() {
    var password = $('#password')[0].value;
    var confirm = $('#confirm')[0].value;
    var token = window.location.search.substring(1).split('=')[1];

    if ((password != null && confirm != null && password != '' && confirm != '') && (password == confirm)) {
        var obj = {
            password: password,
            token: token
        };

        $.ajax({
            type: "POST",
            url: 'http://api.artmanager.com.br/receiveToken',
            data: obj,
            success: function (r, o) {
                $('#password')[0].value = null;
                $('#confirm')[0].value = null;
                if (r.success != null) {
                    window.location.search = null;
                    bootbox.alert(r.success, function (t) { console.log(t); })
                } else {
                    bootbox.alert(r.error, function (t) {
                        console.log(t);
                    });
                }
                
                console.log(r);
            },
            dataType: 'json'
        });

    } else {
        alert('Senhas inválidas');
    }

}
