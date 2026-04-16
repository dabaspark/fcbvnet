$(document).ready(function() {
    // Check for click events on the navbar burger icon
    $(".navbar-burger").click(function() {
      $(".navbar-burger").toggleClass("is-active");
      $(".navbar-menu").toggleClass("is-active");
    });

    var options = {
			slidesToScroll: 1,
			slidesToShow: 3,
			loop: true,
			infinite: true,
			autoplay: false,
			autoplaySpeed: 3000,
    }

		// Initialize all div with carousel class
    var carousels = bulmaCarousel.attach('.carousel', options);

    // Loop on each carousel initialized
    for(var i = 0; i < carousels.length; i++) {
    	// Add listener to  event
    	carousels[i].on('before:show', state => {
    		console.log(state);
    	});
    }

    // Access to bulmaCarousel instance of an element
    var element = document.querySelector('#my-element');
    if (element && element.bulmaCarousel) {
    	// bulmaCarousel instance is available as element.bulmaCarousel
    	element.bulmaCarousel.on('before-show', function(state) {
    		console.log(state);
    	});
    }
})

const backboneImages = [
    '00037.jpg', '00044.jpg', '00046.jpg', '00050.jpg',
    '00061.jpg', '00064.jpg', '00068.jpg', '00097.jpg', '00105.jpg',
    '00141.jpg', '00142.jpg', '00152.jpg', '00187.jpg', '00193.jpg',
    '00217.jpg', '00258.jpg', '00262.jpg', '00289.jpg', '00305.jpg'
];
let currentBackboneIndex = 0;

function switchSupTab(tabIndex, el) {
    // Update tab styling
    const tabs = el.closest('.tabs').querySelectorAll('li');
    tabs.forEach(tab => tab.classList.remove('is-active'));
    el.parentElement.classList.add('is-active');

    // Show/hide content
    for (let i = 1; i <= 3; i++) {
        const content = document.getElementById('content-sup-' + i);
        if (content) {
            content.style.display = (i === tabIndex) ? 'block' : 'none';
        }
    }
}

function switchMainTab(tabName, el) {
    // Update tab styling
    const tabs = el.closest('.tabs').querySelectorAll('li');
    tabs.forEach(tab => tab.classList.remove('is-active'));
    el.parentElement.classList.add('is-active');

    // Show/hide content
    document.getElementById('content-data-prep').style.display = tabName === 'data-prep' ? 'block' : 'none';
    document.getElementById('content-backbone').style.display = tabName === 'backbone' ? 'block' : 'none';
}

function changeBackboneImage(direction) {
    currentBackboneIndex += direction;
    if (currentBackboneIndex < 0) {
        currentBackboneIndex = backboneImages.length - 1;
    } else if (currentBackboneIndex >= backboneImages.length) {
        currentBackboneIndex = 0;
    }
    updateBackboneImage();
}

function updateBackboneImage() {
    const img = document.getElementById('backbone-image');
    const counter = document.getElementById('backbone-counter');
    if (img && counter) {
        img.src = `./static/images/Backbone Features Visualization/${backboneImages[currentBackboneIndex]}`;
        counter.textContent = `${currentBackboneIndex + 1} / ${backboneImages.length}`;
    }
}

// Function to generate the video grid
function changeCategory(category, btnElement) {
    // 1. Update Buttons Styling
    // Remove 'is-info' (blue) from all buttons
    const buttons = btnElement.parentElement.children;
    for (let btn of buttons) {
        btn.classList.remove('is-info');
        btn.classList.remove('is-selected');
    }
    // Add 'is-info' to clicked button
    btnElement.classList.add('is-info');
    btnElement.classList.add('is-selected');

    // 2. Clear current videos
    const grid = document.getElementById('video-grid');
    grid.innerHTML = '';

    // 3. Loop to create 12 videos
    // CHANGE 4: Updated to 12 videos
    const totalVideos = 12; 

    for (let i = 1; i <= totalVideos; i++) {
        // Create Column Div (is-3 means 3/12 width = 25% = 4 columns)
        // With 12 videos, this automatically creates 3 rows.
        const col = document.createElement('div');
        col.className = 'column is-3-desktop is-6-tablet is-12-mobile';
        
        // Create Video Element
        // Muted/Autoplay enabled so they play immediately
        const video = document.createElement('video');
        video.setAttribute('autoplay', '');
        video.setAttribute('muted', '');
        video.setAttribute('loop', '');
        video.setAttribute('playsinline', '');
		video.setAttribute('controls', ''); // 
        video.style.width = '100%';
        video.style.borderRadius = '5px';
        video.style.border = '1px solid #ddd';

        // Set Source
        // Assumes files are named: top_1.mp4 ... top_12.mp4
        video.src = `./static/videos/data_prep/${category}_${i}.mp4`;

        // Append to DOM
        col.appendChild(video);
        grid.appendChild(col);
    }
}

// Initialize with 'top' category when page loads
document.addEventListener('DOMContentLoaded', () => {
    // Find the 'Top' button and trigger a click to load initial videos
    const topBtn = document.querySelector("button[onclick*='top']");
    if(topBtn) changeCategory('top', topBtn);

    updateBackboneImage();
});