// ==========================
// 1. 加载 Markdown 文件
// ==========================
async function loadNote() {
  try {
    // 注意这里的路径 — 你的网站根已经带有 TAKALAHIRO_note.github.io/
    const response = await fetch("TAKALAHIRO_note.github.io/info1110/notes.md");
    
    if (!response.ok) throw new Error("无法加载笔记文件");

    const text = await response.text();
    document.getElementById("note-content").innerHTML = marked.parse(text);
  } catch (err) {
    console.error(err);
    document.getElementById("note-content").innerHTML = "❌ 加载失败，请检查路径或文件名。";
  }
}




document.addEventListener('DOMContentLoaded', () => {
  loadNote();

  document.getElementById('toggle-theme-btn').addEventListener('click', toggleTheme);
  document.getElementById('toggle-font-btn').addEventListener('click', toggleFont);

  // 恢复主题与字体
  if (localStorage.getItem('theme') === 'dark') document.body.classList.add('dark-mode');
  const fontMode = localStorage.getItem('font');
  if (fontMode === 'serif') document.body.classList.add('serif-font');
  else if (fontMode === 'mono') document.body.classList.add('mono-font');
});


// ==========================
// 2. 目录
// ==========================
function enhancePage() {
  generateTOC();
  restoreBookmark();
  enableHighlight();
}

// 目录
// 
// 改进版 TOC：分层可收纳标题
//
function generateTOC() {
  const content = document.getElementById('note-content');
  const toc = document.getElementById('toc');
  toc.innerHTML = '';

  const headings = Array.from(content.querySelectorAll('h2, h3'));
  let currentParent = null;

  headings.forEach(h => {
    const id = h.id || h.textContent.trim().replace(/\s+/g, '-').toLowerCase();
    h.id = id;

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
  loadMarkdown('https://raw.githubusercontent.com/TAKALAHIRO_note.github.io/info1110/notes.md');
};

