# basic-app-nextjs

## 실행

### 프로젝트 생성

```
npx create-next-app basic-app-nextjs
//npx create-next-app basic-app-nextjs --typescript
cd basic-app-nextjs
```
```
cd basic-app-nextjs
```

### 패키지 설치

```
npm install
```

### 실행

```
npm run dev
```
```
npm run build
//npm run start
npm start
```

http://localhost:3000

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

## 참고 자료

https://github.com/iambstha/blog-post-request-nextjs-app-router/blob/master/app/api/handleform/route.js

https://akava.io/blog/using-nextjs-app-router-with-vercel-edge-functions

https://rocketengine.tistory.com/entry/NextJS-13-Routing-Route-Handlers-%ED%99%9C%EC%9A%A9%EB%B0%A9%EC%95%88

export const runtime = 'edge' // 'nodejs' (default) | 'edge'  
https://nextjs.org/docs/app/building-your-application/rendering/edge-and-nodejs-runtimes  
export const runtime = 'nodejs'  
// 'edge' | 'nodejs'  
https://nextjs.org/docs/app/api-reference/file-conventions/route-segment-config
