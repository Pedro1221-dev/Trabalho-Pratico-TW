function logar(){

    var login = document.getElementById('login').value;
    var senha = document.getElementById('senha').value;

    if(login == "user@gmail.com" && senha == "1234"){
        location.href = "index.html";
    }else{
        alert('Email ou password incorretos!');
    }

}