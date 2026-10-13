/* ============================================================
   EzyHR — Dashboard JavaScript
   ============================================================ */

/* ============================================================
   SAMPLE DATA
   ============================================================ */
const COLORS = ['#5146E5','#7667F5','#39B8A5','#C0448F','#2563EB','#A05A28','#198B70','#D94B62','#B97817','#4B5563'];

let employees = [
  {id:'EMP-001',first:'Priya',last:'Sharma',dept:'Engineering',role:'Senior Engineer',email:'priya@ezyhr.demo',phone:'+91 98765 43210',join:'2022-03-15',salary:1800000,status:'Active'},
  {id:'EMP-002',first:'Rahul',last:'Kumar',dept:'Design',role:'UI/UX Lead',email:'rahul@ezyhr.demo',phone:'+91 87654 32109',join:'2021-08-01',salary:1500000,status:'On Leave'},
  {id:'EMP-003',first:'Anita',last:'Menon',dept:'Finance',role:'Finance Manager',email:'anita@ezyhr.demo',phone:'+91 76543 21098',join:'2020-01-10',salary:1900000,status:'Active'},
  {id:'EMP-004',first:'Dev',last:'Patel',dept:'Sales',role:'Account Executive',email:'dev@ezyhr.demo',phone:'+91 65432 10987',join:'2023-05-20',salary:1200000,status:'Active'},
  {id:'EMP-005',first:'Kavya',last:'Nair',dept:'HR',role:'HR Business Partner',email:'kavya@ezyhr.demo',phone:'+91 54321 09876',join:'2022-11-08',salary:1400000,status:'Active'},
  {id:'EMP-006',first:'Rohan',last:'Mehta',dept:'Engineering',role:'Backend Engineer',email:'rohan@ezyhr.demo',phone:'+91 43210 98765',join:'2023-01-15',salary:1350000,status:'Active'},
  {id:'EMP-007',first:'Sneha',last:'Joshi',dept:'Marketing',role:'Content Manager',email:'sneha@ezyhr.demo',phone:'+91 32109 87654',join:'2021-06-30',salary:1100000,status:'Active'},
  {id:'EMP-008',first:'Vikram',last:'Gupta',dept:'Operations',role:'Operations Manager',email:'vikram@ezyhr.demo',phone:'+91 21098 76543',join:'2019-09-25',salary:2100000,status:'Active'},
  {id:'EMP-009',first:'Divya',last:'Raj',dept:'Engineering',role:'QA Engineer',email:'divya@ezyhr.demo',phone:'+91 10987 65432',join:'2023-07-10',salary:1200000,status:'Active'},
  {id:'EMP-010',first:'Arun',last:'Singh',dept:'Sales',role:'Sales Manager',email:'arun@ezyhr.demo',phone:'+91 09876 54321',join:'2020-04-18',salary:1700000,status:'On Leave'},
];

let leaveRequests = [
  {id:1,emp:'Rahul Kumar',type:'Annual Leave',start:'2024-10-10',end:'2024-10-15',days:5,reason:'Family vacation',status:'Approved'},
  {id:2,emp:'Dev Patel',type:'Sick Leave',start:'2024-10-12',end:'2024-10-13',days:2,reason:'Fever',status:'Pending'},
  {id:3,emp:'Sneha Joshi',type:'Casual Leave',start:'2024-10-18',end:'2024-10-18',days:1,reason:'Personal work',status:'Pending'},
  {id:4,emp:'Arun Singh',type:'Annual Leave',start:'2024-10-20',end:'2024-10-25',days:6,reason:'Travel',status:'Pending'},
  {id:5,emp:'Anita Menon',type:'Sick Leave',start:'2024-09-05',end:'2024-09-06',days:2,reason:'Medical appointment',status:'Approved'},
  {id:6,emp:'Priya Sharma',type:'Casual Leave',start:'2024-09-15',end:'2024-09-15',days:1,reason:'Personal errand',status:'Approved'},
  {id:7,emp:'Rohan Mehta',type:'Annual Leave',start:'2024-08-01',end:'2024-08-07',days:7,reason:'Holiday',status:'Approved'},
  {id:8,emp:'Vikram Gupta',type:'Casual Leave',start:'2024-08-20',end:'2024-08-20',days:1,reason:'Personal work',status:'Approved'},
  {id:9,emp:'Kavya Nair',type:'Sick Leave',start:'2024-07-18',end:'2024-07-19',days:2,reason:'Illness',status:'Approved'},
  {id:10,emp:'Divya Raj',type:'Annual Leave',start:'2024-07-01',end:'2024-07-07',days:7,reason:'Vacation',status:'Rejected'},
];

let notifications = [
  {id:1,icon:'📋',iconBg:'var(--bg-lavender)',title:'Leave Request',desc:'Dev Patel submitted a sick leave request for Oct 12-13',time:'5 min ago',read:false},
  {id:2,icon:'🎉',iconBg:'var(--bg-teal)',title:'Work Anniversary',desc:'Vikram Gupta celebrates 5 years at EzyHR today',time:'1 hour ago',read:false},
  {id:3,icon:'⚠️',iconBg:'var(--warning-bg)',title:'Pending Approval',desc:'Sneha Joshi leave request awaiting your approval',time:'2 hours ago',read:false},
  {id:4,icon:'✅',iconBg:'var(--success-bg)',title:'Payroll Processed',desc:'October payroll processed successfully for 148 employees',time:'Yesterday',read:true},
  {id:5,icon:'👤',iconBg:'var(--bg-blue)',title:'New Employee',desc:'Kavya Nair joined the HR department',time:'3 days ago',read:true},
];

const activities = [
  {icon:'👤',iconBg:'var(--bg-lavender)',text:'<strong>Kavya Nair</strong> joined Engineering department',time:'10 min ago'},
  {icon:'✅',iconBg:'var(--success-bg)',text:'Leave approved for <strong>Rahul Kumar</strong>',time:'45 min ago'},
  {icon:'💰',iconBg:'var(--bg-blue)',text:'October payroll run completed — <strong>148 employees</strong>',time:'2 hours ago'},
  {icon:'📋',iconBg:'var(--warning-bg)',text:'<strong>Dev Patel</strong> submitted sick leave request',time:'3 hours ago'},
  {icon:'🎯',iconBg:'var(--bg-pink)',text:'<strong>Priya Sharma</strong> goal Q3 marked complete',time:'Yesterday'},
  {icon:'🔄',iconBg:'var(--bg-peach)',text:'Onboarding checklist updated for <strong>Arjun Singh</strong>',time:'Yesterday'},
];

const upcomingEvents = [
  {day:'14',month:'Oct',title:'Q3 Performance Reviews',meta:'All departments · Starts today'},
  {day:'18',month:'Oct',title:'Team Building Day',meta:'Full company · Offsite event'},
  {day:'22',month:'Oct',title:'Payroll Freeze Date',meta:'October payroll submission'},
  {day:'01',month:'Nov',title:'Kavya Nair — First Day',meta:'Engineering · New join'},
];

const kanbanData = {
  'Applied': [
    {name:'Aditi Bhatt',role:'Frontend Engineer'},
    {name:'Sagar Malhotra',role:'Data Analyst'},
    {name:'Pooja Iyer',role:'Product Manager'},
  ],
  'Screening': [
    {name:'Nikhil Bose',role:'DevOps Engineer'},
    {name:'Meera Krishnan',role:'UX Designer'},
  ],
  'Interviews': [
    {name:'Rajesh Sharma',role:'Backend Engineer'},
    {name:'Sunita Patel',role:'HR Manager'},
  ],
  'Offer': [
    {name:'Karan Mehta',role:'Sales Lead'},
  ],
  'Hired': [
    {name:'Preeti Gupta',role:'Finance Analyst'},
  ],
};

const onboardingTasks1 = [
  {label:'Send offer letter',done:true},
  {label:'Complete documentation',done:true},
  {label:'Set up workstation',done:false},
  {label:'Add to payroll system',done:false},
  {label:'Assign buddy/mentor',done:false},
  {label:'Schedule orientation',done:false},
];

const onboardingTasks2 = [
  {label:'Send offer letter',done:true},
  {label:'Background verification',done:false},
  {label:'Complete documentation',done:false},
  {label:'Laptop provisioning',done:false},
  {label:'Set up accounts',done:false},
  {label:'Team introduction',done:false},
];

const goals = [
  {title:'Ship EzyHR Mobile App v1',owner:'Priya Sharma · Engineering',progress:72,status:'On Track'},
  {title:'Reduce payroll processing time by 40%',owner:'Anita Menon · Finance',progress:55,status:'In Progress'},
  {title:'Hire 10 engineers by Q4',owner:'Kavya Nair · HR',progress:60,status:'On Track'},
  {title:'Achieve 95% customer satisfaction score',owner:'Dev Patel · Sales',progress:88,status:'On Track'},
  {title:'Launch new onboarding portal',owner:'Rohan Mehta · Engineering',progress:30,status:'At Risk'},
];

/* ============================================================
   UTILITY FUNCTIONS
   ============================================================ */
function initials(first, last) {
  return (first[0] + last[0]).toUpperCase();
}

function getColor(name) {
  let hash = 0;
  for (let c of name) hash = c.charCodeAt(0) + ((hash << 5) - hash);
  return COLORS[Math.abs(hash) % COLORS.length];
}

function formatDate(str) {
  if (!str) return '—';
  const d = new Date(str);
  return d.toLocaleDateString('en-IN', { day:'2-digit', month:'short', year:'numeric' });
}

function formatSalary(n) {
  if (!n) return '—';
  return '₹' + (n/100000).toFixed(1) + 'L';
}

function statusBadge(status) {
  const map = {
    'Active': 'background:var(--success-bg);color:var(--success)',
    'On Leave': 'background:var(--warning-bg);color:var(--warning)',
    'Inactive': 'background:var(--danger-bg);color:var(--danger)',
    'Pending': 'background:var(--warning-bg);color:var(--warning)',
    'Approved': 'background:var(--success-bg);color:var(--success)',
    'Rejected': 'background:var(--danger-bg);color:var(--danger)',
    'In Progress': 'background:var(--bg-blue);color:var(--info)',
    'On Track': 'background:var(--success-bg);color:var(--success)',
    'At Risk': 'background:var(--danger-bg);color:var(--danger)',
    'Completed': 'background:var(--success-bg);color:var(--success)',
  };
  const style = map[status] || 'background:var(--bg-main);color:var(--text-muted)';
  return `<span style="font-size:0.75rem;font-weight:700;padding:3px 10px;border-radius:20px;${style}">${status}</span>`;
}

function showToast(title, message = '', type = 'info', duration = 4000) {
  const container = document.getElementById('toastContainer');
  if (!container) return;
  const icons = {
    success: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--success)" stroke-width="2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>`,
    warning: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--warning)" stroke-width="2"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/></svg>`,
    error:   `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--danger)" stroke-width="2"><circle cx="12" cy="12" r="10"/><line x1="15" y1="9" x2="9" y2="15"/><line x1="9" y1="9" x2="15" y2="15"/></svg>`,
    info:    `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--brand-primary)" stroke-width="2"><circle cx="12" cy="12" r="10"/><line x1="12" y1="16" x2="12" y2="12"/><line x1="12" y1="8" x2="12.01" y2="8"/></svg>`,
  };
  const toast = document.createElement('div');
  toast.className = `toast ${type}`;
  toast.setAttribute('role', 'alert');
  toast.innerHTML = `
    <div style="flex-shrink:0">${icons[type] || icons.info}</div>
    <div class="toast-body">
      ${title ? `<div class="toast-title">${title}</div>` : ''}
      ${message ? `<div class="toast-message">${message}</div>` : ''}
    </div>
    <button onclick="this.parentElement.remove()" style="background:none;border:none;cursor:pointer;color:var(--text-muted);font-size:1rem;padding:0 0 0 8px;align-self:flex-start">✕</button>
  `;
  container.appendChild(toast);
  if (duration > 0) setTimeout(() => toast.remove(), duration);
}

/* ============================================================
   MODAL
   ============================================================ */
function openModal(id) {
  const el = document.getElementById(id);
  if (!el) return;
  el.classList.add('open');
  document.body.style.overflow = 'hidden';
  const first = el.querySelector('button,input,select,textarea');
  setTimeout(() => first?.focus(), 50);
}

function closeModal(id) {
  const el = document.getElementById(id);
  if (!el) return;
  el.classList.remove('open');
  document.body.style.overflow = '';
}

document.addEventListener('click', e => {
  if (e.target.dataset.closeModal !== undefined) {
    const id = e.target.dataset.closeModal || e.target.closest('.modal-overlay')?.id;
    if (id) closeModal(id);
    else document.querySelectorAll('.modal-overlay.open').forEach(m => closeModal(m.id));
  }
  if (e.target.classList.contains('modal-overlay') && e.target.classList.contains('open')) {
    closeModal(e.target.id);
  }
});

document.addEventListener('keydown', e => {
  if (e.key === 'Escape') document.querySelectorAll('.modal-overlay.open').forEach(m => closeModal(m.id));
});

/* ============================================================
   NAVIGATION
   ============================================================ */
function navigateTo(page) {
  document.querySelectorAll('.sidebar-item').forEach(b => b.classList.remove('active'));
  document.querySelectorAll('.app-page').forEach(p => p.classList.remove('active'));
  const btn = document.getElementById(`nav-${page}`);
  if (btn) btn.classList.add('active');
  const pg = document.getElementById(`page-${page}`);
  if (pg) pg.classList.add('active');
  // Close sidebar on mobile
  document.getElementById('appSidebar').classList.remove('open');
  document.getElementById('sidebarOverlay').classList.remove('show');
}

document.querySelectorAll('.sidebar-item[data-page]').forEach(btn => {
  btn.addEventListener('click', () => navigateTo(btn.dataset.page));
});

// Mobile sidebar
const mobileSidebarToggle = document.getElementById('mobileSidebarToggle');
const appSidebar = document.getElementById('appSidebar');
const sidebarOverlay = document.getElementById('sidebarOverlay');

mobileSidebarToggle?.addEventListener('click', () => {
  const isOpen = appSidebar.classList.contains('open');
  if (isOpen) {
    appSidebar.classList.remove('open');
    sidebarOverlay.classList.remove('show');
    mobileSidebarToggle.setAttribute('aria-expanded', 'false');
  } else {
    appSidebar.classList.add('open');
    sidebarOverlay.classList.add('show');
    mobileSidebarToggle.setAttribute('aria-expanded', 'true');
  }
});

sidebarOverlay?.addEventListener('click', () => {
  appSidebar.classList.remove('open');
  sidebarOverlay.classList.remove('show');
  mobileSidebarToggle?.setAttribute('aria-expanded', 'false');
});

/* ============================================================
   NOTIFICATIONS
   ============================================================ */
function renderNotifications() {
  const list = document.getElementById('notifList');
  if (!list) return;
  const unread = notifications.filter(n => !n.read).length;
  document.getElementById('notifCount').textContent = unread;
  document.getElementById('notifCount').style.display = unread > 0 ? 'flex' : 'none';

  list.innerHTML = notifications.map(n => `
    <div class="notif-item ${n.read ? '' : 'unread'}" data-notif-id="${n.id}" role="menuitem" tabindex="0">
      <div class="notif-icon" style="background:${n.iconBg}">${n.icon}</div>
      <div class="notif-body">
        <div class="notif-title">${n.title}</div>
        <div class="notif-desc">${n.desc}</div>
        <div class="notif-time">${n.time}</div>
      </div>
      ${!n.read ? '<div class="notif-dot" aria-label="Unread"></div>' : ''}
    </div>
  `).join('');

  list.querySelectorAll('.notif-item').forEach(item => {
    item.addEventListener('click', () => {
      const id = parseInt(item.dataset.notifId);
      const notif = notifications.find(n => n.id === id);
      if (notif) { notif.read = true; renderNotifications(); }
    });
  });
}

const notifBtn = document.getElementById('notifBtn');
const notifDropdown = document.getElementById('notifDropdown');
notifBtn?.addEventListener('click', e => {
  e.stopPropagation();
  const isOpen = notifDropdown.classList.contains('show');
  closeAllDropdowns();
  if (!isOpen) {
    notifDropdown.classList.add('show');
    notifBtn.setAttribute('aria-expanded', 'true');
    renderNotifications();
  }
});

document.getElementById('markAllRead')?.addEventListener('click', () => {
  notifications.forEach(n => n.read = true);
  renderNotifications();
  showToast('All caught up!', 'All notifications marked as read.', 'success');
});

// Profile menu
const profileBtn = document.getElementById('profileBtn');
const profileMenu = document.getElementById('profileMenu');
profileBtn?.addEventListener('click', e => {
  e.stopPropagation();
  const isOpen = profileMenu.classList.contains('show');
  closeAllDropdowns();
  if (!isOpen) {
    profileMenu.classList.add('show');
    profileBtn.setAttribute('aria-expanded', 'true');
  }
});

function closeAllDropdowns() {
  document.querySelectorAll('.notif-dropdown, .profile-menu').forEach(m => m.classList.remove('show'));
  document.querySelectorAll('[aria-expanded="true"]').forEach(b => { if (b !== mobileSidebarToggle) b.setAttribute('aria-expanded', 'false'); });
}

document.addEventListener('click', e => {
  if (!notifBtn?.contains(e.target) && !notifDropdown?.contains(e.target) &&
      !profileBtn?.contains(e.target) && !profileMenu?.contains(e.target)) {
    closeAllDropdowns();
  }
});

/* ============================================================
   DASHBOARD DATE
   ============================================================ */
const dashDate = document.getElementById('dashDate');
if (dashDate) {
  dashDate.textContent = new Date().toLocaleDateString('en-US', { weekday:'long', year:'numeric', month:'long', day:'numeric' });
}

/* ============================================================
   DASHBOARD CHARTS
   ============================================================ */
function initCharts() {
  if (typeof Chart === 'undefined') return;
  // Attendance Chart
  const attCtx = document.getElementById('attendanceChart');
  if (attCtx) {
    new Chart(attCtx, {
      type: 'line',
      data: {
        labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
        datasets: [{
          label: 'Present',
          data: [136, 140, 138, 142, 132, 98, 72],
          fill: true,
          backgroundColor: 'rgba(81,70,229,0.08)',
          borderColor: '#5146E5',
          borderWidth: 2,
          pointBackgroundColor: '#5146E5',
          pointRadius: 4,
          tension: 0.4,
        }]
      },
      options: {
        responsive: true,
        plugins: { legend: { display: false } },
        scales: {
          y: { beginAtZero: false, min: 60, grid: { color: 'rgba(0,0,0,0.04)' }, ticks: { font: { size: 11 } } },
          x: { grid: { display: false }, ticks: { font: { size: 11 } } }
        }
      }
    });
  }

  // Department Chart
  const deptCtx = document.getElementById('deptChart');
  if (deptCtx) {
    new Chart(deptCtx, {
      type: 'doughnut',
      data: {
        labels: ['Engineering', 'Sales', 'Design', 'Finance', 'HR', 'Operations', 'Marketing'],
        datasets: [{
          data: [48, 32, 18, 14, 12, 14, 10],
          backgroundColor: ['#5146E5','#39B8A5','#C0448F','#2563EB','#A05A28','#198B70','#D94B62'],
          borderWidth: 2,
          borderColor: '#fff',
        }]
      },
      options: {
        responsive: true,
        cutout: '65%',
        plugins: { legend: { position: 'right', labels: { font: { size: 11 }, boxWidth: 10 } } }
      }
    });
  }
}

/* ============================================================
   ANALYTICS CHARTS
   ============================================================ */
function initAnalyticsCharts(period = 'q3') {
  if (typeof Chart === 'undefined') return;
  const dataMap = {
    q3: { headcount: [130, 133, 137, 140, 143, 148], turnover: 5.2, satisfaction: 4.1 },
    q2: { headcount: [115, 118, 121, 125, 128, 130], turnover: 6.1, satisfaction: 3.9 },
    q1: { headcount: [100, 103, 107, 110, 112, 115], turnover: 7.0, satisfaction: 3.7 },
  };
  const d = dataMap[period];

  const hcCtx = document.getElementById('headcountChart');
  if (hcCtx) {
    const existing = Chart.getChart(hcCtx);
    if (existing) existing.destroy();
    new Chart(hcCtx, {
      type: 'bar',
      data: {
        labels: ['May','Jun','Jul','Aug','Sep','Oct'],
        datasets: [{
          label: 'Headcount',
          data: d.headcount,
          backgroundColor: 'rgba(81,70,229,0.7)',
          borderRadius: 6,
          borderSkipped: false,
        }]
      },
      options: {
        responsive: true,
        plugins: { legend: { display: false } },
        scales: {
          y: { beginAtZero: false, grid: { color: 'rgba(0,0,0,0.04)' }, ticks: { font: { size: 11 } } },
          x: { grid: { display: false }, ticks: { font: { size: 11 } } }
        }
      }
    });
  }

  const ltCtx = document.getElementById('leaveTypeChart');
  if (ltCtx) {
    const existing = Chart.getChart(ltCtx);
    if (existing) existing.destroy();
    new Chart(ltCtx, {
      type: 'pie',
      data: {
        labels: ['Annual', 'Sick', 'Casual', 'Maternity', 'Other'],
        datasets: [{
          data: [42, 28, 18, 8, 4],
          backgroundColor: ['#5146E5','#39B8A5','#C0448F','#2563EB','#A05A28'],
          borderWidth: 2,
          borderColor: '#fff',
        }]
      },
      options: {
        responsive: true,
        plugins: { legend: { position: 'right', labels: { font: { size: 11 }, boxWidth: 10 } } }
      }
    });
  }

  const deptBarCtx = document.getElementById('deptBarChart');
  if (deptBarCtx) {
    const existing = Chart.getChart(deptBarCtx);
    if (existing) existing.destroy();
    new Chart(deptBarCtx, {
      type: 'bar',
      data: {
        labels: ['Engineering', 'Sales', 'Design', 'Finance', 'Operations', 'HR', 'Marketing'],
        datasets: [{
          label: 'Headcount',
          data: [48, 32, 18, 14, 14, 12, 10],
          backgroundColor: ['#5146E5','#39B8A5','#C0448F','#2563EB','#A05A28','#198B70','#D94B62'],
          borderRadius: 6,
          borderSkipped: false,
        }]
      },
      options: {
        responsive: true,
        indexAxis: 'y',
        plugins: { legend: { display: false } },
        scales: {
          x: { beginAtZero: true, grid: { color: 'rgba(0,0,0,0.04)' }, ticks: { font: { size: 11 } } },
          y: { grid: { display: false }, ticks: { font: { size: 11 } } }
        }
      }
    });
  }

  const deductionCtx = document.getElementById('deductionChart');
  if (deductionCtx) {
    const existing = Chart.getChart(deductionCtx);
    if (existing) existing.destroy();
    new Chart(deductionCtx, {
      type: 'doughnut',
      data: {
        labels: ['PF', 'ESI', 'TDS', 'Prof. Tax'],
        datasets: [{
          data: [216000, 48600, 60200, 200],
          backgroundColor: ['#5146E5','#39B8A5','#D94B62','#B97817'],
          borderWidth: 2,
          borderColor: '#fff',
        }]
      },
      options: {
        responsive: true,
        cutout: '60%',
        plugins: { legend: { position: 'right', labels: { font: { size: 11 }, boxWidth: 10 } } }
      }
    });
  }
}

window.updateAnalytics = function(period) {
  initAnalyticsCharts(period);
};

/* ============================================================
   RENDER DASHBOARD LEAVE LIST
   ============================================================ */
function renderDashLeave() {
  const container = document.getElementById('dashLeaveList');
  if (!container) return;
  const pending = leaveRequests.filter(l => l.status === 'Pending').slice(0, 3);
  if (pending.length === 0) {
    container.innerHTML = '<p style="color:var(--text-muted);font-size:0.875rem;text-align:center;padding:16px 0">No pending requests 🎉</p>';
    return;
  }
  container.innerHTML = pending.map(l => `
    <div style="display:flex;align-items:center;gap:10px;padding:10px 0;border-bottom:1px solid var(--border-soft)">
      <div class="avatar avatar-sm" style="background:${getColor(l.emp)}">${l.emp.split(' ').map(w=>w[0]).join('').slice(0,2)}</div>
      <div style="flex:1;min-width:0">
        <div style="font-size:0.8125rem;font-weight:700;color:var(--text-primary)">${l.emp}</div>
        <div style="font-size:0.75rem;color:var(--text-muted)">${l.type} · ${l.days} day${l.days>1?'s':''}</div>
      </div>
      <div style="display:flex;gap:4px">
        <button class="leave-action-btn approve-btn" onclick="handleLeaveAction(${l.id},'Approved')" aria-label="Approve leave for ${l.emp}">✓</button>
        <button class="leave-action-btn reject-btn" onclick="handleLeaveAction(${l.id},'Rejected')" aria-label="Reject leave for ${l.emp}">✕</button>
      </div>
    </div>
  `).join('');
}

/* ============================================================
   RENDER ACTIVITY FEED
   ============================================================ */
function renderActivity() {
  const container = document.getElementById('activityFeed');
  if (!container) return;
  container.innerHTML = activities.map(a => `
    <div class="activity-item">
      <div class="activity-icon" style="background:${a.iconBg}">${a.icon}</div>
      <div class="activity-body">
        <div class="activity-text">${a.text}</div>
        <div class="activity-time">${a.time}</div>
      </div>
    </div>
  `).join('');
}

/* ============================================================
   RENDER UPCOMING EVENTS
   ============================================================ */
function renderEvents() {
  const container = document.getElementById('upcomingEvents');
  if (!container) return;
  container.innerHTML = upcomingEvents.map(e => `
    <div class="event-item">
      <div class="event-date-box">
        <div class="event-day">${e.day}</div>
        <div class="event-month">${e.month}</div>
      </div>
      <div>
        <div class="event-title">${e.title}</div>
        <div class="event-meta">${e.meta}</div>
      </div>
    </div>
  `).join('');
}

/* ============================================================
   RENDER EMPLOYEE LIST
   ============================================================ */
function renderEmployees(list = employees) {
  const container = document.getElementById('employeeList');
  if (!container) return;
  const subtitle = document.getElementById('empSubtitle');
  if (subtitle) subtitle.textContent = `${list.length} employees`;

  if (list.length === 0) {
    container.innerHTML = '<div style="padding:40px;text-align:center;color:var(--text-muted)">No employees found matching your filters.</div>';
    return;
  }

  container.innerHTML = list.map(e => `
    <div class="emp-row" data-emp-id="${e.id}" onclick="showEmployeeDetail('${e.id}')" role="button" tabindex="0" aria-label="View ${e.first} ${e.last}">
      <div style="display:flex;align-items:center;gap:12px;flex:2">
        <div class="avatar avatar-sm" style="background:${getColor(e.first+e.last)}">${initials(e.first, e.last)}</div>
        <div>
          <div class="emp-name">${e.first} ${e.last}</div>
          <div class="emp-role">${e.role}</div>
        </div>
      </div>
      <div class="emp-cell" style="flex:1.5">${e.dept}</div>
      <div class="emp-cell" style="flex:1">${formatDate(e.join)}</div>
      <div class="emp-cell" style="flex:1">${formatSalary(e.salary)}</div>
      <div style="flex:1">${statusBadge(e.status)}</div>
      <div style="flex:0 0 80px;display:flex;gap:6px">
        <button class="topbar-btn" onclick="event.stopPropagation();showEmployeeDetail('${e.id}')" title="View details" aria-label="View ${e.first} ${e.last} details">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>
        </button>
      </div>
    </div>
  `).join('');

  container.querySelectorAll('.emp-row').forEach(row => {
    row.addEventListener('keydown', e => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        showEmployeeDetail(row.dataset.empId);
      }
    });
  });
}

function showEmployeeDetail(id) {
  const emp = employees.find(e => e.id === id);
  if (!emp) return;
  const color = getColor(emp.first + emp.last);
  const content = document.getElementById('empDetailContent');
  document.getElementById('empDetailTitle').textContent = `${emp.first} ${emp.last}`;
  content.innerHTML = `
    <div style="display:flex;align-items:center;gap:16px;margin-bottom:24px">
      <div class="avatar avatar-xl" style="background:${color}">${initials(emp.first, emp.last)}</div>
      <div>
        <h3 style="font-size:1.125rem;font-weight:800">${emp.first} ${emp.last}</h3>
        <div style="color:var(--text-muted);font-size:0.875rem">${emp.role} · ${emp.dept}</div>
        <div style="margin-top:6px">${statusBadge(emp.status)}</div>
      </div>
    </div>
    <div style="display:grid;grid-template-columns:1fr 1fr;gap:12px">
      ${[
        ['Employee ID', emp.id],
        ['Email', emp.email],
        ['Phone', emp.phone || '—'],
        ['Join Date', formatDate(emp.join)],
        ['Annual Salary', formatSalary(emp.salary)],
        ['Department', emp.dept],
      ].map(([l,v]) => `
      <div style="background:var(--bg-main);border-radius:var(--radius-sm);padding:12px">
        <div style="font-size:0.75rem;color:var(--text-muted);margin-bottom:4px">${l}</div>
        <div style="font-size:0.875rem;font-weight:600">${v}</div>
      </div>`).join('')}
    </div>
    <p style="font-size:0.75rem;color:var(--text-muted);margin-top:16px;text-align:center;font-style:italic">This is illustrative demo data only.</p>
  `;
  openModal('empDetailModal');
}

/* ============================================================
   EMPLOYEE SEARCH & FILTER
   ============================================================ */
function filterEmployees() {
  const search = document.getElementById('empSearch')?.value.toLowerCase() || '';
  const dept = document.getElementById('deptFilter')?.value || '';
  const status = document.getElementById('statusFilter')?.value || '';

  const filtered = employees.filter(e => {
    const name = `${e.first} ${e.last} ${e.role} ${e.email}`.toLowerCase();
    return (!search || name.includes(search)) &&
           (!dept || e.dept === dept) &&
           (!status || e.status === status);
  });
  renderEmployees(filtered);
}

document.getElementById('empSearch')?.addEventListener('input', filterEmployees);
document.getElementById('deptFilter')?.addEventListener('change', filterEmployees);
document.getElementById('statusFilter')?.addEventListener('change', filterEmployees);

document.getElementById('globalSearch')?.addEventListener('input', function() {
  if (this.value.length > 1) {
    navigateTo('employees');
    document.getElementById('empSearch').value = this.value;
    filterEmployees();
  }
});

/* ============================================================
   LEAVE REQUESTS
   ============================================================ */
function renderLeaveRequests() {
  const container = document.getElementById('leaveRequestList');
  if (!container) return;

  const statusFilter = document.getElementById('leaveStatusFilter')?.value || '';
  const filtered = statusFilter ? leaveRequests.filter(l => l.status === statusFilter) : leaveRequests;

  // Update counts
  document.getElementById('totalLeaveCount').textContent = leaveRequests.length;
  document.getElementById('pendingLeaveCount').textContent = leaveRequests.filter(l => l.status==='Pending').length;
  document.getElementById('approvedLeaveCount').textContent = leaveRequests.filter(l => l.status==='Approved').length;
  document.getElementById('rejectedLeaveCount').textContent = leaveRequests.filter(l => l.status==='Rejected').length;
  document.getElementById('leaveCount').textContent = leaveRequests.filter(l => l.status==='Pending').length;

  const leaveTypeColors = { 'Annual Leave': '#5146E5', 'Sick Leave': '#D94B62', 'Casual Leave': '#39B8A5', 'Maternity Leave': '#C0448F' };

  container.innerHTML = filtered.map(l => `
    <div class="leave-card" id="leave-${l.id}">
      <div class="avatar avatar-sm" style="background:${getColor(l.emp)};flex-shrink:0">${l.emp.split(' ').map(w=>w[0]).join('').slice(0,2)}</div>
      <div class="leave-info">
        <div class="leave-name">${l.emp}</div>
        <div class="leave-dates">${formatDate(l.start)} — ${formatDate(l.end)} · ${l.days} day${l.days>1?'s':''}</div>
        ${l.reason ? `<div style="font-size:0.775rem;color:var(--text-muted);margin-top:2px">${l.reason}</div>` : ''}
      </div>
      <span class="leave-type" style="background:${leaveTypeColors[l.type]+'20'};color:${leaveTypeColors[l.type]||'var(--brand-primary)'}">${l.type}</span>
      <div style="text-align:center">${statusBadge(l.status)}</div>
      ${l.status === 'Pending' ? `
      <div class="leave-actions">
        <button class="leave-action-btn approve-btn" onclick="handleLeaveAction(${l.id},'Approved')" aria-label="Approve leave for ${l.emp}">✓ Approve</button>
        <button class="leave-action-btn reject-btn" onclick="handleLeaveAction(${l.id},'Rejected')" aria-label="Reject leave for ${l.emp}">✕ Reject</button>
      </div>` : ''}
    </div>
  `).join('');
}

window.handleLeaveAction = function(id, action) {
  const req = leaveRequests.find(l => l.id === id);
  if (!req) return;
  req.status = action;
  renderLeaveRequests();
  renderDashLeave();
  updateLeaveStats();
  showToast(
    action === 'Approved' ? 'Leave Approved' : 'Leave Rejected',
    `${req.emp}'s ${req.type} request has been ${action.toLowerCase()}.`,
    action === 'Approved' ? 'success' : 'warning'
  );
};

function updateLeaveStats() {
  const pending = leaveRequests.filter(l => l.status === 'Pending').length;
  const leaveCount = document.getElementById('leaveCount');
  const leaveCountStat = document.getElementById('leaveCountStat');
  if (leaveCount) leaveCount.textContent = pending;
  if (leaveCountStat) leaveCountStat.textContent = leaveRequests.filter(l=>l.status==='On Leave'||l.status==='Approved').length;
}

document.getElementById('leaveStatusFilter')?.addEventListener('change', renderLeaveRequests);

/* ============================================================
   ADD EMPLOYEE
   ============================================================ */
function setupAddEmployee() {
  const btn1 = document.getElementById('addEmployeeBtn');
  const btn2 = document.getElementById('addEmployeeBtn2');
  [btn1, btn2].forEach(btn => btn?.addEventListener('click', () => {
    document.getElementById('addEmpForm').reset();
    document.querySelectorAll('.form-control.error').forEach(e => e.classList.remove('error'));
    document.querySelectorAll('.form-error.show').forEach(e => e.classList.remove('show'));
    openModal('addEmpModal');
  }));

  document.getElementById('saveEmpBtn')?.addEventListener('click', saveEmployee);
  document.getElementById('addEmpForm')?.addEventListener('submit', e => {
    e.preventDefault();
    saveEmployee();
  });
}

function saveEmployee() {
  const fields = [
    { id: 'emp-firstname', errId: 'err-firstname', validate: v => v.trim().length > 0 },
    { id: 'emp-lastname', errId: 'err-lastname', validate: v => v.trim().length > 0 },
    { id: 'emp-email', errId: 'err-email', validate: v => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v) },
    { id: 'emp-dept', errId: 'err-dept', validate: v => v !== '' },
    { id: 'emp-role', errId: 'err-role', validate: v => v.trim().length > 0 },
    { id: 'emp-join', errId: 'err-join', validate: v => v !== '' },
  ];

  let valid = true;
  fields.forEach(f => {
    const el = document.getElementById(f.id);
    const err = document.getElementById(f.errId);
    if (el && !f.validate(el.value)) {
      el.classList.add('error');
      err?.classList.add('show');
      valid = false;
    } else {
      el?.classList.remove('error');
      err?.classList.remove('show');
    }
  });

  if (!valid) return;

  const first = document.getElementById('emp-firstname').value.trim();
  const last = document.getElementById('emp-lastname').value.trim();
  const newEmp = {
    id: `EMP-${String(employees.length + 1).padStart(3, '0')}`,
    first,
    last,
    dept: document.getElementById('emp-dept').value,
    role: document.getElementById('emp-role').value.trim(),
    email: document.getElementById('emp-email').value.trim(),
    phone: document.getElementById('emp-phone').value.trim(),
    join: document.getElementById('emp-join').value,
    salary: parseInt(document.getElementById('emp-salary').value) || 0,
    status: 'Active',
  };

  employees.unshift(newEmp);
  renderEmployees();
  updateDashStats();
  activities.unshift({
    icon: '👤',
    iconBg: 'var(--bg-lavender)',
    text: `<strong>${first} ${last}</strong> added to ${newEmp.dept}`,
    time: 'Just now',
  });
  renderActivity();
  closeModal('addEmpModal');
  showToast('Employee Added!', `${first} ${last} has been added to the directory.`, 'success');
}

function updateDashStats() {
  const el = document.getElementById('totalEmpCount');
  if (el) el.textContent = employees.length;
}

/* ============================================================
   RECRUITMENT KANBAN
   ============================================================ */
function renderKanban() {
  const board = document.getElementById('kanbanBoard');
  if (!board) return;
  board.innerHTML = Object.entries(kanbanData).map(([stage, candidates]) => `
    <div class="kanban-col">
      <div class="kanban-col-title">
        ${stage}
        <span class="kanban-count">${candidates.length}</span>
      </div>
      ${candidates.map(c => `
        <div class="kanban-card" onclick="showToast('${c.name}', '${c.role} — Illustrative demo candidate', 'info')">
          <div class="kanban-card-name">${c.name}</div>
          <div class="kanban-card-role">${c.role}</div>
          <div style="display:flex;gap:6px;margin-top:8px">
            <div class="avatar avatar-sm" style="background:${getColor(c.name)}">${c.name.split(' ').map(w=>w[0]).join('').slice(0,2)}</div>
          </div>
        </div>
      `).join('')}
    </div>
  `).join('');
}

/* ============================================================
   ONBOARDING CHECKLISTS
   ============================================================ */
function renderChecklist(containerId, tasks, empKey) {
  const container = document.getElementById(containerId);
  if (!container) return;
  renderChecklistInner(container, tasks, empKey);
}

function renderChecklistInner(container, tasks, key) {
  const done = tasks.filter(t => t.done).length;
  const pct = Math.round((done / tasks.length) * 100);

  container.innerHTML = `
    <div style="margin-bottom:12px">
      <div style="display:flex;justify-content:space-between;font-size:0.8rem;margin-bottom:6px">
        <span style="color:var(--text-muted)">${done}/${tasks.length} tasks completed</span>
        <span style="color:var(--brand-primary);font-weight:700">${pct}%</span>
      </div>
      <div class="progress-bar-wrap"><div class="progress-bar" style="width:${pct}%"></div></div>
    </div>
    ${tasks.map((t, i) => `
      <div class="checklist-item ${t.done ? 'done' : ''}" onclick="toggleTask('${key}',${i})" role="checkbox" aria-checked="${t.done}" tabindex="0">
        <div class="checklist-check">${t.done ? '✓' : ''}</div>
        <span class="checklist-label">${t.label}</span>
      </div>
    `).join('')}
  `;
}

const onboardState1 = onboardingTasks1.map(t => ({...t}));
const onboardState2 = onboardingTasks2.map(t => ({...t}));

window.toggleTask = function(key, idx) {
  const tasksMap = { 'ob1': onboardState1, 'ob2': onboardState2 };
  const tasks = tasksMap[key];
  if (!tasks) return;
  tasks[idx].done = !tasks[idx].done;
  const containerId = key === 'ob1' ? 'onboardChecklist1' : 'onboardChecklist2';
  const container = document.getElementById(containerId);
  if (container) renderChecklistInner(container, tasks, key);
  showToast(
    tasks[idx].done ? 'Task completed!' : 'Task unchecked',
    tasks[idx].label,
    tasks[idx].done ? 'success' : 'info',
    2000
  );
};

/* ============================================================
   PERFORMANCE GOALS
   ============================================================ */
function renderGoals() {
  const container = document.getElementById('goalsList');
  if (!container) return;
  container.innerHTML = goals.map(g => `
    <div class="goal-card">
      <div class="goal-header">
        <div>
          <div class="goal-title">${g.title}</div>
          <div class="goal-owner">${g.owner}</div>
        </div>
        <div style="text-align:right">
          ${statusBadge(g.status)}
          <div class="goal-progress-label" style="margin-top:6px">${g.progress}%</div>
        </div>
      </div>
      <div class="progress-bar-wrap"><div class="progress-bar" style="width:${g.progress}%;background:${g.status==='At Risk'?'linear-gradient(90deg,var(--danger),#E85DAA)':'linear-gradient(90deg,var(--brand-primary),var(--brand-secondary))'}"></div></div>
    </div>
  `).join('');
}

/* ============================================================
   INIT
   ============================================================ */
document.addEventListener('DOMContentLoaded', () => {
  renderNotifications();
  renderDashLeave();
  renderActivity();
  renderEvents();
  renderEmployees();
  renderLeaveRequests();
  renderKanban();
  renderChecklist('onboardChecklist1', onboardState1, 'ob1');
  renderChecklist('onboardChecklist2', onboardState2, 'ob2');
  renderGoals();
  setupAddEmployee();

  // Init charts after short delay to ensure canvas is visible
  setTimeout(() => {
    initCharts();
    initAnalyticsCharts();
  }, 100);

  // Reinit analytics charts when navigating to analytics
  document.getElementById('nav-analytics')?.addEventListener('click', () => {
    setTimeout(() => initAnalyticsCharts(document.getElementById('analyticsPeriod')?.value || 'q3'), 50);
  });

  // Reinit deduction chart when navigating to payroll
  document.getElementById('nav-payroll')?.addEventListener('click', () => {
    setTimeout(() => initAnalyticsCharts(), 50);
  });
});
