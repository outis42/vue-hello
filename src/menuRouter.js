const adminMenuConfig = [
    {
        menuid: 1,
        icon: 'el-icon-s-custom',
        menu_name: 'ElementUI',
        web_url: null,
        children: [
            {
                menuid: 1 - 0,
                icon: '',
                menu_name: '按钮',
                web_url: '/button',
                child: []
            },
            {
                menuid: 1 - 1,
                icon: '',
                menu_name: '布局',
                web_url: '/layout',
                child: []
            }
        ] 
    }
];

export { adminMenuConfig }