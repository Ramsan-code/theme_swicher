 // Get the theme selector element
      let themeSelect = document.getElementById("themeSelect");
      let body = document.body;
      let currentTheme = "light"; 

      // Function to apply theme
      function applyTheme(themeName) {
        // Remove all theme classes
        body.className = "";
        // Add the selected theme class
        body.classList.add(themeName);
        // Update current theme variable
        currentTheme = themeName;
        // Update select value
        themeSelect.value = themeName;
      }

      // Function to handle theme change
      function handleThemeChange() {
        let selectedTheme = themeSelect.value;
        applyTheme(selectedTheme);
      }

      // Add event listener to the select element
      themeSelect.addEventListener("change", handleThemeChange);

      // Initialize with default theme
      applyTheme("light");

      function setDarkTheme() {
        themeSelect.value = "dark";
        handleThemeChange();
      }

      function setBluTheme() {
        themeSelect.value = "blue";
        handleThemeChange();
      }

      function setForestTheme() {
        themeSelect.value = "forest";
        handleThemeChange();
      }