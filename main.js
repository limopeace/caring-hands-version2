document.addEventListener('DOMContentLoaded', () => {
    // Toggle Hamburger Menu
    const hamburgerButton = document.getElementById('hamburgerButton');
    const mobileMenu = document.getElementById('mobileMenu');
    const hamburgerIcon = document.getElementById('hamburgerIcon');
  
    if (hamburgerButton && mobileMenu && hamburgerIcon) {
      hamburgerButton.addEventListener('click', () => {
        mobileMenu.classList.toggle('hidden');
        hamburgerIcon.classList.toggle('fa-bars');
        hamburgerIcon.classList.toggle('fa-times'); // Change icon to "X" when menu is open
      });
    }
  
    // Toggle the visibility of the language dropdown menu
    const languageDropdownButton = document.getElementById('languageDropdownButton');
    const languageDropdownMenu = document.getElementById('languageDropdownMenu');
  
    if (languageDropdownButton && languageDropdownMenu) {
      languageDropdownButton.addEventListener('click', (e) => {
        e.stopPropagation(); // Prevent click from propagating to the window event listener
        languageDropdownMenu.classList.toggle('hidden');
      });
  
      // Close the dropdown if clicked outside
      window.addEventListener('click', () => {
        if (!languageDropdownMenu.classList.contains('hidden')) {
          languageDropdownMenu.classList.add('hidden');
        }
      });
    }
  
    // Search Bar (Optional, if you have specific functionality for search)
    const searchForm = document.querySelector('form[action="/search"]');
    if (searchForm) {
      searchForm.addEventListener('submit', (e) => {
        const searchInput = searchForm.querySelector('input[name="q"]');
        if (searchInput && !searchInput.value.trim()) {
          e.preventDefault();
          alert('Please enter a search term.');
        }
      });
    }
  });
  document.addEventListener('DOMContentLoaded', () => {
    // Language Dropdown Functionality
    const languageDropdownButton = document.getElementById('languageDropdownButton');
    const languageDropdownMenu = document.getElementById('languageDropdownMenu');
  
    if (languageDropdownButton && languageDropdownMenu) {
      // Toggle dropdown visibility on button click
      languageDropdownButton.addEventListener('click', (e) => {
        e.stopPropagation(); // Prevent click from propagating to the window event listener
        languageDropdownMenu.classList.toggle('hidden');
      });
  
      // Close dropdown if clicked outside
      window.addEventListener('click', () => {
        if (!languageDropdownMenu.classList.contains('hidden')) {
          languageDropdownMenu.classList.add('hidden');
        }
      });
    }
  });
    