// Blog data from provided JSON
const blogData = {
  "blog_posts": [
    {
      "id": 1,
      "title": "The Weight of Small Moments",
      "excerpt": "There's something profound about the ordinary Tuesday morning when you realize that the life you're living is exactly the one you've been unconsciously building. The coffee tastes different, the light through the kitchen window seems more deliberate.",
      "date": "March 15, 2024",
      "image": "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=400&fit=crop",
      "content": "There's something profound about the ordinary Tuesday morning when you realize that the life you're living is exactly the one you've been unconsciously building. The coffee tastes different, the light through the kitchen window seems more deliberate.\n\nI've been thinking about this a lot lately – how we collect these small moments like pebbles in our pockets, not really paying attention until one day we empty them out and discover we've been carrying around an entire landscape.\n\nYesterday, while waiting for the bus, I watched an elderly man feed pigeons from a paper bag. His movements were precise, economical. He had clearly done this many times before. There was a rhythm to it – the way he reached into the bag, the gentle arc of his throw, the immediate flutter of wings.\n\nWhat struck me wasn't the kindness of the act, though that was beautiful. It was the weight of routine, the way meaning can accumulate in the most mundane activities. This man had probably been feeding these pigeons for years. In that simple gesture, I saw an entire philosophy of care, of showing up, of finding purpose in the overlooked corners of daily life.\n\nWe live in a culture obsessed with grand gestures and life-changing moments. But perhaps the real transformation happens in these quiet intervals, in the spaces between the events we think matter. Perhaps wisdom isn't found in the mountain top experiences, but in learning to pay attention to the ordinary light of ordinary days."
    },
    {
      "id": 2,
      "title": "Letters I Never Sent", 
      "excerpt": "In the drawer of my desk, beneath old receipts and forgotten business cards, lies a collection of letters I never sent. Each one a small act of courage that I couldn't quite complete.",
      "date": "February 28, 2024",
      "image": "https://images.unsplash.com/photo-1455390582262-044cdead277a?w=800&h=400&fit=crop",
      "content": "In the drawer of my desk, beneath old receipts and forgotten business cards, lies a collection of letters I never sent. Each one a small act of courage that I couldn't quite complete.\n\nThere's the letter to my college roommate, apologizing for the fight we had over something so trivial I can barely remember what started it. There's the one to my grandmother, written three years after her funeral, full of things I wished I had told her. And there's the letter to myself at twenty-five, offering the kind of gentle advice I could have used back then.\n\nI keep telling myself I'll send them someday, or at least the ones where the recipient is still alive to receive them. But there's something about the act of writing that seems complete in itself. The letters serve their purpose just by existing, by giving form to the thoughts that would otherwise remain shapeless in my mind.\n\nMaybe that's what writing is – a way of sending letters to the world, not knowing who will receive them or when. Every essay, every story, every hastily written note is an attempt to bridge the gap between internal experience and external expression.\n\nTonight, I'm adding another letter to the collection. This one is addressed to anyone who has ever started something they couldn't finish, who has ever had words they couldn't say. Consider this your letter too, your small act of completion in a world that often feels perpetually unfinished."
    },
    {
      "id": 3,
      "title": "The Archaeology of Memory",
      "excerpt": "Cleaning out my childhood home last weekend, I discovered that memory is not a file cabinet but an archaeological site. Each layer tells a different story about who we thought we were.",
      "date": "January 12, 2024", 
      "image": "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=800&h=400&fit=crop",
      "content": "Cleaning out my childhood home last weekend, I discovered that memory is not a file cabinet but an archaeological site. Each layer tells a different story about who we thought we were.\n\nIn the basement, I found a box labeled 'Important Papers' in my mother's careful handwriting. Inside: my elementary school report cards, a program from my high school graduation, and a letter I wrote to myself in seventh grade about what I wanted to be when I grew up. The handwriting is barely recognizable as my own.\n\nWhat struck me most was not what was preserved, but what was deemed worthy of preservation. Every family is its own civilization, creating its own artifacts, deciding what parts of the story deserve to survive.\n\nI spent hours in that basement, moving through layers of forgotten Christmas decorations and outgrown clothes, each box a different era of our family's evolution. Here was evidence of the phase when my sister played violin, the brief period when my father took up woodworking, the years when my mother collected ceramic elephants.\n\nThere's something both comforting and melancholy about this kind of excavation. These objects are proof that we existed, that we had enthusiasms and dreams that seemed important at the time. But they're also evidence of how much we forget, how quickly the passionate interests of one decade become the puzzling artifacts of the next.\n\nAs I loaded box after box into the donation truck, I realized I was participating in the ongoing project of deciding what matters, what gets kept, what gets released back into the world to become someone else's memories.\n\nPerhases this is what growing up really means – becoming the curator of your own life, learning to hold onto what serves you and let go of the rest with grace."
    },
    {
      "id": 4,
      "title": "Conversations with Strangers",
      "excerpt": "The woman sitting next to me on the train was reading a book I recognized. It was enough to start a conversation that would change how I think about human connection.",
      "date": "December 5, 2023",
      "image": "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=800&h=400&fit=crop", 
      "content": "The woman sitting next to me on the train was reading a book I recognized. It was enough to start a conversation that would change how I think about human connection.\n\n'How are you finding it?' I asked, nodding toward the book. She looked up, surprised but not annoyed, and we began what turned into a two-hour discussion about literature, travel, and the strange courage it takes to start over in middle age.\n\nShe was moving across the country for a job she wasn't sure she wanted, leaving behind a life that had become too small for the person she was becoming. I told her about my own recent decision to leave a career that looked successful from the outside but felt hollow from within.\n\nThere's something about conversations with strangers that allows for a different kind of honesty. Without the weight of ongoing relationships, we can admit things we might not say to people who know our history. We can be more purely ourselves, or perhaps more purely who we're trying to become.\n\nBy the time the train reached her stop, we had exchanged numbers and promised to stay in touch. We never did, and somehow that feels right. Some connections are meant to be temporary, perfect in their brevity.\n\nBut I think about that conversation often, especially when I'm feeling isolated in a world that seems increasingly designed to keep us separate. It reminds me that meaningful connection can happen anywhere, with anyone, if we're brave enough to acknowledge the humanity in the person sitting next to us.\n\nMaybe that's all any of us really want – to be seen, to be heard, to have someone recognize the book we're reading and ask us how we're finding it."
    }
  ],
  "site_info": {
    "title": "Reflections",
    "author": "Your Name", 
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