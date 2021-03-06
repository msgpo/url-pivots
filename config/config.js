module.exports = {
    name: "URL Pivot",
    acronym: "URLP",
    entityTypes: ['IPv4', 'domain', 'hash', 'email'],
    block: {
        component: {
            file: "./components/pivot-block.js"
        },
        template: {
            file: "./templates/pivot-block.hbs"
        }
    },
    logging:{
        level: 'info'
    }, 
    onDemandOnly: true,
    request: {
        cert: '',
        key: '',
        passphrase: '',
        ca: '',
        proxy: '',
        rejectUnauthorized: false
    },
    options: [
        {
            key: 'url1',
            name: 'URL Pivot Search 1',
            description:'Search you want to perform, replace the url below with the search that users can run. The {{ENTITY}} is the information that will get passed into the search. Name> is the name of the search that will be occuring, please ensure the name of the search ends with ">"',
            default: 'GoogleExample>https://google.com/{{ENTITY}}',
            type: 'text',
            userCanEdit: false,
            adminOnly: true
        },
        {
            key: 'url2',
            name: 'URL Pivot Search 2',
            description:'Search you want to perform',
            default: '',
            type: 'text',
            userCanEdit: false,
            adminOnly: true
        },
        {
            key: 'url3',
            name: 'URL Pivot Search 3',
            description:'Search you want to perform',
            default: '',
            type: 'text',
            userCanEdit: false,
            adminOnly: true
        },
        {
            key: 'url4',
            name: 'URL Pivot Search 4',
            description:'Search you want to perform',
            default: '',
            type: 'text',
            userCanEdit: false,
            adminOnly: true
        },
        {
            key: 'url5',
            name: 'URL Pivot Search 5',
            description:'Search you want to perform',
            default: '',
            type: 'text',
            userCanEdit: false,
            adminOnly: true
        },
        {
            key: 'url6',
            name: 'URL Pivot Search 6',
            description:'Search you want to perform',
            default: '',
            type: 'text',
            userCanEdit: false,
            adminOnly: true
        },
        {
            key: 'url7',
            name: 'URL Pivot Search 7',
            description:'Search you want to perform',
            default: '',
            type: 'text',
            userCanEdit: false,
            adminOnly: true
        },
        {
            key: 'url8',
            name: 'URL Pivot Search 8',
            description:'Search you want to perform',
            default: '',
            type: 'text',
            userCanEdit: false,
            adminOnly: true
        },
        {
            key: 'url9',
            name: 'URL Pivot Search 9',
            description:'Search you want to perform',
            default: '',
            type: 'text',
            userCanEdit: false,
            adminOnly: true
        },
        {
            key: 'url10',
            name: 'URL Pivot Search 10',
            description:'Search you want to perform',
            default: '',
            type: 'text',
            userCanEdit: false,
            adminOnly: true
        }
    ]
    
};
