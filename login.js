const users = {
    Satyam: 'Satyam123',
    Samir: 'Samir123',
    Alice: 'Alice123',
    Jenisha: 'Jenisha123',
    Bob: 'Bob123'

};

const loginForm = document.getElementById('login-form');
const usernameInput = document.getElementById('username-input');
const passwordInput = document.getElementById('password-input'); 
const togglePasswordcheckbox = document.getElementById('toggle-password'); 


togglePasswordcheckbox.addEventListener('change',()=>{
    if (togglePasswordcheckbox.checked) {
        passwordInput.type = 'text';
    } else { 
        passwordInput.type = 'password';
    }

});

loginForm.addEventListener('submit',(event) =>{
    event.preventDefault();

    const username = usernameInput.value.trim(); 
    const password = passwordInput.value; 


   
    if (!username || !password){
        alert("Please enter both Username and Password");
        return; 
    }

    if(users[username] && users[username]=== password){
        localStorage.setItem('username', username); 
        window.location.href = 'chat.html'; 

    } else {
        window.alert("Invalid username or password! "); 
    }
});

