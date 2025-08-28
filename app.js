// Blog data from provided JSON
const blogData = {
  "blog_posts": [
     {
      "id": 1,
      "title": "This Random Comment Changed My Life",
      "excerpt": "For over a decade, I lived under the grip of OCD compulsions. They permeated every corner of daily life—waking up, getting ready, eating, drinking, even the simple act of breathing. What most people consider ordinary routines became exhausting rituals, draining joy and energy from each day.",
      "date": "August 28, 2025",
      "image": "attention..png",
      "content": ""
    }
  ],
  "site_info": {
    "title": "Reflections",
    "author": "Ekaidrix", 
    "description": "A collection of personal essays and observations about life, memory, and human connection.",
    "about": "I write about the ordinary moments that shape us and the small revelations hidden in daily life. This is my attempt to make sense of the world through words, one essay at a time."
  }
};

// Application state
let currentView = 'home';

// View management
function showView(viewName) {
  // Hide all views
  document.querySelectorAll('.view').forEach(view => {
    view.classList.remove('active');
  });
  
  // Show selected view
  const targetView = document.getElementById(`${viewName}-view`);
  if (targetView) {
    targetView.classList.add('active');
    currentView = viewName;
  }
  
  // Scroll to top
  window.scrollTo(0, 0);
}

function showHome() {
  showView('home');
}

function showAbout() {
  showView('about');
}

function showPost(postId) {
  const post = blogData.blog_posts.find(p => p.id === postId);
  if (!post) return;
  
  const postContent = document.getElementById('post-content');
  
  // Create post content with proper event handling
  const postHTML = `
    <div class="back-link-container">
      <button class="back-link" id="back-to-posts">
        ← Back to posts
      </button>
    </div>
    
    <header class="post-header">
      <h1 class="post-title">${post.title}</h1>
      <div class="post-meta">
        <span class="post-date">${post.date}</span>
        <span class="post-author">${blogData.site_info.author}</span>
      </div>
    </header>
    
    <img src="${post.image}" alt="${post.title}" class="post-image" loading="lazy">
    
    <div class="post-content">
      ${post.content.split('\n\n').map(paragraph => `<p>${paragraph}</p>`).join('')}
    </div>
  `;
  
  postContent.innerHTML = postHTML;
  
  // Add event listener to back button
  const backButton = document.getElementById('back-to-posts');
  if (backButton) {
    backButton.addEventListener('click', showHome);
  }
  
  showView('post');
}

// Generate blog post previews
function generateBlogPosts() {
  const blogPostsGrid = document.getElementById('blog-posts-grid');
  if (!blogPostsGrid) return;
  
  const postsHTML = blogData.blog_posts.map(post => `
    <article class="post-preview" data-post-id="${post.id}">
      <img src="${post.image}" alt="${post.title}" class="post-image" loading="lazy">
      <div class="post-preview-content">
        <h3 class="post-title">${post.title}</h3>
        <p class="post-excerpt">${post.excerpt}</p>
        <div class="post-meta">
          <span class="post-date">${post.date}</span>
          <span class="post-author">${blogData.site_info.author}</span>
        </div>
      </div>
    </article>
  `).join('');
  
  blogPostsGrid.innerHTML = postsHTML;
  
  // Add click listeners to post previews
  const postPreviews = blogPostsGrid.querySelectorAll('.post-preview');
  postPreviews.forEach(preview => {
    preview.addEventListener('click', function() {
      const postId = parseInt(this.getAttribute('data-post-id'));
      showPost(postId);
    });
  });
}

// Setup navigation event listeners
function setupNavigation() {
  // Handle navigation links in header
  document.addEventListener('click', function(e) {
    // Handle navigation links
    if (e.target.matches('a[onclick*="showHome"]') || e.target.matches('.site-title a')) {
      e.preventDefault();
      showHome();
    } else if (e.target.matches('a[onclick*="showAbout"]')) {
      e.preventDefault();
      showAbout();
    }
  });
  
  // Setup header navigation links directly
  const homeLinks = document.querySelectorAll('.site-title a, .main-nav a[href="#"][onclick*="showHome"]');
  homeLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      showHome();
    });
  });
  
  const aboutLinks = document.querySelectorAll('.main-nav a[href="#"][onclick*="showAbout"]');
  aboutLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      showAbout();
    });
  });
}

// Initialize the application
function init() {
  console.log('Initializing blog app...');
  
  // Generate blog posts
  generateBlogPosts();
  
  // Setup navigation
  setupNavigation();
  
  // Show home view by default
  showHome();
  
  console.log('Blog app initialized successfully');
}

// Handle image loading errors
function handleImageError(img) {
  console.log('Image failed to load:', img.src);
  img.style.background = 'var(--color-bg-2)';
  img.style.display = 'block';
}

// Add image error handling to all images
document.addEventListener('error', function(e) {
  if (e.target.tagName === 'IMG') {
    handleImageError(e.target);
  }
}, true);

// Run initialization when DOM is loaded
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}

// Make functions globally accessible for any remaining onclick handlers
window.showHome = showHome;
window.showAbout = showAbout;
window.showPost = showPost;
