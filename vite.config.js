import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

const CLEAN_POLICY_REWRITES = {
  '/dochive-privacy-policy': '/dochive-privacy-policy.html',
  '/documents-hive-privacy-policy': '/dochive-privacy-policy.html',
  '/documents-hive-privacy-policy.html': '/dochive-privacy-policy.html',
  '/screenlens-privacy-policy': '/screenlens-privacy-policy.html',
}

function attachPolicyRewrite(middlewares) {
  middlewares.use((req, _res, next) => {
    const pathname = req.url?.split('?')[0]
    if (pathname && CLEAN_POLICY_REWRITES[pathname]) {
      req.url = CLEAN_POLICY_REWRITES[pathname]
    }
    next()
  })
}

const policyRewritesPlugin = {
  name: 'policy-clean-url-rewrites',
  configureServer(server) {
    attachPolicyRewrite(server.middlewares)
  },
  configurePreviewServer(server) {
    attachPolicyRewrite(server.middlewares)
  },
}

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), policyRewritesPlugin],
})
