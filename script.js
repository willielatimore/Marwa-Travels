// Destinations data with gallery images
const destinations = [
    { 
        id: 1,
        name: "Maasai Mara, Kenya", 
        price: 850, 
        image: "https://images.pexels.com/photos/28157156/pexels-photo-28157156.jpeg", 
        description: "Witness the Great Migration", 
        duration: "3-5 days", 
        rating: 4.9,
        gallery: [
            "https://images.pexels.com/photos/10822351/pexels-photo-10822351.jpeg",
            "https://media.istockphoto.com/id/831386760/photo/masai-mara-sunrise-with-wildebeest-and-balloons.jpg?b=1&s=612x612&w=0&k=20&c=Ak45QFlElAN4UaWilj_cMyg1-dmF-rj742b69U2H7XI=",
            "https://media.istockphoto.com/id/1225495810/photo/leopard-perched-on-a-tree-out-in-the-open-with-a-safari-tour-in-the-background.jpg?b=1&s=612x612&w=0&k=20&c=kCwE5QXeffZlCaSbE-gc5gjRX7-XuiLxYGb_1ltcO4U=",
            "https://media.istockphoto.com/id/478924237/photo/african-lion-couple-and-safari-jeep.jpg?b=1&s=612x612&w=0&k=20&c=HpfSLqfWjI9SBMCmfKWwvZGDyfCsKhErCKsWUwekCTI=",
            "https://images.pexels.com/photos/27720736/pexels-photo-27720736.jpeg"
        ],
        highlights: ["Great Migration", "Big Five Safari", "Hot Air Balloon", "Maasai Village"]
    },
    { 
        id: 2,
        name: "Zanzibar, Tanzania", 
        price: 1200, 
        image: "https://images.pexels.com/photos/14408604/pexels-photo-14408604.jpeg", 
        description: "Pristine beaches & culture", 
        duration: "5-7 days", 
        rating: 4.8,
        gallery: [
            "https://images.pexels.com/photos/6707821/pexels-photo-6707821.jpeg",
            "https://images.pexels.com/photos/19963949/pexels-photo-19963949.jpeg",
            "https://images.pexels.com/photos/11025246/pexels-photo-11025246.jpeg",
            "https://images.pexels.com/photos/753626/pexels-photo-753626.jpeg?auto=compress&cs=tinysrgb&w=800",
            "https://images.pexels.com/photos/14667393/pexels-photo-14667393.jpeg"
        ],
        highlights: ["Stone Town", "Prison Island", "Spice Farms", "Sunset Dhow Cruise"]
    },
    { 
        id: 3,
        name: "Cape Town, SA", 
        price: 1500, 
        image: "https://images.pexels.com/photos/9385207/pexels-photo-9385207.jpeg", 
        description: "Table Mountain & vineyards", 
        duration: "4-6 days", 
        rating: 4.9,
        gallery: [
            "https://images.pexels.com/photos/2614818/pexels-photo-2614818.jpeg?auto=compress&cs=tinysrgb&w=800",
            "https://images.pexels.com/photos/1814932/pexels-photo-1814932.jpeg?auto=compress&cs=tinysrgb&w=800",
            "https://images.pexels.com/photos/164383/pexels-photo-164383.jpeg?auto=compress&cs=tinysrgb&w=800",
            "https://images.pexels.com/photos/15724084/pexels-photo-15724084.jpeg",
            "https://images.pexels.com/photos/7608002/pexels-photo-7608002.jpeg"
        ],
        highlights: ["Table Mountain", "Robben Island", "Cape Point", "Wine Tasting"]
    },
    { 
        id: 4,
        name: "Victoria Falls", 
        price: 980, 
        image: "https://images.pexels.com/photos/704557/pexels-photo-704557.jpeg?auto=compress&cs=tinysrgb&w=600", 
        description: "The Smoke that Thunders", 
        duration: "3-4 days", 
        rating: 4.7,
        gallery: [
            "https://images.pexels.com/photos/704557/pexels-photo-704557.jpeg?auto=compress&cs=tinysrgb&w=800",
            "https://images.pexels.com/photos/1868286/pexels-photo-1868286.jpeg?auto=compress&cs=tinysrgb&w=800",
            "https://images.pexels.com/photos/745249/pexels-photo-745249.jpeg?auto=compress&cs=tinysrgb&w=800",
            "https://images.pexels.com/photos/1626220/pexels-photo-1626220.jpeg?auto=compress&cs=tinysrgb&w=800"
        ],
        highlights: ["Devil's Pool", "Bungee Jumping", "Sunset Cruise", "Helicopter Tour"]
    },
    { 
        id: 5,
        name: "Serengeti", 
        price: 1100, 
        image: "https://images.pexels.com/photos/247272/pexels-photo-247272.jpeg?auto=compress&cs=tinysrgb&w=600", 
        description: "Endless plains & wildlife", 
        duration: "4-6 days", 
        rating: 4.9,
        gallery: [
            "https://images.pexels.com/photos/247272/pexels-photo-247272.jpeg?auto=compress&cs=tinysrgb&w=800",
            "https://images.pexels.com/photos/38260/lion-africa-wildlife-animal-38260.jpeg?auto=compress&cs=tinysrgb&w=800",
            "https://images.pexels.com/photos/1437264/pexels-photo-1437264.jpeg?auto=compress&cs=tinysrgb&w=800",
            "https://images.pexels.com/photos/1454600/pexels-photo-1454600.jpeg?auto=compress&cs=tinysrgb&w=800"
        ],
        highlights: ["Great Migration", "Big Five", "Hot Air Balloon", "Maasai Culture"]
    },
    { 
        id: 6,
        name: "Dubai, UAE", 
        price: 2000, 
        image: "https://images.pexels.com/photos/2664216/pexels-photo-2664216.jpeg?auto=compress&cs=tinysrgb&w=600", 
        description: "Luxury & adventure", 
        duration: "5-7 days", 
        rating: 4.8,
        gallery: [
            "https://images.pexels.com/photos/2664216/pexels-photo-2664216.jpeg?auto=compress&cs=tinysrgb&w=800",
            "https://images.pexels.com/photos/2673961/pexels-photo-2673961.jpeg?auto=compress&cs=tinysrgb&w=800",
            "https://images.pexels.com/photos/3846117/pexels-photo-3846117.jpeg?auto=compress&cs=tinysrgb&w=800",
            "https://images.pexels.com/photos/1239530/pexels-photo-1239530.jpeg?auto=compress&cs=tinysrgb&w=800"
        ],
        highlights: ["Burj Khalifa", "Desert Safari", "Dubai Mall", "Palm Jumeirah"]
    }
];


// Reviews data
const reviews = [
    { name: "Sarah Johnson", location: "United Kingdom", rating: 5, text: "Absolutely incredible experience! The safari in Maasai Mara exceeded all expectations. Our guide was knowledgeable and we saw the Big Five. Will definitely book again!", avatar: "https://randomuser.me/api/portraits/women/1.jpg" },
    { name: "Michael Chen", location: "Singapore", rating: 5, text: "Marwa Travels made our honeymoon unforgettable. Zanzibar was paradise, and every detail was perfectly arranged. Highly recommended!", avatar: "https://randomuser.me/api/portraits/men/2.jpg" },
    { name: "Amina Khan", location: "South Africa", rating: 4, text: "Great experience with Marwa Travels. Cape Town tour was well organized and the accommodations were top notch. Will use them again.", avatar: "https://randomuser.me/api/portraits/women/3.jpg" },
    { name: "David Wilson", location: "Australia", rating: 5, text: "The Victoria Falls tour was breathtaking! Everything from pickup to dropoff was seamless. Professional staff and amazing value.", avatar: "https://randomuser.me/api/portraits/men/4.jpg" },
    { name: "Lisa Anderson", location: "USA", rating: 5, text: "Serengeti hot air balloon safari was a dream come true! The team at Marwa Travels went above and beyond to make it special.", avatar: "https://randomuser.me/api/portraits/women/5.jpg" },
    { name: "James Oduya", location: "Nigeria", rating: 4, text: "Dubai trip was fantastic. Great hotels, smooth transfers, and excellent customer service. Worth every penny!", avatar: "https://randomuser.me/api/portraits/men/6.jpg" }
];

// Load destinations with overlay
function loadDestinations() {
    const container = document.getElementById('destinationsGrid');
    if (container) {
        container.innerHTML = destinations.map(dest => `
            <div class="col-md-6 col-lg-4">
                <div class="destination-card-container">
                    <div class="destination-card">
                        <div class="destination-image-wrapper">
                            <img src="${dest.image}" class="destination-img" alt="${dest.name}">
                            <div class="destination-overlay">
                                <div class="overlay-content">
                                    <div class="rating-badge">
                                        ${generateStars(dest.rating)}
                                        <span>${dest.rating}</span>
                                    </div>
                                    <h4 class="overlay-title">${dest.name}</h4>
                                    <div class="overlay-buttons">
                                        <button class="overlay-btn gallery-btn" onclick="openGallery(${dest.id})">
                                            <i class="fas fa-images"></i> View Gallery
                                        </button>
                                        <button class="overlay-btn details-btn" onclick="showDetails(${dest.id})">
                                            <i class="fas fa-info-circle"></i> Details
                                        </button>
                                    </div>
                                    <button class="overlay-book-btn" onclick="selectDestination('${dest.name}')">
                                        Book Now <i class="fas fa-arrow-right"></i>
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div class="destination-info">
                            <div class="destination-header">
                                <h5 class="destination-title">${dest.name}</h5>
                                <div class="destination-price">From $${dest.price}</div>
                            </div>
                            <p class="destination-description">${dest.description}</p>
                            <div class="destination-meta">
                                <span><i class="fas fa-clock"></i> ${dest.duration}</span>
                                <span><i class="fas fa-star" style="color: #FFD700;"></i> ${dest.rating}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        `).join('');
    }
}

// Open Gallery Modal
function openGallery(destinationId) {
    const destination = destinations.find(d => d.id === destinationId);
    if (destination) {
        // Store current destination for gallery
        sessionStorage.setItem('galleryDestination', JSON.stringify(destination));
        window.location.href = `gallery.html?id=${destinationId}`;
    }
}

// Show Destination Details Modal
function showDetails(destinationId) {
    const destination = destinations.find(d => d.id === destinationId);
    if (destination) {
        // Create modal dynamically
        const modalHtml = `
            <div class="modal fade" id="detailsModal" tabindex="-1">
                <div class="modal-dialog modal-lg modal-dialog-centered">
                    <div class="modal-content">
                        <div class="modal-header" style="background: linear-gradient(135deg, var(--purple-primary), var(--purple-deep)); color: white;">
                            <h5 class="modal-title">${destination.name}</h5>
                            <button type="button" class="btn-close btn-close-white" data-bs-dismiss="modal"></button>
                        </div>
                        <div class="modal-body">
                            <img src="${destination.image}" class="img-fluid rounded mb-3" alt="${destination.name}">
                            <p>${destination.description}</p>
                            <h6 class="text-purple">Highlights:</h6>
                            <ul class="highlights-list">
                                ${destination.highlights.map(h => `<li><i class="fas fa-check-circle text-red"></i> ${h}</li>`).join('')}
                            </ul>
                            <div class="row mt-3">
                                <div class="col-6">
                                    <strong>Duration:</strong> ${destination.duration}
                                </div>
                                <div class="col-6">
                                    <strong>Price:</strong> <span class="text-red">$${destination.price}</span> per person
                                </div>
                            </div>
                        </div>
                        <div class="modal-footer">
                            <button class="btn btn-primary-custom" onclick="selectDestination('${destination.name}'); document.getElementById('detailsModalClose').click();">
                                Book Now
                            </button>
                            <button class="btn btn-secondary" data-bs-dismiss="modal" id="detailsModalClose">Close</button>
                        </div>
                    </div>
                </div>
            </div>
        `;
        
        // Remove existing modal if any
        const existingModal = document.getElementById('detailsModal');
        if (existingModal) {
            existingModal.remove();
        }
        
        // Add modal to body
        document.body.insertAdjacentHTML('beforeend', modalHtml);
        
        // Show modal
        const modal = new bootstrap.Modal(document.getElementById('detailsModal'));
        modal.show();
        
        // Clean up when hidden
        document.getElementById('detailsModal').addEventListener('hidden.bs.modal', function() {
            this.remove();
        });
    }
}

// Generate star ratings
function generateStars(rating) {
    let stars = '';
    for (let i = 1; i <= 5; i++) {
        if (i <= Math.floor(rating)) {
            stars += '<i class="fas fa-star" style="color: #FFD700;"></i>';
        } else if (i === Math.ceil(rating) && rating % 1 !== 0) {
            stars += '<i class="fas fa-star-half-alt" style="color: #FFD700;"></i>';
        } else {
            stars += '<i class="far fa-star" style="color: #ddd;"></i>';
        }
    }
    return stars;
}

// Load reviews
function loadReviews() {
    const container = document.getElementById('reviewsGrid');
    if (container) {
        container.innerHTML = reviews.map(review => `
            <div class="col-md-6 col-lg-4">
                <div class="review-card">
                    <div class="review-rating">
                        ${generateStars(review.rating)}
                    </div>
                    <p class="review-text">"${review.text}"</p>
                    <div class="d-flex align-items-center">
                        <img src="${review.avatar}" alt="${review.name}" class="review-avatar">
                        <div>
                            <div class="review-author">${review.name}</div>
                            <div class="review-location">${review.location}</div>
                        </div>
                    </div>
                </div>
            </div>
        `).join('');
    }
}

// Animate statistics counter
function animateStats() {
    const statNumbers = document.querySelectorAll('.stat-number');
    statNumbers.forEach(stat => {
        const target = parseFloat(stat.getAttribute('data-target'));
        const isDecimal = target % 1 !== 0;
        let current = 0;
        const increment = target / 50;
        const updateCounter = () => {
            current += increment;
            if (current < target) {
                if (isDecimal) {
                    stat.textContent = current.toFixed(1);
                } else {
                    stat.textContent = Math.ceil(current);
                }
                requestAnimationFrame(updateCounter);
            } else {
                stat.textContent = isDecimal ? target.toFixed(1) : target;
            }
        };
        updateCounter();
    });
}

// Trigger stats animation when in viewport
function isElementInViewport(el) {
    const rect = el.getBoundingClientRect();
    return rect.top >= 0 && rect.bottom <= window.innerHeight + 100;
}

let statsAnimated = false;
window.addEventListener('scroll', () => {
    const statsSection = document.querySelector('.statistics-section');
    if (statsSection && !statsAnimated && isElementInViewport(statsSection)) {
        statsAnimated = true;
        animateStats();
    }
});

// Select destination and scroll to booking form
function selectDestination(destName) {
    const destinationSelect = document.getElementById('destination');
    if (destinationSelect) {
        for (let i = 0; i < destinationSelect.options.length; i++) {
            if (destinationSelect.options[i].text.includes(destName)) {
                destinationSelect.selectedIndex = i;
                break;
            }
        }
    }
    document.getElementById('booking').scrollIntoView({ behavior: 'smooth' });
}

// Initialize booking form
function initBooking() {
    const form = document.getElementById('bookingForm');
    if (form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            
            const destination = document.getElementById('destination').value;
            const checkIn = document.getElementById('checkIn').value;
            const checkOut = document.getElementById('checkOut').value;
            const travelers = document.getElementById('travelers').value;
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const phone = document.getElementById('phone').value;
            const specialRequests = document.getElementById('specialRequests').value;
            
            if (!destination || !checkIn || !checkOut || !travelers || !name || !email) {
                alert('Please fill in all required fields');
                return;
            }
            
            if (new Date(checkIn) >= new Date(checkOut)) {
                alert('Check-out date must be after check-in date');
                return;
            }
            
            const booking = {
                id: Date.now(),
                destination: destination,
                checkIn: checkIn,
                checkOut: checkOut,
                travelers: parseInt(travelers),
                name: name,
                email: email,
                phone: phone,
                specialRequests: specialRequests,
                bookingDate: new Date().toISOString()
            };
            
            let bookings = JSON.parse(localStorage.getItem('marwaTravelBookings') || '[]');
            bookings.push(booking);
            localStorage.setItem('marwaTravelBookings', JSON.stringify(bookings));
            
            const days = Math.ceil((new Date(checkOut) - new Date(checkIn)) / (1000 * 60 * 60 * 24));
            const priceMatch = destination.match(/\$(\d+)/);
            const pricePerPerson = priceMatch ? parseInt(priceMatch[1]) : 850;
            const totalPrice = pricePerPerson * parseInt(travelers) * days;
            
            const confirmationDiv = document.getElementById('confirmation');
            confirmationDiv.innerHTML = `
                <div class="alert alert-success">
                    <h4 class="text-purple">✅ Booking Confirmed!</h4>
                    <p>Thank you <strong>${name}</strong>! Your trip to <strong>${destination}</strong> has been booked.</p>
                    <p><strong>Booking ID:</strong> ${booking.id}</p>
                    <p><strong>Travelers:</strong> ${travelers} | <strong>Duration:</strong> ${days} days</p>
                    <p><strong>Total Price:</strong> <span class="text-red fw-bold">$${totalPrice}</span></p>
                    <p>A confirmation email has been sent to <strong>${email}</strong></p>
                    <button class="btn btn-primary-custom mt-2" onclick="location.reload()">Book Another Trip</button>
                </div>
            `;
            
            form.reset();
            confirmationDiv.scrollIntoView({ behavior: 'smooth' });
            
            setTimeout(() => {
                if (confirmationDiv.innerHTML !== '') {
                    confirmationDiv.innerHTML = '';
                }
            }, 10000);
        });
    }
}

// Smooth scroll
function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });
}

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    loadDestinations();
    loadReviews();
    initBooking();
    initSmoothScroll();
});

// Modern Contact Form Handler
function initModernContactForm() {
    const form = document.getElementById('contactFormModern');
    if (form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            const name = document.getElementById('contactName').value;
            const email = document.getElementById('contactEmail').value;
            const subject = document.getElementById('contactSubject').value;
            const message = document.getElementById('contactMessage').value;
            
            // Simulate sending
            showToast(`Thank you ${name}! We'll get back to you within 24 hours.`);
            form.reset();
        });
    }
}

// Newsletter Form Handler
function initNewsletter() {
    const newsletterForm = document.querySelector('.newsletter-form');
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const email = newsletterForm.querySelector('input[type="email"]').value;
            showToast(`Subscribed! Check your inbox at ${email} for exclusive deals.`);
            newsletterForm.reset();
        });
    }
}

// Back to Top Button
function initBackToTop() {
    const btn = document.getElementById('backToTop');
    if (btn) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 300) {
                btn.classList.add('show');
            } else {
                btn.classList.remove('show');
            }
        });
        
        btn.addEventListener('click', () => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }
}

// Add to DOMContentLoaded
document.addEventListener('DOMContentLoaded', () => {
    // ... existing code ...
    initModernContactForm();
    initNewsletter();
    initBackToTop();
});