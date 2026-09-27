/* =========================
   MENU MOBILE
========================= */

const menuToggle = document.getElementById("menuToggle");
const navMenu = document.getElementById("navMenu");

menuToggle.addEventListener("click", () => {
    navMenu.classList.toggle("active");

    if (navMenu.classList.contains("active")) {
        menuToggle.textContent = "✕";
    } else {
        menuToggle.textContent = "☰";
    }
});


/* =========================
   FECHAR MENU AO CLICAR
========================= */

const navLinks = document.querySelectorAll(".nav-menu a");

navLinks.forEach(link => {
    link.addEventListener("click", () => {
        navMenu.classList.remove("active");
        menuToggle.textContent = "☰";
    });
});


/* =========================
   FILTRO DO MENU
========================= */

const categoryButtons = document.querySelectorAll(".category");
const products = document.querySelectorAll(".product-card");

categoryButtons.forEach(button => {

    button.addEventListener("click", () => {

        categoryButtons.forEach(btn => {
            btn.classList.remove("active");
        });

        button.classList.add("active");

        const category = button.dataset.category;

        products.forEach(product => {

            if (
                category === "todos" ||
                product.dataset.category === category
            ) {

                product.style.display = "block";

                setTimeout(() => {
                    product.style.opacity = "1";
                    product.style.transform = "translateY(0)";
                }, 10);

            } else {

                product.style.opacity = "0";
                product.style.transform = "translateY(10px)";

                setTimeout(() => {
                    product.style.display = "none";
                }, 200);

            }

        });

    });

});


/* =========================
   PEDIDOS WHATSAPP
========================= */

const orderButtons = document.querySelectorAll(".order-btn");

const whatsappNumber = "244923000000";

orderButtons.forEach(button => {

    button.addEventListener("click", () => {

        const product = button.dataset.product;

        const message =
            `Olá Burger House! 🍔%0A%0A` +
            `Gostaria de fazer um pedido:%0A` +
            `*${product}*%0A%0A` +
            `Podem informar a disponibilidade e o tempo de entrega?`;

        const url =
            `https://wa.me/${whatsappNumber}?text=${message}`;

        window.open(url, "_blank");

    });

});


/* =========================
   ANO AUTOMÁTICO
========================= */

const year = document.getElementById("year");

year.textContent = new Date().getFullYear();


/* =========================
   HEADER AO FAZER SCROLL
========================= */

const header = document.getElementById("header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {
        header.style.background = "rgba(5, 5, 5, 0.97)";
    } else {
        header.style.background = "rgba(8, 8, 8, 0.9)";
    }

});