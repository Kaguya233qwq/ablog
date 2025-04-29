import { defineConfigWithTheme } from 'vitepress';
import { usePosts } from '../src/composables/usePosts';
import type { ThemeConfig } from '../src/types';
const { posts, rewrites } = await usePosts({
  pageSize: 6,
  homepage: false,
  srcDir: 'posts',
  autoExcerpt: 150
});

export default defineConfigWithTheme<ThemeConfig>({
  title: 'Articles',
  titleTemplate: 'VitePress Theme Minimalism',
  description: 'VitePress Theme Minimalism',
  rewrites,
  cleanUrls: true,
  ignoreDeadLinks: true,
  themeConfig: {
    posts,
    page: {
      max: 5
    },
    comment: {
      // serverURL: 'https://domain.com',
      // reaction: true
    },
    ads: {
      asideOutlineAfter: [
        // [
        //   {
        //     title: 'Spotify - 每月低于 10 元',
        //     img: 'https://minio.zhichao.org/assets/spotify.png',
        //     link: 'https://nf.video/tST8B/?gid=4'
        //   },
        //   {
        //     title: 'Netflix - 每月低至 25 元',
        //     img: 'https://minio.zhichao.org/assets/netflix.png',
        //     link: 'https://nf.video/tST8B/?gid=1'
        //   }
        // ]
      ],
      sidebarNavAfter: [
        // {
        //   title: 'ouo.io - 縮短網址也可以賺錢',
        //   img: 'https://ouo.io/images/banners/r5.jpg',
        //   link: 'https://ouo.io/ref/QQbUaFAo'
        // }
      ],
      docAfter: [
      ]
    },
    logo: '/',
    outline: { level: 2 },
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Pages', link: '/page-1' },
      { text: 'Docs', link: '/docs/doc1' },
      { text: 'Category', link: '/category' },
      { text: 'Tags', link: '/tags' },
      { text: 'Archives', link: '/archives' }
    ],
    sidebar: {
      '/docs': [
        {
          text: '如何使用电饭煲',
          items: [
            { text: '选择合适的电饭煲', link: '/docs/doc1' },
            { text: '煮出松软米饭的技巧', link: '/docs/doc2' },
            { text: '电饭煲的多功能用途', link: '/docs/doc3' },
            { text: '电饭煲的清洁与保养', link: '/docs/doc4' },
            { text: '电饭煲常见问题处理', link: '/docs/doc5' }
          ]
        }
      ]
    },
    socialLinks: [{ icon: 'github', link: 'https://github.com/izhichao/vitepress-theme-minimalism' }],
    footer: {
      message:
        'Theme by <a href="https://github.com/izhichao/vitepress-theme-minimalism" target="_blank">Minimalism</a>',
      copyright: 'Copyright © 2017-2025 <a href="https://github.com/izhichao" target="_blank">Marisa</a>'
    },
    search: { provider: 'local' }
  },
  markdown: {
    lineNumbers: true
  },
  srcExclude: ['README.md', 'README_en-US.md']
});
