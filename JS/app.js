/*
  QUICK EDIT GUIDE
  1. Change background: replace assets/background.jpg OR edit portfolioConfig.backgroundImage.
  2. Add projects: add objects inside portfolioConfig.projects. Add as many as you want.
  3. Move projects: drag icons on the desktop. Saved positions stay in this browser.
  4. Change icons: use emoji: "🧠" OR image: "assets/icons/my-icon.png".
  5. Change bottom links/icons: edit portfolioConfig.links and portfolioConfig.dockIcons.
*/

const portfolioConfig = {
  backgroundImage: "assets/background.jpg",

  links: {
    email: "mailto:raghuneshram@gmail.com?subject=Portfolio%20Contact",
    github: "https://github.com/rsraghu2528",
    leetcode: "https://leetcode.com/", // replace with your profile URL
    resume: "assets/resume/RS_Raghu_Resume.pdf",
  },

  // Change bottom dock icons here. Use emoji OR image path.
  dockIcons: {
    about: { emoji: "👤" },
    notes: { emoji: "📝" },
    message: { emoji: "✉️" },
    github: { emoji: "GH" },
    leetcode: { emoji: "LC" },
    resume: { emoji: "📄" },
    // Example image icon:
    // github: { icon: "assets/icons/github.png" },
  },

  projectLayout: {
    draggable: true,
    savePositions: true,
    showDragHint: true,
  },

  projects: [
    {
      title: "Focus Management",
      subtitle: "AI productivity system",
      category: "Productivity / AI / Cross-platform",
      emoji: "🧠",
      position: { x: 22, y: 25 },
      description:
        "A cross-device focus system concept that connects browser, desktop, and mobile blockers. Users give a reason before accessing distractions, and AI can grant limited access based on that reason.",
      tags: ["React", "MERN", "Extension APIs", "AI", "Productivity"],
      links: [
        { label: "GitHub", url: "#" },
        { label: "Case Study", url: "#" },
      ],
    },
    {
      title: "Fruit CNN",
      subtitle: "Computer vision classifier",
      category: "Machine Learning",
      emoji: "🍎",
      position: { x: 68, y: 22 },
      description:
        "A CNN-based fruit classification project that identifies fruit categories from images using preprocessing, training, evaluation, and prediction workflows.",
      tags: ["Python", "TensorFlow", "Keras", "CNN", "Image Classification"],
      links: [{ label: "GitHub", url: "#" }],
    },
    {
      title: "Roadmap Maker",
      subtitle: "Visual learning planner",
      category: "Web App",
      emoji: "🗺️",
      position: { x: 43, y: 47 },
      description:
        "A visual tool for creating roadmaps, flowcharts, and structured learning plans using draggable nodes and reusable templates.",
      tags: ["React", "React Flow", "Tailwind", "Node.js"],
      links: [{ label: "GitHub", url: "#" }],
    },
    {
      title: "Dehydration Prototype",
      subtitle: "Sensor-based health idea",
      category: "Hardware Prototype",
      emoji: "💧",
      position: { x: 76, y: 56 },
      description:
        "A prototype idea that estimates dehydration using a moisture sensor placed on the hand to analyze sweat-related signals.",
      tags: ["ESP32", "Arduino", "Sensors", "Dashboard"],
      links: [{ label: "Notes", url: "#" }],
    },
    {
      title: "Photography Contest",
      subtitle: "Nature club system",
      category: "Community / Automation",
      emoji: "📷",
      position: { x: 25, y: 63 },
      description:
        "A weekly nature club photography contest workflow with themes, submissions, rules, metadata checks, shoutouts, and leaderboard ideas.",
      tags: ["React", "Firebase", "Google Drive", "Community"],
      links: [{ label: "View Idea", url: "#" }],
    },
  ],
};

const projectSpace = document.querySelector("[data-project-space]");
const background = document.querySelector("[data-background]");
const panels = Array.from(document.querySelectorAll("[data-panel]"));
const projectPanel = document.querySelector('[data-panel="project"]');

const projectTitle = document.querySelector("[data-project-title]");
const projectSubtitle = document.querySelector("[data-project-subtitle]");
const projectCategory = document.querySelector("[data-project-category]");
const projectDescription = document.querySelector("[data-project-description]");
const projectIcon = document.querySelector("[data-project-icon]");
const projectTags = document.querySelector("[data-project-tags]");
const projectActions = document.querySelector("[data-project-actions]");

function iconMarkup(item, className = "project-icon") {
  if (item.icon) {
    return `<span class="${className}"><img src="${item.icon}" alt="" /></span>`;
  }
  return `<span class="${className}" aria-hidden="true">${item.emoji || "✦"}</span>`;
}

function dockIconMarkup(key) {
  const item = portfolioConfig.dockIcons?.[key] || {};
  if (item.icon) return `<span class="dock-icon"><img src="${item.icon}" alt="" /></span>`;
  return `<span class="dock-icon" aria-hidden="true">${item.emoji || "•"}</span>`;
}

function getSavedPositions() {
  try {
    return JSON.parse(localStorage.getItem("raghuos-project-positions") || "{}");
  } catch {
    return {};
  }
}

function saveProjectPosition(title, position) {
  if (!portfolioConfig.projectLayout?.savePositions) return;
  const saved = getSavedPositions();
  saved[title] = position;
  localStorage.setItem("raghuos-project-positions", JSON.stringify(saved));
}

function getProjectPosition(project, index) {
  const saved = getSavedPositions()[project.title];
  return saved || project.position || autoPosition(index, portfolioConfig.projects.length);
}

function autoPosition(index, total) {
  const angle = index * 137.508;
  const radius = 24 + (index % 4) * 8;
  const x = 50 + Math.cos((angle * Math.PI) / 180) * radius;
  const y = 45 + Math.sin((angle * Math.PI) / 180) * radius;
  return {
    x: Math.max(12, Math.min(88, x)),
    y: Math.max(14, Math.min(76, y)),
  };
}

function renderProjects() {
  projectSpace.innerHTML = "";

  portfolioConfig.projects.forEach((project, index) => {
    const position = getProjectPosition(project, index);
    const button = document.createElement("button");
    button.className = "project-app";
    button.type = "button";
    button.dataset.projectTitle = project.title;
    button.style.setProperty("--x", `${position.x}%`);
    button.style.setProperty("--y", `${position.y}%`);
    button.innerHTML = `${iconMarkup(project)}<strong>${project.title}</strong>${
      portfolioConfig.projectLayout?.showDragHint ? '<span class="drag-hint">drag to move</span>' : ''
    }`;
    button.addEventListener("click", (event) => {
      if (button.dataset.wasDragged === "true") {
        event.preventDefault();
        button.dataset.wasDragged = "false";
        return;
      }
      openProject(project);
    });
    makeProjectDraggable(button, project);
    projectSpace.appendChild(button);
  });
}

function makeProjectDraggable(button, project) {
  if (!portfolioConfig.projectLayout?.draggable) return;

  let drag = null;

  button.addEventListener("pointerdown", (event) => {
    if (window.matchMedia("(max-width: 860px)").matches) return;

    const spaceRect = projectSpace.getBoundingClientRect();
    const currentLeft = button.offsetLeft;
    const currentTop = button.offsetTop;

    drag = {
      pointerId: event.pointerId,
      startX: event.clientX,
      startY: event.clientY,
      offsetX: event.clientX - (spaceRect.left + currentLeft),
      offsetY: event.clientY - (spaceRect.top + currentTop),
      moved: false,
    };

    button.setPointerCapture(event.pointerId);
  });

  button.addEventListener("pointermove", (event) => {
    if (!drag || drag.pointerId !== event.pointerId) return;

    const distance = Math.hypot(event.clientX - drag.startX, event.clientY - drag.startY);
    if (distance > 5) drag.moved = true;
    if (!drag.moved) return;

    const rect = projectSpace.getBoundingClientRect();
    const x = ((event.clientX - rect.left - drag.offsetX) / rect.width) * 100;
    const y = ((event.clientY - rect.top - drag.offsetY) / rect.height) * 100;
    const next = {
      x: Math.max(7, Math.min(93, x)),
      y: Math.max(7, Math.min(88, y)),
    };

    button.classList.add("is-dragging");
    button.style.setProperty("--x", `${next.x}%`);
    button.style.setProperty("--y", `${next.y}%`);
    button.dataset.currentX = String(next.x);
    button.dataset.currentY = String(next.y);
  });

  function stopDrag(event) {
    if (!drag || drag.pointerId !== event.pointerId) return;

    button.classList.remove("is-dragging");

    if (drag.moved) {
      button.dataset.wasDragged = "true";
      saveProjectPosition(project.title, {
        x: Number(button.dataset.currentX || 50),
        y: Number(button.dataset.currentY || 50),
      });
      window.setTimeout(() => {
        button.dataset.wasDragged = "false";
      }, 0);
    }

    drag = null;
  }

  button.addEventListener("pointerup", stopDrag);
  button.addEventListener("pointercancel", stopDrag);
}

function openProject(project) {
  closePanels();
  projectTitle.textContent = project.title;
  projectSubtitle.textContent = project.subtitle || "";
  projectCategory.textContent = project.category || "Project";
  projectDescription.textContent = project.description || "";
  projectIcon.innerHTML = project.icon
    ? `<img src="${project.icon}" alt="" />`
    : project.emoji || "✦";

  projectTags.innerHTML = "";
  (project.tags || []).forEach((tag) => {
    const span = document.createElement("span");
    span.textContent = tag;
    projectTags.appendChild(span);
  });

  projectActions.innerHTML = "";
  (project.links || []).forEach((link) => {
    const anchor = document.createElement("a");
    anchor.href = link.url;
    anchor.textContent = link.label;
    if (!link.url.startsWith("#")) {
      anchor.target = "_blank";
      anchor.rel = "noreferrer";
    }
    projectActions.appendChild(anchor);
  });

  projectPanel.classList.add("is-open");
}

function closePanels() {
  panels.forEach((panel) => panel.classList.remove("is-open"));
}

function openPanel(name) {
  closePanels();
  const panel = document.querySelector(`[data-panel="${name}"]`);
  if (panel) panel.classList.add("is-open");
}

function applyConfig() {
  if (portfolioConfig.backgroundImage) {
    background.style.backgroundImage = `linear-gradient(90deg, rgba(0,0,0,.34), rgba(0,0,0,.08) 48%, rgba(0,0,0,.36)), url('${portfolioConfig.backgroundImage}'), radial-gradient(circle at 50% 28%, #777, #252525 68%)`;
  }

  document.querySelector("[data-message-link]").href = portfolioConfig.links.email;
  document.querySelector("[data-github-link]").href = portfolioConfig.links.github;
  document.querySelector("[data-leetcode-link]").href = portfolioConfig.links.leetcode;
  document.querySelector("[data-resume-link]").href = portfolioConfig.links.resume;

  document.querySelectorAll("[data-dock-item]").forEach((item) => {
    const key = item.dataset.dockItem;
    const label = item.textContent.trim();
    item.innerHTML = `${dockIconMarkup(key)}<span>${label}</span>`;
  });
}

document.querySelectorAll("[data-open-panel]").forEach((button) => {
  button.addEventListener("click", () => openPanel(button.dataset.openPanel));
});

document.querySelectorAll("[data-close-panel]").forEach((button) => {
  button.addEventListener("click", closePanels);
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") closePanels();
});

applyConfig();
renderProjects();
