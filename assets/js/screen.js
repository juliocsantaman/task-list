document.addEventListener('DOMContentLoaded', function() {
  let height = window.screen.height;
  let main = document.querySelector('main');
  main.style.height = height + "px";
  console.log(height);
});