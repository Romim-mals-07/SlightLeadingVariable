const downloader = require('noobz-api');

async function fetchMedia() {
  try {
    const data = await downloader('https://vt.tiktok.com/ZSjAmgjKA/');
    console.log('Media data:', data);
  } catch (error) {
    console.error('Download failed:', error.message);
  }
}

fetchMedia();