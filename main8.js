const overlay = document.getElementById('overlay');
const openBtn = document.getElementById('openModal');
const closeBtn = document.getElementById('closeModal');
const saveBtn = document.getElementById('saveTask');
const listEl = document.getElementById('taskList');
const titleInput = document.getElementById('titleInput');
const descInput = document.getElementById('descInput');
const statusInput = document.getElementById('statusInput');

const load = () => JSON.parse(localStorage.getItem('tasks') || '[]');
const save = data => localStorage.setItem('tasks', JSON.stringify(data));

let tasks = load();
if (!tasks.length) {
    tasks = [
    ];
    save(tasks);
}

function render() {
    listEl.innerHTML = '';
    tasks.forEach((task, idx) => {
        const card = document.createElement('article');
        card.className = 'task';
        card.innerHTML = `
      <span class="badge ${task.status}">${label(task.status)}</span>
      <h3>${escapeHtml(task.title)}</h3>
      <p>${escapeHtml(task.desc)}</p>
      <button class="btn danger" data-index="${idx}">Delete</button>
    `;
        listEl.appendChild(card);
    });
}

function label(status) {
    if (status === 'progress') return 'in progress';
    if (status === 'complete') return 'completed';
    return 'pending';
}

function escapeHtml(str) {
    return str.replace(/[&<>"']/g, m => ({
        '&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'
    }[m]));
}

function openModal() {
    overlay.classList.add('show');
    titleInput.focus();
}
function closeModal() {
    overlay.classList.remove('show');
    titleInput.value = '';
    descInput.value = '';
    statusInput.value = 'pending';
}

openBtn.onclick = openModal;
closeBtn.onclick = closeModal;
overlay.addEventListener('click', e => {
    if (e.target === overlay) closeModal();
});

saveBtn.onclick = () => {
    const title = titleInput.value.trim();
    const desc  = descInput.value.trim();
    if (!title) { titleInput.focus(); return; }
    tasks.push({ title, desc, status: statusInput.value });
    save(tasks);
    render();
    closeModal();
};

listEl.addEventListener('click', e => {
    if (e.target.matches('button[data-index]')) {
        const idx = Number(e.target.dataset.index);
        tasks.splice(idx, 1);
        save(tasks);
        render();
    }
});

render();