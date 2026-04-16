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

const rolloutImages = [
    { file: 'figure_1_Self_supervised_data_collection_rollout_unsuccessful_2_step.png', label: 'Unsuccessful Rollout — 2 Steps' },
    { file: 'figure_2_Self_supervised_data_collection_rollout_successful_1_step.png', label: 'Successful Rollout — 1 Step' },
    { file: 'figure_4_Self_supervised_data_collection_rollout_unsuccessful_2_step.png', label: 'Unsuccessful Rollout — 2 Steps' },
    { file: 'figure_5_Self_supervised_data_collection_rollout_successful_1_step.png', label: 'Successful Rollout — 1 Step' }
];
let currentRolloutIndex = 0;

const resultCompImages = [
    { file: '30 comparison of baseline vs FCBV.png', label: 'Comparison 1' },
    { file: '30 comparison of baseline vs FCBV- Copy.png', label: 'Comparison 2' },
    { file: '30 comparison of baseline vs FCBV - Copy (2).png', label: 'Comparison 3' },
    { file: '30 comparison of baseline vs FCBV - Copy (3).png', label: 'Comparison 4' },
    { file: '30 comparison of baseline vs FCBV - Copy (4).png', label: 'Comparison 5' }
];
let currentResultCompIndex = 0;

const collectionFlowImages = [
    { file: 'Drag_figure.png', label: 'Drag Primitive' },
    { file: 'Fling_figure.png', label: 'Fling Primitive' },
    { file: 'Pick&Place_figure.png', label: 'Pick & Place Primitive' },
    { file: 'Done_figure.png', label: 'Done Primitive' }
];
let currentCollectionFlowIndex = 0;

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
    document.getElementById('content-rollout').style.display = tabName === 'rollout' ? 'block' : 'none';
    document.getElementById('content-collection-flow').style.display = tabName === 'collection-flow' ? 'block' : 'none';
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
        img.style.visibility = 'hidden';
        img.onload = function() { img.style.visibility = 'visible'; };
        img.src = `./static/images/Backbone Features Visualization/${backboneImages[currentBackboneIndex]}`;
        counter.textContent = `${currentBackboneIndex + 1} / ${backboneImages.length}`;
    }
}

function changeRolloutImage(direction) {
    currentRolloutIndex += direction;
    if (currentRolloutIndex < 0) {
        currentRolloutIndex = rolloutImages.length - 1;
    } else if (currentRolloutIndex >= rolloutImages.length) {
        currentRolloutIndex = 0;
    }
    updateRolloutImage();
}

function updateRolloutImage() {
    const img = document.getElementById('rollout-image');
    const counter = document.getElementById('rollout-counter');
    const caption = document.getElementById('rollout-caption');
    if (img && counter && caption) {
        img.style.visibility = 'hidden';
        img.onload = function() { img.style.visibility = 'visible'; };
        img.src = `./static/images/Self_supervised_data_collection_rollout/${rolloutImages[currentRolloutIndex].file}`;
        counter.textContent = `${currentRolloutIndex + 1} / ${rolloutImages.length}`;
        caption.textContent = rolloutImages[currentRolloutIndex].label;
    }
}

function changeResultCompImage(direction) {
    currentResultCompIndex += direction;
    if (currentResultCompIndex < 0) {
        currentResultCompIndex = resultCompImages.length - 1;
    } else if (currentResultCompIndex >= resultCompImages.length) {
        currentResultCompIndex = 0;
    }
    updateResultCompImage();
}

function updateResultCompImage() {
    const img = document.getElementById('result-comp-image');
    const counter = document.getElementById('result-comp-counter');
    const caption = document.getElementById('result-comp-caption');
    if (img && counter && caption) {
        img.style.visibility = 'hidden';
        img.onload = function() { img.style.visibility = 'visible'; };
        img.src = `./static/images/Result/${resultCompImages[currentResultCompIndex].file}`;
        counter.textContent = `${currentResultCompIndex + 1} / ${resultCompImages.length}`;
        caption.textContent = resultCompImages[currentResultCompIndex].label;
    }
}

function changeCollectionFlowImage(direction) {
    currentCollectionFlowIndex += direction;
    if (currentCollectionFlowIndex < 0) {
        currentCollectionFlowIndex = collectionFlowImages.length - 1;
    } else if (currentCollectionFlowIndex >= collectionFlowImages.length) {
        currentCollectionFlowIndex = 0;
    }
    updateCollectionFlowImage();
}

function updateCollectionFlowImage() {
    const img = document.getElementById('collection-flow-image');
    const counter = document.getElementById('collection-flow-counter');
    const caption = document.getElementById('collection-flow-caption');
    if (img && counter && caption) {
        img.style.visibility = 'hidden';
        img.onload = function() { img.style.visibility = 'visible'; };
        img.src = `./static/images/Human Dataset Collection Flow Examples/${collectionFlowImages[currentCollectionFlowIndex].file}`;
        counter.textContent = `${currentCollectionFlowIndex + 1} / ${collectionFlowImages.length}`;
        caption.textContent = collectionFlowImages[currentCollectionFlowIndex].label;
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
    updateRolloutImage();
    updateResultCompImage();
    updateCollectionFlowImage();
});