import hljs from 'highlight.js';
import 'highlight.js/styles/atom-one-dark.min.css';
// import 'highlight.js/styles/default.min.css';

hljs.highlightAll();

document.querySelectorAll("pre code").forEach((e) => {
  e.classList.add("position-relative");

  const copyButton = document.createElement("button");
  copyButton.classList.add("-copy-btn", "btn", "position-absolute", "top-0", "end-0", "opacity-0");

  const copyIcon = document.createElement("i");
  copyIcon.classList.add("bi", "bi-copy");

  copyButton.appendChild(copyIcon);
  e.appendChild(copyButton);

  e.addEventListener("mouseover", () => {
    copyButton.classList.remove("opacity-0");
  })

  e.addEventListener("mouseout", () => {
    copyButton.classList.add("opacity-0");
  })

  copyButton.addEventListener("click", async () => {
    const code = e.textContent;

    await navigator.clipboard.writeText(code);
  });
});
