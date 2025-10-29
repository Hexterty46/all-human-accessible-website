const fixedButton = document.getElementById('fixedButton');
const chatBox = document.getElementById('chatBox');
const closeChatButton = document.getElementById('closeChat');


const filterButton = document.getElementById('filterenButton')
const filterenSection = document.getElementById('filterSection')

fixedButton.addEventListener('click', openChat )
closeChatButton.addEventListener('click', closeChat )

filterButton.addEventListener('click', toggleFilter )
// filterenSection.addEventListener('click', closeFilter )



document.addEventListener('keydown', handleKeyPress);



function handleKeyPress(event) {
  if (event.code == 'Escape') {
    closeChat();
    closeFilter();
  }
}

function openChat() {
    chatBox.classList.add("is-open");
    fixedButton.classList.add("is-open");
}


function closeChat() {
    chatBox.classList.remove("is-open");
    fixedButton.classList.remove("is-open");
}



function toggleFilter() {
    filterenSection.classList.toggle("is-open")
    // filterButton.classList.toggle("is-open")
}

// function closeFilter() {
//     filterenSection.classList.remove("is-open")
//     filterButton.classList.remove("is-open")
// }