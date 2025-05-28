document.getElementById("myForm").addEventListener('submit', (e) => {
  e.preventDefault();

  const email = document.getElementById('email').value.trim();
  const subject = document.getElementById('subject').value.trim();
  const message = document.getElementById('message').value.trim();
  const errorMsg = document.getElementById("errorMsg");
  const successMsg = document.getElementById("successMsg");

  errorMsg.textContent = '';
  successMsg.textContent = "";




  const error = validateForm(subject, email, message);

  if (error) {
    showError(error)
  } else {
    successMsg.textContent = "Form submitted successfully!";
    setTimeout(() => {
      successMsg.textContent = "";

    }, 2000)
    document.getElementById('myForm').reset();
  }

})

// Helper functions
function isValidsubject(subject) {
  return subject.length > 0;
}

// Main validation function
function validateForm(subject, email, password) {
  if (!isValidsubject(subject)) {
    return "subject is required.";
  }

  if (!isValidEmail(email)) {
    return "Please enter a valid email.";
  }

  //   if (!isValidPassword(message)) {
  //     return "Enter message is required.";
  //   }

  return null; // No errors
}


function isValidEmail(email) {
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailPattern.test(email);
}

// function isValidPassword(message) {
//   return message.length >= 6;
// }

function showError(message) {
  const errorMsg = document.getElementById("errorMsg");
  errorMsg.textContent = message;
}


// scrolling effect 
document.getElementById("contactBtn").addEventListener("click", function () {
  document.getElementById("contact").scrollIntoView({ behavior: "smooth" });
});

document.addEventListener("DOMContentLoaded", () => {
  const buttons = document.querySelectorAll(".filter-btn");
  const dropdown = document.getElementById("filterDropdown");
  const items = document.querySelectorAll(".portfolio-item");

  // Function to filter portfolio items by category
  function filterItems(filter) {
    items.forEach(item => {
      const category = item.getAttribute("data-category");
      if (filter === "All" || category === filter) {
        item.style.display = "block";
      } else {
        item.style.display = "none";
      }
    });
  }

  // Handle button clicks
  buttons.forEach(button => {
    button.addEventListener("click", () => {
      const filter = button.getAttribute("data-filter");

      // Update active class on buttons
      buttons.forEach(btn => btn.classList.remove("active"));
      button.classList.add("active");

      // Update dropdown selection to match
      if (dropdown) dropdown.value = filter;

      // Filter portfolio items
      filterItems(filter);
    });
  });

  // Handle dropdown change
  if (dropdown) {
    dropdown.addEventListener("change", () => {
      const filter = dropdown.value;

      // Update buttons active state to match dropdown
      buttons.forEach(btn => {
        btn.classList.toggle("active", btn.getAttribute("data-filter") === filter);
      });

      // Filter portfolio items
      filterItems(filter);
    });
  }
});


// counting feature
  const counters = document.querySelectorAll('.counter');

counters.forEach(counter => {
  // Extract suffix: anything that's NOT a digit or comma
  const suffix = counter.innerText.replace(/[0-9.]/g, '');

  const target = +counter.getAttribute('data-target');
  let current = 0;

  const updateCounter = () => {
    const increment = target / 200;

    if (current < target) {
      current += increment;
      // Add suffix back after the number
      counter.innerText = Math.ceil(current).toLocaleString() + suffix;
      setTimeout(updateCounter, 10);
    } else {
      counter.innerText = target.toLocaleString() + suffix;
    }
  };

  updateCounter();
});
