document.addEventListener('DOMContentLoaded', () => {
    const images = document.querySelectorAll('.carousel-image');
    const indicators = document.querySelectorAll('.indicator');
    let currentIndex = 0;
    // showing the image 
    function showImage(index) {
        const offset = -index * 100;
        document.querySelector('.carousel-images').style.transform = `translateX(${offset}%)`;
        indicators.forEach((indicator, i) => {
            indicator.classList.toggle('active', i === index);
        });
    }
     // prev click functionality
    document.querySelector('.prev').addEventListener('click', () => {
        currentIndex = (currentIndex > 0) ? currentIndex - 1 : images.length - 1;
        showImage(currentIndex);
    });
     // next click functionality
    document.querySelector('.next').addEventListener('click', () => {
        currentIndex = (currentIndex < images.length - 1) ? currentIndex + 1 : 0;
        showImage(currentIndex);
    });

    indicators.forEach(indicator => {
        indicator.addEventListener('click', () => {
            const index = parseInt(indicator.dataset.slide, 10);
            currentIndex = index;
            showImage(currentIndex);
        });
    });
    // show the image at current index 
    showImage(currentIndex);
});
