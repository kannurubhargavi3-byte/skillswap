// Demo skills data
const demoSkills = [
    { name: 'Python Programming', student: 'Alice', desc: 'Learn Python basics and data analysis.', category: 'Programming' },
    { name: 'Guitar Lessons', student: 'Bob', desc: 'Beginner guitar chords and songs.', category: 'Music' },
    { name: 'Public Speaking', student: 'Charlie', desc: 'Tips to improve your confidence and delivery.', category: 'Public Speaking' },
    { name: 'Graphic Design', student: 'Dana', desc: 'Intro to Canva and Photoshop.', category: 'Art' }
];

function renderSkills(skills) {
    const container = document.getElementById('skills-container');
    container.innerHTML = '';
    if (skills.length === 0) {
        container.innerHTML = '<p>No skills found.</p>';
        return;
    }
    skills.forEach(skill => {
        const card = document.createElement('div');
        card.className = 'skill-card';
        card.innerHTML = `
            <div class="skill-title">${skill.name}</div>
            <div class="skill-student">By: ${skill.student}</div>
            <div class="skill-category"><strong>Category:</strong> ${skill.category}</div>
            <div class="skill-desc">${skill.desc}</div>
        `;
        container.appendChild(card);
    });
}

// Initial render
renderSkills(demoSkills);

// Search and filter logic
const searchBar = document.getElementById('search-bar');
const categoryFilter = document.getElementById('category-filter');
function filterSkills() {
    const search = searchBar.value.toLowerCase();
    const category = categoryFilter.value;
    const filtered = demoSkills.filter(skill => {
        const matchesSearch = skill.name.toLowerCase().includes(search) || skill.desc.toLowerCase().includes(search) || skill.student.toLowerCase().includes(search);
        const matchesCategory = !category || skill.category === category;
        return matchesSearch && matchesCategory;
    });
    renderSkills(filtered);
}
searchBar.addEventListener('input', filterSkills);
categoryFilter.addEventListener('change', filterSkills);

// Handle skill form submission
const skillForm = document.getElementById('skill-form');
skillForm.addEventListener('submit', function(e) {
    e.preventDefault();
    const name = document.getElementById('skill-name').value.trim();
    const student = document.getElementById('student-name').value.trim();
    const desc = document.getElementById('skill-desc').value.trim();
    const category = document.getElementById('skill-category').value;
    if (name && student && desc && category) {
        demoSkills.push({ name, student, desc, category });
        renderSkills(demoSkills);
        skillForm.reset();
        alert('Skill shared successfully!');
    }
});

// Modal logic
const modal = document.getElementById('modal');
const openModalBtn = document.getElementById('open-modal');
const closeModalBtn = document.getElementById('close-modal');
const modalSkillForm = document.getElementById('modal-skill-form');
openModalBtn.addEventListener('click', function(e) {
    e.preventDefault();
    modal.style.display = 'flex';
});
closeModalBtn.addEventListener('click', function() {
    modal.style.display = 'none';
});
window.addEventListener('click', function(e) {
    if (e.target === modal) {
        modal.style.display = 'none';
    }
});
modalSkillForm.addEventListener('submit', function(e) {
    e.preventDefault();
    const name = document.getElementById('modal-skill-name').value.trim();
    const student = document.getElementById('modal-student-name').value.trim();
    const desc = document.getElementById('modal-skill-desc').value.trim();
    const category = document.getElementById('modal-skill-category').value;
    if (name && student && desc && category) {
        demoSkills.push({ name, student, desc, category });
        renderSkills(demoSkills);
        modalSkillForm.reset();
        modal.style.display = 'none';
        alert('Skill shared successfully!');
    }
});

// Back to Top button
const backToTopBtn = document.getElementById('back-to-top');
window.addEventListener('scroll', function() {
    if (window.scrollY > 300) {
        backToTopBtn.style.display = 'block';
    } else {
        backToTopBtn.style.display = 'none';
    }
});
backToTopBtn.addEventListener('click', function() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});
