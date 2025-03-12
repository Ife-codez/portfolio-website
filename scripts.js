document.addEventListener('DOMContentLoaded', function() {
  const progressBars = document.querySelectorAll('.progress');
  progressBars.forEach((bar) => {
    let percentage = bar.getAttribute('data-percentage');
    bar.style.width = percentage + '%';
    bar.textContent = percentage + '%';
  });
});