// DOM Traversal Example 1: Selecting specific elements for manipulation
const wrapper = document.querySelector(".hero .wrapper"); // Access the wrapper inside the hero section
const header = document.querySelector("header"); // Access the header element
const cards = document.querySelectorAll(".grid-container .card"); // Access all cards inside the grid container
const detailedFeedback = document.querySelector(".detailed-feedback"); // Access feedback section
const darkBg = document.querySelector(".dark-bg"); // Access the background overlay

// HTML Events Example 1: Handling the scroll event on the window
window.addEventListener("scroll", () => {
  const scrolled = window.scrollY; // Get the vertical scroll position

  // CSS Manipulation Example 1: Rotate the wrapper element based on scroll position
  if (scrolled <= 300) {
    wrapper.style.transform = `rotateX(${-scrolled / 3}deg)`;
  }

  // CSS Manipulation Example 2: Change header styles based on scroll position
  if (scrolled > 100) {
    if (!(scrolled > 3580 && scrolled <= 4000)) {
      header.classList.add("below"); // Add a class to modify the header style
    }
    document.querySelector(".hero").style.top = "100px"; // Adjust the hero section position
  } else {
    header.classList.remove("below"); // Remove the class when scrolled back up
    document.querySelector(".hero").style.top = "0"; // Reset hero section position
  }

  // CSS Manipulation Example 3: Reset the header styles after a specific scroll value
  if (scrolled > 3500) {
    header.classList.remove("below");
  }
});

// Intersection Observer for animations
const options = {
  threshold: 0.2, // Trigger animations when 20% of the element is visible
};

// JavaScript Effects Example 1: Using IntersectionObserver for lazy animations
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    // CSS Manipulation Example 4: Toggle "active" class for elements in view
    entry.target.classList.toggle("active", entry.isIntersecting);
  });
}, options);

// JavaScript Effects Example 2: Using another IntersectionObserver
const newObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      entry.target.classList.toggle("active", entry.isIntersecting); // Toggle "active" class
      if (entry.isIntersecting) newObserver.unobserve(entry.target); // Stop observing once in view
    });
  },
  {
    rootMargin: "100px", // Adjust the margin for earlier animation triggers
  }
);

// DOM Traversal Example 2: Observe elements in the team container
const teamContainer = document.querySelector(".team-container");
newObserver.observe(teamContainer); // Observe the team container for animations

// DOM Traversal Example 3: Observe multiple elements for animations
const elements = document.querySelectorAll(
  ".service .description, .service img, .service h2, .video-title"
);
elements.forEach((el) => {
  observer.observe(el); // Apply animations to each element
});

// HTML Events Example 2: Handle form submission
const inputs = document.querySelectorAll(".appointment form input"); // Access all inputs in the appointment form
const appointmentForm = document.querySelector(".appointment form");
appointmentForm.addEventListener("submit", (e) => {
  e.preventDefault(); // Prevent default form submission

  // DOM Modification Example 1: Update the booked message dynamically
  document.querySelector(
    ".booked"
  ).children[0].innerText = `THANK YOU ${inputs[0].value.toUpperCase()}, YOU HAVE BOOKED YOUR APPOINTMENT ON ${
    inputs[2].value
  } AT ${inputs[3].value}`;

  // CSS Manipulation Example 5: Display the confirmation modal and background overlay
  document.querySelector(".booked").style.display = "block";
  darkBg.style.display = "block";
  document.body.style.overflowY = "hidden"; // Disable scrolling
});

// HTML Events Example 3: Handle close button click for the modal
document.querySelector(".booked").children[1].addEventListener("click", () => {
  // CSS Manipulation Example 6: Hide the modal and overlay
  document.querySelector(".booked").style.display = "none";
  darkBg.style.display = "none";
  document.body.style.overflowY = "auto"; // Re-enable scrolling
});
