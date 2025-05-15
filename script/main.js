document.addEventListener("DOMContentLoaded", async () => {
  const res = await fetch("data/projects.json");
  const projects = await res.json();

  const listContainer = document.getElementById("project-list");
  projects.forEach(project => {
    const item = document.createElement("div");
    item.innerHTML = `
      <h3>${project.title}</h3>
      <p>${project.description}</p>
      <p><strong>예정:</strong> ${project.upcoming ? "✅" : "❌"}</p>
    `;
    listContainer.appendChild(item);
  });
});