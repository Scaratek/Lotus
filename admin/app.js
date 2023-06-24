const socket = io();

const executeButton = document.getElementById('executeButton');
const codeInput = document.getElementById('codeInput');
const notificationContainer = document.getElementById('notificationContainer');

executeButton.addEventListener('click', () => {
    const code = codeInput.value.trim();
    if (code !== '') {
        socket.emit('executeCode', code);
        showNotification('Code executed successfully!');
    } else {
        showNotification('Please enter JavaScript code.');
    }
});

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