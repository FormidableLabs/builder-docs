builder.formidable.com
======================

Marketing/documentation site for Builder

# Publishing
The site's documentation section is pulled in directly from the `builder` repo's README, which means it's only as current as your local `node_modules/builder`. To refresh the docs, run `npm run reinstall-builder`, which just nukes `builder` and reinstalls with the latest. (If you forget this step in dev, it's run automatically as part of `npm run build-static`, so you can't accidentally publish outdated docs.)

When it's time to publish:
```sh
# On master
npm run build-static # Builds site to static HTML/JS in `/build`
git add build && git commit build -m "Rebuild site"
npm run push-gh-pages
git push origin master
```
