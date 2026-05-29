const form = document.getElementById("loginForm");
const password = document.getElementById("password");
const togglePassword = document.getElementById("togglePassword");
const message = document.getElementById("message");
const loginBtn = document.getElementById("loginBtn");

togglePassword.addEventListener("click", () => {

    if(password.type === "password"){

        password.type = "text";

        togglePassword.innerHTML =
        '<i class="fa-solid fa-eye-slash"></i>';

    }else{

        password.type = "password";

        togglePassword.innerHTML =
        '<i class="fa-solid fa-eye"></i>';
    }
});

form.addEventListener("submit", (e) => {

    e.preventDefault();

    const email =
    document.getElementById("email").value.trim();

    const pass =
    password.value.trim();

    if(email === "" || pass === ""){

        message.style.color = "#ff6b6b";

        message.innerText =
        "Please fill all fields";

        return;
    }

    loginBtn.innerHTML =
    '<i class="fa-solid fa-spinner fa-spin"></i> Logging In...';

    loginBtn.disabled = true;

    setTimeout(() => {

        if(
            email === "admin@gmail.com"
            &&
            pass === "12345"
        ){

            message.style.color =
            "#22c55e";

            message.innerText =
            "Login Successful Welcome Back! ";

        }else{

            message.style.color =
            "#ef4444";

            message.innerText =
            "Invalid Credentials Please Try Again!";
        }

        loginBtn.innerHTML =
        "Login";

        loginBtn.disabled = false;

    },2000);
});