// ============================================
// 🌙 РАМАДАН 2026 — ЩЁЛКОВО (ИСПРАВЛЕННАЯ ВЕРСИЯ)
// ============================================

// 📅 ДАННЫЕ РАСПИСАНИЯ
const ramadanData = [
    {day: 1, date: '18.02, Ср.', fajr: '5:40', zuhr: '12:44', asrShafi: '15:06', asrHanafi: '15:45', maghrib: '17:40', isha: '19:38'},
    {day: 2, date: '19.02, Чт.', fajr: '5:38', zuhr: '12:44', asrShafi: '15:07', asrHanafi: '15:47', maghrib: '17:43', isha: '19:40'},
    {day: 3, date: '20.02, Пт.', fajr: '5:36', zuhr: '12:44', asrShafi: '15:09', asrHanafi: '15:49', maghrib: '17:45', isha: '19:42'},
    {day: 4, date: '21.02, Сб.', fajr: '5:34', zuhr: '12:44', asrShafi: '15:11', asrHanafi: '15:51', maghrib: '17:47', isha: '19:44'},
    {day: 5, date: '22.02, Вс.', fajr: '5:31', zuhr: '12:44', asrShafi: '15:12', asrHanafi: '15:53', maghrib: '17:49', isha: '19:46'},
    {day: 6, date: '23.02, Пн.', fajr: '5:29', zuhr: '12:43', asrShafi: '15:14', asrHanafi: '15:54', maghrib: '17:51', isha: '19:48'},
    {day: 7, date: '24.02, Вт.', fajr: '5:27', zuhr: '12:43', asrShafi: '15:15', asrHanafi: '15:56', maghrib: '17:53', isha: '19:50'},
    {day: 8, date: '25.02, Ср.', fajr: '5:24', zuhr: '12:43', asrShafi: '15:17', asrHanafi: '15:58', maghrib: '17:56', isha: '19:52'},
    {day: 9, date: '26.02, Чт.', fajr: '5:22', zuhr: '12:43', asrShafi: '15:19', asrHanafi: '16:00', maghrib: '17:58', isha: '19:54'},
    {day: 10, date: '27.02, Пт.', fajr: '5:19', zuhr: '12:43', asrShafi: '15:20', asrHanafi: '16:02', maghrib: '18:00', isha: '19:56'},
    {day: 11, date: '28.02, Сб.', fajr: '5:17', zuhr: '12:43', asrShafi: '15:22', asrHanafi: '16:04', maghrib: '18:02', isha: '19:58'},
    {day: 12, date: '1.03, Вс.', fajr: '5:14', zuhr: '12:42', asrShafi: '15:23', asrHanafi: '16:06', maghrib: '18:04', isha: '20:00'},
    {day: 13, date: '2.03, Пн.', fajr: '5:12', zuhr: '12:42', asrShafi: '15:25', asrHanafi: '16:08', maghrib: '18:06', isha: '20:02'},
    {day: 14, date: '3.03, Вт.', fajr: '5:09', zuhr: '12:42', asrShafi: '15:26', asrHanafi: '16:10', maghrib: '18:08', isha: '20:05'},
    {day: 15, date: '4.03, Ср.', fajr: '5:07', zuhr: '12:42', asrShafi: '15:28', asrHanafi: '16:11', maghrib: '18:10', isha: '20:07'},
    {day: 16, date: '5.03, Чт.', fajr: '5:04', zuhr: '12:42', asrShafi: '15:29', asrHanafi: '16:13', maghrib: '18:13', isha: '20:09'},
    {day: 17, date: '6.03, Пт.', fajr: '5:01', zuhr: '12:41', asrShafi: '15:31', asrHanafi: '16:15', maghrib: '18:15', isha: '20:11'},
    {day: 18, date: '7.03, Сб.', fajr: '4:59', zuhr: '12:41', asrShafi: '15:32', asrHanafi: '16:17', maghrib: '18:17', isha: '20:13'},
    {day: 19, date: '8.03, Вс.', fajr: '4:56', zuhr: '12:41', asrShafi: '15:33', asrHanafi: '16:19', maghrib: '18:19', isha: '20:16'},
    {day: 20, date: '9.03, Пн.', fajr: '4:53', zuhr: '12:41', asrShafi: '15:35', asrHanafi: '16:20', maghrib: '18:21', isha: '20:18'},
    {day: 21, date: '10.03, Вт.', fajr: '4:51', zuhr: '12:40', asrShafi: '15:36', asrHanafi: '16:22', maghrib: '18:23', isha: '20:20'},
    {day: 22, date: '11.03, Ср.', fajr: '4:48', zuhr: '12:40', asrShafi: '15:38', asrHanafi: '16:24', maghrib: '18:25', isha: '20:22'},
    {day: 23, date: '12.03, Чт.', fajr: '4:45', zuhr: '12:40', asrShafi: '15:39', asrHanafi: '16:26', maghrib: '18:27', isha: '20:25'},
    {day: 24, date: '13.03, Пт.', fajr: '4:42', zuhr: '12:40', asrShafi: '15:40', asrHanafi: '16:27', maghrib: '18:29', isha: '20:27'},
    {day: 25, date: '14.03, Сб.', fajr: '4:39', zuhr: '12:39', asrShafi: '15:42', asrHanafi: '16:29', maghrib: '18:31', isha: '20:29'},
    {day: 26, date: '15.03, Вс.', fajr: '4:36', zuhr: '12:39', asrShafi: '15:43', asrHanafi: '16:31', maghrib: '18:33', isha: '20:31'},
    {day: 27, date: '16.03, Пн.', fajr: '4:33', zuhr: '12:39', asrShafi: '15:44', asrHanafi: '16:32', maghrib: '18:35', isha: '20:34'},
    {day: 28, date: '17.03, Вт.', fajr: '4:30', zuhr: '12:38', asrShafi: '15:46', asrHanafi: '16:34', maghrib: '18:37', isha: '20:36'},
    {day: 29, date: '18.03, Ср.', fajr: '4:27', zuhr: '12:38', asrShafi: '15:47', asrHanafi: '16:36', maghrib: '18:39', isha: '20:39'},
    {day: 30, date: '19.03, Чт.', fajr: '4:24', zuhr: '12:38', asrShafi: '15:48', asrHanafi: '16:37', maghrib: '18:41', isha: '20:41'},
    {day: 31, date: '20.03, Пт.', fajr: '4:21', zuhr: '12:38', asrShafi: '15:50', asrHanafi: '16:39', maghrib: '18:44', isha: '20:43'}
];

// 🤲 ДУА
const duas = [
    {
        arabic: "اللَّهُمَّ إِنِّي أَسْأَلُكَ بِرَحْمَتِكَ الَّتِي وَسِعَتْ كُلَّ شَيْءٍ أَنْ تَغْفِرَ لِي",
        translation: "О Аллах, прошу Тебя Твоей милостью, прости меня"
    },
    {
        arabic: "اللَّهُمَّ إِنَّكَ عَفُوٌّ تُحِبُّ الْعَفْوَ فَاعْفُ عَنِّي",
        translation: "О Аллах, Ты Прощающий, любишь прощать, прости меня"
    }
];

// 📜 ЦИТАТЫ
const quotes = [
    { text: "«Когда наступает Рамадан, врата Рая открываются»", author: "— Пророк ﷺ" },
    { text: "«Пост — это щит, укрывающий от огня»", author: "— Пророк ﷺ" }
];

// 🧠 ОПРЕДЕЛЕНИЕ ДНЯ
function getCurrentRamadanDay() {
    const today = new Date();
    const ramadanStart = new Date(2026, 1, 18);
    
    today.setHours(0, 0, 0, 0);
    ramadanStart.setHours(0, 0, 0, 0);
    
    const diffTime = today - ramadanStart;
    const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24)) + 1;
    
    if (diffDays < 1) return 0;
    if (diffDays > 31) return 31;
    return diffDays;
}

function getDaysUntilRamadan() {
    const today = new Date();
    const ramadanStart = new Date(2026, 1, 18);
    today.setHours(0, 0, 0, 0);
    ramadanStart.setHours(0, 0, 0, 0);
    const diffTime = ramadanStart - today;
    return Math.ceil(diffTime / (1000 * 60 * 60 * 24));
}

// 🎯 ТЕКУЩИЙ ДЕНЬ
const currentDayNumber = getCurrentRamadanDay();
let currentDayIndex = currentDayNumber === 0 ? 0 : Math.min(currentDayNumber - 1, 30);

// 📋 ТАБЛИЦА
function populateTable() {
    const tableBody = document.getElementById('ramadanTableBody');
    if (!tableBody) return;
    
    tableBody.innerHTML = '';
    
    ramadanData.forEach((day, index) => {
        const row = document.createElement('tr');
        if (currentDayNumber !== 0 && index === currentDayIndex) {
            row.classList.add('current-day');
        }
        row.innerHTML = `
            <td><strong>${day.day}</strong></td>
            <td>${day.date}</td>
            <td>${day.fajr}</td>
            <td>${day.zuhr}</td>
            <td>${day.asrShafi}</td>
            <td>${day.asrHanafi}</td>
            <td><span class="iftar-time">${day.maghrib}</span></td>
            <td>${day.isha}</td>
        `;
        tableBody.appendChild(row);
    });
}

// 🎯 ОБНОВЛЕНИЕ
function updateCurrentDayInfo() {
    const currentDay = ramadanData[currentDayIndex];
    const daysUntilRamadan = getDaysUntilRamadan();
    
    // ⚡⚡⚡ ЭТО ГЛАВНОЕ! ПЕРЕРИСОВЫВАЕМ ТАБЛИЦУ ⚡⚡⚡
    populateTable();
    
    document.getElementById('suhoorTime').textContent = currentDay.fajr;
    document.getElementById('iftarTime').textContent = currentDay.maghrib;
    
    const countdownEl = document.getElementById('countdownText');
    if (daysUntilRamadan > 0) {
        countdownEl.innerHTML = `<i class="fas fa-hourglass-half"></i> До Рамадана: ${daysUntilRamadan}д`;
    } else {
        countdownEl.innerHTML = `<i class="fas fa-moon"></i> Рамадан идёт`;
    }
    
    if (currentDayNumber === 0) {
        document.getElementById('hijriDate').textContent = `Ожидание Рамадана`;
        document.getElementById('gregorianDate').textContent = new Date().toLocaleDateString('ru-RU');
        document.getElementById('currentDay').textContent = '✨';
        document.getElementById('dayName').textContent = `${daysUntilRamadan} дней до`;
    } else {
        document.getElementById('hijriDate').textContent = `${currentDay.day} Рамадана 1447`;
        document.getElementById('gregorianDate').textContent = currentDay.date;
        document.getElementById('currentDay').textContent = currentDay.day;
        document.getElementById('dayName').textContent = `${currentDay.day}-й день`;
    }
    
    const progressFill = document.getElementById('progressFill');
    const daysPassedEl = document.getElementById('daysPassed');
    const daysRemainingEl = document.getElementById('daysRemaining');
    
    if (currentDayNumber === 0) {
        progressFill.style.width = '0%';
        daysPassedEl.textContent = '0';
        daysRemainingEl.textContent = '(осталось 31)';
    } else {
        progressFill.style.width = `${(currentDayNumber / 31) * 100}%`;
        daysPassedEl.textContent = currentDayNumber;
        daysRemainingEl.textContent = `(осталось ${31 - currentDayNumber})`;
    }
}

// 🤲 ДУА ДНЯ
function updateDuaOfTheDay() {
    const duaIndex = currentDayNumber === 0 ? 0 : (currentDayNumber - 1) % duas.length;
    const dua = duas[duaIndex];
    document.getElementById('duaArabic').textContent = dua.arabic;
    document.getElementById('duaTranslation').textContent = dua.translation;
}

// 💭 ЦИТАТА
function updateQuoteOfTheDay() {
    const quote = quotes[Math.floor(Math.random() * quotes.length)];
    const quoteEl = document.getElementById('quoteOfDay');
    const authorEl = document.querySelector('.quote-author');
    if (quoteEl) quoteEl.textContent = quote.text;
    if (authorEl) authorEl.textContent = quote.author;
}

// ⏰ ЧАСЫ
function updateLiveClock() {
    const clockEl = document.getElementById('liveClock');
    if (clockEl) clockEl.textContent = new Date().toLocaleTimeString('ru-RU');
}

// 🚀 ЗАПУСК
document.addEventListener('DOMContentLoaded', () => {
    populateTable();
    updateCurrentDayInfo();
    updateDuaOfTheDay();
    updateQuoteOfTheDay();
    updateLiveClock();
    
    setInterval(updateLiveClock, 1000);
});
// ============================================
// 📅 КАРТОЧКИ ДНЕЙ - БЕЗ ТАБЛИЦЫ
// ============================================

let currentDisplayDay = currentDayNumber || 1;
if (currentDisplayDay === 0) currentDisplayDay = 1;

// ЭЛЕМЕНТЫ КАРТОЧКИ
const dayCardElements = {
    number: document.getElementById('cardDayNumber'),
    date: document.getElementById('cardDate'),
    fajr: document.getElementById('cardFajr'),
    zuhr: document.getElementById('cardZuhr'),
    asrShafi: document.getElementById('cardAsrShafi'),
    asrHanafi: document.getElementById('cardAsrHanafi'),
    maghrib: document.getElementById('cardMaghrib'),
    isha: document.getElementById('cardIsha'),
    currentDisplay: document.getElementById('currentDisplayDay'),
    minDay: document.getElementById('minDay'),
    maxDay: document.getElementById('maxDay'),
    dots: document.getElementById('dayDots')
};

// ФУНКЦИЯ ОБНОВЛЕНИЯ КАРТОЧКИ
function updateDayCard(dayNumber) {
    const dayData = ramadanData[dayNumber - 1];
    if (!dayData) return;
    
    // Обновляем все поля
    dayCardElements.number.textContent = dayData.day;
    dayCardElements.date.textContent = dayData.date;
    dayCardElements.fajr.textContent = dayData.fajr;
    dayCardElements.zuhr.textContent = dayData.zuhr;
    dayCardElements.asrShafi.textContent = dayData.asrShafi;
    dayCardElements.asrHanafi.textContent = dayData.asrHanafi;
    dayCardElements.maghrib.textContent = dayData.maghrib;
    dayCardElements.isha.textContent = dayData.isha;
    dayCardElements.currentDisplay.textContent = dayData.day;
    
    // Подсвечиваем текущий день
    if (currentDayNumber !== 0 && dayNumber === currentDayNumber) {
        document.querySelector('.day-card').classList.add('current-day-card');
    } else {
        document.querySelector('.day-card').classList.remove('current-day-card');
    }
    
    // Обновляем активную точку
    updateActiveDot(dayNumber);
}

// СОЗДАНИЕ ТОЧЕК-ИНДИКАТОРОВ
function createDayDots() {
    if (!dayCardElements.dots) return;
    
    dayCardElements.dots.innerHTML = '';
    dayCardElements.minDay.textContent = '1';
    dayCardElements.maxDay.textContent = '31';
    
    for (let i = 1; i <= 31; i++) {
        const dot = document.createElement('span');
        dot.classList.add('day-dot');
        dot.setAttribute('data-day', i);
        
        // Подсвечиваем сегодняшний день
        if (currentDayNumber !== 0 && i === currentDayNumber) {
            dot.classList.add('today');
        }
        
        // Клик по точке
        dot.addEventListener('click', function() {
            const day = parseInt(this.getAttribute('data-day'));
            currentDisplayDay = day;
            updateDayCard(day);
        });
        
        dayCardElements.dots.appendChild(dot);
    }
    
    // Активируем текущий день
    updateActiveDot(currentDisplayDay);
}

// АКТИВАЦИЯ ТОЧКИ
function updateActiveDot(dayNumber) {
    const dots = document.querySelectorAll('.day-dot');
    dots.forEach(dot => {
        dot.classList.remove('active');
        if (parseInt(dot.getAttribute('data-day')) === dayNumber) {
            dot.classList.add('active');
        }
    });
}

// НАВИГАЦИЯ ПО ДНЯМ
document.addEventListener('DOMContentLoaded', function() {
    // Создаём точки
    createDayDots();
    
    // Показываем первый день
    if (currentDayNumber !== 0) {
        currentDisplayDay = currentDayNumber;
    }
    updateDayCard(currentDisplayDay);
    
    // Кнопки навигации
    const prevBtn = document.getElementById('prevDayBtn');
    const nextBtn = document.getElementById('nextDayBtn');
    
    if (prevBtn) {
        prevBtn.addEventListener('click', function() {
            if (currentDisplayDay > 1) {
                currentDisplayDay--;
                updateDayCard(currentDisplayDay);
            }
        });
    }
    
    if (nextBtn) {
        nextBtn.addEventListener('click', function() {
            if (currentDisplayDay < 31) {
                currentDisplayDay++;
                updateDayCard(currentDisplayDay);
            }
        });
    }
});

// ДОБАВЛЯЕМ СТИЛИ ДЛЯ ТЕКУЩЕГО ДНЯ В КАРТОЧКЕ
const style = document.createElement('style');
style.textContent = `
    .day-card.current-day-card {
        border: 2px solid #ffd700;
        box-shadow: 0 0 30px rgba(255,215,0,0.3);
        animation: pulse-card 2s infinite;
    }
    
    @keyframes pulse-card {
        0% { box-shadow: 0 0 20px rgba(255,215,0,0.3); }
        50% { box-shadow: 0 0 40px rgba(255,215,0,0.5); }
        100% { box-shadow: 0 0 20px rgba(255,215,0,0.3); }
    }
`;
document.head.appendChild(style);
