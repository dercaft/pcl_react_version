// @ts-nocheck
import React from 'react';
import { ApplyPluginsType, dynamic } from '/home/wuyuhang/Projects/PCL_automl/pcl_react_version/node_modules/@umijs/runtime';
import * as umiExports from './umiExports';
import { plugin } from './plugin';
import LoadingComponent from '@ant-design/pro-layout/es/PageLoading';

export function getRoutes() {
  const routes = [
  {
    "path": "/",
    "component": dynamic({ loader: () => import(/* webpackChunkName: '.umi__plugin-layout__Layout' */'/home/wuyuhang/Projects/PCL_automl/pcl_react_version/src/.umi/plugin-layout/Layout.tsx'), loading: LoadingComponent}),
    "routes": [
      {
        "path": "/MissionCenter",
        "name": "任务中心",
        "icon": "smile",
        "component": dynamic({ loader: () => import(/* webpackChunkName: 'p__MissionCenter' */'/home/wuyuhang/Projects/PCL_automl/pcl_react_version/src/pages/MissionCenter'), loading: LoadingComponent}),
        "exact": true
      },
      {
        "path": "/CreateMission",
        "name": "新建任务",
        "icon": "smile",
        "component": dynamic({ loader: () => import(/* webpackChunkName: 'p__CreateMission' */'/home/wuyuhang/Projects/PCL_automl/pcl_react_version/src/pages/CreateMission'), loading: LoadingComponent}),
        "hideInMenu": "true",
        "exact": true
      },
      {
        "path": "/OverView",
        "name": "总览",
        "icon": "smile",
        "component": dynamic({ loader: () => import(/* webpackChunkName: 'p__OverView' */'/home/wuyuhang/Projects/PCL_automl/pcl_react_version/src/pages/OverView'), loading: LoadingComponent}),
        "exact": true
      },
      {
        "path": "/AutoML",
        "name": "自动学习",
        "icon": "smile",
        "component": dynamic({ loader: () => import(/* webpackChunkName: 'p__AutoML' */'/home/wuyuhang/Projects/PCL_automl/pcl_react_version/src/pages/AutoML'), loading: LoadingComponent}),
        "exact": true
      },
      {
        "path": "/DataManage",
        "name": "数据管理",
        "icon": "smile",
        "component": dynamic({ loader: () => import(/* webpackChunkName: 'p__DataManage' */'/home/wuyuhang/Projects/PCL_automl/pcl_react_version/src/pages/DataManage'), loading: LoadingComponent}),
        "exact": true
      },
      {
        "path": "/DevEnv",
        "name": "开发环境",
        "icon": "smile",
        "component": dynamic({ loader: () => import(/* webpackChunkName: 'p__DevEnv' */'/home/wuyuhang/Projects/PCL_automl/pcl_react_version/src/pages/DevEnv'), loading: LoadingComponent}),
        "exact": true
      },
      {
        "path": "/JupyterNotebook",
        "name": "JupyterNotebook",
        "icon": "smile",
        "component": dynamic({ loader: () => import(/* webpackChunkName: 'p__JupyterNotebook' */'/home/wuyuhang/Projects/PCL_automl/pcl_react_version/src/pages/JupyterNotebook'), loading: LoadingComponent}),
        "exact": true
      },
      {
        "path": "/AlgoManage",
        "name": "算法管理",
        "icon": "smile",
        "component": dynamic({ loader: () => import(/* webpackChunkName: 'p__AlgoManage' */'/home/wuyuhang/Projects/PCL_automl/pcl_react_version/src/pages/AlgoManage'), loading: LoadingComponent}),
        "exact": true
      },
      {
        "path": "/JobManage",
        "name": "训练管理",
        "icon": "smile",
        "component": dynamic({ loader: () => import(/* webpackChunkName: 'p__TrainManage' */'/home/wuyuhang/Projects/PCL_automl/pcl_react_version/src/pages/TrainManage'), loading: LoadingComponent}),
        "exact": true
      },
      {
        "path": "/TrainJobManage",
        "name": "训练作业管理",
        "icon": "smile",
        "component": dynamic({ loader: () => import(/* webpackChunkName: 'p__TrainJobManage' */'/home/wuyuhang/Projects/PCL_automl/pcl_react_version/src/pages/TrainJobManage'), loading: LoadingComponent}),
        "exact": true
      },
      {
        "path": "/AutoJobManage",
        "name": "自动化搜索作业管理",
        "icon": "smile",
        "component": dynamic({ loader: () => import(/* webpackChunkName: 'p__AutoJobManage' */'/home/wuyuhang/Projects/PCL_automl/pcl_react_version/src/pages/AutoJobManage'), loading: LoadingComponent}),
        "exact": true
      },
      {
        "path": "/ModelManage",
        "name": "模型管理",
        "icon": "smile",
        "component": dynamic({ loader: () => import(/* webpackChunkName: 'p__ModelManage' */'/home/wuyuhang/Projects/PCL_automl/pcl_react_version/src/pages/ModelManage'), loading: LoadingComponent}),
        "exact": true
      },
      {
        "path": "/AIMarket",
        "name": "AI市场",
        "icon": "smile",
        "component": dynamic({ loader: () => import(/* webpackChunkName: 'p__AIMarket' */'/home/wuyuhang/Projects/PCL_automl/pcl_react_version/src/pages/AIMarket'), loading: LoadingComponent}),
        "exact": true
      },
      {
        "path": "/user",
        "layout": false,
        "routes": [
          {
            "name": "login",
            "path": "/user/login",
            "component": dynamic({ loader: () => import(/* webpackChunkName: 'p__user__login' */'/home/wuyuhang/Projects/PCL_automl/pcl_react_version/src/pages/user/login'), loading: LoadingComponent}),
            "exact": true
          }
        ]
      },
      {
        "path": "/welcome",
        "name": "welcome",
        "icon": "smile",
        "component": dynamic({ loader: () => import(/* webpackChunkName: 'p__Welcome' */'/home/wuyuhang/Projects/PCL_automl/pcl_react_version/src/pages/Welcome'), loading: LoadingComponent}),
        "exact": true
      },
      {
        "path": "/admin",
        "name": "admin",
        "icon": "crown",
        "access": "canAdmin",
        "component": dynamic({ loader: () => import(/* webpackChunkName: 'p__Admin' */'/home/wuyuhang/Projects/PCL_automl/pcl_react_version/src/pages/Admin'), loading: LoadingComponent}),
        "routes": [
          {
            "path": "/admin/sub-page",
            "name": "sub-page",
            "icon": "smile",
            "component": dynamic({ loader: () => import(/* webpackChunkName: 'p__Welcome' */'/home/wuyuhang/Projects/PCL_automl/pcl_react_version/src/pages/Welcome'), loading: LoadingComponent}),
            "exact": true
          }
        ]
      },
      {
        "name": "list.table-list",
        "icon": "table",
        "path": "/list",
        "component": dynamic({ loader: () => import(/* webpackChunkName: 'p__ListTableList' */'/home/wuyuhang/Projects/PCL_automl/pcl_react_version/src/pages/ListTableList'), loading: LoadingComponent}),
        "exact": true
      },
      {
        "path": "/index.html",
        "redirect": "/welcome",
        "exact": true
      },
      {
        "path": "/",
        "redirect": "/welcome",
        "exact": true
      },
      {
        "component": dynamic({ loader: () => import(/* webpackChunkName: 'p__404' */'/home/wuyuhang/Projects/PCL_automl/pcl_react_version/src/pages/404'), loading: LoadingComponent}),
        "exact": true
      }
    ]
  }
];

  // allow user to extend routes
  plugin.applyPlugins({
    key: 'patchRoutes',
    type: ApplyPluginsType.event,
    args: { routes },
  });

  return routes;
}
