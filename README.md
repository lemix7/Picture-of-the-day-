# NASA Astronomy Picture of the Day  🔭

A web application that displays NASA's Astronomy Picture of the Day (APOD) along with its description. The application fetches data directly from NASA's APOD API to showcase stunning astronomical images and their scientific explanations.

## Features

* Displays the current Astronomy Picture of the Day
* Shows the title and detailed description of the astronomical image
* Responsive design for both desktop and mobile viewing
* Loading state while fetching the image
* Error handling for API failures
* Support for both images and videos (when APOD is a video)


## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/nasa-apod-viewer.git
   cd nasa-apod-viewer
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create a `.env` file in the root directory and add your NASA API key:
   ```plaintext
   REACT_APP_NASA_API_KEY=your_api_key_here
   ```

4. Start the development server:
   ```bash
   npm start
   ```

## Environment Variables

The following environment variables are required:

* `REACT_APP_NASA_API_KEY`: Your NASA API key

## API Usage

The application uses NASA's APOD API. Here's an example of the API endpoint:

```plaintext
https://api.nasa.gov/planetary/apod?api_key=YOUR_API_KEY
```

The API returns data in the following format:
```json
{
  "date": "2024-10-26",
  "explanation": "Description of the astronomical image...",
  "hdurl": "https://apod.nasa.gov/apod/image/high_res_image.jpg",
  "media_type": "image",
  "service_version": "v1",
  "title": "Title of the Image",
  "url": "https://apod.nasa.gov/apod/image/standard_res_image.jpg"
}
```
