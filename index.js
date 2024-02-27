const imageOverlay = document.getElementById('image-overlay');

// Replace these URLs with the actual URLs of your art pieces
const artPieces = [
    'https://mehvishmanzoor.github.io/mehvish.io/.jpg',
    'https://mehvishmanzoor.github.io/mehvish.io/.jpg',
    'https://mehvishmanzoor.github.io/mehvish.io/.jpg',
    // Add more art piece URLs as needed
];

// Function to change images every 3 seconds
function changeImage() {
    let currentIndex = 0;

    setInterval(() => {
        imageOverlay.innerHTML = `<img src="${artPieces[currentIndex]}" alt="Art Piece">`;
        currentIndex = (currentIndex + 1) % artPieces.length;
    }, 3000);
}

// Call the function to start changing images
changeImage();
