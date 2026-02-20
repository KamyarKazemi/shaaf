const menuToggle = document.querySelector(".menu-toggle");
const nav = document.querySelector(".nav");

if (menuToggle && nav) {
  menuToggle.addEventListener("click", (e) => {
    e.stopPropagation();
    nav.classList.toggle("open");
    menuToggle.classList.toggle("active");
  });

  document.addEventListener("click", (e) => {
    const clickedInsideNav = nav.contains(e.target);
    const clickedToggle = menuToggle.contains(e.target);

    if (!clickedInsideNav && !clickedToggle) {
      nav.classList.remove("open");
      menuToggle.classList.remove("active");
    }
  });

  window.addEventListener("resize", () => {
    if (window.innerWidth > 768) {
      nav.classList.remove("open");
      menuToggle.classList.remove("active");
    }
  });
}

const reveals = document.querySelectorAll(".reveal");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("active");
      }
    });
  },
  { threshold: 0.2 },
);

reveals.forEach((el) => observer.observe(el));

class ImageSlider {
  constructor(container) {
    this.container = container;
    this.track = container.querySelector(".slider-track");
    this.slides = container.querySelectorAll(".slide");
    this.prevBtn = container.querySelector(".prev");
    this.nextBtn = container.querySelector(".next");
    this.dots = container.querySelectorAll(".dot");
    this.wrapper = container.querySelector(".slider-wrapper");

    this.currentIndex = 0;
    this.isDragging = false;
    this.startPos = 0;
    this.currentTranslate = 0;
    this.prevTranslate = 0;
    this.animationID = 0;

    this.init();
  }

  init() {
    this.prevBtn?.addEventListener("click", () => this.next());
    this.nextBtn?.addEventListener("click", () => this.prev());

    this.dots.forEach((dot, index) => {
      dot.addEventListener("click", () => this.goToSlide(index));
    });

    // Touch events
    this.wrapper.addEventListener("mousedown", this.touchStart.bind(this));
    this.wrapper.addEventListener("touchstart", this.touchStart.bind(this));

    this.wrapper.addEventListener("mousemove", this.touchMove.bind(this));
    this.wrapper.addEventListener("touchmove", this.touchMove.bind(this));

    this.wrapper.addEventListener("mouseup", this.touchEnd.bind(this));
    this.wrapper.addEventListener("touchend", this.touchEnd.bind(this));

    this.wrapper.addEventListener("mouseleave", this.touchEnd.bind(this));

    this.wrapper.addEventListener("contextmenu", (e) => {
      if (this.isDragging) e.preventDefault();
    });

    document.addEventListener("keydown", (e) => {
      if (e.key === "ArrowLeft" || e.key === "ArrowRight") {
        e.key === "ArrowLeft" ? this.prev() : this.next();
      }
    });
  }

  touchStart(e) {
    this.isDragging = true;
    this.startPos = this.getPositionX(e);
    this.wrapper.classList.add("dragging");
    this.animationID = requestAnimationFrame(this.animation.bind(this));
  }

  touchMove(e) {
    if (!this.isDragging) return;

    const currentPosition = this.getPositionX(e);
    this.currentTranslate =
      this.prevTranslate + currentPosition - this.startPos;
  }

  touchEnd() {
    if (!this.isDragging) return;

    this.isDragging = false;
    cancelAnimationFrame(this.animationID);
    this.wrapper.classList.remove("dragging");

    const movedBy = this.currentTranslate - this.prevTranslate;

    if (movedBy > 50 && this.currentIndex < this.slides.length - 1) {
      this.currentIndex++;
    }

    if (movedBy < -50 && this.currentIndex > 0) {
      this.currentIndex--;
    }

    this.updateSlider();
  }

  getPositionX(e) {
    return e.type.includes("mouse") ? e.pageX : e.touches[0].clientX;
  }

  animation() {
    this.setSliderPosition();
    if (this.isDragging) requestAnimationFrame(this.animation.bind(this));
  }

  setSliderPosition() {
    this.track.style.transform = `translateX(${this.currentTranslate}px)`;
  }

  goToSlide(index) {
    this.currentIndex = index;
    this.updateSlider();
  }

  next() {
    if (this.currentIndex < this.slides.length - 1) {
      this.currentIndex++;
      this.updateSlider();
    }
  }

  prev() {
    if (this.currentIndex > 0) {
      this.currentIndex--;
      this.updateSlider();
    }
  }

  updateSlider() {
    this.currentTranslate = this.currentIndex * this.wrapper.offsetWidth;
    this.prevTranslate = this.currentTranslate;
    this.setSliderPosition();
    this.updateDots();
    this.updateSlides();
  }

  updateDots() {
    this.dots.forEach((dot, index) => {
      dot.classList.toggle("active", index === this.currentIndex);
    });
  }

  updateSlides() {
    this.slides.forEach((slide, index) => {
      slide.classList.toggle("active", index === this.currentIndex);
    });
  }

  startAutoPlay(interval = 5000) {
    this.autoPlayInterval = setInterval(() => {
      if (this.currentIndex < this.slides.length - 1) {
        this.next();
      } else {
        this.goToSlide(0);
      }
    }, interval);
  }

  stopAutoPlay() {
    if (this.autoPlayInterval) {
      clearInterval(this.autoPlayInterval);
    }
  }
}

const sliderContainer = document.querySelector(".slider-container");
if (sliderContainer) {
  new ImageSlider(sliderContainer);
}
