topfranchise.ru article page markup


## Handlebars page generator

1. Run `npm i`

2. Run `npm run page1`

3. Check folder `output/page1` and check the generated `index.html`


## How to use

1. Create a new JavaScript file in the pages/ directory for each page you want to generate. For example, page2.js for a second page.

2. In each page script (e.g., page1.js, page2.js), modify the script to load the necessary templates and replace placeholders as needed. You can follow the example in the provided page1.js script.

3. Customize the data passed to the templates to match the content you want for each page. Update the data object accordingly.

4. Run the page script using Node.js to generate the HTML file for that specific page. See example in package.json scripts

Check the output/ directory to find the generated HTML file for your page (e.g., output/page1/index.html).

## UPDATE

To generate specific template you need to run command:
`npm run generate --tname = {{ template name here }} {{ folder }}`

default folder - "/static"

To generate page with specific template you need to run command:
`npm run generate --tname = {{ template name here }} {{ folder }} {{page name}}`

To run http server use command
`npx http-server public`

## Available templates

1. "blog-article-standart" - Standart template for blog article with sidebar.

