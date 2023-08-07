const conditionsItems = document.querySelectorAll('.conditions-item');

for (let i = 0; i < conditionsItems.length; i++) {
  const itemId = i + 1;
  const chevronIcon = document.getElementById('chevron-icon-' + itemId);

  chevronIcon.addEventListener("click", function() {
    toggleText(itemId);
  });
}

function toggleText(itemId) {
  const textElement = document.getElementById('textConditionsItem' + itemId);
  const chevronIcon = document.getElementById('chevron-icon-' + itemId);
  const computedStyle = window.getComputedStyle(textElement);

  if (computedStyle.display === 'none') {
    textElement.style.display = 'block';
    chevronIcon.style.transform = 'rotate(180deg)';
  } else {
    textElement.style.display = 'none';
    chevronIcon.style.transform = 'rotate(0deg)';
  }
}

for (let i = 1; i <= 6; i++) {
  document.getElementById("chevron-icon-" + i).addEventListener("click", function() {
    toggleText(i);
  });
}