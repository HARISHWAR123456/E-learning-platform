// Minimal JavaScript for the instructors page
document.addEventListener('DOMContentLoaded', () => {
    // Sample instructors data
    const instructors = [
        {
            name: 'Dr. Sarah Johnson',
            expertise: 'Web Development',
            image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330',
            courses: 12,
            students: 2500
        },
        {
            name: 'Prof. Michael Chen',
            expertise: 'Data Science',
            image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e',
            courses: 8,
            students: 1800
        },
        {
            name: 'Emily Rodriguez',
            expertise: 'Mobile Development',
            image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80',
            courses: 6,
            students: 1200
        }
    ];

    const instructorsGrid = document.getElementById('instructorsGrid');
    if (instructorsGrid) {
        instructorsGrid.innerHTML = instructors.map(instructor => `
            <div class="col-md-4 mb-4">
                <div class="card h-100">
                    <img src="${instructor.image}" class="card-img-top" alt="${instructor.name}">
                    <div class="card-body">
                        <h5 class="card-title">${instructor.name}</h5>
                        <p class="card-text">${instructor.expertise}</p>
                        <div class="d-flex justify-content-between text-muted mb-3">
                            <small>${instructor.courses} Courses</small>
                            <small>${instructor.students.toLocaleString()} Students</small>
                        </div>
                        <button class="btn btn-primary w-100">View Profile</button>
                    </div>
                </div>
            </div>
        `).join('');
    }
});