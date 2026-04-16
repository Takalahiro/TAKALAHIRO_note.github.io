// script.js — 加载 Markdown 并自动生成左侧目录

window.addEventListener("DOMContentLoaded", loadMarkdownNote);

async function loadMarkdownNote() {
  const contentArea = document.getElementById("notesContainer");
  const tocArea = document.getElementById("tocContainer"); // 左侧目录区域

  try {
    // 读取 Markdown 笔记文件
    const response = await fetch("notes.md");
    if (!response.ok) throw new Error(`加载失败: ${response.status}`);
    const mdText = await response.text();

    // 用 marked 转换 Markdown 为 HTML
    const htmlContent = marked.parse(mdText, {
      highlight: (code, lang) => {
    hljs.getLanguage(lang)
        ? hljs.highlight(code, { language: lang }).value
        : hljs.highlightAuto(code).value;
}

}

}

    });

    contentArea.innerHTML = htmlContent;
    hljs.highlightAll();

    // 自动生成目录 👇
    generateTOC(contentArea, tocArea);

  } catch (err) {
    contentArea.innerHTML = `
      <p style="color:red;">❌ 加载失败: ${err.message}</p>
      <p>请确认 <b>notes.md</b> 文件是否存在于当前目录。</p>`;
    console.error(err);
  }
}

/**
 * 自动生成左侧目录
 * @param {HTMLElement} contentArea - 笔记内容区域
 * @param {HTMLElement} tocArea - 目录显示区域
 
 */


function generateTOC(contentArea, tocArea) {
  if (!contentArea || !tocArea) return;

  const headings = contentArea.querySelectorAll("h1, h2, h3, h4, h5, h6");
  if (!headings.length) {
    tocArea.innerHTML = "<p>⚠️ 暂无可生成的标题。</p>";
    return;
  }

  let tocHTML = '<h2>📜 目录</h2><ul class="toc-list">';

  headings.forEach((heading, index) => {
    // 生成安全的锚点 ID：处理中文、空格、特殊符号
    const anchorId = heading.text
