
document.addEventListener('DOMContentLoaded', function() {
  // Tab functionality
  const tabTriggers = document.querySelectorAll('.tab-trigger');
  const tabContents = document.querySelectorAll('.tab-content');
  
  tabTriggers.forEach(trigger => {
    trigger.addEventListener('click', function() {
      const tabId = this.dataset.tab;
      
      // Remove active class from all triggers and tabs
      tabTriggers.forEach(t => t.classList.remove('active'));
      tabContents.forEach(t => t.classList.remove('active'));
      
      // Add active class to current trigger and tab
      this.classList.add('active');
      document.getElementById(tabId).classList.add('active');
    });
  });
  
  // Appointment view toggle
  const viewButtons = document.querySelectorAll('.view-btn');
  const viewContents = document.querySelectorAll('.view-content');
  
  viewButtons.forEach(button => {
    button.addEventListener('click', function() {
      const viewId = this.dataset.view + '-view';
      
      // Remove active class from all buttons and contents
      viewButtons.forEach(b => b.classList.remove('active'));
      viewContents.forEach(c => c.classList.remove('active'));
      
      // Add active class to current button and content
      this.classList.add('active');
      document.getElementById(viewId).classList.add('active');
    });
  });
  
  // Prescription filter
  const prescriptionFilters = document.querySelectorAll('.filter-btn');
  const prescriptionRows = document.querySelectorAll('#prescriptions tbody tr');
  
  if (prescriptionFilters.length > 0) {
    prescriptionFilters.forEach(filter => {
      filter.addEventListener('click', function() {
        const filterValue = this.dataset.filter;
        
        // Remove active class from all filters
        prescriptionFilters.forEach(f => f.classList.remove('active'));
        
        // Add active class to current filter
        this.classList.add('active');
        
        if (filterValue === 'all') {
          prescriptionRows.forEach(row => row.style.display = '');
        } else if (filterValue === 'active') {
          prescriptionRows.forEach(row => {
            const status = row.querySelector('td:nth-child(7) .badge').innerText;
            row.style.display = status === 'Active' ? '' : 'none';
          });
        } else if (filterValue === 'expired') {
          prescriptionRows.forEach(row => {
            const status = row.querySelector('td:nth-child(7) .badge').innerText;
            row.style.display = status === 'Expired' ? '' : 'none';
          });
        }
      });
    });
  }
  
  // Medical Records - Patient selection
  const patientItems = document.querySelectorAll('.patient-item');
  const noPatientSelected = document.getElementById('no-patient-selected');
  const patientRecords = document.getElementById('patient-records');
  const recordsTitle = document.getElementById('records-title');
  const recordsTableBody = document.getElementById('records-table-body');
  
  if (patientItems.length > 0) {
    // Medical records data
    const medicalRecords = [
      { 
        id: 1, 
        patientId: 1,
        type: "Lab Results", 
        description: "Blood work - Complete Blood Count", 
        date: "June 15, 2023",
        doctor: "Dr. Sarah Wilson"
      },
      { 
        id: 2, 
        patientId: 1,
        type: "Radiology", 
        description: "Chest X-Ray", 
        date: "June 10, 2023",
        doctor: "Dr. John Miller"
      },
      { 
        id: 3, 
        patientId: 2,
        type: "Progress Note", 
        description: "Follow-up for chest pain", 
        date: "July 2, 2023",
        doctor: "Dr. Sarah Wilson"
      },
      { 
        id: 4, 
        patientId: 2,
        type: "Consultation", 
        description: "Cardiology Consultation", 
        date: "June 28, 2023",
        doctor: "Dr. Rebecca Chen"
      },
      { 
        id: 5, 
        patientId: 3,
        type: "Lab Results", 
        description: "Diabetes Monitoring - HbA1c", 
        date: "May 22, 2023",
        doctor: "Dr. Sarah Wilson"
      },
      { 
        id: 6, 
        patientId: 4,
        type: "Progress Note", 
        description: "Initial consultation", 
        date: "April 10, 2023",
        doctor: "Dr. Sarah Wilson"
      }
    ];
    
    patientItems.forEach(item => {
      item.addEventListener('click', function() {
        const patientId = parseInt(this.dataset.id);
        const patientName = this.querySelector('h3').innerText;
        
        // Remove active class from all patient items
        patientItems.forEach(p => p.classList.remove('bg-blue-50'));
        
        // Add active class to current patient item
        this.classList.add('bg-blue-50');
        
        // Update records title
        recordsTitle.innerText = `Records for ${patientName}`;
        
        // Filter and display patient records
        const patientRecordData = medicalRecords.filter(record => record.patientId === patientId);
        
        if (patientRecordData.length > 0) {
          // Hide no selection message and show records table
          noPatientSelected.classList.add('hidden');
          patientRecords.classList.remove('hidden');
          
          // Clear and populate records table
          recordsTableBody.innerHTML = '';
          
          patientRecordData.forEach(record => {
            const row = document.createElement('tr');
            row.innerHTML = `
              <td class="font-medium">${record.type}</td>
              <td>${record.description}</td>
              <td>${record.date}</td>
              <td>${record.doctor}</td>
              <td class="text-right">
                <div class="flex justify-end gap-2">
                  <button class="btn-sm btn-outline">
                    <i class="fas fa-eye"></i>
                    View
                  </button>
                  <button class="btn-sm btn-outline">
                    <i class="fas fa-download"></i>
                    Download
                  </button>
                </div>
              </td>
            `;
            recordsTableBody.appendChild(row);
          });
        } else {
          // Show no records message
          noPatientSelected.classList.remove('hidden');
          patientRecords.classList.add('hidden');
          noPatientSelected.querySelector('h3').innerText = 'No Records Found';
          noPatientSelected.querySelector('p').innerText = 'This patient has no medical records yet';
        }
      });
    });
  }
  
  // Toggle dropdown on mobile
  const dropdownToggle = document.querySelector('.dropdown button');
  if (dropdownToggle) {
    dropdownToggle.addEventListener('click', function(e) {
      e.stopPropagation();
      const dropdown = this.parentElement;
      dropdown.classList.toggle('open');
    });
    
    // Close dropdown when clicking outside
    document.addEventListener('click', function() {
      const openDropdowns = document.querySelectorAll('.dropdown.open');
      openDropdowns.forEach(dropdown => dropdown.classList.remove('open'));
    });
  }
});
