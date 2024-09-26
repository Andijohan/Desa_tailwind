const dropArea = document.getElementById("drop-area");
const inputFile = document.getElementById("input-file");
const imageView = document.getElementById("img-view");

// Handle file input change
inputFile.addEventListener("change", uploadImage);

// Handle drag over
dropArea.addEventListener("dragover", (event) => {
    event.preventDefault(); // Prevent default behavior
    dropArea.classList.add('bg-gray-200'); // Change background color on drag over
});

// Handle drop
dropArea.addEventListener("drop", (event) => {
    event.preventDefault(); // Prevent default behavior
    dropArea.classList.remove('bg-gray-200'); // Reset background color
    const files = event.dataTransfer.files;
    if (files.length > 0) {
        inputFile.files = files; // Set the files to the input element
        uploadImage(); // Call the upload function
    }
});

// Function to upload and display image
function uploadImage() {
    if (inputFile.files.length > 0) {
        const imgLink = URL.createObjectURL(inputFile.files[0]);
        imageView.style.backgroundImage = `url(${imgLink})`; // Use backticks for template literals
        imageView.innerHTML = ''; // Clear any existing content if needed
    }
}
