//------------------------------------- Change Login To Regesteration -------------------------
function replaceToRegistration(){
    var email      = document.getElementById('email')
    var repassword =document.getElementById('repassword')
    /** Set Style*/
    email.style.display='inline';
    email.setAttribute('required','');
    repassword.style.display='inline';
    repassword.setAttribute('required','')
    //Form Headers
    document.getElementById('formHeader').innerText='Registration'
    document.getElementById('acount').innerText=''
    //remmember me
    document.getElementsByClassName('remmemberMe')[0].style.display='none'
    /** Set submit Button Value*/
    document.getElementById('submit').value='Submit'
    document.getElementsByTagName('form')[0].action='redirection.html'
    
}