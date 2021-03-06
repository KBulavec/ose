module.exports = {
    docsDir: 'docs',
    title: 'Old-School Essentials',
    description: 'Версия на русском языке',
    themeConfig: {
        docsRepo: 'Phenomen/ose',
        docsDir: 'docs',
        editLinks: true,
        editLinkText: 'Помогите улучшить эту страницу',
        sidebar: [{
                title: 'Классическое фэнтези',
                children: [
                    '/classic-fantasy/',
                    '/classic-fantasy/player-characters',
                    '/classic-fantasy/character-classes',
                    '/classic-fantasy/advancement',
                    '/classic-fantasy/equipment',
                    '/classic-fantasy/vehicles-mounts',
                    '/classic-fantasy/magic',
                    '/classic-fantasy/adventuring',
                    '/classic-fantasy/combat',
                    '/classic-fantasy/hired-help'
                ]
            },
            {
                title: 'Дополненное фэнтези',
                children: [
                    '/advanced-fantasy/'
                ]
            },
            {
                title: 'Заклинания',
                children: [
                    '/spells/arcane',
                    '/spells/divine',
                    '/spells/druid',
                    '/spells/illusion',
                ]
            },
            {
                title: 'Монстры',
                children: [
                    '/monsters/'
                ]
            },
            {
                title: 'Волшебные предметы',
                children: [
                    '/magic-items/'
                ]
            },
            {
                title: 'Другое',
                children: [
                    '/other/'
                ]
            }
        ]
    },
    markdown: {
        anchor: {
            level: [1, 2, 3, 4]
        },
        slugify: function(string) {
            const rControl = /[\u0000-\u001f]/g
            const rSpecial = /[\s~`!@#$%^&*()\-_+=[\]{}|\\;:"'<>,.?/]+/g

            return string.toString().toLowerCase()
                .replace(rControl, '')
                .replace(rSpecial, '-')
                .replace(/\-{2,}/g, '-')
                .replace(/^\-+|\-+$/g, '')
                .replace(/^(\d)/, '_$1')
        }
    },
    plugins: [
        ['@vuepress/back-to-top'],
        [
            'vuepress-plugin-container',
            {
                type: 'tip',
                defaultTitle: '',
            },
        ],
        [
            'vuepress-plugin-container',
            {
                type: 'warning',
                defaultTitle: '',
            },
        ],
    ]
}