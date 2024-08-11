document.addEventListener("DOMContentLoaded", function() {
    const grades = ["PreK", "1", "2", "3", "4", "5", "6"];

    // Load saved sticker counts from localStorage
    grades.forEach(grade => {
        const savedCount = localStorage.getItem(`stickers${grade}`);
        if (savedCount !== null) {
            document.getElementById(`stickers${grade}`).textContent = savedCount;
        }
    });

    // Add stickers
    document.getElementById("addStickersButton").addEventListener("click", function() {
        const amount = parseInt(document.getElementById("stickerInput").value);
        if (!isNaN(amount)) {
            grades.forEach(grade => {
                const checkbox = document.querySelector(`input[data-grade="${grade}"]`);
                if (checkbox.checked) {
                    const stickerCountElement = document.getElementById(`stickers${grade}`);
                    let stickerCount = parseInt(stickerCountElement.textContent);
                    stickerCount += amount;
                    stickerCountElement.textContent = stickerCount;
                    // Save the updated sticker count to localStorage
                    localStorage.setItem(`stickers${grade}`, stickerCount);
                }
            });
        }
    });

    // Subtract stickers
    document.getElementById("subtractStickersButton").addEventListener("click", function() {
        const amount = parseInt(document.getElementById("stickerInput").value);
        if (!isNaN(amount)) {
            grades.forEach(grade => {
                const checkbox = document.querySelector(`input[data-grade="${grade}"]`);
                if (checkbox.checked) {
                    const stickerCountElement = document.getElementById(`stickers${grade}`);
                    let stickerCount = parseInt(stickerCountElement.textContent);
                    stickerCount -= amount;
                    if (stickerCount < 0) stickerCount = 0; // Prevent negative sticker counts
                    stickerCountElement.textContent = stickerCount;
                    // Save the updated sticker count to localStorage
                    localStorage.setItem(`stickers${grade}`, stickerCount);
                }
            });
        }
    });
});
