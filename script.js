// script.js

// Wait until the page fully loads
document.addEventListener("DOMContentLoaded", function () {
  const searchBtn = document.getElementById("search-btn");
  const searchInput = document.getElementById("search-input");

  // When user clicks the search button
  searchBtn.addEventListener("click", handleSearch);

  // When user presses Enter
  searchInput.addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
      handleSearch();
    }
  });

  // Function to handle the search
  function handleSearch() {
    const query = searchInput.value.trim().toLowerCase();

    if (query === "hyderabad") {
      window.location.href = "hyd.html";
    } else if (query === "bangalore") {
      window.location.href = "bangalore.html";
    } else if (query === "chennai") {
      window.location.href = "chennai.html";
    } else if (query === "mumbai") {
      window.location.href = "mumbai.html";
    } else if (query === "delhi") {
      window.location.href = "delhi.html";
    } else {
      alert("No data available for this location");
    }
  }
});
