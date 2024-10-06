// Mock data
const facultyData = [
    { id: 1, name: 'Dr. Jane Doe', department: 'Computer Science' },
    { id: 2, name: 'Dr. John Smith', department: 'Mathematics' }
];

const publicationsData = [
    { id: 1, faculty_id: 1, title: 'AI in Education', year: 2022, type: 'Journal', doi: '10.1000/j.journal.2022.01', source: 'Journal of Educational Technology' },
    { id: 2, faculty_id: 2, title: 'Mathematical Modelling', year: 2023, type: 'Conference', doi: '10.1000/c.conference.2023.01', source: 'Proceedings of Math Conference' }
];

// Function to load faculty data
function loadFacultyData() {
    const facultyTableBody = document.querySelector('#facultyTable tbody');
    facultyData.forEach(faculty => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${faculty.id}</td>
            <td>${faculty.name}</td>
            <td>${faculty.department}</td>
        `;
        facultyTableBody.appendChild(row);
    });
}

// Function to load publications data
function loadPublicationsData() {
    const publicationsTableBody = document.querySelector('#publicationsTable tbody');
    publicationsData.forEach(publication => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${publication.id}</td>
            <td>${publication.faculty_id}</td>
            <td>${publication.title}</td>
            <td>${publication.year}</td>
            <td>${publication.type}</td>
            <td>${publication.doi}</td>
            <td>${publication.source}</td>
        `;
        publicationsTableBody.appendChild(row);
    });
}

// Call load functions when the page loads
if (document.querySelector('#facultyTable')) {
    loadFacultyData();
    loadPublicationsData();
}

// Login form submission
document.getElementById('loginForm')?.addEventListener('submit', function(event) {
    event.preventDefault();
    // Handle login logic here
    alert('Login functionality to be implemented!');
});