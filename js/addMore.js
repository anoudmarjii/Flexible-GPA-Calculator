const courses = document.querySelectorAll('.course');
const addMoreBtn = document.getElementById('addMore');

let visibleCount = 3; // number of visible courses on mobile

function showCourses(count) {
  courses.forEach((course, index) => {
    course.style.display = index < count ? 'flex' : 'none';
  });

  if (count >= courses.length) {
    addMoreBtn.style.display = 'none';
  }
}

// mobile behavior only
function handleResize() {
  if (window.innerWidth <= 480) {
    showCourses(visibleCount);
    addMoreBtn.style.display = visibleCount >= courses.length ? 'none' : 'block';
  } else {
    // show all on tablet and desktop
    courses.forEach(course => (course.style.display = 'flex'));
    addMoreBtn.style.display = 'none';
  }
}

addMoreBtn.addEventListener('click', () => {
  visibleCount += 1;
  showCourses(visibleCount);
});

window.addEventListener('resize', handleResize);
handleResize(); // run when page loads
