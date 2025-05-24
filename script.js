const menuIcon = document.getElementById("menu");
const navbar = document.getElementsByClassName("navbar");
const form = document.getElementById('contact-form');
const messageBox = document.getElementById('form-message');

// Toggle menu mobile
menuIcon.addEventListener("click", () => {
  navbar.classList.toggle("active");
});

document.addEventListener('DOMContentLoaded', function () {
  // Inicializa o EmailJS com sua chave pública
  emailjs.init("ex0XyITi5hB_x5Y5g");

  const menuIcon = document.getElementById("menu");
  const navbar = document.querySelector(".navbar");
  const form = document.getElementById('contact-form');
  const messageBox = document.getElementById('form-message');

  // Menu mobile
  menuIcon.addEventListener("click", () => {
    navbar.classList.toggle("active");
  });

  form.addEventListener('submit', function(event) {
    event.preventDefault();

    const name = this.from_name.value.trim();
    const email = this.reply_to.value.trim();
    const message = this.message.value.trim();

    messageBox.textContent = '';
    messageBox.style.color = 'red';
    messageBox.style.fontWeight = 'bold';

    if (!name || !email || !message) {
      messageBox.textContent = 'Por favor, preencha todos os campos!';
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      messageBox.textContent = 'Por favor, insira um email válido.';
      return;
    }

    emailjs.sendForm('service_6lcdnku', 'template_ggij4yr', this)
      .then(function() {
        messageBox.style.color = 'green';
        messageBox.textContent = 'Mensagem enviada com sucesso!';
        form.reset();
      }, function(error) {
        messageBox.style.color = 'red';
        messageBox.textContent = 'Erro ao enviar a mensagem. Tente novamente mais tarde.';
        console.error('Erro:', error);
      });
  });
});
