const apiKey = 'hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My';
const searchForm = document.getElementById('searchForm');
const searchInput = document.getElementById('searchInput');
const gifsContainer = document.getElementById('gifsContainer');
const deleteAllBtn = document.getElementById('deleteAllBtn');

async function fetchRandomGif(category) {
    try {
        const response = await fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}&tag=${category}`);
        
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        
        const data = await response.json();
        return data.data.images.original.url;
    } catch (error) {
        console.error("Error fetching gif:", error);
        return null;
    }
}

function createGifElement(gifUrl) {
    const gifContainer = document.createElement('div');
    gifContainer.className = 'gif-container';

    const img = document.createElement('img');
    img.src = gifUrl;
    img.className = 'gif-image';

    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'DELETE';
    deleteBtn.className = 'delete-btn';
    deleteBtn.addEventListener('click', () => gifContainer.remove());

    gifContainer.appendChild(img);
    gifContainer.appendChild(deleteBtn);
    gifsContainer.appendChild(gifContainer);
}

searchForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const searchTerm = searchInput.value.trim();
    
    if (searchTerm) {
        const gifUrl = await fetchRandomGif(searchTerm);
        if (gifUrl) {
            createGifElement(gifUrl);
            searchInput.value = '';
        }
    }
});

deleteAllBtn.addEventListener('click', () => {
    gifsContainer.innerHTML = '';
});