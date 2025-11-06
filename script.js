
document.addEventListener('DOMContentLoaded', function() {
    const prevButton = document.querySelector('.prev-button');
    const nextButton = document.querySelector('.next-button');
    const experienceItems = document.querySelectorAll('.experience-item');
    
    let currentIndex = 0; 
    let isTransitioning = false;
    
    function showItem(index) {
        if (isTransitioning) return; 
        
        isTransitioning = true;
        
        const currentItem = experienceItems[currentIndex];
        const nextItem = experienceItems[index];
        
        // Quitar activo del elemento actual
        currentItem.classList.remove('active');
        
        // Activar el nuevo elemento
        nextItem.classList.add('active');
        
        currentIndex = index;
        updateButtons();
        
        setTimeout(() => {
            isTransitioning = false;
        }, 300);
    }
    

    function updateButtons() {

        if (currentIndex === 0) {
            prevButton.disabled = true;
            prevButton.style.opacity = '0.5';
            prevButton.style.cursor = 'not-allowed';
        } else {
            prevButton.disabled = false;
            prevButton.style.opacity = '1';
            prevButton.style.cursor = 'pointer';
        }
        
        if (currentIndex === experienceItems.length - 1) {
            nextButton.disabled = true;
            nextButton.style.opacity = '0.5';
            nextButton.style.cursor = 'not-allowed';
        } else {
            nextButton.disabled = false;
            nextButton.style.opacity = '1';
            nextButton.style.cursor = 'pointer';
        }
    }
    
    function nextItem() {
        if (currentIndex < experienceItems.length - 1 && !isTransitioning) {
            showItem(currentIndex + 1);
        }
    }
    
    function prevItem() {
        if (currentIndex > 0 && !isTransitioning) {
            showItem(currentIndex - 1);
        }
    }
    
    nextButton.addEventListener('click', nextItem);
    prevButton.addEventListener('click', prevItem);
    
    document.addEventListener('keydown', function(e) {
        if (e.key === 'ArrowRight') {
            nextItem();
        } else if (e.key === 'ArrowLeft') {
            prevItem();
        }
    });
    
    experienceItems.forEach((item, index) => {
        if (index === 0) {
            item.classList.add('active');
        } else {
            item.classList.remove('active');
        }
    });
    
    updateButtons();
    
});