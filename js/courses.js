document.addEventListener('DOMContentLoaded', () => {     
    // Sample courses data with corrected image for 'Data Science Basics'
    const courses = [         
        {             
            title: 'Web Development Fundamentals',             
            instructor: 'John Smith',             
            image: 'images/images (3).jpg',             
            duration: '8 weeks',             
            level: 'Beginner',             
            category: 'web'         
        },         
        {             
            title: 'Mobile App Development',             
            instructor: 'Emily Chen',             
            image: 'images/download (2).jpg',             
            duration: '12 weeks',             
            level: 'Intermediate',             
            category: 'mobile'         
        },         
        {             
            title: 'Data Science Basics',             
            instructor: 'Michael Brown',             
            image: 'images/0_POjH5vv_7t8s8loG.png',             
            duration: '10 weeks',             
            level: 'Beginner',             
            category: 'data'         
        },         
        {             
            title: 'Advanced JavaScript Techniques',             
            instructor: 'Sarah Lee',             
            image: 'images/download (1).jpg',             
            duration: '6 weeks',             
            level: 'Advanced',             
            category: 'web'         
        },         
        {             
            title: 'iOS App Development with Swift',             
            instructor: 'David Kim',             
            image: 'images/images (2).jpg',             
            duration: '14 weeks',             
            level: 'Intermediate',             
            category: 'mobile'         
        },         
        {             
            title: 'Python for Data Analysis',             
            instructor: 'Laura Green',             
            image: 'images/images (1).jpg',             
            duration: '8 weeks',             
            level: 'Beginner',             
            category: 'data'         
        },         
        {             
            title: 'Machine Learning with Python',             
            instructor: 'James Williams',             
            image: 'images/download.jpg',             
            duration: '16 weeks',             
            level: 'Advanced',             
            category: 'data'         
        },         
        {             
            title: 'ReactJS for Beginners',             
            instructor: 'Chris Evans',             
            image: 'images/images.jpg',             
            duration: '10 weeks',             
            level: 'Beginner',             
            category: 'web'         
        },         
        {             
            title: 'Data Visualization with D3.js',             
            instructor: 'Anna Johnson',             
            image: 'images/download.png',             
            duration: '8 weeks',             
            level: 'Intermediate',             
            category: 'data'         
        },         
        {             
            title: 'Full Stack Development',             
            instructor: 'Mark Davis',             
            image: 'images/full-stack-web-development.jpg',             
            duration: '12 weeks',             
            level: 'Advanced',             
            category: 'web'         
        }     
    ];  

    const coursesGrid = document.getElementById('coursesGrid');     

    if (coursesGrid) {         
        // Generate HTML for all courses dynamically         
        coursesGrid.innerHTML = courses.map(course => `             
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
