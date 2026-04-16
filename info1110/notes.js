// ==========================
// 1. 加载 Markdown 文件
// ==========================
function loadNote() {
  const noteDiv = document.getElementById('note-content');
  noteDiv.innerHTML = '正在加载笔记内容...';

  const mdURL = 'https://takalahiro.github.io/TAKALAHIRO_note.github.io/info1110/notes.md';

  fetch(mdURL)
    .then(response => {
      if (!response.ok) throw new Error('HTTP 错误 ' + response.status);
      return response.text();
    })
    .then(mdText => {
      noteDiv.innerHTML = marked.parse(mdText);
    })
    .catch(err => {
      noteDiv.innerHTML = `<p style="color:red;">笔记加载失败：${err.message}</p>`;
      console.error('加载 Markdown 出错：', err);
    });
}


// ==========================
// 页面加载事件
// ==========================
document.addEventListener("DOMContentLoaded", () => {
  loadNote();

  // 按钮事件绑定
  const themeBtn = document.getElementById('toggle-theme-btn');
  const fontBtn = document.getElementById('toggle-font-btn');
  if (themeBtn) themeBtn.addEventListener('click', toggleTheme);
  if (fontBtn) fontBtn.addEventListener('click', toggleFont);

  // 恢复主题与字体
  if (localStorage.getItem('theme') === 'dark') document.body.classList.add('dark-mode');
  const fontMode = localStorage.getItem('font');
  if (fontMode === 'serif') document.body.classList.add('serif-font');
  else if (fontMode === 'mono') document.body.classList.add('mono-font');
});

// ==========================
// 2. 目录、书签与高亮等功能
// ==========================
function enhancePage() {
  generateTOC();
  restoreBookmark();
  enableHighlight();
}

// 生成目录
function generateTOC() {
  const content = document.getElementById('note-content');
  const toc = document.getElementById('toc');
  if (!content || !toc) return;

  toc.innerHTML = '';
  const headings = Array.from(content.querySelectorAll('h2, h3'));
  let currentParent = null;

  headings.forEach(h => {
    const id = h.id || h.textContent.trim().replace(/\\s+/g, '-').toLowerCase();
    h.id = id;

    // 增加书签图标
    const icon = document.createElement('span');
    icon.textContent = '🔖';
    icon.className = 'bookmark-icon';
    icon.onclick = () => toggleBookmark(id, icon);
    h.appendChild(icon);

    if (h.tagName === 'H2') {
      const li = document.createElement('li');
      li.classList.add('collapsible');
      li.textContent = h.textContent;
      li.onclick = () => li.classList.toggle('open');
      const sublist = document.createElement('ul');
      li.appendChild(sublist);
      toc.appendChild(li);
      currentParent = sublist;
    } else if (h.tagName === 'H3') {
      if (currentParent) {
        const subLi = document.createElement('li');
        const link = document.createElement('a');
        link.href = `#${id}`;
        link.textContent = h.textContent;
        subLi.appendChild(link);
        currentParent.appendChild(subLi);
      }
    }
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
    const icon = target?.querySelector('.bookmark-icon');
    if (icon) icon.classList.add('active');
  }
}

// 高亮功能
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

// 保存和恢复高亮
function saveHighlights() {
  const container = document.getElementById('note-content');
  if (container) localStorage.setItem('highlights', container.innerHTML);
}

function restoreHighlights() {
  const saved = localStorage.getItem('highlights');
  if (saved) {
    document.getElementById('note-content').innerHTML =
