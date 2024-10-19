function openTab(evt, tabName) {
    // Hide all tab content
    const tabContents = document.querySelectorAll('.tabcontent');
    tabContents.forEach(content => content.style.display = "none");

    // Remove active class from all buttons
    const tabLinks = document.querySelectorAll('.tablinks');
    tabLinks.forEach(link => link.classList.remove('active'));

    // Show the current tab content and add active class to the button
    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.classList.add('active');

    // Update the highlight line position and width
    const activeIndex = Array.from(tabLinks).indexOf(evt.currentTarget);
    const highlightLine = document.querySelector('.highlight-line');
    highlightLine.style.left = `calc(${activeIndex * 33.33}% + ${activeIndex * 10}px)`;
    highlightLine.style.width = `calc(33.33% - 10px)`; // Adjust for gaps
}