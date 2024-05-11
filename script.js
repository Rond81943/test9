// Массив с вопросами, вариантами ответов и правильными ответами.
let questions = [
    {
        question: "В одном из сражений советские войска уничтожили 22 танка всего за 30 минут.",
        options: ["Правда", "Ложь"],
        correctAnswer: "Правда"
    },
    {
        question: "Адольф Гитлер называл своим главным врагом Иосифа Сталина.",
        options: ["Правда", "Ложь"],
        correctAnswer: "Ложь"
    },
    {
        question: "Советский Союз и Германия оставались в состоянии войны еще 10 лет после капитуляции Германии.",
        options: ["Правда", "Ложь"],
        correctAnswer: "Правда"
    },
    {
        question: "Лысьвенская стальная каска, широко использовавшаяся солдатами во время войны, весила больше килограмма.",
        options: ["Правда", "Ложь"],
        correctAnswer: "Ложь"
    },
    {
        question: "В начале войны Кремль «замаскировали», чтобы избежать нападения фашистской авиации.",
        options: ["Правда", "Ложь"],
        correctAnswer: "Правда"
    },
    {
        question: "Один из солдатов в одиночку и без винтовки уничтожил 23 противника. За этот подвиг ему присвоили звание Героя Советского Союза.",
        options: ["Правда", "Ложь"],
        correctAnswer: "Правда"
    },
    {
        question: "Советская армия использовала в качестве оружия обычные тракторы.",
        options: ["Правда", "Ложь"],
        correctAnswer: "Правда"
    }
];

let currentQuestion = 0; // Текущий вопрос.
let correctAnswers = 0; // Количество правильных ответов.
let questionElement = document.getElementById("question"); // Получаем блок для размещения вопроса.
let optionsElement = document.getElementById("options"); // Получаем блок кнопок.
let resultElement = document.getElementById("result"); // Проучаем блок для отображения результата.

// Функция для отображения текущего вопроса и вариантов ответа.
function displayQuestion() {
    // Размещаем на странице текущий вопрос.
    questionElement.textContent = `${questions[currentQuestion].question}`;
    // Очистить блок кнопок.
    optionsElement.innerHTML = "";
    // Получим массив ответов.
    let optionsArray = questions[currentQuestion].options;
    // Создать кнопки с вариантами ответов и привязать к ним функцию nextQuestion
    optionsArray.forEach(el => {
        // Создать кнопку в памяти и записать е в переменную.
        let bt = document.createElement('button');
        // Добавить на кнопку текст из массива.
        bt.textContent = el;
        // Добавить кнопку на страницу.
        optionsElement.appendChild(bt);
        // Добавить класс к кнопке.
        bt.classList.add('btn');
    });
    // Обработка клика кнопки с ответом.
    optionsElement.addEventListener('click', (e) => {
        handleBtnClick(e)
    }, { once: true });
};

// Функция перехода к следующему вопросу.
function nextQuestion(answer) {
    if (answer === questions[currentQuestion].correctAnswer) {
        correctAnswers++;
    }
    currentQuestion++; // Перейти к следующему вопросу.
    if (currentQuestion < questions.length) {
        displayQuestion();
    } else {
        displayResult();
    }
};

function displayResult() {
    document.querySelector('.quiz-container').style.display = "none"; // Выключить видимость блока вопросов.
    optionsElement.style.display = "none"; // Выключить видимость блока результата.
    resultElement.style.opacity = 1;
    resultElement.textContent = `Правильных ответов ${correctAnswers} из ${questions.length}`;
}

function handleBtnClick(e) {
    // Проверка клика, чтобы он был совершен на кнопку.
    if (e.target.tagName === 'BUTTON') {
        let currentAnswer = e.target.textContent; // Текущий ответ.
        nextQuestion(currentAnswer);
    };
};

displayQuestion();