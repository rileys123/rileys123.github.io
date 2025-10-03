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
      <img src="/assets/img/col.png" alt="Cultura App">
      <div class="desktop-icon-label">Cultura App</div>
    </div>
    
    <!-- Animal Kingdom Icon -->
    <div class="desktop-icon" onclick="openWindow('animal-window')">
      <img src="/assets/img/tiger.png" alt="Animal Kingdom">
      <div class="desktop-icon-label">Animal Kingdom</div>
    </div>
    
    <!-- Cook the Fish Icon -->
    <div class="desktop-icon" onclick="openWindow('cook-window')">
      <img src="/assets/img/cook1.png" alt="Cook the Fish">
      <div class="desktop-icon-label">Cook the Fish</div>
    </div>

    <!-- Roman Myth or Fact -->
    <div class="desktop-icon" onclick="openWindow('roman-window')">
      <img src="/assets/img/roman.png" alt="Roman">
      <div class="desktop-icon-label">Roman Myth or Fact</div>
    </div>

    <!-- Galactic Garden -->
    <div class="desktop-icon" onclick="openWindow('star-window')">
      <img src="/assets/img/star.png" alt="Star">
      <div class="desktop-icon-label">Galactic Garden</div>
    </div>
    
    <!-- Crab Game Icon -->
    <div class="desktop-icon" onclick="openWindow('crab-window')">
      <img src="/assets/img/crabs.png" alt="Crab Game">
      <div class="desktop-icon-label">Crab Game</div>
    </div>
    
    <!-- Map App Icon -->
    <div class="desktop-icon" onclick="openWindow('map-window')">
      <img src="/assets/img/maps.png" alt="Map App">
      <div class="desktop-icon-label">Map App</div>
    </div>
    
    <!-- Shopping App Icon -->
    <div class="desktop-icon" onclick="openWindow('shop-window')">
      <img src="/assets/img/bags.png" alt="Shopping App">
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
  
  <!-- Repeat for other projects -->
  <!-- Cook the Fish -->
  <div id="cook-window" class="project-window">
    <div class="window-header">
      <div class="window-title">Cook the Fish</div>
      <div class="window-controls">
        <button onclick="minimizeWindow('cook-window')">_</button>
        <button onclick="closeWindow('cook-window')">×</button>
      </div>
    </div>
    <div class="window-content">
      <!-- Copy your existing project card content here -->
      <div class="project-screenshot-container">
        <img src="/assets/img/cook1.png" alt="cook Screenshot" loading="lazy">
        <img src="/assets/img/cook2.png" alt="cook Screenshot" loading="lazy">
        <img src="/assets/img/cook3.png" alt="cook Screenshot" loading="lazy">
      </div>
      
      <div class="project-meta">
        <span class="tech-tag game">Game</span>
        <span class="tech-tag java">Javascript</span>
        <span class="tech-tag android">Replit</span>
        <span class="date">July 2023</span>
      </div>
      
      <p>A life-or-death choose your own adventure cooking game!</p>
      
      <div class="project-links">
        <a href="https://replit.com/@rosalinalina100/CYOA-Game-Riley-S?v=1" target="_blank">
          <i class="fab fa-github"></i> Code
        </a>
      </div>
    </div>
  </div>  


  <!-- Roman App Window -->
  <div id="roman-window" class="project-window">
    <div class="window-header">
      <div class="window-title">Roman Myth or Fact Website</div>
      <div class="window-controls">
        <button onclick="minimizeWindow('roman-window')">_</button>
        <button onclick="closeWindow('roman-window')">×</button>
      </div>
    </div>
    <div class="window-content">
      <div class="project-screenshot-container">
        <img src="/assets/img/roman1.png" alt="Roman Website Screenshot" loading="lazy">
      </div>
      
      <div class="project-meta">
        <span class="tech-tag android">Website</span>
        <span class="tech-tag java">HTML</span>
        <span class="date">Aug 2025</span>
      </div>
      
      <p>A fun myth-or-fact quiz to test your knowledge of Roman culture and history</p>
      
      <div class="project-links">
        <a href="https://rileys123.github.io/Roman-Myth-or-Fact/" target="_blank">
          <i class="fas fa-play"></i> Play
        </a>
      </div>
    </div>
  </div>


  <!-- Galaxy App Window -->
  <div id="star-window" class="project-window">
    <div class="window-header">
      <div class="window-title">Galactic Garden</div>
      <div class="window-controls">
        <button onclick="minimizeWindow('star-window')">_</button>
        <button onclick="closeWindow('star-window')">×</button>
      </div>
    </div>
    <div class="window-content">
      <div class="project-screenshot-container">
        <img src="/assets/img/star1.png" alt="Galaxy Website Screenshot" loading="lazy">
        <img src="/assets/img/star2.png" alt="Galaxy Website Screenshot" loading="lazy">
        <img src="/assets/img/star3.png" alt="Galaxy Website Screenshot" loading="lazy">
      </div>
      
      <div class="project-meta">
        <span class="tech-tag android">Website</span>
        <span class="tech-tag java">HTML</span>
        <span class="date">Aug 2025</span>
      </div>
      
      <p>An interactive simulation where you can cultivate your own cosmic ecosystem. Attract particles to form stars, watch them grow into supernovas and black holes, and even name your own constellations!</p>
      
      <div class="project-links">
        <a href="https://rileys123.github.io/Galactic_Garden/" target="_blank">
          <i class="fas fa-play"></i> Play
        </a>
      </div>
    </div>
  </div>


 <!-- Crab Window -->
  <div id="crab-window" class="project-window">
    <div class="window-header">
      <div class="window-title">Crab Collection Game</div>
      <div class="window-controls">
        <button onclick="minimizeWindow('crab-window')">_</button>
        <button onclick="closeWindow('crab-window')">×</button>
      </div>
    </div>
    <div class="window-content">
      <!-- Copy your existing project card content here -->
      <div class="project-screenshot-container">
        <img src="/assets/img/crab1.png" alt="Crab" loading="lazy">
        <img src="/assets/img/crab2.png" alt="Crab" loading="lazy">
      </div>
      
      <div class="project-meta">
        <span class="tech-tag game">Game</span>
        <span class="tech-tag java">Javascript</span>
        <span class="tech-tag android">Replit</span>
        <span class="date">July 2023</span>
      </div>
      
      <p>A collection style game where you catch crabs with your arrow keys to score points.</p>
      
      <div class="project-links">
        <a href="https://replit.com/@rosalinalina100/Collection-Style-Game-Riley-S?v=1" target="_blank">
          <i class="fab fa-github"></i> Code
        </a>
      </div>
    </div>
  </div>

<!-- Map App Window -->
  <div id="map-window" class="project-window">
    <div class="window-header">
      <div class="window-title">Voice to Directions Map App</div>
      <div class="window-controls">
        <button onclick="minimizeWindow('map-window')">_</button>
        <button onclick="closeWindow('map-window')">×</button>
      </div>
    </div>
    <div class="window-content">
      <div class="project-screenshot-container">
        <img src="/assets/img/map1.png" alt="Map App Screenshot" loading="lazy">
      </div>
      
      <div class="project-meta">
        <span class="tech-tag android">MIT App Inventor</span>
        <span class="date">Feb 2024</span>
      </div>
      
      <p>A navigation app: speak your destination and receive directions.</p>
      
      <div class="project-links">
        <a href="https://gallery.appinventor.mit.edu/?galleryid=3a021838-9cfd-4f6d-a591-4f4d20414a0e" target="_blank">
          <i class="fas fa-play"></i> Play
        </a>
      </div>
    </div>
  </div>

<!-- Shop App Window -->
  <div id="shop-window" class="project-window">
    <div class="window-header">
      <div class="window-title">Shopping List App</div>
      <div class="window-controls">
        <button onclick="minimizeWindow('shop-window')">_</button>
        <button onclick="closeWindow('shop-window')">×</button>
      </div>
    </div>
    <div class="window-content">
      <div class="project-screenshot-container">
        <img src="/assets/img/shop1.png" alt="Map App Screenshot" loading="lazy">
      </div>
      
      <div class="project-meta">
        <span class="tech-tag android">MIT App Inventor</span>
        <span class="date">Dec 2024</span>
      </div>
      
      <p>Create a shopping list by entering or removing your groceries.</p>
      
      <div class="project-links">
        <a href="https://gallery.appinventor.mit.edu/?galleryid=3f84f8be-97ae-49f2-8729-a8a799db493b" target="_blank">
          <i class="fas fa-play"></i> Play
        </a>
      </div>
    </div>
  </div>






  
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
