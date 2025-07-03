---
layout: default
title: Artwork
permalink: /artwork/
---

# 🎨 My Creative Works

## 👕 Apparel Designs

<div class="art-section">
  <!-- Hoodie Design -->
  <div class="art-card" id="cyber-hoodie">
    <div class="art-preview">
      <img src="/assets/art/vex.png" alt="Cyberpunk Hoodie" loading="lazy">
      <div class="art-info">
        <h3>Cyberpunk Neon Hoodie</h3>
        <div class="art-tags">
          <span class="tag-apparel">Hoodie</span>
          <span class="tag-digital">Digital</span>
        </div>
        <button class="details-btn" onclick="toggleDetails('hoodie-details')">
          <i class="fas fa-chevron-down"></i> Details
        </button>
      </div>
    </div>

    <div id="hoodie-details" class="art-details">
      <div class="detail-grid">
        <img src="/assets/art/vex.png" alt="Front View">
        <img src="/assets/art/saxes.png" alt="Back Design">
      </div>
      <div class="detail-text">
        <h4>Design Concept</h4>
        <p>Neon cyberpunk aesthetic with glow-in-the-dark elements. Designed for streetwear brand "Neon Dreams".</p>
        <h4>Specifications</h4>
        <ul>
          <li>100% cotton heavyweight hoodie</li>
          <li>Screen printed design</li>
          <li>Unisex sizing</li>
        </ul>
      </div>
    </div>
  </div>

  <!-- T-Shirt Design -->
  <div class="art-card" id="wolf-tshirt">
    <div class="art-preview">
      <img src="/assets/art/saxes.png" alt="Wolf Graphic Tee" loading="lazy">
      <div class="art-info">
        <h3>Geometric Wolf Tee</h3>
        <div class="art-tags">
          <span class="tag-apparel">T-Shirt</span>
          <span class="tag-vector">Vector</span>
        </div>
        <button class="details-btn" onclick="toggleDetails('tshirt-details')">
          <i class="fas fa-chevron-down"></i> Details
        </button>
      </div>
    </div>

    <div id="tshirt-details" class="art-details">
      <div class="detail-grid">
        <img src="/assets/art/vex.png" alt="T-Shirt Mockup">
        <img src="/assets/art/saxes.png" alt="Flat Design">
      </div>
      <div class="detail-text">
        <h4>Design Process</h4>
        <p>Minimalist wolf design created using geometric shapes in Illustrator. Part of my wildlife series.</p>
        <h4>Production Details</h4>
        <ul>
          <li>Softstyle cotton tee</li>
          <li>DTG printing</li>
          <li>Available in 5 colors</li>
        </ul>
      </div>
    </div>
  </div>
</div>

## ✏️ Drawings & Illustrations

<div class="art-section">
  <!-- Illustration 1 -->
  <div class="art-card" id="fantasy-illustration">
    <div class="art-preview">
      <img src="/assets/art/fantasy-art.jpg" alt="Fantasy Landscape" loading="lazy">
      <div class="art-info">
        <h3>Mystic Valley</h3>
        <div class="art-tags">
          <span class="tag-traditional">Traditional</span>
          <span class="tag-concept">Concept Art</span>
        </div>
        <button class="details-btn" onclick="toggleDetails('illustration-details')">
          <i class="fas fa-chevron-down"></i> Details
        </button>
      </div>
    </div>

    <div id="illustration-details" class="art-details">
      <div class="detail-single">
        <img src="/assets/art/fantasy-detail.jpg" alt="Detail Shot">
      </div>
      <div class="detail-text">
        <h4>Techniques</h4>
        <p>Mixed media on bristol board using watercolor, ink, and colored pencils.</p>
        <h4>Inspiration</h4>
        <p>Inspired by fantasy novels and Japanese landscape paintings.</p>
      </div>
    </div>
  </div>
</div>

<script>
function toggleDetails(id) {
  const details = document.getElementById(id);
  const btn = details.previousElementSibling.querySelector('.details-btn');
  details.classList.toggle('active');
  btn.innerHTML = details.classList.contains('active') ? 
    '<i class="fas fa-chevron-up"></i> Hide Details' : 
    '<i class="fas fa-chevron-down"></i> Details';
}
</script>
