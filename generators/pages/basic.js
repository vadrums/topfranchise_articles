/* Script needs to be updated to become more flexable */
const fs = require('fs');
const path = require('path');
// Define the base directory
const Handlebars = require('handlebars');

const baseDir = path.join(__dirname, '..');
// Read the Handlebars template files
const headSource = fs.readFileSync(path.join(baseDir, 'templates', 'hbs', 'head.hbs'), 'utf-8');
const bodyScriptsSource = fs.readFileSync(path.join(baseDir, 'templates', 'hbs', 'body-scripts.hbs'), 'utf-8');

// Compile the templates
const headTemplate = Handlebars.compile(headSource);
const bodyScriptsTemplate = Handlebars.compile(bodyScriptsSource);

// Data to be passed to the templates
const data = { pageTitle: 'My Website' };

// Render the templates with data
const headHtml = headTemplate(data);
const bodyScriptsHtml = bodyScriptsTemplate(data);

// Read the index.html file
const indexHtml = fs.readFileSync(path.join(baseDir, 'templates', 'index.html'), 'utf-8');

// Replace template placeholders in index.html with rendered content
const finalHtml = indexHtml
  .replace('{{> head }}', headHtml)
  .replace('{{> bodyScripts}}', bodyScriptsHtml);

const outputDir = path.join(baseDir, 'output', 'page1');

// Ensure the output directory exists; create it if not
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

// Define the path to save the final HTML file
const outputPath = path.join(outputDir, 'index.html');

console.log(outputPath)

// Save the final HTML to the specified path
fs.writeFileSync(outputPath, finalHtml);

console.log('Final HTML file saved');
