
  const words = ["RODRIGUEZ-VOITAN Azaria",];
  const typingElement = document.getElementById('typing-text');
  const cursor = document.getElementById('cursor');

  let wordIndex = 0;
  let charIndex = 0;
  let isDeleting = false;

  function type() {
    const currentWord = words[wordIndex];

    if (isDeleting) {
      typingElement.textContent = currentWord.substring(0, charIndex - 1);
      charIndex--;
    } else {
      typingElement.textContent = currentWord.substring(0, charIndex + 1);
      charIndex++;
    }

    let typeSpeed = isDeleting? 50 : 100; // Efface plus vite qu’il écrit

    if (!isDeleting && charIndex === currentWord.length) {
      typeSpeed = 2000; // Pause 2s à la fin du mot
      isDeleting = true;
    } else if (isDeleting && charIndex === 0) {
      isDeleting = false;
      wordIndex = (wordIndex + 1) % words.length; // Passe au mot suivant
      typeSpeed = 500; // Pause avant d’écrire le nouveau mot
    }

    setTimeout(type, typeSpeed);
  }

  // Cache le curseur à la fin si tu veux qu’il s’arrête
  // cursor.style.display = 'none'; à mettre après la dernière phrase

  document.addEventListener('DOMContentLoaded', () => {
    setTimeout(type, 1000); // Attend 1s avant de commencer
  });

  const burgerBtn = document.getElementById('burger-btn');
  const mobileMenu = document.getElementById('mobile-menu');
  const iconOpen = document.getElementById('icon-open');
  const iconClose = document.getElementById('icon-close');
  const mobileLinks = document.querySelectorAll('.mobile-link');
  const navLinks = document.querySelectorAll('.nav-link,.mobile-link');

  // Toggle menu mobile
  burgerBtn.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
    iconOpen.classList.toggle('hidden');
    iconClose.classList.toggle('hidden');
  });

  // Ferme le menu quand on clique un lien
  mobileLinks.forEach(link => {
    link.addEventListener('click', () => {
      mobileMenu.classList.add('hidden');
      iconOpen.classList.remove('hidden');
      iconClose.classList.add('hidden');
    });
  });

  // Scroll smooth pour tous les liens #
  navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const targetId = link.getAttribute('href');
      const targetSection = document.querySelector(targetId);
      if (targetSection) {
        const offsetTop = targetSection.offsetTop - 64; // 64px = hauteur navbar
        window.scrollTo({
          top: offsetTop,
          behavior: 'smooth'
        });
      }
    });
  });

  // Lien actif au scroll - optionnel mais ça fait très pro
  const sections = document.querySelectorAll('section[id]');
  window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(section => {
      const sectionTop = section.offsetTop - 100;
      if (scrollY >= sectionTop) {
        current = section.getAttribute('id');
      }
    });

    document.querySelectorAll('.nav-link').forEach(link => {
      link.classList.remove('text-indigo-400');
      link.classList.add('text-gray-300');
      if (link.getAttribute('href') === `#${current}`) {
        link.classList.remove('text-gray-300');
        link.classList.add('text-indigo-400');
      }
    });
  });

  function plier2() {
    document.getElementById("prixresponse2").style.display = "none";
    document.getElementById("plier2").style.display = "none";
    document.getElementById("deplier2").style.display = "block";
  }
  function deplier2() {
    document.getElementById("prixresponse2").style.display = "block";
    document.getElementById("deplier2").style.display = "none";
    document.getElementById("plier2").style.display = "block";
  }

  function plier1() {
    document.getElementById("prixresponse1").style.display = "none";
    document.getElementById("plier1").style.display = "none";
    document.getElementById("deplier1").style.display = "block";
  }
  function deplier1() {
    document.getElementById("prixresponse1").style.display = "block";
    document.getElementById("deplier1").style.display = "none";
    document.getElementById("plier1").style.display = "block";
  }

  function plier3() {
    document.getElementById("prixresponse3").style.display = "none";
    document.getElementById("plier3").style.display = "none";
    document.getElementById("deplier3").style.display = "block";
  }
  function deplier3() {
    document.getElementById("prixresponse3").style.display = "block";
    document.getElementById("deplier3").style.display = "none";
    document.getElementById("plier3").style.display = "block";
  }

  function plier4() {
    document.getElementById("prixresponse4").style.display = "none";
    document.getElementById("plier4").style.display = "none";
    document.getElementById("deplier4").style.display = "block";
  }
  function deplier4() {
    document.getElementById("prixresponse4").style.display = "block";
    document.getElementById("deplier4").style.display = "none";
    document.getElementById("plier4").style.display = "block";
  }

  function plier5() {
    document.getElementById("prixresponse5").style.display = "none";
    document.getElementById("plier5").style.display = "none";
    document.getElementById("deplier5").style.display = "block";
  }
  function deplier5() {
    document.getElementById("prixresponse5").style.display = "block";
    document.getElementById("deplier5").style.display = "none";
    document.getElementById("plier5").style.display = "block";
  }
