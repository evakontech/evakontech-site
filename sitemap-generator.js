const fs = require('fs');
const { SitemapStream } = require('sitemap');
const { createGzip } = require('zlib');
const path = require('path');
const hostname = 'https://www.evakon.tech';

const urls = [
    { url: '/', changefreq: 'daily', priority: 1 },
    { url: '/about', changefreq: 'monthly', priority: 0.8 },
    { url: '/hire-developer', changefreq: 'monthly', priority: 0.8 },
    { url: '/career', changefreq: 'monthly', priority: 0.8 },
    { url: '/portfolio', changefreq: 'monthly', priority: 0.8 },
    { url: '/contact', changefreq: 'monthly', priority: 0.8 },
];

const sitemapInstance = new SitemapStream({ hostname });
const pipeline = sitemapInstance.pipe(createGzip());

urls.forEach((url) => {
    sitemapInstance.write(url);
});

sitemapInstance.end();

const filePath = path.resolve(__dirname, 'public', 'sitemap.xml.gz');
fs.mkdirSync(path.dirname(filePath), { recursive: true });
pipeline.pipe(fs.createWriteStream(filePath))
    .on('error', (err) => {
        console.error('An error occurred while writing the sitemap:', err);
    })
    .on('finish', () => {
        console.log('Sitemap generation completed.');
    });
