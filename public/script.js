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

const socialLinks = [
  {
    label: 'Instagram',
    href: 'https://www.instagram.com/inmobiliariasmmiv/',
    svg: '<svg viewBox="0 0 24 24" aria-hidden="true"><rect x="3" y="3" width="18" height="18" rx="5" fill="none" stroke="currentColor" stroke-width="1.8"/><circle cx="12" cy="12" r="4.2" fill="none" stroke="currentColor" stroke-width="1.8"/><circle cx="17.4" cy="6.7" r="1.1" fill="currentColor"/></svg>'
  },
  {
    label: 'Facebook',
    href: 'https://www.facebook.com/InmobiliariasMMIV',
    svg: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M13.7 21v-8h2.7l.4-3h-3.1V8.1c0-.9.3-1.6 1.7-1.6H17V3.8c-.4-.1-1.3-.2-2.3-.2-2.3 0-3.9 1.4-3.9 4.1V10H8.2v3h2.6v8h2.9z" fill="currentColor"/></svg>'
  },
  {
    label: 'Correo electrónico',
    href: 'mailto:melecio.maldonado@solucionesmmiv.mx',
    svg: '<svg viewBox="0 0 24 24" aria-hidden="true"><rect x="3" y="5" width="18" height="14" rx="2" fill="none" stroke="currentColor" stroke-width="1.8"/><path d="M4.5 7l7.5 6 7.5-6" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg>'
  },
  {
    label: 'WhatsApp Melecio',
    href: 'https://wa.me/525578410283?text=Hola,%20me%20interesa%20recibir%20informaci%C3%B3n%20sobre%20venta%20y/o%20renta%20de%20propiedades.',
    svg: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M20.2 11.8a8.1 8.1 0 0 1-12 7.1L4 20l1.1-4a8.1 8.1 0 1 1 15.1-4.2z" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linejoin="round"/><path d="M9 8.1c.2-.4.4-.4.7-.4h.5c.2 0 .4.1.5.4l.8 1.8c.1.3.1.5-.1.7l-.6.7c-.2.2-.1.4 0 .6.6 1.1 1.5 2 2.6 2.6.2.1.4.2.6 0l.8-.9c.2-.2.4-.2.7-.1l1.8.9c.3.1.4.3.4.5 0 .5-.3 1.4-.8 1.8-.5.4-1.2.7-2 .6-1.1-.1-2.6-.5-4.4-2.1-2.2-1.9-3.6-4.3-3.7-5.4-.1-.7.1-1.3.5-1.7z" fill="currentColor"/></svg>'
  },
  {
    label: 'WhatsApp Marisol',
    href: 'https://wa.me/5547600102?text=Hola,%20me%20interesa%20recibir%20informaci%C3%B3n%20sobre%20venta%20y/o%20renta%20de%20propiedades.',
    svg: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M20.2 11.8a8.1 8.1 0 0 1-12 7.1L4 20l1.1-4a8.1 8.1 0 1 1 15.1-4.2z" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linejoin="round"/><path d="M9 8.1c.2-.4.4-.4.7-.4h.5c.2 0 .4.1.5.4l.8 1.8c.1.3.1.5-.1.7l-.6.7c-.2.2-.1.4 0 .6.6 1.1 1.5 2 2.6 2.6.2.1.4.2.6 0l.8-.9c.2-.2.4-.2.7-.1l1.8.9c.3.1.4.3.4.5 0 .5-.3 1.4-.8 1.8-.5.4-1.2.7-2 .6-1.1-.1-2.6-.5-4.4-2.1-2.2-1.9-3.6-4.3-3.7-5.4-.1-.7.1-1.3.5-1.7z" fill="currentColor"/></svg>'
  }
];

const createSocialBar = (className) => {
  const nav = document.createElement('nav');
  nav.className = className;
  nav.setAttribute('aria-label', 'Redes sociales y contacto');
  socialLinks.forEach((item) => {
    const link = document.createElement('a');
    link.href = item.href;
    link.setAttribute('aria-label', item.label);
    link.title = item.label;
    if (item.href.startsWith('http')) {
      link.target = '_blank';
      link.rel = 'noopener';
    }
    link.innerHTML = item.svg;
    nav.appendChild(link);
  });
  return nav;
};

const hero = document.querySelector('.hero.hero-mmiv-original');
if (hero && !hero.querySelector('.hero-social')) {
  hero.appendChild(createSocialBar('hero-social'));
}

const footerSocial = document.querySelector('.footer-social');
if (footerSocial) {
  const newFooterSocial = createSocialBar('footer-social');
  footerSocial.replaceWith(newFooterSocial);
}

const brandLogo = document.querySelector('.brand img');
if (brandLogo) {
  brandLogo.style.objectFit = 'contain';
  brandLogo.style.objectPosition = 'center';
  brandLogo.style.width = 'auto';
  brandLogo.style.maxWidth = '220px';
  brandLogo.style.height = '68px';
  brandLogo.style.maxHeight = '68px';
}

const socialStyle = document.createElement('style');
socialStyle.textContent = `
  .hero-social{position:absolute;right:46px;top:124px;z-index:3;display:flex;gap:10px}
  .hero-social a,.footer-social a{width:40px;height:40px;border:1px solid rgba(255,255,255,.62);border-radius:50%;display:grid;place-items:center;color:#fff;text-decoration:none;transition:background .2s ease,transform .2s ease,border-color .2s ease}
  .hero-social a:hover,.footer-social a:hover{background:rgba(255,255,255,.14);border-color:#fff;transform:translateY(-2px)}
  .hero-social svg,.footer-social svg{width:19px;height:19px;display:block}
  .footer-social{display:flex;gap:10px}
  @media(max-width:900px){.hero-social{right:24px;top:112px}}
  @media(max-width:600px){.hero-social{left:15px;right:auto;top:92px;gap:7px}.hero-social a{width:36px;height:36px}.hero-social svg{width:17px;height:17px}.brand img{width:auto!important;height:58px!important;max-height:58px!important;max-width:180px!important}}
`;
document.head.appendChild(socialStyle);

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
