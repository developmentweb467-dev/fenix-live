<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Fenix Live — Lebanese Production & Entertainment Platform</title>
  
  <!-- Fonts & FontAwesome Icons -->
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Cinzel:wght@600;700;800;900&family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
  
  <!-- CSS Stylesheet -->
  <link rel="stylesheet" href="{{asset('fenix.css')}}"> 
</head>
<body>

  <!-- TOP BRAND STRIP -->
  <div class="top-strip">
    <div class="container top-strip-inner">
      <div class="live-tag">
        <span class="live-dot"></span> FENIX PRODUCTION LEBANON
      </div>
      <div class="top-socials">
        <a href="https://www.youtube.com/@fenixproductionlive" target="_blank" rel="noopener" aria-label="YouTube"><i class="fa-brands fa-youtube"></i></a>
        <a href="https://instagram.com/fenix_production_lb" target="_blank" rel="noopener" aria-label="Instagram"><i class="fa-brands fa-instagram"></i></a>
        <a href="https://facebook.com/fenix.production.lb" target="_blank" rel="noopener" aria-label="Facebook"><i class="fa-brands fa-facebook-f"></i></a>
      </div>
    </div>
  </div>

  <!-- HEADER / NAVIGATION -->
  <header class="header">
    <div class="container nav-container">
      <a href="#home" class="logo">
        <div class="logo-icon">
          <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M50 5 C30 25 15 50 20 80 C35 60 45 45 50 30 C55 45 65 60 80 80 C85 50 70 25 50 5 Z" fill="url(#fireGrad)"/>
            <path d="M50 35 C40 50 30 65 35 85 C45 70 50 55 50 45 C50 55 55 70 65 85 C70 65 60 50 50 35 Z" fill="#FFB703"/>
            <path d="M50 55 C45 65 40 75 42 88 C48 78 50 70 50 62 C50 70 52 78 58 88 C60 75 55 65 50 55 Z" fill="#FFFFFF"/>
            <defs>
              <linearGradient id="fireGrad" x1="50" y1="5" x2="50" y2="80" gradientUnits="userSpaceOnUse">
                <stop stop-color="#FF3B30"/>
                <stop offset="0.5" stop-color="#E63946"/>
                <stop offset="1" stop-color="#B8001F"/>
              </linearGradient>
            </defs>
          </svg>
        </div>
        <div class="logo-text">FENIX <span>LIVE</span></div>
      </a>

      <nav class="nav-menu" id="navMenu">
        <a href="#home" class="nav-link active">Home</a>
        <a href="#news" class="nav-link">News</a>
        <a href="#artists" class="nav-link">Artists</a>
        <a href="#interviews" class="nav-link">Interviews</a>
        <a href="#festivals" class="nav-link">Festivals & Events</a>
        <a href="#entertainment" class="nav-link">Entertainment</a>
        <a href="#about" class="nav-link">About Us</a>
        <a href="#contact" class="nav-link">Contact Us</a>
      </nav>

      <div class="nav-actions">
        <button class="icon-btn" id="openSearch" aria-label="Open Search"><i class="fa-solid fa-magnifying-glass"></i></button>
        <button class="hamburger" id="hamburger" aria-label="Toggle Menu"><i class="fa-solid fa-bars"></i></button>
      </div>
    </div>
  </header>

  <!-- GLOBAL SEARCH MODAL -->
  <div class="search-modal" id="searchModal">
    <div class="search-box">
      <div class="search-input-wrap">
        <i class="fa-solid fa-magnifying-glass search-icon-input"></i>
        <input type="text" id="searchInput" placeholder="Search artists, interviews, festivals, cinema, drama...">
        <button class="close-search" id="closeSearch"><i class="fa-solid fa-xmark"></i></button>
      </div>
      <div class="search-results" id="searchResults">
        <p class="search-hint">Start typing to search Lebanese & Arab entertainment database...</p>
      </div>
    </div>
  </div>

  <!-- DYNAMIC SPA APP VIEW -->
  <main id="app"></main>

  <!-- GLOBAL FOOTER -->
  <footer class="footer">
    <div class="container">
      <div class="footer-grid">
        <div class="footer-brand-col">
          <a href="#home" class="logo footer-logo">
            <div class="logo-icon">
              <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M50 5 C30 25 15 50 20 80 C35 60 45 45 50 30 C55 45 65 60 80 80 C85 50 70 25 50 5 Z" fill="url(#fireGradFoot)"/>
                <path d="M50 35 C40 50 30 65 35 85 C45 70 50 55 50 45 C50 55 55 70 65 85 C70 65 60 50 50 35 Z" fill="#FFB703"/>
                <defs>
                  <linearGradient id="fireGradFoot" x1="50" y1="5" x2="50" y2="80" gradientUnits="userSpaceOnUse">
                    <stop stop-color="#FF3B30"/>
                    <stop offset="1" stop-color="#E63946"/>
                  </linearGradient>
                </defs>
              </svg>
            </div>
            <div class="logo-text">FENIX <span>LIVE</span></div>
          </a>
          <p class="footer-desc">
            A Lebanese production and entertainment media platform covering artists, exclusive interviews, cultural festivals, concerts, and cinema productions across the Arab world.
          </p>
          <div class="footer-socials">
            <a href="https://www.youtube.com/@fenixproductionlive" target="_blank" rel="noopener"><i class="fa-brands fa-youtube"></i></a>
            <a href="https://instagram.com/fenix_production_lb" target="_blank" rel="noopener"><i class="fa-brands fa-instagram"></i></a>
            <a href="https://facebook.com/fenix.production.lb" target="_blank" rel="noopener"><i class="fa-brands fa-facebook-f"></i></a>
          </div>
        </div>

        <div>
          <h4 class="footer-heading">Quick Links</h4>
          <ul class="footer-links">
            <li><a href="#home">Home</a></li>
            <li><a href="#news">News</a></li>
            <li><a href="#artists">Artists</a></li>
            <li><a href="#interviews">Interviews</a></li>
            <li><a href="#festivals">Festivals & Events</a></li>
            <li><a href="#entertainment">Entertainment</a></li>
          </ul>
        </div>

        <div>
          <h4 class="footer-heading">Categories</h4>
          <ul class="footer-links">
            <li><a href="#news?cat=Music">Music Releases</a></li>
            <li><a href="#news?cat=Cinema">Arab Cinema</a></li>
            <li><a href="#news?cat=Television">TV Drama & Series</a></li>
            <li><a href="#news?cat=Theater">Lebanese Theater</a></li>
            <li><a href="#privacy">Privacy Policy</a></li>
          </ul>
        </div>

        <div>
          <h4 class="footer-heading">Fenix Production</h4>
          <p style="color: var(--text-muted); font-size: 0.88rem; margin-bottom: 12px;">
            <i class="fa-solid fa-location-dot" style="color:var(--primary);"></i> Beirut, Lebanon
          </p>
          <p style="color: var(--text-muted); font-size: 0.88rem; margin-bottom: 12px;">
            <i class="fa-solid fa-envelope" style="color:var(--primary);"></i> contact@fenixlive.lb
          </p>
          <p style="color: var(--text-muted); font-size: 0.88rem;">
            <i class="fa-solid fa-phone" style="color:var(--primary);"></i> +961 1 800 950
          </p>
        </div>
      </div>

      <div class="footer-bottom">
        <p>&copy; 2026 Fenix Live & Fenix Production Lebanon. All Rights Reserved.</p>
      </div>
    </div>
  </footer>

  <!-- JAVASCRIPT FILES -->
  <script src=>"{{asset ('fenix.js')}}"</script>
</body>
</html> 