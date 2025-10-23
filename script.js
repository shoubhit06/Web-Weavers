document.addEventListener("DOMContentLoaded", () => {
  // Navbar js
  var toggleOpen = document.getElementById("toggleOpen");
  var toggleClose = document.getElementById("toggleClose");
  var collapseMenu = document.getElementById("collapseMenu");

  function handleClick() {
    if (collapseMenu.style.display === "block") {
      collapseMenu.style.display = "none";
    } else {
      collapseMenu.style.display = "block";
    }
  }

  toggleOpen.addEventListener("click", handleClick);
  toggleClose.addEventListener("click", handleClick);

  loadSections();
});

function loadSections() {
  var c = 0;
  for (var i of homePage) {
    if (c % 2 == 0) {
      var div1 = document.createElement("div");
      var div2 = document.createElement("div");
      var div3 = document.createElement("div");
      var div4 = document.createElement("div");
      var div5 = document.createElement("div");
      var div6 = document.createElement("div");
      var div7 = document.createElement("div");
      var div8 = document.createElement("div");
      var h2 = document.createElement("h2");
      var p = document.createElement("p");
      var btn = document.createElement("button");
      btn.textContent = "Explore";
      var div6Img = document.createElement("img");
      div1.className =
        "bg-white py-14 px-6 sm:px-12 bg-gradient-to-r from-pink-50 via-pink-50 to-blue-100";
      div2.className = "max-w-screen-xl mx-auto";
      div3.className = "max-w-screen-md";
      div4.className = "grid lg:grid-cols-2 gap-16 lg:gap-12 mt-6";
      h2.className =
        "text-slate-900 xl:text-6xl md:text-5xl text-4xl font-bold !leading-tight";
      h2.innerHTML = i.title;
      p.className = "text-slate-600 text-base leading-relaxed";
      p.innerHTML = i.description;
      btn.className =
        "bg-indigo-600 hover:bg-indigo-700 border border-indigo-700 transition-all text-base text-white font-medium rounded-full px-6 py-3 cursor-pointer outline-0";
      btn.setAttribute("type", "button");
      assertFunctionToExploreButton(btn, "/explore.html?group=" + i.title);
      div8.className = "mt-12 flex flex-wrap gap-x-8 gap-y-6";
      div6.className = "aspect-[7/4]";
      div6Img.setAttribute("src", i.sidePicture);
      div6Img.className = "shrink-0 w-full h-full rounded-md object-contain";
      div7.className = "mt-12 flex flex-wrap gap-6 max-lg:justify-center";
      for (var service of i.logos) {
        var image = document.createElement("img");
        image.setAttribute("style", "object-fit: contain");
        image.src = getServiceUrl(service);
        image.className = "w-32 shrink-0";
        image.setAttribute("alt", service);
        div8.appendChild(image);
      }
      div1.appendChild(div2);
      div2.appendChild(div3);
      div2.appendChild(div4);
      div3.appendChild(h2);
      div4.appendChild(div5);
      div4.appendChild(div6);

      div5.appendChild(p);
      div5.appendChild(div7);
      div5.appendChild(div8);
      div7.appendChild(btn);
      div6.appendChild(div6Img);

      document.body.insertBefore(div1, document.querySelector("footer"));
    } else {
      var div1 = document.createElement("div");
      var div2 = document.createElement("div");
      var div3 = document.createElement("div");
      var div4 = document.createElement("div");
      var div5 = document.createElement("div");
      var div6 = document.createElement("div");
      var div7 = document.createElement("div");
      var div4Img = document.createElement("img");
      var h1 = document.createElement("h1");
      var p = document.createElement("p");
      var btn = document.createElement("button");

      div1.className =
        "px-6 sm:px-10 py-6 bg-gradient-to-r from-pink-50 via-pink-50 to-blue-100";
      div2.className = "max-w-screen-xl mx-auto";
      div3.className =
        "grid lg:grid-cols-2 justify-center items-center gap-x-12 gap-y-16";
      div4.className = "aspect-[77/82]";
      div5.className = "max-w-3xl max-lg:mx-auto max-lg:text-center";
      div4Img.className = "w-full h-full object-contain";
      div4Img.setAttribute("src", i.sidePicture);
      h1.className =
        "text-slate-900 md:text-5xl text-4xl font-bold !leading-tight";
      h1.innerHTML = i.title;
      p.className = "text-slate-600 text-base leading-relaxed mt-6";
      p.innerHTML = i.description;
      div6.className = "mt-12 flex flex-wrap gap-6 max-lg:justify-center";
      btn.className =
        "bg-indigo-600 hover:bg-indigo-700 border border-indigo-700 transition-all text-base text-white font-medium rounded-full px-6 py-3 cursor-pointer outline-0";
      btn.textContent = "Explore";
      assertFunctionToExploreButton(btn, "/explore.html?group=" + i.title);
      div7.className = "mt-12 flex flex-wrap gap-x-8 gap-y-6";
      for (var service of i.logos) {
        var image = document.createElement("img");
        image.setAttribute("style", "object-fit: contain");
        image.src = getServiceUrl(service);
        image.className = "w-32 shrink-0";
        image.setAttribute("alt", service);
        div7.appendChild(image);
      }

      div1.appendChild(div2);
      div2.appendChild(div3);
      div3.appendChild(div4);
      div3.appendChild(div5);
      div4.appendChild(div4Img);

      div5.appendChild(h1);
      div5.appendChild(p);
      div5.appendChild(div6);
      div5.appendChild(div7);
      div6.appendChild(btn);

      document.body.insertBefore(div1, document.querySelector("footer"));
    }

    c++;
  }
}

function assertFunctionToExploreButton(btn, url) {
  btn.addEventListener("click", function () {
    location.href = url;
  });
}

function getServiceUrl(name) {
  const service = services.find((s) => s.name === name);
  return service ? service.url : null; // returns null if not found
}
