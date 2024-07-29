import { defineConfig } from 'wxt';

// See https://wxt.dev/api/config.html
export default defineConfig({
    manifest: {
        permissions: [
            'storage',
            'tabs',
            'declarativeNetRequest',
            'https://*/*',
            "\u003Call_urls\u003E"
        ]
    }
});
