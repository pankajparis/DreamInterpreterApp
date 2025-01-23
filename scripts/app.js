// Mock subscription
function subscribe() {
  localStorage.setItem('premium', 'true');
  alert('Subscription successful!');
  window.location.href = 'profile.html';
}

// Logout
function logout() {
  localStorage.removeItem('user');
  window.location.href = 'index.html';
}

// Mock dream details
function viewDetails() {
  alert("Full dream details (premium-only)");
}

// Track remaining free interpretations
if (localStorage.getItem('interpretationCount') === null) {
  localStorage.setItem('interpretationCount', 0);
}

function interpretDream() {
  let count = parseInt(localStorage.getItem('interpretationCount'));
  if (count >= 5 && !localStorage.getItem('premium')) {
    alert('Upgrade to premium for more interpretations!');
    window.location.href = 'payment.html';
    return;
  }
  count++;
  localStorage.setItem('interpretationCount', count);
  window.location.href = 'interpretation.html';
}
