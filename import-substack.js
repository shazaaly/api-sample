// import-substack.js

const fs = require('fs');
const path = require('path');
const Parser = require('rss-parser');
const TurndownService = require('turndown');

const parser = new Parser();
const turndownService = new TurndownService();

const SUBSTACK_FEED_URL = 'https://shazaali.substack.com/feed';

const BLOG_DIR = path.join(__dirname, 'blog');

(async () => {
  try {
    const feed = await parser.parseURL(SUBSTACK_FEED_URL);

    if (!fs.existsSync(BLOG_DIR)) {
      fs.mkdirSync(BLOG_DIR);
    }

    feed.items.forEach((item, index) => {
      const slug = item.link.split('/').filter(Boolean).pop();
      const date = new Date(item.pubDate).toISOString().split('T')[0];

      const markdown = `---
title: "${item.title}"
slug: "${slug}"
date: "${date}"
author: Shaza Aly
---

${turndownService.turndown(item['content:encoded'] || item.content)}
`;

      const filename = `${date}-${slug}.md`;
      const filepath = path.join(BLOG_DIR, filename);

      fs.writeFileSync(filepath, markdown);
      console.log(`✅ Imported: ${filename}`);
    });

    console.log('✅ Done! Your Substack posts are now in /blog.');
  } catch (err) {
    console.error('❌ Failed to import Substack blog:', err);
  }
})();
