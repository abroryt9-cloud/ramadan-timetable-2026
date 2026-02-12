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
        translation: "Господь наш! Даруй нам в этом мире добро и в Последней жизни добро и защити нас от мучений в Огне"
    },
    {
        arabic: "اللَّهُمَّ أَعِنِّي عَلَى ذِكْرِكَ وَشُكْرِكَ وَحُسْنِ عِبَادَتِكَ",
        translation: "О Аллах, помоги мне поминать Тебя, благодарить Тебя и должным образом поклоняться Тебе"
    },
    {
        arabic: "اللَّهُمَّ إِنِّي أَسْأَلُكَ الْجَنَّةَ وَأَعُوذُ بِكَ مِنَ النَّارِ",
        translation: "О Аллах, прошу у Тебя Рая и прибегаю к Тебе от Ада"
    }
];

// --------------------------------------------
// 📌 КОЛЛЕКЦИЯ ЦИТАТ
// --------------------------------------------
const quotes = [
    { text: "«Когда наступает Рамадан, врата Рая открываются»", author: "— Пророк Мухаммад ﷺ" },
    { text: "«Кто постится в Рамадан с верой и надеждой, тому простятся прошлые грехи»", author: "— Пророк Мухаммад ﷺ" },
    { text: "«Пост — это щит, укрывающий от огня»", author: "— Пророк Мухаммад ﷺ" },
    { text: "«Садака в Рамадан — лучшая садака»", author: "— Пророк Мухаммад ﷺ" },
    { text: "«Поистине, у постящегося есть две радости: радость при разговении и радость при встрече с Господом»", author: "— Пророк Мухаммад ﷺ" }
];

// --------------------------------------------
// 🧠 ОПРЕДЕЛЕНИЕ ТЕКУЩЕГО ДНЯ РАМАДАНА
// --------------------------------------------
function getCurrentRamadanDay() {
    const today = new Date();
    const ramadanStart = new Date(2026, 1, 18); // 18 февраля 2026
    
    // Обнуляем время для точного сравнения
    today.setHours(0, 0, 0, 0);
    ramadanStart.setHours(0, 0, 0, 0);
    
    const diffTime = today - ramadanStart;
    const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24)) + 1;
    
    // Логирование для отладки
    console.log('Сегодня:', today.toLocaleDateString('ru-RU'));
    console.log('Начало Рамадана:', ramadanStart.toLocaleDateString('ru-RU'));
    console.log('Разница в днях:', diffDays);
    
    // Если ещё не начался
    if (diffDays < 1) {
        console.log('Статус: До Рамадана');
        return 0; // Специальное значение
    }
    
    // Если идёт Рамадан
    if (diffDays >= 1 && diffDays <= 31) {
        console.log('Статус: Рамадан, день', diffDays);
        return diffDays;
    }
    
    // Если Рамадан закончился
    console.log('Статус: Рамадан завершён');
    return 31; // Показываем последний день
}

// --------------------------------------------
// ⏰ ОБРАТНЫЙ ОТСЧЁТ ДО РАМАДАНА
// --------------------------------------------
function getDaysUntilRamadan() {
    const today = new Date();
    const ramadanStart = new Date(2026, 1, 18);
    
    today.setHours(0, 0, 0, 0);
    ramadanStart.setHours(0, 0, 0, 0);
    
    const diffTime = ramadanStart - today;
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    
    return diffDays > 0 ? diffDays : 0;
}

// --------------------------------------------
// 🕋 ПОЛУЧЕНИЕ ФАЗЫ РАМАДАНА
// --------------------------------------------
function getRamadanPhase(day) {
    if (day === 0) return "🕋 Ожидание Рамадана";
    if (day <= 10) return "🌙 Первая декада — Милость";
    if (day <= 20) return "✨ Вторая декада — Прощение";
    if (day <= 30) return "🔥 Третья декада — Спасение от Огня";
    return "🎉 Рамадан завершён";
}

// --------------------------------------------
// 📊 ОПРЕДЕЛЯЕМ ТЕКУЩИЙ ДЕНЬ
// --------------------------------------------
const currentDayNumber = getCurrentRamadanDay();
let currentDayIndex;

if (currentDayNumber === 0) {
    // До Рамадана — показываем 1-й день как предпросмотр
    currentDayIndex = 0;
} else {
    // Во время или после Рамадана
    currentDayIndex = Math.min(currentDayNumber - 1, 30);
}

// --------------------------------------------
// 📋 ЗАПОЛНЕНИЕ ТАБЛИЦЫ
// --------------------------------------------
function populateTable() {
    const tableBody = document.getElementById('ramadanTableBody');
    if (!tableBody) return;
    
    tableBody.innerHTML = '';
    
    ramadanData.forEach((day, index) => {
        const row = document.createElement('tr');
        
        // Подсвечиваем текущий день
        if (currentDayNumber !== 0 && index === currentDayIndex) {
            row.classList.add('current-day');
        }
        
        // Подсвечиваем 27 ночь (Ляйлятуль-Кадр)
        if (day.day === 27) {
            row.classList.add('laylatul-qadr');
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
// 🎯 ОБНОВЛЕНИЕ ИНФОРМАЦИИ О ТЕКУЩЕМ ДНЕ
// --------------------------------------------
function updateCurrentDayInfo() {
    const currentDay = ramadanData[currentDayIndex];
    const daysUntilRamadan = getDaysUntilRamadan();
    
    // Обновляем время сухура и ифтара
    document.getElementById('suhoorTime').textContent = currentDay.fajr;
    document.getElementById('iftarTime').textContent = currentDay.maghrib;
    
    // Обновляем обратный отсчёт
    const countdownEl = document.getElementById('countdownText');
    if (daysUntilRamadan > 0) {
        countdownEl.innerHTML = `<i class="fas fa-hourglass-half"></i> До Рамадана: ${daysUntilRamadan} ${getDaysWord(daysUntilRamadan)}`;
    } else if (daysUntilRamadan === 0) {
        countdownEl.innerHTML = `<i class="fas fa-moon"></i> Рамадан начался! 🌙`;
    } else {
        const daysPassed = Math.abs(daysUntilRamadan);
        countdownEl.innerHTML = `<i class="fas fa-star"></i> Рамадан: ${daysPassed} ${getDaysWord(daysPassed)}`;
    }
    
    // Обновляем информацию о дате
    if (currentDayNumber === 0) {
        // До Рамадана
        document.getElementById('hijriDate').textContent = `Ожидание Рамадана`;
        document.getElementById('gregorianDate').textContent = new Date().toLocaleDateString('ru-RU', {
            day: 'numeric', month: 'long', year: 'numeric', weekday: 'short'
        });
        document.getElementById('currentDay').textContent = '✨';
        document.getElementById('dayName').textContent = `${daysUntilRamadan} дней до Рамадана`;
    } else {
        // Во время или после Рамадана
        document.getElementById('hijriDate').textContent = `${currentDay.day} Рамадана 1447`;
        document.getElementById('gregorianDate').textContent = currentDay.date;
        document.getElementById('currentDay').textContent = currentDay.day;
        document.getElementById('dayName').textContent = `${currentDay.day}-й день Рамадана`;
    }
    
    // Обновляем прогресс
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
    
    // Обновляем фазу Рамадана
    const phaseEl = document.getElementById('ramadanPhase');
    if (phaseEl) {
        phaseEl.textContent = getRamadanPhase(currentDayNumber);
    }
    
    // Обновляем напоминания
    updateReminders();
}

// --------------------------------------------
:// 🔔 ОБНОВЛЕНИЕ НАПОМИНАНИЙ
// --------------------------------------------
function updateReminders() {
    const now = new Date();
    const currentHour = now.getHours();
    const currentMinute = now.getMinutes();
    
    // Парсим время сухура и ифтара
    const suhoorTime = document.getElementById('suhoorTime').textContent;
    const iftarTime = document.getElementById('iftarTime').textContent;
    
    const [suhoorHour, suhoorMin] = suhoorTime.split(':').map(Number);
    const [iftarHour, iftarMin] = iftarTime.split(':').map(Number);
    
    // Напоминание о сухуре
    const suhoorReminder = document.getElementById('suhoorReminder');
    if (suhoorReminder) {
        const timeDiff = (suhoorHour * 60 + suhoorMin) - (currentHour * 60 + currentMinute);
        if (timeDiff > 0 && timeDiff < 60) {
            suhoorReminder.textContent = `⏰ Через ${timeDiff} мин`;
            suhoorReminder.style.background = '#ffd700';
        } else {
            suhoorReminder.textContent = '🌙';
        }
    }
    
    // Напоминание об ифтаре
    const iftarReminder = document.getElementById('iftarReminder');
    if (iftarReminder) {
        const timeDiff = (iftarHour * 60 + iftarMin) - (currentHour * 60 + currentMinute);
        if (timeDiff > 0 && timeDiff < 60) {
            iftarReminder.textContent = `⏰ Через ${timeDiff} мин`;
            iftarReminder.style.background = '#ffd700';
        } else if (timeDiff < 0 && timeDiff > -60) {
            iftarReminder.textContent = `🍽️ Ифтар начался`;
            iftarReminder.style.background = '#4caf50';
        } else {
            iftarReminder.textContent = '⭐';
        }
    }
}

// --------------------------------------------
// 🤲 ОБНОВЛЕНИЕ ДУА ДНЯ
// --------------------------------------------
function updateDuaOfTheDay() {
    let duaIndex;
    
    if (currentDayNumber === 0) {
        // До Рамадана — случайное дуа
        duaIndex = Math.floor(Math.random() * duas.length);
    } else {
        // Во время Рамадана — дуа по дню
        duaIndex = (currentDayNumber - 1) % duas.length;
    }
    
    const dua = duas[duaIndex];
    
    document.getElementById('duaArabic').textContent = dua.arabic;
    document.getElementById('duaTranslation').textContent = dua.translation;
}

// --------------------------------------------
:// 💭 ОБНОВЛЕНИЕ ЦИТАТЫ ДНЯ
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
// 🔍 ПОИСК ПО ТАБЛИЦЕ
// --------------------------------------------
function setupSearch() {
    const searchInput = document.getElementById('tableSearch');
    if (!searchInput) return;
    
    searchInput.addEventListener('keyup', function() {
        const searchTerm = this.value.toLowerCase();
        const tableRows = document.querySelectorAll('#ramadanTableBody tr');
        
        tableRows.forEach(row => {
            const text = row.textContent.toLowerCase();
            row.style.display = text.includes(searchTerm) ? '' : 'none';
        });
    });
}

// --------------------------------------------
// ⏰ ЖИВЫЕ ЧАСЫ
// --------------------------------------------
function updateLiveClock() {
    const clockEl = document.getElementById('liveClock');
    if (!clockEl) return;
    
    const now = new Date();
    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const seconds = now.getSeconds().toString().padStart(2, '0');
    
    clockEl.textContent = `${hours}:${minutes}:${seconds}`;
}

// --------------------------------------------
// 📝 ВСПОМОГАТЕЛЬНЫЕ ФУНКЦИИ
// --------------------------------------------
function getDaysWord(days) {
    if (days % 10 === 1 && days % 100 !== 11) return 'день';
    if ([2,3,4].includes(days % 10) && ![12,13,14].includes(days % 100)) return 'дня';
    return 'дней';
}

// --------------------------------------------
// 🚀 ИНИЦИАЛИЗАЦИЯ
// --------------------------------------------
document.addEventListener('DOMContentLoaded', () => {
    console.log('🌙 Сайт Рамадан 2026 загружен');
    
    populateTable();
    updateCurrentDayInfo();
    updateDuaOfTheDay();
    updateQuoteOfTheDay();
    setupSearch();
    updateLiveClock();
    
    // Обновляем часы каждую секунду
    setInterval(updateLiveClock, 1000);
    
    // Обновляем напоминания каждую минуту
    setInterval(updateReminders, 60000);
    
    // Добавляем эффект появления
    document.body.classList.add('fade-in');
});

// Обработка ошибок
window.onerror = function(msg, url, line) {
    console.log('Ошибка:', msg, 'на строке', line);
    return false;
};
