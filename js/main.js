// DOM元素
const navbar = document.querySelector('.navbar');
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');
const navLinks = document.querySelectorAll('.nav-link');

// 导航栏滚动效果
window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
        navbar.classList.add('scrolled');
        navbar.style.background = 'rgba(255, 255, 255, 0.98)';
        navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
    } else {
        navbar.classList.remove('scrolled');
        navbar.style.background = 'rgba(255, 255, 255, 0.95)';
        navbar.style.boxShadow = 'none';
    }
});

// 移动端菜单切换
if (hamburger && navMenu) {
    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
        
        // 动画效果
        const bars = hamburger.querySelectorAll('.bar');
        if (hamburger.classList.contains('active')) {
            bars[0].style.transform = 'rotate(-45deg) translate(-5px, 6px)';
            bars[1].style.opacity = '0';
            bars[2].style.transform = 'rotate(45deg) translate(-5px, -6px)';
        } else {
            bars[0].style.transform = 'none';
            bars[1].style.opacity = '1';
            bars[2].style.transform = 'none';
        }
    });
    
    // 点击导航链接时关闭移动端菜单
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (hamburger.classList.contains('active')) {
                hamburger.classList.remove('active');
                navMenu.classList.remove('active');
                
                const bars = hamburger.querySelectorAll('.bar');
                bars[0].style.transform = 'none';
                bars[1].style.opacity = '1';
                bars[2].style.transform = 'none';
            }
        });
    });
    
    // 点击菜单外部关闭菜单
    document.addEventListener('click', (e) => {
        if (!hamburger.contains(e.target) && !navMenu.contains(e.target)) {
            if (hamburger.classList.contains('active')) {
                hamburger.classList.remove('active');
                navMenu.classList.remove('active');
                
                const bars = hamburger.querySelectorAll('.bar');
                bars[0].style.transform = 'none';
                bars[1].style.opacity = '1';
                bars[2].style.transform = 'none';
            }
        }
    });
}

// 平滑滚动
document.addEventListener('DOMContentLoaded', () => {
    // 平滑滚动功能
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const target = document.querySelector(targetId);
            console.log('Clicked:', targetId, 'Target found:', !!target);
            if (target) {
                const offsetTop = target.offsetTop - 70;
                console.log('Scrolling to:', offsetTop);
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
                
                // 更新导航激活状态
                updateActiveNavLink(targetId);
            }
        });
    });
    
    // 导航激活状态更新函数
    function updateActiveNavLink(targetId) {
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === targetId) {
                link.classList.add('active');
            }
        });
    }
    
    // 滚动时更新导航激活状态
    let ticking = false;
    function updateNavOnScroll() {
        const scrollPosition = window.scrollY + 100;
        const sections = document.querySelectorAll('section[id]');
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            const sectionId = '#' + section.getAttribute('id');
            
            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === sectionId) {
                        link.classList.add('active');
                    }
                });
            }
        });
        
        ticking = false;
    }
    
    window.addEventListener('scroll', () => {
        if (!ticking) {
            requestAnimationFrame(updateNavOnScroll);
            ticking = true;
        }
    });
});

// 项目过滤功能
const filterButtons = document.querySelectorAll('.filter-btn');
const projectCards = document.querySelectorAll('.project-card');

if (filterButtons.length > 0) {
    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            // 移除所有active类
            filterButtons.forEach(btn => btn.classList.remove('active'));
            // 添加active类到当前按钮
            button.classList.add('active');
            
            const filterValue = button.getAttribute('data-filter');
            
            projectCards.forEach(card => {
                if (filterValue === 'all' || card.getAttribute('data-category') === filterValue) {
                    card.style.display = 'block';
                    card.style.animation = 'fadeInUp 0.6s ease';
                } else {
                    card.style.display = 'none';
                }
            });
        });
    });
}

// 博客分类过滤
const categoryButtons = document.querySelectorAll('.category-btn');
const postCards = document.querySelectorAll('.post-card');

if (categoryButtons.length > 0) {
    categoryButtons.forEach(button => {
        button.addEventListener('click', () => {
            // 移除所有active类
            categoryButtons.forEach(btn => btn.classList.remove('active'));
            // 添加active类到当前按钮
            button.classList.add('active');
            
            const categoryValue = button.getAttribute('data-category');
            
            postCards.forEach(card => {
                if (categoryValue === 'all' || card.getAttribute('data-category') === categoryValue) {
                    card.style.display = 'block';
                    card.style.animation = 'fadeInUp 0.6s ease';
                } else {
                    card.style.display = 'none';
                }
            });
        });
    });
}

// 滚动动画
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// 观察需要动画的元素
document.querySelectorAll('.skill-category, .project-card, .post-card, .about-card').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
});

// 浮动元素动画（首页）
const floatingElements = document.querySelectorAll('.floating-element');
if (floatingElements.length > 0) {
    floatingElements.forEach((element, index) => {
        const speed = element.getAttribute('data-speed') || 2;
        
        // 设置初始位置
        element.style.position = 'absolute';
        element.style.fontSize = '2rem';
        element.style.color = 'rgba(255, 255, 255, 0.2)';
        element.style.pointerEvents = 'none';
        
        // 随机初始位置
        const positions = [
            { top: '10%', left: '10%' },
            { top: '20%', right: '15%' },
            { bottom: '25%', left: '20%' },
            { bottom: '15%', right: '10%' }
        ];
        
        if (positions[index]) {
            Object.assign(element.style, positions[index]);
        }
        
        // 浮动动画
        setInterval(() => {
            const currentTop = parseFloat(element.style.top) || 0;
            const newTop = currentTop + (Math.sin(Date.now() * 0.001 * speed) * 0.5);
            element.style.transform = `translateY(${newTop}px)`;
        }, 50);
    });
}

// 打字机效果（首页标题）
function typeWriter(element, text, speed = 100) {
    if (!element) return;
    
    element.innerHTML = '';
    let i = 0;
    
    function type() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    
    type();
}

// 页面加载完成后的初始化
document.addEventListener('DOMContentLoaded', () => {
    // 导航激活状态 - 修复首页导航
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    
    // 如果是首页，默认激活首页链接
    if (currentPage === 'index.html' || currentPage === '' || window.location.hash) {
        navLinks.forEach(link => {
            link.classList.remove('active');
            // 如果有hash，激活对应的导航链接
            if (window.location.hash && link.getAttribute('href') === window.location.hash) {
                link.classList.add('active');
            } else if (!window.location.hash && link.getAttribute('href') === '#home') {
                link.classList.add('active');
            }
        });
    } else {
        // 其他页面的导航激活状态
        navLinks.forEach(link => {
            const linkPage = link.getAttribute('href').split('/').pop();
            if (linkPage === currentPage) {
                link.classList.add('active');
            } else {
                link.classList.remove('active');
            }
        });
    }
    
    // 滚动指示器点击事件
    const scrollIndicator = document.querySelector('.scroll-indicator');
    if (scrollIndicator) {
        scrollIndicator.addEventListener('click', (e) => {
            e.preventDefault();
            const aboutSection = document.querySelector('#about');
            if (aboutSection) {
                const offsetTop = aboutSection.offsetTop - 70;
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
                
                // 更新导航状态
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === '#about') {
                        link.classList.add('active');
                    }
                });
            }
        });
        
        // 添加悬停效果
        scrollIndicator.style.cursor = 'pointer';
        scrollIndicator.addEventListener('mouseenter', () => {
            scrollIndicator.style.transform = 'translateY(-5px)';
        });
        scrollIndicator.addEventListener('mouseleave', () => {
            scrollIndicator.style.transform = 'translateY(0)';
        });
    }
    
    // 统计数字动画
    const statNumbers = document.querySelectorAll('.stat-number');
    const animateNumbers = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const target = entry.target;
                const finalNumber = parseInt(target.textContent.replace(/\D/g, ''));
                const suffix = target.textContent.replace(/\d/g, '');
                let current = 0;
                const increment = finalNumber / 50;
                
                const timer = setInterval(() => {
                    current += increment;
                    if (current >= finalNumber) {
                        current = finalNumber;
                        clearInterval(timer);
                    }
                    target.textContent = Math.floor(current) + suffix;
                }, 40);
                
                observer.unobserve(target);
            }
        });
    };
    
    const numberObserver = new IntersectionObserver(animateNumbers, {
        threshold: 0.5
    });
    
    statNumbers.forEach(number => {
        numberObserver.observe(number);
    });
    
    // 邮箱订阅表单
    const subscribeForm = document.getElementById('subscribeForm');
    if (subscribeForm) {
        subscribeForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const email = subscribeForm.querySelector('input[type="email"]').value;
            
            // 这里可以添加实际的订阅逻辑
            alert(`感谢订阅！我们将向 ${email} 发送最新内容。`);
            subscribeForm.reset();
        });
    }
});

// 添加CSS动画关键帧
const style = document.createElement('style');
style.textContent = `
    @keyframes fadeInUp {
        from {
            opacity: 0;
            transform: translateY(30px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
    
    @keyframes float {
        0%, 100% {
            transform: translateY(0px);
        }
        50% {
            transform: translateY(-10px);
        }
    }
    
    .floating-element {
        animation: float 3s ease-in-out infinite;
    }
    
    .scroll-indicator {
        cursor: pointer;
        animation: bounce 2s infinite;
    }
    
    @keyframes bounce {
        0%, 20%, 50%, 80%, 100% {
            transform: translateY(0);
        }
        40% {
            transform: translateY(-10px);
        }
        60% {
            transform: translateY(-5px);
        }
    }
    
    /* 移动端导航样式 */
    @media (max-width: 768px) {
        .nav-menu.active {
            display: flex !important;
        }
        
        .hamburger.active .bar:nth-child(2) {
            opacity: 0;
        }
        
        .hamburger.active .bar:nth-child(1) {
            transform: translateY(8px) rotate(45deg);
        }
        
        .hamburger.active .bar:nth-child(3) {
            transform: translateY(-8px) rotate(-45deg);
        }
    }
`;
document.head.appendChild(style);

// 性能优化：节流函数
function throttle(func, limit) {
    let inThrottle;
    return function() {
        const args = arguments;
        const context = this;
        if (!inThrottle) {
            func.apply(context, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    }
}

// 应用节流到滚动事件
window.addEventListener('scroll', throttle(() => {
    // 滚动相关的优化处理
    const scrollTop = window.pageYOffset;
    
    // 视差效果（如果需要）
    const heroSection = document.querySelector('.hero');
    if (heroSection && scrollTop < window.innerHeight) {
        heroSection.style.transform = `translateY(${scrollTop * 0.5}px)`;
    }
}, 16));

console.log('🚀 网站已加载完成！');
console.log('📧 联系方式: contact@zhangxianping.com');
console.log('🔗 GitHub: https://github.com/zhangxianping');