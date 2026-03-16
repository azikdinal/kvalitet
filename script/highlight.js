
const myElements = document.querySelectorAll('pdfs');
for (let i = 0; i < myElements.length; i++) {
  myElements[i].addEventListener('click', function() {
    myElements[i].classList.toggle('highlight');
  });
}

myElement.addEventListener('click', function() {
    if (myElement.classList.contains('highlight')) {
      myElement.classList.remove('highlight');
    } else {
      myElement.classList.add('highlight');
    }