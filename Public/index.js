try {
  const data = await fetch("/api");
  const response = await data.json();
  renderCards(response);
} catch (err) {
  console.log(err);
}

function renderCards(cardsData) {
  const container = document.querySelector(".cards-container");
  let cardsHTML = "";

  cardsData.forEach((card, i) => {
    cardsHTML += `
<article class="note-card" aria-labelledby="note-title-${i}">
  <p class="card-details">${card.timeStamp} • ${card.category}</p>
  <h3 id="note-title-${i}">${card.title}</h3>
  <div class="note-text-wrapper">
    <p class="note-text">${card.text}</p>
  </div>
  <button class="read-more-btn" aria-expanded="false">Read in full</button>
</article>
  `
  });

  container.innerHTML = cardsHTML;
}

// handle card expand/collapse
document.querySelector(".cards-container").addEventListener("click", (e) => {
  if (!e.target.classList.contains("read-more-btn")) return;

  const button = e.target;
  const noteCard = button.closest(".note-card");
  const isExpanded = noteCard.classList.toggle("expanded");

  button.setAttribute("aria-expanded", isExpanded ? "true" : "false");
  button.textContent = isExpanded ? "Show less" : "Read in full";
})