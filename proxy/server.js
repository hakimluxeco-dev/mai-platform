const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');

const app = express();
const PORT = 7690;

// Configure proxies
// Note: We use 5174 for maisolutions and 5173 for app (marketing)

// Proxy /marketing to the Marketing app
// We need to rewrite the path because Vite expects the base path
app.use(
    '/marketing',
    createProxyMiddleware({
        target: 'http://localhost:5174', // This will be the port for maimarketing
        changeOrigin: true,
        ws: true, // critical for hot reloading
    })
);

// Proxy root / to the Business Solutions app
app.use(
    '/',
    createProxyMiddleware({
        target: 'http://localhost:5173', // This will be the port for app (Business)
        changeOrigin: true,
        ws: true, // critical for hot reloading
    })
);

app.listen(PORT, () => {
    console.log(`Unified Proxy running at http://localhost:${PORT}`);
    console.log(`- /           -> http://localhost:5173 (Business)`);
    console.log(`- /marketing  -> http://localhost:5174 (Marketing)`);
});
