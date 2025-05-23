document
    .getElementById("contact-form")
    .addEventListener("submit", async function (event) {
        event.preventDefault(); // Empêche la redirection

        const formData = new FormData(this);
        const jsonData = Object.fromEntries(formData.entries());

        const response = await fetch("https://formspree.io/f/xjkyenla", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(jsonData),
        });

        if (response.ok) {
            document.getElementById("confirmation-message").style.display =
                "block"; // Affiche le message de confirmation
            this.reset(); // Vide le formulaire
        } else {
            alert("Erreur lors de l'envoi du message.");
        }
    });
