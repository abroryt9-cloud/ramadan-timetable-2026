// ============================================
// 🌙 РАМАДАН 2026 — ЩЁЛКОВО
// Полное расписание с автоопределением даты
// ============================================

// --------------------------------------------
// 📅 ДАННЫЕ РАСПИСАНИЯ
// --------------------------------------------
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

// --------------------------------------------
// 🤲 КОЛЛЕКЦИЯ ДУА
// --------------------------------------------
const duas = [
    {
        arabic: "اللَّهُمَّ إِنِّي أَسْأَلُكَ بِرَحْمَتِكَ الَّتِي وَسِعَتْ كُلَّ شَيْءٍ أَنْ تَغْفِرَ لِي",
        translation: "О Аллах, прошу Тебя Твоей милостью, которая объяла всё, прости меня"
    },
    {
        arabic: "اللَّهُمَّ إِنَّكَ عَفُوٌّ تُحِبُّ الْعَفْوَ فَاعْفُ عَنِّي",
        translation: "О Аллах, поистине, Ты - Прощающий, любишь прощать, прости же меня"
    },
    {
        arabic: "رَبَّنَا آتِنَا فِي الدُّنْيَا حَسَنَةً وَفِي الْآخِرَةِ حَسَنَةً وَقِنَا عَذَابَ النَّارِ",
        translation: "Господь наш! Даруй нам в этом мире добро и в Последней жизни добро"
    },
    {
        arabic: "اللَّهُمَّ أَعِنِّي عَلَى ذِكْرِكَ وَشُكْرِكَ وَحُسْنِ عِبَادَتِكَ",
        translation: "О Аллах, помоги мне поминать Тебя, благодарить и поклоняться"
    },
    {
        arabic: "اللَّهُمَّ إِنِّي أَسْأَلُكَ الْجَنَّةَ وَأَعُوذُ بِكَ مِنَ النَّارِ",
        translation: "О Аллах, прошу у Тебя Рая и прибегаю от Ада"
    }
];

// --------------------------------------------
// 📜 КОЛЛЕКЦИЯ ЦИТАТ
// --------------------------------------------
const quotes = [
    { text: "«Когда наступает Рамадан, врата Рая открываются»", author: "— Пророк Мухаммад ﷺ" },
    { text: "«Кто постится в Рамадан с верой и надеждой, тому простятся прошлые грехи»", author: "— Пророк Мухаммад ﷺ" },
    { text: "«Пост — это щит, укрывающий от огня»", author: "— Пророк Мухаммад ﷺ" },
    { text: "«Садака в Рамадан — лучшая садака»", author: "— Пророк Мухаммад ﷺ" },
    { text: "«Поистине, у постящегося есть две радости»", author: "— Пророк Мухаммад ﷺ" }
];

// --------------------------------------------
// 🧠 ОПРЕДЕЛЕНИЕ ТЕКУЩЕГО ДНЯ
// --------------------------------------------
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

function getRamadanPhase(day) {
    if (day === 0) return "🕋 Ожидание Рамадана";
    if (day <= 10) return "🌙 Первая декада — Милость";
    if (day <= 20) return "✨ Вторая декада — Прощение";
    if (day <= 30) return "🔥 Третья декада — Спасение";
    return "🎉 Рамадан завершён";
}

// --------------------------------------------
// 🎯 ТЕКУЩИЙ ДЕНЬ
// --------------------------------------------
const currentDayNumber = getCurrentRamadanDay();
let currentDayIndex;

if (currentDayNumber === 0) {
    currentDayIndex = 0;
} else {
    currentDayIndex = Math.min(currentDayNumber - 1, 30);
}

// --------------------------------------------
// 📋 ТАБЛИЦА
// --------------------------------------------
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

// --------------------------------------------
:// 🎯 ОБНОВЛЕНИЕ ИНФОРМАЦИИ
// --------------------------------------------
function updateCurrentDayInfo() {
    const currentDay = ramadanData[currentDayIndex];
    const daysUntilRamadan = getDaysUntilRamadan();
    
    document.getElementById('suhoorTime').textContent = currentDay.fajr;
    document.getElementById('iftarTime').textContent = currentDay.maghrib;
    
    const countdownEl = document.getElementById('countdownText');
    if (daysUntilRamadan > 0) {
        countdownEl.innerHTML = `<i class="fas fa-hourglass-half"></i> До Рамадана: ${daysUntilRamadan} ${getDaysWord(daysUntilRamadan)}`;
    } else if (daysUntilRamadan === 0) {
        countdownEl.innerHTML = `<i class="fas fa-moon"></i> Рамадан начался! 🌙`;
    } else {
        countdownEl.innerHTML = `<i class="fas fa-star"></i> Рамадан идёт`;
    }
    
    if (currentDayNumber === 0) {
        document.getElementById('hijriDate').textContent = `Ожидание Рамадана`;
        document.getElementById('gregorianDate').textContent = new Date().toLocaleDateString('ru-RU', {
            day: 'numeric', month: 'long', year: 'numeric'
        });
        document.getElementById('currentDay').textContent = '✨';
        document.getElementById('dayName').textContent = `${daysUntilRamadan} дней до Рамадана`;
    } else {
        document.getElementById('hijriDate').textContent = `${currentDay.day} Рамадана 1447`;
        document.getElementById('gregorianDate').textContent = currentDay.date;
        document.getElementById('currentDay').textContent = currentDay.day;
        document.getElementById('dayName').textContent = `${currentDay.day}-й день Рамадана`;
    }
    
    const progressFill = document.getElementById('progressFill');
    const daysPassedEl = document.getElementById('daysPassed');
    const daysRemainingEl = document.getElementById('daysRemaining');
    
    let progressPercentage, daysDisplay, remainingDisplay;
    
    if (currentDayNumber === 0) {
        progressPercentage = 0;
        daysDisplay = 0;
        remainingDisplay = 31;
    } else {
        progressPercentage = (currentDayNumber / 31) * 100;
        daysDisplay = currentDayNumber;
        remainingDisplay = 31 - currentDayNumber;
    }
    
    progressFill.style.width = `${progressPercentage}%`;
    daysPassedEl.textContent = daysDisplay;
    daysRemainingEl.textContent = `(осталось ${remainingDisplay})`;
    
    const phaseEl = document.getElementById('ramadanPhase');
    if (phaseEl) phaseEl.textContent = getRamadanPhase(currentDayNumber);
}

// --------------------------------------------
:// 🔔 НАПОМИНАНИЯ
// --------------------------------------------
function updateReminders() {
    const now = new Date();
    const suhoorTime = document.getElementById('suhoorTime').textContent;
    const iftarTime = document.getElementById('iftarTime').textContent;
    
    const [suhoorHour, suhoorMin] = suhoorTime.split(':').map(Number);
    const [iftarHour, iftarMin] = iftarTime.split(':').map(Number);
    
    const currentMinutes = now.getHours() * 60 + now.getMinutes();
    const suhoorMinutes = suhoorHour * 60 + suhoorMin;
    const iftarMinutes = iftarHour * 60 + iftarMin;
    
    const suhoorReminder = document.getElementById('suhoorReminder');
    const iftarReminder = document.getElementById('iftarReminder');
    
    if (suhoorReminder) {
        const diff = suhoorMinutes - currentMinutes;
        if (diff > 0 && diff < 60) suhoorReminder.textContent = `⏰ ${diff}мин`;
        else suhoorReminder.textContent = '🌙';
    }
    
    if (iftarReminder) {
        const diff = iftarMinutes - currentMinutes;
        if (diff > 0 && diff < 60) iftarReminder.textContent = `⏰ ${diff}мин`;
        else if (diff < 0 && diff > -60) iftarReminder.textContent = `🍽️ Сейчас`;
        else iftarReminder.textContent = '⭐';
    }
}

// --------------------------------------------
:// 🤲 ДУА ДНЯ
// --------------------------------------------
function updateDuaOfTheDay() {
    let duaIndex;
    if (currentDayNumber === 0) duaIndex = Math.floor(Math.random() * duas.length);
    else duaIndex = (currentDayNumber - 1) % duas.length;
    
    const dua = duas[duaIndex];
    document.getElementById('duaArabic').textContent = dua.arabic;
    document.getElementById('duaTranslation').textContent = dua.translation;
}

// --------------------------------------------
:// 💭 ЦИТАТА ДНЯ
// --------------------------------------------
function updateQuoteOfTheDay() {
    const quoteIndex = Math.floor(Math.random() * quotes.length);
    const quote = quotes[quoteIndex];
    
    const quoteEl = document.getElementById('quoteOfDay');
    const authorEl = document.querySelector('.quote-author');
    
    if (quoteEl) quoteEl.textContent = quote.text;
    if (authorEl) authorEl.textContent = quote.author;
}

// --------------------------------------------
:// ⏰ ЖИВЫЕ ЧАСЫ
// --------------------------------------------
function updateLiveClock() {
    const clockEl = document.getElementById('liveClock');
    if (!clockEl) return;
    
    const now = new Date();
    clockEl.textContent = now.toLocaleTimeString('ru-RU');
}

function getDaysWord(days) {
    if (days % 10 === 1 && days % 100 !== 11) return 'день';
    if ([2,3,4].includes(days % 10) && ![12,13,14].includes(days % 100)) return 'дня';
    return 'дней';
}

// --------------------------------------------
:// 🚀 ЗАПУСК
// --------------------------------------------
document.addEventListener('DOMContentLoaded', () => {
    populateTable();
    updateCurrentDayInfo();
    updateDuaOfTheDay();
    updateQuoteOfTheDay();
    updateLiveClock();
    updateReminders();
    
    setInterval(updateLiveClock, 1000);
    setInterval(updateReminders, 60000);
});
