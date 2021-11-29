## Setup

Run `yarn` to install dependencies.
Run `npm i -g netlify-cli` to install Netlify command line tools.

Run `npm i -D playwright` for neccessary libraries
for PNG generation. (This can take a long time as it
downloads builds of various browser engines.)

Run `npm install playwright-core playwright-aws-lambda` to install
project-specific dependencies on playwright (yes, I don't no either
why this is so complicated.)

## Deveopment server

Run `yarn server` to start the development server for direct
browser rendering (faster when designing and debugging). Doesn't
need playwright.

Run `ntl dev` to start the development server for PNG generation.
Requires that playwright is installed.

### Example URLs

Direct rendering in browser (run `yarn server`):
`http://localhost:3000/?title=Blah`

Generate PNG (run `ntl dev`, requires playwright):
`http://localhost:8888/.netlify/functions/create-card/?title=Blah`

## Deployment

Pushing to Github will auto-deploy on Netlify.