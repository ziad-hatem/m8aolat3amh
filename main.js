const scrollRevealOption = {
  distance: "50px",
  origin: "bottom",
  duration: 1000,
};

// header container
ScrollReveal().reveal(".header__container img", {
  duration: 1000,
});

ScrollReveal().reveal(".header__container h1", {
  ...scrollRevealOption,
  delay: 500,
});

ScrollReveal().reveal(".header__container p", {
  ...scrollRevealOption,
  delay: 1000,
});

ScrollReveal().reveal(".header__btns", {
  ...scrollRevealOption,
  delay: 1500,
});

// about container
ScrollReveal().reveal(".about__image img", {
  ...scrollRevealOption,
  origin: "left",
});

ScrollReveal().reveal(".about__content h3", {
  ...scrollRevealOption,
  delay: 500,
});

ScrollReveal().reveal(".about__content .section__header", {
  ...scrollRevealOption,
  delay: 1000,
});

ScrollReveal().reveal(".about__content .section__subheader", {
  ...scrollRevealOption,
  delay: 1500,
});

ScrollReveal().reveal(".about__content .about__grid", {
  ...scrollRevealOption,
  delay: 2000,
});

// contact container
ScrollReveal().reveal(".contact__image img", {
  ...scrollRevealOption,
  origin: "left",
});

document.addEventListener("DOMContentLoaded", function () {
  // Initialize Swiper
  const swiper = new Swiper(".swiper", {
    slidesPerView: "auto",
    spaceBetween: 30,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

  // Get modal and close button
  const modal = document.getElementById("myModal");
  const closeBtn = document.getElementsByClassName("close")[0];

  // Get modal image and text elements
  const modalImage = document.getElementById("modalImage");
  const modalText = document.getElementById("modalText");

  // Get all "المزيد" buttons
  const showModalBtns = document.querySelectorAll(".show-modal");

  // Function to open the modal
  function openModal(event) {
    const projectCard = event.target.closest(".project__card");
    const imageSrc = projectCard.querySelector("img").src;
    const projectName = projectCard.querySelector("h4").textContent;
    const projectLocation = projectCard.querySelector("p").textContent;

    modalImage.src = imageSrc;
    modalText.innerHTML = `${projectName}<br>${projectLocation}`;

    modal.style.display = "block";
  }

  // Function to close the modal
  function closeModal() {
    modal.style.display = "none";
  }

  // Event listeners
  showModalBtns.forEach((btn) => {
    btn.addEventListener("click", openModal);
  });

  closeBtn.addEventListener("click", closeModal);

  window.addEventListener("click", function (event) {
    if (event.target === modal) {
      closeModal();
    }
  });
});
