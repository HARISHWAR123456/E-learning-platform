// Minimal JavaScript for the home page
document.addEventListener('DOMContentLoaded', () => {
    // Sample featured courses data
    const featuredCourses = [
        {
            title: 'Web Development Fundamentals',
            instructor: 'John Smith',
            image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6',
            duration: '8 weeks',
            level: 'Beginner'
        },
        {
            title: 'Python Programming',
            instructor: 'Sarah Johnson',
            image: 'https://images.unsplash.com/photo-1526379095098-d400fd0bf935',
            duration: '10 weeks',
            level: 'Intermediate'
        },
        {
            title: 'Digital Marketing Essentials',
            instructor: 'Mike Wilson',
            image: 'https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a',
            duration: '6 weeks',
            level: 'Beginner'
        }
    ];

    const featuredCoursesContainer = document.getElementById('featuredCourses');
    if (featuredCoursesContainer) {
        featuredCoursesContainer.innerHTML = featuredCourses.map(course => `
            <div class="col-md-4 mb-4">
                <div class="card h-100">
                    <img src="${course.image}" class="card-img-top" alt="${course.title}">
                    <div class="card-body">
                        <h5 class="card-title">${course.title}</h5>
                        <p class="card-text">Instructor: ${course.instructor}</p>
                        <div class="d-flex justify-content-between text-muted">
                            <small>${course.duration}</small>
                            <small>${course.level}</small>
                        </div>
                    </div>
                </div>
            </div>
        `).join('');
    }
});