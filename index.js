// //<script>
// let slideIndex = 0;
// const slideContainer = document.querySelector(".carousel-slide");
// const totalSlides = slideContainer.children.length();

// function showSlide(index) {
//     if (index >= totalSlides) slideIndex = 0;
//     else if (index < 0) slideIndex = totalSlides - 1;
//     else slideIndex = index;

//     slideContainer.style.transform = `translateX(-${slideIndex * 100}%)`;
// }

// function moveSlide(step) {
//     showSlide(slideIndex + step);
// }

// // // Auto slide
// // setInterval(() => {
// //   moveSlide(1);
// // }, 5000); // Change every 5 seconds

// // Initial display
// showSlide(slideIndex);
// //</script>


// //<script>

// // //forms submission script
// // document.addEventListener('DOMContentLoaded', function () {
// //     const form = document.querySelector('form');
// //     form.addEventListener('submit', function (e) {
// //       alert('✅ फॉर्म सबमिट झाला आहे!');
// //     });
// //   });

// function toggleMenu() {
//     document.querySelector('.nav-links').classList.toggle('active');
// }
// // Auto-close menu on click
// document.querySelectorAll('.nav-links a').forEach(link => {
//     link.addEventListener('click', () => {
//         document.querySelector('.nav-links').classList.remove('active');
//     });
// });

// //</script>

// //<script>
// //forms submission script
// document.getElementById('contactForm').addEventListener('submit', async function (e) {
//     e.preventDefault(); // ⛔ stop default form submit

//     const form = e.target;
//     const formData = new FormData(form);
//     const data = Object.fromEntries(formData.entries());

//     try {
//         const response = await fetch('/submit', {
//             method: 'POST',
//             headers: {
//                 'Content-Type': 'application/json'
//             },
//             body: JSON.stringify(data)
//         });

//         if (response.ok) {
//             alert('✅ तुमचं फॉर्म यशस्वीरित्या सबमिट झालं आहे!');
//             form.reset(); // ✅ optional: clear form fields
//         } else {
//             alert('❌ सबमिट करताना त्रुटी आली. कृपया नंतर पुन्हा प्रयत्न करा.');
//         }

//     } catch (error) {
//         alert('❌ सर्व्हरशी संपर्क करता आला नाही.');
//     }
// });



//new code here

document.addEventListener("DOMContentLoaded", function () {
  // Toggle menu
  const toggleButton = document.querySelector('.menu-toggle');
  const navLinks = document.querySelector('.nav-links');

  toggleButton.addEventListener('click', () => {
    navLinks.classList.toggle('active');
  });

  // Auto-close on link click
  document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('active');
    });
  });

  // Carousel slide logic for yojana here...
  let slideIndex = 0;
const slideContainer = document.querySelector(".carousel-slide");
const totalSlides = slideContainer.children.length;

function showSlide(index) {
    if (index >= totalSlides) slideIndex = 0;
    else if (index < 0) slideIndex = totalSlides - 1;
    else slideIndex = index;

    slideContainer.style.transform = `translateX(-${slideIndex * 100}%)`;
}

function moveSlide(step) {
    showSlide(slideIndex + step);
}
window.moveSlide=moveSlide;

// // Auto slide
// setInterval(() => {
//   moveSlide(1);
// }, 5000); // Change every 5 seconds

// Initial display
showSlide(slideIndex);



  // Contact form submit logic here...
  const contactForm = document.getElementById('contactForm');
  if (contactForm) {
    contactForm.addEventListener('submit', async function (e) {
      e.preventDefault();
      const formData = new FormData(contactForm);
      const data = Object.fromEntries(formData.entries());

      try {
        const response = await fetch('/submit', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(data)
        });

        if (response.ok) {
          alert('✅ तुमचं फॉर्म यशस्वीरित्या सबमिट झालं आहे!');
          contactForm.reset();
        } else {
          alert('❌ सबमिट करताना त्रुटी आली.');
        }
      } catch (err) {
        alert('❌ सर्व्हरशी संपर्क करता आला नाही.');
      }
    });
  }
});

