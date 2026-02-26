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

// read gender from URL param, default to boys
const urlGender = new URLSearchParams(window.location.search).get("gender");
const gender = createState(urlGender === "girls" ? "girls" : "boys");

const genderToggle = document.getElementById("genderToggle");
const genderLabel = genderToggle?.querySelector(".gender-label");

// helper: build URL with a given gender param
function buildGenderUrl(g) {
  const url = new URL(window.location.href);
  if (g === "boys") {
    url.searchParams.delete("gender");
  } else {
    url.searchParams.set("gender", g);
  }
  return url.toString();
}

// pill buttons (mobile nav) — open new tab with selected gender
const pillOptions = document.querySelectorAll(".pill-option");
pillOptions.forEach((btn) => {
  btn.addEventListener("click", () => {
    const g = btn.dataset.gender;
    if (g === gender.value) return; // already on this gender, do nothing
    window.open(buildGenderUrl(g), "_blank");
  });
});

if (genderToggle) {
  // desktop — new tab; mobile — same tab
  genderToggle.addEventListener("click", () => {
    const opposite = gender.value === "boys" ? "girls" : "boys";
    const url = buildGenderUrl(opposite);
    if (window.innerWidth <= 768) {
      window.location.href = url;
    } else {
      window.open(url, "_blank");
    }
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

  // apply initial state from URL on load
  gender.subscribe((g) => {}); // trigger render
  const initialContent = CONTENT[gender.value];
  genderLabel.textContent = initialContent.label;
  genderToggle.classList.toggle("is-girls", gender.value === "girls");
  pillOptions.forEach((btn) => {
    btn.classList.toggle("active", btn.dataset.gender === gender.value);
  });
  document.querySelectorAll("[data-key]").forEach((el) => {
    const key = el.dataset.key;
    if (initialContent[key]) el.textContent = initialContent[key];
  });
}

// ─── Contact popup ───────────────────────────────────────────────────────────
document.body.insertAdjacentHTML("beforeend", `
  <button class="contact-fab" id="contactFab" aria-label="تماس با ما">
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.63 3.38 2 2 0 0 1 3.62 1h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.63a16 16 0 0 0 6 6l.96-.96a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 21.73 16z"/>
    </svg>
  </button>

  <div class="contact-overlay" id="contactOverlay"></div>

  <div class="contact-popup" id="contactPopup" role="dialog" aria-modal="true">
    <button class="contact-popup-close" id="contactClose" aria-label="بستن">
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
    </button>
    <h3>تماس با ما</h3>
    <ul class="contact-list">
      <li>
        <span class="contact-label">شماره تماس</span>
        <a href="tel:+989123456789" class="contact-value">٣٠١٢٣٤٥٦٧٨</a>
      </li>
      <li>
        <span class="contact-label">لینک ایتا</span>
        <a href="https://eitaa.com/shaaf" target="_blank" rel="noopener" class="contact-value contact-value--eitaa">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><circle cx="12" cy="12" r="10"/><text x="12" y="16" text-anchor="middle" font-size="10" fill="white" font-family="sans-serif">ا</text></svg>
          eitaa.com/shaaf
        </a>
      </li>
      <li>
        <span class="contact-label">لینک واتس آپ</span>
        <a href="https://wa.me/989123456789" target="_blank" rel="noopener" class="contact-value contact-value--whatsapp">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z"/></svg>
          wa.me/shaaf
        </a>
      </li>
    </ul>
  </div>
`);

const contactFab = document.getElementById("contactFab");
const contactPopup = document.getElementById("contactPopup");
const contactOverlay = document.getElementById("contactOverlay");
const contactClose = document.getElementById("contactClose");

function openContact() {
  contactPopup.classList.add("open");
  contactOverlay.classList.add("open");
}

function closeContact() {
  contactPopup.classList.remove("open");
  contactOverlay.classList.remove("open");
}

contactFab.addEventListener("click", openContact);
contactClose.addEventListener("click", closeContact);
contactOverlay.addEventListener("click", closeContact);
document.addEventListener("keydown", (e) => { if (e.key === "Escape") closeContact(); });

// ─── Preserve gender param on all internal navigation ─────────────────────────
document.addEventListener("click", (e) => {
  const link = e.target.closest("a");
  if (!link) return;
  const href = link.getAttribute("href");
  // only internal relative links, skip anchors and external
  if (!href || href.startsWith("http") || href.startsWith("#") || href.startsWith("tel:") || href.startsWith("mailto:")) return;
  const currentGender = new URLSearchParams(window.location.search).get("gender");
  if (!currentGender) return; // boys is default, no param needed
  e.preventDefault();
  const url = new URL(href, window.location.href);
  url.searchParams.set("gender", currentGender);
  window.location.href = url.toString();
});

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
