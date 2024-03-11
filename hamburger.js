// document.addEventListener('DOMContentLoaded', function () {
//     const hamburgerIcon = document.getElementById('hamburger-icon');
//     const navText = document.getElementById('nav-text');

//     let pointerCaptured = false;

//     hamburgerIcon.addEventListener('pointerdown', function (event) {
//       if (!pointerCaptured) {
//         navText.style.display = 'block';
//         event.target.setPointerCapture(event.pointerId);
//         pointerCaptured = true;
//       } else {
//         navText.style.display = 'none';
//         event.target.releasePointerCapture(event.pointerId);
//         pointerCaptured = false;
//       }
//     });
//   });
