// Select the theme selector dropdown and logo
const themeSelector = document.querySelector('#themeSelector');
const logo = document.querySelector('#logo');

// Change theme function
function changeTheme() {
  // Check the selected theme
  if (themeSelector.value === 'dark') {
    document.body.classList.add('dark');
    logo.src = 'https://wdd131.netlify.app/assets/images/byui-logo_white.png'; // Update logo for dark theme
    console.log('dark theme activated, logo updated to',logo.scr);
  } else {
    document.body.classList.remove('dark');
    logo.src = 'https://wdd131.netlify.app/assets/images/byui-logo_blue.webp'; // Restore original logo
  }
}

// Add an event listener to listen for changes
themeSelector.addEventListener('change', changeTheme);

