// Load Navbar
fetch("../components/navbar.html")
  .then(res => res.text())
  .then(data => {
    document.getElementById("navbar").innerHTML = data;

    // Now the navbar is loaded, so attach the sidebar toggle event
    initSidebarToggle();
  });

// Load Footer
fetch("../components/footer.html")
  .then(res => res.text())
  .then(data => {
    document.getElementById("footer").innerHTML = data;
  });

// Function to set up sidebar toggle AFTER navbar is loaded
function initSidebarToggle() {
  const sidebar = document.getElementById("sidebar");
  const toggleBtn = document.getElementById("toggleBtn");

  if (toggleBtn && sidebar) {
    toggleBtn.addEventListener("click", () => {
      sidebar.classList.toggle("active");
    });
  }
}

// Highlight active sidebar link automatically
document.addEventListener("DOMContentLoaded", () => {
    const currentPage = window.location.pathname.split("/").pop().toLowerCase();
    
    // Wait for navbar to load (since injected)
    const checkLinks = setInterval(() => {
        const links = document.querySelectorAll(".nav-links a");
        
        if (links.length > 0) {
            links.forEach(link => {
                const href = link.getAttribute("href").toLowerCase();
                if (href.includes(currentPage)) {
                    link.classList.add("active-link");
                }
            });
            clearInterval(checkLinks);
        }
    }, 50); // checks until navbar is loaded
});


