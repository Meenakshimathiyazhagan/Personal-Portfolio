document.addEventListener("DOMContentLoaded", () => {
  // ===== Animate Circular Progress (Personality Skills) ===== //
  const circularProgressElements = document.querySelectorAll(".circular-progress");

  const animateCircular = (el) => {
    const percentageEl = el.querySelector(".percentage");
    const target = Number(el.getAttribute("data-percentage"));
    const progressColor = el.getAttribute("data-progress-color") || "gray";
    const bgColor = el.getAttribute("data-bg-color") || "#eee";
    const innerCircleColor = el.getAttribute("data-inner-circle-color") || "#fff";

    let current = 0;
    const speed = 20;

    const interval = setInterval(() => {
      if (current <= target) {
        el.style.background = `conic-gradient(${progressColor} ${current * 3.6}deg, ${bgColor} 0deg)`;
        percentageEl.textContent = `${current}%`;
        current++;
      } else {
        clearInterval(interval);
      }
    }, speed);

    const inner = el.querySelector(".inner-circle");
    if (inner) {
      inner.style.backgroundColor = innerCircleColor;
    }
  };

  // ===== Animate Linear Bars (Technical Skills) ===== //
  const linearProgressBars = document.querySelectorAll(".progress-bar");

  const animateLinear = (bar) => {
    const targetWidth = bar.style.width;
    bar.style.width = "0"; // Reset initially

    setTimeout(() => {
      bar.style.transition = "width 2s ease";
      bar.style.width = targetWidth;
    }, 100); // Small delay to allow reset before animating
  };

  // ===== Set Up IntersectionObserver ===== //
  const observerOptions = {
    root: null,
    threshold: 0.3,
  };

  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        if (entry.target.classList.contains("circular-progress")) {
          animateCircular(entry.target);
        } else if (entry.target.classList.contains("progress-bar")) {
          animateLinear(entry.target);
        }
        obs.unobserve(entry.target);
      }
    });
  }, observerOptions);

  // Observe both types
  circularProgressElements.forEach(el => observer.observe(el));
  linearProgressBars.forEach(bar => observer.observe(bar));
});

document.addEventListener("DOMContentLoaded", () => {
  const elements = document.querySelectorAll(".div1, .div2");

  const io = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      const el = entry.target;

      if (entry.isIntersecting) {
        // add the animation class
        el.classList.add("show");

        /*
         *  If you want each element to animate only ONCE, add this line
         *  and remove the `io.observe` call in the else branch ↓
         */
        // el.classList.add("revealed");
      } else {
        /*
         *  Remove the class so it can animate again next time it enters.
         *  If you prefer the 'one-and-done' effect, comment out these two lines.
         */
        el.classList.remove("show");
      }
    });
  }, {
    threshold: 0.5,          // fire when 50 % is visible
    rootMargin: "0px 0px -10% 0px"  // start a bit sooner as it scrolls up
  });

  elements.forEach(el => io.observe(el));
});

  // Function to trigger animation when in view
  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("animate");
        observer.unobserve(entry.target); // Remove after animating once
      }
    });
  }, {
    threshold: 0.5
  });

  // Observe image and text
  const image = document.querySelector(".div1 img");
  const text = document.querySelector(".div2");

  observer.observe(image);
  observer.observe(text);

document.addEventListener("DOMContentLoaded", function () {
    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate");
          observer.unobserve(entry.target); // Animate once
        }
      });
    }, {
      threshold: 0.3
    });

    // Observe all .card elements
    const cards = document.querySelectorAll(".card");
    cards.forEach(card => observer.observe(card));

    // Observe .work-ex section
    const workEx = document.querySelector(".work-ex");
    if (workEx) observer.observe(workEx);
  });

document.addEventListener("DOMContentLoaded", () => {
    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate");
          observer.unobserve(entry.target); // Animate only once
        }
      });
    }, {
      threshold: 0.2, // Adjust if you want earlier/later trigger
    });

    const targets = document.querySelectorAll(".image-sm, .contact-text, .contact-form .input-container");

    targets.forEach(el => observer.observe(el));
  });


    document.addEventListener("DOMContentLoaded", () => {
    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate");
          observer.unobserve(entry.target); // run only once
        }
      });
    }, {
      threshold: 0.2,
    });

    const target = document.querySelector(".main-content");
    if (target) observer.observe(target);
  });

 document.addEventListener("DOMContentLoaded", function () {
    const cursor = document.querySelector(".cursor");
    let posX = 0, posY = 0;
    let mouseX = 0, mouseY = 0;

    // Mousemove for desktop
    document.addEventListener("mousemove", function (e) {
      mouseX = e.clientX;
      mouseY = e.clientY;
    });

    // Touchmove for mobile
    document.addEventListener("touchmove", function (e) {
      const touch = e.touches[0];
      mouseX = touch.clientX;
      mouseY = touch.clientY;
    });

    // Cursor animation
    function animateCursor() {
      posX += (mouseX - posX) * 0.1;
      posY += (mouseY - posY) * 0.1;
      cursor.style.left = posX + "px";
      cursor.style.top = posY + "px";
      requestAnimationFrame(animateCursor);
    }

    animateCursor();
  });


document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const serviceID = 'service_i2tb2v5';
    const templateID = 'template_eqdo8n6';

    const templateParams = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        comment: document.getElementById('comment').value
    };

    emailjs.send(serviceID, templateID, templateParams)
        .then(() => {
            showAlert('Email sent successfully!');
        }, (err) => {
            showAlert('Failed to send email. Please try again.');
            console.error('Error:', err);
        });
});

function showAlert(message) {
    const alertBox = document.getElementById('custom-alert');
    alertBox.querySelector('p').innerText = message;
    alertBox.style.display = 'block';
}

function closeAlert() {
    document.getElementById('custom-alert').style.display = 'none';
}
