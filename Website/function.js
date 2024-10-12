// Dữ liệu cho các môn học
// Updated data for subjects with more topics
const subjectsData = {
    "Mathematics": {
        "Bài Giảng": [
            "Algebra Basics Lecture",
            "Geometry Basics Lecture",
            "Calculus Basics Lecture",
            "Linear Algebra Lecture",
            "Statistics Basics Lecture",
            "Number Theory Lecture"
        ],
        "Bài Tập": [
            "Algebra Exercises",
            "Geometry Exercises",
            "Calculus Exercises",
            "Linear Algebra Exercises",
            "Statistics Exercises",
            "Number Theory Exercises"
        ],
        "Tham Khảo": [
            "Algebra References",
            "Geometry References",
            "Calculus References",
            "Linear Algebra References",
            "Statistics References",
            "Number Theory References"
        ]
    },
    "Physics": {
        "Bài Giảng": [
            "Mechanics Lecture",
            "Thermodynamics Lecture",
            "Electromagnetism Lecture",
            "Quantum Physics Lecture",
            "Optics Lecture"
        ],
        "Bài Tập": [
            "Mechanics Exercises",
            "Thermodynamics Exercises",
            "Electromagnetism Exercises",
            "Quantum Physics Exercises",
            "Optics Exercises"
        ],
        "Tham Khảo": [
            "Mechanics References",
            "Thermodynamics References",
            "Electromagnetism References",
            "Quantum Physics References",
            "Optics References"
        ]
    },
    "Chemistry": {
        "Bài Giảng": [
            "Atomic Structure Lecture",
            "Chemical Bonding Lecture",
            "Organic Chemistry Lecture",
            "Inorganic Chemistry Lecture",
            "Physical Chemistry Lecture"
        ],
        "Bài Tập": [
            "Atomic Structure Exercises",
            "Chemical Bonding Exercises",
            "Organic Chemistry Exercises",
            "Inorganic Chemistry Exercises",
            "Physical Chemistry Exercises"
        ],
        "Tham Khảo": [
            "Atomic Structure References",
            "Chemical Bonding References",
            "Organic Chemistry References",
            "Inorganic Chemistry References",
            "Physical Chemistry References"
        ]
    },
    "Computer Science": {
        "Bài Giảng": [
            "Introduction to Programming Lecture",
            "Data Structures Lecture",
            "Algorithms Lecture",
            "Database Systems Lecture",
            "Web Development Lecture"
        ],
        "Bài Tập": [
            "Programming Exercises",
            "Data Structures Exercises",
            "Algorithms Exercises",
            "Database Systems Exercises",
            "Web Development Exercises"
        ],
        "Tham Khảo": [
            "Programming References",
            "Data Structures References",
            "Algorithms References",
            "Database Systems References",
            "Web Development References"
        ]
    },
    "English": {
        "Bài Giảng": [
            "Grammar Essentials Lecture",
            "Writing Skills Lecture",
            "Reading Comprehension Lecture",
            "Speaking Skills Lecture",
            "Listening Skills Lecture"
        ],
        "Bài Tập": [
            "Grammar Exercises",
            "Writing Exercises",
            "Reading Comprehension Exercises",
            "Speaking Exercises",
            "Listening Exercises"
        ],
        "Tham Khảo": [
            "Grammar References",
            "Writing References",
            "Reading Comprehension References",
            "Speaking References",
            "Listening References"
        ]
    }
};


// Hàm để tải nội dung của một môn học
function loadSubject(subjectName) {
    const filesGrid = document.getElementById('files-grid');
    filesGrid.innerHTML = `<h2>${subjectName}</h2>`;
    
    if (subjectsData[subjectName]) {
        const data = subjectsData[subjectName];

        for (const category in data) {
            const categoryBox = document.createElement('div');
            categoryBox.className = 'category-box';

            const categoryHeader = document.createElement('h4');
            categoryHeader.textContent = category;
            categoryBox.appendChild(categoryHeader);

            const topicList = document.createElement('ul');
            topicList.className = 'topic-list'; // Assign the topic-list class

            data[category].forEach(topic => {
                const listItem = document.createElement('li');
                listItem.className = 'topic-item'; // Use the new class for topic items
                listItem.textContent = topic;

                // Add click event to show lesson details
                listItem.onclick = () => showLessonDetails(topic); // Show lesson details on click
                topicList.appendChild(listItem);
            });

            categoryBox.appendChild(topicList);
            filesGrid.appendChild(categoryBox);
        }

        // Add the list of all subjects below the selected subject
        const allSubjectsBox = document.createElement('div');
        allSubjectsBox.className = 'all-subjects-box';
        
        const allSubjectsHeader = document.createElement('h4');
        allSubjectsHeader.textContent = "Other Subjects";
        allSubjectsBox.appendChild(allSubjectsHeader);

        const allSubjectsList = document.createElement('ul');
        allSubjectsList.className = 'subjects-list'; // Class for styling

        // Loop through all subjects to create the list
        for (const subject in subjectsData) {
            if (subject !== subjectName) { // Exclude the selected subject
                const subjectItem = document.createElement('li');
                subjectItem.className = 'subject-item'; // Class for styling
                subjectItem.textContent = subject;
                subjectItem.onclick = () => loadSubject(subject); // Load subject on click
                allSubjectsList.appendChild(subjectItem);
            }
        }

        allSubjectsBox.appendChild(allSubjectsList);
        filesGrid.appendChild(allSubjectsBox);

        showBackButton(); // Show the back button when loading a subject
    }
}

// Hàm để tải "My Files"
function loadMyFiles() {
    const filesGrid = document.getElementById('files-grid');
    filesGrid.innerHTML = `
        <div class="file-item folder" onclick="loadSubject('Mathematics')">
            <span>Mathematics</span>
        </div>
        <div class="file-item folder" onclick="loadSubject('Physics')">
            <span>Physics</span>
        </div>
        <div class="file-item folder" onclick="loadSubject('Chemistry')">
            <span>Chemistry</span>
        </div>
        <div class="file-item folder" onclick="loadSubject('Computer Science')">
            <span>Computer Science</span>
        </div>
        <div class="file-item folder" onclick="loadSubject('English')">
            <span>English</span>
        </div>
    `;
    hideBackButton(); // Ẩn nút "Quay lại" khi trở về "My Files"
}

// Hàm để hiển thị nút "Quay lại"
function showBackButton() {
    const backButton = document.getElementById('back-button');
    backButton.style.display = 'block'; // Hiện nút
}

// Hàm để ẩn nút "Quay lại"
function hideBackButton() {
    const backButton = document.getElementById('back-button');
    backButton.style.display = 'none'; // Ẩn nút
}
// Hàm để hiển thị chi tiết bài học
function showLessonDetails(lessonName) {
    const lessonDetails = document.getElementById('lesson-details');
    lessonDetails.innerHTML = ""; // Clear previous details

    // Generate example lesson details based on the lesson name
    const lessonContent = `
        <h3 class="lesson-title">${lessonName}</h3>
        <p class ="lesson-description"> Mục tiêu: Hiểu rõ về ${lessonName} và cách áp dụng kiến thức vào thực tiễn.</p>
        <p class ="lesson-description"> Nội dung: Bài học này sẽ đề cập đến các khái niệm quan trọng, bao gồm:</p>
        <ul>
            <li>Khái niệm 1: Giới thiệu về ${lessonName}.</li>
            <li>Khái niệm 2: Các ứng dụng thực tế của ${lessonName}.</li>
            <li>Khái niệm 3: Thảo luận về các ví dụ.</li>
        </ul>
        <button onclick="hideLessonDetails()">Quay lại</button>
    `;

    lessonDetails.innerHTML = lessonContent;
    lessonDetails.style.display = "block"; // Hiển thị chi tiết bài học
}

// Hàm để ẩn chi tiết bài học
function hideLessonDetails() {
    const lessonDetails = document.getElementById('lesson-details');
    lessonDetails.style.display = "none"; // Ẩn chi tiết bài học
}
