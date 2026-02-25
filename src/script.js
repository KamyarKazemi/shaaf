// ─── Smooth scroll ───────────────────────────────────────────────────────────
function scrollToSection(id) {
  const el = document.getElementById(id);
  if (!el) return;
  const headerHeight = document.querySelector(".header")?.offsetHeight ?? 0;
  const top = el.getBoundingClientRect().top + window.scrollY - headerHeight - 24;
  window.scrollTo({ top, behavior: "smooth" });
}

document.querySelectorAll("[data-scroll]").forEach((el) => {
  el.addEventListener("click", (e) => {
    e.preventDefault();
    scrollToSection(el.dataset.scroll);
  });
});

// ─── Gender state ─────────────────────────────────────────────────────────────
function createState(initialValue) {
  let _value = initialValue;
  const _subscribers = [];
  return {
    get value() { return _value; },
    set value(newVal) {
      _value = newVal;
      _subscribers.forEach((fn) => fn(_value));
    },
    subscribe(fn) { _subscribers.push(fn); },
  };
}

const CONTENT = {
  boys: {
    label: "هنرستان پسرانه",
    "hero-title": "هنرستان غیر دولتی پسرانه شایستگان علم و هنر فارس",
    "hero-desc": "مجتمع آموزشی شعف پسرانه با تمرکز بر مهارت‌محوری، تکنولوژی و آموزش عملی، بستری حرفه‌ای برای رشد دانش‌آموزان در مسیر تخصصی فراهم کرده است.",
    "about-title": "درباره شعف پسرانه",
    "about-desc": "شعف پسرانه محیطی پویا، مدرن و مهارت‌محور است که با بهره‌گیری از تجهیزات تخصصی و اساتید حرفه‌ای، دانش‌آموزان را برای ورود مستقیم به بازار کار آماده می‌کند.",
    "rashte-desc": "شبکه و نرم افزار، ماشین ابزار و الکترونیک با تمرکز بر مهارت عملی، پروژه محور و کارگاهی ارائه می‌شوند.",
    "tajhizat-title": "تجهیزات",
    "tajhizat-desc": "کارگاه‌های مجهز و فضای استاندارد آموزشی باعث شده شعف پسرانه یکی از مدارس تخصصی پیشرو در حوزه مهارت‌آموزی باشد.",
    "barnameye-title": "برنامه هنرستان پسرانه",
    "barnameye-desc": "برنامه هنرستان پسرانه شعف بر پایه کارگاه عملی و پروژه‌محور طراحی شده تا دانش‌آموزان در کوتاه‌ترین زمان آماده کار شوند.",
    "moshaverIn-title": "مشاورین پسرانه",
    "moshaverIn-desc": "تیم مشاورین هنرستان پسرانه آماده پاسخگویی به سؤالات تحصیلی، شغلی و روانشناختی دانش‌آموزان هستند.",
    "modiriat-title": "مدیریت هنرستان پسرانه",
    "modiriat-desc": "مدیریت هنرستان پسرانه با تجربه و تخصص در آموزش فنی و حرفه‌ای، محیطی منظم و انگیزش‌بخش برای دانش‌آموزان فراهم کرده است.",
    "shomare-title": "شماره های ضروری پسرانه",
    "shomare-desc": "برای ارتباط با هنرستان پسرانه شعف، ثبت‌نام و کسب اطلاعات بیشتر با شماره‌های زیر تماس بگیرید.",
    "footer-title": "شایستگان علم و هنر فارس - پسرانه",
  },
  girls: {
    label: "هنرستان دخترانه",
    "hero-title": "هنرستان غیر دولتی دخترانه شایستگان علم و هنر فارس",
    "hero-desc": "مجتمع آموزشی شعف دخترانه با تمرکز بر مهارت‌محوری، خلاقیت و آموزش عملی، بستری حرفه‌ای برای رشد دانش‌آموزان دختر در مسیر تخصصی فراهم کرده است.",
    "about-title": "درباره شعف دخترانه",
    "about-desc": "شعف دخترانه محیطی پویا، مدرن و مهارت‌محور است که با بهره‌گیری از تجهیزات تخصصی و اساتید حرفه‌ای، دانش‌آموزان دختر را برای ورود مستقیم به بازار کار آماده می‌کند.",
    "rashte-desc": "رشته‌های حسابداری، طراحی گرافیک و صنایع غذایی با تمرکز بر مهارت عملی، پروژه محور و کارگاهی ارائه می‌شوند.",
    "tajhizat-title": "تجهیزات",
    "tajhizat-desc": "کارگاه‌های مجهز و فضای استاندارد آموزشی باعث شده شعف دخترانه یکی از مدارس تخصصی پیشرو در حوزه مهارت‌آموزی باشد.",
    "barnameye-title": "برنامه هنرستان دخترانه",
    "barnameye-desc": "برنامه هنرستان دخترانه شعف بر پایه خلاقیت، مهارت و کار تیمی طراحی شده تا دانش‌آموزان دختر به‌خوبی آماده ورود به بازار کار شوند.",
    "moshaverIn-title": "مشاورین دخترانه",
    "moshaverIn-desc": "تیم مشاورین هنرستان دخترانه آماده پاسخگویی به سؤالات تحصیلی، شغلی و روانشناختی دانش‌آموزان دختر هستند.",
    "modiriat-title": "مدیریت هنرستان دخترانه",
    "modiriat-desc": "مدیریت هنرستان دخترانه با تجربه و تخصص در آموزش فنی و حرفه‌ای، محیطی امن و انگیزش‌بخش برای دانش‌آموزان دختر فراهم کرده است.",
    "shomare-title": "شماره های ضروری دخترانه",
    "shomare-desc": "برای ارتباط با هنرستان دخترانه شعف، ثبت‌نام و کسب اطلاعات بیشتر با شماره‌های زیر تماس بگیرید.",
    "footer-title": "شایستگان علم و هنر فارس - دخترانه",
  },
};

const gender = createState("boys");

const genderToggle = document.getElementById("genderToggle");
const genderLabel = genderToggle?.querySelector(".gender-label");

// pill buttons (mobile nav)
const pillOptions = document.querySelectorAll(".pill-option");
pillOptions.forEach((btn) => {
  btn.addEventListener("click", () => {
    gender.value = btn.dataset.gender;
  });
});

if (genderToggle) {
  genderToggle.addEventListener("click", () => {
    gender.value = gender.value === "boys" ? "girls" : "boys";
  });

  gender.subscribe((g) => {
    const content = CONTENT[g];

    // update desktop button
    genderLabel.textContent = content.label;
    genderToggle.classList.toggle("is-girls", g === "girls");

    // update mobile pill
    pillOptions.forEach((btn) => {
      btn.classList.toggle("active", btn.dataset.gender === g);
    });

    // update all data-key elements
    document.querySelectorAll("[data-key]").forEach((el) => {
      const key = el.dataset.key;
      if (content[key]) el.textContent = content[key];
    });
  });
}

// ─── Menu toggle ──────────────────────────────────────────────────────────────
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

document.querySelectorAll(".slider-container").forEach((container) => {
  new ImageSlider(container);
});
