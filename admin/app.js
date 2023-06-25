/*
Currently Because of How Auth is Being Setup Right Now This File Doesnt do Anything 
Here for Better View
*/

const socket = io();

const executeButton = document.getElementById('executeButton');
const codeInput = document.getElementById('codeInput');
const notificationContainer = document.getElementById('notificationContainer');

// Display Correct Notification
executeButton.addEventListener('click', () => {
    const code = codeInput.value.trim();
    if (code !== '') {
        socket.emit('executeCode', code);
        showNotification('Code executed successfully!');
    } else {
        showNotification('Please enter JavaScript code.');
    }
});

// Notification System
function showNotification(message) {
    const notification = document.createElement('div');
    notification.className = 'notification';
    notification.innerHTML = `
    <span class="close">&times;</span>
    <p>${message}</p>
  `;
    notificationContainer.appendChild(notification);

    const closeButton = notification.querySelector('.close');
    closeButton.addEventListener('click', () => {
        notification.classList.add('closing');
        setTimeout(() => {
            notification.remove();
        }, 500);
    });
}