function showOverlay(eventType) {
    const overlay = document.getElementById("eventOverlay");
    const title = document.getElementById("overlayTitle");
    const description = document.getElementById("overlayDescription");
    document.body.classList.add("overlay-active");
  
    // Event details
    const eventDetails = {
      abacus: { title: "ABACUS", description: "Learn the fundamentals of Abacus and enhance your mathematical skills." },
      vedicmaths: { title: "VEDIC MATHS", description: "Master quick calculations with ancient Vedic Math techniques." },
      rubikscube: { title: "RUBIK'S CUBE", description: "Solve the Rubik’s Cube with speed-solving techniques." },
      techworld: { title: "TECH WORLD", description: "Explore the latest advancements in the world of technology." }
    };
  
    title.textContent = eventDetails[eventType].title;
    description.textContent = eventDetails[eventType].description;
    
    overlay.style.display = "flex";
  }
  
  function closeOverlay() {
    document.getElementById("eventOverlay").style.display = "none";
    document.body.classList.remove("overlay-active");
  }
  