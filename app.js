const toggleButton = document.getElementById('toggle-btn');
const sidebar = document.getElementById('sidebar');
const userName = localStorage.getItem('userName');
document.getElementById('userElement').textContent = userName || '';

// Ensure the secret key is set in localStorage, otherwise, no comparison can be made.
const ____________________________________________________________________________________________________________________________________ = localStorage.getItem('____________________________________________________________________________________________________________________________________') || null;

// Function to get a cookie by name
function getCookie(name) {
    const nameEQ = name + "=";
    const ca = document.cookie.split(';');
    for(let i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) == ' ') c = c.substring(1, c.length); // Trim leading spaces
        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
    }
    return null;
}

// Example: Retrieve the 'skibidi' cookie
const ________________________________________________________________________________________________________________ = getCookie('_______________________________________________________________________________________________________________________________________________');
// Outputs: 'exampleValue' if the cookie exists

function checkKey() {
    // If there's no stored key, deny access immediately
    if (!____________________________________________________________________________________________________________________________________ && !________________________________________________________________________________________________________________) {
        alert("You are not an approved user. Please contact the admin.");
        window.location.href = "https://www.example.com";
        return;
    }

    //const hasAccess = localStorage.getItem('hasAccess');
    const correctAccessFlag = "true"; // Use consistent flag value
    const h = "‏‏‎ ‎"
    const a = "‏‏‎ ‎‏‏‎ ‎"

    // Check if user already has access
    /*if (hasAccess === correctAccessFlag) {
        document.getElementById('content').style.display = 'block'; // Show content
        return; // Skip asking for the key again
    }*/

    // Ask for the user's key
    //const userKey = prompt("Please enter your key:");

    if (h === ____________________________________________________________________________________________________________________________________ && a === ________________________________________________________________________________________________________________) {
        // If correct key, grant access
        localStorage.setItem('hasAccess', correctAccessFlag);
        document.getElementById('content').style.display = 'block';
        alert("You are a verified user.");
    } else {
        // If the key is wrong, deny access
        alert("Incorrect key. Contact admin");
        window.location.href = "https://www.example.com"; // Redirect
    }
}

// Check the key after all elements are loaded
document.addEventListener('DOMContentLoaded', (event) => {
    checkKey();
});

// Sidebar toggle functions (unchanged)
function toggleSidebar() {
    sidebar.classList.toggle('close');
    toggleButton.classList.toggle('rotate');
    closeAllSubMenus();
}

function toggleSubMenu(button) {
    if (!button.nextElementSibling.classList.contains('show')) {
        closeAllSubMenus();
    }

    button.nextElementSibling.classList.toggle('show');
    button.classList.toggle('rotate');

    if (sidebar.classList.contains('close')) {
        sidebar.classList.toggle('close');
        toggleButton.classList.toggle('rotate');
    }
}


function closeAllSubMenus() {
    Array.from(sidebar.getElementsByClassName('show')).forEach(ul => {
        ul.classList.remove('show');
        ul.previousElementSibling.classList.remove('rotate');
    });
}

// Show video function
function showVideo(videoId) {
    const videos = document.querySelectorAll('.video');
    
    videos.forEach(video => video.style.display = 'none'); // Hide all videos

    const videoToShow = document.getElementById(videoId);
    
    if (videoToShow) {
        videoToShow.style.display = 'block'; // Show selected video
        
        const iframe = videoToShow.querySelector('iframe');
        
        if (iframe && iframe.hasAttribute('data-src')) {
            iframe.src = iframe.getAttribute('data-src'); // Set src to load video
            iframe.removeAttribute('data-src'); // Remove data-src after loading
            console.log(`Loading video: ${iframe.src}`); // Log for debugging
        } else {
            console.error(`Video with ID ${videoId} not found or already loaded.`);
        }
        
    } else {
        console.error(`Video with ID ${videoId} not found.`);
    }
}


document.addEventListener('contextmenu', function (e) {
    e.preventDefault();
});
