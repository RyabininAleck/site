# Personal Website

## 🔧 Dependencies

Ensure you have [node](https://nodejs.org/) >= v16. Optionally, use [nvm](https://github.com/nvm-sh/nvm#installing-and-updating) to manage node versions.

## 🚀 Setup and Running


   ```bash
   nvm install
   node --version

   npm start
   ```

By default, the application should be available at [http://localhost:3000/](http://localhost:3000/).

## 🚢 Deploying

### Deploying to GitHub Pages

1. Update the environment variables and Git remote URL in [`.github/workflows/github-pages.yml`](.github/workflows/github-pages.yml).
2. Adjust the `homepage` value in `package.json` based on your hosting preferences.
3. Planning on using a custom domain? Update `public/CNAME`. Otherwise, remove it.

After making a commit to `main`, simply push your changes, and the deployment will be handled automatically.

### Static Export

For a static export without deploying to GitHub Pages:

- Remove or disable `.github/workflows/github-pages.yml`.
- Execute:

  ```bash
  npm run predeploy
  ```
