// 隨機生成 1 到 100 的數字
const randomNumber = Math.floor(Math.random() * 100) + 1;
let attempts = 7;  // 最高嘗試次數
let min = 1;       // 最小範圍
let max = 100;     // 最大範圍
let guessedCorrectly = false;

while (attempts > 0 && !guessedCorrectly) {
    let guess = window.prompt(`請猜一個數字 (${min} 到 ${max})，剩餘次數：${attempts}`);

    // 檢查是否取消或輸入為空
    if (guess === null || guess.trim() === "") {
        alert("請輸入一個有效數字！");
        continue;
    }

    guess = Number(guess);

    // 檢查輸入是否為有效數字範圍內
    if (isNaN(guess) || guess < min || guess > max) {
        alert(`請輸入 ${min} 到 ${max} 之間的數字！`);
        continue;
    }

    attempts--;

    if (guess === randomNumber) {
        alert(`恭喜你猜對了！正確數字是 ${randomNumber}`);
        document.getElementById("result").innerHTML = '<img src="correct.jpg" alt="Correct!">';
        guessedCorrectly = true;
    } else if (guess < randomNumber) {
        alert("太小了！再試一次。");
        min = Math.max(min, guess + 1);
    } else {
        alert("太大了！再試一次。");
        max = Math.min(max, guess - 1);
    }
}

// 如果用完所有次數仍未猜中
if (!guessedCorrectly) {
    alert(`遊戲結束！正確答案是 ${randomNumber}`);
    document.getElementById("result").innerHTML = '<img src="wrong.jpg" alt="Game Over!">';
}