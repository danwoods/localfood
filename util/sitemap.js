/** @file Generate sitemap */

const fs = require('fs')
const Restaurants = require('../restaurants.json')

module.exports = {
  /** Function to generate sitemap */
  generateSiteMap: () => {
    const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
      <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
          ${Restaurants.map((page) => {
            return `
                      <url>
                          <loc>${`https://localfood.page/${page.id}`}</loc>
                      </url>
                  `
          }).join('')}
      </urlset>`

    fs.writeFileSync('public/sitemap.xml', sitemap)
  }
}
