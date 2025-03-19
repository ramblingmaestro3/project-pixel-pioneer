
document.addEventListener('DOMContentLoaded', function() {
  // Mobile menu toggle
  const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
  const mobileNav = document.querySelector('.mobile-nav');
  
  if (mobileMenuBtn && mobileNav) {
    mobileMenuBtn.addEventListener('click', function() {
      this.classList.toggle('active');
      mobileNav.classList.toggle('active');
    });
  }
  
  // Navigation
  const navLinks = document.querySelectorAll('a[href^="#"]');
  const sections = document.querySelectorAll('.section');
  
  navLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      
      // Remove active class from all links
      navLinks.forEach(link => link.classList.remove('active'));
      
      // Add active class to clicked link
      this.classList.add('active');
      
      // Hide all sections
      sections.forEach(section => section.classList.remove('active'));
      
      // Show corresponding section
      const targetId = this.getAttribute('href').substring(1);
      const targetSection = document.getElementById(targetId);
      if (targetSection) {
        targetSection.classList.add('active');
      }
      
      // Close mobile menu if open
      if (mobileMenuBtn && mobileNav) {
        mobileMenuBtn.classList.remove('active');
        mobileNav.classList.remove('active');
      }
      
      // Scroll to top
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  });
  
  // Filter buttons
  const filterBtns = document.querySelectorAll('.filter-btn');
  
  filterBtns.forEach(btn => {
    btn.addEventListener('click', function() {
      // Remove active class from all buttons in the same filter group
      const filterGroup = this.closest('.filters');
      if (filterGroup) {
        filterGroup.querySelectorAll('.filter-btn').forEach(btn => {
          btn.classList.remove('active');
        });
      }
      
      // Add active class to clicked button
      this.classList.add('active');
      
      // Here you would add logic to filter content based on selection
      // For now, this is just a UI demonstration
    });
  });
  
  // New appointment button
  const newAppointmentBtn = document.querySelector('.new-btn');
  
  if (newAppointmentBtn) {
    newAppointmentBtn.addEventListener('click', function() {
      alert('New appointment feature will be implemented soon!');
    });
  }
  
  // Prescription refill/renew buttons
  const refillButtons = document.querySelectorAll('.refill-btn, .renew-btn');
  
  refillButtons.forEach(button => {
    button.addEventListener('click', function() {
      const action = this.classList.contains('refill-btn') ? 'refill' : 'renewal';
      const medicationName = this.closest('.prescription-card').querySelector('h3').textContent;
      alert(`Your ${action} request for ${medicationName} has been submitted. We'll notify you when it's ready.`);
    });
  });
  
  // Medical record view/download buttons
  const recordButtons = document.querySelectorAll('.view-btn, .download-btn');
  
  recordButtons.forEach(button => {
    button.addEventListener('click', function() {
      const action = this.classList.contains('view-btn') ? 'view' : 'download';
      const recordName = this.closest('.record-card').querySelector('h3').textContent;
      
      if (action === 'view') {
        alert(`Viewing ${recordName}. In a real application, this would open a detailed view.`);
      } else {
        alert(`Downloading ${recordName}. In a real application, this would start a file download.`);
      }
    });
  });
  
  // Profile edit buttons
  const editButtons = document.querySelectorAll('.edit-btn');
  
  editButtons.forEach(button => {
    button.addEventListener('click', function() {
      const sectionName = this.closest('.profile-section').querySelector('h4').textContent;
      alert(`Editing ${sectionName}. In a real application, this would open an edit form.`);
    });
  });
  
  // Profile action buttons
  const actionButtons = document.querySelectorAll('.action-btn');
  
  actionButtons.forEach(button => {
    button.addEventListener('click', function() {
      const actionText = this.textContent.trim();
      
      if (actionText.includes('Log Out')) {
        alert('Logging out. In a real application, this would log you out and redirect to the login page.');
      } else {
        alert(`Opening ${actionText} page. In a real application, this would navigate to the ${actionText} page.`);
      }
    });
  });
  
  // Appointment actions
  const appointmentButtons = document.querySelectorAll('.reschedule-btn, .cancel-btn');
  
  appointmentButtons.forEach(button => {
    button.addEventListener('click', function() {
      const action = this.classList.contains('reschedule-btn') ? 'reschedule' : 'cancel';
      const doctorName = this.closest('.appointment-card').querySelector('h3').textContent;
      
      if (action === 'reschedule') {
        alert(`Rescheduling appointment with ${doctorName}. In a real application, this would open a reschedule form.`);
      } else {
        alert(`Cancelling appointment with ${doctorName}. In a real application, this would confirm cancellation.`);
      }
    });
  });
});
