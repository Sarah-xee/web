// 選取 portfolio 區塊
const portfolioSection = document.querySelector('.portfolio-section');
const bodyElement = document.querySelector('body');

// 建立 IntersectionObserver 實例
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            // 當 portfolio section 進入視窗時，添加黑白效果
            bodyElement.classList.add('portfolio-section');
        } else {
            // 當 portfolio section 離開視窗時，移除黑白效果
            bodyElement.classList.remove('.portfolio-section');
        }
    });
}, { threshold: 0.5 });  // 當至少 50% 的 section 進入視窗時觸發

// 啟動監測
observer.observe(portfolioSection);