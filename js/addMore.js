const boxes = document.querySelectorAll('.course');
const btn = document.getElementById('addMore');

let visibleCount = 3; // how many boxes to show initially
showBoxes(visibleCount);

btn.addEventListener('click', () => {
  visibleCount += 1; // show one more per click
  showBoxes(visibleCount);
});

function showBoxes(count) {
  boxes.forEach((box, index) => {
    box.style.display = index < count ? 'flex' : 'none';
  });

  // hide button when all boxes are visible
  if (count >= boxes.length) {
    btn.style.display = 'none';
  }
}
