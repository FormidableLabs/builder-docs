builder.formidable.com
======================

[![Build Status](https://travis-ci.org/FormidableLabs/builder-docs.svg?branch=master)](https://travis-ci.org/FormidableLabs/builder-docs)

Marketing/documentation site for Builder

# Publishing
The site's documentation section is pulled in directly from the `builder` repo's README, which means it's only as current as your local `node_modules/builder`. To refresh the docs, run `npm update builder`. (If you forget this step in dev, it's run automatically as part of `builder run build-static`, so you can't accidentally publish outdated docs.)

When it’s time to publish:
```sh
# On master
builder run build-static # Builds site to static HTML/JS in `/build`

# Test the static build in your browser
builder run server-static
builder run open-static
```

Once your PR is merged into `master`, Travis will automatically build and deploy the site!

# Travis

Server access is possible by storing the key on travis and encrypting the file here, `deploy_static.pem.enc`. This is done with the travis gem:

```
gem install travis
travis encrypt-file ~/.ssh/deploy_static.pem --add
```

Note: Make sure the travis config does not preserve the `~/.ssh/` filepath.
