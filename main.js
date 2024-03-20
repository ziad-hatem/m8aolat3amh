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

const swiper = new Swiper(".swiper", {
  slidesPerView: "auto",
  centeredSlides: true,
  centeredSlidesBounds: true,
  spaceBetween: 30,
  navigation: {
    nextEl: ".ri-arrow-right-line",
    prevEl: ".ri-arrow-left-line",
  },
});

// Get modal and close button
const modal = document.getElementById("myModal");
const modalContent = document.querySelector(".modal-content");
const closeBtn = document.querySelector(".close");

// Get modal image and text elements
const modalImage = document.getElementById("modalImage");
const modalText = document.getElementById("modalText");

// Get all "المزيد" buttons and learn more paragraphs
const showModalBtns = document.querySelectorAll(".show-modal");
const learnMoreParagraphs = document.querySelectorAll(".learn-more");

// Function to open the modal and display learn more content in modal text
function openModal(event) {
  const projectCard = event.target.closest(".project__card");
  const imageSrc = projectCard.querySelector("img").src;
  const projectName = projectCard.querySelector("h4").textContent;
  const projectLocation = projectCard.querySelector("p").textContent;

  modalImage.src = imageSrc;
  modalText.innerHTML = `${projectName}<br>${projectLocation}`;

  // Get learn more paragraph and its inner text
  const learnMoreParagraph = projectCard.querySelector(".learn-more");
  const learnMoreContent = learnMoreParagraph.textContent;

  // Set learn more content as modal description
  modalText.innerHTML += `<br>${learnMoreContent}`;

  modal.classList.add("show"); // Show modal with fade-in effect
  modalContent.classList.add("show"); // Show modal content
}

// Function to close the modal
function closeModal() {
  modal.classList.remove("show"); // Hide modal with fade-out effect
  modalContent.classList.remove("show"); // Hide modal content
  modalText.innerHTML = ""; // Clear modal text
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
