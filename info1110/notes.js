window.addEventListener("load", loadMarkdownNote);

async function loadMarkdownNote() {
  const notesContainer = document.getElementById("notesContainer");
  const mdUrl = "https://takalahiro.github.io/TAKALAHIRO_note.github.io/info1110/notes.md";

  try {
    const response = await fetch(mdUrl);
    if (!response.ok) throw new Error(`无法加载：${response.status}`);
    const mdText = await response.text();

    // 使用 marked.js 转换为 HTML
    const htmlContent = marked.parse(mdText);

    notesContainer.innerHTML = `
      <div class="note">
        <h2>📘 info1110 / notes.md</h2>
        <div>${htmlContent}</div>
        <small style="color:#999;">加载自 ${mdUrl}</small>
      </div>
    `;
  } catch (err) {
    notesContainer.innerHTML = `<p style="color:red;">加载失败：${err.message}</p>`
