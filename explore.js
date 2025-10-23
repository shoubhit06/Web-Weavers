document.addEventListener("DOMContentLoaded", () => {
  const params = new URLSearchParams(window.location.search);
  const group = params.get("group");

  if (group && initiatives[group]) {
    document.getElementById("explore-page-title").innerHTML = titles[group];
    document.getElementById("explore-page-description").innerHTML =
      descriptions[group];

    const container = document.getElementById("initiativesContainer");

    initiatives[group].forEach((item) => {
      const card = document.createElement("div");
      card.className =
        "bg-white shadow-lg rounded-lg p-6 flex flex-col items-center text-center hover:shadow-xl transition";
      card.innerHTML = `
          <img src="${getServiceUrl(item.name)}" alt="${
        item.name
      }" class="h-16 mb-4">
          <h3 class="text-lg font-semibold mb-2">${item.name}</h3>
          <p class="text-slate-600 text-base leading-relaxed mb-3">${
            item.about
          }</p>
          <div class="flex gap-3">
          <a href="/initiative.html?name=${
            item.name
          }&group=${group}" class="bg-blue-700 text-white px-3 py-1 rounded hover:bg-blue-800 transition">More</a>
            <a href="${
              item.link
            }" target="_blank" class="bg-green-600 text-white px-3 py-1 rounded hover:bg-green-700 transition">Official Website</a>
          </div>
        `;
      container.appendChild(card);
    });
  }
});

function showAbout(title, content) {
  document.getElementById("modal").classList.remove("hidden");
  document.getElementById("modalTitle").textContent = title;
  document.getElementById("modalContent").textContent = content;
}

function closeModal() {
  document.getElementById("modal").classList.add("hidden");
}
function getServiceUrl(name) {
  const service = services.find((s) => s.name === name);
  return service ? service.url : null; // returns null if not found
}
