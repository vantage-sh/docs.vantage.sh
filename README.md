# Website

The Vantage documentation is built using [Docusaurus 2](https://docusaurus.io/).

### Installation

```
$ yarn
```
or
```
$ npm install
```

### Search

Search is provided by [docusaurs-search-local](https://github.com/cmfcmf/docusaurus-search-local).

### Local Development

```
$ yarn start
```
or
```
$ npm run start
```

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

### Build

```
$ yarn build
```
or
```
$ npm run build
$ npm run serve
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

### Deployment (TODO)

Using SSH:

```
$ USE_SSH=true yarn deploy
```

Not using SSH:

```
$ GIT_USER=<Your GitHub username> yarn deploy
```

If you are using GitHub pages for hosting, this command is a convenient way to build the website and push to the `gh-pages` branch.
