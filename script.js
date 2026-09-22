document.querySelectorAll('a[href^="#"]').forEach((link) =>
  link.addEventListener("click", (e) => {
    const target = document.querySelector(link.getAttribute("href"));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: "smooth" });
    }
  }),
);

const promoModal = document.querySelector("#promo-modal");
const promoCard = promoModal.querySelector(".promo-card");
const refocusPromo = () => {
  promoCard.classList.remove("is-refocused");
  void promoCard.offsetWidth;
  promoCard.classList.add("is-refocused");
  promoCard.focus();
};
const closePromo = () => {
  promoModal.classList.remove("is-open");
  promoModal.setAttribute("aria-hidden", "true");
};
const claimPromo = () => {
  window.location.href = "https://nalydi.com/ref/6pbwr44";
};

const openPromo = () => {
  promoModal.classList.add("is-open");
  promoModal.setAttribute("aria-hidden", "false");
  promoCard.focus();
};

openPromo();

document
  .querySelectorAll("[data-close-promo]")
  .forEach((button) => button.addEventListener("click", claimPromo));
document
  .querySelectorAll("[data-promo-claim]")
  .forEach((button) => button.addEventListener("click", claimPromo));

promoModal
  .querySelector(".promo-backdrop")
  .addEventListener("click", refocusPromo);
document.addEventListener("focusin", (event) => {
  if (
    promoModal.classList.contains("is-open") &&
    !promoModal.contains(event.target)
  )
    refocusPromo();
});
