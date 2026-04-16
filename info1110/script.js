// 当页面加载时执行
window.addEventListener("load", loadMarkdownNotes);

// 全局笔记存储
let notes = [];

// 选择容器元素
const notesContainer = document.getElementById("notesContainer");

// 使用 marked.js 转换 Markdown → HTML
function renderNotes() {
  notesContainer.innerHTML = '';
  if (notes.length === 0) {
    notesContainer.innerHTML = '<p class="empty">暂无 Markdown 文件</p>';
    return;
  }

  notes.forEach((note) => {
    const div = document.createElement("div");
    div.className = "note";
    div.innerHTML = `
      <h3>${note.title}</h3>
      <div>${note.content}</div>
      <small style="color:#999;">${note.date}</small>
    `;
    notesContainer.appendChild(div);
  });
}

// 自动加载 markdowns 文件夹内的文件
async function loadMarkdownNotes() {
  // 用于存放要加载的文件名（可手动维护或从服务器/JSON配置中读取）
  const mdFiles = [
    "markdowns/note1.md",
    "markdowns/note2.md",
    "markdowns/note3.md"
  ];

  for (const file of mdFiles) {
    try {
      const response = await fetch(file);
      if (!response.ok) {
        console.warn(`⚠️ 无法加载文件: ${file}`);
        continue;
      }
      const mdText = await response.text();
      const htmlContent = marked.parse(mdText);
      const fileName = file.split("/").pop().replace(".md", "");

      notes.push({
        title: fileName,
        content: htmlContent,
        date: new Date().toLocaleString()
      });
    } catch (error) {
      console.error(`❌ 加载失败: ${file}`, error);
    }
  }

  renderNotes();
}
