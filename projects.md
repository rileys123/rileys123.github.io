---
layout: home_layout
title: Projects
permalink: /projects/
nav_order: 1
hide_desk: true
---
# Welcome to Riley's Desktop!
<p>Click the icons to see all the apps and games I've programmed!</p>

<div class="desktop-theme"> 
  <div class="desktop-icons">
    <!-- Cultura App Icon -->
    <div class="desktop-icon" onclick="openWindow('cultura-window')">
      <img src="/assets/img/cultura.png" alt="Cultura App">
      <div class="desktop-icon-label">Cultura App</div>
    </div>
    
    <!-- Animal Kingdom Icon -->
    <div class="desktop-icon" onclick="openWindow('animal-window')">
      <img src="/assets/img/animal.png" alt="Animal Kingdom">
      <div class="desktop-icon-label">Animal Kingdom</div>
    </div>
    
    <!-- Cook the Fish Icon -->
    <div class="desktop-icon" onclick="openWindow('cook-window')">
      <img src="/assets/img/cook1.png" alt="Cook the Fish">
      <div class="desktop-icon-label">Cook the Fish</div>
    </div>
    
    <!-- Crab Game Icon -->
    <div class="desktop-icon" onclick="openWindow('crab-window')">
      <img src="/assets/img/crab1.png" alt="Crab Game">
      <div class="desktop-icon-label">Crab Game</div>
    </div>
    
    <!-- Map App Icon -->
    <div class="desktop-icon" onclick="openWindow('map-window')">
      <img src="/assets/img/map1.png" alt="Map App">
      <div class="desktop-icon-label">Map App</div>
    </div>
    
    <!-- Shopping App Icon -->
    <div class="desktop-icon" onclick="openWindow('shop-window')">
      <img src="/assets/img/shop1.png" alt="Shopping App">
      <div class="desktop-icon-label">Shopping App</div>
    </div>
    
    <!-- Patient App Icon -->
    <div class="desktop-icon" onclick="openWindow('patient-window')">
      <img src="/assets/img/patient1.png" alt="Patient App">
      <div class="desktop-icon-label">Patient App</div>
    </div>
    
    <!-- Dance App Icon -->
    <div class="desktop-icon" onclick="openWindow('dance-window')">
      <img src="/assets/img/dance1.png" alt="Dance App">
      <div class="desktop-icon-label">Dance App</div>
    </div>
  </div>
  
  <!-- Taskbar -->
  <div class="taskbar">
    <button class="start-button">Start</button>
    <div class="time" id="current-time"></div>
  </div>
  
  <!-- Project Windows -->
  <!-- Cultura App Window -->
  <div id="cultura-window" class="project-window">
    <div class="window-header">
      <div class="window-title">📱 Cultura App</div>
      <div class="window-controls">
        <button onclick="minimizeWindow('cultura-window')">_</button>
        <button onclick="closeWindow('cultura-window')">×</button>
      </div>
    </div>
    <div class="window-content">
      <!-- Copy your existing project card content here -->
      <div class="project-screenshot-container">
        <img src="/assets/img/cultura1.png" alt="Cultura App Screenshot" loading="lazy">
        <img src="/assets/img/cultura.png" alt="Cultura App Flashcards" loading="lazy">
      </div>
      
      <div class="project-meta">
        <span class="tech-tag android">Android</span>
        <span class="tech-tag java">Java</span>
        <span class="date">Nov 2023</span>
      </div>
      
      <p>An educational flashcard app for Roman culture with images and descriptions. Available on the Google Play Store!</p>
      
      <div class="project-links">
        <a href="https://youtu.be/jO6_zigRMcg" target="_blank">
          <i class="fas fa-play"></i> Demo
        </a>
      </div>
    </div>
  </div>
  
  <!-- Repeat for other projects -->
  <!-- Animal Kingdom Window -->
  <div id="animal-window" class="project-window">
    <div class="window-header">
      <div class="window-title">🐯 Animal Kingdom RPS</div>
      <div class="window-controls">
        <button onclick="minimizeWindow('animal-window')">_</button>
        <button onclick="closeWindow('animal-window')">×</button>
      </div>
    </div>
    <div class="window-content">
      <!-- Copy your existing project card content here -->
      <div class="project-screenshot-container">
        <img src="/assets/img/animal0.png" alt="RPS Screenshot" loading="lazy">
        <img src="/assets/img/animal.png" alt="RPS Screenshot" loading="lazy">
      </div>
      
      <div class="project-meta">
        <span class="tech-tag game">Game</span>
        <span class="tech-tag java">Java</span>
        <span class="tech-tag android">IntelliJ</span>
        <span class="date">Dec 2024</span>
      </div>
      
      <p>4-way rock-paper-scissors with animal characters and sound effects.</p>
      
      <div class="project-links">
        <a href="https://github.com/rileys123/animal_kingdom.git" target="_blank">
          <i class="fab fa-github"></i> Code
        </a>
      </div>
    </div>
  </div>
  
  <!-- Add windows for all your other projects following the same pattern -->
  
</div>

<script>
// Window management functions
function openWindow(windowId) {
  const window = document.getElementById(windowId);
  window.style.display = 'block';
  
  // Center the window
  window.style.left = '50%';
  window.style.top = '50%';
  window.style.transform = 'translate(-50%, -50%)';
  
  // Bring to front
  document.querySelectorAll('.project-window').forEach(w => {
    w.style.zIndex = '100';
  });
  window.style.zIndex = '101';
}

function closeWindow(windowId) {
  document.getElementById(windowId).style.display = 'none';
}

function minimizeWindow(windowId) {
  // Simple minimization - just hide the content
  const window = document.getElementById(windowId);
  const content = window.querySelector('.window-content');
  content.style.display = content.style.display === 'none' ? 'block' : 'none';
}

// Make windows draggable
document.querySelectorAll('.window-header').forEach(header => {
  header.addEventListener('mousedown', function(e) {
    const window = this.parentElement;
    let offsetX = e.clientX - window.getBoundingClientRect().left;
    let offsetY = e.clientY - window.getBoundingClientRect().top;
    
    function moveWindow(e) {
      window.style.left = `${e.clientX - offsetX}px`;
      window.style.top = `${e.clientY - offsetY}px`;
      window.style.transform = 'none'; // Remove centering when dragging
    }
    
    document.addEventListener('mousemove', moveWindow);
    
    document.addEventListener('mouseup', function() {
      document.removeEventListener('mousemove', moveWindow);
    }, { once: true });
  });
});

// Update time in taskbar
function updateTime() {
  const now = new Date();
  document.getElementById('current-time').textContent = now.toLocaleTimeString();
  document.getElementById('current-time').style.color = 'white';
}
setInterval(updateTime, 1000);
updateTime();
</script>
