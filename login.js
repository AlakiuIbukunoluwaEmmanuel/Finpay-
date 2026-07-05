// ==========================
// FINPAY LOGIN.JS
// PART 1
// ==========================

// Password Show/Hide

const password = document.getElementById("password");
const togglePassword = document.getElementById("togglePassword");

togglePassword.addEventListener("click", () => {

    if (password.type === "password") {

        password.type = "text";

        togglePassword.classList.replace("fa-eye", "fa-eye-slash");

    } else {

        password.type = "password";

        togglePassword.classList.replace("fa-eye-slash", "fa-eye");

    }

});

// ==========================
// LOGIN
// ==========================

const loginForm = document.getElementById("loginForm");

loginForm.addEventListener("submit", (e) => {

    e.preventDefault();

    const email = document.querySelector("input[type=email]").value.trim();
    const pass = password.value;

    const button = document.querySelector(".login-btn");

    button.innerHTML = "Signing In...";
    button.disabled = true;

    // Get all registered users

    const users = JSON.parse(localStorage.getItem("finpayUsers")) || [];

    // Find matching user

    const user = users.find(u =>
        u.email === email &&
        u.password === pass
    );

    setTimeout(() => {

        if (user) {

            // Save current logged in user

            localStorage.setItem(
                "currentUser",
                JSON.stringify(user)
            );

            button.innerHTML = "Success ✓";
            button.style.background = "#10B981";

            setTimeout(() => {

    window.location.href = "dashboard.html";

}, 1000);

        } else {

            alert("Incorrect email or password.");

            button.innerHTML = "Sign In";
            button.disabled = false;

        }

    }, 1200);

});
// ==========================
// INPUT ANIMATION
// ==========================

const inputs = document.querySelectorAll("input");

inputs.forEach(input => {

    input.addEventListener("focus", () => {

        input.parentElement.style.transform = "scale(1.02)";

    });

    input.addEventListener("blur", () => {

        input.parentElement.style.transform = "scale(1)";

    });

});

// ==========================
// GOOGLE BUTTON
// ==========================

document.querySelector(".google").onclick = () => {

    alert("Google Login Coming Soon");

};

// ==========================
// FACEBOOK BUTTON
// ==========================

document.querySelector(".facebook").onclick = () => {

    alert("Facebook Login Coming Soon");

};

// ==========================
// PAGE ANIMATION
// ==========================

window.onload = () => {

    const card = document.querySelector(".login-card");

    card.style.opacity = "0";
    card.style.transform = "translateY(30px)";

    setTimeout(() => {

        card.style.transition = ".8s";

        card.style.opacity = "1";

        card.style.transform = "translateY(0)";

    }, 150);

};