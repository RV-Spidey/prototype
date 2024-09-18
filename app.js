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

function showVideo(videoId) {
  console.log('Showing video with ID:', videoId);

  const videos = document.querySelectorAll('#video-container .video');

  videos.forEach(video => {
    video.style.display = 'none';
  });

  const selectedVideo = document.getElementById(videoId);
  if (selectedVideo) {
    selectedVideo.style.display = 'block';
    const iframe = selectedVideo.querySelector('iframe');
    if (iframe) {
      iframe.src = iframe.dataset.src; // Set src directly from data-src attribute
      console.log('Setting iframe src to:', iframe.src);
    }
  }
}


document.addEventListener('contextmenu', function (e) {
    e.preventDefault();
});
