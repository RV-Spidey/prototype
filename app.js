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

// Lazy load videos when they come into view
function lazyLoadVideos() {
    const iframes = document.querySelectorAll('.video iframe[data-src]');
    const videoObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const iframe = entry.target;
                iframe.src = iframe.getAttribute('data-src'); // Load the iframe by setting the src
                iframe.removeAttribute('data-src'); // Remove the data-src attribute to avoid reloading
                observer.unobserve(iframe); // Stop observing once it's loaded
            }
        });
    }, { threshold: 0.1 }); // Load iframe when 10% of it is visible

    iframes.forEach(iframe => {
        videoObserver.observe(iframe);
    });
}

// Call lazy loading after DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    lazyLoadVideos();
});


// Call lazy loading after DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    lazyLoadVideos();
});

// Show video function (Lazy load aware)
function showVideo(videoId) {
    const videos = document.querySelectorAll('.video');
    videos.forEach(video => video.style.display = 'none');

    const videoToShow = document.getElementById(videoId);
    if (videoToShow) {
        videoToShow.style.display = 'block';
        if (videoToShow.hasAttribute('data-src')) {
            videoToShow.src = videoToShow.getAttribute('data-src');
            videoToShow.removeAttribute('data-src');
        }
    }
}

document.addEventListener('contextmenu', function (e) {
    e.preventDefault();
});
