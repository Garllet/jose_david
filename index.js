document.addEventListener("DOMContentLoaded", function() {
    const divsFecha = document.querySelectorAll(".fecha");

    divsFecha.forEach(div => {
      div.style.cursor = "pointer"; // Cambia el cursor para indicar que es clickeable
      div.addEventListener("click", () => {
        const url = "https://calendar.app.google/1VMbiN8xvJ1PmaRx8";
        if (url) {
          window.location.href = url;
        }
      });
    });
  });

document.addEventListener("DOMContentLoaded", function() {
    const divsDirc = document.querySelectorAll(".dirc");

    divsDirc.forEach(div => {
      div.style.cursor = "pointer"; // Cambia el cursor para indicar que es clickeable
      div.addEventListener("click", () => {
        const url = "https://maps.app.goo.gl/cvUcznzWarVnWLbE9?g_st=iw";
        if (url) {
          window.location.href = url;
        }
      });
    });
  });

