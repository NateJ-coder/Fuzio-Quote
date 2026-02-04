const tierButtons = document.querySelectorAll("[data-tier-select]");
const preferredTier = document.getElementById("preferredTier");
const quoteSection = document.getElementById("quote");
const quoteForm = document.getElementById("quoteForm");

const setPreferredTier = (tier) => {
  if (!preferredTier) return;
  preferredTier.value = tier;
};

tierButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const tier = button.getAttribute("data-tier-select");
    setPreferredTier(tier);
    if (quoteSection) {
      quoteSection.scrollIntoView({ behavior: "smooth" });
    }
  });
});

if (quoteForm) {
  quoteForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const submitButton = quoteForm.querySelector("button[type='submit']");
    if (submitButton) {
      submitButton.textContent = "Request sent";
      submitButton.disabled = true;
    }
    quoteForm.reset();
    setPreferredTier("");
  });
}
