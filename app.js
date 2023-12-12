const sections = document.querySelectorAll(".section");
const sectBtns = document.querySelectorAll(".controlls");
const sectBtn = document.querySelectorAll(".control");
const allSections = document.querySelector(".main-content");

function PageTransition() {
  //Button click active class
  for (let i = 0; i < sectBtn.length; i++) {
    sectBtn[i].addEventListener("click", function () {
      let currentBtn = document.querySelectorAll(".active-btn");
      currentBtn[0].className = currentBtn[0].className.replace(
        "active-btn",
        ""
      );
      this.className += " active-btn";
    });
  }

  //sections active class
  allSections.addEventListener("click", (e) => {
    const id = e.target.dataset.id;
    if (id) {
      //remove selected from the other btns
      sectBtns.forEach((btn) => {
        btn.classList.remove("active");
      });
      e.target.classList.add("active");

      //hide other section
      sections.forEach((section) => {
        section.classList.remove("active");
      });

      const element = document.getElementById(id);
      element.classList.add("active");
    }
  });

  //Toogle theme

  const themeBtn = document.querySelector(".theme-btn");
  themeBtn.addEventListener("click", () => {
    let element = document.body;
    element.classList.toggle("light-mode");
  });
}

PageTransition();

document.addEventListener("DOMContentLoaded", function () {
  const controls = document.querySelectorAll(".controlls .control");

  controls.forEach((control) => {
    control.addEventListener("click", () => {
      const sectionId = control.getAttribute("data-id");
      const section = document.getElementById(`${sectionId}-section`);

      if (section) {
        section.scrollIntoView({ behavior: "smooth" });

        // Remove active class from all controls
        controls.forEach((c) => c.classList.remove("active-btn"));
        // Add active class to the clicked control
        control.classList.add("active-btn");
      }
    });
  });
});
