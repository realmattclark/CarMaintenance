var Form = document.forms['form1'];
if (!Form) {
    Form = document.form1;
}
function __doPostBack(eventTarget, eventArgument) {
    if (!Form.onsubmit || (Form.onsubmit() != false)) {
        Form.__EVENTTARGET.value = eventTarget;
        Form.__EVENTARGUMENT.value = eventArgument;
        Form.submit();
    }
}