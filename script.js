// DOM Elements
const donorForm = document.getElementById('donor-form');
const searchBloodGroup = document.getElementById('searchBloodGroup');
const searchLocation = document.getElementById('searchLocation');
const donorResults = document.getElementById('donorResults');
const successMessage = document.getElementById('success-message');

// Counter Animation
function animateCounter() {
    const counters = document.querySelectorAll('.counter');
    counters.forEach(counter => {
        const target = parseInt(counter.getAttribute('data-target'));
        const count = +counter.innerText;
        const increment = target / 200;

        if (count < target) {
            counter.innerText = Math.ceil(count + increment);
            setTimeout(() => animateCounter(), 1);
        } else {
            counter.innerText = target;
        }
    });
}

// Initialize counters when they come into view
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            animateCounter();
        }
    });
});

document.querySelectorAll('.counter').forEach(counter => {
    observer.observe(counter);
});

// Mobile Navigation
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    hamburger.classList.toggle('active');
});

// Donor Registration
donorForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const donor = {
        fullName: document.getElementById('fullName').value,
        bloodGroup: document.getElementById('bloodGroup').value,
        age: document.getElementById('age').value,
        gender: document.getElementById('gender').value,
        phone: document.getElementById('phone').value,
        city: document.getElementById('city').value,
        state: document.getElementById('state').value,
        address: document.getElementById('address').value,
        medicalHistory: document.getElementById('medicalHistory').checked
    };

    // Get existing donors or initialize empty array
    let donors = JSON.parse(localStorage.getItem('donors') || '[]');
    donors.push(donor);
    localStorage.setItem('donors', JSON.stringify(donors));

    // Show success message
    successMessage.style.display = 'flex';
    donorForm.reset();
});

// Close success message
window.closeSuccessMessage = function() {
    successMessage.style.display = 'none';
};

// Search Functionality
function updateDonorResults() {
    const bloodGroup = searchBloodGroup.value.toLowerCase();
    const location = searchLocation.value.toLowerCase();
    const donors = JSON.parse(localStorage.getItem('donors') || '[]');

    // Filter donors based on search criteria
    const filteredDonors = donors.filter(donor => {
        const matchBloodGroup = !bloodGroup || donor.bloodGroup.toLowerCase() === bloodGroup;
        const matchLocation = !location || 
            donor.city.toLowerCase().includes(location) || 
            donor.state.toLowerCase().includes(location);
        return matchBloodGroup && matchLocation;
    });

    // Clear previous results
    donorResults.innerHTML = '';

    if (filteredDonors.length === 0) {
        donorResults.innerHTML = `
            <div class="no-results">
                <p>No donors found matching your criteria.</p>
            </div>
        `;
        return;
    }

    // Display filtered donors
    filteredDonors.forEach(donor => {
        const donorCard = document.createElement('div');
        donorCard.className = 'donor-card';
        donorCard.innerHTML = `
            <h3>${donor.fullName}</h3>
            <div class="donor-info">
                <p><strong>Blood Group:</strong> ${donor.bloodGroup}</p>
                <p><strong>Age:</strong> ${donor.age}</p>
                <p><strong>Location:</strong> ${donor.city}, ${donor.state}</p>
                <p><strong>Contact:</strong> ${donor.phone}</p>
            </div>
        `;
        donorResults.appendChild(donorCard);
    });
}

// Add event listeners for search inputs
searchBloodGroup.addEventListener('change', updateDonorResults);
searchLocation.addEventListener('input', updateDonorResults);

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Header scroll effect
const header = document.getElementById('header');
let lastScroll = 0;

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll > lastScroll && currentScroll > 100) {
        header.style.transform = 'translateY(-100%)';
    } else {
        header.style.transform = 'translateY(0)';
    }
    
    if (currentScroll > 100) {
        header.style.background = 'rgba(255, 255, 255, 0.98)';
        header.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
    } else {
        header.style.background = 'rgba(255, 255, 255, 0.95)';
        header.style.boxShadow = 'none';
    }
    
    lastScroll = currentScroll;
});