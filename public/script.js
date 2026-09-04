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
    svg: '<svg viewBox="0 0 24 24" aria-hidden="true"><rect x="3" y="3" width="18" height="18" rx="5" fill="none" stroke="currentColor" stroke-width="1.9"/><circle cx="12" cy="12" r="4.2" fill="none" stroke="currentColor" stroke-width="1.9"/><circle cx="17.4" cy="6.7" r="1.1" fill="currentColor"/></svg>'
  },
  {
    label: 'Facebook',
    href: 'https://www.facebook.com/InmobiliariasMMIV',
    svg: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M13.7 21v-8h2.7l.4-3h-3.1V8.1c0-.9.3-1.6 1.7-1.6H17V3.8c-.4-.1-1.3-.2-2.3-.2-2.3 0-3.9 1.4-3.9 4.1V10H8.2v3h2.6v8h2.9z" fill="currentColor"/></svg>'
  },
  {
    label: 'Correo',
    href: 'mailto:melecio.maldonado@solucionesmmiv.mx',
    svg: '<svg viewBox="0 0 24 24" aria-hidden="true"><rect x="3" y="5" width="18" height="14" rx="2" fill="none" stroke="currentColor" stroke-width="1.9"/><path d="M4.5 7l7.5 6 7.5-6" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"/></svg>'
  },
  {
    label: 'Melecio',
    href: 'https://wa.me/525578410283?text=Hola,%20me%20interesa%20recibir%20informaci%C3%B3n%20sobre%20venta%20y/o%20renta%20de%20propiedades.',
    svg: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M20.2 11.8a8.1 8.1 0 0 1-12 7.1L4 20l1.1-4a8.1 8.1 0 1 1 15.1-4.2z" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linejoin="round"/><path d="M9 8.1c.2-.4.4-.4.7-.4h.5c.2 0 .4.1.5.4l.8 1.8c.1.3.1.5-.1.7l-.6.7c-.2.2-.1.4 0 .6.6 1.1 1.5 2 2.6 2.6.2.1.4.2.6 0l.8-.9c.2-.2.4-.2.7-.1l1.8.9c.3.1.4.3.4.5 0 .5-.3 1.4-.8 1.8-.5.4-1.2.7-2 .6-1.1-.1-2.6-.5-4.4-2.1-2.2-1.9-3.6-4.3-3.7-5.4-.1-.7.1-1.3.5-1.7z" fill="currentColor"/></svg>'
  },
  {
    label: 'Marisol',
    href: 'https://wa.me/5547600102?text=Hola,%20me%20interesa%20recibir%20informaci%C3%B3n%20sobre%20venta%20y/o%20renta%20de%20propiedades.',
    svg: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M20.2 11.8a8.1 8.1 0 0 1-12 7.1L4 20l1.1-4a8.1 8.1 0 1 1 15.1-4.2z" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linejoin="round"/><path d="M9 8.1c.2-.4.4-.4.7-.4h.5c.2 0 .4.1.5.4l.8 1.8c.1.3.1.5-.1.7l-.6.7c-.2.2-.1.4 0 .6.6 1.1 1.5 2 2.6 2.6.2.1.4.2.6 0l.8-.9c.2-.2.4-.2.7-.1l1.8.9c.3.1.4.3.4.5 0 .5-.3 1.4-.8 1.8-.5.4-1.2.7-2 .6-1.1-.1-2.6-.5-4.4-2.1-2.2-1.9-3.6-4.3-3.7-5.4-.1-.7.1-1.3.5-1.7z" fill="currentColor"/></svg>'
  }
];

const createSocialBar = (className, showLabels = false) => {
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
    link.innerHTML = `<span class="social-icon">${item.svg}</span>${showLabels ? `<span class="social-label">${item.label}</span>` : ''}`;
    nav.appendChild(link);
  });
  return nav;
};

const navWrap = document.querySelector('.site-header .nav-wrap');
if (navWrap && !navWrap.querySelector('.header-social')) {
  navWrap.appendChild(createSocialBar('header-social', true));
}

const hero = document.querySelector('.hero.hero-mmiv-original');
if (hero && !hero.querySelector('.mobile-social')) {
  const mobileSocial = createSocialBar('mobile-social');
  const heroCopy = hero.querySelector('.hero-copy');
  if (heroCopy) heroCopy.prepend(mobileSocial);
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
  brandLogo.style.height = '104px';
  brandLogo.style.maxHeight = '104px';
  brandLogo.style.maxWidth = '300px';
}

const socialStyle = document.createElement('style');
socialStyle.textContent = `
  .site-header{height:132px!important;background:rgba(250,248,243,.97)!important}
  .site-header .nav-wrap{width:min(1440px,calc(100% - 56px))!important;display:grid!important;grid-template-columns:auto 1fr auto!important;gap:34px!important;align-items:center!important}
  .brand{display:flex;align-items:center;min-width:250px}
  .brand img{width:auto!important;height:104px!important;max-height:104px!important;max-width:300px!important;object-fit:contain!important;object-position:center!important}
  .main-nav{justify-self:center;gap:25px!important}
  .main-nav a{font-size:.66rem!important}
  .header-social{display:flex;align-items:flex-start;gap:12px;justify-self:end}
  .header-social a{min-width:52px;display:flex;flex-direction:column;align-items:center;gap:5px;text-decoration:none;color:#17333a;font-size:.59rem;font-weight:600;line-height:1;text-align:center}
  .social-icon{width:44px;height:44px;border-radius:50%;display:grid;place-items:center;color:#fff;box-shadow:0 4px 12px rgba(15,40,48,.12);transition:transform .2s ease,box-shadow .2s ease}
  .header-social a:hover .social-icon{transform:translateY(-2px);box-shadow:0 7px 16px rgba(15,40,48,.18)}
  .header-social a:nth-child(1) .social-icon{background:linear-gradient(135deg,#f9ce34 0%,#ee2a7b 45%,#6228d7 100%)}
  .header-social a:nth-child(2) .social-icon{background:#1877f2}
  .header-social a:nth-child(3) .social-icon{background:#97258f}
  .header-social a:nth-child(4) .social-icon,.header-social a:nth-child(5) .social-icon{background:#20b85a}
  .header-social svg{width:23px;height:23px;display:block}
  .mobile-social{display:none}
  .footer-social{display:flex;gap:10px}
  .footer-social a{width:40px;height:40px;border:1px solid rgba(255,255,255,.55);border-radius:50%;display:grid;place-items:center;color:#fff;text-decoration:none;transition:background .2s ease,transform .2s ease}
  .footer-social a:hover{background:rgba(255,255,255,.14);transform:translateY(-2px)}
  .footer-social .social-icon{width:auto;height:auto;border-radius:0;background:none!important;box-shadow:none}
  .footer-social svg{width:19px;height:19px;display:block}
  .hero.hero-mmiv-original .hero-shell{padding-top:205px!important}
  @media(max-width:1250px){
    .site-header{height:112px!important}
    .site-header .nav-wrap{width:min(1180px,calc(100% - 38px))!important;gap:18px!important}
    .brand{min-width:190px}.brand img{height:86px!important;max-height:86px!important;max-width:235px!important}
    .main-nav{gap:17px!important}.main-nav a{font-size:.61rem!important}
    .header-social{gap:7px}.header-social a{min-width:42px;font-size:.52rem}.social-icon{width:37px;height:37px}.header-social svg{width:19px;height:19px}
    .hero.hero-mmiv-original .hero-shell{padding-top:185px!important}
  }
  @media(max-width:980px){
    .site-header{height:92px!important}.site-header .nav-wrap{display:flex!important;justify-content:space-between!important}
    .brand{min-width:0}.brand img{height:72px!important;max-height:72px!important;max-width:205px!important}
    .header-social{display:none}.main-nav{top:92px!important}.menu-btn{display:block!important}
    .hero.hero-mmiv-original .hero-shell{padding-top:155px!important}
  }
  @media(max-width:600px){
    .site-header{height:82px!important}.brand img{height:64px!important;max-height:64px!important;max-width:185px!important}.main-nav{top:82px!important}
    .hero.hero-mmiv-original{min-height:auto!important}
    .hero.hero-mmiv-original .hero-shell{padding:118px 0 58px!important;min-height:auto!important;align-items:flex-start!important}
    .hero.hero-mmiv-original .hero-copy{max-width:none!important;width:100%}
    .hero.hero-mmiv-original .eyebrow{font-size:.62rem!important;line-height:1.45!important;letter-spacing:.18em!important;margin:18px 0 18px!important}
    .hero.hero-mmiv-original h1{font-size:clamp(2.8rem,13.2vw,3.6rem)!important;line-height:.98!important;margin-bottom:22px!important}
    .hero.hero-mmiv-original .lead{font-size:1rem!important;line-height:1.55!important;margin-bottom:0!important}
    .mobile-social{display:flex;gap:8px;margin:0 0 12px;flex-wrap:wrap}
    .mobile-social a{text-decoration:none}
    .mobile-social .social-icon{width:36px;height:36px;box-shadow:none}
    .mobile-social a:nth-child(1) .social-icon{background:linear-gradient(135deg,#f9ce34 0%,#ee2a7b 45%,#6228d7 100%)}
    .mobile-social a:nth-child(2) .social-icon{background:#1877f2}
    .mobile-social a:nth-child(3) .social-icon{background:#97258f}
    .mobile-social a:nth-child(4) .social-icon,.mobile-social a:nth-child(5) .social-icon{background:#20b85a}
    .mobile-social svg{width:18px;height:18px}
    .hero.hero-mmiv-original .actions{margin-top:28px!important;display:grid!important;grid-template-columns:1fr!important;gap:12px!important;max-width:310px!important}
    .hero.hero-mmiv-original .btn,.hero.hero-mmiv-original .btn-secondary{width:100%!important;justify-content:center!important;text-align:center!important;padding:14px 16px!important}
    .hero.hero-mmiv-original .location-note{font-size:.56rem!important;right:14px!important;bottom:12px!important}
  }
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
