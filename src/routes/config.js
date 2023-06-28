import React, { lazy, Suspense } from "react";

import BlankLayout from "../layouts/BlankLayout";
import BasicLayout from "../layouts/BasicLayout"

const LoginIndex = lazy(() => import("../pages/login/index"))
const Index = lazy(() => import("../pages/index/index"))

const config = [
  {
    path:'/',
    element: <BlankLayout />,
    children: [
      {
        path:'/', 
        element: <BasicLayout />,
        children: [
          {
            path: 'index', // 这里的path，写为'/b'，也可以  /加不加都行
            element: <Suspense fallback={<>loading</>}><Index /></Suspense>
          }
        ]
      },
      {
        path:'/login',
        element: <LoginIndex />
      }
    ]
  }
]

export default config
