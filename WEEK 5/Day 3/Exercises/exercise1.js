document.addEventListener('DOMContentLoaded', function() {
    const characterInfo = document.getElementById('character-info');
    const findBtn = document.getElementById('find-btn');
    const starsContainer = document.getElementById('stars');
    
    createStars();
    
    findBtn.addEventListener('click', fetchRandomCharacter);
    
    function createStars() {
        for (let i = 0; i < 200; i++) {
            const star = document.createElement('div');
            star.className = 'star';
            
            const size = Math.random() * 2 + 1;
            star.style.width = `${size}px`;
            star.style.height = `${size}px`;
            
            star.style.left = `${Math.random() * 100}%`;
            star.style.top = `${Math.random() * 100}%`;
            
            star.style.setProperty('--duration', `${Math.random() * 3 + 2}s`);
            
            starsContainer.appendChild(star);
        }
    }
    
    async function fetchRandomCharacter() {
        characterInfo.innerHTML = '<p class="loading"><i class="fas fa-spinner fa-spin"></i> Loading...</p>';
        
        try {
            const countResponse = await fetch('https://www.swapi.tech/api/people/');
            const countData = await countResponse.json();
            const totalCharacters = countData.total_records;
            
            const randomId = Math.floor(Math.random() * totalCharacters) + 1;
            
            const response = await fetch(`https://www.swapi.tech/api/people/${randomId}`);
            
            if (!response.ok) {
                throw new Error('Character not available');
            }
            
            const data = await response.json();
            const character = data.result.properties;
            
            const homeworldResponse = await fetch(character.homeworld);
            const homeworldData = await homeworldResponse.json();
            const homeworld = homeworldData.result.properties.name;
            
            displayCharacter(character, homeworld);
        } catch (error) {
            console.error('Error:', error);
            displayError();
        }
    }
    
    function displayCharacter(character, homeworld) {
        characterInfo.innerHTML = `
            <p><strong>Name:</strong> ${character.name}</p>
            <p><strong>Height:</strong> ${character.height} cm</p>
            <p><strong>Gender:</strong> ${character.gender}</p>
            <p><strong>Birth Year:</strong> ${character.birth_year}</p>
            <p><strong>Home World:</strong> ${homeworld}</p>
        `;
    }
    
    function displayError() {
        characterInfo.innerHTML = `
            <p class="error">Oh No! That person isn't available.</p>
        `;
    }
});