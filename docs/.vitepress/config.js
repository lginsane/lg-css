module.exports = {
    title: 'LG CSS',
    description: 'Just playing around.',
    base: '/lg-css-docs/dist/',
    themeConfig: {
        repo: 'lginsane/lg-css',
        docsDir: 'docs',
        nav: [
            { text: '指南', link: '/', activeMatch: '^/$|^/guide/' },
        ],
        sidebar: {
            '/': getGuideSidebar()
        }
    }
}

function getGuideSidebar() {
    return [
        {
            text: '指南',
            children: [
                { text: '介绍', link: '/guide/' },
                { text: '安装', link: '/guide/install' },
                { text: '使用', link: '/guide/use' },
                { text: '自定义配置', link: '/guide/config' },
            ]
        },
        {
            text: '模块',
            children: [
                { text: '重置reset', link: '/basics/reset' },
                { text: '布局layout', link: '/basics/layout' },
                { text: '文字text', link: '/basics/text' },
                { text: '阴影shadow', link: '/basics/shadow' },
                { text: '大小size', link: '/basics/size' },
                { text: '颜色color', link: '/basics/color' },
                { text: '背景颜色background', link: '/basics/background' }
            ]
        }
    ]
}
