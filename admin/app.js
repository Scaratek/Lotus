const socket = io();
const jsInput = document.getElementById('jsInput');
const htmlInput = document.getElementById('htmlInput');
const cssInput = document.getElementById('cssInput');

// Execute JavaScript
const executeJSButton = document.getElementById('executeJSButton');
executeJSButton.addEventListener('click', () => {
    const code = jsInput.value.trim();
    if (code !== '') {
        socket.emit('executeCode', code);
        showNotification('JavaScript executed successfully!');
    } else {
        showNotification('Please enter JavaScript code.');
    }
});

// Inject HTML
const injectHTMLButton = document.getElementById('injectHTMLButton');
injectHTMLButton.addEventListener('click', () => {
    const html = htmlInput.value.trim();
    if (html !== '') {
        socket.emit('executeCode', `document.body.insertAdjacentHTML('beforeend', '${html}');`);
        showNotification('HTML injected successfully!');
    } else {
        showNotification('Please enter HTML Elements.');
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