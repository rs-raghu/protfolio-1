RaghuOS Glass Portfolio
=======================

Files:
- index.html
- CSS/style.css
- JS/app.js
- assets/background.jpg
- assets/icons/
- assets/resume/resume.pdf

Main edits happen in JS/app.js.

How to change background:
1. Replace assets/background.jpg with your own image, OR
2. Change portfolioConfig.backgroundImage in JS/app.js.

How to add unlimited projects:
Add a new object inside portfolioConfig.projects in JS/app.js.
Each project supports:
- title
- subtitle
- category
- emoji OR icon
- position: { x: 50, y: 40 }
- description
- tags
- links

How to move project icons:
- On desktop, drag any project icon anywhere on the screen.
- Positions are saved in the browser using localStorage.
- To reset saved positions, open DevTools console and run:
  localStorage.removeItem("raghuos-project-positions"); location.reload();

How to change project icons:
Use emoji:
  emoji: "🧠"

Or image:
  icon: "assets/icons/focus.png"

How to change bottom dock icons:
Edit portfolioConfig.dockIcons in JS/app.js.
Each dock item supports emoji or image icons.

Bottom dock items:
- About me
- Notes
- |
- Message me
- GitHub
- LeetCode
- Resume

Identity widget:
Top-left widget says:
R Raghunesh
AI developer

To edit it, change the text inside index.html in the identity-widget section.

v3 changes:
- Project drag hint now appears only on hover/focus/drag, without moving the project label position.
- Bottom dock icons now use project-app style glass square icons, scaled smaller for the dock.


v4 changes:
- Every project now has a GitHub action in the project detail panel.
- If a project does not define a GitHub button manually, JS/app.js automatically adds one using the project.github value.
- The panel close "×" button is visually centered inside the circle.
