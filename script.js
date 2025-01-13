// 圖片放大功能
const images = document.querySelectorAll('.responsive-image');
const modal = document.createElement('div');
modal.classList.add('image-modal');
document.body.appendChild(modal);

const modalImg = document.createElement('img');
modal.appendChild(modalImg);

const closeBtn = document.createElement('span');
closeBtn.classList.add('close-modal');
closeBtn.innerHTML = '&times;';
modal.appendChild(closeBtn);

// 點擊圖片顯示放大
images.forEach(img => {
    img.addEventListener('click', () => {
        modal.style.display = 'block';
        modalImg.src = img.src;
    });
});

// 點擊關閉按鈕
closeBtn.addEventListener('click', () => {
    modal.style.display = 'none';
});

// 點擊模態框外部關閉
modal.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.style.display = 'none';
    }
});
