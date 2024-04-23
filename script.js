document.querySelector('.animated-button').addEventListener('click', function() {
  this.classList.add('animated');
  setTimeout(() => {
    this.classList.remove('animated');
  }, 1000);
});
