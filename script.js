// STEP 1: Get the button by its ID
const toggleBtn = document.getElementById('theme-toggle');

// STEP 2: Add a click event to the button
toggleBtn.addEventListener('click', () => {
  // Toggle the 'dark' class on <body>
  document.body.classList.toggle('dark');

  // Check if dark mode is now on
  const darkModeOn = document.body.classList.contains('dark');

  // Update the button's label
  toggleBtn.textContent = darkModeOn ? 'Switch to Light Mode' : 'Switch to Dark Mode';
});

// STEP 3: Optional — Start with dark mode if user prefers it
if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
  document.body.classList.add('dark');
  toggleBtn.textContent = 'Switch to Light Mode';
}

