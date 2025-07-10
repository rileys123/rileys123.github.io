---
layout: home_layout
title: Projects
permalink: /projects/
nav_order: 1
hide_desk: true
---
# Welcome to Riley's Desktop!
<p>Click the icons to see all the apps and games I've programmed!</p>

<div class="desktop-container">
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
    <div class="time" id="current-time"></div>
  </div>
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
let activeWindow = null;
let isDragging = false;
let offsetX, offsetY;
let originalWidth, originalHeight;

function openWindow(windowId) {
  const window = document.getElementById(windowId);
  window.style.display = 'block';
  
  // Store original dimensions
  originalWidth = window.offsetWidth;
  originalHeight = window.offsetHeight;
  
  // Center the window
  window.classList.add('window-centered');
  
  // Bring to front
  document.querySelectorAll('.project-window').forEach(w => {
    w.style.zIndex = '100';
  });
  window.style.zIndex = '101';
  activeWindow = window;
}

function closeWindow(windowId) {
  document.getElementById(windowId).style.display = 'none';
  activeWindow = null;
}

function minimizeWindow(windowId) {
  const window = document.getElementById(windowId);
  const content = window.querySelector('.window-content');
  content.style.display = content.style.display === 'none' ? 'block' : 'none';
}

// Make windows draggable
document.querySelectorAll('.window-header').forEach(header => {
  header.addEventListener('mousedown', function(e) {
    const window = this.parentElement;
    activeWindow = window;
    isDragging = true;
    
    // Store current position and remove centering
    const rect = window.getBoundingClientRect();
    window.classList.remove('window-centered');
    window.style.left = `${rect.left}px`;
    window.style.top = `${rect.top}px`;
    window.style.width = `${originalWidth}px`; // Maintain original width
    window.style.height = 'auto'; // Allow height to adjust to content
    
    offsetX = e.clientX - rect.left;
    offsetY = e.clientY - rect.top;
    
    e.preventDefault();
  });
});

// Handle mouse movement for dragging
document.addEventListener('mousemove', function(e) {
  if (!isDragging || !activeWindow) return;
  
  activeWindow.style.left = `${e.clientX - offsetX}px`;
  activeWindow.style.top = `${e.clientY - offsetY}px`;
});

// Stop dragging when mouse is released
document.addEventListener('mouseup', function() {
  isDragging = false;
});

// Update time in taskbar
function updateTime() {
  const now = new Date();
  document.getElementById('current-time').textContent = now.toLocaleTimeString();
}
setInterval(updateTime, 1000);
updateTime();
</script>
