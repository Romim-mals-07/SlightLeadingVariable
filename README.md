# noobz-api

A simple Node.js package for downloading media files from URLs via an easy-to-use `downloader` function.

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [API Reference](#api-reference)
- [Examples](#examples)
- [Error Handling](#error-handling)
- [Contributing](#contributing)
- [License](#license)

## Installation

Install the package via npm:

```bash
npm install noobz-api
```

Or via Yarn:

```bash
yarn add noobz-api
```

## Usage

To use `noobz-api`, require it in your Node.js application and use the `downloader` function to download media from a URL.

```javascript
const downloader = require('noobz-api');

(async () => {
  try {
    const mediaData = await downloader('https://vt.tiktok.com/ZSjAmgjKA/');
    console.log(mediaData);
  } catch (error) {
    console.error(error.message);
  }
})();
```

## API Reference

### `downloader(url)`

Downloads media from the specified URL.

- **Parameters**:
  - `url` (string): The URL of the media to be downloaded. This parameter is required.
- **Returns**: A promise that resolves with the downloaded media data.
- **Throws**: An error if the `url` is missing or if the download fails.

## Examples

Here are some examples of how to use `noobz-api`:

### Example: Basic Usage

```javascript
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
```

## Error Handling

If an invalid or missing URL is provided, or if there's an error during the download, `downloader` will throw an error with a descriptive message.

Example error handling:

```javascript
try {
  const data = await downloader();
} catch (error) {
  console.error('Error:', error.message);
}
```

## Contributing

We welcome contributions! Please open an issue or submit a pull request with your improvements.

1. Fork the repository.
2. Clone your fork.
3. Create a new branch with a descriptive name.
4. Make your changes and commit them.
5. Push to your fork and submit a pull request.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.