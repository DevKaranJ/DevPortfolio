// Mobile menu
const hamburger = document.querySelector('.hamburger');
const menuContent = document.querySelector('#menuContent');

hamburger.addEventListener('click', () => {
  menuContent.classList.toggle('show');
});

const closeButton = document.querySelector('.close-button');

closeButton.addEventListener('click', () => {
  menuContent.classList.remove('show');
});

const menuItems = document.querySelectorAll('.menuItem a');

menuItems.forEach((menuItem) => {
  menuItem.addEventListener('click', () => {
    menuContent.classList.remove('show');
  });
});

// Validation form
const form = document.getElementById('form');
const emailInput = document.querySelector("input[name='email']");
const errorEmail = document.getElementById('errorEmail');

form.addEventListener('submit', (event) => {
  event.preventDefault();

  const emailValue = emailInput.value;

  if (emailValue.toLowerCase() !== emailValue) {
    errorEmail.textContent = 'Email must be in lowercase.';
  } else {
    errorEmail.textContent = '';
    form.submit();
  }
});

// Preserve data in the browser

const contactForm = document.querySelector('#form');

function saveFormData() {
  const formData = {
    name: contactForm.querySelector("[name='name']").value,
    email: contactForm.querySelector("[name='email']").value,
    message: contactForm.querySelector("[name='message']").value,
  };

  localStorage.setItem('contactFormData', JSON.stringify(formData));
}

contactForm.addEventListener('input', saveFormData);

// Paste your code below this line

loadFormData();