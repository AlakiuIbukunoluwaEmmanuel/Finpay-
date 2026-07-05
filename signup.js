// ==========================
// FINPAY SIGNUP.JS
// ==========================

// Password Show/Hide

const password = document.getElementById("password");
const confirmPassword = document.getElementById("confirmPassword");

const togglePassword = document.getElementById("togglePassword");
const toggleConfirmPassword = document.getElementById("toggleConfirmPassword");

togglePassword.addEventListener("click", () => {

    if (password.type === "password") {

        password.type = "text";

        togglePassword.classList.replace("fa-eye", "fa-eye-slash");

    } else {

        password.type = "password";

        togglePassword.classList.replace("fa-eye-slash", "fa-eye");

    }

});

toggleConfirmPassword.addEventListener("click", () => {

    if (confirmPassword.type === "password") {

        confirmPassword.type = "text";

        toggleConfirmPassword.classList.replace("fa-eye", "fa-eye-slash");

    } else {

        confirmPassword.type = "password";

        toggleConfirmPassword.classList.replace("fa-eye-slash", "fa-eye");

    }

});

// ==========================
// SIGN UP
// ==========================

const signupForm = document.getElementById("signupForm");

signupForm.addEventListener("submit", (e) => {

    e.preventDefault();

    const fullname = document.getElementById("fullname").value.trim();
    const email = document.getElementById("email").value.trim();
    const pass = password.value;
    const confirmPass = confirmPassword.value;

    const button = document.querySelector(".signup-btn");

    // Empty Fields

    if (!fullname || !email || !pass || !confirmPass) {

        alert("Please fill in all fields.");
        return;

    }

    // Email Validation

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(email)) {

        alert("Please enter a valid email address.");
        return;

    }

    // Password Length

    if (pass.length < 6) {

        alert("Password must be at least 6 characters.");
        return;

    }

    // Confirm Password

    if (pass !== confirmPass) {

        alert("Passwords do not match.");
        return;

    }

    // Get Existing Users

    let users = JSON.parse(localStorage.getItem("finpayUsers")) || [];

    // Check Existing Email

    const emailExists = users.some(user => user.email === email);

    if (emailExists) {

        alert("An account with this email already exists.");
        return;

    }

    // Create New User

    const newUser = {

        fullname,
        email,
        password: pass,
        balance: 0,
        transactions: []

    };

    users.push(newUser);

    localStorage.setItem("finpayUsers", JSON.stringify(users));

    // Success

    button.innerHTML = "Account Created ✓";
    button.style.background = "#10B981";
    button.disabled = true;

    setTimeout(() => {

    

    window.location.href = "login.html";

}, 1000);

});

// ==========================
// GOOGLE
// ==========================

document.querySelector(".google").onclick = () => {

    alert("Google Sign Up Coming Soon");

};

// ==========================
// FACEBOOK
// ==========================

document.querySelector(".facebook").onclick = () => {

    alert("Facebook Sign Up Coming Soon");

};

// ==========================
// PAGE ANIMATION
// ==========================

window.onload = () => {

    const card = document.querySelector(".signup-card");

    card.style.opacity = "0";
    card.style.transform = "translateY(30px)";

    setTimeout(() => {

        card.style.transition = ".8s";
        card.style.opacity = "1";
        card.style.transform = "translateY(0)";

    }, 150);

};