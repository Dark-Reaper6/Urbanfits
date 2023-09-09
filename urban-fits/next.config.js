/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [{
      protocol: "https",
      hostname: "**",
    }]
  },
  env: {
    HOST: "https://st.urbanfits.ae",
    // HOST: "http://localhost:3000",
    MONGO_URI: "mongodb+srv://darkreaper:s19114666d@cluster0.eyxeosm.mongodb.net/Urbanfits?retryWrites=true&w=majority",
    SECRET_KEY: "MuhammadBilawalAshrafOwnsUrbanFitsBrand",
    DEFAULT_PFP: "https://urban-fits.s3.eu-north-1.amazonaws.com/website-copyrights/default-pfp.jpg",
    // Google client credentials
    GOOGLE_CLIENT_ID: "1090637042326-jp571pnicbocv80911mkkmd94pvuhbk0.apps.googleusercontent.com",
    GOOGLE_CLIENT_SECRET: "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",
    // Email SMTP credentials
    SMTP_HOST: "mail.urbanfits.ae",
    SMTP_USER: "support@urbanfits.ae",
    SMTP_PASSWORD: "Support@2023",
    SMTP_SENDER_EMAIL: "Support@urbanfits.ae",
    //Stripe keys
    STRIPE_PUBLISHABLE_KEY: "pk_test_51MkU2DHF1bkFLgckS5AUrOHFjoJAPxAW1RxkHDfriM4uDbVAM3MeVu3XOVfy7BqUGx9kiu9CMQxqbdRxoWSXMO8c003NMTN2AT",
    STRIPE_SECRET_KEY: "sk_test_51MkU2DHF1bkFLgck4aQNuqKxTOrWh2uSlx8AxKJucUFGPl4cDSpjLhhn4ynhISjShrTqGhl2U4A1UZJFe0RRclyo00hWAfnqeB",
    STRIPE_WEBHOOK_SECRET: "whsec_zh0f1sztGeE8osV6cPvZeX9Nb8SMmZ6f",
    // My stripe keys
    // STRIPE_PUBLISHABLE_KEY: "pk_test_51MkNT6BIhEpWj9u7qSXh10bWCubPCpGhUPbEwcWHap0EZZcn1FCnX46CYwmtSIRmdl8HfKPgqczIJ92t92Efj4AE00kUAlBVgf",
    // STRIPE_SECRET_KEY: "sk_test_51MkNT6BIhEpWj9u7Kmn5ZPcmpXKSSQsDhiC0UjuoI2AdT5OUgUdqZAZFFQQ3ijO06znVKf0MMi7oBWnP3uMNWGrB00pzZZ7ZDJ",
    // STRIPE_WEBHOOK_SECRET: "whsec_sT7z0VH7oD8ekxbRs1PSoqyvmQ1OYbvx",
    //AWS S3 Access Key IDs
    AWS_ACCESS_KEY: "AKIAWXH553KR4VBPA7YM",
    AWS_SECRET_KEY: "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",
    // IP2Lcation access key
    IPINFO_ACCESS_TOKEN: "9435a9027e6305",
    // Pusher app credentials
    PUSHER_APP_ID: "1665659",
    PUSHER_KEY: "b1922c08c9c41869d7b3",
    PUSHER_SECRET: "cef24361002750c60137",
    PUSHER_CLUSTER: "mt1"
  },
  async headers() {
    return [
      {
        source: "/api/(.*)",
        headers: [
          { key: "Access-Control-Allow-Credentials", value: "true" },
          { key: "Access-Control-Allow-Origin", value: "*" },
          { key: "Access-Control-Allow-Methods", value: "GET,OPTIONS,PATCH,DELETE,POST,PUT" },
          { key: "Access-Control-Allow-Headers", value: "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version" },
        ]
      }
    ]
  }
}
module.exports = nextConfig
