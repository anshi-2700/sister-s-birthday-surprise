// ============ DATA ============
const reasons = [
  "You always know how to make me smile, even on my worst days",
  "Your cooking is absolutely amazing and I love eating your food",
  "You give the best advice when I'm confused about life",
  "You're the first person I want to tell good news to",
  "You've taught me so much about being a good person",
  "Your laugh is contagious and lights up any room",
  "You always stand up for me no matter what",
  "You're incredibly patient with all my silly questions",
  "You make the best cups of tea/coffee for me",
  "You remember all the little things that matter to me",
  "You're my biggest cheerleader and supporter",
  "You give the warmest and most comforting hugs",
  "You've shaped who I am today in the best ways",
  "You're always there when I need someone to talk to",
  "You make every festival and celebration special",
  "You've covered for me so many times with mom and dad",
  "You share your snacks with me even when you don't want to",
  "You're the best secret keeper I know",
  "You taught me all the cool things growing up",
  "You're not just my sister, you're my best friend",
  "You inspire me to be better every single day",
  "You have the kindest heart I've ever known",
  "Simply because you're YOU, and that's the best reason of all!"
];

// ============ FLOATING HEARTS ============
function createFloatingHearts() {
  const container = document.getElementById('floating-hearts');
  for (let i = 0; i < 12; i++) {
    const heart = document.createElement('div');
    heart.className = 'floating-heart';
    heart.innerHTML = '❤️';
    heart.style.left = Math.random() * 100 + '%';
    heart.style.top = Math.random() * 100 + '%';
    heart.style.fontSize = (20 + Math.random() * 20) + 'px';
    heart.style.animationDelay = Math.random() * 3 + 's';
    heart.style.animationDuration = (3 + Math.random() * 2) + 's';
    container.appendChild(heart);
  }
}

// ============ CONFETTI ============
function createConfetti() {
  const container = document.getElementById('confetti');
  const colors = ['#e11d48', '#f59e0b', '#ec4899', '#8b5cf6', '#10b981'];
  
  for (let i = 0; i < 50; i++) {
    const confetti = document.createElement('div');
    confetti.className = 'confetti-piece';
    confetti.style.left = Math.random() * 100 + '%';
    confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
    confetti.style.animationDelay = Math.random() * 3 + 's';
    confetti.style.borderRadius = Math.random() > 0.5 ? '50%' : '0';
    container.appendChild(confetti);
  }
}

// ============ FLIP CARDS ============
function createReasonCards() {
  const grid = document.getElementById('reasons-grid');
  
  reasons.forEach((reason, index) => {
    const card = document.createElement('div');
    card.className = 'flip-card';
    card.onclick = () => card.classList.toggle('flipped');
    
    card.innerHTML = `
      <div class="flip-card-inner">
        <div class="flip-card-front">
          <div class="reason-number">${index + 1}</div>
          <p class="reason-text">${reason}</p>
          <span class="tap-hint">👆 Tap to see photo</span>
        </div>
        <div class="flip-card-back">
          <img src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=400&h=400&fit=crop" 
               alt="Memory ${index + 1}">
        </div>
      </div>
    `;
    
    grid.appendChild(card);
  });
}

// ============ LOGIN HANDLER ============
function handleLogin(e) {
  e.preventDefault();
  const password = document.getElementById('password').value.toLowerCase();
  const inputWrapper = document.getElementById('input-wrapper');
  const errorMsg = document.getElementById('error-msg');
  
  if (password === 'didi' || password === 'sister' || password === '1234') {
    // Login successful
    document.getElementById('login-page').classList.add('hidden');
    document.getElementById('birthday-page').classList.remove('hidden');
    createConfetti();
  } else {
    // Wrong password
    errorMsg.textContent = "Oops! Try again 💕";
    inputWrapper.classList.add('shake');
    setTimeout(() => inputWrapper.classList.remove('shake'), 500);
  }
}

// ============ INITIALIZE ============
document.addEventListener('DOMContentLoaded', () => {
  createFloatingHearts();
  createReasonCards();
  
  document.getElementById('login-form').addEventListener('submit', handleLogin);
  
  // Clear error on input
  document.getElementById('password').addEventListener('input', () => {
    document.getElementById('error-msg').textContent = '';
  });
});
