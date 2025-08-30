// Blog Data and State Management
let blogData = {
  posts: [
    {
      id: 1,
      title: "Starting My Daily Writing Journey",
      content: "Today marks the beginning of something I've been meaning to do for months – daily blogging. There's something powerful about committing to write every single day, not just when inspiration strikes or when I have something 'important' to say.\n\nThe idea isn't to create perfect posts every time. It's about developing the habit, sharpening the skill, and documenting the journey of life as it unfolds. Some days I'll write about technical discoveries, other days about random thoughts that pop into my head during my morning coffee.\n\nI've set up this blog to be my digital notebook – a place where I can dump thoughts, share learnings, and practice the craft of writing. If you're reading this, welcome to the journey. Let's see where daily writing takes us.\n\nThe goal is simple: one post, every day, no matter what. Some will be long, some short. Some profound, others mundane. But they'll all be genuine snapshots of whatever's on my mind that day.",
      excerpt: "Today marks the beginning of something I've been meaning to do for months – daily blogging. There's something powerful about committing to write every single day...",
      category: "Personal",
      publishDate: "2025-08-31",
      publishTime: "09:15",
      status: "published",
      likes: 23,
      views: 145,
      readTime: "2 min",
      tags: ["writing", "habits", "blogging"],
      featured: false
    },
    {
      id: 2,
      title: "The Magic of Small Wins",
      content: "Had an interesting conversation with a colleague today about motivation and progress. We were discussing why some projects feel impossible while others flow effortlessly, and it all came down to one thing: the frequency of small wins.\n\nWhen you're working on something massive – like learning a new programming language, writing a book, or building a complex application – the gap between starting and 'being done' feels enormous. It's easy to get lost in that void and lose momentum.\n\nBut when you break things down into tiny, achievable pieces, everything changes. Instead of 'learn React', it becomes 'set up a development environment today', 'create your first component tomorrow', 'add some styling the day after'. Each of these feels doable, and completing each one gives you a little dopamine hit.\n\nThis blog is actually my experiment in small wins. Instead of thinking 'I want to become a better writer' (massive, vague goal), I'm thinking 'I want to publish one post today' (small, concrete action). The compound effect of these daily small wins should, theoretically, lead to the bigger transformation I'm after.\n\nThe beautiful thing about small wins is they build on each other. Each success makes the next one feel more achievable. Momentum is a powerful force – both in physics and in life.",
      excerpt: "Had an interesting conversation with a colleague today about motivation and progress, and it all came down to one thing: the frequency of small wins...",
      category: "Productivity",
      publishDate: "2025-08-30",
      publishTime: "14:30",
      status: "published",
      likes: 41,
      views: 278,
      readTime: "3 min",
      tags: ["motivation", "productivity", "habits"],
      featured: true
    },
    {
      id: 3,
      title: "Coffee Shop Observations",
      content: "Writing this from my usual coffee shop corner. There's something about the ambient noise, the smell of fresh coffee, and the gentle buzz of conversations that makes this the perfect writing environment for me.\n\nI've been coming to this same spot for about six months now, and I've started recognizing the regulars. There's the guy who always orders a large americano and spreads financial documents across two tables. The woman who brings her own laptop charger because she knows the outlet situation. The group of students who meet every Tuesday to work on what appears to be a never-ending group project.\n\nIt's fascinating how we all create these little routines and claim our territories in shared spaces. This corner table has become 'mine' in some unofficial way, even though I have no actual claim to it. The baristas know my order (oat milk latte, no sugar), and I know theirs is the best coffee within a three-block radius.\n\nThere's something comforting about these small constants in an otherwise chaotic world. Maybe that's why coffee shops feel like such productive spaces – they provide just enough structure and familiarity to let creativity flow, without being so comfortable that you want to take a nap.\n\nAnyway, back to writing. This latte isn't going to drink itself.",
      excerpt: "Writing this from my usual coffee shop corner. There's something about the ambient noise and the smell of fresh coffee that makes this the perfect writing environment...",
      category: "Personal",
      publishDate: "2025-08-29",
      publishTime: "11:45",
      status: "published",
      likes: 18,
      views: 156,
      readTime: "2 min",
      tags: ["coffee", "writing", "observations"],
      featured: false
    },
    {
      id: 4,
      title: "The Problem with Perfectionism",
      content: "I almost didn't publish yesterday's post. I read it over probably fifteen times, tweaking sentences, second-guessing word choices, wondering if it was 'good enough' to put out into the world.\n\nThis is the perfectionist trap, and it's killed more creative projects than lack of inspiration ever has. The voice that says 'this isn't ready yet' or 'you need to do more research first' or 'maybe tomorrow's post will be better, so wait and publish that one instead.'\n\nBut here's what I've learned from actually shipping things: done is better than perfect. Not because we should accept low quality, but because perfectionism is often just fear dressed up as high standards.\n\nThe fear of judgment. The fear of not being expert enough. The fear of someone pointing out what you got wrong. These fears disguise themselves as a desire for excellence, but they're actually the enemy of progress.\n\nEvery published post, every shipped product, every completed project teaches you something that endless polishing never could. You learn from real feedback, from how people actually respond, from what works and what doesn't in the wild.\n\nSo this post isn't perfect either. I'm sure I could spend another hour editing it. But it's real, it's honest, and it's done. And that's enough.\n\nShip it.",
      excerpt: "I almost didn't publish yesterday's post. I read it over probably fifteen times, wondering if it was 'good enough' to put out into the world...",
      category: "Creativity",
      publishDate: "2025-08-28",
      publishTime: "16:20",
      status: "published",
      likes: 67,
      views: 423,
      readTime: "3 min",
      tags: ["perfectionism", "creativity", "fear"],
      featured: true
    },
    {
      id: 5,
      title: "Learning to Say No",
      content: "Got three different project requests this week. All interesting, all from people I like working with, all potentially profitable. A few months ago, I would have said yes to all of them and figured out the time management later.\n\nNow I'm learning the power of strategic nos.\n\nSaying no doesn't mean you don't want to help or that the opportunity isn't good. It means you understand that every yes is also a no to something else. When you say yes to that side project, you're saying no to focused time on your main goals. When you say yes to that networking event, you're saying no to an evening with family.\n\nThe hardest part isn't saying no to bad opportunities – those are easy to decline. The hardest part is saying no to good opportunities so you can say yes to the great ones.\n\nI'm still learning this balance. Still feeling the guilt that comes with disappointing people. Still wondering if I'm missing out on something important. But I'm also seeing the benefits: more focus, better work on the things I do commit to, and surprisingly, more respect from others.\n\nTurns out that when you're selective about what you say yes to, people value your yes more highly. Who knew?",
      excerpt: "Got three different project requests this week. A few months ago, I would have said yes to all of them and figured out the time management later...",
      category: "Productivity",
      publishDate: "2025-08-27",
      publishTime: "10:15",
      status: "published",
      likes: 34,
      views: 267,
      readTime: "2 min",
      tags: ["boundaries", "productivity", "decisions"],
      featured: false
    },
    {
      id: 6,
      title: "The Weird Thing About Consistency",
      content: "Day six of daily blogging, and something weird is happening. It's getting easier and harder at the same time.\n\nEasier because the routine is forming. I have my coffee shop, my usual writing time, my process. The blank page doesn't feel as intimidating because I know I've filled it before and I can fill it again.\n\nBut harder because the novelty is wearing off. The initial excitement of 'I'm doing this!' is fading, and now it's just... something I do. Like brushing your teeth or checking email. Necessary, but not thrilling.\n\nThis is where most habits die – in the valley between initial enthusiasm and established routine. It's not difficult enough to be obviously challenging, but it's not automatic enough to be effortless. It just... is.\n\nI think this is actually the most important phase. Anyone can be motivated for a few days. But can you keep going when motivation fades and you're running purely on commitment? Can you do the thing when you don't feel like doing the thing?\n\nThat's where the real growth happens. Not in the highlight moments when you're fired up and ready to conquer the world, but in the mundane Tuesday mornings when you sit down to write and have absolutely nothing interesting to say.\n\nLike today, for instance. Yet here we are, 200+ words later, and somehow I found something after all.",
      excerpt: "Day six of daily blogging, and something weird is happening. It's getting easier and harder at the same time...",
      category: "Personal",
      publishDate: "2025-08-26",
      publishTime: "08:45",
      status: "published",
      likes: 29,
      views: 198,
      readTime: "2 min",
      tags: ["consistency", "habits", "growth"],
      featured: false
    },
    {
      id: 7,
      title: "Draft: Ideas for Tomorrow",
      content: "Some thoughts I'm mulling over for future posts:\n\n- The psychology of todo lists (why do we love making them more than completing them?)\n- Why good ideas come in the shower (and other inconvenient places)\n- The art of asking better questions\n- What I learned from deleting social media for a month\n- The compound effect of reading 20 minutes daily\n\nThis is more of a brain dump than a coherent post. Sometimes you need to capture the ideas before they disappear, even if they're not ready to be fully developed yet.\n\nMaybe that's tomorrow's post – the importance of capturing half-formed thoughts.",
      excerpt: "Some thoughts I'm mulling over for future posts: The psychology of todo lists, why good ideas come in the shower...",
      category: "Meta",
      publishDate: "2025-08-31",
      publishTime: "20:30",
      status: "draft",
      likes: 0,
      views: 0,
      readTime: "1 min",
      tags: ["ideas", "planning", "meta"],
      featured: false
    }
  ],
  comments: [
    {
      postId: 2,
      id: 1,
      author: "Sarah M.",
      content: "This really resonates with me! I've been struggling with a big project at work and breaking it down into smaller pieces makes so much sense.",
      date: "2025-08-30",
      time: "15:45",
      replies: [
        {
          id: 2,
          author: "Blog Author",
          content: "Exactly! The psychological barrier is so much lower when you're just trying to do one small thing. Hope it helps with your project!",
          date: "2025-08-30",
          time: "16:20"
        }
      ]
    },
    {
      postId: 4,
      id: 3,
      author: "Mike R.",
      content: "\"Ship it\" - love that mentality. I needed to read this today.",
      date: "2025-08-28",
      time: "17:30",
      replies: []
    }
  ],
  categories: ["Personal", "Productivity", "Creativity", "Tech", "Meta", "Books", "Travel"],
  analytics: {
    totalPosts: 7,
    publishedPosts: 6,
    draftPosts: 1,
    totalViews: 1467,
    totalLikes: 212,
    avgViewsPerPost: 244,
    postsThisWeek: 6,
    topCategory: "Personal"
  }
};

// Application State
let appState = {
  currentView: 'blogFeed',
  currentPost: null,
  editingPost: null,
  currentFilter: '',
  searchQuery: '',
  theme: 'light',
  isAutosaving: false,
  lastAutosave: null
};

// Initialize the application
document.addEventListener('DOMContentLoaded', function() {
  console.log('Blog app initializing...');
  
  try {
    loadFromStorage();
    initializeTheme();
    setupEventListeners();
    renderBlogFeed();
    updateStats();
    renderSidebar();
    setupAutosave();
    
    console.log('Blog app initialized successfully');
  } catch (error) {
    console.error('Error initializing blog app:', error);
  }
});

// Theme Management
function initializeTheme() {
  const savedTheme = localStorage.getItem('blogTheme');
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  
  if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
    setTheme('dark');
  } else {
    setTheme('light');
  }
}

function setTheme(theme) {
  appState.theme = theme;
  document.documentElement.setAttribute('data-color-scheme', theme);
  
  const themeIcon = document.querySelector('.theme-icon');
  if (themeIcon) {
    themeIcon.textContent = theme === 'dark' ? '☀️' : '🌙';
  }
  
  localStorage.setItem('blogTheme', theme);
}

function toggleTheme() {
  const newTheme = appState.theme === 'dark' ? 'light' : 'dark';
  setTheme(newTheme);
  showToast('Theme switched to ' + newTheme + ' mode');
}

// Event Listeners
function setupEventListeners() {
  try {
    // Theme toggle
    const themeToggle = document.getElementById('themeToggle');
    if (themeToggle) {
      themeToggle.addEventListener('click', toggleTheme);
    }
    
    // Navigation
    const newPostBtn = document.getElementById('newPostBtn');
    if (newPostBtn) {
      newPostBtn.addEventListener('click', showNewPostEditor);
    }
    
    const dashboardBtn = document.getElementById('dashboardBtn');
    if (dashboardBtn) {
      dashboardBtn.addEventListener('click', () => showView('dashboard'));
    }
    
    const menuToggle = document.getElementById('menuToggle');
    if (menuToggle) {
      menuToggle.addEventListener('click', toggleMobileMenu);
    }
    
    // Editor actions
    const saveDraftBtn = document.getElementById('saveDraftBtn');
    if (saveDraftBtn) {
      saveDraftBtn.addEventListener('click', saveDraft);
    }
    
    const publishBtn = document.getElementById('publishBtn');
    if (publishBtn) {
      publishBtn.addEventListener('click', publishPost);
    }
    
    const cancelEditBtn = document.getElementById('cancelEditBtn');
    if (cancelEditBtn) {
      cancelEditBtn.addEventListener('click', cancelEdit);
    }
    
    // Dashboard actions
    const dashboardNewPostBtn = document.getElementById('dashboardNewPostBtn');
    if (dashboardNewPostBtn) {
      dashboardNewPostBtn.addEventListener('click', showNewPostEditor);
    }
    
    const backToFeedBtn = document.getElementById('backToFeedBtn');
    if (backToFeedBtn) {
      backToFeedBtn.addEventListener('click', () => showView('blogFeed'));
    }
    
    // Mobile menu actions
    const mobileNewPost = document.getElementById('mobileNewPost');
    if (mobileNewPost) {
      mobileNewPost.addEventListener('click', () => {
        toggleMobileMenu();
        showNewPostEditor();
      });
    }
    
    const mobileDashboard = document.getElementById('mobileDashboard');
    if (mobileDashboard) {
      mobileDashboard.addEventListener('click', () => {
        toggleMobileMenu();
        showView('dashboard');
      });
    }
    
    // Search
    const searchInput = document.getElementById('searchInput');
    if (searchInput) {
      searchInput.addEventListener('input', handleSearch);
    }
    
    const searchBtn = document.getElementById('searchBtn');
    if (searchBtn) {
      searchBtn.addEventListener('click', handleSearchClick);
    }
    
    // Filter buttons
    const categoryFilters = document.getElementById('categoryFilters');
    if (categoryFilters) {
      categoryFilters.addEventListener('click', handleFilterClick);
    }
    
    // Editor features
    const postContentInput = document.getElementById('postContentInput');
    if (postContentInput) {
      postContentInput.addEventListener('input', updatePreview);
      postContentInput.addEventListener('input', updateWordCount);
    }
    
    const postTitleInput = document.getElementById('postTitleInput');
    if (postTitleInput) {
      postTitleInput.addEventListener('input', updatePreview);
    }
    
    // Toolbar buttons
    const editorToolbar = document.querySelector('.editor-toolbar');
    if (editorToolbar) {
      editorToolbar.addEventListener('click', handleToolbarAction);
    }
    
    // Reading progress and keyboard shortcuts
    window.addEventListener('scroll', updateReadingProgress);
    document.addEventListener('keydown', handleKeyboardShortcuts);
    
    console.log('Event listeners setup complete');
  } catch (error) {
    console.error('Error setting up event listeners:', error);
  }
}

// View Management
function showView(viewName) {
  try {
    console.log('Switching to view:', viewName);
    
    // Hide all views
    const views = document.querySelectorAll('.view');
    views.forEach(view => {
      view.classList.remove('active');
    });
    
    // Show selected view
    const targetView = document.getElementById(viewName + 'View');
    if (targetView) {
      targetView.classList.add('active');
      appState.currentView = viewName;
      
      // Update view-specific content
      switch (viewName) {
        case 'blogFeed':
          renderBlogFeed();
          updateStats();
          renderSidebar();
          break;
        case 'dashboard':
          renderDashboard();
          break;
        case 'postEditor':
          // Content is set up when calling showNewPostEditor or editPost
          break;
        case 'postDetail':
          renderPostDetail();
          break;
      }
    } else {
      console.error('View not found:', viewName + 'View');
    }
  } catch (error) {
    console.error('Error showing view:', error);
  }
}

// Blog Feed Rendering
function renderBlogFeed() {
  try {
    const postsGrid = document.getElementById('postsGrid');
    if (!postsGrid) return;
    
    const filteredPosts = getFilteredPosts();
    
    if (filteredPosts.length === 0) {
      postsGrid.innerHTML = `
        <div class="no-posts" style="text-align: center; padding: 2rem;">
          <h3>No posts found</h3>
          <p>Try adjusting your search or filter criteria.</p>
          <button class="btn btn--primary" onclick="showNewPostEditor()">Write your first post</button>
        </div>
      `;
      return;
    }
    
    postsGrid.innerHTML = filteredPosts.map(post => `
      <article class="post-card ${post.featured ? 'featured' : ''} ${post.status === 'draft' ? 'draft' : ''}" 
               data-post-id="${post.id}">
        <div class="post-header">
          <div class="post-meta">
            <span class="post-status ${post.status}">${post.status}</span>
            ${post.featured ? '<span class="post-status featured">featured</span>' : ''}
            <span class="post-date">${formatDate(post.publishDate)}</span>
          </div>
          <h2 class="post-title" onclick="openPost(${post.id})" style="cursor: pointer;">${post.title}</h2>
          <p class="post-excerpt">${post.excerpt}</p>
        </div>
        <div class="post-body">
          <div class="post-tags">
            ${post.tags.map(tag => `<span class="post-tag">${tag}</span>`).join('')}
          </div>
          <div class="post-footer">
            <div class="post-stats">
              <span class="post-stat">
                <span>👁️</span>
                <span>${post.views}</span>
              </span>
              <span class="post-stat">
                <span>❤️</span>
                <span>${post.likes}</span>
              </span>
              <span class="post-stat">
                <span>⏱️</span>
                <span>${post.readTime}</span>
              </span>
            </div>
            <div class="post-actions">
              <button class="like-btn ${isPostLiked(post.id) ? 'liked' : ''}" 
                      onclick="toggleLike(${post.id}, event)">
                <span>${isPostLiked(post.id) ? '❤️' : '🤍'}</span>
                <span>${post.likes}</span>
              </button>
            </div>
          </div>
        </div>
      </article>
    `).join('');
    
    console.log('Blog feed rendered with', filteredPosts.length, 'posts');
  } catch (error) {
    console.error('Error rendering blog feed:', error);
  }
}

// Post Editor
function showNewPostEditor() {
  try {
    console.log('Showing new post editor');
    
    appState.editingPost = null;
    
    // Update editor elements
    const editorTitle = document.getElementById('editorTitle');
    if (editorTitle) editorTitle.textContent = 'Create New Post';
    
    const postTitleInput = document.getElementById('postTitleInput');
    if (postTitleInput) postTitleInput.value = '';
    
    const postContentInput = document.getElementById('postContentInput');
    if (postContentInput) postContentInput.value = '';
    
    const postCategory = document.getElementById('postCategory');
    if (postCategory) postCategory.value = 'Personal';
    
    const postTags = document.getElementById('postTags');
    if (postTags) postTags.value = '';
    
    updatePreview();
    updateWordCount();
    showView('postEditor');
  } catch (error) {
    console.error('Error showing new post editor:', error);
  }
}

function editPost(postId) {
  try {
    const post = blogData.posts.find(p => p.id === postId);
    if (!post) return;
    
    appState.editingPost = post;
    
    const editorTitle = document.getElementById('editorTitle');
    if (editorTitle) editorTitle.textContent = 'Edit Post';
    
    const postTitleInput = document.getElementById('postTitleInput');
    if (postTitleInput) postTitleInput.value = post.title;
    
    const postContentInput = document.getElementById('postContentInput');
    if (postContentInput) postContentInput.value = post.content;
    
    const postCategory = document.getElementById('postCategory');
    if (postCategory) postCategory.value = post.category;
    
    const postTags = document.getElementById('postTags');
    if (postTags) postTags.value = post.tags.join(', ');
    
    updatePreview();
    updateWordCount();
    showView('postEditor');
  } catch (error) {
    console.error('Error editing post:', error);
  }
}

function updatePreview() {
  try {
    const titleInput = document.getElementById('postTitleInput');
    const contentInput = document.getElementById('postContentInput');
    const previewContent = document.getElementById('previewContent');
    
    if (!titleInput || !contentInput || !previewContent) return;
    
    const title = titleInput.value;
    const content = contentInput.value;
    
    if (!title && !content) {
      previewContent.innerHTML = '<p class="placeholder-text">Your post preview will appear here as you type...</p>';
      return;
    }
    
    let html = '';
    if (title) {
      html += `<h1>${escapeHtml(title)}</h1>`;
    }
    
    if (content) {
      const paragraphs = content.split('\n\n').filter(p => p.trim());
      html += paragraphs.map(p => `<p>${escapeHtml(p.trim()).replace(/\n/g, '<br>')}</p>`).join('');
    }
    
    previewContent.innerHTML = html;
  } catch (error) {
    console.error('Error updating preview:', error);
  }
}

function updateWordCount() {
  try {
    const contentInput = document.getElementById('postContentInput');
    const wordCountEl = document.getElementById('wordCount');
    const charCountEl = document.getElementById('charCount');
    
    if (!contentInput || !wordCountEl || !charCountEl) return;
    
    const content = contentInput.value;
    const words = content.trim() ? content.trim().split(/\s+/).length : 0;
    const chars = content.length;
    
    wordCountEl.textContent = words;
    charCountEl.textContent = chars;
  } catch (error) {
    console.error('Error updating word count:', error);
  }
}

function saveDraft() {
  try {
    const postData = getPostFormData();
    if (!postData.title.trim()) {
      showToast('Please enter a title for your post');
      return;
    }
    
    postData.status = 'draft';
    
    showLoading();
    
    setTimeout(() => {
      if (appState.editingPost) {
        updatePost(appState.editingPost.id, postData);
      } else {
        createPost(postData);
      }
      
      hideLoading();
      showToast('Draft saved successfully!');
      showView('blogFeed');
    }, 500);
  } catch (error) {
    console.error('Error saving draft:', error);
    hideLoading();
    showToast('Error saving draft');
  }
}

function publishPost() {
  try {
    const postData = getPostFormData();
    if (!postData.title.trim() || !postData.content.trim()) {
      showToast('Please enter both title and content for your post');
      return;
    }
    
    postData.status = 'published';
    postData.publishDate = getCurrentDate();
    postData.publishTime = getCurrentTime();
    
    showLoading();
    
    setTimeout(() => {
      if (appState.editingPost) {
        updatePost(appState.editingPost.id, postData);
      } else {
        createPost(postData);
        
        // Simulate some initial engagement
        setTimeout(() => {
          const newPost = blogData.posts.find(p => p.title === postData.title);
          if (newPost) {
            newPost.views = Math.floor(Math.random() * 20) + 5;
            newPost.likes = Math.floor(Math.random() * 10) + 1;
            saveToStorage();
            updateStats();
            renderBlogFeed();
          }
        }, 1000);
      }
      
      hideLoading();
      showToast('Post published successfully! 🎉');
      showView('blogFeed');
    }, 800);
  } catch (error) {
    console.error('Error publishing post:', error);
    hideLoading();
    showToast('Error publishing post');
  }
}

function cancelEdit() {
  if (confirm('Are you sure you want to cancel? Any unsaved changes will be lost.')) {
    showView('blogFeed');
  }
}

function getPostFormData() {
  const titleInput = document.getElementById('postTitleInput');
  const contentInput = document.getElementById('postContentInput');
  const categoryInput = document.getElementById('postCategory');
  const tagsInput = document.getElementById('postTags');
  
  const title = titleInput ? titleInput.value.trim() : '';
  const content = contentInput ? contentInput.value.trim() : '';
  const category = categoryInput ? categoryInput.value : 'Personal';
  const tags = tagsInput ? tagsInput.value
    .split(',')
    .map(tag => tag.trim())
    .filter(tag => tag) : [];
  
  const wordCount = content.split(/\s+/).length;
  const readTime = Math.max(1, Math.ceil(wordCount / 200)) + ' min';
  
  return {
    title,
    content,
    category,
    tags,
    excerpt: content.substring(0, 150) + (content.length > 150 ? '...' : ''),
    readTime,
    views: 0,
    likes: 0,
    featured: false
  };
}

function createPost(postData) {
  const newPost = {
    id: Date.now(),
    ...postData,
    publishDate: getCurrentDate(),
    publishTime: getCurrentTime()
  };
  
  blogData.posts.unshift(newPost);
  updateAnalytics();
  saveToStorage();
  renderBlogFeed();
  updateStats();
}

function updatePost(postId, postData) {
  const index = blogData.posts.findIndex(p => p.id === postId);
  if (index !== -1) {
    blogData.posts[index] = { ...blogData.posts[index], ...postData };
    updateAnalytics();
    saveToStorage();
    renderBlogFeed();
    updateStats();
  }
}

function deletePost(postId) {
  if (confirm('Are you sure you want to delete this post? This action cannot be undone.')) {
    blogData.posts = blogData.posts.filter(p => p.id !== postId);
    updateAnalytics();
    saveToStorage();
    renderBlogFeed();
    if (appState.currentView === 'dashboard') {
      renderDashboard();
    }
    updateStats();
    showToast('Post deleted successfully');
  }
}

// Dashboard
function renderDashboard() {
  try {
    renderPostsManagement();
    renderDraftsList();
    updateDashboardStats();
  } catch (error) {
    console.error('Error rendering dashboard:', error);
  }
}

function renderPostsManagement() {
  const postsManagement = document.getElementById('postsManagement');
  if (!postsManagement) return;
  
  const publishedPosts = blogData.posts.filter(p => p.status === 'published');
  
  postsManagement.innerHTML = `
    <div class="management-header">
      <div>Title</div>
      <div>Category</div>
      <div class="col-views">Views</div>
      <div class="col-likes">Likes</div>
      <div>Actions</div>
    </div>
    ${publishedPosts.map(post => `
      <div class="management-row">
        <div>${post.title}</div>
        <div>${post.category}</div>
        <div class="row-views">${post.views}</div>
        <div class="row-likes">${post.likes}</div>
        <div class="management-actions">
          <button class="action-btn edit" onclick="editPost(${post.id})">Edit</button>
          <button class="action-btn delete" onclick="deletePost(${post.id})">Delete</button>
        </div>
      </div>
    `).join('')}
  `;
}

function renderDraftsList() {
  const draftsList = document.getElementById('draftsList');
  if (!draftsList) return;
  
  const drafts = blogData.posts.filter(p => p.status === 'draft');
  
  if (drafts.length === 0) {
    draftsList.innerHTML = '<p class="text-muted">No drafts found.</p>';
    return;
  }
  
  draftsList.innerHTML = drafts.map(draft => `
    <div class="post-card draft" onclick="editPost(${draft.id})" style="cursor: pointer;">
      <div class="post-header">
        <div class="post-meta">
          <span class="post-status draft">draft</span>
          <span class="post-date">${formatDate(draft.publishDate)}</span>
        </div>
        <h3 class="post-title">${draft.title}</h3>
        <p class="post-excerpt">${draft.excerpt}</p>
      </div>
    </div>
  `).join('');
}

function updateDashboardStats() {
  const postsThisWeek = document.getElementById('postsThisWeek');
  const avgViews = document.getElementById('avgViews');
  const topCategory = document.getElementById('topCategory');
  const lastActivity = document.getElementById('lastActivity');
  
  if (postsThisWeek) postsThisWeek.textContent = blogData.analytics.postsThisWeek;
  if (avgViews) avgViews.textContent = blogData.analytics.avgViewsPerPost;
  if (topCategory) topCategory.textContent = blogData.analytics.topCategory;
  if (lastActivity) lastActivity.textContent = '2 hours ago';
}

// Post Detail View
function openPost(postId) {
  try {
    const post = blogData.posts.find(p => p.id === postId);
    if (!post) return;
    
    appState.currentPost = post;
    
    // Increment views
    post.views++;
    saveToStorage();
    updateStats();
    
    renderPostDetail();
    showView('postDetail');
    
    // Reset scroll position
    window.scrollTo(0, 0);
  } catch (error) {
    console.error('Error opening post:', error);
  }
}

function renderPostDetail() {
  try {
    const postDetail = document.getElementById('postDetail');
    if (!postDetail || !appState.currentPost) return;
    
    const post = appState.currentPost;
    const postComments = blogData.comments.filter(c => c.postId === post.id);
    
    postDetail.innerHTML = `
      <div class="post-detail-header">
        <h1 class="post-detail-title">${post.title}</h1>
        <div class="post-detail-meta">
          <span>${formatDate(post.publishDate)}</span>
          <span>${post.category}</span>
          <span>${post.readTime}</span>
        </div>
        <div class="post-tags">
          ${post.tags.map(tag => `<span class="post-tag">${tag}</span>`).join('')}
        </div>
      </div>
      
      <div class="post-detail-content">
        ${post.content.split('\n\n').map(p => `<p>${p.trim()}</p>`).join('')}
      </div>
      
      <div class="post-detail-footer">
        <div class="post-interactions">
          <button class="interaction-btn ${isPostLiked(post.id) ? 'liked' : ''}" 
                  onclick="toggleLikeDetail(${post.id})">
            <span>${isPostLiked(post.id) ? '❤️' : '🤍'}</span>
            <span>${post.likes} Likes</span>
          </button>
          <button class="interaction-btn" onclick="scrollToComments()">
            <span>💬</span>
            <span>${postComments.length} Comments</span>
          </button>
          <button class="interaction-btn" onclick="sharePost(${post.id})">
            <span>📤</span>
            <span>Share</span>
          </button>
        </div>
        
        <div class="comments-section" id="commentsSection">
          <div class="comments-header">
            <h3>Comments (${postComments.length})</h3>
          </div>
          
          <div class="comment-form">
            <textarea id="newCommentText" placeholder="Write a comment..." rows="3"></textarea>
            <button class="btn btn--primary" onclick="addComment(${post.id})">Post Comment</button>
          </div>
          
          <div class="comments-list">
            ${renderComments(postComments)}
          </div>
        </div>
      </div>
      
      <div style="text-align: center; margin-top: 2rem;">
        <button class="btn btn--secondary" onclick="showView('blogFeed')">← Back to Blog</button>
      </div>
    `;
  } catch (error) {
    console.error('Error rendering post detail:', error);
  }
}

function renderComments(comments) {
  if (comments.length === 0) {
    return '<p class="text-muted">No comments yet. Be the first to comment!</p>';
  }
  
  return comments.map(comment => `
    <div class="comment">
      <div class="comment-header">
        <span class="comment-author">${comment.author}</span>
        <span class="comment-date">${formatDate(comment.date)} at ${comment.time}</span>
      </div>
      <div class="comment-content">${comment.content}</div>
      <div class="comment-actions">
        <button class="comment-action">Reply</button>
        <button class="comment-action">Like</button>
      </div>
      ${comment.replies && comment.replies.length > 0 ? `
        <div style="margin-left: 2rem; margin-top: 1rem;">
          ${comment.replies.map(reply => `
            <div class="comment">
              <div class="comment-header">
                <span class="comment-author">${reply.author}</span>
                <span class="comment-date">${formatDate(reply.date)} at ${reply.time}</span>
              </div>
              <div class="comment-content">${reply.content}</div>
            </div>
          `).join('')}
        </div>
      ` : ''}
    </div>
  `).join('');
}

// Interactions
function toggleLike(postId, event) {
  try {
    event.stopPropagation();
    const post = blogData.posts.find(p => p.id === postId);
    if (!post) return;
    
    const likedPosts = JSON.parse(localStorage.getItem('likedPosts') || '[]');
    const isLiked = likedPosts.includes(postId);
    
    if (isLiked) {
      post.likes = Math.max(0, post.likes - 1);
      likedPosts.splice(likedPosts.indexOf(postId), 1);
    } else {
      post.likes += 1;
      likedPosts.push(postId);
    }
    
    localStorage.setItem('likedPosts', JSON.stringify(likedPosts));
    saveToStorage();
    renderBlogFeed();
    updateStats();
  } catch (error) {
    console.error('Error toggling like:', error);
  }
}

function toggleLikeDetail(postId) {
  toggleLike(postId, { stopPropagation: () => {} });
  renderPostDetail();
}

function isPostLiked(postId) {
  const likedPosts = JSON.parse(localStorage.getItem('likedPosts') || '[]');
  return likedPosts.includes(postId);
}

function addComment(postId) {
  try {
    const commentTextEl = document.getElementById('newCommentText');
    if (!commentTextEl) return;
    
    const commentText = commentTextEl.value.trim();
    if (!commentText) return;
    
    const newComment = {
      postId,
      id: Date.now(),
      author: 'Anonymous Reader',
      content: commentText,
      date: getCurrentDate(),
      time: getCurrentTime(),
      replies: []
    };
    
    blogData.comments.push(newComment);
    saveToStorage();
    
    commentTextEl.value = '';
    renderPostDetail();
    showToast('Comment added successfully!');
  } catch (error) {
    console.error('Error adding comment:', error);
  }
}

function sharePost(postId) {
  try {
    const post = blogData.posts.find(p => p.id === postId);
    if (!post) return;
    
    if (navigator.share) {
      navigator.share({
        title: post.title,
        text: post.excerpt,
        url: window.location.href
      });
    } else {
      navigator.clipboard.writeText(window.location.href);
      showToast('Post link copied to clipboard!');
    }
  } catch (error) {
    console.error('Error sharing post:', error);
    showToast('Post link copied to clipboard!');
  }
}

// Search and Filter
function handleSearch(event) {
  try {
    appState.searchQuery = event.target.value.toLowerCase();
    renderBlogFeed();
  } catch (error) {
    console.error('Error handling search:', error);
  }
}

function handleSearchClick() {
  const searchInput = document.getElementById('searchInput');
  if (searchInput && searchInput.value.trim()) {
    handleSearch({ target: searchInput });
  }
}

function handleFilterClick(event) {
  try {
    if (!event.target.classList.contains('filter-btn')) return;
    
    // Update active filter
    const filterBtns = document.querySelectorAll('.filter-btn');
    filterBtns.forEach(btn => btn.classList.remove('active'));
    event.target.classList.add('active');
    
    appState.currentFilter = event.target.dataset.category || '';
    renderBlogFeed();
  } catch (error) {
    console.error('Error handling filter click:', error);
  }
}

function getFilteredPosts() {
  let posts = [...blogData.posts];
  
  // Apply category filter
  if (appState.currentFilter) {
    posts = posts.filter(post => post.category === appState.currentFilter);
  }
  
  // Apply search filter
  if (appState.searchQuery) {
    posts = posts.filter(post => 
      post.title.toLowerCase().includes(appState.searchQuery) ||
      post.content.toLowerCase().includes(appState.searchQuery) ||
      post.excerpt.toLowerCase().includes(appState.searchQuery) ||
      post.tags.some(tag => tag.toLowerCase().includes(appState.searchQuery))
    );
  }
  
  return posts;
}

// Sidebar
function renderSidebar() {
  try {
    renderPopularPosts();
    renderCategories();
    renderArchive();
  } catch (error) {
    console.error('Error rendering sidebar:', error);
  }
}

function renderPopularPosts() {
  const popularPosts = document.getElementById('popularPosts');
  if (!popularPosts) return;
  
  const sortedPosts = [...blogData.posts]
    .filter(p => p.status === 'published')
    .sort((a, b) => b.views - a.views)
    .slice(0, 5);
  
  popularPosts.innerHTML = sortedPosts.map(post => `
    <div class="popular-post" onclick="openPost(${post.id})" style="cursor: pointer;">
      <div class="popular-post-title">${post.title}</div>
      <div class="popular-post-stats">${post.views} views • ${post.likes} likes</div>
    </div>
  `).join('');
}

function renderCategories() {
  const categoriesList = document.getElementById('categoriesList');
  if (!categoriesList) return;
  
  const categoryCounts = {};
  blogData.posts.filter(p => p.status === 'published').forEach(post => {
    categoryCounts[post.category] = (categoryCounts[post.category] || 0) + 1;
  });
  
  categoriesList.innerHTML = Object.entries(categoryCounts)
    .sort(([,a], [,b]) => b - a)
    .map(([category, count]) => `
      <div class="category-item" onclick="filterByCategory('${category}')" style="cursor: pointer;">
        <span>${category}</span>
        <span class="category-count">${count}</span>
      </div>
    `).join('');
}

function renderArchive() {
  const archiveList = document.getElementById('archiveList');
  if (!archiveList) return;
  
  const months = {};
  blogData.posts.filter(p => p.status === 'published').forEach(post => {
    const date = new Date(post.publishDate);
    const monthYear = date.toLocaleDateString('en-US', { year: 'numeric', month: 'long' });
    months[monthYear] = (months[monthYear] || 0) + 1;
  });
  
  archiveList.innerHTML = Object.entries(months)
    .sort(([a], [b]) => new Date(b) - new Date(a))
    .slice(0, 6)
    .map(([month, count]) => `
      <div class="archive-item">
        <span>${month}</span>
        <span class="archive-count">${count}</span>
      </div>
    `).join('');
}

function filterByCategory(category) {
  try {
    appState.currentFilter = category;
    
    // Update active filter button
    const filterBtns = document.querySelectorAll('.filter-btn');
    filterBtns.forEach(btn => {
      btn.classList.toggle('active', btn.dataset.category === category);
    });
    
    renderBlogFeed();
    showView('blogFeed');
  } catch (error) {
    console.error('Error filtering by category:', error);
  }
}

// Statistics and Analytics
function updateStats() {
  try {
    const publishedPosts = blogData.posts.filter(p => p.status === 'published');
    const draftPosts = blogData.posts.filter(p => p.status === 'draft');
    
    blogData.analytics = {
      totalPosts: blogData.posts.length,
      publishedPosts: publishedPosts.length,
      draftPosts: draftPosts.length,
      totalViews: publishedPosts.reduce((sum, post) => sum + post.views, 0),
      totalLikes: publishedPosts.reduce((sum, post) => sum + post.likes, 0),
      avgViewsPerPost: Math.round(publishedPosts.reduce((sum, post) => sum + post.views, 0) / Math.max(1, publishedPosts.length)),
      postsThisWeek: publishedPosts.filter(p => isThisWeek(p.publishDate)).length,
      topCategory: getTopCategory()
    };
    
    // Update stats display
    const elements = {
      totalPosts: blogData.analytics.publishedPosts,
      totalViews: blogData.analytics.totalViews,
      totalLikes: blogData.analytics.totalLikes,
      draftCount: blogData.analytics.draftPosts,
      mobilePostCount: blogData.analytics.publishedPosts,
      mobileViewCount: blogData.analytics.totalViews
    };
    
    Object.entries(elements).forEach(([id, value]) => {
      const element = document.getElementById(id);
      if (element) {
        element.textContent = value.toLocaleString();
      }
    });
  } catch (error) {
    console.error('Error updating stats:', error);
  }
}

function updateAnalytics() {
  updateStats();
  saveToStorage();
}

function getTopCategory() {
  const categoryCounts = {};
  blogData.posts.filter(p => p.status === 'published').forEach(post => {
    categoryCounts[post.category] = (categoryCounts[post.category] || 0) + 1;
  });
  
  return Object.entries(categoryCounts).sort(([,a], [,b]) => b - a)[0]?.[0] || 'Personal';
}

function isThisWeek(dateString) {
  const postDate = new Date(dateString);
  const now = new Date();
  const weekAgo = new Date(now.getTime() - 7 * 24 * 60 * 60 * 1000);
  return postDate >= weekAgo && postDate <= now;
}

// Auto-save functionality
function setupAutosave() {
  try {
    const contentInput = document.getElementById('postContentInput');
    const titleInput = document.getElementById('postTitleInput');
    
    if (contentInput && titleInput) {
      let autosaveTimeout;
      
      const triggerAutosave = () => {
        clearTimeout(autosaveTimeout);
        autosaveTimeout = setTimeout(() => {
          if (titleInput.value.trim() || contentInput.value.trim()) {
            autosave();
          }
        }, 5000); // Auto-save after 5 seconds of inactivity
      };
      
      contentInput.addEventListener('input', triggerAutosave);
      titleInput.addEventListener('input', triggerAutosave);
    }
  } catch (error) {
    console.error('Error setting up autosave:', error);
  }
}

function autosave() {
  try {
    const titleInput = document.getElementById('postTitleInput');
    const contentInput = document.getElementById('postContentInput');
    const categoryInput = document.getElementById('postCategory');
    const tagsInput = document.getElementById('postTags');
    
    if (!titleInput || !contentInput) return;
    
    const title = titleInput.value.trim();
    const content = contentInput.value.trim();
    
    if (!title && !content) return;
    
    const autosaveData = {
      title,
      content,
      category: categoryInput ? categoryInput.value : 'Personal',
      tags: tagsInput ? tagsInput.value : '',
      timestamp: Date.now()
    };
    
    localStorage.setItem('autosave', JSON.stringify(autosaveData));
    appState.lastAutosave = new Date();
  } catch (error) {
    console.error('Error autosaving:', error);
  }
}

// Toolbar actions
function handleToolbarAction(event) {
  try {
    if (!event.target.classList.contains('toolbar-btn')) return;
    
    const action = event.target.dataset.action;
    const textarea = document.getElementById('postContentInput');
    if (!textarea) return;
    
    const start = textarea.selectionStart;
    const end = textarea.selectionEnd;
    const selectedText = textarea.value.substring(start, end);
    
    let replacement = '';
    
    switch (action) {
      case 'bold':
        replacement = `**${selectedText || 'bold text'}**`;
        break;
      case 'italic':
        replacement = `*${selectedText || 'italic text'}*`;
        break;
      case 'link':
        const url = prompt('Enter URL:') || '#';
        replacement = `[${selectedText || 'link text'}](${url})`;
        break;
      case 'quote':
        replacement = `> ${selectedText || 'quote text'}`;
        break;
    }
    
    if (replacement) {
      textarea.value = textarea.value.substring(0, start) + replacement + textarea.value.substring(end);
      textarea.focus();
      updatePreview();
      updateWordCount();
    }
  } catch (error) {
    console.error('Error handling toolbar action:', error);
  }
}

// Mobile menu
function toggleMobileMenu() {
  try {
    const mobileMenu = document.getElementById('mobileMenu');
    const menuToggle = document.getElementById('menuToggle');
    
    if (mobileMenu && menuToggle) {
      mobileMenu.classList.toggle('active');
      menuToggle.classList.toggle('active');
    }
  } catch (error) {
    console.error('Error toggling mobile menu:', error);
  }
}

// Reading progress
function updateReadingProgress() {
  try {
    if (appState.currentView !== 'postDetail') {
      const progressBar = document.getElementById('readingProgress');
      if (progressBar) progressBar.classList.remove('visible');
      return;
    }
    
    const progressBar = document.getElementById('readingProgress');
    const progressFill = document.getElementById('readingProgressBar');
    
    if (!progressBar || !progressFill) return;
    
    const windowHeight = window.innerHeight;
    const documentHeight = document.documentElement.scrollHeight - windowHeight;
    const scrollTop = window.pageYOffset;
    
    const progress = (scrollTop / documentHeight) * 100;
    
    if (progress > 0) {
      progressBar.classList.add('visible');
      progressFill.style.width = Math.min(100, Math.max(0, progress)) + '%';
    } else {
      progressBar.classList.remove('visible');
    }
  } catch (error) {
    console.error('Error updating reading progress:', error);
  }
}

// Keyboard shortcuts
function handleKeyboardShortcuts(event) {
  try {
    // Ctrl+S to save draft
    if (event.ctrlKey && event.key === 's' && appState.currentView === 'postEditor') {
      event.preventDefault();
      saveDraft();
    }
    
    // Ctrl+Enter to publish
    if (event.ctrlKey && event.key === 'Enter' && appState.currentView === 'postEditor') {
      event.preventDefault();
      publishPost();
    }
    
    // Escape to cancel editing
    if (event.key === 'Escape' && appState.currentView === 'postEditor') {
      cancelEdit();
    }
  } catch (error) {
    console.error('Error handling keyboard shortcuts:', error);
  }
}

// Utility functions
function getCurrentDate() {
  return new Date().toISOString().split('T')[0];
}

function getCurrentTime() {
  return new Date().toTimeString().split(' ')[0].substring(0, 5);
}

function formatDate(dateString) {
  const date = new Date(dateString);
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric'
  });
}

function escapeHtml(text) {
  const div = document.createElement('div');
  div.textContent = text;
  return div.innerHTML;
}

function scrollToComments() {
  const commentsSection = document.getElementById('commentsSection');
  if (commentsSection) {
    commentsSection.scrollIntoView({ behavior: 'smooth' });
  }
}

// Loading and toast notifications
function showLoading() {
  const loadingSpinner = document.getElementById('loadingSpinner');
  if (loadingSpinner) {
    loadingSpinner.classList.remove('hidden');
  }
}

function hideLoading() {
  const loadingSpinner = document.getElementById('loadingSpinner');
  if (loadingSpinner) {
    loadingSpinner.classList.add('hidden');
  }
}

function showToast(message, duration = 3000) {
  try {
    const toast = document.getElementById('successToast');
    const toastMessage = document.getElementById('toastMessage');
    
    if (!toast || !toastMessage) return;
    
    toastMessage.textContent = message;
    toast.classList.remove('hidden');
    toast.classList.add('show');
    
    setTimeout(() => {
      toast.classList.remove('show');
      setTimeout(() => {
        toast.classList.add('hidden');
      }, 300);
    }, duration);
  } catch (error) {
    console.error('Error showing toast:', error);
  }
}

// Data persistence
function saveToStorage() {
  try {
    localStorage.setItem('blogData', JSON.stringify(blogData));
  } catch (e) {
    console.warn('Failed to save to localStorage:', e);
  }
}

function loadFromStorage() {
  try {
    const stored = localStorage.getItem('blogData');
    if (stored) {
      const parsedData = JSON.parse(stored);
      // Merge with default data to handle new fields
      blogData = { ...blogData, ...parsedData };
    }
  } catch (e) {
    console.warn('Failed to load from localStorage:', e);
  }
}

// Global functions for HTML onclick handlers
window.openPost = openPost;
window.editPost = editPost;
window.deletePost = deletePost;
window.toggleLike = toggleLike;
window.toggleLikeDetail = toggleLikeDetail;
window.addComment = addComment;
window.sharePost = sharePost;
window.showNewPostEditor = showNewPostEditor;
window.filterByCategory = filterByCategory;
window.scrollToComments = scrollToComments;