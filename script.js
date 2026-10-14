/**
<<<<<<< HEAD
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
    merchmart: {
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
=======
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
>>>>>>> 1958b90c05c5016cd971f0a17c28609282f3f707
    },

    vetclinic: {
      title: 'Dr. Rosario Veterinary Clinic & Pet Grooming Center',
      role: 'UI/UX Designer',
      year: '2025',
<<<<<<< HEAD
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
=======
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
>>>>>>> 1958b90c05c5016cd971f0a17c28609282f3f707
    },

    auditorium: {
      title: 'QCU Auditorium Seat Reservation System',
      role: 'UI/UX Designer',
      year: '2026',
<<<<<<< HEAD
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
=======
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
>>>>>>> 1958b90c05c5016cd971f0a17c28609282f3f707
          }
        });
      }
    });
  };

<<<<<<< HEAD
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
=======
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
>>>>>>> 1958b90c05c5016cd971f0a17c28609282f3f707
        }
      });
    });
  });

<<<<<<< HEAD
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
=======
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
>>>>>>> 1958b90c05c5016cd971f0a17c28609282f3f707
          <span>Close Case Study</span>
        </button>
      </div>
    `;

<<<<<<< HEAD
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
=======
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
>>>>>>> 1958b90c05c5016cd971f0a17c28609282f3f707
      closeCvModal();
    }
  });

<<<<<<< HEAD
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
=======
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
>>>>>>> 1958b90c05c5016cd971f0a17c28609282f3f707

  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();

<<<<<<< HEAD
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
=======
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
>>>>>>> 1958b90c05c5016cd971f0a17c28609282f3f707
    });
  }
});
