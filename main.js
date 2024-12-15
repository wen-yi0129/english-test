// 單字庫
const vocabularyBank = [
    { word: "a", options: ["一個", "兩個", "三個", "四個"], correct: 0 },
    { word: "A.M.", options: ["上午", "下午", "晚上", "凌晨"], correct: 0 },
    { word: "ability", options: ["能力", "智慧", "體力", "精神"], correct: 0 },
    { word: "able", options: ["能夠的", "困難的", "簡單的", "複雜的"], correct: 0 },
    { word: "about", options: ["關於", "遠離", "背離", "反對"], correct: 0 },
    { word: "above", options: ["在上面", "在下面", "在旁邊", "在中間"], correct: 0 },
    { word: "abroad", options: ["在國外", "在國內", "在家裡", "在學校"], correct: 0 },
    { word: "absent", options: ["缺席的", "出席的", "準時的", "遲到的"], correct: 0 },
    { word: "accept", options: ["接受", "拒絕", "猶豫", "懷疑"], correct: 0 },
    { word: "accident", options: ["意外事故", "計畫", "約會", "活動"], correct: 0 },
    { word: "achieve", options: ["達到", "放棄", "忽略", "逃避"], correct: 0 },
    { word: "across", options: ["橫過", "直行", "迴轉", "倒退"], correct: 0 },
    { word: "act", options: ["表演", "睡覺", "跑步", "游泳"], correct: 0 },
    { word: "action", options: ["行動", "停止", "休息", "等待"], correct: 0 },
    { word: "active", options: ["活躍的", "懶惰的", "疲倦的", "安靜的"], correct: 0 },
    { word: "activity", options: ["活動", "睡眠", "休息", "發呆"], correct: 0 },
    { word: "actor", options: ["演員", "醫生", "老師", "警察"], correct: 0 },
    { word: "actress", options: ["女演員", "女醫生", "女老師", "女警察"], correct: 0 },
    { word: "actually", options: ["實際上", "可能", "也許", "大概"], correct: 0 },
    { word: "add", options: ["加上", "減去", "乘以", "除以"], correct: 0 },
    { word: "addition", options: ["加法", "減法", "乘法", "除法"], correct: 0 },
    { word: "address", options: ["地址", "電話", "姓名", "年齡"], correct: 0 },
    { word: "admire", options: ["欽佩", "鄙視", "討厭", "忽視"], correct: 0 },
    { word: "admit", options: ["承認", "否認", "懷疑", "拒絕"], correct: 0 },
    { word: "adopt", options: ["領養", "遺棄", "忽略", "討厭"], correct: 0 },
    { word: "adult", options: ["成年人", "小孩", "嬰兒", "青少年"], correct: 0 },
    { word: "advance", options: ["前進", "後退", "停止", "轉彎"], correct: 0 },
    { word: "advantage", options: ["優點", "缺點", "問題", "困難"], correct: 0 },
    { word: "adventure", options: ["冒險", "安全", "無聊", "平淡"], correct: 0 },
    { word: "advertisement", options: ["廣告", "新聞", "小說", "報告"], correct: 0 },
    { word: "advice", options: ["建議", "命令", "威脅", "懲罰"], correct: 0 },
    { word: "advise", options: ["建議", "強迫", "命令", "要求"], correct: 0 },
    { word: "affair", options: ["事務", "玩具", "遊戲", "休閒"], correct: 0 },
    { word: "affect", options: ["影響", "忽略", "避免", "逃避"], correct: 0 },
    { word: "afraid", options: ["害怕的", "勇敢的", "冷靜的", "開心的"], correct: 0 },
    { word: "after", options: ["之後", "之前", "現在", "同時"], correct: 0 },
    { word: "afternoon", options: ["下午", "上午", "晚上", "凌晨"], correct: 0 },
    { word: "again", options: ["再一次", "永不", "從不", "最後"], correct: 0 },
    { word: "against", options: ["反對", "支持", "贊成", "同意"], correct: 0 },
    { word: "age", options: ["年齡", "身高", "體重", "長度"], correct: 0 },
    { word: "ago", options: ["以前", "之後", "現在", "將來"], correct: 0 },
    { word: "agree", options: ["同意", "反對", "拒絕", "否認"], correct: 0 },
    { word: "ahead", options: ["在前面", "在後面", "在中間", "在旁邊"], correct: 0 },
    { word: "aid", options: ["幫助", "阻礙", "破壞", "傷害"], correct: 0 },
    { word: "aim", options: ["目標", "失敗", "放棄", "懷疑"], correct: 0 },
    { word: "air", options: ["空氣", "水", "土", "火"], correct: 0 },
    { word: "aircraft", options: ["飛機", "汽車", "船", "火車"], correct: 0 },
    { word: "airline", options: ["航空公司", "巴士公司", "計程車行", "輪船公司"], correct: 0 },
    { word: "airplane", options: ["飛機", "汽車", "腳踏車", "機車"], correct: 0 },
    { word: "airport", options: ["機場", "車站", "碼頭", "公園"], correct: 0 },
    { word: "alarm", options: ["鬧鐘", "手錶", "時鐘", "計時器"], correct: 0 },
    { word: "album", options: ["相簿", "書本", "筆記本", "日記"], correct: 0 },
    { word: "alike", options: ["相似的", "不同的", "特別的", "獨特的"], correct: 0 },
    { word: "alive", options: ["活著的", "死去的", "生病的", "受傷的"], correct: 0 },
    { word: "all", options: ["全部", "部分", "一些", "少許"], correct: 0 },
    { word: "allow", options: ["允許", "禁止", "阻止", "拒絕"], correct: 0 },
    { word: "almost", options: ["幾乎", "完全", "絕對", "根本"], correct: 0 },
    { word: "alone", options: ["單獨的", "群體的", "熱鬧的", "擁擠的"], correct: 0 },
    { word: "along", options: ["沿著", "遠離", "背離", "反向"], correct: 0 },
    { word: "aloud", options: ["大聲地", "安靜地", "輕聲地", "無聲地"], correct: 0 },
    { word: "alphabet", options: ["字母表", "數字表", "符號表", "圖表"], correct: 0 },
    { word: "already", options: ["已經", "還沒", "從不", "永不"], correct: 0 },
    { word: "also", options: ["也", "只有", "僅僅", "除了"], correct: 0 },
    { word: "although", options: ["雖然", "因為", "所以", "但是"], correct: 0 },
    { word: "always", options: ["總是", "從不", "很少", "偶爾"], correct: 0 },
    { word: "ambulance", options: ["救護車", "警車", "消防車", "垃圾車"], correct: 0 },
    { word: "America", options: ["美國", "英國", "法國", "德國"], correct: 0 },
    { word: "American", options: ["美國的", "英國的", "法國的", "德國的"], correct: 0 },
    { word: "among", options: ["之中", "之外", "旁邊", "遠離"], correct: 0 },
    { word: "amount", options: ["數量", "品質", "種類", "形狀"], correct: 0 },
    { word: "ancient", options: ["古代的", "現代的", "未來的", "當代的"], correct: 0 },
    { word: "angel", options: ["天使", "魔鬼", "人類", "動物"], correct: 0 },
    { word: "anger", options: ["憤怒", "快樂", "平靜", "悲傷"], correct: 0 },
    { word: "angry", options: ["生氣的", "開心的", "平靜的", "傷心的"], correct: 0 },
    { word: "animal", options: ["動物", "植物", "礦物", "物品"], correct: 0 },
    { word: "ankle", options: ["腳踝", "手腕", "手肘", "膝蓋"], correct: 0 },
    { word: "another", options: ["另一個", "相同的", "這個", "那個"], correct: 0 },
    { word: "answer", options: ["答案", "問題", "疑問", "猜測"], correct: 0 },
    { word: "ant", options: ["螞蟻", "蜜蜂", "蒼蠅", "蚊子"], correct: 0 },
    { word: "any", options: ["任何", "所有", "沒有", "特定"], correct: 0 },
    { word: "anybody", options: ["任何人", "沒有人", "所有人", "特定人"], correct: 0 },
    { word: "anymore", options: ["不再", "仍然", "永遠", "總是"], correct: 0 },
    { word: "anyone", options: ["任何人", "沒有人", "某人", "每個人"], correct: 0 },
    { word: "anything", options: ["任何事", "沒事", "某事", "每件事"], correct: 0 },
    { word: "anytime", options: ["任何時候", "永不", "此時", "那時"], correct: 0 }
];

// 從單字庫中隨機選取10個單字
function getRandomVocabulary() {
    const shuffled = [...vocabularyBank].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, 10);
}

let vocabulary = [];
let currentWord = 0;
let score = 0;
let timer = null;
let timeLeft = 15;
let synth = window.speechSynthesis;
let answerHistory = [];

const startBtn = document.getElementById('start-btn');
const wordElement = document.getElementById('word');
const optionsContainer = document.getElementById('options');
const speakBtn = document.getElementById('speak-btn');
const timerElement = document.getElementById('timer');
const feedbackElement = document.getElementById('feedback');
const resultElement = document.getElementById('result');
const testArea = document.getElementById('test-area');
const progressElement = document.getElementById('progress');

startBtn.addEventListener('click', startTest);
speakBtn.addEventListener('click', speakWord);

function startTest() {
    vocabulary = getRandomVocabulary();
    startBtn.style.display = 'none';
    testArea.style.display = 'block';
    currentWord = 0;
    score = 0;
    answerHistory = [];
    showWord();
}

function showWord() {
    const word = vocabulary[currentWord];
    wordElement.textContent = word.word;
    feedbackElement.style.display = 'none';
    
    // 更新進度
    progressElement.textContent = `第 ${currentWord + 1} 題 / 共 10 題`;
    
    optionsContainer.innerHTML = '';
    word.options.forEach((option, index) => {
        const button = document.createElement('div');
        button.classList.add('option');
        button.textContent = option;
        button.addEventListener('click', () => checkAnswer(index));
        optionsContainer.appendChild(button);
    });

    // 重置並啟動計時器
    timeLeft = 15;
    timerElement.textContent = timeLeft;
    if (timer) clearInterval(timer);
    timer = setInterval(updateTimer, 1000);
}

function updateTimer() {
    timeLeft--;
    timerElement.textContent = timeLeft;
    
    if (timeLeft <= 0) {
        clearInterval(timer);
        const correctAnswer = vocabulary[currentWord].options[vocabulary[currentWord].correct];
        showFeedback(false, `時間到！正確答案是：${correctAnswer}`);
        // 記錄超時
        answerHistory.push({
            word: vocabulary[currentWord].word,
            userAnswer: "超時未答",
            correctAnswer: correctAnswer,
            isCorrect: false,
            timeSpent: 15
        });
        setTimeout(nextWord, 2000);
    }
}

function speakWord() {
    const utterance = new SpeechSynthesisUtterance(vocabulary[currentWord].word);
    utterance.lang = 'en-US';
    synth.speak(utterance);
}

function checkAnswer(selectedIndex) {
    clearInterval(timer);
    const options = document.querySelectorAll('.option');
    const correctIndex = vocabulary[currentWord].correct;
    const timeSpent = 15 - timeLeft;
    
    options.forEach(option => {
        option.style.pointerEvents = 'none';
    });

    const isCorrect = selectedIndex === correctIndex;
    const correctAnswer = vocabulary[currentWord].options[correctIndex];
    const userAnswer = vocabulary[currentWord].options[selectedIndex];

    // 記錄作答
    answerHistory.push({
        word: vocabulary[currentWord].word,
        userAnswer: userAnswer,
        correctAnswer: correctAnswer,
        isCorrect: isCorrect,
        timeSpent: timeSpent
    });

    if (isCorrect) {
        score += 10;
        showFeedback(true, "答對了！ +10分");
        options[selectedIndex].classList.add('correct');
    } else {
        showFeedback(false, `答錯了！正確答案是：${correctAnswer}`);
        options[selectedIndex].classList.add('incorrect');
        options[correctIndex].classList.add('correct');
    }

    setTimeout(nextWord, 2000);
}

function showFeedback(isCorrect, message) {
    feedbackElement.textContent = message;
    feedbackElement.className = isCorrect ? 'correct' : 'incorrect';
    feedbackElement.style.display = 'block';
}

function nextWord() {
    currentWord++;
    if (currentWord < vocabulary.length) {
        showWord();
    } else {
        showResult();
    }
}

function showResult() {
    testArea.style.display = 'none';
    resultElement.style.display = 'block';
    
    // 生成作答記錄表格
    let historyHTML = `
        <h2>測驗完成！總分：${score} 分</h2>
        <table class="result-table">
            <tr>
                <th>題號</th>
                <th>英文單字</th>
                <th>你的答案</th>
                <th>正確答案</th>
                <th>作答時間</th>
                <th>結果</th>
            </tr>
    `;
    
    answerHistory.forEach((record, index) => {
        historyHTML += `
            <tr class="${record.isCorrect ? 'correct-row' : 'incorrect-row'}">
                <td>${index + 1}</td>
                <td>${record.word}</td>
                <td>${record.userAnswer}</td>
                <td>${record.correctAnswer}</td>
                <td>${record.timeSpent}秒</td>
                <td>${record.isCorrect ? '✓' : '✗'}</td>
            </tr>
        `;
    });
    
    historyHTML += `
        </table>
        <button onclick="location.reload()" class="restart-btn">重新測驗</button>
    `;
    
    resultElement.innerHTML = historyHTML;
}
