// ==========================
// 1. 加载 Markdown 文件并渲染
// ==========================
async function loadMarkdown(path) {
  try {
    const response = await fetch(path);
    const mdText = await response.text();
    const htmlContent = marked.parse(mdText);
    document.getElementById('note-content').innerHTML = htmlContent;
    enhancePage();
  } catch (err) {
    document.getElementById('note-content').innerHTML = "<p>❌ 加载笔记失败...</p>";
    console.error(err);
  }
}

// ==========================
// 2. 生成目录、书签、高亮功能
// ==========================
function enhancePage() {
  generateTOC();
  restoreBookmark();
  enableHighlight();
}

// 自动生成目录
function generateTOC() {
  const content = document.getElementById('note-content');
  const toc = document.getElementById('toc');
  const headings = content.querySelectorAll('h2, h3, h4');
  toc.innerHTML = '';

  headings.forEach(h => {
    const id = h.id || h.textContent.trim().replace(/\s+/g, '-').toLowerCase();
    h.id = id;
    const li = document.createElement('li');
    const a = document.createElement('a');
    a.href = `#${id}`;
    a.textContent = h.textContent.trim();
    li.appendChild(a);
    toc.appendChild(li);

    // 加书签图标
    const icon = document.createElement('span');
    icon.textContent = '🔖';
    icon.className = 'bookmark-icon';
    icon.onclick = () => toggleBookmark(id, icon);
    h.appendChild(icon);
  });
}

// 书签功能
function toggleBookmark(id, icon) {
  const saved = JSON.parse(localStorage.getItem('bookmark')) || null;
  if (saved === id) {
    localStorage.removeItem('bookmark');
    icon.classList.remove('active');
  } else {
    localStorage.setItem('bookmark', JSON.stringify(id));
    icon.classList.add('active');
  }
}

// 恢复书签
function restoreBookmark() {
  const saved = JSON.parse(localStorage.getItem('bookmark'));
  if (saved) {
    const target = document.getElementById(saved);
    if (target) target.scrollIntoView({ behavior: 'smooth' });
    const icon = target.querySelector('.bookmark-icon');
    if (icon) icon.classList.add('active');
  }
}

// 高亮选中内容
function enableHighlight() {
  document.addEventListener('mouseup', () => {
    const selection = window.getSelection();
    const text = selection.toString();
    if (text.length > 0) {
      const span = document.createElement('span');
      span.className = 'highlight';
      span.textContent = text;
      const range = selection.getRangeAt(0);
      range.deleteContents();
      range.insertNode(span);
      saveHighlights();
      selection.removeAllRanges();
    }
  });
}

// 保存高亮内容
function saveHighlights() {
  const container = document.getElementById('note-container');
  localStorage.setItem('highlights', container.innerHTML);
}

// 恢复高亮内容
function restoreHighlights() {
  const saved = localStorage.getItem('highlights');
  if (saved) {
    document.getElementById('note-container').innerHTML = saved;
    enhancePage(); // 重新生成目录
  }
}

// 页面加载时执行
window.onload = () => {
  restoreHighlights();
  loadMarkdown('notes.md'); // 👈 这里是要读取的文件
};

