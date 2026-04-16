window.addEventListener("DOMContentLoaded", loadMarkdownNote);

async function loadMarkdownNote() {
  const container = document.getElementById("notesContainer");
  const mdFile = "notes.md";

  try {
    const response = await fetch(mdFile);
    const mdText = await response.text();

    const htmlContent = marked.parse(mdText, {
      highlight: (code, lang) => {
        if (hljs.getLanguage(lang)) {
          return hljs.highlight(code, { language: lang }).value;
        }
        return hljs.highlightAuto(code).value;
      }
    });

    container.innerHTML = htmlContent;
    hljs.highlightAll();
  } catch (err) {
    container.innerHTML = `<p style="color:red;">加载失败：${err.message}</p>`;
  }
}
