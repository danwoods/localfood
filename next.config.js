/** @file Next.js config */

/** Function to generate sitemap */
const generateSiteMap = require('./util/sitemap.js').generateSiteMap

module.exports = {
  webpack: (config, { isServer }) => {
    if (isServer) {
      generateSiteMap()
    }

    return config
  }
}
