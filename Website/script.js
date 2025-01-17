function loadFile() {
    const fileInput = document.getElementById('fileInput');
    const file = fileInput.files[0];
    const lessonPdf = document.getElementById('lessonPdf');

    if (file) {
        const fileURL = URL.createObjectURL(file);
        lessonPdf.src = fileURL;

        localStorage.setItem('fileSelected', true);
        alert("File loaded successfully!");
    } else {
        alert("Please select a file first.");
    }
}
        // Function to get the query parameter from the URL
        function getQueryParameter(name) {
            const urlParams = new URLSearchParams(window.location.search);
            return urlParams.get(name);
        }

        // Content and PDF sources for different lessons
            const lessons = {
        // Math
        // Lectures
        algebra_basics: {
            title: "Algebra Basics Lecture",
            pdf: "/uploads/algebra_basics.pdf"
        },
        geometry_basics: {
            title: "Geometry Basics Lecture",
            pdf: "/uploads/geometry_basics.pdf"
        },
        calculus_basics: {
            title: "Calculus Basics Lecture",
            pdf: "/uploads/calculus_basics.pdf"
        },
        linear_algebra: {
            title: "Linear Algebra Lecture",
            pdf: "/uploads/linear_algebra.pdf"
        },
        statistics_basics: {
            title: "Statistics Basics Lecture",
            pdf: "/uploads/statistics_basics.pdf"
        },
        number_theory: {
            title: "Number Theory Lecture",
            pdf: "/uploads/number_theory.pdf"
        },
        // Exercises
        algebra_basics_exercises: {
            title: "Algebra Basics Exercises",
            pdf: "/uploads/algebra_basics_exercises.pdf"
        },
        geometry_basics_exercises: {
            title: "Geometry Basics Exercises",
            pdf: "/uploads/geometry_basics_exercises.pdf"
        },
        calculus_basics_exercises: {
            title: "Calculus Exercises",
            pdf: "/uploads/calculus_basics_exercises.pdf"
        },
        linear_algebra_exercises: {
            title: "Linear Algebra Exercises",
            pdf: "/uploads/linear_algebra_exercises.pdf"
        },
        statistics_basics_exercises: {
            title: "Statistics Exercises",
            pdf: "/uploads/statistics_basics_exercises.pdf"
        },
        number_theory_exercises: {
            title: "Number Theory Exercises",
            pdf: "/uploads/number_theory_exercises.pdf"
        },
        // References
        algebra_basics_ref: {
            title: "Algebra References",
            pdf: "/uploads/algebra_basics_ref.pdf"
        },
        geometry_basics_ref: {
            title: "Geometry References",
            pdf: "/uploads/geometry_basics_ref.pdf"
        },
        calculus_basics_ref: {
            title: "Calculus References",
            pdf: "/uploads/calculus_basics_ref.pdf"
        },
        linear_algebra_ref: {
            title: "Linear Algebra References",
            pdf: "/uploads/linear_algebra_ref.pdf"
        },
        statistics_basics_ref: {
            title: "Statistics References",
            pdf: "/uploads/statistics_basics_ref.pdf"
        },
        number_theory_ref: {
            title: "Number Theory References",
            pdf: "/uploads/number_theory_ref.pdf"
        },
        // Chemistry Lectures (Bài Giảng)
        atomic_structure: {
            title: "Atomic Structure",
            pdf: "/uploads/atomic_structure_lecture.pdf"
        },
        chemical_bonding: {
            title: "Chemical Bonding",
            pdf: "/uploads/chemical_bonding_lecture.pdf"
        },
        stoichiometry: {
            title: "Stoichiometry",
            pdf: "/uploads/stoichiometry_lecture.pdf"
        },
        thermodynamics: {
            title: "Thermodynamics",
            pdf: "/uploads/thermodynamics_lecture.pdf"
        },
        chemical_kinetics: {
            title: "Chemical Kinetics",
            pdf: "/uploads/chemical_kinetics_lecture.pdf"
        },
        chemical_equilibrium: {
            title: "Chemical Equilibrium",
            pdf: "/uploads/chemical_equilibrium_lecture.pdf"
        },

        // Chemistry Exercises (Bài Tập)
        atomic_structure_exercises: {
            title: "Atomic Structure Exercises",
            pdf: "/uploads/atomic_structure_exercises.pdf"
        },
        chemical_bonding_exercises: {
            title: "Chemical Bonding Exercises",
            pdf: "/uploads/chemical_bonding_exercises.pdf"
        },
        stoichiometry_exercises: {
            title: "Stoichiometry Exercises",
            pdf: "/uploads/stoichiometry_exercises.pdf"
        },
        thermodynamics_exercises: {
            title: "Thermodynamics Exercises",
            pdf: "/uploads/thermodynamics_exercises.pdf"
        },
        chemical_kinetics_exercises: {
            title: "Chemical Kinetics Exercises",
            pdf: "/uploads/chemical_kinetics_exercises.pdf"
        },
        chemical_equilibrium_exercises: {
            title: "Chemical Equilibrium Exercises",
            pdf: "/uploads/chemical_equilibrium_exercises.pdf"
        },

        // Chemistry References (Tham Khảo)
        atomic_structure_references: {
            title: "Atomic Structure References",
            pdf: "/uploads/atomic_structure_references.pdf"
        },
        chemical_bonding_references: {
            title: "Chemical Bonding References",
            pdf: "/uploads/chemical_bonding_references.pdf"
        },
        stoichiometry_references: {
            title: "Stoichiometry References",
            pdf: "/uploads/stoichiometry_references.pdf"
        },
        thermodynamics_references: {
            title: "Thermodynamics References",
            pdf: "/uploads/thermodynamics_references.pdf"
        },
        chemical_kinetics_references: {
            title: "Chemical Kinetics References",
            pdf: "/uploads/chemical_kinetics_references.pdf"
        },
        chemical_equilibrium_references: {
            title: "Chemical Equilibrium References",
            pdf: "/uploads/chemical_equilibrium_references.pdf"
        },

        // Computer Science Lectures (Bài Giảng)
        programming_fundamentals: {
            title: "Programming Fundamentals",
            pdf: "/uploads/programming_fundamentals_lecture.pdf"
        },
        data_structures: {
            title: "Data Structures",
            pdf: "/uploads/data_structures_lecture.pdf"
        },
        algorithms: {
            title: "Algorithms",
            pdf: "/uploads/algorithms_lecture.pdf"
        },
        databases: {
            title: "Database Management Systems",
            pdf: "/uploads/databases_lecture.pdf"
        },
        web_development: {
            title: "Web Development Basics",
            pdf: "/uploads/web_development_lecture.pdf"
        },
        software_engineering: {
            title: "Software Engineering Principles",
            pdf: "/uploads/software_engineering_lecture.pdf"
        },

        // Computer Science Exercises (Bài Tập)
        programming_fundamentals_exercises: {
            title: "Programming Fundamentals Exercises",
            pdf: "/uploads/programming_fundamentals_exercises.pdf"
        },
        data_structures_exercises: {
            title: "Data Structures Exercises",
            pdf: "/uploads/data_structures_exercises.pdf"
        },
        algorithms_exercises: {
            title: "Algorithms Exercises",
            pdf: "/uploads/algorithms_exercises.pdf"
        },
        databases_exercises: {
            title: "Database Exercises",
            pdf: "/uploads/databases_exercises.pdf"
        },
        web_development_exercises: {
            title: "Web Development Exercises",
            pdf: "/uploads/web_development_exercises.pdf"
        },
        software_engineering_exercises: {
            title: "Software Engineering Exercises",
            pdf: "/uploads/software_engineering_exercises.pdf"
        },

        // Computer Science References (Tham Khảo)
        programming_fundamentals_references: {
            title: "Programming Fundamentals References",
            pdf: "/uploads/programming_fundamentals_references.pdf"
        },
        data_structures_references: {
            title: "Data Structures References",
            pdf: "/uploads/data_structures_references.pdf"
        },
        algorithms_references: {
            title: "Algorithms References",
            pdf: "/uploads/algorithms_references.pdf"
        },
        databases_references: {
            title: "Database References",
            pdf: "/uploads/databases_references.pdf"
        },
        web_development_references: {
            title: "Web Development References",
            pdf: "/uploads/web_development_references.pdf"
        },
        software_engineering_references: {
            title: "Software Engineering References",
            pdf: "/uploads/software_engineering_references.pdf"
        },
        // Physics Lectures (Bài Giảng)
        kinematics: {
            title: "Kinematics in One Dimension",
            pdf: "/uploads/kinematics_lecture.pdf"
        },
        forces: {
            title: "Forces and Newton's Laws",
            pdf: "/uploads/forces_lecture.pdf"
        },
        energy: {
            title: "Work and Energy",
            pdf: "/uploads/energy_lecture.pdf"
        },
        momentum: {
            title: "Momentum and Collisions",
            pdf: "/uploads/momentum_lecture.pdf"
        },
        waves: {
            title: "Waves and Sound",
            pdf: "/uploads/waves_lecture.pdf"
        },
        electricity: {
            title: "Electromagnetism Basics",
            pdf: "/uploads/electricity_lecture.pdf"
        },

        // Physics Exercises (Bài Tập)
        kinematics_exercises: {
            title: "Kinematics Exercises",
            pdf: "/uploads/kinematics_exercises.pdf"
        },
        forces_exercises: {
            title: "Forces Exercises",
            pdf: "/uploads/forces_exercises.pdf"
        },
        energy_exercises: {
            title: "Work and Energy Exercises",
            pdf: "/uploads/energy_exercises.pdf"
        },
        momentum_exercises: {
            title: "Momentum Exercises",
            pdf: "/uploads/momentum_exercises.pdf"
        },
        waves_exercises: {
            title: "Waves Exercises",
            pdf: "/uploads/waves_exercises.pdf"
        },
        electricity_exercises: {
            title: "Electromagnetism Exercises",
            pdf: "/uploads/electricity_exercises.pdf"
        },

        // Physics References (Tham Khảo)
        kinematics_references: {
            title: "Kinematics References",
            pdf: "/uploads/kinematics_references.pdf"
        },
        forces_references: {
            title: "Forces References",
            pdf: "/uploads/forces_references.pdf"
        },
        energy_references: {
            title: "Work and Energy References",
            pdf: "/uploads/energy_references.pdf"
        },
        momentum_references: {
            title: "Momentum References",
            pdf: "/uploads/momentum_references.pdf"
        },
        waves_references: {
            title: "Waves References",
            pdf: "/uploads/waves_references.pdf"
        },
        electricity_references: {
            title: "Electromagnetism References",
            pdf: "/uploads/electricity_references.pdf"
        },
        // English
        // Lectures
        grammar_basics: {
            title: "Grammar Basics",
            pdf: "/uploads/grammar_basics.pdf"
        },
        literature_intro: {
            title: "Introduction to Literature",
            pdf: "/uploads/literature_intro.pdf"
        },
        writing_techniques: {
            title: "Writing Techniques",
            pdf: "/uploads/writing_techniques.pdf"
        },
        reading_comprehension: {
            title: "Reading Comprehension",
            pdf: "/uploads/reading_comprehension.pdf"
        },
        understanding_poetry: {
            title: "Understanding Poetry",
            pdf: "/uploads/understanding_poetry.pdf"
        },
        rhetoric_persuasion: {
            title: "Rhetoric and Persuasion",
            pdf: "/uploads/rhetoric_persuasion.pdf"
        },
        
        // Exercises
        grammar_exercises: {
            title: "Grammar Exercises",
            pdf: "/uploads/grammar_exercises.pdf"
        },
        literature_exercises: {
            title: "Literature Exercises",
            pdf: "/uploads/literature_exercises.pdf"
        },
        writing_exercises: {
            title: "Writing Exercises",
            pdf: "/uploads/writing_exercises.pdf"
        },
        reading_exercises: {
            title: "Reading Exercises",
            pdf: "/uploads/reading_exercises.pdf"
        },
        poetry_exercises: {
            title: "Poetry Exercises",
            pdf: "/uploads/poetry_exercises.pdf"
        },
        rhetoric_exercises: {
            title: "Rhetoric Exercises",
            pdf: "/uploads/rhetoric_exercises.pdf"
        },
        
        // References
        grammar_references: {
            title: "Grammar References",
            pdf: "/uploads/grammar_references.pdf"
        },
        literature_references: {
            title: "Literature References",
            pdf: "/uploads/literature_references.pdf"
        },
        writing_references: {
            title: "Writing References",
            pdf: "/uploads/writing_references.pdf"
        },
        reading_references: {
            title: "Reading References",
            pdf: "/uploads/reading_references.pdf"
        },
        poetry_references: {
            title: "Poetry References",
            pdf: "/uploads/poetry_references.pdf"
        },  
        rhetoric_references: {
            title: "Rhetoric References",
            pdf: "/uploads/rhetoric_references.pdf"
        }
    };
        // Get the lessonId from the query parameters
        const lessonId = getQueryParameter('lessonId');
        const fromPage = getQueryParameter('from'); // Get the referring page

        // Display the corresponding lesson content and PDF
        const lessonTitleElement = document.getElementById('lessonTitle');
        const lessonPdfElement = document.getElementById('lessonPdf');

        if (lessonId && lessons[lessonId]) {
            lessonTitleElement.innerText = lessons[lessonId].title;
        } else {
            lessonTitleElement.innerText = "Lesson not found.";
        }

        // Set the Back to List button to navigate to the correct page
        const backButton = document.querySelector(".back-to-list-btn");
        backButton.addEventListener("click", function () {
            if (fromPage) {
                window.location.href = fromPage; // Go back to the referring page
            } else {
                window.location.href = 'default.html'; // Fallback if no 'from' is provided
            }
        });
