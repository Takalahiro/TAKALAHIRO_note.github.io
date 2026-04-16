window.addEventListener("load", loadMarkdownNotes);

let notes = [];
const notesContainer = document.getElementById("notesContainer");

// 修改这里：替换为你的 GitHub 用户名和仓库信息
const GITHUB_USER = "你的用户名";            // 👈 改：你的 GitHub 用户名
const REPO_NAME = "notes";                   // 👈 改：仓库名
const BRANCH_NAME = "main";                  // 👈 改：分支名，如 main 或 master

// 如果你知道要显示哪些 Markdown 文件，可以列出来：
const mdFiles = [
  "note1.md",
  "note2.md"
];

// 构造原始文件URL
function getRawUrl(fileName) {
  return `https://raw.githubusercontent.com/${GITHUB_USER}/${REPO_NAME}/${BRANCH_NAME}/markdowns/${fileName}`;
}

async function loadMarkdownNotes() {
  for (const file of mdFiles) {
    try {
      const url = getRawUrl(file);
      const response = await fetch(url);
      if (!response.ok) {
        console.warn(`⚠️ 无法加载文件: ${file}`);
        continue;
      }
      const mdText = await response.text();
      const htmlContent = marked.parse(mdText);
      const title = file.replace(".md", "");

      notes.push({
        title,
        content: htmlContent,
        date: new Date().toLocaleString()
      });
    } catch (err) {
      console.error(`❌ 读取失败 ${file}`, err);
    }
  }

  renderNotes();
}

function renderNotes() {
  notesContainer.innerHTML = "";
  if (notes.length === 0) {
    notesContainer.innerHTML = "<p>暂无 Markdown 内容。</p>";
    return;
  }
  notes.forEach((n) => {
    const div = document.createElement("div");
    div.className = "note";
    div.innerHTML = `
      <h3>${n.title}</h3>
      <div>${n.content}</div>
      <small style="color:#999;">${n.date}</small>
    `;
    notesContainer.appendChild(div);
  });
}

