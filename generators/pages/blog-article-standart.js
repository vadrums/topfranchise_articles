const process = require('process');
const fs = require('fs');
const path = require('path');
const Handlebars = require('handlebars');

// Define template settings
const templateType = 'blog-article-standart';
const componentName = 'blog-article';

// Define the base directory
const baseDir = path.join(__dirname, '..');
// Read the Handlebars template files
const headSource = fs.readFileSync(path.join(baseDir, 'templates/' + templateType, 'hbs', 'head.hbs'), 'utf-8');
const bodyScriptsSource = fs.readFileSync(path.join(baseDir, 'templates/' + templateType, 'hbs', 'body-scripts.hbs'), 'utf-8');

// Compile the templates
const headTemplate = Handlebars.compile(headSource);
const bodyScriptsTemplate = Handlebars.compile(bodyScriptsSource);

// Data to be passed to the templates
const data = { pageTitle: 'Topfranchise - Blog Article Template', componentName: componentName};

// Render the templates with data
const headHtml = headTemplate(data);
const bodyScriptsHtml = bodyScriptsTemplate(data);

// Read the index.html file
const indexHtml = fs.readFileSync(path.join(baseDir, 'templates/' + templateType, 'index.html'), 'utf-8');

// Replace template placeholders in index.html with rendered content
const finalHtml = indexHtml
  .replaceAll('{{> head }}', headHtml)
  .replaceAll('{{> component-name }}', componentName)
  .replaceAll('{{> bodyScripts}}', bodyScriptsHtml);

var outputDir = path.join(baseDir, '../pages/', 'blog-article');

if (process.argv[2]) {
  outputSpecialPath = '../pages/' + componentName;
  outputDir = path.join(baseDir, outputSpecialPath, process.argv[2]);
}

// Ensure the output directory exists; create it if not
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

// Define the path to save the final HTML file
const outputPath = path.join(outputDir, 'index.html');


// Save the final HTML to the specified path
fs.writeFileSync(outputPath, finalHtml);

console.log('Final HTML file saved');
