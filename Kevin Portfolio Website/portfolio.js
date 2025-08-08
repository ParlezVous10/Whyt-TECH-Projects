document.addEventListener("DOMContentLoaded", function () {
    /** ------------------------------
     * 🍔 Hamburger Menu Toggle
     * ------------------------------ */
    const hamburger = document.querySelector(".hamburger");
    const navLinks = document.querySelector(".nav-links");
  
    hamburger.addEventListener("click", function () {
      navLinks.classList.toggle("active");
    });
  
    /** ------------------------------
     * 🎠 Carousel Functionality
     * ------------------------------ */
    const wrapper = document.querySelector(".carousel-wrapper");
    const slides = document.querySelectorAll(".carousel-item");
    const prevBtn = document.querySelector(".prev-btn");
    const nextBtn = document.querySelector(".next-btn");
  
    let index = 0;
  
    function updateCarousel() {
      wrapper.style.transform = `translateX(-${index * 100}%)`;
    }
  
    function nextSlide() {
      index = (index + 1) % slides.length;
      updateCarousel();
    }
  
    function prevSlide() {
      index = (index - 1 + slides.length) % slides.length;
      updateCarousel();
    }
  
    let autoSlide = setInterval(nextSlide, 5000);
  
    nextBtn?.addEventListener("click", function () {
      nextSlide();
      resetAutoSlide();
    });
  
    prevBtn?.addEventListener("click", function () {
      prevSlide();
      resetAutoSlide();
    });
  
    function resetAutoSlide() {
      clearInterval(autoSlide);
      autoSlide = setInterval(nextSlide, 3000);
    }
  
    /** ------------------------------
     * 🖼️ Hero Section Slider
     * ------------------------------ */
    const heroSlides = document.querySelectorAll(".hero-slide");
    const heroDots = document.querySelectorAll(".slider-controls .dot");
    let heroIndex = 0;
  
    function showHeroSlide(index) {
      heroSlides.forEach((slide, i) => {
        slide.classList.remove("active");
        heroDots[i]?.classList.remove("active");
      });
  
      heroSlides[index].classList.add("active");
      heroDots[index]?.classList.add("active");
    }
  
    function nextHeroSlide() {
      heroIndex = (heroIndex + 1) % heroSlides.length;
      showHeroSlide(heroIndex);
    }
  
    function setHeroSlide(index) {
      heroIndex = index;
      showHeroSlide(heroIndex);
      resetHeroAutoSlide();
    }
  
    let heroAutoSlide = setInterval(nextHeroSlide, 4000);
  
    heroDots.forEach((dot, i) => {
      dot.addEventListener("click", () => setHeroSlide(i));
    });
  
    function resetHeroAutoSlide() {
      clearInterval(heroAutoSlide);
      heroAutoSlide = setInterval(nextHeroSlide, 4000);
    }
  
    showHeroSlide(heroIndex);
  
    /** ------------------------------
     * 📩 Formspree Submit + Reset
     * ------------------------------ */
    const form = document.querySelector(".contact-form");
  
    if (form) {
      form.addEventListener("submit", function (e) {
        e.preventDefault();
  
        const formData = new FormData(form);
  
        fetch(form.action, {
          method: "POST",
          body: formData,
          headers: { Accept: "application/json" }
        })
          .then(response => {
            if (response.ok) {
              alert("✅ Message sent successfully!");
              form.reset();
            } else {
              alert("❌ There was an issue sending your message.");
            }
          })
          .catch(error => {
            console.error("Form error:", error);
            alert("❗ Network error. Please try again later.");
          });
      });
    }
  });
  