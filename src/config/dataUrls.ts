/**
 * Remote data source URLs for portfolio content.
 *
 * RECOMMENDED HOST: GitHub Gist (free, CORS-enabled, editable online)
 *   1. Go to https://gist.github.com
 *   2. Create a new public gist for each JSON file
 *   3. Click "Raw" and copy the URL
 *   4. Paste each raw URL below
 *
 * NOTE: Google Drive does NOT support CORS for browser fetches.
 *       Use GitHub Gist or any CDN that serves proper CORS headers.
 *
 * Leave a URL as an empty string '' to use the local fallback data instead.
 */
export const DATA_URLS = {
  projects: 'https://gist.githubusercontent.com/Fahim-ju/4dbb30f5a913685def9d484d7c3f3a56/raw/f069b195708df56b74dad9660c93c504fc9a6281/projects.json',
  skills: 'https://gist.githubusercontent.com/Fahim-ju/019d92ad3e3f961bd68c95746333a25f/raw/1b78935ad7757d9d70f00474aec4fda8103da859/skills.json',
  experience: 'https://gist.githubusercontent.com/Fahim-ju/932c3e7c44b2593d1fa9cf63d75ae367/raw/ae90afb51e8e3b3e525029e27a5457e51612798e/experience.json',
  certifications: 'https://gist.githubusercontent.com/Fahim-ju/a1b2df510efb344aac3e563825d6c382/raw/4dc6a9f812dc3b885c68dd8a65e41c630b4d3690/certification.json',
  contests: '',
  notableWork: '',
} as const;
