const fs = require('fs');
const path = require('path');

// Function to recursively find all HTML files
function findHtmlFiles(dir, fileList = []) {
  const files = fs.readdirSync(dir);

  files.forEach(file => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);

    if (stat.isDirectory()) {
      findHtmlFiles(filePath, fileList);
    } else if (path.extname(file) === '.html') {
      fileList.push(filePath);
    }
  });

  return fileList;
}

// List all CSS files in the output directory
console.log('CSS files in build output:');
function findCssFiles(dir) {
  const files = fs.readdirSync(dir);

  files.forEach(file => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);

    if (stat.isDirectory()) {
      findCssFiles(filePath);
    } else if (path.extname(file) === '.css') {
      console.log(`- ${filePath}`);
    }
  });
}

try {
  findCssFiles('./out/_next');
} catch (err) {
  console.log('Error finding CSS files:', err.message);
}

// Find all HTML files in the out directory
const htmlFiles = findHtmlFiles('./out');
console.log(`Processing ${htmlFiles.length} HTML files...`);

// Define favicon links to add to the head of each HTML file
const faviconLinks = `
  <link rel="icon" href="https://expertabelleza.es/images/favicon.ico" />
  <link rel="icon" href="https://expertabelleza.es/images/favicon.svg" type="image/svg+xml" />
  <link rel="icon" href="https://expertabelleza.es/images/favicon-96x96.png" sizes="96x96" type="image/png" />
  <link rel="apple-touch-icon" href="https://expertabelleza.es/images/apple-touch-icon.png" />
  <link rel="manifest" href="https://expertabelleza.es/images/site.webmanifest" />
`;

// Replace relative paths in each HTML file
htmlFiles.forEach(filePath => {
  let content = fs.readFileSync(filePath, 'utf8');

  // Look for CSS link patterns
  const cssLinkPattern = /<link\s+[^>]*href=["']([^"']+\.css(?:\?[^"']*)?)["'][^>]*>/g;
  let match;
  const cssLinks = [];

  while ((match = cssLinkPattern.exec(content)) !== null) {
    cssLinks.push(match[1]);
  }

  console.log(`CSS links in ${filePath}:`, cssLinks);

  // Fix all href= references to /_next/ (CSS, JS preloads, fonts)
  content = content.replace(
    /href="\/_next\//g,
    'href="https://expertabelleza.es/_next/'
  );

  // Fix all src= references to /_next/ (JS chunks)
  content = content.replace(
    /src="\/_next\//g,
    'src="https://expertabelleza.es/_next/'
  );

  // Fix image references - both src and srcSet attributes
  content = content.replace(
    /src="\/images\//g,
    'src="https://expertabelleza.es/images/'
  );

  content = content.replace(
    /srcset="\/images\//g,
    'srcset="https://expertabelleza.es/images/'
  );

  // Add favicon links to the head section
  content = content.replace(
    /<head>([\s\S]*?)<\/head>/,
    `<head>$1${faviconLinks}</head>`
  );

  fs.writeFileSync(filePath, content);
  console.log(`Fixed paths and added favicons in: ${filePath}`);
});

console.log('All paths fixed and favicons added successfully!');
