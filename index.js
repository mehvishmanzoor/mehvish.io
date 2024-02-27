const imageOverlay = document.getElementById('image-overlay');

// Replace these URLs with the actual URLs of your art pieces
const artPieces = [
    'url_to_art_piece_1.jpg',
    'url_to_art_piece_2.jpg',
    'url_to_art_piece_3.jpg',
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
