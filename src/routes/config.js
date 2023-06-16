import React, { lazy, Suspense } from "react";

import BlankLayout from "../layouts/BlankLayout";
import BasicLayout from "../layouts/BasicLayout"

const LoginIndex = lazy(() => import("../pages/login/index.js"))
const Index = lazy(() => import("../pages/index/index.js"))

const config = [
  {
    path:'/',
    element: <BlankLayout />,
    children: [
      {
        path:'/login',
        element: <LoginIndex />
      },
      {
        path:'/a', 
        element: <BasicLayout />,
        children: [
          {
            path: 'b', // 这里的path，写为'/b'，也可以  /加不加都行
            element: <Suspense fallback={<>loading</>}><Index /></Suspense>
          }
        ]
      }
    ]
  }
]

export default config
