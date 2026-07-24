class ProjectCard extends HTMLElement {
    connectedCallback() {

        const title = this.getAttribute("title");
        const image = this.getAttribute("image");
        const github = this.getAttribute("github");
        const demo = this.getAttribute("demo");
        const description = this.getAttribute("description");

        this.innerHTML = `
            <article class="project-card">
                <img src="${image}" alt="${title}">

                <div class="project-header">
                    <h3>${title}</h3>

                    <div class="project-links">
                        <a href="${github}" target="_blank" aria-label="View source code">
                            <i data-lucide="code"></i>
                        </a>

                        <a href="${demo}" target="_blank" aria-label="View live demo">
                            <i data-lucide="external-link"></i>
                        </a>
                    </div>
                </div>

                <p>${description}</p>
            </article>
        `;
    }
}

customElements.define("project-card", ProjectCard);
