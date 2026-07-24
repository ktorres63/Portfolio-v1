import "./styles/variables.css";
import "./styles/reset.css";
import "./styles/header.css";
import "./styles/main.css";
import "./styles/footer.css";

import "../components/ProjectCard.js";
import { projects } from "../data/projects.ts";

import { createIcons, icons } from "lucide";

const grid = document.querySelector(".projects-grid");

projects.forEach(project => {

    const card = document.createElement("project-card");

    Object.entries(project).forEach(([key, value]) => {
        card.setAttribute(key, value);
    });

    grid!.appendChild(card);
});

createIcons({ icons });
