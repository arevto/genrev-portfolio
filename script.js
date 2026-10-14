/**
 * GENREV ABRAHAM V. ORDONIO — EDITORIAL PORTFOLIO 2026
 * Interactive Engine: Entry Curtain, Reading Bar, Editorial Drawer,
 * Project Filtering, Case Study Modal, CV Modal, Copy Engine, and Form Handling.
 */

document.addEventListener('DOMContentLoaded', () => {
  'use strict';

  /* --------------------------------------------------------------------------
     1. Detailed Case Studies Data Store (Verified Information)
     -------------------------------------------------------------------------- */
  const projectsData = {
    merchmargitt: {
      title: 'QCU MerchMart — E-Commerce System',
      role: 'UI/UX Designer',
      year: '2024',
      category: 'UI/UX Design · E-Commerce Platform · Figma',
      platform: 'Web & Mobile Figma Prototype',
      image: 'assets/merchmart.jpg',
      isBlueprint: false,
      overview: 'QCU MerchMart is a digital campus merchandise platform crafted for Quezon City University students, faculty, and alumni. The project streamlines university merchandise ordering with an intuitive catalog, real-time stock availability cues, and an accessible checkout flow.',
      problem: 'University merchandise and department uniforms were historically managed through informal paper sign-up sheets and fragmented messaging apps. This led to persistent inventory discrepancies, payment disputes, and long pickup queues during campus events.',
      solution: 'Conducted user interviews with QCU student leaders and campus staff to map out a frictionless shopping experience in Figma. Designed responsive product cards with variant selectors (sizes, colors, departments), an interactive cart drawer with live total calculation, and a multi-step checkout requiring student ID confirmation.',
      deliverables: [
        'Modular e-commerce catalog categorized into apparel, academic supplies, lanyards, and limited university editions.',
        'Interactive Figma prototype with realistic micro-animations for adding items to cart, counter updates, and variant toggling.',
        'High-contrast accessible color system meeting WCAG AA standards for readable typography on mobile and desktop.',
        'Complete end-to-end user flows from landing discovery to order confirmation and digital pickup voucher generation.'
      ],
      tools: ['Figma', 'UI/UX Design', 'User Flows', 'Prototyping', 'Design Systems', 'WCAG Accessibility']
    },

    vetclinic: {
      title: 'Dr. Rosario Veterinary Clinic & Pet Grooming Center',
      role: 'UI/UX Designer',
      year: '2025',
      category: 'UI/UX Design · Healthcare & Clinic ERP',
      platform: 'Clinic Management Dashboard',
      image: 'assets/vetclinic.jpg',
      isBlueprint: false,
      overview: 'A clinical management and pet grooming interface engineered to handle pet patient records, doctor consultations, vaccination schedules, grooming queues, and clinic inventory tracking in a single coherent workspace.',
      problem: 'Clinic staff relied on handwritten paper patient cards and fragmented calendar books. Overlapping appointments caused pet owner frustration, delayed emergency triage, and made it difficult to verify vaccination expiration dates quickly.',
      solution: 'Created an ergonomic dark-mode dashboard tailored for clinical environments. Developed an interactive calendar schedule with real-time status indicators, pet patient cards linking owner details with medical histories, and a grooming service menu with duration estimates.',
      deliverables: [
        'Comprehensive calendar schedule with time-slot management for veterinarians and grooming specialists.',
        'Detailed pet patient profile modal showing breed, age, vaccination log, allergy warnings, and previous prescription notes.',
        'Grooming service checkout and inventory tracking for clinical supplies and pet care merchandise.',
        'Optimized information hierarchy with high-contrast data tables, reducing search time for receptionists.'
      ],
      tools: ['Figma', 'Dashboard UX', 'Information Architecture', 'Component Variants', 'Healthcare Workflows']
    },

    questplanner: {
      title: 'QuestPlanner — A Gamified System for Planning',
      role: 'UI/UX Designer',
      year: '2025',
      category: 'UI/UX Design · Productivity · Gamification',
      platform: 'Gamified Task Management Web App',
      image: 'assets/questplanner.jpg',
      isBlueprint: false,
      overview: 'A productivity application that transforms everyday task management into an engaging RPG adventure. Users complete academic duties and personal habits to earn XP, level up their avatar, unlock collectible badges, and sustain daily streaks.',
      problem: 'Standard to-do list applications often suffer from high user abandonment rates because repetitive task logging feels like a chore, lacking intrinsic rewards or positive emotional feedback loops.',
      solution: 'Incorporated game design psychology into productivity planning. Designed quest difficulty tiers (Easy, Medium, Hard, Boss Quest) with proportional XP multipliers, visual achievement badges, and interactive celebration animations upon task completion.',
      deliverables: [
        'Daily Quest board with priority tags, estimated completion timers, and instant XP reward prompts.',
        'Visual avatar progression dashboard showing current level, XP progress bar, and earned trophy badges.',
        'Daily streak tracker with flame multipliers encouraging habit formation and academic accountability.',
        'Boss Quest breakdown tool allowing users to divide complex semester capstones into bite-sized missions.'
      ],
      tools: ['Figma', 'Gamification Mechanics', 'Micro-Interactions', 'Visual Design', 'Habit Psychology']
    },

    auditorium: {
      title: 'QCU Auditorium Seat Reservation System',
      role: 'UI/UX Designer',
      year: '2026',
      category: 'UI/UX Design · Event Ticketing & Reservation',
      platform: 'Interactive Event Reservation System',
      image: 'assets/auditorium.jpg',
      isBlueprint: false,
      overview: 'A specialized event booking interface designed for Quezon City University ceremonies, student theater productions, and academic conferences, featuring an interactive cinema-style seating map with live availability states.',
      problem: 'University auditorium events suffered from double bookings, seating disputes, and bottlenecked entry lines due to the absence of assigned seating and verified digital tickets for attendees.',
      solution: 'Created an interactive visual floor plan of the QCU Auditorium in Figma. Designed an intuitive stage perspective where users can select individual seats across orchestra and balcony sections, view color-coded availability, and generate instant digital event passes.',
      deliverables: [
        'Interactive tiered auditorium seating chart with distinct visual states: Available (Green), Reserved (Muted Gray), and Selected (Lime).',
        'Real-time ticket summary sidebar computing seat numbers, row designations, and total event pass quantities.',
        'Streamlined 3-step checkout workflow: Seat Selection → Student / Guest Verification → Digital Pass Generation.',
        'Mobile-responsive layout enabling students to select seats effortlessly on smartphones.'
      ],
      tools: ['Figma', 'Interactive Seating Map', 'Event UX', 'Color State System', 'Prototype Simulation']
    },

    capstore: {
      title: 'CapStore — Capstone Project Repository',
      role: 'System & UI Architect',
      year: '2026',
      category: 'Information Management System · Academic Project',
      platform: 'Academic Repository & Defense System',
      image: '',
      isBlueprint: true,
      overview: 'CapStore is an academic information management repository conceived to organize, archive, and manage capstone projects developed by 4th-year Quezon City University IT students. It provides a centralized digital index for research manuscripts, source code archives, faculty advisor feedback, and panel defense schedules.',
      problem: 'Graduating IT students and department faculty faced fragmented capstone submissions across scattered Google Drive links and printed binders. Past capstone projects were difficult to reference, resulting in duplicate research ideas and lost academic documentation.',
      solution: 'Architected a structured information management system blueprint. Defined relational MySQL data schemas for project categories, authors, panels, and manuscript versions, complemented by an intuitive search and filtering interface for students and professors.',
      deliverables: [
        'Structured repository architecture indexing projects by academic year, specialization (UI/UX, AI, Networks, Web), and advisor.',
        'Relational database schema blueprints in MySQL connecting student records, capstone files, evaluation rubrics, and defense schedules.',
        'Advanced search interface wireframe supporting keyword search, abstract previews, and tag filtering.',
        'Role-based access workflow blueprint distinguishing Student Researchers, Faculty Advisors, and Panel Chairs.'
      ],
      tools: ['Information Architecture', 'System Architecture', 'MySQL Schemas', 'Academic Workflows', 'UI Prototyping']
    }
  };

  /* --------------------------------------------------------------------------
     2. Entry Curtain Dismissal
     -------------------------------------------------------------------------- */
  const entryCurtain = document.getElementById('entry-curtain');
  if (entryCurtain) {
    const dismissCurtain = () => {
      entryCurtain.classList.add('hidden');
    };

    // Auto-dismiss after progress animation completes
    setTimeout(dismissCurtain, 1150);

    // Allow instant dismiss on click or keypress
    entryCurtain.addEventListener('click', dismissCurtain);
  }

  /* --------------------------------------------------------------------------
     3. Top Reading Progress Bar & Header Scroll Effect
     -------------------------------------------------------------------------- */
  const readingProgressBar = document.getElementById('reading-progress');
  const siteHeader = document.getElementById('site-header');

  const updateScrollState = () => {
    const scrollTop = window.scrollY || document.documentElement.scrollTop;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;

    // Update reading progress bar
    if (readingProgressBar && docHeight > 0) {
      const scrollPercent = (scrollTop / docHeight) * 100;
      readingProgressBar.style.width = `${Math.min(100, Math.max(0, scrollPercent))}%`;
    }

    // Update header background on scroll
    if (siteHeader) {
      if (scrollTop > 40) {
        siteHeader.classList.add('scrolled');
      } else {
        siteHeader.classList.remove('scrolled');
      }
    }
  };

  window.addEventListener('scroll', updateScrollState, { passive: true });
  updateScrollState();

  /* --------------------------------------------------------------------------
     4. Active Nav Highlighting & Section Sidebar Indicator
     -------------------------------------------------------------------------- */
  const trackedSections = document.querySelectorAll('section[id]');
  const desktopNavLinks = document.querySelectorAll('.desktop-nav .nav-item');
  const sidebarLinks = document.querySelectorAll('.sidebar-link');

  const highlightCurrentSection = () => {
    const scrollPos = window.scrollY + 200;

    trackedSections.forEach(section => {
      const secTop = section.offsetTop;
      const secHeight = section.offsetHeight;
      const secId = section.getAttribute('id');

      if (scrollPos >= secTop && scrollPos < secTop + secHeight) {
        // Desktop nav update
        desktopNavLinks.forEach(link => {
          if (link.getAttribute('href') === `#${secId}`) {
            link.classList.add('active');
          } else {
            link.classList.remove('active');
          }
        });

        // Sidebar indicator update
        sidebarLinks.forEach(link => {
          if (link.getAttribute('data-target') === secId) {
            link.classList.add('active');
          } else {
            link.classList.remove('active');
          }
        });
      }
    });
  };

  window.addEventListener('scroll', highlightCurrentSection, { passive: true });
  highlightCurrentSection();

  /* --------------------------------------------------------------------------
     5. Editorial Drawer Navigation Menu
     -------------------------------------------------------------------------- */
  const menuToggleBtn = document.getElementById('menu-toggle-btn');
  const editorialDrawer = document.getElementById('editorial-drawer');
  const drawerCloseBtn = document.getElementById('drawer-close-btn');
  const drawerLinks = document.querySelectorAll('.drawer-link, #drawer-logo-link');

  const openDrawer = () => {
    if (!editorialDrawer) return;
    editorialDrawer.classList.add('open');
    editorialDrawer.setAttribute('aria-hidden', 'false');
    menuToggleBtn.setAttribute('aria-expanded', 'true');
    document.body.style.overflow = 'hidden';
  };

  const closeDrawer = () => {
    if (!editorialDrawer) return;
    editorialDrawer.classList.remove('open');
    editorialDrawer.setAttribute('aria-hidden', 'true');
    menuToggleBtn.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
  };

  if (menuToggleBtn) menuToggleBtn.addEventListener('click', openDrawer);
  if (drawerCloseBtn) drawerCloseBtn.addEventListener('click', closeDrawer);

  drawerLinks.forEach(link => {
    link.addEventListener('click', () => {
      closeDrawer();
    });
  });

  /* --------------------------------------------------------------------------
     6. Project Showcase Filtering
     -------------------------------------------------------------------------- */
  const filterTabs = document.querySelectorAll('.filter-tab');
  const projectEntries = document.querySelectorAll('.project-entry');

  filterTabs.forEach(tab => {
    tab.addEventListener('click', () => {
      // Toggle active tab style
      filterTabs.forEach(t => {
        t.classList.remove('active');
        t.setAttribute('aria-selected', 'false');
      });
      tab.classList.add('active');
      tab.setAttribute('aria-selected', 'true');

      const filterVal = tab.getAttribute('data-filter');

      projectEntries.forEach(entry => {
        const entryCategory = entry.getAttribute('data-category');

        if (filterVal === 'all' || entryCategory === filterVal) {
          entry.style.display = 'grid';
          setTimeout(() => {
            entry.style.opacity = '1';
            entry.style.transform = 'translateY(0)';
          }, 30);
        } else {
          entry.style.opacity = '0';
          entry.style.transform = 'translateY(12px)';
          setTimeout(() => {
            entry.style.display = 'none';
          }, 240);
        }
      });
    });
  });

  /* --------------------------------------------------------------------------
     7. Case Study Modal Engine
     -------------------------------------------------------------------------- */
  const projectCaseModal = document.getElementById('project-case-modal');
  const modalDynamicBody = document.getElementById('modal-dynamic-body');
  const closeCaseModalBtn = document.getElementById('close-case-modal-btn');
  const openCaseStudyBtns = document.querySelectorAll('.open-case-study-btn');

  const openCaseStudy = (projectId) => {
    const data = projectsData[projectId];
    if (!data || !projectCaseModal || !modalDynamicBody) return;

    let mediaMarkup = '';
    if (data.isBlueprint) {
      mediaMarkup = `
        <div class="blueprint-card" style="border: 1px solid #1e2c3f; border-radius: 4px; margin-bottom: 1.75rem; min-height: 240px;">
          <div class="bp-grid-bg"></div>
          <div class="bp-header">
            <span class="bp-dot"></span><span class="bp-dot"></span><span class="bp-dot"></span>
            <span class="bp-title font-mono">CAPSTORE // SYSTEM REPOSITORY BLUEPRINT</span>
          </div>
          <div class="bp-wireframe">
            <div class="bp-sidebar-mock">
              <div class="bp-line short"></div>
              <div class="bp-line"></div>
              <div class="bp-line"></div>
            </div>
            <div class="bp-content-mock">
              <div class="bp-search-mock">
                <i class="fa-solid fa-magnifying-glass"></i>
                <span>Search repository by student ID, manuscript title, academic year...</span>
              </div>
              <div class="bp-cards-row">
                <div class="bp-mini-card">
                  <span class="bp-badge">IT-CAP-2026 // COMPLETED</span>
                  <div class="bp-card-line"></div>
                  <div class="bp-card-line short"></div>
                </div>
                <div class="bp-mini-card">
                  <span class="bp-badge">IT-CAP-2025 // ARCHIVED</span>
                  <div class="bp-card-line"></div>
                  <div class="bp-card-line short"></div>
                </div>
              </div>
            </div>
          </div>
          <div class="bp-tag-notice font-mono">
            [ ARCHITECTURAL WIREFRAME SPECIFICATION · QUEZON CITY UNIVERSITY ]
          </div>
        </div>
      `;
    } else {
      mediaMarkup = `<img src="${data.image}" alt="${data.title}" class="modal-project-img">`;
    }

    modalDynamicBody.innerHTML = `
      ${mediaMarkup}
      
      <div class="modal-meta-bar font-mono">
        <span class="highlight">${data.category}</span>
        <span>•</span>
        <span>${data.year}</span>
        <span>•</span>
        <span>${data.role}</span>
        <span>•</span>
        <span>${data.platform}</span>
      </div>

      <h2 class="modal-title" id="modal-case-title">${data.title}</h2>
      
      <p class="modal-overview">${data.overview}</p>

      <div class="modal-problem-solution-grid">
        <div class="modal-box-problem">
          <div class="mb-title">
            <i class="fa-solid fa-triangle-exclamation"></i>
            <span>THE CHALLENGE</span>
          </div>
          <p class="mb-text">${data.problem}</p>
        </div>

        <div class="modal-box-solution">
          <div class="mb-title">
            <i class="fa-solid fa-circle-check"></i>
            <span>THE DESIGN &amp; SYSTEM SOLUTION</span>
          </div>
          <p class="mb-text">${data.solution}</p>
        </div>
      </div>

      <h3 class="modal-section-title">Key Deliverables &amp; Design Decisions</h3>
      <ul class="modal-bullets">
        ${data.deliverables.map(item => `<li><i class="fa-solid fa-check"></i><span>${item}</span></li>`).join('')}
      </ul>

      <h3 class="modal-section-title">Methodologies &amp; Tools Utilized</h3>
      <div class="project-tech-tags" style="margin-top: 0.5rem; margin-bottom: 2rem;">
        ${data.tools.map(tool => `<span>${tool}</span>`).join('')}
      </div>

      <div style="display: flex; flex-wrap: wrap; gap: 0.85rem; padding-top: 1.5rem; border-top: 1px solid var(--border-hairline);">
        <button type="button" class="btn btn-primary btn-sm" id="modal-proto-btn">
          <i class="fa-brands fa-figma"></i>
          <span>Figma Prototype Preview</span>
        </button>
        <button type="button" class="btn btn-secondary btn-sm" id="modal-inner-close-btn">
          <span>Close Case Study</span>
        </button>
      </div>
    `;

    projectCaseModal.classList.add('open');
    projectCaseModal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';

    // Hook internal buttons
    const innerCloseBtn = document.getElementById('modal-inner-close-btn');
    if (innerCloseBtn) innerCloseBtn.addEventListener('click', closeCaseStudy);

    const protoBtn = document.getElementById('modal-proto-btn');
    if (protoBtn) {
      protoBtn.addEventListener('click', () => {
        showToast(`Viewing Figma design specs for ${data.title}`, 'fa-brands fa-figma');
      });
    }
  };

  const closeCaseStudy = () => {
    if (!projectCaseModal) return;
    projectCaseModal.classList.remove('open');
    projectCaseModal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  };

  openCaseStudyBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      const projId = btn.getAttribute('data-project');
      openCaseStudy(projId);
    });
  });

  if (closeCaseModalBtn) closeCaseModalBtn.addEventListener('click', closeCaseStudy);

  // Close when clicking modal backdrop
  projectCaseModal.addEventListener('click', (e) => {
    if (e.target === projectCaseModal) {
      closeCaseStudy();
    }
  });

  /* --------------------------------------------------------------------------
     8. CV Summary Modal Engine
     -------------------------------------------------------------------------- */
  const cvPreviewModal = document.getElementById('cv-preview-modal');
  const closeCvModalBtn = document.getElementById('close-cv-modal-btn');
  const cvTriggerBtns = [
    document.getElementById('open-cv-header-btn'),
    document.getElementById('hero-cv-btn'),
    document.getElementById('drawer-cv-btn'),
    document.getElementById('contact-open-cv-btn'),
    document.getElementById('footer-cv-btn')
  ].filter(Boolean);

  const openCvModal = () => {
    if (!cvPreviewModal) return;
    cvPreviewModal.classList.add('open');
    cvPreviewModal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
    closeDrawer(); // Close drawer if open
  };

  const closeCvModal = () => {
    if (!cvPreviewModal) return;
    cvPreviewModal.classList.remove('open');
    cvPreviewModal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  };

  cvTriggerBtns.forEach(btn => {
    btn.addEventListener('click', openCvModal);
  });

  if (closeCvModalBtn) closeCvModalBtn.addEventListener('click', closeCvModal);

  cvPreviewModal.addEventListener('click', (e) => {
    if (e.target === cvPreviewModal) {
      closeCvModal();
    }
  });

  /* --------------------------------------------------------------------------
     9. Global Escape Key Handler for All Modals
     -------------------------------------------------------------------------- */
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      if (projectCaseModal && projectCaseModal.classList.contains('open')) {
        closeCaseStudy();
      }
      if (cvPreviewModal && cvPreviewModal.classList.contains('open')) {
        closeCvModal();
      }
      if (editorialDrawer && editorialDrawer.classList.contains('open')) {
        closeDrawer();
      }
    }
  });

  /* --------------------------------------------------------------------------
     10. Toast Notification Engine
     -------------------------------------------------------------------------- */
  const toastHub = document.getElementById('toast-hub');

  window.showToast = (message, icon = 'fa-solid fa-check') => {
    if (!toastHub) return;

    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.innerHTML = `
      <i class="${icon}"></i>
      <span>${message}</span>
    `;

    toastHub.appendChild(toast);

    // Trigger enter animation
    requestAnimationFrame(() => {
      toast.classList.add('visible');
    });

    // Auto remove after delay
    setTimeout(() => {
      toast.classList.remove('visible');
      setTimeout(() => toast.remove(), 260);
    }, 3400);
  };

  /* --------------------------------------------------------------------------
     11. Copy to Clipboard Engine
     -------------------------------------------------------------------------- */
  const copyButtons = document.querySelectorAll('.copy-btn');

  copyButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const textToCopy = btn.getAttribute('data-copy');
      if (!textToCopy) return;

      const performCopy = () => {
        showToast(`Copied "${textToCopy}" to clipboard!`, 'fa-regular fa-copy');
      };

      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(textToCopy)
          .then(performCopy)
          .catch(() => fallbackCopy(textToCopy));
      } else {
        fallbackCopy(textToCopy);
      }
    });
  });

  const fallbackCopy = (text) => {
    const textarea = document.createElement('textarea');
    textarea.value = text;
    textarea.style.position = 'fixed';
    textarea.style.opacity = '0';
    document.body.appendChild(textarea);
    textarea.select();
    try {
      document.execCommand('copy');
      showToast(`Copied "${text}" to clipboard!`, 'fa-regular fa-copy');
    } catch (err) {
      showToast('Could not copy automatically. Please select manually.', 'fa-solid fa-triangle-exclamation');
    }
    document.body.removeChild(textarea);
  };

  /* --------------------------------------------------------------------------
     12. Contact Form Interactive Validation & Handling
     -------------------------------------------------------------------------- */
  const contactForm = document.getElementById('portfolio-contact-form');
  const formFeedbackAlert = document.getElementById('form-feedback-alert');

  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();

      // Reset errors
      document.querySelectorAll('.field-error').forEach(el => el.textContent = '');
      formFeedbackAlert.className = 'form-alert';
      formFeedbackAlert.textContent = '';

      const nameInput = document.getElementById('form-name');
      const emailInput = document.getElementById('form-email');
      const categoryInput = document.getElementById('form-category');
      const messageInput = document.getElementById('form-message');

      const name = nameInput.value.trim();
      const email = emailInput.value.trim();
      const category = categoryInput.value;
      const message = messageInput.value.trim();

      let hasError = false;

      // Validation
      if (!name) {
        document.getElementById('name-error').textContent = 'Please enter your full name.';
        hasError = true;
      }

      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!email) {
        document.getElementById('email-error').textContent = 'Please enter your email address.';
        hasError = true;
      } else if (!emailRegex.test(email)) {
        document.getElementById('email-error').textContent = 'Please provide a valid email format.';
        hasError = true;
      }

      if (!category) {
        document.getElementById('category-error').textContent = 'Please select an opportunity category.';
        hasError = true;
      }

      if (!message || message.length < 10) {
        document.getElementById('message-error').textContent = 'Please provide a brief message (min 10 characters).';
        hasError = true;
      }

      if (hasError) return;

      // Simulate sending with loading state
      const submitBtn = document.getElementById('form-submit-btn');
      const originalBtnHTML = submitBtn.innerHTML;
      submitBtn.disabled = true;
      submitBtn.innerHTML = '<i class="fa-solid fa-circle-notch fa-spin"></i> <span>Sending message...</span>';

      setTimeout(() => {
        submitBtn.disabled = false;
        submitBtn.innerHTML = originalBtnHTML;
        contactForm.reset();

        formFeedbackAlert.className = 'form-alert success';
        formFeedbackAlert.innerHTML = `
          <strong>Message sent successfully!</strong><br>
          Thank you, <strong>${name}</strong>. Your inquiry regarding <em>${category}</em> has been recorded. Genrev will review and follow up promptly.
        `;

        showToast('Message sent! Genrev has been notified.', 'fa-solid fa-paper-plane');
      }, 1100);
    });
  }

  /* --------------------------------------------------------------------------
     13. Back to Top Smooth Button
     -------------------------------------------------------------------------- */
  const backToTopBtn = document.getElementById('back-to-top-btn');
  if (backToTopBtn) {
    backToTopBtn.addEventListener('click', (e) => {
      e.preventDefault();
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  }
});
