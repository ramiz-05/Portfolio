const themeToggleBtn = document.getElementById('theme-toggle');
const bodyElement = document.body;
const contactForm = document.getElementById('contact-form');
const formFeedback = document.getElementById('form-feedback');
const skillCards = document.querySelectorAll('.skill-card');

themeToggleBtn.addEventListener('click', () => {
    const isLightMode = bodyElement.classList.toggle('light-theme');

    if (isLightMode) {
        themeToggleBtn.textContent = '🌙 Dark Mode';
    } else {
        themeToggleBtn.textContent = '☀️ Light Mode';
    }
});

skillCards.forEach((card) => {
    card.addEventListener('click', () => {
        card.classList.toggle('active-plan');
    });
});

contactForm.addEventListener("submit", async function (event) {
    event.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    if (!name || !email || !message) {
        return;
    }

    const formData = new FormData(contactForm);

    try {
        const response = await fetch(contactForm.action, {
            method: 'POST',
            body: formData,
            headers: {
                'Accept': 'application/json'
            }
        });

        if (response.ok) {
            formFeedback.textContent = `Thank you, ${name}! Your message has been sent successfully.`;
            contactForm.reset();
        } else {
            formFeedback.textContent = "Oops! There was a problem submitting your form.";
        }
    } catch (error) {
        formFeedback.textContent = "Oops! There was a network error. Please try again.";
    }
});