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
        "path": "/CreateMission",
        "name": "创建任务",
        "icon": "torch",
        "component": dynamic({ loader: () => import(/* webpackChunkName: 'p__CreateMission' */'/home/wuyuhang/Projects/PCL_automl/pcl_react_version/src/pages/CreateMission'), loading: LoadingComponent}),
        "hideInMenu": "true",
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
        "icon": "table",
        "routes": [
          {
            "path": "/DevEnv/JupyterNotebook",
            "name": "JupyterNotebook",
            "icon": "smile",
            "component": dynamic({ loader: () => import(/* webpackChunkName: 'p__DevEnv__JupyterNotebook' */'/home/wuyuhang/Projects/PCL_automl/pcl_react_version/src/pages/DevEnv/JupyterNotebook'), loading: LoadingComponent}),
            "exact": true
          }
        ]
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
        "name": "作业管理",
        "icon": "table",
        "routes": [
          {
            "path": "/JobManage/TrainJobManage",
            "name": "训练作业管理",
            "icon": "smile",
            "component": dynamic({ loader: () => import(/* webpackChunkName: 'p__JobManage__TrainJobManage' */'/home/wuyuhang/Projects/PCL_automl/pcl_react_version/src/pages/JobManage/TrainJobManage'), loading: LoadingComponent}),
            "exact": true
          },
          {
            "path": "/JobManage/AutoJobManage",
            "name": "自动搜索作业管理",
            "icon": "smile",
            "component": dynamic({ loader: () => import(/* webpackChunkName: 'p__JobManage__AutoJobManage' */'/home/wuyuhang/Projects/PCL_automl/pcl_react_version/src/pages/JobManage/AutoJobManage'), loading: LoadingComponent}),
            "exact": true
          }
        ]
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
        "path": "/index.html",
        "redirect": "/OverView",
        "exact": true
      },
      {
        "path": "/",
        "redirect": "/OverView",
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
