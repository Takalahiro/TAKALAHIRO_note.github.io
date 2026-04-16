// 自动生成目录
function generateTOC() {
  const toc = document.getElementById('toc');
  const headings = document.querySelectorAll('.note-content h2, .note-content h3');
  toc.innerHTML = '';

  headings.forEach(h => {
    const id = h.id || h.textContent.trim().replace(/\s+/g, '-').toLowerCase();
    h.id = id;

    const li = document.createElement('li');
    const a = document.createElement('a');
    a.href = `#${id}`;
    a.textContent = h.textContent.replace('🏷️', '').trim();
    li.appendChild(a);
    toc.appendChild(li);

    // 添加书签图标
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

// 页面加载时跳转到保存的书签
function restoreBookmark() {
  const saved = JSON.parse(localStorage.getItem('bookmark')) || null;
  if (saved) {
    const target = document.getElementById(saved);
    if (target) target.scrollIntoView({ behavior: 'smooth' });
    const icon = target.querySelector('.bookmark-icon');
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

// 保存高亮内容
function saveHighlights() {
  const container = document.getElementById('note-container');
  localStorage.setItem('highlights', container.innerHTML);
}

// 恢复高亮
function restoreHighlights() {
  const container = document.getElementById('note-container');
  const saved = localStorage.getItem('highlights');
  if (saved) container.innerHTML = saved;
}

// 初始化
window.onload = () => {
  restoreHighlights();
  generateTOC();
  restoreBookmark();
  enableHighlight();
};
