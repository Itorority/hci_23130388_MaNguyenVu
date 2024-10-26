function showSection(sectionId) {
    // Remove 'active' class from all tabs
    document.querySelectorAll('.tab').forEach(tab => tab.classList.remove('active'));
    // Hide all sections
    document.querySelectorAll('.section').forEach(section => {
        section.style.display = 'none';
    });

    // Add 'active' class to the clicked tab
    document.querySelector(`.tab[onclick="showSection('${sectionId}')"]`).classList.add('active');
    // Show the selected section
    document.getElementById(sectionId).style.display = 'block';
}
