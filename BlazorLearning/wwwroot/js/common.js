window.showToastr = function (type, message) {
    if (type == "success") {
        toastr.success(message);
    }

    if (type == "error") {
        toastr.error(message);
    }
}

window.showSwal = function (type, message) {
    if (type == "success") {

        Swal.fire({
            title: "Ez szép munka!",
            text: message,
            icon: "success"
        });
       
    }

    if (type == "error") {

        Swal.fire({
            title: "Ez elrontott munka!",
            text: message,
            icon: "error"
        });
        
    }
}