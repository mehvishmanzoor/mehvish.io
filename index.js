const imageOverlay = document.getElementById('image-overlay');

// Replace these URLs with the actual URLs of your art pieces
const artPieces = [
    'https://mehvishmanzoor.github.io/mehvish.io/hatsApp Image 2024-02-27 at 09.14.32_d57f4327.jpg',
    'https://mehvishmanzoor.github.io/mehvish.io/WhatsApp Image 2024-02-27 at 09.14.33_06e555ae.jpg',
    'https://mehvishmanzoor.github.io/mehvish.io/WhatsApp Image 2024-02-27 at 09.14.32_d57f4327.jpg',
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
