// ページ読み込み完了時の処理
document.addEventListener('DOMContentLoaded', function() {
    console.log('フォトギャラリーが読み込まれました');
    
    // ギャラリーアイテムにクリックイベントを追加
    const galleryItems = document.querySelectorAll('.gallery-item');
    
    galleryItems.forEach(item => {
        item.addEventListener('click', function() {
            const image = this.querySelector('img');
            const title = this.querySelector('p').textContent;
            alert(`「${title}」をクリックしました！\nこの画像の詳細が表示されます`);
        });
    });
});
