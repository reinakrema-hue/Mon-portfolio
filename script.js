/* ============================
   1. POPUP AKWABA
============================ */

if (window.location.pathname.includes("index.html")) {
    window.addEventListener("load", function() {
        const popup = document.getElementById("akwaba-popup");

        popup.style.display = "block";

        setTimeout(() => {
            popup.style.display = "none";
        }, 2500);
    });
}

/* ============================
   2. VALIDATION FORMULAIRE
============================ */

const form = document.getElementById("contactForm");
const success = document.getElementById("successMessage");

if (form) {
    form.addEventListener("submit", function(e) {
        e.preventDefault();

        let nom = document.getElementById("nom").value.trim();
        let email = document.getElementById("email").value.trim();
        let tel = document.getElementById("telephone").value.trim();
        let sujet = document.getElementById("sujet").value;
        let msg = document.getElementById("message").value.trim();
        let accepter = document.getElementById("accepter").checked;

        // Vérification SANS "type" (puisqu'il n'existe pas)
        if (!nom || !email || !tel || !sujet || !msg || !accepter) {
            alert("Veuillez remplir tous les champs obligatoires.");
            return;
        }

        success.style.display = "block";
        success.textContent = "Merci Tamara ! Votre message a été envoyé avec succès ✨";

        form.reset();
    });
}


/* ==========================================
   3. ANIMATION SUR LES CARTES PROJETS
========================================== */

document.querySelectorAll(".card").forEach(card => {
    card.addEventListener("mouseenter", () => {
        card.style.transform = "scale(1.05)";
        card.style.transition = "0.3s";
        card.style.boxShadow = "0 10px 20px rgba(0,0,0,0.2)";
    });

    card.addEventListener("mouseleave", () => {
        card.style.transform = "scale(1)";
        card.style.boxShadow = "0 5px 10px rgba(0,0,0,0.1)";
    });
});
