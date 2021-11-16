document.getElementById('nav-grow').addEventListener('click', (e) => {
  var navWindow = document.getElementById('nav-window');
  var navGrow = document.getElementById('nav-grow');
  if (navWindow.classList.contains('closed')) {
    navWindow.classList.add('open');
    navWindow.classList.remove('closed');
    navGrow.classList.add('open');
    navGrow.classList.remove('closed');
    navGrow.textContent = '<';
  } else {
    navWindow.classList.add('closed');
    navWindow.classList.remove('open');
    navGrow.classList.add('closed');
    navGrow.classList.remove('open');
    navGrow.textContent = '>';
  }
});
