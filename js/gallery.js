
document.addEventListener('DOMContentLoaded', function () {
    // Project images data - each project can have multiple images
    const projectsData = {
        'aspl-01': {
            images: [
                { src: 'img/ASIPL01A.jpeg', alt: '1200 Bedded Civil Hospital, Asarwa, Ahmedabad.' },
                { src: 'img/ASIPL01B.jpg', alt: '1200 Bedded Civil Hospital, Asarwa, Ahmedabad.' },
                { src: 'img/ASIPL01C.jpg', alt: '1200 Bedded Civil Hospital, Asarwa, Ahmedabad.' },
                { src: 'img/ASIPL01D.jpg', alt: '1200 Bedded Civil Hospital, Asarwa, Ahmedabad.' },
                { src: 'img/ASIPL01E.jpg', alt: '1200 Bedded Civil Hospital, Asarwa, Ahmedabad.' },
            ]
        },
        'asipl-02': {
            images: [
                { src: 'img/ASIPL02.jpg', alt: 'Balak Ram Hospital, Timarpur, Delhi.' },
                { src: 'img/ASIPL02B.jpg', alt: 'Balak Ram Hospital, Timarpur, Delhi.' },
                { src: 'img/ASIPL02C.jpg', alt: 'Balak Ram Hospital, Timarpur, Delhi.' },
                { src: 'img/ASIPL02D.jpg', alt: 'Balak Ram Hospital, Timarpur, Delhi.' },

            ]
        },
        'asipl-03': {
            images: [
                { src: 'img/ASIPL03A.jpg', alt: 'CGHS wellness centre, Chennai.' },
                { src: 'img/ASIPL03B.jpg', alt: 'CGHS wellness centre, Chennai.' },
            ]
        },
        'asipl-04': {
            images: [
                { src: 'img/ASIPL04B.jpg', alt: 'Central University of Haryana, Mahendragarh.' },
                { src: 'img/ASIPL04C.jpeg', alt: 'Central University of Haryana, Mahendragarh.' },
            ]
        },
        'asipl-05': {
            images: [
                { src: 'img/ASIPL05.jpg', alt: 'Darbhanga Medical College, Darbhanga Bihar.' },
                { src: 'img/ASIPL05A.jpg', alt: 'Darbhanga Medical College, Darbhanga Bihar.' },
            ]
        },
        'asipl-06': {
            images: [
                { src: 'img/ASIPL06.jpg', alt: 'Enforcement Directorate Office Building, Delhi.' },
                { src: 'img/ASIPL06A.jpg', alt: 'Enforcement Directorate Office Building, Delhi.' },
                { src: 'img/ASIPL06B.jpg', alt: 'Enforcement Directorate Office Building, Delhi.' },
            ]
        },
        'asipl-07': {
            images: [
                { src: 'img/ASIPL07.jpg', alt: 'ESIC Hospital, Okhla.' },
                { src: 'img/ASIPL07A.jpeg', alt: 'ESIC Hospital, Okhla.' },
                { src: 'img/ASIPL07B.jpg', alt: 'ESIC Hospital, Okhla.' },
            ]
        },
        'asipl-08': {
            images: [
                { src: 'img/ASIPL08.jpeg', alt: 'Fakir Mohan Medical College and Hospital, Balasore.' },
                { src: 'img/ASIPL08A.jpg', alt: 'Fakir Mohan Medical College and Hospital, Balasore.' },
                { src: 'img/ASIPL08B.jpg', alt: 'Fakir Mohan Medical College and Hospital, Balasore.' },
                { src: 'img/ASIPL08C.jpg', alt: 'Fakir Mohan Medical College and Hospital, Balasore.' },
                { src: 'img/ASIPL08D.jpg', alt: 'Fakir Mohan Medical College and Hospital, Balasore.' },
                { src: 'img/ASIPL08E.jpg', alt: 'Fakir Mohan Medical College and Hospital, Balasore.' },
                { src: 'img/ASIPL08F.jpg', alt: 'Fakir Mohan Medical College and Hospital, Balasore.' },
                { src: 'img/ASIPL08G.jpg', alt: 'Fakir Mohan Medical College and Hospital, Balasore.' },
            ]
        },
        'asipl-09': {
            images: [
                { src: 'img/ASIPL09.jpg', alt: '1000 Bedded Hospital at GRMC Gwalior.' },
                { src: 'img/ASIPL09A.jpg', alt: '1000 Bedded Hospital at GRMC Gwalior.' },
                { src: 'img/ASIPL09B.jpg', alt: '1000 Bedded Hospital at GRMC Gwalior.' },
                { src: 'img/ASIPL09C.jpg', alt: '1000 Bedded Hospital at GRMC Gwalior.' },
                { src: 'img/ASIPL09D.jpg', alt: '1000 Bedded Hospital at GRMC Gwalior.' },
            ]
        },
        'asipl-10': {
            images: [
                { src: 'img/ASIPL10A.jpg', alt: 'IIT, Kanpur.' },
                { src: 'img/ASIPL10B.jpg', alt: 'IIT, Kanpur.' },
                { src: 'img/ASIPL10C.png', alt: 'IIT, Kanpur.' },
            ]
        },
        'asipl-11': {
            images: [
                { src: 'img/ASIPL11.jpg', alt: 'IOCL Corporate Office, Delhi.' },
                { src: 'img/ASIPL11A.jpg', alt: 'IOCL Corporate Office, Delhi.' },
                { src: 'img/ASIPL11B.jpg', alt: 'IOCL Corporate Office, Delhi.' },
                { src: 'img/ASIPL11C.jpg', alt: 'IOCL Corporate Office, Delhi.' },
                { src: 'img/ASIPL11D.jpg', alt: 'IOCL Corporate Office, Delhi.' },
                { src: 'img/ASIPL11E.jpg', alt: 'IOCL Corporate Office, Delhi.' }
            ]
        },
        'asipl-12': {
            images: [
                { src: 'img/ASIPL12.jpg', alt: 'Ispat Post Graduate Institute and Super Speciality Hospital, Rourkela.' },
                { src: 'img/ASIPL12A.jpg', alt: 'Ispat Post Graduate Institute and Super Speciality Hospital, Rourkela.' },
                { src: 'img/ASIPL12B.jpg', alt: 'Ispat Post Graduate Institute and Super Speciality Hospital, Rourkela.' },
                { src: 'img/ASIPL12C.jpg', alt: 'Ispat Post Graduate Institute and Super Speciality Hospital, Rourkela.' },
            ]
        },
        'asipl-13': {
            images: [
                { src: 'img/ASIPL13.png', alt: 'LNJP Hospital, Delhi.' },
                { src: 'img/ASIPL13A.webp', alt: 'LNJP Hospital, Delhi.' },
            ]
        },
        'asipl-14': {
            images: [
                { src: 'img/ASIPL14.jpg', alt: 'Luvas University, Hisar, Haryana.' },
                { src: 'img/ASIPL14A.png', alt: 'Luvas University, Hisar, Haryana.' },
                { src: 'img/ASIPL14B.jpg', alt: 'Luvas University, Hisar, Haryana.' },

            ]
        },
        'asipl-15': {
            images: [
                { src: 'img/ASIPL15.jpg', alt: 'ESIC, Hyderabad.' },
                { src: 'img/ASIPL15A.jpg', alt: 'ESIC, Hyderabad.' },
                { src: 'img/ASIPL15B.jpeg', alt: 'ESIC, Hyderabad.' },
            ]
        },
        'asipl-16': {
            images: [
                { src: 'img/ASIPL16.jpg', alt: 'HPCL Rajasthan Refinery Limited, Barmer, Raj.' },
                { src: 'img/ASIPL16A.png', alt: 'HPCL Rajasthan Refinery Limited, Barmer, Raj.' },
                { src: 'img/ASIPL16B.jpeg', alt: 'HPCL Rajasthan Refinery Limited, Barmer, Raj.' },
            ]
        },
        'asipl-17': {
            images: [
                { src: 'img/ASIPL17.JPG', alt: 'PWD Delhi (Schools).' },
                { src: 'img/ASIPL17A.JPG', alt: 'PWD Delhi (Schools).' },
                { src: 'img/ASIPL17B.JPG', alt: 'PWD Delhi (Schools).' },
                { src: 'img/ASIPL17C.JPG', alt: 'PWD Delhi (Schools).' },
                { src: 'img/ASIPL17D.png', alt: 'PWD Delhi (Schools).' }
            ]
        },
        'asipl-18': {
            images: [
                { src: 'img/ASIPL18.jpg', alt: 'DTTDC, Delhi.' },
                { src: 'img/ASIPL18A.jpg', alt: 'DTTDC, Delhi.' },
                { src: 'img/ASIPL18B.jpg', alt: 'DTTDC, Delhi.' },
            ]
        },
        'asipl-19': {
            images: [
                { src: 'img/ASIPL19.jpg', alt: 'IIT Jodhpur.' },
                { src: 'img/ASIPL19A.jpg', alt: 'IIT Jodhpur.' },
                { src: 'img/ASIPL19B.jpg', alt: 'IIT Jodhpur.' },
                { src: 'img/ASIPL19C.jpg', alt: 'IIT Jodhpur.' },
                { src: 'img/ASIPL19D.jpg', alt: 'IIT Jodhpur.' },
                { src: 'img/ASIPL19E.jpg', alt: 'IIT Jodhpur.' },
                { src: 'img/ASIPL19F.jpg', alt: 'IIT Jodhpur.' },
                { src: 'img/ASIPL19G.jpg', alt: 'IIT Jodhpur.' },
                { src: 'img/ASIPL19H.jpg', alt: 'IIT Jodhpur.' },
            ]
        },
        'asipl-20': {
            images: [
                { src: 'img/ASIPL20.jpeg', alt: 'Dr. Kalam Agricultural College, Kishanganj.' },
                { src: 'img/ASIPL20A.png', alt: 'Dr. Kalam Agricultural College, Kishanganj.' },
                { src: 'img/ASIPL20B.jpg', alt: 'Dr. Kalam Agricultural College, Kishanganj.' },
            ]
        },
        'asipl-21': {
            images: [
                { src: 'img/ASIPL21.jpg', alt: 'Jharkhand Vidhan Sabha.' },
                { src: 'img/ASIPL21A.jpg', alt: 'Jharkhand Vidhan Sabha.' },
                { src: 'img/ASIPL21B.jpg', alt: 'Jharkhand Vidhan Sabha.' },
                { src: 'img/work-1a.jpg', alt: 'Jharkhand Vidhan Sabha.' },
            ]
        },
        'asipl-22': {
            images: [
                { src: 'img/ASIPL22.jpg', alt: 'NAARM, Hyderabad.' },
                { src: 'img/ASIPL22A.jpeg', alt: 'NAARM, Hyderabad.' },
            ]
        },
        'asipl-23': {
            images: [
                { src: 'img/work-6a.jpg', alt: 'National Housing Bank.' },
                { src: 'img/ASIPL23A.JPG', alt: 'National Housing Bank.' },
                { src: 'img/ASIPL23B.JPG', alt: 'National Housing Bank.' },
                { src: 'img/ASIPL23C.JPG', alt: 'National Housing Bank.' },
                { src: 'img/ASIPL23D.JPG', alt: 'National Housing Bank.' },
                { src: 'img/ASIPL23.jpg', alt: 'National Housing Bank.' },
            ]
        },
    };

    // DOM Elements
    const modal = document.getElementById('galleryModal');
    const closeBtn = document.querySelector('.close-gallery');
    const prevBtn = document.querySelector('.gallery-prev');
    const nextBtn = document.querySelector('.gallery-next');
    const galleryImage = document.querySelector('.gallery-image');
    const galleryCaption = document.querySelector('.gallery-caption');
    const thumbnailsContainer = document.querySelector('.gallery-thumbnails');

    let currentProject = null;
    let currentSlide = 0;

    // Initialize project items with data attributes
    document.querySelectorAll('.item-img-wrap').forEach((item, index) => {
        const projectId = item.closest('div[data-project-id]')?.dataset.projectId ||
            item.closest('a[data-project-id]')?.dataset.projectId ||
            Object.keys(projectsData)[index] || 'default';

        item.style.cursor = 'pointer';
        item.addEventListener('click', (e) => {
            e.preventDefault();
            openGallery(projectId);
        });
    });

    // Open gallery with specific project
    function openGallery(projectId) {
        currentProject = projectsData[projectId] || projectsData['default'];
        currentSlide = 0;
        updateGallery();
        modal.classList.add('show');
        document.body.style.overflow = 'hidden';
    }

    // Close gallery
    function closeGallery() {
        modal.classList.remove('show');
        document.body.style.overflow = 'auto';
        setTimeout(() => {
            modal.style.display = 'none';
        }, 300);
    }

    // Show loading state
    function showLoading() {
        galleryImage.classList.add('loading');
        galleryImage.alt = 'Loading...';
        galleryCaption.textContent = 'Loading...';
    }

    // Handle image load errors
    function handleImageError(img) {
        img.src = 'img/placeholder.jpg';
        img.alt = 'Image not available';
        galleryCaption.textContent = 'Image not available';
        img.classList.remove('loading');
    }

    // Preload images
    function preloadImages(images, currentIndex) {
        const preloadWindow = 2; // Number of images to preload on each side
        for (let i = Math.max(0, currentIndex - preloadWindow);
            i <= Math.min(images.length - 1, currentIndex + preloadWindow); i++) {
            if (i !== currentIndex) {
                const img = new Image();
                img.src = images[i].src;
            }
        }
    }

    // Update gallery content with loading and error states
    function updateGallery() {
        if (!currentProject) return;

        showLoading();
        const { images } = currentProject;
        const currentImage = images[currentSlide];

        // Preload adjacent images for better performance
        preloadImages(images, currentSlide);

        // Update main image with loading state
        const img = new Image();
        img.onload = () => {
            galleryImage.src = currentImage.src;
            galleryImage.alt = currentImage.alt;
            galleryImage.classList.remove('loading');
            galleryCaption.textContent = `${currentImage.alt}`;
            galleryImage.setAttribute('aria-live', 'polite');
            galleryImage.setAttribute('aria-label', currentImage.alt);
        };
        img.onerror = () => handleImageError(galleryImage);
        img.src = currentImage.src;

        // Update thumbnails
        thumbnailsContainer.innerHTML = '';
        images.forEach((img, index) => {
            const thumbnail = document.createElement('button');
            thumbnail.className = `thumbnail ${index === currentSlide ? 'active' : ''}`;
            thumbnail.setAttribute('aria-label', `View image ${index + 1} of ${images.length}: ${img.alt}`);
            thumbnail.innerHTML = `
                        <img 
                            src="${img.src}" 
                            alt="${img.alt}" 
                            loading="lazy"
                            onerror="this.src='img/placeholder.jpg'; this.alt='Thumbnail not available'"
                        >
                    `;
            thumbnail.addEventListener('click', () => {
                currentSlide = index;
                updateGallery();
            });
            thumbnailsContainer.appendChild(thumbnail);
        });

        // Update navigation buttons state and ARIA
        // Always show buttons for looping gallery
        prevBtn.style.display = 'flex';
        nextBtn.style.display = 'flex';

        prevBtn.setAttribute('aria-disabled', 'false');
        nextBtn.setAttribute('aria-disabled', 'false');

        prevBtn.setAttribute('aria-label', 'Previous image');
        nextBtn.setAttribute('aria-label', 'Next image');
    }

    // Navigation functions
    function nextSlide() {
        if (currentProject) {
            if (currentSlide < currentProject.images.length - 1) {
                currentSlide++;
            } else {
                // Loop back to first image if at the end
                currentSlide = 0;
            }
            updateGallery();
        }
    }

    function prevSlide() {
        if (currentProject) {
            if (currentSlide > 0) {
                currentSlide--;
            } else {
                // Loop to last image if at the beginning
                currentSlide = currentProject.images.length - 1;
            }
            updateGallery();
        }
    }

    // Add ARIA attributes for better accessibility
    modal.setAttribute('role', 'dialog');
    modal.setAttribute('aria-modal', 'true');
    modal.setAttribute('aria-label', 'Image gallery');
    closeBtn.setAttribute('aria-label', 'Close gallery');

    // Event listeners with better keyboard support
    closeBtn.addEventListener('click', closeGallery);
    prevBtn.addEventListener('click', prevSlide);
    nextBtn.addEventListener('click', nextSlide);

    // Keyboard navigation with better accessibility
    document.addEventListener('keydown', (e) => {
        if (!modal.classList.contains('show')) return;

        const activeElement = document.activeElement;
        const isFocusInModal = modal.contains(activeElement);

        // Close on Escape key
        if (e.key === 'Escape') {
            closeGallery();
            return;
        }

        // Only handle arrow keys if focus is in the modal
        if (!isFocusInModal) return;

        switch (e.key) {
            case 'ArrowLeft':
                e.preventDefault();
                prevSlide();
                break;
            case 'ArrowRight':
                e.preventDefault();
                nextSlide();
                break;
            case 'Home':
                e.preventDefault();
                currentSlide = 0;
                updateGallery();
                break;
            case 'End':
                e.preventDefault();
                currentSlide = currentProject.images.length - 1;
                updateGallery();
                break;
        }
    });

    // Close when clicking outside the image
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            closeGallery();
        }
    });

    // Handle focus trapping inside the modal
    const focusableElements = 'button, [href], [tabindex]:not([tabindex="-1"])';
    const firstFocusableElement = modal.querySelectorAll(focusableElements)[0];
    const focusableContent = modal.querySelectorAll(focusableElements);
    const lastFocusableElement = focusableContent[focusableContent.length - 1];

    modal.addEventListener('keydown', function (e) {
        let isTabPressed = e.key === 'Tab' || e.keyCode === 9;

        if (!isTabPressed) {
            return;
        }

        if (e.shiftKey) { // if shift key pressed for shift + tab combination
            if (document.activeElement === firstFocusableElement) {
                lastFocusableElement.focus(); // add focus to the first focusable element
                e.preventDefault();
            }
        } else { // if tab key is pressed
            if (document.activeElement === lastFocusableElement) { // if focused has reached to last focusable element
                firstFocusableElement.focus(); // add focus to the first focusable element
                e.preventDefault();
            }
        }
    });
});
