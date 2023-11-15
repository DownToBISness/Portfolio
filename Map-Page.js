
        const backgroundContainer = document.getElementById('backgroundContainer');

    const images = [
    'placeholder2.webp', // Add the paths to your images here
    'StudentCentre.jpg',
    'image3.jpg',
    ];

    let currentImageIndex = 0;

    function changeBackground(currentImageIndex) {
    // Change the background image
    backgroundContainer.style.background-image; `url(${images[currentImageIndex]})`;

    // Increment the image index, and loop back to the first image if needed
    currentImageIndex = (currentImageIndex + 1) % images.length;
    }
    