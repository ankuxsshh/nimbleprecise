function showOverlay(eventType) {
  const overlay = document.getElementById("eventOverlay");
  const title = document.getElementById("overlayTitle");
  const description = document.getElementById("overlayDescription");
  const images = document.querySelectorAll(".overlay-image");
  const knowMoreBtn = document.getElementById("knowMoreBtn");

  // Get the current scroll position
  const scrollPosition = window.scrollY || document.documentElement.scrollTop;
  
  // Apply styles to fix the body's position
  document.body.style.position = "fixed";
  document.body.style.top = `-${scrollPosition}px`;
  document.body.style.width = "100%";
  document.body.classList.add("overlay-active");

  // Event details with images and links
  const eventDetails = {
    abacus: { 
      title: "ABACUS", 
      description: "Learn the fundamentals of Abacus and enhance your mathematical skills.",
      images: [
        "https://images.pexels.com/photos/1019470/abacus-mathematics-addition-subtraction-1019470.jpeg ",
        "https://images.pexels.com/photos/1019470/abacus-mathematics-addition-subtraction-1019470.jpeg",
        "https://images.pexels.com/photos/1019470/abacus-mathematics-addition-subtraction-1019470.jpeg"
      ],
      link: "#"
    },
    vedicmaths: { 
      title: "VEDIC MATHS", 
      description: "Master quick calculations with ancient Vedic Math techniques.",
      images: [
        "https://images.pexels.com/photos/6256258/pexels-photo-6256258.jpeg",
        "https://images.pexels.com/photos/4386431/pexels-photo-4386431.jpeg",
        "https://images.pexels.com/photos/7567444/pexels-photo-7567444.jpeg"
      ],
      link: "#"
    },
    rubikscube: { 
      title: "RUBIK'S CUBE", 
      description: "Solve the Rubik’s Cube with speed-solving techniques.",
      images: [
        "https://images.pexels.com/photos/6254929/pexels-photo-6254929.jpeg",
        "https://images.pexels.com/photos/4109271/pexels-photo-4109271.jpeg",
        "https://images.pexels.com/photos/9198357/pexels-photo-9198357.jpeg"
      ],
      link: "#"
    },
    techworld: { 
      title: "TECH WORLD", 
      description: "Explore the latest advancements in the world of technology.",
      images: [
        "https://images.pexels.com/photos/574071/pexels-photo-574071.jpeg",
        "https://images.pexels.com/photos/1181243/pexels-photo-1181243.jpeg",
        "https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg"
      ],
      link: "#"
    }
  };

  // Update overlay content
  title.textContent = eventDetails[eventType].title;
  description.textContent = eventDetails[eventType].description;
  knowMoreBtn.href = eventDetails[eventType].link;
  
  // Update images
  eventDetails[eventType].images.forEach((imgSrc, index) => {
    images[index].src = imgSrc;
    images[index].alt = eventDetails[eventType].title;
  });

  overlay.style.display = "flex";
  overlay.setAttribute("data-scroll-position", scrollPosition);
}

function closeOverlay() {
  const overlay = document.getElementById("eventOverlay");
  const scrollPosition = parseInt(overlay.getAttribute("data-scroll-position"), 10);

  document.body.style.position = "";
  document.body.style.top = "";
  document.body.style.width = "";
  document.body.classList.remove("overlay-active");

  window.scrollTo(0, scrollPosition);
  overlay.style.display = "none";
}