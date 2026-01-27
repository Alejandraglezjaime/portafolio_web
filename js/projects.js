document.addEventListener("DOMContentLoaded", () => {

  fetch("data/projects.json")
    .then(res => res.json())
    .then(data => {

      const grid = document.getElementById("projectsGrid");

      if (!grid) {
        console.error("❌ projectsGrid no existe");
        return;
      }

      data.forEach(project => {

        const card = document.createElement("div");
        card.className = "project-card";

        card.innerHTML = `
          <div class="project-img">
            <img src="${project.image}" alt="${project.title}">
          </div>

          <div class="project-content">
            <h3>${project.title}</h3>
            <p>${project.description}</p>

            <div class="project-links">

              ${
                project.github
                  ? `<a href="${project.github}" target="_blank">
                        <i class="fa-brands fa-github"></i> GitHub
                    </a>`
                  : ""
              }

              ${
                project.demo
                  ? `<a href="${project.demo}" target="_blank">
                        <i class="fa-solid fa-globe"></i> Live
                    </a>`
                  : ""
              }

            </div>
          </div>
        `;


        grid.appendChild(card);
      });
    })
    .catch(err => console.error("❌ Fetch error:", err));
});
