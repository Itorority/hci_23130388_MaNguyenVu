document.addEventListener('DOMContentLoaded', () => {
    const exerciseItems = document.querySelectorAll('.exercise-item');
    const languageSelect = document.getElementById('language-select');
    const searchBar = document.getElementById('search-bar');
    const languageSwitcher = document.getElementById('language-switcher');
    const codeEditor = document.getElementById('code-editor');
    const runButton = document.getElementById('run-button');
    const clearButton = document.getElementById('clear-button');
    const submitButton = document.getElementById('submit-button');
    const outputContent = document.getElementById('output-content');
    const exerciseTitle = document.getElementById('exercise-title');
    const exerciseDescription = document.getElementById('exercise-description');
    let selectedExercise = null;

    // Filter exercises by programming language
    languageSelect.addEventListener('change', (e) => {
        const selectedLanguage = e.target.value.toLowerCase();
        exerciseItems.forEach(item => {
            const exerciseLanguage = item.dataset.language.toLowerCase();
            item.style.display = (selectedLanguage === 'all' || exerciseLanguage === selectedLanguage) ? 'block' : 'none';
        });
    });

    // Search exercises by keyword
    searchBar.addEventListener('input', (e) => {
        const searchText = e.target.value.toLowerCase();
        exerciseItems.forEach(item => {
            const title = item.querySelector('h3').innerText.toLowerCase();
            const description = item.querySelector('p').innerText.toLowerCase();
            item.style.display = (title.includes(searchText) || description.includes(searchText)) ? 'block' : 'none';
        });
    });

    // Select an exercise
    document.querySelectorAll('.select-exercise').forEach(button => {
        button.addEventListener('click', (e) => {
            const exerciseItem = e.target.closest('.exercise-item');
            selectedExercise = exerciseItem;
            const title = exerciseItem.querySelector('h3').innerText;
            const description = exerciseItem.querySelector('p').innerText;

            // Display selected exercise title and description
            exerciseTitle.innerText = title;
            exerciseDescription.innerText = description;

            // Load exercise details in the code editor
            loadExerciseDetails(exerciseItem);
        });
    });

    // Load exercise details in the code editor
    function loadExerciseDetails(exerciseItem) {
        const language = exerciseItem.dataset.language;
        languageSwitcher.value = language;
        codeEditor.value = getTemplateForLanguage(language);
        outputContent.innerText = "// Output will be displayed here...";
    }

    // Provide template code based on language
    function getTemplateForLanguage(language) {
        switch (language.toLowerCase()) {
            case 'c':
                return `#include <stdio.h>\n\nint main() {\n    // Write your C code here\n    return 0;\n}`;
            case 'python':
                return `# Write your Python code here\ndef main():\n    pass\n\nif __name__ == "__main__":\n    main()`;
            case 'java':
                return `public class Main {\n    public static void main(String[] args) {\n        // Write your Java code here\n    }\n}`;
            default:
                return '// Write your code here...';
        }
    }

    // Change template based on language switcher
    languageSwitcher.addEventListener('change', (e) => {
        const selectedLanguage = e.target.value.toLowerCase();
        codeEditor.value = getTemplateForLanguage(selectedLanguage);
    });

    // Run code (simulated)
// Run code (simulated)
runButton.addEventListener('click', () => {
    const code = codeEditor.value;

    // Open a new window for output
    const outputWindow = window.open("", "Output Window", "width=800,height=600");
    outputWindow.document.write(`
    <html>
    <head>
        <title>Output</title>
        <style>
            body { 
                font-family: Arial, sans-serif; 
                background: #1e1e1e; 
                color: #d4d4d4; /* Updated text color for better readability */
                margin: 0;
                padding: 20px;
            }
            pre { 
                background: #2e2e2e; /* Slightly lighter background for preformatted text */
                color: #ffffff; /* White text inside preformatted areas */
                padding: 15px; 
                border-radius: 5px; 
            }
            h3 { 
                color: #50fa7b; /* Vibrant green for titles and headers */
                border-bottom: 1px solid #3c3c3c; /* Divider line for headers */
                padding-bottom: 5px; 
            }
            ul { 
                list-style-type: none; 
                padding: 0; 
                margin-top: 20px;
            }
            li { 
                margin-bottom: 10px; 
                padding: 15px; 
                border: 1px solid #3c3c3c; /* Lighter border for each list item */
                border-radius: 5px; 
                background: #2e2e2e; /* Container background color */
                color: #d4d4d4; 
            }
            .status-passed { 
                color: #50fa7b; /* Success green */
                font-weight: bold; 
            }
            .status-failed { 
                color: #ff5555; /* Failure red */
                font-weight: bold; 
            }
            .score { 
                font-size: 18px; 
                margin-top: 20px; 
                color: #d4d4d4; 
            }
            .button-container { 
                margin-top: 20px; 
                text-align: center; 
            }
            button { 
                margin-right: 10px; 
                padding: 10px 20px; 
                cursor: pointer; 
                background-color: #007acc; /* Blue button background */
                border: none; 
                border-radius: 5px; 
                color: #ffffff; /* White text on buttons */
                transition: background-color 0.3s; 
            }
            button:hover { 
                background-color: #005f99; /* Darker blue on hover */
            }
        </style>
    </head>
    <body>
        <h3>Test Case Results</h3>
        <ul id="test-case-list">
            <li>
                <p><strong>Input:</strong> 4 5</p>
                <p><strong>Expected Output:</strong> 9</p>
                <p><strong>Actual Output:</strong> <span id="actual-output-1">9</span></p>
                <p><strong>Status:</strong> <span class="status-passed">Passed</span></p>
            </li>
            <li>
                <p><strong>Input:</strong> 7 2</p>
                <p><strong>Expected Output:</strong> 9</p>
                <p><strong>Actual Output:</strong> <span id="actual-output-2">8</span></p>
                <p><strong>Status:</strong> <span class="status-failed">Failed</span></p>
            </li>
        </ul>
        <p class="score">Score: 1 out of 2 test cases passed.</p>
        <div class="button-container">
            <button onclick="window.opener.focus(); window.close();">Try Again</button>
            <button onclick="window.opener.focus(); window.close();">Return to Dashboard</button>
            <button onclick="window.open('feedback.html', '_blank')">Leave Feedback</button>
        </div>
    </body>
    </html>
    `);

    // Once the document is written, use a timeout to ensure the DOM is ready before manipulating it
    outputWindow.onload = () => {
        const actualOutput = simulateCodeExecution(code); // Replace this with your code execution logic
        outputWindow.document.getElementById('actual-output-1').innerText = actualOutput; // Set the actual output for the first test case
    };
});    
    // Simulate code execution and return the actual output for demo purposes
    function simulateCodeExecution(code) {
        // Example logic to return output; replace with actual execution logic
        return "9"; // Replace with dynamic result based on the code execution
    }

    submitButton.addEventListener('click', () => {
        if (selectedExercise) {
            selectedExercise.dataset.status = 'completed';
            alert(`Submitted: ${selectedExercise.querySelector('h3').innerText}`);
        } else {
            alert("Please select an exercise first.");
        }
    });

    clearButton.addEventListener('click', () => {
        codeEditor.value = getTemplateForLanguage(languageSwitcher.value);
        outputContent.innerText = "// Output will be displayed here...";
    });

    // Save progress
    document.getElementById("save-progress-button").addEventListener("click", () => {
        alert("Progress saved!");
        // Logic to save progress can be added here
    });
});
const codeEditor = document.getElementById('code-editor');
const lineNumbers = document.getElementById('line-numbers');

// Function to update line numbers
function updateLineNumbers() {
    const lines = codeEditor.value.split('\n').length;
    lineNumbers.innerHTML = '';

    for (let i = 1; i <= lines; i++) {
        lineNumbers.innerHTML += i + '<br>'; // Add line numbers with breaks
    }
}

// Sync scrolling between textarea and line numbers
codeEditor.addEventListener('input', () => {
    updateLineNumbers(); // Update line numbers on input
});

codeEditor.addEventListener('scroll', () => {
    lineNumbers.scrollTop = codeEditor.scrollTop; // Sync scroll
});

// Initialize line numbers on page load
updateLineNumbers();
