export default [
  //早期测试页面
  {
    path: '/MissionCenter',
    name: '任务中心',
    icon: 'smile',
    component: './MissionCenter',
    // hideInMenu: 'true', 
  },
  {
    path: '/CreateMission',
    name: '新建任务',
    icon: 'smile',
    component: './CreateMission',
    hideInMenu: 'true', 
  },
  //设计的页面
  // id:01, level:01 
  {
    path: '/OverView',
    name: '总览',
    icon: 'smile',
    component: './OverView',
    // hideInMenu: 'true', 
  },  
  // id:02, level:01 
  {
    path: '/AutoML',
    name: '自动学习',
    icon: 'smile',
    component: './AutoML',
    // hideInMenu: 'true', 
  },
  // id:03, level:01 
  {
    path: '/DataManage',
    name: '数据管理',
    icon: 'smile',
    component: './DataManage',
    // hideInMenu: 'true', 
  },
  // id:04, level:01 
  {
    path: '/DevEnv',
    name: '开发环境',
    icon: 'smile',
    component: './DevEnv',
    // hideInMenu: 'true', 
  },
  //level:02 子页面
  {
    path: '/JupyterNotebook',
    name: 'JupyterNotebook',
    icon: 'smile',
    component: './JupyterNotebook',
    // hideInMenu: 'true', 
  },
  // id:05, level:01 
  {
    path: '/AlgoManage',
    name: '算法管理',
    icon: 'smile',
    component: './AlgoManage',
    // hideInMenu: 'true', 
  },
  // id:06, level:01 
  {
    path: '/JobManage',
    name: '训练管理',
    icon: 'smile',
    component: './TrainManage',
    // hideInMenu: 'true', 
  },
  //level:02 子界面：
  {
    path: '/TrainJobManage',
    name: '训练作业管理',
    icon: 'smile',
    component: './TrainJobManage',
    // hideInMenu: 'true', 
  },
  {
    path: '/AutoJobManage',
    name: '自动化搜索作业管理',
    icon: 'smile',
    component: './AutoJobManage',
    // hideInMenu: 'true', 
  },
  // id:07, level:01 
  {
    path: '/ModelManage',
    name: '模型管理',
    icon: 'smile',
    component: './ModelManage',
    // hideInMenu: 'true', 
  },
  // id:08, level:01 
  {
    path: '/AIMarket',
    name: 'AI市场',
    icon: 'smile',
    component: './AIMarket',
    // hideInMenu: 'true', 
  },
  //设计页面结束
  {
    path: '/user',
    layout: false,
    routes: [
      {
        name: 'login',
        path: '/user/login',
        component: './user/login',
      },
    ],
  },
  {
    path: '/welcome',
    name: 'welcome',
    icon: 'smile',
    component: './Welcome',
  },
  {
    path: '/admin',
    name: 'admin',
    icon: 'crown',
    access: 'canAdmin',
    component: './Admin',
    routes: [
      {
        path: '/admin/sub-page',
        name: 'sub-page',
        icon: 'smile',
        component: './Welcome',
      },
    ],
  },
  {
    name: 'list.table-list',
    icon: 'table',
    path: '/list',
    component: './ListTableList',
  },
  {
    path: '/',
    redirect: '/welcome',
  },
  
  {
    component: './404',
  },
];
