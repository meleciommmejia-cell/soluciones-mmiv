const menuButton = document.querySelector('.menu-btn');
const navigation = document.querySelector('.main-nav');

menuButton?.addEventListener('click', () => {
  const isOpen = navigation?.classList.toggle('open') ?? false;
  menuButton.setAttribute('aria-expanded', String(isOpen));
  menuButton.setAttribute('aria-label', isOpen ? 'Cerrar menú' : 'Abrir menú');
});

navigation?.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => {
    navigation.classList.remove('open');
    menuButton?.setAttribute('aria-expanded', 'false');
    menuButton?.setAttribute('aria-label', 'Abrir menú');
  });
});

const year = document.getElementById('year');
if (year) year.textContent = String(new Date().getFullYear());

const contactForm = document.getElementById('contact-form');
const formNote = document.getElementById('form-note');
contactForm?.addEventListener('submit', (event) => {
  event.preventDefault();
  if (!contactForm.reportValidity()) return;
  const data = new FormData(contactForm);
  const subject = `Solicitud MMIV - ${data.get('servicio') || 'Información inmobiliaria'}`;
  const body = [
    `Nombre: ${data.get('nombre') || ''}`,
    `Teléfono / WhatsApp: ${data.get('telefono') || ''}`,
    `Correo: ${data.get('correo') || ''}`,
    `Ciudad: ${data.get('ciudad') || ''}`,
    `Servicio requerido: ${data.get('servicio') || ''}`,
    `Forma preferida de contacto: ${data.get('preferencia') || ''}`,
    '',
    'Mensaje:',
    `${data.get('mensaje') || ''}`
  ].join('\n');
  if (formNote) formNote.textContent = 'Abriremos tu aplicación de correo con la solicitud preparada para enviar.';
  window.location.href = `mailto:melecio.maldonado@solucionesmmiv.mx?cc=marisol.cabanas@solucionesmmiv.mx&subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
});

const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const revealElements = document.querySelectorAll('.reveal');

if (reducedMotion || !('IntersectionObserver' in window)) {
  revealElements.forEach((element) => element.classList.add('visible'));
} else {
  const observer = new IntersectionObserver((entries, currentObserver) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        currentObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });

  revealElements.forEach((element) => observer.observe(element));
}
