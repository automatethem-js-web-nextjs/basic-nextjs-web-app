# basic-app-nextjs

## 실행

```
//npx create-next-app basic-app-nextjs
//npx create-next-app basic-app-nextjs --typescript
//cd basic-app-nextjs
cd basic-app-nextjs
```

```
npm install
```

```
//npm run dev
npm run build
//npm run start
npm start
```

http://localhost:3000

## 백그라운드 서비스 실행

https://github.com/automatethem-hosting/background-run-doc-service-pm2
```
pm2 start "npm start" --name automatethem-app-nextjs
pm2 save
```

## vercel

https://basic-app-nextjs.vercel.app/

## API

https://github.com/automatethem-js-server-api/weather-chatgpt-plugin-nextjs/blob/main/app/api/weather/route.ts#L8C3-L8C59

https://github.com/vercel/next.js/discussions/46483#discussioncomment-5121777

## 1

API Routes  
API Routes는 pages/api 디렉토리에서 변경없이 계속 작동합니다. 하지만 app 디렉토리 내의 Route Handlers로 대체되었습니다.  
Route Handlers는 웹 요청 및 응답 API를 사용하여 특정 경로에 대한 사용자 정의 요청 핸들러를 생성할 수 있도록 해줍니다.  
// app/api/route.ts  
export async function GET(request: Request) {}  
https://github.com/XionWCFM/Nextjs-docs-Korean-translation/blob/main/nextjsdocs/BuildingYourApplication/Upgrading/App_Router_Migration.md#api-routes

## 2

App router api

http://localhost:3000/api
```
{"name":"John Doe"}
```

http://localhost:3000/api/hello
```
{"name":"John Doe"}
```

Page router api

http://localhost:3000/api/pages-api
```
[{"label":"pos","score":0.8038843274116516}]
```

http://localhost:3000/api/pages-hello
```
{"name":"John Doe2"}
```

##

### 1

package.json
```
"dev": "next dev",
"build": "next build",
"start": "next start",
```

```
npm run dev
npm start
```

### 2

package.json
```
"dev": "next dev -p 3000",
"build": "next build",
"start": "next start -p 3000",
```

```
npm run dev
npm start
```

### 3

package.json
```
"dev": "next dev",
"build": "next build",
"start": "next start",
```

```
npm run dev -- -p 3000
npm start -- -p 3000
```

With npm using -- to pass arguments:  
npm run dev -- -p 8080  
https://stackoverflow.com/a/71140993

#### text input

http://localhost/api
```
curl http://localhost/api \
-X POST \
-H "Content-Type: application/json" \
-H "Authorization: Bearer AUTOMATETHEM" \
-d '{
    "inputs": "This is a good movie!"
}'
```

```
[
  {
    "label": "pos",
    "score": 0.8038843274116516
  }
]
```

## @/components

import { ChatWindow } from "@/components/ChatWindow";  
Module not found: Can't resolve '@/components #27666  
https://github.com/vercel/next.js/discussions/27666#discussioncomment-7276467  
Absolute Imports  
https://nextjs.org/docs/app/building-your-application/configuring/absolute-imports-and-module-aliases
```
/** @type {import('next').NextConfig} */
/*
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true
}

module.exports = nextConfig
*/
///*
const dotenv = require('dotenv');
const path = require("path");

dotenv.config();

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  env: {
    OPENAI_API_KEY: process.env.OPENAI_API_KEY
  },
  webpack: (config) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      '@': path.resolve(__dirname, './'),
    };

    return config;
  },
}

module.exports = nextConfig
//*/
```

![](attach_files/1.png?raw=true)

## nextjs-doc-css-tailwind-daisyui

https://github.com/automatethem-js-web-nextjs/nextjs-doc-css-tailwind-daisyui

## 참고 자료

https://github.com/iambstha/blog-post-request-nextjs-app-router/blob/master/app/api/handleform/route.js

https://akava.io/blog/using-nextjs-app-router-with-vercel-edge-functions

https://rocketengine.tistory.com/entry/NextJS-13-Routing-Route-Handlers-%ED%99%9C%EC%9A%A9%EB%B0%A9%EC%95%88

export const runtime = 'edge' // 'nodejs' (default) | 'edge'  
https://nextjs.org/docs/app/building-your-application/rendering/edge-and-nodejs-runtimes  
export const runtime = 'nodejs'  
// 'edge' | 'nodejs'  
https://nextjs.org/docs/app/api-reference/file-conventions/route-segment-config

nextjs-404-page-app-router  
https://maxschmitt.me/posts/nextjs-404-page-app-router

css 제거  
https://youtu.be/SSlNBZEBXPo?list=PL63c_Ws9ecISwPzddQzQ671S_gzJA6M5z&t=239

font  
https://www.youtube.com/watch?v=rW4p_MiowZ4&list=PL63c_Ws9ecISwPzddQzQ671S_gzJA6M5z&index=5    
https://github.com/automatethem-js-web-nextjs/ecommerce-app-nextjs-nextauth-database-prisma/blob/main/app/layout.tsx
