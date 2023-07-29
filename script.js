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

function loadFormData() {
  const formData = JSON.parse(localStorage.getItem('contactFormData'));
  if (formData) {
    contactForm.querySelector("[name='name']").value = formData.name;
    contactForm.querySelector("[name='email']").value = formData.email;
    contactForm.querySelector("[name='message']").value = formData.message;
  }
}

loadFormData();

// Modal Window
const projects = [
  {
    name: 'Multi-Post Stories',
    cardDetail: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent",
    skills: ['CSS', 'HTML', 'Bootstrap', 'Ruby'],
    image: 'assets/ProjectImg/modalProject.png',
    live_version: '#',
    link_source: '#',
  },
  {
    name: 'Multi-Post Stories',
    cardDetail: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent",
    skills: ['CSS', 'HTML', 'Bootstrap', 'Ruby'],
    image: 'assets/ProjectImg/modalProject.png',
    live_version: '#',
    link_source: '#',
  },
  {
    name: 'Multi-Post Stories',
    cardDetail: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent",
    skills: ['CSS', 'HTML', 'Bootstrap', 'Ruby'],
    image: 'assets/ProjectImg/modalProject.png',
    live_version: '#',
    link_source: '#',
  },
  {
    name: 'Multi-Post Stories',
    cardDetail: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent",
    skills: ['CSS', 'HTML', 'Bootstrap', 'Ruby'],
    image: 'assets/ProjectImg/modalProject.png',
    live_version: '#',
    link_source: '#',
  },
  {
    name: 'Multi-Post Stories',
    cardDetail: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent",
    skills: ['CSS', 'HTML', 'Bootstrap', 'Ruby'],
    image: 'assets/ProjectImg/modalProject.png',
    live_version: '#',
    link_source: '#',
  },
  {
    name: 'Multi-Post Stories',
    cardDetail: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent",
    skills: ['CSS', 'HTML', 'Bootstrap', 'Ruby'],
    image: 'assets/ProjectImg/modalProject.png',
    live_version: '#',
    link_source: '#',
  },
  {
    name: 'Multi-Post Stories',
    cardDetail: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent",
    skills: ['CSS', 'HTML', 'Bootstrap', 'Ruby'],
    image: 'assets/ProjectImg/modalProject.png',
    live_version: '#',
    link_source: '#',
  },
];

function openModal(index) {
  const projectInfo = projects[index];

  document.getElementById('modalProjectName').textContent = projectInfo.name;
  document.getElementById('modalProjectDescription').textContent = projectInfo.cardDetail;

  const projectImage = document.getElementById('modalProjectImage');
  projectImage.src = projectInfo.image;

  const skillsList = document.getElementById('modalProjectSkills');
  skillsList.innerHTML = '';
  projectInfo.skills.forEach(skill => {
    const li = document.createElement('li');
    li.textContent = skill;
    skillsList.appendChild(li);
  });

  document.getElementById('modalLiveVersionLink').href = projectInfo.live_version;
  document.getElementById('modalSourceLink').href = projectInfo.link_source;

  const modal = document.getElementById('modal');
  modal.style.display = 'block';
}

function closeModal() {
  const modal = document.getElementById('modal');
  modal.style.display = 'none';
}

window.onclick = (event) => {
  const modal = document.getElementById('modal');
  if (event.target === modal) {
    modal.style.display = 'none';
  }
};