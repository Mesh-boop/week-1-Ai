// COURSE DATA (Can be replaced with JSON fetch)
const courses = [
    {
        id: 1,
        title: "HTML Basics",
        lessons: ["Introduction", "Tags & Elements", "Links & Images", "Forms"],
        completed: false
    },
    {
        id: 2,
        title: "CSS Fundamentals",
        lessons: ["Selectors", "Box Model", "Flexbox", "Grid"],
        completed: false
    },
    {
        id: 3,
        title: "JavaScript Essentials",
        lessons: ["Variables", "Functions", "DOM", "Events"],
        completed: false
    }
];

const courseListEl = document.getElementById("courseList");
const homePage = document.getElementById("homePage");
const courseDetailPage = document.getElementById("courseDetailPage");

const courseTitleEl = document.getElementById("courseTitle");
const lessonsListEl = document.getElementById("lessonsList");
const completeBtn = document.getElementById("completeCourseBtn");

let currentCourse = null;

// LOAD COURSES ON HOMEPAGE
function loadCourses() {
    courseListEl.innerHTML = "";

    courses.forEach(course => {
        let card = document.createElement("div");
        card.className = "course-card";
        card.innerHTML = `
            <h3>${course.title}</h3>
            <p>${course.lessons.length} lessons</p>
            <p>Status: <strong>${course.completed ? "Completed ✔" : "In Progress"}</strong></p>
        `;
        card.onclick = () => openCourse(course.id);
        courseListEl.appendChild(card);
    });
}

// OPEN COURSE DETAIL PAGE
function openCourse(id) {
    currentCourse = courses.find(c => c.id === id);

    homePage.classList.add("hidden");
    courseDetailPage.classList.remove("hidden");

    courseTitleEl.textContent = currentCourse.title;

    lessonsListEl.innerHTML = "";
    currentCourse.lessons.forEach(lesson => {
        let li = document.createElement("li");
        li.textContent = lesson;
        lessonsListEl.appendChild(li);
    });

    completeBtn.disabled = currentCourse.completed;
    completeBtn.textContent = currentCourse.completed 
        ? "Course Completed ✔" 
        : "Mark Course as Completed";
}

// MARK COURSE AS COMPLETED
completeBtn.onclick = () => {
    currentCourse.completed = true;
    openCourse(currentCourse.id); // refresh page
};

// GO BACK TO HOME
function goHome() {
    courseDetailPage.classList.add("hidden");
    homePage.classList.remove("hidden");
    loadCourses();
}

// Load initial courses
loadCourses();
