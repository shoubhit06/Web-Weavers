document.addEventListener("DOMContentLoaded", () => {
  const params = new URLSearchParams(window.location.search);
  const group = params.get("group");
  const name = params.get("name");

  if (group && initiatives[group] && detailedInitiatives[name]) {
    const init = detailedInitiatives[name];
    document.getElementById("explore-page-title").innerHTML = init.title;
    document.getElementById("explore-page-description").innerHTML =
      getServiceAbout(name, group);
    document
      .getElementById("initOfficialWebsite")
      .addEventListener("click", function () {
        window.open(getServiceLink(name, group));
      });
    document.getElementById("initInfo").innerHTML = init.info;
    const carousel = document.getElementById("carousel");
    carousel.innerHTML = init.images
      .map((url) => `<img src="${url}" class="w-full h-64 object-cover">`)
      .join("");
  }
});

function getServiceAbout(n, g) {
  const service = initiatives[g].find((s) => s.name === n);
  return service ? service.about : null; // returns null if not found
}
function getServiceLink(n, g) {
  const service = initiatives[g].find((s) => s.name === n);
  return service ? service.link : null; // returns null if not found
}
