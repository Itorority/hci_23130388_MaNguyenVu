function showForm() {
    const selectionModal = document.getElementById("challenge-selection");
    const formModal = document.getElementById("challenge-form");

    
    // Toggle visibility of selection and form modals
    if (!selectionModal.classList.contains("hidden")) {
        selectionModal.classList.add("hidden");
        formModal.classList.remove("hidden");
    } else {
        console.error("Selection modal is already hidden.");
    }
}

function showEditor(event) {
    event.preventDefault(); // Prevent the default anchor behavior at the start
    const formModalTitle = document.getElementById("form-modal-title");
    const openIdeButton = document.getElementById("openIdeButton");

    if (openIdeButton.classList.contains("disabled")) {
        alert("Please fill in all fields before proceeding.");
        return; // Exit the function if button is disabled
    } else {
        // Get the new title from the button's data attribute
        formModalTitle.textContent = "Edit custom challenge"; // Set the new title text
        console.log("Opening IDE..."); // Placeholder for actual IDE opening logic
    }

    // Hide the open-ide-button and display the editor
    openIdeButton.classList.add("hidden");
    document.getElementById('editor').classList.remove("hidden");

    // Show the starter code message
    const starterCode = document.querySelector(".starter-code");
    starterCode.style.display = "block";

    // Initialize the Quill editor if not already initialized
    if (!window.quill) {
        window.quill = new Quill('#editor', {
            theme: 'snow',
            modules: {
                toolbar: [
                    ['bold', 'italic', 'underline'],
                    ['link', 'image', 'code-block'],
                    [{ list: 'ordered' }, { list: 'bullet' }],
                    [{ 'header': [1, 2, 3, false] }],
                    [{ 'color': [] }, { 'background': [] }],
                    [{ 'font': [] }]
                ]
            }
        });

        // Use the setContents method with Delta format for multiple lines
        const delta = [
            { insert: "Write a program to count the number of elements as odd numbers in the array\n" },
            { insert: "Example: Array A (12, 31, 25, 17, 40, 10, 29)\n" },
            { insert: "Number of elements as odd number in array A is: 4\n" }
        ];
        window.quill.setContents(delta);
    }

    showTestCaseLayout();
}

function checkFields() {
    const demoInput = document.getElementById("demo").value.trim();
    const difficultySelect = document.getElementById("difficulty").value;
    const descriptionInput = document.getElementById("description").value.trim();
    
    // Check if all fields have a value
    const allFieldsFilled = demoInput && difficultySelect && descriptionInput;
    
    // Enable or disable the button based on field values
    const openIdeButton = document.getElementById("openIdeButton");
    openIdeButton.classList.toggle("disabled", !allFieldsFilled);
}

// Add event listeners to check each time the user types or changes a field
document.getElementById("demo").addEventListener("input", checkFields);
document.getElementById("difficulty").addEventListener("change", checkFields);
document.getElementById("description").addEventListener("input", checkFields);

// Handle the update button click with a notification
document.querySelector('.update-button').addEventListener('click', () => {
    alert('Custom challenge updated!');
});

function showTestCaseLayout() {
    const testCaseLayout = document.getElementById('test-case-layout');
    testCaseLayout.classList.remove('hidden'); // Remove hidden class to show the layout
    testCaseLayout.style.display = "block"; // Ensure it is displayed
}
