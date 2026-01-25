fetch("data/skills.json")
  .then(res => res.json())
  .then(data => {

    const grid = document.getElementById("skillsGrid");

    for (const category in data) {

        const section = document.createElement("div");
        section.className = "skills-category";

        const title = document.createElement("h3");
        title.textContent = category.replace(/_/g, " ").toUpperCase();

        const cards = document.createElement("div");
        cards.className = "skills-cards";

        data[category].forEach(skill => {
            const card = document.createElement("div");
            card.className = "skill-card";
            card.innerHTML = `
                <i class="${skill.icon}"></i>
                <span>${skill.name}</span>
            `;
            cards.appendChild(card);
        });

        section.appendChild(title);
        section.appendChild(cards);
        grid.appendChild(section);
    }

  });
