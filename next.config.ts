import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'standalone',
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
  },
};

export default nextConfig;
```

Press **Cmd + S** to save.

---

### Step 2: Push to GitHub

1. Click **Source Control** icon in VS Code (left sidebar)
2. Type message: `Fix routing for production`
3. Click **✓ Commit**
4. Click **Sync Changes**

---

### Step 3: Update Render Start Command

1. Go to your **Render Dashboard**
2. Click on your **positive-psychology-app** service
3. Click **Settings** (left sidebar)
4. Find **Start Command** and change it to:
```
node .next/standalone/server.js
