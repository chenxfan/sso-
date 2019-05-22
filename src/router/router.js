import login from '@/login/index.vue';
import main from '@/layout/index.vue';
export const lOginRouter = {
    name: 'login',
    path: '/',
    component: login,
};
export const appRouter = [
    {
        title: '系统角色和权限管理',
        name: 'rule',
        path: '/rule',
        component: main,
        children: [
            {
                asideMenu: true,
                title: '系统角色管理',
                name: 'ruleManage',
                path: '/rule/ruleManage',
                component: () => import('@/views/ruleManage/index.vue'),
            },
        ],
    },
    {
        title: '系统操作权限管理',
        name: 'action',
        path: '/action',
        component: main,
        children: [
            {
                asideMenu: true,
                title: '系统权限角色设置',
                name: 'actionManage',
                path: '/action/actionManage',
                component: () => import('@/views/actionManage/index.vue'),
            },
        ],
    },
    {
        title: '系统菜单管理',
        name: 'menu',
        path: '/menu',
        component: main,
        children: [
            {
                asideMenu: true,
                title: '系统菜单列表',
                name: 'menuManage',
                path: '/menu/menuManage',
                component: () => import('@/views/menuManage/index.vue'),
            },
        ],
    },
    {
        title: '系统配置管理',
        name: 'system',
        path: '/system',
        component: main,
        children: [
            {
                asideMenu: true,
                title: '系统信息管理',
                name: 'systemSetting',
                path: '/system/systemSetting',
                component: () => import('@/views/systemSetting/index.vue'),
            },{
				asideMenu: false,
				title: '添加系统信息',
				name: 'addSystemInfo',
				path: '/system/addSystemInfo',
				component: ()=> import('@/views/systemSetting/add.vue')
			},
			{
				asideMenu: false,
				title: '编辑系统信息',
				name: 'editSystemInfo',
				path: '/system/editSystemInfo/:id',
				component: ()=> import('@/views/systemSetting/add.vue')
			},
            {
                asideMenu: true,
                title: '系统信息管理修改',
                name: 'systemSettingChange',
                path: '/system/systemSettingChange',
                component: () =>
                    import('@/views/systemSettingChange/index.vue'),
            },
        ],
    },
    {
        title: '客服帐号管理',
        name: 'account',
        path: '/account',
        component: main,
        children: [
            {
                asideMenu: true,
                title: '客服帐号管理',
                name: 'accountManage',
                path: '/account/accountManage',
                component: () => import('@/views/accountManage/index.vue'),
            },{
                asideMenu: false,
                title: '添加客服账号',
                name: 'accountManage',
                path: '/account/addAccountManage',
                component: () => import('@/views/accountManage/add.vue'),
            },{
                asideMenu: false,
                title: '编辑客服账号',
                name: 'accountManage',
                path: '/account/editAccountManage',
                component: () => import('@/views/accountManage/add.vue'),
            },{
                asideMenu: false,
                title: '查询客服账号',
                name: 'accountManage',
                path: '/account/searchAccountManage',
                component: () => import('@/views/accountManage/add.vue'),
            }
        ],
    },
];
export const routers = [lOginRouter, ...appRouter];
