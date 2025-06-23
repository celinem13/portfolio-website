// STEP 1:  Get the button by its ID
const toggleBtn = document.getElementById('theme-toggle');

/* ─────────  NEW: apply saved choice on first load  ───────── */
const savedTheme = localStorage.getItem('theme');          // "dark" | "light" | null
if (savedTheme === 'dark') {
  document.body.classList.add('dark');                     // keep your existing class name
  toggleBtn.textContent = 'Switch to Light Mode';
} else if (savedTheme === 'light') {
  toggleBtn.textContent = 'Switch to Dark Mode';
}

/* ─────────  existing click-handler, plus save to localStorage  ───────── */
toggleBtn.addEventListener('click', () => {
  // Toggle the 'dark' class on <body>
  const darkModeOn = document.body.classList.toggle('dark');

  // Update the button's label
  toggleBtn.textContent = darkModeOn
    ? 'Switch to Light Mode'
    : 'Switch to Dark Mode';

  //  NEW: remember the choice
  localStorage.setItem('theme', darkModeOn ? 'dark' : 'light');
});

/* STEP 3: (optional) fall back to system preference only
   if the user hasn’t picked a theme before */
if (!savedTheme && window.matchMedia('(prefers-color-scheme: dark)').matches) {
  document.body.classList.add('dark');
  toggleBtn.textContent = 'Switch to Light Mode';
  localStorage.setItem('theme', 'dark');
}
