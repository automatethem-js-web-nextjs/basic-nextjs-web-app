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
//npx next dev
//npm run dev
//npx next build
npm run build
//npx next start
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
