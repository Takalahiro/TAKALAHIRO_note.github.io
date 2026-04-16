// script.js — 自动加载并渲染 Markdown 文件

window.addEventListener("DOMContentLoaded", loadMarkdownNote);

async function loadMarkdownNote() {
  const container = document.getElementById("notesContainer");

  try {
    // 加载 notes.md 文件
    const response = await fetch("notes.md");
    if (!response.ok) throw new Error(`加载失败，HTTP状态码: ${response.status}`);

    const mdText = await response.text();

    // 正确的 marked 配置
    marked.setOptions({
      highlight: (code, lang) => {
        if (hljs.getLanguage(lang)) {
          return hljs.highlight(code, { language: lang }).value;
        } else {
          return hljs.highlightAuto(code).value;
        }
      }
    });

    // 转换 Markdown → HTML
    const htmlContent = marked.parse(mdText);

    // 写入到页面
    container.innerHTML = htmlContent;

    // 启动代码高亮
    hljs.highlightAll();

    console.log("✅ Markdown 渲染完成");
  } catch (err) {
    container.innerHTML = `
      <p style="color:red;">
        ❌ 发生错误: ${err.message}<br>
        请确认文件 <code>notes.md</code> 是否存在于同目录。
      </p>
    `;
    console.error("❌ 渲染出错详情:", err);
  }
}
