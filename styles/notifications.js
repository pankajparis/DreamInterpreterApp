// Simulate notifications
document.addEventListener('DOMContentLoaded', function() {
  if (document.getElementById('notifications')) {
    setInterval(() => {
      if (Math.random() > 0.5) { // 50% chance of notification
        showNotification('New dream insight available!');
      }
    }, 10000); // Every 10 seconds
  }
});

function showNotification(text) {
  const notification = document.createElement('div');
  notification.className = 'notification-badge';
  notification.textContent = '1';
  document.body.appendChild(notification);
}
