document.addEventListener("DOMContentLoaded", function () {

    /* =========================
       MOBILE NAVIGATION
    ========================= */

    const menuToggle = document.querySelector(".menu-toggle");
    const navLinks = document.querySelector(".nav-links");
    const navItems = document.querySelectorAll(".nav-links a");

    if (menuToggle && navLinks) {
        menuToggle.addEventListener("click", function () {
            navLinks.classList.toggle("active");
        });
    }

    navItems.forEach(item => {
        item.addEventListener("click", function () {
            navLinks.classList.remove("active");
        });
    });


    /* =========================
       CONTACT FORM (FINAL FIX)
    ========================= */

const form = document.getElementById("contactForm");

if (form) {
  form.addEventListener("submit", async function(e) {
    e.preventDefault();

    const formData = new FormData(form);

    try {
      const response = await fetch("https://formspree.io/f/xzdyekrn", {
        method: "POST",
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      });

      if (response.ok) {
        alert("✅ Message sent successfully!");
        form.reset();
      } else {
        alert("❌ Failed to send");
      }

    } catch (error) {
      alert("❌ Network error");
    }
  });
}


    /* =========================
       SKILLS ANIMATION (SAFE)
    ========================= */

    const cards = document.querySelectorAll(".card");

    const cardObserver = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("show");
            }
        });
    }, { threshold: 0.2 });

    cards.forEach(card => cardObserver.observe(card));


    /* =========================
       EXPERIENCE ANIMATION (FIXED)
    ========================= */

    const expItems = document.querySelectorAll('.exp-content');

    const expObserver = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('show');
            }
        });
    }, { threshold: 0.2 });

    expItems.forEach(item => expObserver.observe(item));

});
const cursor = document.querySelector(".cursor-glow");

document.addEventListener("mousemove", (e) => {
  if (cursor) {
    cursor.style.left = e.clientX + "px";
    cursor.style.top = e.clientY + "px";
  }
});

/* OPTIONAL: GLOW ON CLICK */
document.addEventListener("mousedown", () => {
  cursor.style.transform = "translate(-50%, -50%) scale(1.3)";
});

document.addEventListener("mouseup", () => {
  cursor.style.transform = "translate(-50%, -50%) scale(1)";
});
const links = document.querySelectorAll("a, button");

links.forEach(el => {
  el.addEventListener("mouseenter", () => {
    cursor.style.opacity = "0.6";
    cursor.style.transform = "translate(-50%, -50%) scale(1.5)";
  });

  el.addEventListener("mouseleave", () => {
    cursor.style.opacity = "1";
    cursor.style.transform = "translate(-50%, -50%) scale(1)";
  });
});

particlesJS("particles-js", {
  particles: {
    number: {
      value: 130,   // 🔥 more particles
      density: { enable: true, value_area: 800 }
    },

    color: { value: "#e2e8f0" },   // soft white

    shape: {
      type: "circle"
    },

    opacity: {
      value: 0.9   // 🔥 strong visibility
    },

    size: {
      value: 6,    // 🔥 BIGGER particles
      random: true
    },

   line_linked: {
  enable: true,
  distance: 150,
  color: "#e2e8f0",
  opacity: 0.3,
  width: 1.2
},

    move: {
      enable: true,
      speed: 1.2,   // slow floating feel
      out_mode: "out"
    }
  },

  interactivity: {
    events: {
      onhover: {
        enable: true,
        mode: "grab"
      }
    },

    modes: {
      grab: {
        distance: 170,
        line_linked: {
          opacity: 0.7
        }
      }
    }
  },

  retina_detect: true
});

