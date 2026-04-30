document.addEventListener('DOMContentLoaded', function () {
    // Инициализация карты
    const map = L.map('kazakhstanMap', {
        center: [48.0, 67.5],
        zoom: 4.4,
        minZoom: 3,
        maxZoom: 8,
        zoomControl: true,
        attributionControl: true
    });

    L.tileLayer('https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png', {
        maxZoom: 19,
        attribution: '© OpenStreetMap contributors, © CARTO'
    }).addTo(map);

    // Расширенный массив городов
    const cities = [
        {
            name: 'Актобе',
            coords: [50.283333, 57.166667],
            primary: true,
            address: 'ул. Абулхайр хана 52А',
            phone: '+7 778 233 8539',
            photo: 'images/aktobe.jpg'
        },
        {
            name: 'Костанай',
            coords: [53.214444, 63.624167],
            primary: true,
            address: 'пр. Абая 28/1',
            phone: '+7 778 233 8539',
            photo: 'images/kostanai.jpg'
        },
        { name: 'Астана', coords: [51.160523, 71.470356], primary: false, address: '', phone: '', photo: '' },
        { name: 'Алматы', coords: [43.238293, 76.945465], primary: false, address: '', phone: '', photo: '' },
        { name: 'Шымкент', coords: [42.3417, 69.5901], primary: false, address: '', phone: '', photo: '' },
        { name: 'Караганда', coords: [49.8069, 73.0851], primary: false, address: '', phone: '', photo: '' },
        { name: 'Павлодар', coords: [52.2860, 76.9670], primary: false, address: '', phone: '', photo: '' },
        { name: 'Усть-Каменогорск', coords: [49.9495, 82.6157], primary: false, address: '', phone: '', photo: '' }
    ];

    // Элементы карточки
    const card = document.getElementById('cityCard');
    const cardName = document.getElementById('cityCardName');
    const cardAddress = document.getElementById('cityCardAddress');
    const cardPhone = document.getElementById('cityCardPhone');
    const cardPhoto = document.getElementById('cityCardPhoto');
    const cardFallback = document.getElementById('cityCardFallback');
    const closeBtn = document.getElementById('cityCardClose');

    // Функция открытия карточки
    function openCard(city) {
        cardName.textContent = city.name;

        // Адрес
        if (city.address) {
            cardAddress.innerHTML = `<i class="fas fa-map-marker-alt"></i> ${city.address}`;
            cardAddress.style.display = 'block';
        } else {
            cardAddress.style.display = 'none';
        }

        // Телефон
        if (city.phone) {
            cardPhone.innerHTML = `<i class="fas fa-phone-alt"></i> <a href="tel:${city.phone.replace(/\s+/g, '')}">${city.phone}</a>`;
            cardPhone.style.display = 'block';
        } else {
            cardPhone.style.display = 'none';
        }

        // Фото или fallback
        if (city.photo) {
            cardPhoto.src = city.photo;
            cardPhoto.style.display = 'block';
            cardFallback.style.display = 'none';

            // Обработка ошибки загрузки фото
            cardPhoto.onerror = function () {
                cardPhoto.style.display = 'none';
                cardFallback.style.display = 'flex';
            };
        } else {
            cardPhoto.style.display = 'none';
            cardFallback.style.display = 'flex';
        }

        card.classList.add('active');

        // Центрируем карту на маркере при клике (опционально)
        // map.flyTo(city.coords, 6, { animate: true, duration: 1.0 });
    }

    // Функция закрытия карточки
    function closeCard() {
        card.classList.remove('active');
    }

    // Закрытие по крестику
    if (closeBtn) {
        closeBtn.addEventListener('click', closeCard);
    }

    // Закрытие при клике по карте
    map.on('click', function () {
        closeCard();
    });

    // Добавление маркеров
    cities.forEach(city => {
        const marker = L.circleMarker(city.coords, {
            radius: city.primary ? 10 : 6,
            color: city.primary ? '#ff4b4b' : '#7d8db9',
            fillColor: city.primary ? '#ff5b5b' : '#93a3d0',
            fillOpacity: 0.92,
            weight: city.primary ? 2.5 : 1.8,
            opacity: 1,
            interactive: true
        }).addTo(map);

        marker.bindTooltip(city.name, {
            direction: 'top',
            offset: [0, -10],
            opacity: 0.95,
            permanent: false,
            className: 'leaflet-tooltip-custom'
        });

        // Клик по маркеру
        marker.on('click', function (e) {
            // Останавливаем всплытие события, чтобы не сработал клик по карте
            L.DomEvent.stopPropagation(e);
            openCard(city);
        });
    });
});
