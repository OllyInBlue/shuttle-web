// =====================
// Configuration
// =====================
const config = {
    companyName: "ShuttleNodes",
    discordServerID: ""
};

// Update company name in HTML
function updateCompanyName() {
    const companyNameElement = document.getElementById('companyNameDisplay');
    if (companyNameElement) {
        companyNameElement.textContent = config.companyName;
    } else {
        console.error('Element with ID "companyNameDisplay" not found.');
    }
}

window.onload = updateCompanyName;

// =====================
// Out Of Stock Plans Toggle
// =====================
function togglePlans() {
    const plans = document.querySelectorAll('.out-of-stock-plans');
    const button = document.querySelector('.show-btn');
    plans.forEach(plan => {
        if (plan.classList.contains('show')) {
            plan.classList.remove('show');
            setTimeout(() => plan.style.display = 'none', 500);
            button.innerHTML = '<i class="fas fa-eye"></i> Show Out of Stock Plans';
        } else {
            plan.style.display = 'block';
            setTimeout(() => plan.classList.add('show'), 10);
            button.innerHTML = '<i class="fas fa-eye-slash"></i> Hide Out of Stock Plans';
        }
    });
}

// =====================
// Mobile Navbar
// =====================
const navbar = document.querySelector(".navbar");
const navbarLinks = document.querySelector(".links");
const hamburger = document.querySelector(".hamburger");

if (hamburger) {
    hamburger.addEventListener("click", () => {
        navbar.classList.toggle("active");
        navbarLinks.classList.toggle("active");
    });
}

// =====================
// Minecraft Tabs
// =====================
document.addEventListener("DOMContentLoaded", () => {
    const tabButtons = document.querySelectorAll(".minecraft-tab-button");
    const tabPanels = document.querySelectorAll(".minecraft-specs");

    tabButtons.forEach(button => {
        button.addEventListener("click", () => {
            const target = button.getAttribute("data-tab");

            // Reset all buttons
            tabButtons.forEach(btn => {
                btn.classList.remove("active", "bg-blue-500");
                btn.classList.add("bg-gray-500");
            });

            // Activate clicked button
            button.classList.add("active", "bg-blue-500");
            button.classList.remove("bg-gray-500");

            // Hide all panels
            tabPanels.forEach(panel => panel.classList.add("hidden"));
            tabPanels.forEach(panel => panel.classList.remove("block"));

            // Show selected panel
            const activePanel = document.getElementById(target);
            activePanel.classList.remove("hidden");
            activePanel.classList.add("block");
        });
    });

    // Default tab
    const defaultTab = document.querySelector(".minecraft-tab-button[data-tab='minecraft-budget']");
    if (defaultTab) defaultTab.click();
});

// =====================
// Plan Details Placeholder
// =====================
function showDetails(plan) {
    alert(`Showing details for the ${plan} plan.`);
}

// =====================
// Optional: Discord Bot Tabs (if any)
// =====================
document.addEventListener('DOMContentLoaded', () => {
    const tabButtons = document.querySelectorAll('.discordbot-tab-button');
    const tabs = document.querySelectorAll('.discordbot-specs');

    tabButtons.forEach(button => {
        button.addEventListener('click', () => {
            const target = button.getAttribute('data-tab');

            // Hide all tabs
            tabs.forEach(tab => tab.classList.remove('active'));

            // Remove active class from buttons
            tabButtons.forEach(btn => btn.classList.remove('active'));

            // Show selected tab
            document.getElementById(target).classList.add('active');
            button.classList.add('active');
        });
    });

    if (tabButtons.length > 0) tabButtons[0].click();
});



