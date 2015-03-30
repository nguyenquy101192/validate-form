function validateForm(formId) {
    var formToValidation = document.getElementById(formId);
    var required = formToValidation.getElementsByClassName('required');
    console.log(required);

    for(var i = 0; i < required.length; i++) {
//        if(required[i].val() == '') {
//            alert('null');
//        }
        console.log(required[i]);
    }

    return false;
}