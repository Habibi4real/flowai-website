const PLAY_STORE_URL = "https://play.google.com/store/apps/details?id=app.flowai.mobile";
const APP_STORE_URL = "https://flowaipp.vercel.app/index.html";
const WEBSITE_URL = "https://flowaipp.vercel.app/index.html";

module.exports = function handler(request, response) {
  const userAgent = String(request.headers["user-agent"] || "");
  const isAndroid = /Android/i.test(userAgent);
  const isIos = /iPhone|iPad|iPod/i.test(userAgent);
  const destination = isAndroid ? PLAY_STORE_URL : isIos ? APP_STORE_URL : WEBSITE_URL;

  response.setHeader("Cache-Control", "s-maxage=3600, stale-while-revalidate=86400");
  response.writeHead(302, { Location: destination });
  response.end();
};
