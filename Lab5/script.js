// Sample array of courses
const courses = [
    {
        imgSrc: "../Lab5/image_lab5/security.png",
        altText: "Information Security Management System",
        title: "FPT_ISMS Refresh Training S2 2024 (Vietnamese)",
        instructor: "FSOFT Content Development",
        progress: 85,
        rating: "★★★★☆"
    },
    {
        imgSrc: "../Lab5/image_lab5/spring.png",
        altText: "Spring Boot Development Bootcamp",
        title: "The Complete Spring Boot Development Bootcamp",
        instructor: "Learn The Part Inc, Rayan Slim, Jose...",
        progress: 72,
        rating: "★★★★☆"
    },
    {
        imgSrc: "../Lab5/image_lab5/muleSoft.png",
        altText: "MuleSoft Complete Guide",
        title: "MuleSoft 4.X Complete Guide For Beginners - Hands On...",
        instructor: "Chinna Reddy",
        progress: 15,
        rating: "★★★★☆"
    },
    {
        imgSrc: "../Lab5/image_lab5/english.png",
        altText: "English Vocabulary",
        title: "English Vocabulary: 504 Essential Words through 7...",
        instructor: "Mister Rabbely",
        progress: 43,
        rating: "★★★★☆"
    },
    {
        imgSrc: "../Lab5/image_lab5/REST.png",
        altText: "Build a Backend",
        title: "Build a Backend REST API with Python & Java",
        instructor: "Maker Honesty",
        progress: 29,
        rating: "★★★★☆"
    },
    {
        imgSrc: "../Lab5/image_lab5/chatgpt.png",
        altText: "ChatGPT Python Programming",
        title: "ChatGPT Python Programming & Excercises Practice",
        instructor: "Indonesia Founder",
        progress: 60,
        rating: "★★★★☆"
    },
    {
        imgSrc: "../Lab5/image_lab5/security.png",
        altText: "Information Security Management System",
        title: "FPT_ISMS Refresh Training S2 2024 (Vietnamese)",
        instructor: "FSOFT Content Development",
        progress: 85,
        rating: "★★★★☆"
    },
    {
        imgSrc: "../Lab5/image_lab5/spring.png",
        altText: "Spring Boot Development Bootcamp",
        title: "The Complete Spring Boot Development Bootcamp",
        instructor: "Learn The Part Inc, Rayan Slim, Jose...",
        progress: 72,
        rating: "★★★★☆"
    },
    {
        imgSrc: "../Lab5/image_lab5/muleSoft.png",
        altText: "MuleSoft Complete Guide",
        title: "MuleSoft 4.X Complete Guide For Beginners - Hands On...",
        instructor: "Chinna Reddy",
        progress: 15,
        rating: "★★★★☆"
    },
    {
        imgSrc: "../Lab5/image_lab5/english.png",
        altText: "English Vocabulary",
        title: "English Vocabulary: 504 Essential Words through 7...",
        instructor: "Mister Rabbely",
        progress: 43,
        rating: "★★★★☆"
    },
    {
        imgSrc: "../Lab5/image_lab5/REST.png",
        altText: "Build a Backend",
        title: "Build a Backend REST API with Python & Java",
        instructor: "Maker Honesty",
        progress: 29,
        rating: "★★★★☆"
    },
    {
        imgSrc: "../Lab5/image_lab5/chatgpt.png",
        altText: "ChatGPT Python Programming",
        title: "ChatGPT Python Programming & Excercises Practice",
        instructor: "Indonesia Founder",
        progress: 60,
        rating: "★★★★☆"
    }
];

// Function to generate course cards
function generateCourseCards() {
    const courseGrid = document.querySelector('.course-grid');

    courses.forEach(course => {
        // Create course card container
        const courseCard = document.createElement('div');
        courseCard.className = 'course-card';
        
        // Course image
        const courseImg = document.createElement('img');
        courseImg.src = course.imgSrc;
        courseImg.alt = course.altText;
        courseImg.className = 'course-image';
        courseCard.appendChild(courseImg);
        
        // Course title
        const courseTitle = document.createElement('div');
        courseTitle.className = 'course-title';
        courseTitle.textContent = course.title;
        courseCard.appendChild(courseTitle);
        
        // Course instructor
        const courseInstructor = document.createElement('div');
        courseInstructor.className = 'course-instructor';
        courseInstructor.textContent = course.instructor;
        courseCard.appendChild(courseInstructor);
        
        // Create a container for the three dots menu
        const menuButton = document.createElement('div');
        menuButton.className = 'menu-button';
        menuButton.innerHTML = '<i class="fas fa-ellipsis-v"></i>'; // Font Awesome icon
        
        // Add event listener for menu options
        menuButton.addEventListener('click', (event) => {
            event.stopPropagation(); // Prevent click event from bubbling
            toggleMenu(menuButton);  // Function to toggle menu visibility
        });
        
        // Append the menu button to the course card
        courseCard.appendChild(menuButton);
        
        // Progress bar container
        const progressBarContainer = document.createElement('div');
        progressBarContainer.className = 'progress-bar';
        
        // Progress bar
        const progress = document.createElement('div');
        progress.className = 'progress';
        progress.style.width = `${course.progress}%`;
        progressBarContainer.appendChild(progress);
        courseCard.appendChild(progressBarContainer);
        
        // Create a container for percentage and rating
        const progressRatingContainer = document.createElement('div');
        progressRatingContainer.className = 'progress-rating-container';
        
        // Progress percentage
        const progressPercentage = document.createElement('div');
        progressPercentage.className = 'progress-percentage';
        progressPercentage.textContent = `${course.progress}% complete`;
        
        // Rating container (with star rating)
        const ratingContainer = document.createElement('div');
        ratingContainer.className = 'rating-container';
        
        // Star rating
        const starRating = document.createElement('div');
        starRating.className = 'rating';
        starRating.textContent = course.rating;
        
        // Leave a rating 
        const leaveRating = document.createElement('span');
        leaveRating.className = 'leave-rating';
        leaveRating.textContent = 'Leave a Rating';
        
        // Append items to their respective containers
        ratingContainer.appendChild(starRating);
        ratingContainer.appendChild(leaveRating);
        progressRatingContainer.appendChild(progressPercentage);
        progressRatingContainer.appendChild(ratingContainer);
        
        // Append the progress-rating container to the course card
        courseCard.appendChild(progressRatingContainer);

        // Append course card to the course grid
        courseGrid.appendChild(courseCard);
    });
}

function addMenuListeners() {
    const menuButtons = document.querySelectorAll('.menu-button');
    
    menuButtons.forEach(menuButton => {
        menuButton.addEventListener('click', (event) => {
            event.stopPropagation(); // Prevent click event from bubbling
            toggleMenu(menuButton);  // Function to toggle menu visibility
        });
    });
}
// Toggle menu visibility
function toggleMenu(menuButton) {
    let dropdown = menuButton.querySelector('.dropdown-menu');
    
    // If dropdown doesn't exist, create it
    if (!dropdown) {
        dropdown = document.createElement('div');
        dropdown.className = 'dropdown-menu';
        dropdown.innerHTML = `
            <div class="menu-item">Edit</div>
            <div class="menu-item">Delete</div>
            <div class="menu-item">Share</div>
        `;
        menuButton.appendChild(dropdown);
    }

    // Toggle visibility
    dropdown.style.display = dropdown.style.display === 'block' ? 'none' : 'block';
}

// Close dropdown when clicking outside
document.addEventListener('click', () => {
    const dropdowns = document.querySelectorAll('.dropdown-menu');
    dropdowns.forEach(dropdown => {
        dropdown.style.display = 'none';
    });
});

// Call the function on page load
document.addEventListener('DOMContentLoaded', generateCourseCards);

// Show or hide sections based on the clicked tab
function showSection(sectionId) {
    if (sectionId === 'learningPath') {
        window.location.href = 'learningPath.html';
        return;
    }
    if (sectionId === 'allCourses') {
        window.location.href = 'index.html';
        return;
    }

    // Hide all sections
    const sections = document.querySelectorAll('.section');
    sections.forEach(section => section.style.display = 'none');

    // Show selected section
    document.getElementById(sectionId).style.display = 'block';
}
