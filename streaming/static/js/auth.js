document.addEventListener("DOMContentLoaded", function () {
    const signupForm = document.getElementById("signupForm");
    const signinForm = document.getElementById("signinForm");
    const container = document.getElementById("container");

    // ⬅️ Panel Toggle
    document.getElementById("signUp").addEventListener("click", () => {
        container.classList.add("right-panel-active");
    });

    document.getElementById("signIn").addEventListener("click", () => {
        container.classList.remove("right-panel-active");
    });

    // ⬅️ SIGN UP FORM SUBMIT
    if (signupForm) {
        const registerUrl = signupForm.dataset.registerUrl;

        signupForm.addEventListener("submit", function (e) {
            e.preventDefault();

            const formData = new FormData(signupForm);

            fetch(registerUrl, {
                method: "POST",
                body: formData,
                headers: {
                    "X-Requested-With": "XMLHttpRequest",
                    "X-CSRFToken": formData.get("csrfmiddlewaretoken"),
                },
            })
            .then((res) => res.text())
            .then((data) => {
                console.log("Server response:", data);

                const parser = new DOMParser();
                const doc = parser.parseFromString(data, "text/html");

                if (doc.querySelector('#signup_success_flag')) {
                    alert("Signup successful!");
                    container.classList.remove("right-panel-active");
                    signupForm.reset();
                } else if (data.includes("email_exists")) {
                    alert("Email already exists!");
                } else {
                    alert("Signup failed!");
                }
            })
            .catch((err) => {
                console.error("Signup error:", err);
                alert("Error signing up.");
            });
        });
    }

    // ⬅️ SIGN IN FORM SUBMIT
    if (signinForm) {
        signinForm.addEventListener("submit", function (e) {
            e.preventDefault();

            const formData = new FormData(signinForm);

            fetch("/signin/", {
                method: "POST",
                body: formData,
                headers: {
                    'X-CSRFToken': formData.get('csrfmiddlewaretoken')
                }
            })
            .then(response => response.json())
            .then(data => {
                if (data.success) {
                    alert("Login successful!");
                    window.location.href = "/";
                } else {
                    alert(data.message || "Login failed!");
                }
            })
            .catch(error => {
                console.error("Error:", error);
            });
        });
    }
});
