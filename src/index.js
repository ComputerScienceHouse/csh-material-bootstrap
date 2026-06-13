import hljs from 'highlight.js';
import 'highlight.js/styles/atom-one-dark.min.css';
// import 'highlight.js/styles/default.min.css';
// import 'sweetalert2/themes/bootstrap-5.css';

import Swal from 'sweetalert2';

hljs.highlightAll();

// copy code button
document.querySelectorAll("pre code").forEach((e) => {
  e = e.parentElement;
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

// Link headers
document.querySelectorAll("h2[id]").forEach((e) => {
  const linkButton = document.createElement("button");
  linkButton.classList.add("-link-btn", "btn", "opacity-0", "py-0");

  const linkIcon = document.createElement("i");
  linkIcon.classList.add("bi", "bi-link-45deg", "fs-4");

  linkButton.appendChild(linkIcon);
  e.appendChild(linkButton);

  e.addEventListener("mouseover", () => {
    linkButton.classList.remove("opacity-0");
  })

  e.addEventListener("mouseout", () => {
    linkButton.classList.add("opacity-0");
  })

  linkButton.addEventListener("click", async () => {
    const id = e.id;

    window.location.hash = id;
    
    await navigator.clipboard.writeText(window.location.href);
  });
});

// swal2 alert
window.showAlert = function() {
  Swal.fire({
    title: "It works!",
    theme: 'bootstrap-5',
    icon: "success",
    text: "Own'er? I barely know her",
    showCloseButton: true,
    showCancelButton: true,
    reverseButtons: true,
    customClass: {
      cancelButton: "btn btn-danger",
      confirmButton: "btn btn-primary"
    }
  });
}

