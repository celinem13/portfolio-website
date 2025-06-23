// ===== Dark-mode toggle logic =====

// 1. Grab the button by its ID
const toggleBtn = document.getElementById('theme-toggle');

// 2. Run this every time the button is clicked
toggleBtn.addEventListener('click', () => {
  // A. Toggle the 'dark' class on <body>
  document.body.classList.toggle('dark');

  // B. Update button text to reflect the new state
  const darkModeOn = document.body.classList.contains('dark');
  toggleBtn.textContent = darkModeOn ? 'Switch to Light Mode' : 'Switch to Dark Mode';
});

// 3. (Optional) Start in the user’s preferred color scheme
if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
  document.body.classList.add('dark');
  toggleBtn.textContent = 'Switch to Light Mode';
}
