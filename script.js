document.addEventListener('DOMContentLoaded', () => {
    
    // ==========================================
    // 0. GLOBÁLNÍ PROMĚNNÉ
    // ==========================================
    let animationFrameId; 

    // ==========================================
    // 1. ZÁKLADNÍ UI (Menu, Dark Mode)
    // ==========================================

    const menuToggle = document.querySelector('.menu-toggle');
    const navOverlay = document.querySelector('.nav-overlay');
    if (menuToggle) {
        menuToggle.addEventListener('click', () => {
            navOverlay.classList.toggle('active');
            menuToggle.classList.toggle('is-active');
        });
    }

    const themeToggleBtn = document.getElementById('theme-toggle');
    const body = document.body;
    
    const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const savedTheme = localStorage.getItem('theme');
    
    const updateIcon = (isDark) => { 
        if(themeToggleBtn) themeToggleBtn.innerHTML = isDark ? '☀️' : '🌙'; 
    };

    if (savedTheme === 'dark') { 
        body.classList.add('dark-mode'); updateIcon(true); 
    } else if (savedTheme === 'light') { 
        body.classList.add('light-mode'); updateIcon(false); 
    } else if (systemPrefersDark) { 
        updateIcon(true); 
    }

    if (themeToggleBtn) {
        themeToggleBtn.addEventListener('click', () => {
            const isDark = body.classList.contains('dark-mode') || 
                           (!body.classList.contains('light-mode') && window.matchMedia('(prefers-color-scheme: dark)').matches);
            
            if (isDark) {
                body.classList.remove('dark-mode'); body.classList.add('light-mode');
                localStorage.setItem('theme', 'light'); updateIcon(false);
            } else {
                body.classList.remove('light-mode'); body.classList.add('dark-mode');
                localStorage.setItem('theme', 'dark'); updateIcon(true);
            }
        });
    }


    // ==========================================
    // 2. SLOVNÍČEK - INIT
    // ==========================================
    const contentArea = document.getElementById('contentArea');
    if (contentArea) {
        initDictionaryApp();
    }

    // ==========================================
    // 3. BLOG - INIT
    // ==========================================
    const blogGrid = document.getElementById('blog-grid');
    const articleModal = document.getElementById('article-modal');
    
    if (blogGrid && typeof blogData !== 'undefined') {
        blogData.forEach(article => {
            const card = document.createElement('div');
            card.className = 'card blog-item scroll-card span-2'; 
            card.innerHTML = `
                <img src="${article.image}" alt="${article.title}" class="blog-image">
                <span class="date">${article.date}</span>
                <h3>${article.title}</h3>
                <p>${article.perex}</p>
            `;
            card.addEventListener('click', () => openModal(articleModal, article));
            blogGrid.appendChild(card);
        });
    }

    // ==========================================
    // 4. VÝUKOVÉ MATERIÁLY - INIT
    // ==========================================
    const materialsGrid = document.getElementById('materials-grid');
    const materialModal = document.getElementById('material-modal');

    if (materialsGrid && typeof materialsData !== 'undefined') {
        materialsData.forEach(item => {
            const card = document.createElement('div');
            card.className = 'card blog-item scroll-card span-2'; 
            card.innerHTML = `
                <img src="${item.image}" alt="${item.title}" class="blog-image">
                <h3>${item.title}</h3>
                <p>${item.perex}</p>
            `;
            card.addEventListener('click', () => openModal(materialModal, item));
            materialsGrid.appendChild(card);
        });
    }

    // ==========================================
    // 5. HRY - INIT (NOVÁ SEKCE)
    // ==========================================
    const gamesGrid = document.getElementById('games-grid');
    const gameModal = document.getElementById('game-modal');

    if (gamesGrid && typeof gamesData !== 'undefined') {
        gamesData.forEach(item => {
            const card = document.createElement('div');
            // Pro hry použijeme stejný styl jako pro materiály
            card.className = 'card blog-item scroll-card span-2'; 
            
            card.innerHTML = `
                <img src="${item.image}" alt="${item.title}" class="blog-image">
                <h3>${item.title}</h3>
                <p>${item.perex}</p>
            `;
            
            card.addEventListener('click', () => openModal(gameModal, item));
            gamesGrid.appendChild(card);
        });
    }


    // ==========================================
    // 6. MODÁLNÍ OKNA - UNIVERZÁLNÍ LOGIKA
    // ==========================================
    
    function openModal(modalEl, data) {
        if (!modalEl) return;
        
        const titleEl = modalEl.querySelector('#modal-title');
        const dateEl = modalEl.querySelector('#modal-date'); 
        const imgEl = modalEl.querySelector('#modal-image');
        const bodyEl = modalEl.querySelector('#modal-body');

        if (titleEl) titleEl.innerText = data.title;
        if (dateEl && data.date) dateEl.innerText = data.date;
        if (imgEl) imgEl.src = data.image;
        if (bodyEl) bodyEl.innerHTML = data.content;
        
        modalEl.classList.add('active');
        document.body.classList.add('no-scroll');
        
        setupModalClose(modalEl);
    }

    function setupModalClose(modalEl) {
        const closeBtn = modalEl.querySelector('.close-modal');
        
        const close = () => {
            modalEl.classList.remove('active');
            document.body.classList.remove('no-scroll');
        };

        if (closeBtn) closeBtn.onclick = close;
        
        modalEl.onclick = (e) => {
            if (e.target === modalEl) close();
        };

        document.onkeydown = (e) => {
            if (e.key === 'Escape' && modalEl.classList.contains('active')) {
                close();
            }
        };
    }


    // ==========================================
    // 7. SPUŠTĚNÍ ANIMACÍ
    // ==========================================
    startFluidAnimation();
    window.addEventListener('resize', startFluidAnimation);


    // ==========================================
    // DEFINICE FUNKCÍ (Slovníček, Animace)
    // ==========================================

    function initDictionaryApp() {
        const alphabetContainer = document.getElementById('alphabetContainer');
        const searchInput = document.getElementById('searchInput');
        const modeBtns = document.querySelectorAll('.mode-btn');
        const resetBtn = document.getElementById('resetFilters');
        const modeHighlight = document.querySelector('.mode-highlight');

        let currentMode = 'terms';
        let currentSearch = '';
        let activeLetter = null;

        renderAlphabet();
        renderContent();

        function getGroupLetter(title) {
            if (!title) return '#';
            const lower = title.toLowerCase();
            if (lower.startsWith('ch')) return 'CH';
            return title.charAt(0).toUpperCase();
        }

        modeBtns.forEach(btn => {
            btn.addEventListener('click', (e) => {
                currentMode = e.target.dataset.mode;
                modeBtns.forEach(b => b.classList.remove('active'));
                e.target.classList.add('active');
                if (modeHighlight) {
                    modeHighlight.style.transform = currentMode === 'terms' ? 'translateX(0%)' : 'translateX(100%)';
                }
                activeLetter = null;
                currentSearch = '';
                if (searchInput) searchInput.value = '';
                renderAlphabet();
                renderContent();
            });
        });

        if (searchInput) {
            searchInput.addEventListener('input', (e) => {
                currentSearch = e.target.value.toLowerCase();
                activeLetter = null; 
                renderAlphabet();
                renderContent();
            });
        }

        function handleLetterClick(letter) {
            if (activeLetter === letter) {
                activeLetter = null; 
            } else {
                activeLetter = letter;
                if (searchInput) searchInput.value = ''; 
                currentSearch = '';
            }
            renderAlphabet();
            renderContent();
            if (activeLetter) {
                const firstElement = document.querySelector('.letter-system');
                if (firstElement) {
                    firstElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }
            }
        }

        function renderAlphabet() {
            if (!alphabetContainer) return;
            alphabetContainer.innerHTML = '';
            
            const alphabet = [
                'A', 'B', 'C', 'Č', 'D', 'E', 'F', 'G', 'H', 'CH', 'I', 'J', 'K', 'L', 'M', 
                'N', 'O', 'P', 'Q', 'R', 'Ř', 'S', 'Š', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', 'Ž'
            ];
            
            const data = dictionaryData[currentMode];
            const availableLetters = new Set();
            
            data.forEach(item => {
                availableLetters.add(getGroupLetter(item.title));
            });

            alphabet.forEach(char => {
                const btn = document.createElement('button');
                btn.className = 'letter-btn';
                btn.innerText = char;
                if (!availableLetters.has(char)) btn.disabled = true;
                if (activeLetter === char) btn.classList.add('active');
                btn.addEventListener('click', () => handleLetterClick(char));
                alphabetContainer.appendChild(btn);
            });

            if (resetBtn) {
                resetBtn.style.display = (activeLetter || currentSearch) ? 'block' : 'none';
                resetBtn.onclick = () => {
                    activeLetter = null;
                    currentSearch = '';
                    searchInput.value = '';
                    renderAlphabet();
                    renderContent();
                };
            }
        }

        function renderContent() {
            contentArea.innerHTML = '';
            const data = dictionaryData[currentMode];
            
            const filteredData = data.filter(item => {
                const matchesSearch = item.title.toLowerCase().includes(currentSearch) || 
                                      item.desc.toLowerCase().includes(currentSearch);
                let matchesLetter = true;
                if (activeLetter) {
                    matchesLetter = (getGroupLetter(item.title) === activeLetter);
                }
                return matchesSearch && matchesLetter;
            });

            if (filteredData.length === 0) {
                contentArea.innerHTML = '<div style="text-align:center; padding: 100px 20px; color: var(--text-muted); font-size: 1.2rem;">Pro tento výraz jsme nic nenašli 😔</div>';
                return;
            }

            const grouped = {};
            filteredData.forEach(item => {
                const group = getGroupLetter(item.title);
                if (!grouped[group]) grouped[group] = [];
                grouped[group].push(item);
            });

            Object.keys(grouped)
                .sort((a, b) => a.localeCompare(b, 'cs')) 
                .forEach(groupKey => {
                
                const system = document.createElement('div');
                system.className = 'letter-system';
                if (activeLetter) system.classList.add('focused'); 

                const sun = document.createElement('div');
                sun.className = 'letter-sun';
                sun.innerText = groupKey;
                system.appendChild(sun);

                const orbit = document.createElement('div');
                orbit.className = 'terms-orbit';

                const sortedTerms = grouped[groupKey].sort((a, b) => a.title.localeCompare(b.title, 'cs'));

                sortedTerms.forEach(term => {
                    const blob = document.createElement('div');
                    blob.className = `term-blob scroll-card ${currentMode === 'fallacies' ? 'fallacy' : ''}`;
                    blob.innerHTML = `
                        <h3>${term.title}</h3>
                        <p>${term.desc}</p>
                    `;
                    orbit.appendChild(blob);
                });

                system.appendChild(orbit);
                contentArea.appendChild(system);
            });
            
            startFluidAnimation();
        }
    }

    function startFluidAnimation() {
        if (animationFrameId) cancelAnimationFrame(animationFrameId);
        
        const cards = document.querySelectorAll('.scroll-card');
        const isMobile = window.innerWidth < 768;
        const windowHeight = window.innerHeight;
        const centerLine = windowHeight / 2;
        const lerp = (start, end, factor) => start + (end - start) * factor;

        cards.forEach(card => {
            if (!card.renderState) {
                card.renderState = { scale: 0.9, opacity: 0, y: 50 };
            }
        });
        
        function animate() {
            cards.forEach(card => {
                if (!card.isConnected) return;
                if (!card.renderState) card.renderState = { scale: 0.9, opacity: 0, y: 0 };

                const rect = card.getBoundingClientRect();
                
                if (rect.bottom < -50 || rect.top > windowHeight + 50) return;

                const elementCenter = rect.top + (rect.height / 2);
                const distance = Math.abs(centerLine - elementCenter);
                const maxDistance = windowHeight / 1.5; 
                
                let targetScale = 1;
                let targetOpacity = 1;
                let targetY = 0;
                let targetZIndex = 1;

                if (distance < maxDistance) {
                    const factor = distance / maxDistance;
                    const smoothFactor = Math.cos(factor * (Math.PI / 2)); 
                    
                    const minScale = isMobile ? 0.95 : 0.85; 
                    const minOpacity = isMobile ? 0.8 : 0.4;
                    
                    targetScale = minScale + (smoothFactor * (1 - minScale));
                    targetOpacity = minOpacity + (smoothFactor * (1 - minOpacity));
                    targetY = 0; 
                } else {
                    targetScale = isMobile ? 0.95 : 0.85;
                    targetOpacity = isMobile ? 0.8 : 0.4;
                }

                if (!isMobile && card.matches(':hover')) {
                    targetScale = 1.02; 
                    targetOpacity = 1;  
                    targetY = -12; 
                    targetZIndex = 100; 
                }

                card.renderState.scale = lerp(card.renderState.scale, targetScale, 0.1);
                card.renderState.opacity = lerp(card.renderState.opacity, targetOpacity, 0.1);
                card.renderState.y = lerp(card.renderState.y, targetY, 0.2); 

                card.style.zIndex = targetZIndex;
                card.style.transform = `translate3d(0, ${card.renderState.y}px, 0) scale(${card.renderState.scale})`;
                card.style.opacity = card.renderState.opacity;
            });

            animationFrameId = requestAnimationFrame(animate);
        }

        animate();
    }
});