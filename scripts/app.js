// Simulate user login
function login(provider) {
  localStorage.setItem('user', 'demo@example.com');
  window.location.href = 'describe-dream.html';
}

// Mock AI interpretation
function interpretDream() {
  const dream = document.getElementById('dreamText').value;
  const emotion = document.getElementById('emotion').value;
  
  // Simulate AI output
  const keywords = ["Snake", "Water", "Running"];
  const insights = `The ${keywords[0]} symbolizes hidden fears. ${emotion} suggests...`;
  
  // Redirect to results
  window.location.href = 'interpretation.html';
}

// Upgrade to premium
function upgradePremium() {
  alert('Redirecting to payment...');
}

// Share to social media
function shareDream() {
  alert('Sharing your dream...');
}
