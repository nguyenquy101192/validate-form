function validateForm(formId) {
    var formToValidation = document.getElementById(formId),
        required = formToValidation.getElementsByClassName('required'),
        submit = formToValidation.getElementsByTagName('button').submit,
        reset = formToValidation.getElementsByTagName('button').reset,
        inputTag = formToValidation.getElementsByTagName('input'),
        textareaTag = formToValidation.getElementsByTagName('textarea');

    // Submit click
    submit.onclick = function(e) {
        for(var i = 0; i < required.length; i++) {
            var caseNull = required[i].value;

            // Check null
            if(caseNull == '') {
                if(document.getElementById("required") == null){
                    var messageNode = document.createElement("span");
                    messageNode.setAttribute('id','required');
                } else {
                    var messageNode = document.getElementById("required");
                }

                messageNode.setAttribute('class', 'error');
                messageNode.innerHTML = 'This field is required.';
                required[i].parentNode.insertBefore(messageNode, required[i].nextSibling);
//                window.setTimeout(function() {
                    document.getElementById("required").setAttribute('style', 'display: inline');
//                }, 50);
            }
        }
        e.preventDefault();
        e.stopImmediatePropagation();
    };

    // Reset click
    reset.onclick = function() {
        // Reset value input
        for(var i = 0; i < inputTag.length; i++) {
            inputTag[i].setAttribute('value', '');
        }

        // Reset value textarea
        for(var i = 0; i < textareaTag.length; i++) {
            textareaTag[i].setAttribute('value', '');
        }

        // Clear error
        var error = document.getElementsByClassName('error');
        if(error != null) {
            for(var i = 0; i < error.length; i++) {
                error[i].parentNode.removeChild(error[i]);
            }
        }
    };

    return true;
}