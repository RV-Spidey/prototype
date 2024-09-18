const toggleButton = document.getElementById('toggle-btn');
const sidebar = document.getElementById('sidebar');

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

// Function to show the selected video and hide others
function showVideo(videoId) {
  // Get all video elements
  const videos = document.querySelectorAll('#video-container .video');

  // Hide all videos and remove their src attribute
  videos.forEach(video => {
    video.style.display = 'none';
    video.querySelector('iframe').src = ''; // Remove src to stop loading
  });

  // Show the selected video and set its src attribute
  const selectedVideo = document.getElementById(videoId);
  if (selectedVideo) {
    selectedVideo.style.display = 'block';
    const iframe = selectedVideo.querySelector('iframe');
    if (iframe.src === '') {
      iframe.src = iframe.dataset.src; // Set src from data-src attribute
    }
  }
}
document.addEventListener('contextmenu', function (e) {
    e.preventDefault();
});
