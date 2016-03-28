builder.formidable.com
======================

[![Build Status](https://travis-ci.org/FormidableLabs/builder-docs.svg?branch=master)](https://travis-ci.org/FormidableLabs/builder-docs)

Marketing/documentation site for Builder

# Publishing
The site's documentation section is pulled in directly from the `builder` repo's README, which means it's only as current as your local `node_modules/builder`. To refresh the docs, run `npm run update builder`. (If you forget this step in dev, it's run automatically as part of `builder run build-static`, so you can't accidentally publish outdated docs.)

When it’s time to publish:
```sh
# On master
builder run build-static # Builds site to static HTML/JS in `/build`

# Test the static build in your browser
builder run server-static
builder run open-static

# If all looks good, let's commit!
git add build && git commit build -m "Rebuild site"
git push origin master
```

Once the `build/` is committed, go to [FormidableLabs/formidable.com](https://github.com/FormidableLabs/formidable.com) and update the `builder-docs` dependency!
