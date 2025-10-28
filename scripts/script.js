const fixedButton = document.getElementById('fixedButton');
const chatBox = document.getElementById('chatBox');
const closeChat = document.getElementById('closeChat');

fixedButton.addEventListener('click', () => {
    stickyButton.style.display = 'flex';
    chatBox.style.display = 'none';
})

closeChat.addEventListener('click', () => {
    fixedButton.style.display = 'none';
    chatBox.style.display = 'flex';
})