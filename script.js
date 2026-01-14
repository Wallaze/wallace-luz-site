/* =====================================================
   SCRIPT PRINCIPAL
   Wallace Luz | Soluções Tecnológicas
   ===================================================== */

/* =====================================================
   MENU MOBILE (HAMBURGER)
   ===================================================== */

// Botão hamburger
const menuToggle = document.querySelector('.menu-toggle');

// Navegação
const nav = document.querySelector('.nav');

// Abre / fecha menu ao clicar no hamburger
menuToggle.addEventListener('click', (event) => {
  event.stopPropagation(); // impede conflito com outros listeners
  nav.classList.toggle('active');

  // Acessibilidade básica
  const expanded = menuToggle.getAttribute('aria-expanded') === 'true';
  menuToggle.setAttribute('aria-expanded', !expanded);
});

// Fecha menu ao clicar em um link (mobile UX)
const navLinks = document.querySelectorAll('.nav a');

navLinks.forEach(link => {
  link.addEventListener('click', () => {
    nav.classList.remove('active');
    menuToggle.setAttribute('aria-expanded', false);
  });
});

// Fecha menu se clicar fora
document.addEventListener('click', (event) => {
  if (
    !nav.contains(event.target) &&
    !menuToggle.contains(event.target)
  ) {
    nav.classList.remove('active');
    menuToggle.setAttribute('aria-expanded', false);
  }
});

/* =====================================================
   ACCORDION DE SERVIÇOS
   ===================================================== */

const serviceItems = document.querySelectorAll('.service-item');

serviceItems.forEach(item => {
  const button = item.querySelector('.service-title');

  button.addEventListener('click', (event) => {
    event.stopPropagation(); // evita conflito com document.click

    // Fecha os outros serviços
    serviceItems.forEach(i => {
      if (i !== item) {
        i.classList.remove('active');
      }
    });

    // Abre / fecha o atual
    item.classList.toggle('active');
  });
});

// Fecha todos os serviços se clicar fora da seção
document.addEventListener('click', (event) => {
  if (!event.target.closest('.services')) {
    serviceItems.forEach(item => {
      item.classList.remove('active');
    });
  }
});

/* =====================================================
   ANIMAÇÃO SUAVE AO ROLAR (SCROLL REVEAL SIMPLES)
   ===================================================== */

// Seleciona seções que devem aparecer com animação
const revealElements = document.querySelectorAll(
  '.services, .portifolio, .about, .contact'
);

const revealOnScroll = () => {
  const windowHeight = window.innerHeight;

  revealElements.forEach(section => {
    const sectionTop = section.getBoundingClientRect().top;

    if (sectionTop < windowHeight - 100) {
      section.classList.add('visible');
    }
  });
};

// Executa ao carregar e ao rolar
window.addEventListener('scroll', revealOnScroll);
window.addEventListener('load', revealOnScroll);

/* =====================================================
   FORMULÁRIO (BASE SEGURA E EVOLUTIVA)
   ===================================================== */

const form = document.querySelector('.contact form');

if (form) {
  form.addEventListener('submit', (event) => {
    event.preventDefault(); // evita reload da página

    const name = form.nome.value.trim();
    const email = form.email.value.trim();
    const message = form.mensagem.value.trim();

    // Validação simples (frontend)
    if (!name || !email || !message) {
      alert('Por favor, preencha todos os campos.');
      return;
    }

    // Simulação de envio (placeholder)
    alert('Mensagem enviada com sucesso! Em breve entrarei em contato.');

    // Limpa formulário
    form.reset();

    /*
      Futuro:
      - enviar via fetch para backend
      - salvar em banco
      - enviar email automático
      - integração com WhatsApp / CRM
    */
  });
}

/* =====================================================
   MELHORIA DE UX: LINKS EXTERNOS
   ===================================================== */

// Garante que todo link externo abra em nova aba com segurança
const externalLinks = document.querySelectorAll('a[target="_blank"]');

externalLinks.forEach(link => {
  link.setAttribute('rel', 'noopener noreferrer');
});
