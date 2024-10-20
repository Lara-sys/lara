function validateForm() {
    const name=document.forms["myForm"]["name"];
    const email=document.forms["myForm"]["email"];
    const message=document.forms["myForm"]["message"];
    if(name.value==""){
        document.getElementById("errorname").innerHTML="Veuillez entrer un nom valide";
        name.focus();
        return false; 
    } 
    else{
        document.getElementById("errorname").innerHTML="";
    } 
    if(email.value==""){
        document.getElementById("erroremail").innerHTML="Veuillez entrer une adresse mail valide";
        email.focus();
        return false;
    }
    else{
        document.getElementById("erroremail").innerHTML=""
    }
    if(email.value.indexOf("@",0)<0){
        document.getElementById("erroremail").innerHTML="Veuillez entrer une adresse mail valide";
        email.focus();
        return false; 
    }
    if(email.value.indexOf(".",0)<0){
        document.getElementById("erroremail").innerHTML="Veuillez entrer une adresse mail valide";
        email.focus();
        return false;
    }
    if(message.value==""){
        document.getElementById("errormsg").innerHTML="Veuillez entrer un message valide";
        message.focus();
        return false; 
    }
    else{
        document.getElementById("errormsg").innerHTML="";
    }
    return true;
}