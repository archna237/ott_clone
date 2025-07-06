document.addEventListener("DOMContentLoaded", function () {
  const toggleBtn = document.getElementById('menu-toggle');
  const dropdown = document.getElementById('profile-dropdown');
  const darkToggle = document.getElementById('darkModeToggle');

  toggleBtn.addEventListener('click', (e) => {
    e.stopPropagation(); 
    dropdown.classList.toggle('show');
  });

  document.addEventListener('click', (e) => {
    if (!dropdown.contains(e.target) && e.target !== toggleBtn) {
      dropdown.classList.remove('show');
    }
  });

  darkToggle.addEventListener('change', () => {
    document.body.classList.toggle('dark', darkToggle.checked);
    document.body.classList.toggle('light', !darkToggle.checked);
  });

  if (darkToggle.checked) {
    document.body.classList.add('dark');
  } else {
    document.body.classList.add('light');
  }
});
