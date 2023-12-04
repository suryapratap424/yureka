document.addEventListener("DOMContentLoaded", function () {
    const images = document.querySelectorAll(".hero-image");
    let index = 0;
    
    function showNextImage() {
        // Hide all images
        images.forEach(img => img.style.opacity = "0");
        // Show the current image
        images[index].style.opacity = "1";
        // Move to the next image
        index = (index + 1) % images.length;
        // Delay before showing the next image (adjust as needed)
        // if(index==2){
        //     setTimeout(showNextImage, 1000);  // Adjust the delay (in milliseconds) between images
        // }else{
            setTimeout(showNextImage, 2000);  // Adjust the delay (in milliseconds) between images
        // }
    }

    // Initial call to start the sequence
    showNextImage();
});