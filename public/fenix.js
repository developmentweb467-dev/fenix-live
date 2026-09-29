/**
 * Fenix Live — Core Application Controller & Single Page Router
 * Connected to FENIX PRODUCTION LEBANON
 */

document.addEventListener('DOMContentLoaded', () => {
  initNavigation();
  initSearch();
  handleRouting();

  window.addEventListener('hashchange', handleRouting);
});

/* SINGLE PAGE ROUTER */
function handleRouting() {
  const hash = window.location.hash || '#home';
  const app = document.getElementById('app');
  
  const [route, queryString] = hash.split('?');
  const params = new URLSearchParams(queryString || '');

  // Update navigation active states
  document.querySelectorAll('.nav-link').forEach(link => {
    link.classList.toggle('active', link.getAttribute('href') === route);
  });

  window.scrollTo({ top: 0, behavior: 'smooth' });

  // Render view depending on route
  switch (route) {
    case '#home':
      renderHome(app);
      break;
    case '#news':
      renderNewsPage(app, params.get('cat'));
      break;
    case '#article':
      renderArticleDetail(app, params.get('id'));
      break;
    case '#artists':
      renderArtistsPage(app);
      break;
    case '#interviews':
      renderInterviewsPage(app);
      break;
    case '#interview-detail':
      renderInterviewDetail(app, params.get('id'));
      break;
    case '#festivals':
      renderFestivalsPage(app);
      break;
    case '#entertainment':
      renderEntertainmentPage(app);
      break;
    case '#about':
      renderAboutPage(app);
      break;
    case '#contact':
      renderContactPage(app);
      break;
    case '#privacy':
      renderPrivacyPage(app);
      break;
    default:
      renderHome(app);
  }
}

/* PAGE VIEW RENDERERS */

function renderHome(container) {
  const heroStory = FENIX_DATA.news[0];
  
  container.innerHTML = `
    <!-- HERO SECTION -->
    <section style="padding-top:20px;">
      <div class="container">
        <div class="hero-card" style="background-image: url('${heroStory.image}');">
          <div class="hero-overlay"></div>
          <div class="hero-content">
            <span class="badge">${heroStory.category}</span>
            <h1 class="hero-title">${heroStory.title}</h1>
            <p class="hero-desc">${heroStory.excerpt}</p>
            <div class="meta-info">
              <span><i class="fa-regular fa-user"></i> ${heroStory.author}</span>
              <span><i class="fa-regular fa-calendar"></i> ${heroStory.date}</span>
            </div>
            <br>
            <a href="#article?id=${heroStory.id}" class="btn"><i class="fa-solid fa-newspaper"></i> Read Full Story</a>
          </div>
        </div>
      </div>
    </section>

    <!-- LATEST NEWS SECTION -->
    <section>
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">Latest Media & Arts News</h2>
          <a href="#news" class="view-all">View All News <i class="fa-solid fa-arrow-right"></i></a>
        </div>
        <div class="grid-3">
          ${FENIX_DATA.news.slice(1, 4).map(item => createCardHTML(item)).join('')}
        </div>
      </div>
    </section>

    <!-- FEATURED ARTISTS SECTION -->
    <section style="background: rgba(20, 24, 31, 0.4);">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">Featured Artists</h2>
          <a href="#artists" class="view-all">Explore Profiles <i class="fa-solid fa-arrow-right"></i></a>
        </div>
        <div class="grid-4">
          ${FENIX_DATA.artists.map(artist => `
            <div class="artist-card">
              <img src="${artist.image}" class="artist-avatar" alt="${artist.name}">
              <h3 class="artist-name">${artist.name}</h3>
              <p class="artist-role">${artist.role}</p>
              <p class="artist-bio">${artist.bio}</p>
              <a href="#artists" class="btn btn-secondary" style="width:100%;">View Profile</a>
            </div>
          `).join('')}
        </div>
      </div>
    </section>

    <!-- INTERVIEWS SECTION -->
    <section>
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">Latest Interviews</h2>
          <a href="#interviews" class="view-all">Watch All <i class="fa-solid fa-arrow-right"></i></a>
        </div>
        <div class="grid-3">
          ${FENIX_DATA.interviews.map(interview => `
            <div class="card">
              <div class="card-img-wrap">
                <img src="${interview.image}" alt="${interview.title}">
              </div>
              <div class="card-body">
                <span class="badge" style="background:var(--accent-gold); color:#000;">EXCLUSIVE</span>
                <h3 class="card-title">${interview.title}</h3>
                <p class="card-excerpt">${interview.excerpt}</p>
                <a href="#interview-detail?id=${interview.id}" class="btn btn-secondary">Read Interview</a>
              </div>
            </div>
          `).join('')}
        </div>
      </div>
    </section>

    <!-- FESTIVALS & EVENTS SECTION -->
    <section style="background: rgba(20, 24, 31, 0.4);">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">Festivals & Events</h2>
          <a href="#festivals" class="view-all">View Calendar <i class="fa-solid fa-arrow-right"></i></a>
        </div>
        ${FENIX_DATA.festivals.map(fest => `
          <div class="festival-card">
            <img src="${fest.image}" class="festival-img" alt="${fest.name}">
            <div class="festival-body">
              <h3 style="font-size:1.5rem; margin-bottom:10px;">${fest.name}</h3>
              <div class="festival-meta">
                <span><i class="fa-solid fa-location-dot"></i> ${fest.location}</span>
                <span><i class="fa-regular fa-calendar"></i> ${fest.date}</span>
              </div>
              <p style="color:var(--text-muted); margin-bottom:20px;">${fest.description}</p>
              <a href="#festivals" class="btn">Explore Event</a>
            </div>
          </div>
        `).join('')}
      </div>
    </section>

    <!-- ENTERTAINMENT SECTION -->
    <section>
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">Entertainment & Red Carpet</h2>
          <a href="#entertainment" class="view-all">More Stories <i class="fa-solid fa-arrow-right"></i></a>
        </div>
        <div class="grid-3">
          ${FENIX_DATA.entertainment.map(ent => `
            <div class="card">
              <div class="card-img-wrap">
                <img src="${ent.image}" alt="${ent.title}">
              </div>
              <div class="card-body">
                <span class="badge">${ent.category}</span>
                <h3 class="card-title">${ent.title}</h3>
                <p class="card-excerpt">${ent.excerpt}</p>
                <a href="#entertainment" class="btn btn-secondary">Read Story</a>
              </div>
            </div>
          `).join('')}
        </div>
      </div>
    </section>

    <!-- ABOUT INTRO SECTION -->
    <section style="background: var(--card-bg); border-top: 1px solid var(--border-color); border-bottom: 1px solid var(--border-color);">
      <div class="container" style="max-width: 900px; text-align: center;">
        <h2 style="font-family: var(--font-heading); font-size: 2.2rem; margin-bottom: 20px;">About Fenix Live & Production</h2>
        <p style="color: var(--text-muted); font-size: 1.1rem; line-height: 1.8; margin-bottom: 30px;">
          Connected to <strong>Fenix Production Lebanon</strong>, Fenix Live is the premier digital entertainment medium dedicated to highlighting Lebanese and Arab musicians, actors, directors, theater plays, and cultural festivals.
        </p>
        <a href="#about" class="btn">Learn More About Us</a>
      </div>
    </section>
  `;
}

function renderNewsPage(container, selectedCat = null) {
  const categories = ["All", "Culture", "Cinema", "Television", "Festivals", "Music"];
  
  const filteredNews = selectedCat && selectedCat !== "All" 
    ? FENIX_DATA.news.filter(n => n.category.toLowerCase() === selectedCat.toLowerCase())
    : FENIX_DATA.news;

  container.innerHTML = `
    <section>
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">News & Media Coverage</h2>
        </div>

        <div class="category-pills">
          ${categories.map(cat => `
            <button class="cat-pill ${(!selectedCat && cat==='All') || selectedCat===cat ? 'active':''}" 
                    onclick="window.location.hash='#news${cat !== 'All' ? '?cat='+encodeURIComponent(cat):''}'">
              ${cat}
            </button>
          `).join('')}
        </div>

        <div class="grid-3">
          ${filteredNews.map(item => createCardHTML(item)).join('')}
        </div>
      </div>
    </section>
  `;
}

function renderArticleDetail(container, id) {
  const article = FENIX_DATA.news.find(a => a.id == id) || FENIX_DATA.news[0];
  
  container.innerHTML = `
    <section>
      <div class="container">
        <div style="margin-bottom: 25px;">
          <span class="badge">${article.category}</span>
          <h1 style="font-family: var(--font-heading); font-size: 2.6rem; margin: 15px 0 10px; line-height: 1.25;">${article.title}</h1>
          <div class="meta-info">
            <span>By <strong>${article.author}</strong></span> |
            <span>Published ${article.date}</span>
          </div>
        </div>
        <img src="${article.image}" class="single-banner" alt="${article.title}">
        <div class="article-body-content">
          <p>${article.content}</p>
        </div>
        <br><br>
        <a href="#news" class="btn btn-secondary"><i class="fa-solid fa-arrow-left"></i> Back to News</a>
      </div>
    </section>
  `;
}

function renderArtistsPage(container) {
  container.innerHTML = `
    <section>
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">Lebanese & Arab Artists Directory</h2>
        </div>
        <div class="grid-4">
          ${FENIX_DATA.artists.map(artist => `
            <div class="artist-card">
              <img src="${artist.image}" class="artist-avatar" alt="${artist.name}">
              <h3 class="artist-name">${artist.name}</h3>
              <p class="artist-role">${artist.role}</p>
              <p class="artist-bio">${artist.bio}</p>
            </div>
          `).join('')}
        </div>
      </div>
    </section>
  `;
}

function renderInterviewsPage(container) {
  container.innerHTML = `
    <section>
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">Fenix Live Exclusive Interviews</h2>
        </div>
        <div class="grid-3">
          ${FENIX_DATA.interviews.map(interview => `
            <div class="card">
              <div class="card-img-wrap">
                <img src="${interview.image}" alt="${interview.title}">
              </div>
              <div class="card-body">
                <h3 class="card-title">${interview.title}</h3>
                <p class="card-excerpt">${interview.excerpt}</p>
                <a href="#interview-detail?id=${interview.id}" class="btn">Read Interview</a>
              </div>
            </div>
          `).join('')}
        </div>
      </div>
    </section>
  `;
}

function renderInterviewDetail(container, id) {
  const item = FENIX_DATA.interviews.find(i => i.id == id) || FENIX_DATA.interviews[0];

  container.innerHTML = `
    <section>
      <div class="container">
        <span class="badge" style="background:var(--accent-gold); color:#000;">EXCLUSIVE INTERVIEW</span>
        <h1 style="font-family: var(--font-heading); font-size: 2.6rem; margin: 15px 0 10px;">${item.title}</h1>
        <p class="meta-info">Interview with <strong>${item.artist}</strong> — ${item.date}</p>
        <br>
        <img src="${item.image}" class="single-banner" alt="${item.artist}">
        
        <div class="article-body-content">
          ${item.qna.map(pair => `
            <div style="margin-bottom:28px;">
              <h4 style="color:var(--primary); font-size:1.15rem; margin-bottom:8px;">Q: ${pair.q}</h4>
              <p><strong>${item.artist}:</strong>${pair.a}</p>
            </div>
          `).join('')}
        </div>
        <br>
        <a href="#interviews" class="btn btn-secondary"><i class="fa-solid fa-arrow-left"></i> Back to Interviews</a>
      </div>
    </section>
  `;
}

function renderFestivalsPage(container) {
  container.innerHTML = `
    <section>
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">Lebanese Festivals & Cultural Events</h2>
        </div>
        ${FENIX_DATA.festivals.map(fest => `
          <div class="festival-card">
            <img src="${fest.image}" class="festival-img" alt="${fest.name}">
            <div class="festival-body">
              <h3 style="font-size:1.5rem; margin-bottom:10px;">${fest.name}</h3>
              <div class="festival-meta">
                <span><i class="fa-solid fa-location-dot"></i> ${fest.location}</span>
                <span><i class="fa-regular fa-calendar"></i> ${fest.date}</span>
              </div>
              <p style="color:var(--text-muted); margin-bottom:20px;">${fest.description}</p>
              <button class="btn" onclick="alert('Festival coverage and media passes managed by Fenix Production Lebanon.')">View Details</button>
            </div>
          </div>
        `).join('')}
      </div>
    </section>
  `;
}

function renderEntertainmentPage(container) {
  container.innerHTML = `
    <section>
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">Entertainment & Behind-The-Scenes</h2>
        </div>
        <div class="grid-3">
          ${FENIX_DATA.entertainment.map(ent => `
            <div class="card">
              <div class="card-img-wrap">
                <img src="${ent.image}" alt="${ent.title}">
              </div>
              <div class="card-body">
                <span class="badge">${ent.category}</span>
                <h3 class="card-title">${ent.title}</h3>
                <p class="card-excerpt">${ent.excerpt}</p>
                <button class="btn btn-secondary">Read Story</button>
              </div>
            </div>
          `).join('')}
        </div>
      </div>
    </section>
  `;
}

function renderAboutPage(container) {
  container.innerHTML = `
    <section>
      <div class="container" style="max-width:900px;">
        <h1 class="section-title" style="margin-bottom:25px;">About Fenix Live</h1>
        <p style="font-size:1.15rem; line-height:1.8; color:#E2E8F0; margin-bottom:24px;">
          <strong>Fenix Live</strong> is an extension of <strong>Fenix Production Lebanon</strong>, built to showcase the rich artistic heritage and dynamic modern media scene in Lebanon and across the Arab world.
        </p>
        <p style="font-size:1.05rem; line-height:1.8; color:var(--text-muted); margin-bottom:24px;">
          Our platform brings audiences closer to their favorite artists through behind-the-scenes access, red carpet coverage, orchestral performances, television drama sets, and in-depth interviews with prominent directors, singers, and actors.
        </p>
        
        <div style="display:flex; gap:16px; margin-top:30px;">
          <a href="https://www.youtube.com/@fenixproductionlive" target="_blank" class="btn"><i class="fa-brands fa-youtube"></i> Visit YouTube Channel</a>
          <a href="https://instagram.com/fenix_production_lb" target="_blank" class="btn btn-secondary"><i class="fa-brands fa-instagram"></i> Follow Instagram</a>
        </div>
      </div>
    </section>
  `;
}

function renderContactPage(container) {
  container.innerHTML = `
    <section>
      <div class="container">
        <h1 class="section-title" style="margin-bottom:35px;">Contact Fenix Production</h1>
        <div class="contact-grid">
          <div class="contact-info">
            <h3 style="margin-bottom:24px;">Production Office</h3>
            <div class="info-box">
              <i class="fa-solid fa-location-dot"></i>
              <div>
                <strong>Headquarters</strong>
                <p style="color:var(--text-muted);">Beirut, Lebanon</p>
              </div>
            </div>
            <div class="info-box">
              <i class="fa-solid fa-envelope"></i>
              <div>
                <strong>Email Contact</strong>
                <p style="color:var(--text-muted);">contact@fenixlive.lb</p>
              </div>
            </div>
            <div class="info-box">
              <i class="fa-solid fa-phone"></i>
              <div>
                <strong>Phone & WhatsApp</strong>
                <p style="color:var(--text-muted);">+961 1 800 950</p>
              </div>
            </div>
            <div style="margin-top:20px; display:flex; gap:12px;">
              <a href="https://www.youtube.com/@fenixproductionlive" target="_blank" class="btn btn-secondary"><i class="fa-brands fa-youtube"></i></a>
              <a href="https://instagram.com/fenix_production_lb" target="_blank" class="btn btn-secondary"><i class="fa-brands fa-instagram"></i></a>
              <a href="https://facebook.com/fenix.production.lb" target="_blank" class="btn btn-secondary"><i class="fa-brands fa-facebook-f"></i></a>
            </div>
          </div>

          <form class="contact-form" id="contactForm" onsubmit="handleContactSubmit(event)">
            <h3 style="margin-bottom:24px;">Send Message</h3>
            <div class="form-group">
              <label>Full Name</label>
              <input type="text" class="form-control" required placeholder="Your Name">
            </div>
            <div class="form-group">
              <label>Email Address</label>
              <input type="email" class="form-control" required placeholder="name@domain.com">
            </div>
            <div class="form-group">
              <label>Subject</label>
              <input type="text" class="form-control" required placeholder="Media / Production Enquiry">
            </div>
            <div class="form-group">
              <label>Message</label>
              <textarea class="form-control" rows="5" required placeholder="Write your message..."></textarea>
            </div>
            <button type="submit" class="btn" style="width:100%;">Submit Enquiry</button>
          </form>
        </div>
      </div>
    </section>
  `;
}

function renderPrivacyPage(container) {
  container.innerHTML = `
    <section>
      <div class="container" style="max-width:850px;">
        <h1 class="section-title" style="margin-bottom:25px;">Privacy Policy</h1>
        <p style="color:var(--text-muted); line-height:1.85;">
          At Fenix Live and Fenix Production Lebanon, we prioritize the privacy of our visitors. This Privacy Policy document outlines the types of information recorded by Fenix Live and how we use it for media distribution and communication purposes.
        </p>
      </div>
    </section>
  `;
}

/* HELPER COMPONENTS & INTERACTION LOGIC */

function createCardHTML(item) {
  return `
    <div class="card">
      <div class="card-img-wrap">
        <img src="${item.image}" alt="${item.title}">
      </div>
      <div class="card-body">
        <span class="badge">${item.category}</span>
        <h3 class="card-title">${item.title}</h3>
        <p class="card-excerpt">${item.excerpt}</p>
        <a href="#article?id=${item.id}" class="btn btn-secondary">Read Article</a>
      </div>
    </div>
  `;
}

function initNavigation() {
  const hamburger = document.getElementById('hamburger');
  const navMenu = document.getElementById('navMenu');

  hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('active');
  });

  document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => navMenu.classList.remove('active'));
  });
}

function initSearch() {
  const openSearch = document.getElementById('openSearch');
  const closeSearch = document.getElementById('closeSearch');
  const searchModal = document.getElementById('searchModal');
  const searchInput = document.getElementById('searchInput');
  const searchResults = document.getElementById('searchResults');

  openSearch.addEventListener('click', () => {
    searchModal.classList.add('active');
    searchInput.focus();
  });

  closeSearch.addEventListener('click', () => {
    searchModal.classList.remove('active');
  });

  searchInput.addEventListener('input', (e) => {
    const query = e.target.value.toLowerCase().trim();
    if (!query) {
      searchResults.innerHTML = '<p class="search-hint">Start typing to search Lebanese & Arab entertainment database...</p>';
      return;
    }

    const matchedNews = FENIX_DATA.news.filter(n => n.title.toLowerCase().includes(query));
    const matchedArtists = FENIX_DATA.artists.filter(a => a.name.toLowerCase().includes(query));

    if (matchedNews.length === 0 && matchedArtists.length === 0) {
      searchResults.innerHTML = '<p class="search-hint">No matching results found.</p>';
      return;
    }

    let html = '';
    matchedNews.forEach(n => {
      html += `
        <a href="#article?id=${n.id}" class="search-item" onclick="document.getElementById('searchModal').classList.remove('active')">
          <img src="${n.image}" alt="${n.title}">
          <div>
            <div class="search-item-cat">${n.category} • News</div>
            <div class="search-item-title">${n.title}</div>
          </div>
        </a>
      `;
    });

    matchedArtists.forEach(a => {
      html += `
        <a href="#artists" class="search-item" onclick="document.getElementById('searchModal').classList.remove('active')">
          <img src="${a.image}" alt="${a.name}">
          <div>
            <div class="search-item-cat">${a.role} • Artist</div>
            <div class="search-item-title">${a.name}</div>
          </div>
        </a>
      `;
    });

    searchResults.innerHTML = html;
  });
}

function handleContactSubmit(e) {
  e.preventDefault();
  alert("Thank you! Your message has been submitted to Fenix Production team.");
  e.target.reset();
}


/**
 * Fenix Live — Mock Data Store
 * FENIX PRODUCTION LEBANON — Lebanese Arts, Music, Cinema & Media
 */

const FENIX_DATA = {
  news: [
    {
      id: 1,
      title: "Fairouz Cultural Archive Exhibition Announced at Beirut National Museum",
      category: "Culture",
      author: "Nadim El-Hage",
      date: "September 24, 2026",
      image: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=1000&q=80",
      excerpt: "A landmark exhibition celebrating the legacy of Lebanon's musical icon Fairouz and the Rahbani Brothers' compositions.",
      content: `A monumental archival exhibition celebrating the life, musical legacy, and theatrical performances of the legendary Fairouz will officially open next month at the National Museum of Beirut. 
      <br><br>
      Organized by Fenix Live Productions in cooperation with leading Lebanese cultural preservationists, the showcase will include rare original vinyl recordings, handwritten stage scores by Assi and Mansour Rahbani, and iconic stage costumes worn during Fairouz's historic performances at Baalbeck and Beiteddine. 
      <br><br>
      "This exhibition is a testament to the resilient artistic soul of Lebanon," stated lead curator Layla Kanaan.`
    },
    {
      id: 2,
      title: "Beirut International Film Festival 2026 Opening Night Lineup Unveiled",
      category: "Cinema",
      author: "Sara Mansour",
      date: "September 22, 2026",
      image: "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?auto=format&fit=crop&w=1000&q=80",
      excerpt: "The 2026 edition promises groundbreaking regional cinema, honoring veteran directors and emerging independent Lebanese filmmakers.",
      content: `The Beirut International Film Festival has officially revealed its feature program for 2026, showcasing over 45 Arab feature films, documentaries, and short features. 
      <br><br>
      Opening the festival is the anticipated Lebanese drama 'Cedar Shadows', directed by Ziad Doueiri. The festival will also host dedicated workshops led by industry veteran producers focusing on co-production models within the Arab Mediterranean region.`
    },
    {
      id: 3,
      title: "Exclusive: Behind the Scenes of the New Lebanese Ramadan TV Drama Series",
      category: "Television",
      author: "Rami Khoury",
      date: "September 20, 2026",
      image: "https://images.unsplash.com/photo-1574375927938-d5a98e8ffe85?auto=format&fit=crop&w=1000&q=80",
      excerpt: "Fenix Live visits the production set in Chouf to see how director Nadine Labaki is crafting this season's blockbuster drama.",
      content: `Fenix Live granted exclusive behind-the-scenes access to the high-budget television drama currently filming across historical mansions in Chouf, Lebanon. 
      <br><br>
      Featuring a star-studded cast including Nadine Nassib Njeim and Georges Khabbaz, the narrative follows three generations of a Lebanese family navigating society and transformation during the mid-20th century.`
    },
    {
      id: 4,
      title: "Baalbeck International Festival Draws Record Turnout for Closing Concert",
      category: "Festivals",
      author: "Nadim El-Hage",
      date: "September 18, 2026",
      image: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&w=1000&q=80",
      excerpt: "Symphonic Lebanese orchestral performances against the Roman temples created an unforgettable night of music.",
      content: `Thousands gathered amidst the grandeur of the Temple of Bacchus in Baalbeck to witness a breathtaking closing symphonic spectacle performed by the Lebanese National Philharmonic Orchestra.`
    },
    {
      id: 5,
      title: "Indie Rock Band Mashrou' Leila Members Announce Solo Acoustic Project",
      category: "Music",
      author: "Sara Mansour",
      date: "September 15, 2026",
      image: "https://images.unsplash.com/photo-1511735111819-9a3f7709049c?auto=format&fit=crop&w=1000&q=80",
      excerpt: "Exploring new electronic and traditional oriental fusion, the upcoming album is set for late autumn release.",
      content: `Fresh acoustic and electronic experiments blend classical Middle Eastern phrasing with modern indie synthesizer landscapes.`
    },
    {
      id: 6,
      title: "Lebanese Philharmonic Orchestra Announces Autumn Concert Series in Beirut",
      category: "Music",
      author: "Rami Khoury",
      date: "September 12, 2026",
      image: "https://images.unsplash.com/photo-1465847899084-d164df4dedc6?auto=format&fit=crop&w=1000&q=80",
      excerpt: "Classical Middle Eastern symphonies will resonate at St. Joseph Church in Monot under the baton of Maestro Walid Gholmieh.",
      content: `The Lebanese National Higher Conservatory of Music has confirmed its full calendar for the autumn 2026 season.`
    }
  ],

  artists: [
    {
      id: 101,
      name: "Georges Khabbaz",
      role: "Actor & Playwright",
      bio: "Renowned Lebanese theater director, actor, and writer acclaimed for blending social satire with deeply human storytelling.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: 102,
      name: "Nadine Labaki",
      role: "Filmmaker & Actress",
      bio: "Academy Award-nominated Lebanese director known for seminal regional films such as Capernaum and Caramel.",
      image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: 103,
      name: "Ibrahim Maalouf",
      role: "Trumpeter & Composer",
      bio: "World-renowned Lebanese-French virtuoso trumpeter famous for his quarter-tone trumpet technique and jazz fusion.",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: 104,
      name: "Hiba Tawaji",
      role: "Soprano & Performing Artist",
      bio: "Acclaimed Lebanese soprano singer and theater actress known for her soaring vocals and major Rahbani musical productions.",
      image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=600&q=80"
    }
  ],

  interviews: [
    {
      id: 201,
      artist: "Georges Khabbaz",
      title: "Theater as the Mirror of Society: In Conversation with Georges Khabbaz",
      date: "September 21, 2026",
      image: "https://images.unsplash.com/photo-1460723237483-7a6dc9d0b212?auto=format&fit=crop&w=1000&q=80",
      excerpt: "The master of Lebanese satirical comedy discusses his upcoming Beirut stage play and the power of art during challenging times.",
      qna: [
        { q: "What inspired your new theatrical production coming to Beirut this season?", a: "The human element. Beirut is a city that constantly recreates itself through its writers, actors, and everyday citizens." },
        { q: "How do you feel about the renaissance of Lebanese cinema?", a: "Lebanese filmmakers possess authentic stories that resonate universally without losing their local flavor." }
      ]
    },
    {
      id: 202,
      artist: "Ibrahim Maalouf",
      title: "Quarter Tones & Modern Jazz: Ibrahim Maalouf on His Beirut Symphony",
      date: "September 14, 2026",
      image: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=1000&q=80",
      excerpt: "In an exclusive chat, Maalouf reflects on fusing traditional Levantine maqam scales with modern symphonic compositions.",
      qna: [
        { q: "How does Lebanese traditional music influence your international compositions?", a: "The quarter tone is part of my emotional DNA. Wherever I play in the world, that Levantine sound shines through." }
      ]
    }
  ],

  festivals: [
    {
      id: 301,
      name: "Byblos International Festival 2026",
      location: "Ancient Port, Byblos, Lebanon",
      date: "July - August 2026",
      image: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=1000&q=80",
      description: "Set beside the Mediterranean Sea, Byblos Festival presents world-class musicians, rock concerts, and oriental music legends."
    },
    {
      id: 302,
      name: "Beiteddine Art Festival",
      location: "Beiteddine Palace, Chouf",
      date: "August 2026",
      image: "https://images.unsplash.com/photo-1465847899084-d164df4dedc6?auto=format&fit=crop&w=1000&q=80",
      description: "Hosted inside the magnificent 19th-century palace, offering classical opera, dance, and Middle Eastern symphonic ensembles."
    }
  ],

  entertainment: [
    {
      id: 401,
      title: "Red Carpet Highlights: Lebanese Stars Attend Murex d'Or Gala Night",
      category: "Red Carpet",
      date: "September 23, 2026",
      image: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1000&q=80",
      excerpt: "Lebanese and Arab celebrities showcased high fashion and celebrated cinematic achievements at the annual awards gala in Beirut."
    },
    {
      id: 402,
      title: "Behind the Scenes: Recording Session at Fenix Studio Beirut",
      category: "Behind The Scenes",
      date: "September 19, 2026",
      image: "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?auto=format&fit=crop&w=1000&q=80",
      excerpt: "Inside Fenix Production's state-of-the-art soundstage as local vocalists finalize the sound track for an upcoming film."
    }
  ]
};