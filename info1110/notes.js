window.addEventListener("DOMContentLoaded", loadMarkdownNote);

async function loadMarkdownNote() {
  const container = document.getElementById("notesContainer");

  try {
    const response = await fetch("https://takalahiro.github.io/TAKALAHIRO_note.github.io/info1110/index.html"); // 👉 自动读取你的 Markdown 文件
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
    container.innerHTML = `<p style="color:red;">加载失败: ${err.message}</p>`;
  }
}
