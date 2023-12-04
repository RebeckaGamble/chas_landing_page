/**chas logo */
fetch("/assets/svg/logo.svg")
  .then((response) => response.text())
  .then((svg) => {
    const svgContainers = document.querySelectorAll(".svg-container"); // Use a class instead of an ID

    svgContainers.forEach((container) => {
      container.innerHTML = svg;
    });  });
