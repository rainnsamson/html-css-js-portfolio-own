function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
}

function openModal(modalId) {
    document.getElementById(modalId).style.display = "block";
}

function closeModal(modalId) {
    document.getElementById(modalId).style.display = "none";
}

// Function to open project modal
function openProjectModal(projectType) {
    var modal = document.getElementById('projectModal');
    var modalContent = modal.querySelector('.modal-content');

    // Clear previous content
    modalContent.innerHTML = '';

    // Dynamically load project images and information based on project type
    if (projectType === 'poster') {
        modalContent.innerHTML = `
            <span class="close" onclick="closeModal('projectModal')">&times;</span>
            <h2>Poster Events</h2>
            <div class="project-images">
                <img src="./assets/EV1.jpg" alt="Poster 1" class="project-img">
                <img src="./assets/EV2.jpg" alt="Poster 1" class="project-img">
                <img src="./assets/EV3.jpg" alt="Poster 2" class="project-img">
                <img src="./assets/EV5.jpg" alt="Poster 3" class="project-img">
                <img src="./assets/EV6.jpg" alt="Poster 3" class="project-img">
                <img src="./assets/EV7.jpg" alt="Poster 3" class="project-img">
            </div>
        `;
    } else if (projectType === 'banner') {
        modalContent.innerHTML = `
            <span class="close" onclick="closeModal('projectModal')">&times;</span>
            <h2>Banner Events</h2>
            <div class="project-images">
                <img src="./assets/EV4.jpg" alt="Banner 1" class="project-img">
                <img src="./assets/BANNER1.jpg" alt="Banner 1" class="project-img">
                <img src="./assets/BANNER2.jpg" alt="Banner 1" class="project-img">
                <img src="./assets/BANNER3.jpg" alt="Banner 1" class="project-img">
            </div>
        `;
    } else if (projectType === 'flyers') {
        modalContent.innerHTML = `
            <span class="close" onclick="closeModal('projectModal')">&times;</span>
            <h2>Flyers</h2>
            <div class="project-images">
                <img src="./assets/P1.jpg" alt="Flyer 1" class="project-img">
                <img src="./assets/P2.jpg" alt="Flyer 2" class="project-img">
                <img src="./assets/P3.jpg" alt="Flyer 3" class="project-img">
                <img src="./assets/P4.jpg" alt="Flyer 3" class="project-img">
                <img src="./assets/P5.jpg" alt="Flyer 3" class="project-img">
                <img src="./assets/P6.jpg" alt="Flyer 3" class="project-img">
            </div>
        `;
    } else if (projectType === 'logo') {
        modalContent.innerHTML = `
            <span class="close" onclick="closeModal('projectModal')">&times;</span>
            <h2>Logo</h2>
            <div class="project-images">
                <img src="./assets/LOGO1.jpg" alt="Flyer 1" class="project-img">
                <img src="./assets/LOGO2.jpg" alt="Flyer 2" class="project-img">
            </div>
        `;
    }


    // Display the modal
    modal.style.display = 'block';
    // Center the modal vertically
    modalContent.style.marginTop = 'auto';
    modalContent.style.marginBottom = 'auto';
}

// Close modal function
function closeModal(modalId) {
    var modal = document.getElementById(modalId);
    modal.style.display = "none";
}

// Close modal when clicking outside
window.addEventListener('click', function(event) {
    var modals = document.querySelectorAll('.modal');
    modals.forEach(function(modal) {
        if (event.target == modal) {
            modal.style.display = 'none';
        }
    });
});
