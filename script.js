const apiKey = '4ff21295bf8c42699c299b5874afcbe4'; // Replace with your NewsAPI key
const apiUrl = 'https://newsapi.org/v2/top-headlines?country=us&apiKey=' + apiKey;

// Function to fetch and display news articles
async function fetchNews() {
    try {
        const response = await fetch(apiUrl);
        const data = await response.json();
        
        if (data.status === 'ok') {
            const articles = data.articles;
            const newsContainer = document.getElementById('news-container');
            newsContainer.innerHTML = ''; // Clear existing news articles

            // Loop through articles and display them
            articles.forEach(article => {
                const articleElement = document.createElement('div');
                articleElement.classList.add('news-article');
                articleElement.innerHTML = `
                    <h2>${article.title}</h2>
                    <p>${article.description ? article.description : 'No description available.'}</p>
                    <a href="${article.url}" target="_blank">Read more</a>
                    <button class="listen-btn" onclick="readArticle('${article.title} ${article.description}')">Listen</button>
                `;
                newsContainer.appendChild(articleElement);
            });
        }
    } catch (error) {
        console.error('Error fetching news:', error);
    }
}

// Function to read out the news article using SpeechSynthesis API
function readArticle(text) {
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = 'en-US'; // Set the language of the speech
    utterance.volume = 1; // Set volume level (0 to 1)
    utterance.rate = 1; // Set rate of speech (1 is normal speed)
    utterance.pitch = 1; // Set pitch of the voice (1 is normal)

    // Speak the article text
    window.speechSynthesis.speak(utterance);
}

// Call fetchNews initially and then every 60 seconds
fetchNews();
setInterval(fetchNews, 60000);
