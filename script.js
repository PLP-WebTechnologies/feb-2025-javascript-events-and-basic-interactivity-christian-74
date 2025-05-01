// Event Handling
const colorButton = document.getElementById('colorButton');
const hoverBox = document.getElementById('hoverBox');
const keypressDisplay = document.getElementById('keypressDisplay');
const secretButton = document.getElementById('secretButton');

// Button click event
colorButton.addEventListener('click', () => {
    const randomColor = '#' + Math.floor(Math.random()*16777215).toString(16);
    colorButton.style.backgroundColor = randomColor;
});

// Hover effects
hoverBox.addEventListener('mouseenter', () => {
    hoverBox.style.backgroundColor = '#007bff';
    hoverBox.style.color = 'white';
});

hoverBox.addEventListener('mouseleave', () => {
    hoverBox.style.backgroundColor = '#ddd';
    hoverBox.style.color = 'black';
});

// Keypress detection
document.addEventListener('keydown', (event) => {
    keypressDisplay.textContent = `Key pressed: ${event.key}`;
    keypressDisplay.style.animation = 'shake 0.5s';
    setTimeout(() => {
        keypressDisplay.style.animation = '';
    }, 500);
});

// Secret double-click action
secretButton.addEventListener('dblclick', () => {
    secretButton.textContent = '🎉 Surprise! 🎉';
    setTimeout(() => {
        secretButton.textContent = 'Double click for surprise!';
    }, 2000);
});

// Image Gallery
const galleryImage = document.getElementById('galleryImage');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');

const images = [
    'https://images.pexels.com/photos/3244513/pexels-photo-3244513.jpeg',
    'https://images.pexels.com/photos/2014422/pexels-photo-2014422.jpeg',
    'https://images.pexels.com/photos/1266810/pexels-photo-1266810.jpeg'
];

let currentImageIndex = 0;

function updateImage() {
    galleryImage.src = images[currentImageIndex];
}

prevBtn.addEventListener('click', () => {
    currentImageIndex = (currentImageIndex - 1 + images.length) % images.length;
    updateImage();
});

nextBtn.addEventListener('click', () => {
    currentImageIndex = (currentImageIndex + 1) % images.length;
    updateImage();
});

// Accordion
const accordionHeaders = document.querySelectorAll('.accordion-header');

accordionHeaders.forEach(header => {
    header.addEventListener('click', () => {
        const content = header.nextElementSibling;
        content.classList.toggle('active');
    });
});

// Form Validation
const form = document.getElementById('validationForm');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');

function showError(input, message) {
    const validationMessage = input.nextElementSibling;
    validationMessage.textContent = message;
}

function clearError(input) {
    const validationMessage = input.nextElementSibling;
    validationMessage.textContent = '';
}

function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email.toLowerCase());
}

// Real-time validation
username.addEventListener('input', () => {
    if (username.value.length < 3) {
        showError(username, 'Username must be at least 3 characters');
    } else {
        clearError(username);
    }
});

email.addEventListener('input', () => {
    if (!validateEmail(email.value)) {
        showError(email, 'Please enter a valid email address');
    } else {
        clearError(email);
    }
});

password.addEventListener('input', () => {
    if (password.value.length < 8) {
        showError(password, 'Password must be at least 8 characters');
    } else {
        clearError(password);
    }
});

// Form submission
form.addEventListener('submit', (e) => {
    e.preventDefault();
    
    let isValid = true;
    
    if (username.value.length < 3) {
        showError(username, 'Username must be at least 3 characters');
        isValid = false;
    }
    
    if (!validateEmail(email.value)) {
        showError(email, 'Please enter a valid email address');
        isValid = false;
    }
    
    if (password.value.length < 8) {
        showError(password, 'Password must be at least 8 characters');
        isValid = false;
    }
    
    if (isValid) {
        alert('Form submitted successfully!');
        form.reset();
    }
});