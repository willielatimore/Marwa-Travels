// ============ BOOKINGS MANAGEMENT ============
// Check if admin is logged in
if (!sessionStorage.getItem('adminLoggedIn')) {
    window.location.href = 'login.html';
}

// Add logout button to navbar
// Add this to your navbar HTML:
// <li class="nav-item"><a class="nav-link" href="#" onclick="logout()"><i class="fas fa-sign-out-alt"></i> Logout</a></li>

function logout() {
    sessionStorage.removeItem('adminLoggedIn');
    window.location.href = 'login.html';
}

let allBookings = [];
let announcements = [];

// Load bookings from localStorage
function loadBookings() {
    allBookings = JSON.parse(localStorage.getItem('marwaTravelBookings') || '[]');
    displayBookings(allBookings);
    updateBookingStats();
}

// Display bookings in table
function displayBookings(bookings) {
    const tbody = document.getElementById('bookingsTableBody');
    if (!tbody) return;
    
    if (bookings.length === 0) {
        tbody.innerHTML = '<tr><td colspan="8" class="text-center">No bookings found</td></tr>';
        return;
    }
    
    tbody.innerHTML = bookings.map(booking => {
        const days = Math.ceil((new Date(booking.checkOut) - new Date(booking.checkIn)) / (1000 * 60 * 60 * 24));
        const priceMatch = booking.destination.match(/\$(\d+)/);
        const pricePerPerson = priceMatch ? parseInt(priceMatch[1]) : 850;
        const totalPrice = pricePerPerson * booking.travelers * days;
        
        return `
            <tr>
                <td>#${booking.id}</td>
                <td>
                    <strong>${booking.name}</strong><br>
                    <small>${booking.email}</small>
                </td>
                <td>${booking.destination}</td>
                <td>${booking.travelers}</td>
                <td>
                    ${booking.checkIn}<br>
                    <small>to ${booking.checkOut}</small>
                </td>
                <td>$${totalPrice}</td>
                <td>
                    <span class="status-badge status-${booking.status || 'pending'}">
                        ${booking.status || 'pending'}
                    </span>
                </td>
                <td>
                    <button class="btn-action btn-confirm" onclick="updateBookingStatus(${booking.id}, 'confirmed')">
                        <i class="fas fa-check"></i>
                    </button>
                    <button class="btn-action btn-cancel" onclick="updateBookingStatus(${booking.id}, 'cancelled')">
                        <i class="fas fa-times"></i>
                    </button>
                    <button class="btn-action btn-delete" onclick="deleteBooking(${booking.id})">
                        <i class="fas fa-trash"></i>
                    </button>
                </td>
            </tr>
        `;
    }).join('');
}

// Update booking status
function updateBookingStatus(id, newStatus) {
    const booking = allBookings.find(b => b.id === id);
    if (booking) {
        booking.status = newStatus;
        localStorage.setItem('marwaTravelBookings', JSON.stringify(allBookings));
        loadBookings();
        addActivity(`Booking #${id} ${newStatus}`, 'status');
        showToast(`Booking #${id} ${newStatus} successfully`);
    }
}

// Delete booking
function deleteBooking(id) {
    if (confirm('Are you sure you want to delete this booking?')) {
        allBookings = allBookings.filter(b => b.id !== id);
        localStorage.setItem('marwaTravelBookings', JSON.stringify(allBookings));
        loadBookings();
        addActivity(`Booking #${id} deleted`, 'delete');
        showToast(`Booking #${id} deleted successfully`);
    }
}

// Update booking statistics
function updateBookingStats() {
    const total = allBookings.length;
    const pending = allBookings.filter(b => !b.status || b.status === 'pending').length;
    const confirmed = allBookings.filter(b => b.status === 'confirmed').length;
    
    // Calculate total revenue
    let revenue = 0;
    allBookings.forEach(booking => {
        const days = Math.ceil((new Date(booking.checkOut) - new Date(booking.checkIn)) / (1000 * 60 * 60 * 24));
        const priceMatch = booking.destination.match(/\$(\d+)/);
        const pricePerPerson = priceMatch ? parseInt(priceMatch[1]) : 850;
        revenue += pricePerPerson * booking.travelers * days;
    });
    
    document.getElementById('totalBookings').textContent = total;
    document.getElementById('pendingBookings').textContent = pending;
    document.getElementById('confirmedBookings').textContent = confirmed;
    document.getElementById('revenue').textContent = `$${revenue.toLocaleString()}`;
}

// Search bookings
document.addEventListener('DOMContentLoaded', () => {
    const searchInput = document.getElementById('searchBooking');
    if (searchInput) {
        searchInput.addEventListener('input', (e) => {
            const searchTerm = e.target.value.toLowerCase();
            const filtered = allBookings.filter(b => 
                b.name.toLowerCase().includes(searchTerm) || 
                b.destination.toLowerCase().includes(searchTerm) ||
                b.email.toLowerCase().includes(searchTerm)
            );
            displayBookings(filtered);
        });
    }
});

// ============ ANNOUNCEMENTS MANAGEMENT ============

// Load announcements from localStorage
function loadAnnouncements() {
    announcements = JSON.parse(localStorage.getItem('marwaAnnouncements') || '[]');
    displayAnnouncements();
}

// Display announcements
function displayAnnouncements() {
    const container = document.getElementById('announcementsGrid');
    if (!container) return;
    
    if (announcements.length === 0) {
        container.innerHTML = '<div class="col-12 text-center">No announcements yet. Create your first announcement!</div>';
        return;
    }
    
    container.innerHTML = announcements.map(announcement => `
        <div class="col-md-6 col-lg-4">
            <div class="announcement-card">
                ${announcement.image ? `<img src="${announcement.image}" class="announcement-image" alt="${announcement.title}">` : ''}
                <div class="announcement-content">
                    <h4 class="announcement-title">${announcement.title}</h4>
                    ${announcement.destination ? `<span class="announcement-destination">✈️ ${announcement.destination}</span>` : ''}
                    ${announcement.discount ? `<div class="announcement-discount">🎉 ${announcement.discount}</div>` : ''}
                    ${announcement.startDate ? `<div class="announcement-date">📅 ${announcement.startDate} to ${announcement.endDate}</div>` : ''}
                    <p>${announcement.description}</p>
                    <div class="d-flex justify-content-between align-items-center">
                        <small class="text-muted">Posted: ${new Date(announcement.createdAt).toLocaleDateString()}</small>
                        <button class="btn btn-sm btn-danger" onclick="deleteAnnouncement(${announcement.id})">
                            <i class="fas fa-trash"></i>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    `).join('');
}

// Create new announcement
function createAnnouncement() {
    const title = document.getElementById('announcementTitle').value;
    const destination = document.getElementById('announcementDestination').value;
    const startDate = document.getElementById('announcementStartDate').value;
    const endDate = document.getElementById('announcementEndDate').value;
    const discount = document.getElementById('announcementDiscount').value;
    const description = document.getElementById('announcementDescription').value;
    const image = document.getElementById('announcementImage').value;
    
    if (!title || !description) {
        alert('Please fill in title and description');
        return;
    }
    
    const announcement = {
        id: Date.now(),
        title: title,
        destination: destination || null,
        startDate: startDate || null,
        endDate: endDate || null,
        discount: discount || null,
        description: description,
        image: image || null,
        createdAt: new Date().toISOString()
    };
    
    announcements.unshift(announcement);
    localStorage.setItem('marwaAnnouncements', JSON.stringify(announcements));
    displayAnnouncements();
    addActivity(`New announcement: ${title}`, 'announcement');
    
    // Close modal and reset form
    bootstrap.Modal.getInstance(document.getElementById('announcementModal')).hide();
    document.getElementById('announcementForm').reset();
    showToast('Announcement published successfully!');
}

// Delete announcement
function deleteAnnouncement(id) {
    if (confirm('Delete this announcement?')) {
        announcements = announcements.filter(a => a.id !== id);
        localStorage.setItem('marwaAnnouncements', JSON.stringify(announcements));
        displayAnnouncements();
        addActivity(`Announcement deleted`, 'delete');
        showToast('Announcement deleted');
    }
}

// ============ STATISTICS & CHARTS ============

let destinationsChart, monthlyChart;

function initCharts() {
    // Destinations popularity chart
    const destCtx = document.getElementById('destinationsChart')?.getContext('2d');
    if (destCtx) {
        const destCount = {};
        allBookings.forEach(booking => {
            const dest = booking.destination;
            destCount[dest] = (destCount[dest] || 0) + 1;
        });
        
        destinationsChart = new Chart(destCtx, {
            type: 'bar',
            data: {
                labels: Object.keys(destCount),
                datasets: [{
                    label: 'Number of Bookings',
                    data: Object.values(destCount),
                    backgroundColor: 'rgba(106,13,173,0.6)',
                    borderColor: '#6A0DAD',
                    borderWidth: 2
                }]
            },
            options: {
                responsive: true,
                plugins: {
                    legend: { position: 'top' }
                }
            }
        });
    }
    
    // Monthly bookings chart
    const monthlyCtx = document.getElementById('monthlyChart')?.getContext('2d');
    if (monthlyCtx) {
        const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
        const monthlyCount = new Array(12).fill(0);
        
        allBookings.forEach(booking => {
            const month = new Date(booking.bookingDate).getMonth();
            monthlyCount[month]++;
        });
        
        monthlyChart = new Chart(monthlyCtx, {
            type: 'line',
            data: {
                labels: months,
                datasets: [{
                    label: 'Bookings per Month',
                    data: monthlyCount,
                    borderColor: '#D32F2F',
                    backgroundColor: 'rgba(211,47,47,0.1)',
                    tension: 0.4,
                    fill: true
                }]
            },
            options: {
                responsive: true,
                plugins: {
                    legend: { position: 'top' }
                }
            }
        });
    }
}

// Activity feed
function addActivity(message, type) {
    let activities = JSON.parse(localStorage.getItem('marwaActivities') || '[]');
    activities.unshift({
        id: Date.now(),
        message: message,
        type: type,
        time: new Date().toISOString()
    });
    // Keep only last 50 activities
    activities = activities.slice(0, 50);
    localStorage.setItem('marwaActivities', JSON.stringify(activities));
    displayActivities();
}

function displayActivities() {
    const container = document.getElementById('recentActivity');
    if (!container) return;
    
    const activities = JSON.parse(localStorage.getItem('marwaActivities') || '[]');
    
    if (activities.length === 0) {
        container.innerHTML = '<p class="text-center">No recent activity</p>';
        return;
    }
    
    container.innerHTML = activities.slice(0, 10).map(activity => `
        <div class="activity-item">
            <div class="activity-icon">
                <i class="fas ${getActivityIcon(activity.type)}"></i>
            </div>
            <div class="activity-content">
                <div class="activity-title">${activity.message}</div>
                <div class="activity-time">${timeAgo(new Date(activity.time))}</div>
            </div>
        </div>
    `).join('');
}

function getActivityIcon(type) {
    switch(type) {
        case 'status': return 'fa-check-circle';
        case 'delete': return 'fa-trash';
        case 'announcement': return 'fa-bullhorn';
        default: return 'fa-info-circle';
    }
}

function timeAgo(date) {
    const seconds = Math.floor((new Date() - date) / 1000);
    if (seconds < 60) return 'just now';
    const minutes = Math.floor(seconds / 60);
    if (minutes < 60) return `${minutes} minutes ago`;
    const hours = Math.floor(minutes / 60);
    if (hours < 24) return `${hours} hours ago`;
    const days = Math.floor(hours / 24);
    return `${days} days ago`;
}

// ============ PAGE NAVIGATION ============

function navigateTo(page) {
    document.querySelectorAll('.admin-page').forEach(p => p.classList.remove('active'));
    document.getElementById(`${page}Page`).classList.add('active');
    
    document.querySelectorAll('.sidebar-menu .nav-link, .navbar-nav .nav-link').forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('data-page') === page) {
            link.classList.add('active');
        }
    });
    
    if (page === 'stats') {
        setTimeout(() => {
            if (destinationsChart) destinationsChart.destroy();
            if (monthlyChart) monthlyChart.destroy();
            initCharts();
            displayActivities();
        }, 100);
    }
}

// ============ SETTINGS ============

function saveSettings() {
    const emailNotifications = document.getElementById('emailNotifications').checked;
    localStorage.setItem('marwaSettings', JSON.stringify({ emailNotifications }));
    showToast('Settings saved successfully!');
}

function exportData() {
    const data = {
        bookings: allBookings,
        announcements: announcements,
        exportDate: new Date().toISOString()
    };
    const dataStr = JSON.stringify(data, null, 2);
    const blob = new Blob([dataStr], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `marwa-travels-export-${Date.now()}.json`;
    a.click();
    URL.revokeObjectURL(url);
    showToast('Data exported successfully!');
}

function clearAllData() {
    if (confirm('WARNING: This will delete ALL bookings and announcements. This cannot be undone. Continue?')) {
        localStorage.removeItem('marwaTravelBookings');
        localStorage.removeItem('marwaAnnouncements');
        localStorage.removeItem('marwaActivities');
        allBookings = [];
        announcements = [];
        loadBookings();
        loadAnnouncements();
        showToast('All data cleared');
        setTimeout(() => location.reload(), 1500);
    }
}

function showToast(message) {
    const toast = document.createElement('div');
    toast.className = 'alert alert-success position-fixed bottom-0 end-0 m-3';
    toast.style.zIndex = '9999';
    toast.style.animation = 'slideUp 0.3s ease';
    toast.innerHTML = message;
    document.body.appendChild(toast);
    setTimeout(() => toast.remove(), 3000);
}

// ============ LOAD SETTINGS ============

function loadSettings() {
    const settings = JSON.parse(localStorage.getItem('marwaSettings') || '{}');
    if (document.getElementById('emailNotifications')) {
        document.getElementById('emailNotifications').checked = settings.emailNotifications || false;
    }
}

// ============ INITIALIZE ============

document.addEventListener('DOMContentLoaded', () => {
    loadBookings();
    loadAnnouncements();
    loadSettings();
    
    // Navigation
    document.querySelectorAll('[data-page]').forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const page = link.getAttribute('data-page');
            navigateTo(page);
        });
    });
    
    // Default page
    navigateTo('bookings');
});