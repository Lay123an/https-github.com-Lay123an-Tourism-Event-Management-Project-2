document.addEventListener("DOMContentLoaded", function () {
    const readMoreLinks = document.querySelectorAll(".info a");
  
    readMoreLinks.forEach((link) => {
      link.addEventListener("click", function (e) {
        e.preventDefault();
  
        const eventBox = this.closest(".event");
  
        // Highlight the event block
        eventBox.style.backgroundColor = "#fff8dc";
        setTimeout(() => {
          eventBox.style.backgroundColor = "transparent";
        }, 500);
  
        // Alert (or you could show modal/pop-up instead)
        alert("More event details will be available soon!");
      });
    });
  });