// ==== 存储和操作逻辑 ====
const form = document.getElementById('noteForm');
const titleInput = document.getElementById('noteTitle');
const contentInput = document.getElementById('noteContent');
const notesContainer = document.getElementById('notesContainer');

// 从 LocalStorage 中读取已有笔记
let notes = JSON.parse(localStorage.getItem('notes')) || [];

// 渲染笔记函数
function renderNotes() {
  notesContainer.innerHTML = '';
  if (notes.length === 0) {
    notesContainer.innerHTML = '<p class="empty">暂无笔记</p>';
    return;
  }

  notes.forEach((note, index) => {
    const div = document.createElement('div');
    div.className = 'note';
    div.innerHTML = `
      <button class="delete-btn" onclick="deleteNote(${index})">删除</button>
      <h3>${note.title}</h3>
      <p>${note.content}</p>
      <small style="color:#999;">${note.date}</small>
    `;
    notesContainer.appendChild(div);
  });
}

// 添加笔记
form.addEventListener('submit', (e) => {
  e.preventDefault();
  const newNote = {
    title: titleInput.value.trim(),
    content: contentInput.value.trim(),
    date: new Date().toLocaleString()
  };
  if (!newNote.title) return alert("请输入笔记标题!");

  notes.push(newNote);
  localStorage.setItem('notes', JSON.stringify(notes));
  titleInput.value = '';
  contentInput.value = '';
  renderNotes();
});

// 删除笔记
function deleteNote(index) {
  notes.splice(index, 1);
  localStorage.setItem('notes', JSON.stringify(notes));
  renderNotes();
}

// 页面加载时渲染
renderNotes();
