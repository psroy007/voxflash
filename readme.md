## VoxFlash

VoxFlash is a real-time news application that fetches the latest headlines and reads them aloud using voice synthesis. The project combines live news updates with interactive voice functionality, providing an engaging way to consume news without needing to read it.

# With VoxFlash, you can:

- Stay updated with the latest news in real time.
- Listen to the news articles being read aloud using the browser's built-in speech synthesis.
- Enjoy an interactive news experience that updates every minute.


## Features

- Real-Time News Updates: Fetches the latest headlines every 60 seconds.
- Voice Integration: Click on a news article to hear it read aloud using the browser's voice synthesis.
- User-Friendly Interface: Clean and minimal design to make the news experience seamless.



## Technologies Used

- HTML5: To structure the web page.
- CSS3: For styling and layout.
- JavaScript: For fetching news from an API and integrating the Web Speech API to read the news.
- NewsAPI: A free API that provides live news articles.

## Prerequisites

NewsAPI Key: You need a free API key to fetch live news data. You can sign up for one at NewsAPI.


## Installation

1. Clone the repository

git clone https://github.com/psroy007/voxflash.git

2. Get an API Key

- Go to NewsAPI and sign up for a free account.
- Copy your API key.
- Open script.js and replace the placeholder YOUR_API_KEY with your actual API key.

3. Open in Browser

Once you've replaced the API key:

- Simply open index.html in any modern web browser to start using VoxFlash.
- The latest news will load automatically, and you can click on any article to hear it read aloud.


## How It Works

- Fetching News: The JavaScript code fetches the latest headlines from NewsAPI every 60 seconds.
- Voice Synthesis: When you click on a news article, it uses the browser's SpeechSynthesis API to read the article aloud in real-time.