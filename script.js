/**
 * GENREV ABRAHAM V. ORDONIO - PORTFOLIO INTERACTION ENGINE
 * Handles project filtering, interactive case study modal, CV modal,
 * copy-to-clipboard toast notifications, and dynamic navigation.
 */

document.addEventListener('DOMContentLoaded', () => {
  // Project Case Study Data Store
  const projectsData = {
    merchmart: {
      title: 'QCU MerchMart – E-Commerce System',
      role: 'UI/UX Designer',
      year: '2024',
      category: 'E-Commerce Platform',
      image: 'assets/merchmart.jpg',
      overview: 'A digital university merchandise marketplace tailored for Quezon City University students, faculty, and alumni. The project streamlines campus gear procurement with an intuitive browsing catalog, real-time inventory cues, and an accessible checkout flow.',
      challenge: 'Existing merchandise ordering for university events was handled through informal paper forms and fragmented social media messaging, causing order inaccuracies, long queues, and lost payment records.',
      solution: 'Designed an end-to-end e-commerce experience in Figma. Created responsive product cards with variant pickers (sizes, colors), an interactive fly-out cart drawer, and a streamlined multi-step checkout with student ID verification.',
      keyFeatures: [
        'Modular merchandise catalog categorized by apparel, academic supplies, and limited edition items.',
        'Interactive Figma prototype with micro-animations for adding items to the cart and real-time total calculation.',
        'High-contrast accessible color palette complying with WCAG guidelines for effortless readability.',
        'Designed complete user flows from landing screen to order confirmation and order tracking.'
      ],
      tools: ['Figma', 'User Flow Mapping', 'Design Systems', 'Interactive Prototyping', 'WCAG Accessibility']
    },

    vetclinic: {
      title: 'Dr. Rosario Veterinary Clinic & Pet Grooming Center',
      role: 'UI/UX Designer',
      year: '2025',
      category: 'Healthcare & Clinic ERP',
      image: 'assets/vetclinic.jpg',
      overview: 'An integrated clinical and grooming management interface created to handle pet medical records, doctor appointment schedules, preventive vaccination trackers, and retail grooming inventory.',
      challenge: 'Veterinary staff struggled with overlapping appointment times and disorganized paper medical history folders, leading to delays in administering emergency treatments and pet vaccinations.',
      solution: 'Developed a comprehensive dark-mode dashboard tailored for clinical environments. Features an interactive appointment calendar, pet patient cards with quick status indicators, and categorized service menus for pet grooming.',
      keyFeatures: [
        'Time-slotted calendar view showing doctor availability, ongoing treatments, and upcoming consultations.',
        'Detailed pet profile modals displaying breed, age, vaccine history, and previous prescription notes.',
        'Grooming service catalog with estimated duration, pricing, and specialized care notes.',
        'Designed intuitive information architecture that minimizes clicks for busy veterinary technicians.'
      ],
      tools: ['Figma', 'Information Architecture', 'Dashboard UX', 'Component Variants', 'Healthcare Workflows']
    },

    questplanner: {
      title: 'QuestPlanner: A Gamified System for Planning',
      role: 'UI/UX Designer',
      year: '2025',
      category: 'Gamified Productivity',
      image: 'assets/questplanner.jpg',
      overview: 'A productivity application that transforms mundane task management into an engaging RPG adventure. Users conquer daily obligations to level up their avatar, earn XP, unlock achievements, and sustain productivity streaks.',
      challenge: 'Standard to-do list applications often suffer from high abandonment rates because they feel chore-like and lack intrinsic motivational feedback loops.',
      solution: 'Implemented gamification psychology into task planning. Designed custom visual assets, quest difficulty badges, dynamic progress bars, and streak multiplier mechanics to turn productivity into a rewarding journey.',
      keyFeatures: [
        'Daily Quest board dividing tasks into Easy, Medium, and Hard tiers with proportional XP and Coin rewards.',
        'Animated level progression meter and collectible achievement badges (Early Bird, Goal Getter, Streak Master).',
        'Weekly streak flame tracker encouraging daily habit formation.',
        'Boss Quest milestone tracker for breaking down large academic and personal projects into achievable sub-tasks.'
      ],
      tools: ['Figma', 'Gamification Mechanics', 'Micro-Interactions', 'Visual Design', 'User Engagement']
    },

    auditorium: {
      title: 'QCU Auditorium Seat Reservation System',
      role: 'UI/UX Designer',
      year: '2026',
      category: 'Event Ticketing & Reservation',
      image: 'assets/auditorium.jpg',
      overview: 'A modern seat reservation platform designed for Quezon City University ceremonies, theatrical plays, and conferences, featuring a movie theater-style interactive seating layout.',
      challenge: 'University events experienced crowding, double-booked seats, and long entry lines due to the lack of an assigned seating system for large auditorium gatherings.',
      solution: 'Created an interactive visual floor plan of the QCU Auditorium in Figma. Users can see the stage perspective, select their preferred row and seat with color-coded status badges, and generate a digital event pass.',
      keyFeatures: [
        'Tiered interactive auditorium map with distinct visual states: Available (Green), Reserved (Orange), and Selected (Cyan).',
        'Real-time ticket summary sidebar updating total price, seat designations, and event details instantaneously.',
        'Responsive layout optimized for both desktop event organizers and mobile student attendees.',
        'Streamlined 3-step checkout flow: Seat Selection → Attendee Details → Digital Pass Generation.'
      ],
      tools: ['Figma', 'Interactive Seating Map', 'Event UX', 'Color State System', 'Prototype Simulation']
    }
  };

  // 1. Mobile Menu Toggle
  const menuToggle = document.getElementById('menu-toggle');
  const navLinks = document.getElementById('nav-links');

  if (menuToggle && navLinks) {
    menuToggle.addEventListener('click', () => {
      navLinks.classList.toggle('open');
      const isOpen = navLinks.classList.contains('open');
      menuToggle.innerHTML = isOpen ? '<i class="fa-solid fa-xmark"></i>' : '<i class="fa-solid fa-bars"></i>';
    });

    // Close menu when clicking nav link
    navLinks.querySelectorAll('.nav-link').forEach(link => {
      link.addEventListener('click', () => {
        navLinks.classList.remove('open');
        menuToggle.innerHTML = '<i class="fa-solid fa-bars"></i>';
      });
    });
  }

  // 2. Active Link Highlighting on Scroll
  const sections = document.querySelectorAll('section[id]');
  const navLinkItems = document.querySelectorAll('.nav-link');

  const highlightNavOnScroll = () => {
    const scrollY = window.pageYOffset;

    sections.forEach(current => {
      const sectionHeight = current.offsetHeight;
      const sectionTop = current.offsetTop - 120;
      const sectionId = current.getAttribute('id');

      if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
        navLinkItems.forEach(link => {
          link.classList.remove('active');
          if (link.getAttribute('href') === `#${sectionId}`) {
            link.classList.add('active');
          }
        });
      }
    });
  };

  window.addEventListener('scroll', highlightNavOnScroll);

  // 3. Project Filtering System
  const filterBtns = document.querySelectorAll('.filter-btn');
  const projectCards = document.querySelectorAll('.project-card');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filterValue = btn.getAttribute('data-filter');

      projectCards.forEach(card => {
        const cardCategory = card.getAttribute('data-category');

        if (filterValue === 'all' || cardCategory === filterValue) {
          card.style.display = 'flex';
          setTimeout(() => {
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
          }, 20);
        } else {
          card.style.opacity = '0';
          card.style.transform = 'translateY(15px)';
          setTimeout(() => {
            card.style.display = 'none';
          }, 200);
        }
      });
    });
  });

  // 4. Project Case Study Modal
  const projectModal = document.getElementById('project-modal');
  const modalCloseBtn = document.getElementById('modal-close-btn');
  const modalContent = document.getElementById('modal-dynamic-content');
  const viewDetailBtns = document.querySelectorAll('.view-details-btn');

  const openProjectModal = (projectId) => {
    const data = projectsData[projectId];
    if (!data) return;

    modalContent.innerHTML = `
      <img src="${data.image}" alt="${data.title}" class="modal-project-img">
      <div class="modal-project-meta">
        <span><i class="fa-solid fa-layer-group"></i> ${data.category}</span>
        <span>•</span>
        <span><i class="fa-regular fa-calendar"></i> ${data.year}</span>
        <span>•</span>
        <span><i class="fa-solid fa-id-badge"></i> ${data.role}</span>
      </div>

      <h2 class="modal-project-title">${data.title}</h2>
      <p style="color: var(--text-secondary); font-size: 1.05rem; line-height: 1.7; margin-bottom: 1.5rem;">
        ${data.overview}
      </p>

      <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1.5rem; margin-bottom: 1.5rem;">
        <div style="background: rgba(239, 68, 68, 0.05); border: 1px solid rgba(239, 68, 68, 0.2); padding: 1.25rem; border-radius: var(--radius-md);">
          <h4 style="color: #f87171; margin-bottom: 0.5rem; font-size: 0.95rem; font-weight: 700;">
            <i class="fa-solid fa-triangle-exclamation"></i> The Problem
          </h4>
          <p style="color: var(--text-secondary); font-size: 0.88rem; line-height: 1.5;">${data.challenge}</p>
        </div>

        <div style="background: rgba(16, 185, 129, 0.05); border: 1px solid rgba(16, 185, 129, 0.2); padding: 1.25rem; border-radius: var(--radius-md);">
          <h4 style="color: #34d399; margin-bottom: 0.5rem; font-size: 0.95rem; font-weight: 700;">
            <i class="fa-solid fa-circle-check"></i> The UX Solution
          </h4>
          <p style="color: var(--text-secondary); font-size: 0.88rem; line-height: 1.5;">${data.solution}</p>
        </div>
      </div>

      <h3 class="modal-section-title">Key Deliverables & Innovations</h3>
      <ul class="modal-bullets">
        ${data.keyFeatures.map(item => `<li><i class="fa-solid fa-check"></i><span>${item}</span></li>`).join('')}
      </ul>

      <h3 class="modal-section-title" style="margin-top: 1.75rem;">Tools & Methodologies</h3>
      <div class="project-tech-tags" style="margin-top: 0.5rem;">
        ${data.tools.map(tool => `<span>${tool}</span>`).join('')}
      </div>

      <div style="margin-top: 2rem; display: flex; gap: 1rem;">
        <button class="btn btn-primary btn-sm" onclick="showToast('Figma prototype preview linked to case study.')">
          <i class="fa-brands fa-figma"></i>
          <span>View in Figma Workspace</span>
        </button>
        <button class="btn btn-outline btn-sm" id="close-modal-inside-btn">
          <span>Close Case Study</span>
        </button>
      </div>
    `;

    projectModal.classList.add('open');
    projectModal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';

    // Internal close button listener
    const closeInsideBtn = document.getElementById('close-modal-inside-btn');
    if (closeInsideBtn) {
      closeInsideBtn.addEventListener('click', closeProjectModal);
    }
  };

  const closeProjectModal = () => {
    projectModal.classList.remove('open');
    projectModal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  };

  viewDetailBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      const projectId = btn.getAttribute('data-project');
      openProjectModal(projectId);
    });
  });

  if (modalCloseBtn) {
    modalCloseBtn.addEventListener('click', closeProjectModal);
  }

  // Close modal when clicking outside content
  projectModal.addEventListener('click', (e) => {
    if (e.target === projectModal) {
      closeProjectModal();
    }
  });

  // 5. Interactive CV Modal
  const cvModal = document.getElementById('cv-modal');
  const openResumeBtn = document.getElementById('open-resume-btn');
  const footerResumeBtn = document.getElementById('footer-resume-btn');
  const cvCloseBtn = document.getElementById('cv-modal-close-btn');

  const openCvModal = () => {
    cvModal.classList.add('open');
    cvModal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  };

  const closeCvModal = () => {
    cvModal.classList.remove('open');
    cvModal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  };

  if (openResumeBtn) openResumeBtn.addEventListener('click', openCvModal);
  if (footerResumeBtn) footerResumeBtn.addEventListener('click', openCvModal);
  if (cvCloseBtn) cvCloseBtn.addEventListener('click', closeCvModal);

  cvModal.addEventListener('click', (e) => {
    if (e.target === cvModal) {
      closeCvModal();
    }
  });

  // Global Escape Key Listener for Modals
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      if (projectModal.classList.contains('open')) closeProjectModal();
      if (cvModal.classList.contains('open')) closeCvModal();
    }
  });

  // 6. Toast Notification Engine
  const toastContainer = document.getElementById('toast-container');

  window.showToast = (message, icon = 'fa-check') => {
    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.innerHTML = `
      <i class="fa-solid ${icon}"></i>
      <span>${message}</span>
    `;

    toastContainer.appendChild(toast);

    setTimeout(() => {
      toast.style.opacity = '0';
      toast.style.transform = 'translateY(10px)';
      toast.style.transition = 'all 0.3s ease';
      setTimeout(() => toast.remove(), 300);
    }, 3200);
  };

  // 7. Copy-to-Clipboard Functionality
  const copyBtns = document.querySelectorAll('.copy-action-btn, #copy-email-hero-btn');

  copyBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const textToCopy = btn.getAttribute('data-copy') || btn.getAttribute('data-email');
      if (!textToCopy) return;

      navigator.clipboard.writeText(textToCopy).then(() => {
        showToast(`Copied "${textToCopy}" to clipboard!`, 'fa-copy');
      }).catch(() => {
        // Fallback
        const textarea = document.createElement('textarea');
        textarea.value = textToCopy;
        document.body.appendChild(textarea);
        textarea.select();
        document.execCommand('copy');
        document.body.removeChild(textarea);
        showToast(`Copied "${textToCopy}" to clipboard!`, 'fa-copy');
      });
    });
  });

  // 8. Contact Form Interactive Submission Handler
  const contactForm = document.getElementById('contact-form');
  const formFeedback = document.getElementById('form-feedback');

  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();

      const name = document.getElementById('form-name').value.trim();
      const email = document.getElementById('form-email').value.trim();
      const subject = document.getElementById('form-subject').value;
      const message = document.getElementById('form-message').value.trim();

      if (!name || !email || !subject || !message) {
        formFeedback.className = 'form-feedback error';
        formFeedback.textContent = 'Please fill in all required fields.';
        return;
      }

      // Simulate sending
      const submitBtn = document.getElementById('submit-form-btn');
      const originalText = submitBtn.innerHTML;
      submitBtn.disabled = true;
      submitBtn.innerHTML = '<i class="fa-solid fa-spinner fa-spin"></i> <span>Sending...</span>';

      setTimeout(() => {
        submitBtn.disabled = false;
        submitBtn.innerHTML = originalText;
        contactForm.reset();

        formFeedback.className = 'form-feedback success';
        formFeedback.innerHTML = `<i class="fa-solid fa-circle-check"></i> Thank you, <strong>${name}</strong>! Your inquiry regarding <strong>${subject}</strong> has been logged. Genrev will respond shortly.`;

        showToast('Message sent successfully! Genrev has been notified.', 'fa-paper-plane');
      }, 1200);
    });
  }
});
