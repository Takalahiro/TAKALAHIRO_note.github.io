// script.js — 加载 Markdown 并自动生成目录

window.addEventListener("DOMContentLoaded", loadMarkdownNote);

async function loadMarkdownNote() {
  const container = document.getElementById("notesContainer");
  const tocContainer = document.getElementById("tocContainer"); // 用于生成目录的区域

  try {
    // 读取笔记内容
    const response = await fetch("notes.md");
    if (!response.ok) throw new Error(`加载失败: ${response.status}`);
    const mdText = await response.text();

    // 将 Markdown 转换为 HTML (使用 marked.js)
    const htmlContent = marked.parse(mdText, {
      highlight: (code, lang) =>
        hljs.getLanguage(lang)
          ? hljs.highlight(code, { language: lang }).value
          : hljs.highlightAuto(code).value
    });

    container.innerHTML = htmlContent;
    hljs.highlightAll();

    // 📖 自动生成目录
    generateTOC(container, tocContainer);

  } catch (err) {
    container.innerHTML = `
      <p style="color:red;">❌ 加载失败: ${err.message}</p>
      <p>请确认 notes.md 文件是否存在。</p>`;
    console.error(err);
  }
}

// 自动生成目录函数
function generateTOC(contentArea, tocArea) {
  const headings = contentArea.querySelectorAll("h1, h2, h3, h4, h5");
  if (headings.length === 0) {
    tocArea.innerHTML = "<p>该笔记没有检测到标题。</p>";
    return;
  }

  const tocList = document.createElement("ul");
  tocList.classList.add("toc-list");

  headings.forEach((heading, index) => {
    const anchorId = `heading-${index}`;
    heading.id = anchorId;

    const li = document.createElement("li");
    li.classList.add(`toc-${heading.tagName.toLowerCase()}`);

    const a = document.createElement("a");
    a.href = `#${anchorId}`;
    a.textContent = heading.textContent;

    li.appendChild(a);
    tocList.appendChild(li);
  });

  tocArea.innerHTML = "<h2>📜 目录</h2>";
  tocArea.appendChild(tocList);
}
