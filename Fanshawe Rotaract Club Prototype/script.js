//NAVBAR JAVASCRIPT
document.addEventListener("DOMContentLoaded", () => {
    const hamburger = document.getElementById("hamburger");
    const navLinks = document.getElementById("navLinks");
  
    hamburger.addEventListener("click", () => {
      navLinks.classList.toggle("active");
    });
  });
  



// HERO SLIDER
let currentIndex = 0;
const slides = document.querySelectorAll(".slide");

function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.classList.remove("active");
    if (i === index) slide.classList.add("active");
  });
}

setInterval(() => {
  currentIndex = (currentIndex + 1) % slides.length;
  showSlide(currentIndex);
}, 5000); // Change every 5 seconds


//counter countingggggggggggg
document.addEventListener("DOMContentLoaded", () => {
    const counters = document.querySelectorAll(".counter");
    const speed = 250; // lower = faster
  
    counters.forEach(counter => {
      const updateCount = () => {
        const target = +counter.getAttribute("data-target");
        const count = +counter.innerText;
  
        const increment = target / speed;
  
        if (count < target) {
          counter.innerText = Math.ceil(count + increment);
          setTimeout(updateCount, 20);
        } else {
          counter.innerText = target + "+";
        }
      };
  
      updateCount();
    });
  });

  


  ////////// ABOUT US FAQ SECTION

  const questions = document.querySelectorAll(".faq-question");

  questions.forEach(btn => {
    btn.addEventListener("click", () => {
      const answer = btn.nextElementSibling;
      const isOpen = answer.style.maxHeight;

      document.querySelectorAll(".faq-answer").forEach(ans => ans.style.maxHeight = null);
      if (!isOpen) {
        answer.style.maxHeight = answer.scrollHeight + "px";
      }
    });
  });




   ////////// EVENTS COUNTDOWN SECTION
  // Set the date for the next big event (Modify this as needed)
  const eventDate = new Date("June 25, 2025 18:00:00").getTime();

  // Update the countdown every second
  const countdownTimer = setInterval(() => {
    const now = new Date().getTime();
    const timeLeft = eventDate - now;

    if (timeLeft > 0) {
      // Time calculations
      const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
      const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

      // Display the result
      document.getElementById("days").innerText = days;
      document.getElementById("hours").innerText = hours;
      document.getElementById("minutes").innerText = minutes;
      document.getElementById("seconds").innerText = seconds;
    } else {
      clearInterval(countdownTimer);
      document.getElementById("countdown").innerHTML = "<h3>Event is Live Now!</h3>";
    }
  }, 1000);











//MAPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPP


  // Initialize the map
  const map = L.map('map').setView([43.0096, -81.2737], 10); // Focus on London, Ontario

  // Add OpenStreetMap tiles
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
  }).addTo(map);

  // Marker Data
  const locations = [
    {
      name: "Fanshawe College",
      description: "Our main hub for activities and events.",
      coordinates: [43.0096, -81.2737]
    },
    {
      name: "Niagara Falls",
      description: "Exciting group trip to experience the Falls.",
      coordinates: [43.0962, -79.0377]
    },
    {
      name: "Seasons Retirement Home",
      description: "Christmas Visit to bring joy and connect with residents.",
      coordinates: [42.7749, -81.1892]
    },
    {
      name: "Thames River Cleanup",
      description: "Environmental project to clean up the river.",
      coordinates: [43.008, -81.244]
    }
  ];

  // Loop through and add markers
  locations.forEach((location) => {
    L.marker(location.coordinates)
      .addTo(map)
      .bindPopup(`<b>${location.name}</b><br>${location.description}`);
  });

