 var typed = new Typed(".multiple-text" ,{
        strings: ["SiQeda Konke Farming"],
        typeSpeed:100,
        backSpeed:100,
        backDelay:1000,
        loop: true
    })

    // JavaScript for zoom effect on scroll
    function zoomOnScroll() {
        // Get all sections that should zoom
        const zoomSections = document.querySelectorAll('.services, .contact');

        // Function to check if an element is in viewport
        function isInViewport(element) {
            const rect = element.getBoundingClientRect();
            return (
                rect.top >= 0 &&
                rect.left >= 0 &&
                rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
                rect.right <= (window.innerWidth || document.documentElement.clientWidth)
            );
        }

        // Function to zoom text
        function zoomText(element) {
            element.style.transition = "all 0.5s ease";
            element.style.transform = "scale(1.1)";
        }

        // Function to reset text zoom
        function resetZoomText(element) {
            element.style.transition = "all 0.5s ease";
            element.style.transform = "scale(1)";
        }

        // Check on scroll
        window.addEventListener('scroll', function() {
            zoomSections.forEach(section => {
                if (isInViewport(section)) {
                    zoomText(section.querySelector('h2'));
                    zoomText(section.querySelector('p'));
                } else {
                    resetZoomText(section.querySelector('h2'));
                    resetZoomText(section.querySelector('p'));
                }
            });
        });

        // Initial check in case elements are in viewport on page load
        zoomSections.forEach(section => {
            if (isInViewport(section)) {
                zoomText(section.querySelector('h2'));
                zoomText(section.querySelector('p'));
            }
        });
    }

    // Run zoomOnScroll function when the DOM is fully loaded
    document.addEventListener('DOMContentLoaded', zoomOnScroll);

	  document.addEventListener('DOMContentLoaded', function() {
	    // Array of image URLs
	    const imageUrls = [
	      'eggs.png',
	      'sevendays.jpg',
	      'chicken.jpg',
	      'feed.jpeg',
	      'small.jpg'
	    
	    ];
	
	    const imageElement = document.getElementById('zoomedImage');
	    let currentIndex = 0;
	
	    function zoomInOut() {
	      // Zoom out
	      imageElement.style.transform = 'scale(1.0)';
	      setTimeout(() => {
	        // Change image source
	        imageElement.src = imageUrls[currentIndex];
	        // Zoom in
	        imageElement.style.transform = 'scale(1.1)';
	      }, 300); // Adjust the delay as per your preference
	
	      // Move to the next image in the array
	      currentIndex = (currentIndex + 1) % imageUrls.length;
	    }
	
	    // Initial load of the first image
	    imageElement.src = imageUrls[currentIndex];
	    currentIndex++;
	
	    // Set interval to change images every 3 seconds (adjust as needed)
	    setInterval(zoomInOut, 3000); // Change image every 3 seconds
		
	  });
	  
	  document.addEventListener('DOMContentLoaded', function() {
	    // Image URLs for each category
	    const imageUrls = {
	      liveChicken: [
	        '7days.jpg',
	        'dayold.jpg',
	        'oldones.jpg'
	      ],
	      mixPortions: [
	        'slaugh.jpg',
	        'portion.jpg'
	      ],
	      feed: [
	        'ffeed.jpg',
	        'cfeed.jpg',
	        'gfeed.jpg',
	        'sfeed.jpg'
	      ]
	    };
	  
	    // Function to populate images for each category
	    function populateImages(categoryId, imageUrls) {
	      const imageList = document.querySelector(`#${categoryId} .image-list`);
	      imageUrls.forEach(url => {
	        const img = document.createElement('img');
	        img.src = url;
	        img.alt = 'Product Image';
	        imageList.appendChild(img);
	      });
	    }
	  
	    // Populate images for each category
	    populateImages('liveChicken', imageUrls.liveChicken);
	    populateImages('mixPortions', imageUrls.mixPortions);
	    populateImages('feed', imageUrls.feed);
	  });

	
