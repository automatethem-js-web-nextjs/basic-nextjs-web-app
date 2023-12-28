/** @type {import('next').NextConfig} */
const nextConfig = {
  //reactStrictMode: true, 
  reactStrictMode: false, //개발 모드일 경우 useEffect가 두번 실행되는 것 방지
  swcMinify: true,
}

module.exports = nextConfig
