let area = document.getElementById('area');
let char = document.getElementById('char');
let word = document.getElementById('word');

area.addEventListener('input', function () {
  // count characters
  let content = this.value;
  char.textContent = content.length;

  // remove empty spaces from start and end
  content = content.trim();

  let wordList = content.split(/\s/);

  // Remove spaces from between words
  let words = wordList.filter(function (element) {
    return element != "";
  });

  // count words
  word.textContent = words.length;
});

// Add cursor snapping functionality
window.addEventListener('DOMContentLoaded', (event) => {
  // Set the cursor position to the beginning of the text area
  area.selectionStart = 0;
  area.selectionEnd = 0;

  // Focus the text area so that the cursor appears
  area.focus();
});
