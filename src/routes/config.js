import React, { lazy } from "react";

import BlankLayout from "../layouts/BlankLayout";
import BasicLayout from "../layouts/BasicLayout"

const LoginIndex = lazy(() => import("../pages/login/index.js"))
const Index = lazy(() => import("../pages/index/index.js"))

const config = [
  {
    path: '/',
    element: <BlankLayout />,
    children: [
      {
        path: "/login",
        name: '登录页',
        element: <LoginIndex />
      },
      {
        path: "/index",
        name: '首页',
        element: BasicLayout,
        children: [
          {
            path: '/index',
            name: '首页',
            element: <Index />
          }
        ]
      },
    ]
  },
]

export default config
