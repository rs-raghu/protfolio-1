/*
  QUICK EDIT GUIDE
  1. Change background: replace assets/background.jpg OR edit portfolioConfig.backgroundImage.
  2. Add projects: add objects inside portfolioConfig.projects. Add as many as you want.
  3. Move projects: drag icons on the desktop. Saved positions stay in this browser.
  4. Change icons: use emoji: "🧠" OR image: "assets/icons/my-icon.png".
  5. Change bottom links/icons: edit portfolioConfig.links and portfolioConfig.dockIcons.
  6. Add GitHub for a project: use github: "https://github.com/yourname/repo-name".
*/

const portfolioConfig = {
  backgroundImage: "assets/background.jpg",

  links: {
    email: "mailto:raghuneshram@gmail.com?subject=Portfolio%20Contact",
    github: "https://github.com/rsraghu2528",
    leetcode: "https://leetcode.com/", // replace with your LeetCode profile URL
    resume: "assets/resume/RS_Raghu_Resume.pdf",
  },

  // Change bottom dock icons here. Use emoji OR image path.
  dockIcons: {
    about: { icon: "assets/icons/about.jpeg" },
    notes: { icon: "assets/icons/notes.jpeg" },
    message: { icon: "assets/icons/message.jpeg" },
    github: { icon: "assets/icons/github.jpeg" },
    leetcode: { icon: "assets/icons/leetcode.jpeg" },
    resume: { icon: "assets/icons/resume.jpeg" },

    // Emoji examples:
    // about: { emoji: "👤" },
    // notes: { emoji: "📝" },
    // message: { emoji: "✉️" },
    // github: { emoji: "GH" },
    // leetcode: { emoji: "LC" },
    // resume: { emoji: "📄" },
  },

projectLayout: {
  draggable: false,
  savePositions: false,
  showDragHint: false,
},

projects: [
  {
    title: "EchoForge",
    subtitle: "AI lyric-video automation",
    category: "AI Automation / Media Engineering",
    emoji: "🎬",
    position: { x: 12, y: 10 },
    description:
      "A Telegram-controlled automation pipeline that discovers trending songs, downloads audio, fetches lyrics, aligns lyrics to vocals, renders lyric videos, sends previews for review, and publishes approved videos to YouTube.",
    tags: ["Python", "Telegram Bot API", "Remotion", "React", "Node.js", "Whisper", "Demucs", "ffmpeg"],
    github: "https://github.com/rs-raghu/EchoForge",
    links: [],
  },

  {
    title: "RFID Lecture Recorder",
    subtitle: "IoT AI transcription system",
    category: "IoT / AI Automation / Embedded Systems",
    emoji: "🎙️",
    position: { x: 35, y: 16 },
    description:
      "An ESP32 RFID-controlled recording system where authorized RFID cards start and stop lecture recording through a Flask server. Recordings are saved, transcribed with Whisper, and summarized with Gemini.",
    tags: ["ESP32", "Arduino C++", "RFID", "Flask", "Python", "Whisper", "Gemini"],
    github: "https://github.com/rs-raghu/Lectro-AI",
    links: [],
  },

  {
    title: "Neural Debris Removal",
    subtitle: "Computer vision baseline",
    category: "Computer Vision / Kaggle / Model Unlearning",
    emoji: "🛰️",
    position: { x: 58, y: 16 },
    description:
      "A Detectron2 and RetinaNet notebook baseline for a model-unlearning challenge, including poisoned model loading, empty-label fine-tuning, 16-bit image handling, inference, and submission generation.",
    tags: ["Python", "Detectron2", "RetinaNet", "OpenCV", "NumPy", "Object Detection"],
    github: "https://github.com/rsraghu2528/neural-debris-removal",
    links: [],
  },

  {
    title: "Autonomous Tractor",
    subtitle: "RL-based navigation simulator",
    category: "Robotics / AI & ML / Reinforcement Learning",
    emoji: "🚜",
    position: { x: 81, y: 16 },
    description:
      "A 2D autonomous agricultural tractor simulation with Ackermann steering, Pure Pursuit expert control, imitation learning, SAC reinforcement learning, obstacle detection, custom path drawing, and live Pygame visualization.",
    tags: ["Python", "Pygame", "PyTorch", "Gymnasium", "Stable-Baselines3", "SAC"],
    github: "https://github.com/rs-raghu/Autonomus-Navigation",
    links: [],
  },

  {
    title: "Coconut Layout Optimizer",
    subtitle: "Plantation planning tool",
    category: "Web Tools / Agricultural Planning",
    emoji: "🥥",
    position: { x: 12, y: 43 },
    description:
      "A browser-based canvas tool for planning coconut plantation layouts with map upload, scale calibration, boundary drawing, obstacle marking, layout generation, spacing controls, rotation, and pattern selection.",
    tags: ["HTML", "CSS", "JavaScript", "Canvas API", "Agriculture"],
    github: "https://github.com/rs-raghu/coconut-fam",
    links: [],
  },

  {
    title: "Fitness Planner",
    subtitle: "Full-stack fitness platform",
    category: "Full-Stack Development / Web Applications",
    emoji: "🏋️",
    position: { x: 35, y: 43 },
    description:
      "A full-stack fitness planner with authentication, workout logs, meal logs, goals, exercise pools, food pools, and PostgreSQL-backed user tracking.",
    tags: ["React", "Node.js", "Express", "PostgreSQL", "Sequelize", "JWT", "bcrypt"],
    github: "https://github.com/rs-raghu/ramp",
    links: [],
  },

  {
    title: "Disk Scheduling Simulator",
    subtitle: "OS algorithm visualizer",
    category: "Systems Coursework / Educational Tools",
    emoji: "💽",
    position: { x: 58, y: 43 },
    description:
      "An interactive browser simulator for disk scheduling algorithms with animated disk trace visualization, step controls, seek-time statistics, graphs, and PDF export.",
    tags: ["HTML", "CSS", "JavaScript", "Canvas API", "FCFS", "SSTF", "SCAN"],
    github: "https://github.com/rs-raghu/OS-Disk-Scheduling-Simulator",
    links: [],
  },

  {
    title: "Aether-AI",
    subtitle: "AI Figma design generator",
    category: "AI Tooling / Design Engineering",
    emoji: "🎨",
    position: { x: 81, y: 43 },
    description:
      "A Gemini-powered Figma plugin prototype that converts natural-language project descriptions into design-system tokens such as colors, typography, and spacing, then creates reusable Figma styles.",
    tags: ["TypeScript", "JavaScript", "Figma Plugin API", "Gemini API", "Node.js"],
    github: "https://github.com/rs-raghu/Aether-AI",
    links: [],
  },

  {
    title: "GitHub Profile README",
    subtitle: "Developer identity page",
    category: "Profile / Portfolio Support",
    emoji: "👨‍💻",
    position: { x: 12, y: 70 },
    description:
      "A GitHub profile repository for presenting developer identity, public links, technical interests, and project highlights.",
    tags: ["Markdown", "GitHub", "Profile README", "Developer Branding"],
    github: "https://github.com/rs-raghu/rs-raghu",
    links: [],
  },

  {
    title: "BirdCLEF 2026",
    subtitle: "Bioacoustic ML pipeline",
    category: "Deep Learning / Audio ML / Kaggle",
    emoji: "🐦",
    position: { x: 35, y: 70 },
    description:
      "A Kaggle-oriented bird sound classification pipeline for multi-label bioacoustic prediction over soundscape windows, using SED attention pooling, multi-backbone modeling, TTA, calibration, and ensembling.",
    tags: ["Python", "PyTorch", "Audio ML", "EfficientNetV2", "ConvNeXt", "TTA"],
    github: "https://github.com/rsraghu2528/birdclef-2026",
    links: [],
  },

  {
    title: "Daily Grind Tracker",
    subtitle: "Personal OS dashboard",
    category: "Frontend Engineering / Productivity Tools",
    emoji: "📊",
    position: { x: 58, y: 70 },
    description:
      "A React and TypeScript personal productivity dashboard for tracking daily execution, study topics, project tasks, fitness routines, hydration, sleep, meditation, streaks, and focused work through a Pomodoro timer.",
    tags: ["React", "TypeScript", "Vite", "Tailwind", "LocalStorage", "Recharts"],
    github: "https://github.com/rs-raghu/daily-grind-tracker",
    links: [],
  },

  {
    title: "RaghuOS Portfolio",
    subtitle: "Interactive glass portfolio",
    category: "Portfolio / Frontend Development",
    emoji: "🖥️",
    position: { x: 81, y: 70 },
    description:
      "A desktop-inspired glassmorphism portfolio with draggable project icons, bottom dock shortcuts, project detail panels, background customization, GitHub links, and saved icon positions through localStorage.",
    tags: ["HTML", "CSS", "JavaScript", "Glassmorphism", "LocalStorage"],
    github: "https://github.com/rs-raghu/protfolio-1",
    links: [],
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

  if (item.icon) {
    return `<span class="dock-icon"><img src="${item.icon}" alt="" /></span>`;
  }

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

    button.innerHTML = `
      ${iconMarkup(project)}
      <strong>${project.title}</strong>
      ${
        portfolioConfig.projectLayout?.showDragHint
          ? '<span class="drag-hint">drag to move</span>'
          : ""
      }
    `;

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

    const distance = Math.hypot(
      event.clientX - drag.startX,
      event.clientY - drag.startY
    );

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

function createActionButton(label, url) {
  const anchor = document.createElement("a");
  anchor.href = url;
  anchor.textContent = label;

  if (url && !url.startsWith("#")) {
    anchor.target = "_blank";
    anchor.rel = "noreferrer";
  }

  return anchor;
}

function openProject(project) {
  closePanels();

  projectTitle.textContent = project.title;
  projectCategory.textContent = project.category || "Project";
  projectDescription.textContent = project.description || "";

  // Subtitle + GitHub link beside it
  projectSubtitle.innerHTML = "";

  const subtitleText = document.createElement("span");
  subtitleText.textContent = project.subtitle || "";
  projectSubtitle.appendChild(subtitleText);

  if (project.github) {
    const githubLink = document.createElement("a");
    githubLink.href = project.github;
    githubLink.textContent = "GitHub";
    githubLink.target = "_blank";
    githubLink.rel = "noreferrer";
    githubLink.className = "project-subtitle-link";
    projectSubtitle.appendChild(githubLink);
  }

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

  // GitHub is no longer shown below.
  // Only custom links like Demo, Case Study, Notes, etc. appear here.
  (project.links || []).forEach((link) => {
    if (!link.label || !link.url) return;

    // Prevent duplicate GitHub button below
    if (link.label.toLowerCase() === "github") return;

    projectActions.appendChild(createActionButton(link.label, link.url));
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
    background.style.backgroundImage = `
      linear-gradient(90deg, rgba(0,0,0,.34), rgba(0,0,0,.08) 48%, rgba(0,0,0,.36)),
      url('${portfolioConfig.backgroundImage}'),
      radial-gradient(circle at 50% 28%, #777, #252525 68%)
    `;
  }

  document.querySelector("[data-message-link]").href = portfolioConfig.links.email;
  document.querySelector("[data-github-link]").href = portfolioConfig.links.github;
  document.querySelector("[data-leetcode-link]").href = portfolioConfig.links.leetcode;
  document.querySelector("[data-resume-link]").href = portfolioConfig.links.resume;

  document.querySelectorAll("[data-dock-item]").forEach((item) => {
    const key = item.dataset.dockItem;
    const label = item.textContent.trim();

    item.innerHTML = `
      ${dockIconMarkup(key)}
      <span>${label}</span>
    `;
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