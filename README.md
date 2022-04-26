## Install dependencies (macOS Monterey)

```
pip3 install --user mkdocs
pip3 install --user mkdocs-material
```

## Edit docs

**YOU MUST BE ON THE MAIN BRANCH**. This is not the default branch when the repo is cloned. Add a page by following the instructions in the [mkdocs documentation](https://www.mkdocs.org/getting-started/#adding-pages).

Test your changes locally by running `mkdocs serve`

## Deploy the docs live

From the main branch run `mkdocs gh-deploy --ignore-version`