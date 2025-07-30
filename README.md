<div align="center">

# Vantage Product Documentation

[![Deploy Docusaurus](https://github.com/vantage-sh/docs.vantage.sh/actions/workflows/main.yml/badge.svg?branch=master)](https://github.com/vantage-sh/docs.vantage.sh/actions/workflows/main.yml)

<img src="https://assets.vantage.sh/docs/index-cards/docs-social-card.jpg" alt="image" width="600" height="auto">
</div>

Thank you for your interest in contributing to the Vantage Product Documentation! The Vantage documentation is built using [Docusaurus 2](https://docusaurus.io/). This documentation is developed and maintained by Vantage employees.

## Opening Issues

If you encounter any problems or have suggestions for improvement, please open a GitHub issue. We appreciate all community contributions!

## Contributing

1. Fork the repository to your account.
2. Clone the forked repository to your local machine:

    ```
    $ git clone https://github.com/your-username/docs.vantage.sh.git
    ```

3. Move to the project directory:

    ```
    $ cd docs.vantage.sh
    ```

4. Install the project dependencies using either `yarn` or `npm`:

    ```
    $ yarn
    ```

    or

    ```
    $ npm install
    ```

5. Start the local development server:

    ```
    $ yarn start
    ```

    or

    ```
    $ npm run start
    ```
    This command starts a local development server and opens up a browser window (at `localhost:3000`). Most changes are reflected live without having to restart the server. To stop the local server, press `ctrl + c` in the terminal.
    
6. **(Optional)** To build a static copy of the site in the `build` directory, use the following command:

    ```
    $ yarn build
    ```

    or

    ```
    $ npm run build
    $ npm run serve
    ```
6. Open a pull request to have your changes reviewed. A Vantage employee will review your request before merging. 

## Search

Search is provided by [Algolia DocSearch](https://docsearch.algolia.com/). DocSearch runs a reindex every Thursday at 12 UTC. This reindex can also be run manually, on request, by anyone who has credentials to the Algolia Crawler.

## CI/CD

The `Test deployment` workflow is triggered when a pull request is opened as well as when any commits are added to the pull request. 

On push to the `master` branch, the `Deploy to GitHub Pages` workflow is triggered and builds the site as well as deploys it to the `gh-pages` branch.  

