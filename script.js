// Flip to login form
function flipToLogin() {
    const flipCardInner = document.getElementById('flip-card-inner');
    flipCardInner.classList.add('flipped');
}

// Flip to sign-up form
function flipToSignUp() {
    const flipCardInner = document.getElementById('flip-card-inner');
    flipCardInner.classList.remove('flipped');
}

