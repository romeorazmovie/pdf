// MultiTools Website JavaScript
document.addEventListener("DOMContentLoaded", function() {
    // Load header and footer
    loadHeader();
    loadFooter();
    
    // Initialize search functionality
    initSearch();
});

function loadHeader() {
    fetch("includes/header.html")
        .then(response => response.text())
        .then(data => {
            document.getElementById("header").innerHTML = data;
        })
        .catch(error => console.error("Error loading header:", error));
}

function loadFooter() {
    fetch("includes/footer.html")
        .then(response => response.text())
        .then(data => {
            document.getElementById("footer").innerHTML = data;
        })
        .catch(error => console.error("Error loading footer:", error));
}

function initSearch() {
    const searchInput = document.getElementById("searchInput");
    const searchButton = document.getElementById("searchButton");
    const toolCards = document.querySelectorAll(".tool-card");
    
    if (searchInput && searchButton) {
        searchButton.addEventListener("click", performSearch);
        searchInput.addEventListener("keyup", function(event) {
            if (event.key === "Enter") {
                performSearch();
            }
        });
    }
    
    function performSearch() {
        const searchTerm = searchInput.value.toLowerCase().trim();
        
        if (searchTerm === "") {
            // Show all tools if search is empty
            toolCards.forEach(card => {
                card.style.display = "block";
            });
            return;
        }
        
        // Filter tools based on search term
        toolCards.forEach(card => {
            const toolName = card.getAttribute("data-name");
            if (toolName.includes(searchTerm)) {
                card.style.display = "block";
            } else {
                card.style.display = "none";
            }
        });
    }
}

// Tool-specific JavaScript functions would be added to individual tool pages