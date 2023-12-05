document.addEventListener("DOMContentLoaded", function () {
    const images = document.querySelectorAll(".hero-image");
    const market_images = document.querySelectorAll(".market-images");
    let index = 0,i=0;
    
    function showNextImage() {
        // Hide all images
        images.forEach(img => img.style.opacity = "0");
        market_images.forEach(img => img.style.opacity = "0");
        // Show the current image
        images[index].style.opacity = "1";
        market_images[i].style.opacity = "1";
        // Move to the next image
        index = (index + 1) % images.length;
        i = (i + 1) % market_images.length;
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

let currentIndex = 0;

function changeCard(direction) {
  const cardContainer = document.querySelector('.cards');
  const cards = document.querySelectorAll('.card');
  let style = cards[0].currentStyle || window.getComputedStyle(cards[0]);;
  const cardWidth = cards[0].offsetWidth +2*parseInt(style.marginRight,10);
  currentIndex = currentIndex + direction;

  if (currentIndex < 0) {
    currentIndex = 0;
  } else if (currentIndex > cards.length - 4) {
    currentIndex = cards.length - 4;
  }

  const translateValue = -currentIndex * cardWidth;
  cardContainer.style.transform = `translateX(${translateValue}px)`;
}
