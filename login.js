// register
function register() {
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    
    fetch('/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        email: email,
        password: password
      })
    })
    .then(response => response.json())
    .then(jsonResponse => {
      
      alert(jsonResponse.message);
    });
  }
  
  // login
  function login() {
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    
    fetch('/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        email: email,
        password: password
      })
    })
    .then(response => response.json())
    .then(jsonResponse => {
      
      alert(jsonResponse.message);
    });
  }
  