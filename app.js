// Presentation JavaScript functionality
class PresentationController {
    constructor() {
        this.currentSlide = 1;
        this.totalSlides = 18;
        this.init();
    }

    init() {
        this.setupEventListeners();
        this.updateSlideCounter();
        this.updateProgressBar();
        this.updateNavigationButtons();
        this.setupTableOfContentsNavigation();
        
        // Ensure first slide is active
        this.showSlide(1);
    }

    setupEventListeners() {
        // Navigation buttons
        const prevBtn = document.getElementById('prevBtn');
        const nextBtn = document.getElementById('nextBtn');

        if (prevBtn) {
            prevBtn.addEventListener('click', (e) => {
                e.preventDefault();
                this.previousSlide();
            });
        }

        if (nextBtn) {
            nextBtn.addEventListener('click', (e) => {
                e.preventDefault();
                this.nextSlide();
            });
        }

        // Keyboard navigation
        document.addEventListener('keydown', (e) => {
            switch(e.key) {
                case 'ArrowLeft':
                case 'ArrowUp':
                    e.preventDefault();
                    this.previousSlide();
                    break;
                case 'ArrowRight':
                case 'ArrowDown':
                case ' ': // Spacebar
                    e.preventDefault();
                    this.nextSlide();
                    break;
                case 'Home':
                    e.preventDefault();
                    this.goToSlide(1);
                    break;
                case 'End':
                    e.preventDefault();
                    this.goToSlide(this.totalSlides);
                    break;
                case 'Escape':
                    e.preventDefault();
                    this.toggleFullscreen();
                    break;
            }
        });

        // Touch/swipe support for mobile
        this.setupTouchNavigation();
    }

    setupTouchNavigation() {
        let startX = 0;
        let startY = 0;
        const threshold = 50; // Minimum distance for swipe

        document.addEventListener('touchstart', (e) => {
            startX = e.touches[0].clientX;
            startY = e.touches[0].clientY;
        });

        document.addEventListener('touchend', (e) => {
            const endX = e.changedTouches[0].clientX;
            const endY = e.changedTouches[0].clientY;
            const deltaX = endX - startX;
            const deltaY = endY - startY;

            // Check if horizontal swipe is longer than vertical
            if (Math.abs(deltaX) > Math.abs(deltaY) && Math.abs(deltaX) > threshold) {
                if (deltaX > 0) {
                    this.previousSlide();
                } else {
                    this.nextSlide();
                }
            }
        });
    }

    setupTableOfContentsNavigation() {
        const tocItems = document.querySelectorAll('.toc-item[data-slide-nav]');
        tocItems.forEach(item => {
            item.addEventListener('click', (e) => {
                e.preventDefault();
                const targetSlide = parseInt(item.getAttribute('data-slide-nav'));
                if (targetSlide && targetSlide >= 1 && targetSlide <= this.totalSlides) {
                    this.goToSlide(targetSlide);
                }
            });
        });
    }

    nextSlide() {
        if (this.currentSlide < this.totalSlides) {
            this.goToSlide(this.currentSlide + 1);
        }
    }

    previousSlide() {
        if (this.currentSlide > 1) {
            this.goToSlide(this.currentSlide - 1);
        }
    }

    goToSlide(slideNumber) {
        if (slideNumber < 1 || slideNumber > this.totalSlides || slideNumber === this.currentSlide) {
            return;
        }

        this.currentSlide = slideNumber;
        this.showSlide(slideNumber);
        this.updateSlideCounter();
        this.updateProgressBar();
        this.updateNavigationButtons();
    }

    showSlide(slideNumber) {
        // Hide all slides
        const allSlides = document.querySelectorAll('.slide');
        allSlides.forEach(slide => {
            slide.classList.remove('active');
        });

        // Show target slide
        const targetSlideElement = document.querySelector(`[data-slide="${slideNumber}"]`);
        if (targetSlideElement) {
            targetSlideElement.classList.add('active');
            this.animateSlideElements(targetSlideElement);
        }
    }

    updateSlideCounter() {
        const currentSlideElement = document.getElementById('currentSlide');
        const totalSlidesElement = document.getElementById('totalSlides');
        
        if (currentSlideElement) {
            currentSlideElement.textContent = this.currentSlide;
        }
        if (totalSlidesElement) {
            totalSlidesElement.textContent = this.totalSlides;
        }
    }

    updateProgressBar() {
        const progressFill = document.getElementById('progressFill');
        if (progressFill) {
            const progress = (this.currentSlide / this.totalSlides) * 100;
            progressFill.style.width = `${progress}%`;
        }
    }

    updateNavigationButtons() {
        const prevBtn = document.getElementById('prevBtn');
        const nextBtn = document.getElementById('nextBtn');

        if (prevBtn) {
            prevBtn.disabled = this.currentSlide === 1;
        }
        if (nextBtn) {
            nextBtn.disabled = this.currentSlide === this.totalSlides;
        }
    }

    animateSlideElements(slideElement) {
        // Add entrance animations to slide content
        const animatableElements = slideElement.querySelectorAll(
            '.problem-item, .objective-item, .feasibility-item, .outcome-card, .innovation-item, .conclusion-item, .timeline-item, .component'
        );

        animatableElements.forEach((element, index) => {
            element.style.opacity = '0';
            element.style.transform = 'translateY(20px)';
            
            setTimeout(() => {
                element.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
                element.style.opacity = '1';
                element.style.transform = 'translateY(0)';
            }, index * 100);
        });
    }

    toggleFullscreen() {
        if (!document.fullscreenElement) {
            document.documentElement.requestFullscreen();
        } else {
            document.exitFullscreen();
        }
    }

    // Auto-advance presentation (optional)
    startAutoAdvance(intervalMs = 30000) {
        this.autoAdvanceInterval = setInterval(() => {
            if (this.currentSlide < this.totalSlides) {
                this.nextSlide();
            } else {
                this.stopAutoAdvance();
            }
        }, intervalMs);
    }

    stopAutoAdvance() {
        if (this.autoAdvanceInterval) {
            clearInterval(this.autoAdvanceInterval);
            this.autoAdvanceInterval = null;
        }
    }
}

// Interactive component behaviors
class InteractiveComponents {
    constructor() {
        this.init();
    }

    init() {
        this.setupComponentHovers();
        this.setupSystemDiagramInteractions();
        this.setupEvaluationBadges();
    }

    setupComponentHovers() {
        // Add hover effects to interactive elements
        const hoverElements = document.querySelectorAll(
            '.component, .toc-item, .outcome-card, .innovation-item, .challenge-card, .lit-card, .software-card'
        );

        hoverElements.forEach(element => {
            element.addEventListener('mouseenter', () => {
                if (!element.style.transform.includes('translateY')) {
                    element.style.transform = 'translateY(-4px)';
                }
                element.style.boxShadow = 'var(--shadow-md)';
            });

            element.addEventListener('mouseleave', () => {
                if (element.style.transform.includes('translateY(-4px)')) {
                    element.style.transform = element.style.transform.replace('translateY(-4px)', 'translateY(0)');
                }
                element.style.boxShadow = '';
            });
        });
    }

    setupSystemDiagramInteractions() {
        const components = document.querySelectorAll('.component');
        components.forEach(component => {
            component.addEventListener('click', (e) => {
                e.stopPropagation();
                this.showComponentDetails(component);
            });
        });

        // Close tooltip when clicking elsewhere
        document.addEventListener('click', () => {
            const existing = document.querySelector('.component-tooltip');
            if (existing) {
                existing.remove();
            }
        });
    }

    showComponentDetails(component) {
        // Remove existing tooltip
        const existing = document.querySelector('.component-tooltip');
        if (existing) {
            existing.remove();
        }

        const tooltip = document.createElement('div');
        tooltip.className = 'component-tooltip';
        tooltip.style.cssText = `
            position: fixed;
            background: var(--color-surface);
            border: 2px solid var(--color-primary);
            border-radius: var(--radius-base);
            padding: var(--space-16);
            box-shadow: var(--shadow-lg);
            z-index: 1001;
            max-width: 300px;
            font-size: var(--font-size-sm);
            color: var(--color-text);
            animation: slideInFromLeft 0.2s ease-out;
        `;

        const componentText = component.querySelector('span').textContent;
        let details = '';

        // Add specific details based on component type
        if (componentText.includes('Solar Panel')) {
            details = 'Photovoltaic panels convert sunlight into electrical energy. Operating voltage: 12V/24V, Power output varies with irradiance and temperature.';
        } else if (componentText.includes('MPPT')) {
            details = 'Maximum Power Point Tracking controller optimizes power extraction from solar panels. Efficiency: 95-98%, supports 10A-30A current.';
        } else if (componentText.includes('ESP32')) {
            details = 'WiFi-enabled microcontroller for IoT connectivity. Features: 32-bit processor, built-in WiFi/Bluetooth, multiple GPIO pins.';
        } else if (componentText.includes('Battery')) {
            details = 'Energy storage system for solar power. Typically 12V lead-acid or lithium-ion batteries with capacity ranging from 50Ah to 200Ah.';
        } else if (componentText.includes('IoT Cloud')) {
            details = 'Cloud platform for data storage and remote monitoring. Supports real-time data transmission and historical analysis.';
        } else if (componentText.includes('Dashboard')) {
            details = 'Web and mobile interface for system monitoring. Displays real-time efficiency, power output, and system health status.';
        } else {
            details = 'Component information: Click for detailed specifications and functionality.';
        }

        tooltip.innerHTML = `<strong>${componentText}</strong><br><br>${details}<br><br><small>Click anywhere to close</small>`;

        const rect = component.getBoundingClientRect();
        const viewportWidth = window.innerWidth;
        const viewportHeight = window.innerHeight;
        
        // Position tooltip intelligently
        let left = rect.left + rect.width / 2;
        let top = rect.bottom + 10;
        
        // Adjust if tooltip would go off screen
        if (left + 150 > viewportWidth) {
            left = viewportWidth - 310;
        }
        if (left - 150 < 0) {
            left = 10;
        }
        if (top + 150 > viewportHeight) {
            top = rect.top - 160;
        }

        tooltip.style.left = `${left}px`;
        tooltip.style.top = `${top}px`;
        tooltip.style.transform = left === rect.left + rect.width / 2 ? 'translateX(-50%)' : 'none';

        document.body.appendChild(tooltip);

        // Remove tooltip after 8 seconds
        setTimeout(() => {
            if (tooltip.parentNode) {
                tooltip.remove();
            }
        }, 8000);

        // Prevent event bubbling
        tooltip.addEventListener('click', (e) => {
            e.stopPropagation();
        });
    }

    setupEvaluationBadges() {
        const badges = document.querySelectorAll('.evaluation-badge');
        badges.forEach(badge => {
            badge.addEventListener('click', () => {
                badge.style.animation = 'pulse 0.5s ease-in-out';
                setTimeout(() => {
                    badge.style.animation = '';
                }, 500);
            });
        });
    }
}

// Utility functions
class PresentationUtils {
    static formatTime(seconds) {
        const minutes = Math.floor(seconds / 60);
        const remainingSeconds = seconds % 60;
        return `${minutes}:${remainingSeconds.toString().padStart(2, '0')}`;
    }

    static createPresentationTimer() {
        let startTime = Date.now();
        let timerElement = document.createElement('div');
        timerElement.style.cssText = `
            position: fixed;
            top: var(--space-20);
            right: var(--space-20);
            background: var(--color-surface);
            padding: var(--space-8) var(--space-16);
            border-radius: var(--radius-base);
            border: 1px solid var(--color-border);
            font-family: var(--font-family-mono);
            font-size: var(--font-size-sm);
            color: var(--color-text);
            z-index: 1000;
        `;

        document.body.appendChild(timerElement);

        const updateTimer = () => {
            const elapsed = Math.floor((Date.now() - startTime) / 1000);
            timerElement.textContent = `⏱️ ${PresentationUtils.formatTime(elapsed)}`;
        };

        updateTimer();
        const interval = setInterval(updateTimer, 1000);

        return { element: timerElement, interval };
    }

    static exportPresentationData() {
        const presentationData = {
            title: "Solar MPPT System with Real-time Efficiency Monitoring",
            currentSlide: window.presentation ? window.presentation.currentSlide : 1,
            totalSlides: window.presentation ? window.presentation.totalSlides : 18,
            timestamp: new Date().toISOString(),
            evaluationCriteria: [
                { id: 1, criterion: "Problem definition clearly stated", status: "YES" },
                { id: 2, criterion: "Objectives clearly defined", status: "YES" },
                { id: 3, criterion: "The overall project idea is feasible", status: "YES" }
            ]
        };

        const dataStr = JSON.stringify(presentationData, null, 2);
        const dataBlob = new Blob([dataStr], { type: 'application/json' });
        const url = URL.createObjectURL(dataBlob);
        
        const link = document.createElement('a');
        link.href = url;
        link.download = 'presentation-data.json';
        link.click();
        
        URL.revokeObjectURL(url);
    }
}

// Initialize presentation when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    // Small delay to ensure all elements are rendered
    setTimeout(() => {
        // Initialize main presentation controller
        window.presentation = new PresentationController();
        
        // Initialize interactive components
        window.interactives = new InteractiveComponents();
        
        // Add slide indicator dots
        createSlideIndicators();
        
        // Preload slide content for better performance
        preloadSlideContent();
        
        console.log('Presentation initialized successfully');
    }, 100);
    
    // Add export functionality (for development/debugging)
    document.addEventListener('keydown', (e) => {
        if (e.ctrlKey && e.key === 'e') {
            e.preventDefault();
            PresentationUtils.exportPresentationData();
        }
    });
});

// Additional enhancement functions
function createSlideIndicators() {
    const indicatorContainer = document.createElement('div');
    indicatorContainer.style.cssText = `
        position: fixed;
        bottom: var(--space-20);
        left: 50%;
        transform: translateX(-50%);
        display: flex;
        gap: var(--space-8);
        z-index: 1000;
        background: var(--color-surface);
        padding: var(--space-8) var(--space-16);
        border-radius: var(--radius-full);
        border: 1px solid var(--color-border);
        box-shadow: var(--shadow-sm);
    `;

    for (let i = 1; i <= 18; i++) {
        const dot = document.createElement('div');
        dot.style.cssText = `
            width: 10px;
            height: 10px;
            border-radius: 50%;
            background: ${i === 1 ? 'var(--color-primary)' : 'rgba(var(--color-text-secondary), 0.3)'};
            cursor: pointer;
            transition: all var(--duration-fast) var(--ease-standard);
        `;
        
        dot.addEventListener('click', (e) => {
            e.preventDefault();
            if (window.presentation) {
                window.presentation.goToSlide(i);
            }
        });
        
        dot.setAttribute('data-slide-indicator', i);
        indicatorContainer.appendChild(dot);
    }

    document.body.appendChild(indicatorContainer);

    // Store reference for updates
    window.slideIndicators = indicatorContainer;
}

function updateSlideIndicators(currentSlide) {
    if (!window.slideIndicators) return;
    
    const indicators = window.slideIndicators.querySelectorAll('[data-slide-indicator]');
    indicators.forEach((indicator, index) => {
        const slideNum = index + 1;
        indicator.style.background = slideNum === currentSlide 
            ? 'var(--color-primary)' 
            : 'rgba(var(--color-text-secondary), 0.3)';
        indicator.style.transform = slideNum === currentSlide ? 'scale(1.3)' : 'scale(1)';
    });
}

function preloadSlideContent() {
    // Preload and optimize content for better performance
    const slides = document.querySelectorAll('.slide');
    slides.forEach((slide, index) => {
        // Force layout calculation to improve transition performance
        slide.offsetHeight;
        
        // Set initial state for animations
        const animatableElements = slide.querySelectorAll(
            '.problem-item, .objective-item, .feasibility-item, .outcome-card, .innovation-item, .conclusion-item, .timeline-item'
        );
        
        animatableElements.forEach(element => {
            if (index !== 0) { // Don't hide elements on first slide
                element.style.opacity = '1';
                element.style.transform = 'translateY(0)';
            }
        });
    });
}

// Override the goToSlide method to update indicators
if (typeof window !== 'undefined') {
    window.addEventListener('load', () => {
        setTimeout(() => {
            if (window.presentation) {
                const originalGoToSlide = window.presentation.goToSlide.bind(window.presentation);
                window.presentation.goToSlide = function(slideNumber) {
                    originalGoToSlide(slideNumber);
                    updateSlideIndicators(slideNumber);
                };
            }
        }, 200);
    });
}

// CSS animations for enhanced interactivity
const style = document.createElement('style');
style.textContent = `
    @keyframes pulse {
        0% { transform: scale(1); }
        50% { transform: scale(1.05); }
        100% { transform: scale(1); }
    }
    
    @keyframes slideInFromRight {
        from { transform: translateX(100%); opacity: 0; }
        to { transform: translateX(0); opacity: 1; }
    }
    
    @keyframes slideInFromLeft {
        from { transform: translateX(-100%); opacity: 0; }
        to { transform: translateX(0); opacity: 1; }
    }
    
    .slide.active {
        animation: slideInFromRight 0.3s ease-out;
    }
    
    .component-tooltip {
        animation: slideInFromLeft 0.2s ease-out;
    }
    
    .nav-btn:active {
        transform: translateY(1px);
    }
    
    .toc-item:active {
        transform: translateY(-1px);
    }
`;
document.head.appendChild(style);