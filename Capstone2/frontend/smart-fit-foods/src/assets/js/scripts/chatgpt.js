
window.onload=function(){
  document.querySelector('.icon-chatbot').addEventListener('click', function() {
    var chatbotContainer = document.querySelector('.chatbot-container');
    if (getComputedStyle(chatbotContainer).opacity === '0') {
      chatbotContainer.style.animation = 'show 0.5s ease-in-out forwards';
    } else {
      chatbotContainer.style.animation = 'hide 0.5s ease-in-out forwards';
    }
  });
// Đóng Chat bot
  document.querySelector('.close-chat').addEventListener('click', function() {
    document.querySelector('.chatbot-container').style.animation = 'hide 0.5s ease-in-out forwards';
  });
};


