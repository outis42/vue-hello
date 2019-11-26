const adminMenuConfig = [
    {
        menuid: 1,
        icon: 'el-icon-menu',
        menu_name: 'ElementUI',
        web_url: '/',
        children: [
            {
                menuid: 1 - 1,
                icon: '',
                menu_name: 'button',
                web_url: '/button',
                children: []
            },
            {
                menuid: 1 - 2,
                icon: '',
                menu_name: 'layout',
                web_url: '/layout',
                children: []
            }
        ] 
    }
];

export { adminMenuConfig }