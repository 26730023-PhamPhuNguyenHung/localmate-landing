const https = require('https');
const fs = require('fs');

const fontUrl = 'https://fonts.gstatic.com/s/mali/v13/N0bX2SRONuN4SCj8_ldQIQ.ttf';
console.log('Downloading Mali font...');

https.get(fontUrl, (res) => {
  const chunks = [];
  res.on('data', c => chunks.push(c));
  res.on('end', () => {
    const buf = Buffer.concat(chunks);
    const b64 = buf.toString('base64');
    console.log('Mali font downloaded, size:', buf.length, 'base64 length:', b64.length);
    
    // Also save the TTF font locally for Vite/React usage
    const fontDir = 'public/fonts';
    if (!fs.existsSync(fontDir)) fs.mkdirSync(fontDir, { recursive: true });
    fs.writeFileSync(fontDir + '/Mali-MediumItalic.ttf', buf);
    console.log('Saved public/fonts/Mali-MediumItalic.ttf');

    const filePath = 'D:/01-Life-Operations/output/localmate-reference/localmate.html';
    let html = fs.readFileSync(filePath, 'utf8');

    // Replace lines 37 to 43
    const lines = html.split('\n');
    let startLine = -1, endLine = -1;
    for (let i = 0; i < lines.length; i++) {
      if (lines[i].includes("@font-face") && lines[i+1] && lines[i+1].includes("'Caveat'")) {
        startLine = i;
        for (let j = i; j < lines.length; j++) {
          if (lines[j].trim() === "}") {
            endLine = j;
            break;
          }
        }
        break;
      }
    }

    if (startLine !== -1 && endLine !== -1) {
      console.log(`Replacing lines ${startLine} to ${endLine} with Mali font-face...`);
      const newFontFaces = [
        "@font-face {",
        "  font-family: 'Caveat';",
        "  font-style: normal;",
        "  font-weight: 500;",
        "  font-display: swap;",
        `  src: url(data:font/ttf;base64,${b64});`,
        "}",
        "@font-face {",
        "  font-family: 'Mali';",
        "  font-style: italic;",
        "  font-weight: 500;",
        "  font-display: swap;",
        `  src: url(data:font/ttf;base64,${b64});`,
        "}"
      ];
      lines.splice(startLine, endLine - startLine + 1, ...newFontFaces);
      html = lines.join('\n');
    } else {
      console.log('Warning: could not locate Caveat font-face block');
    }

    // Update .handwritten styling
    html = html.replace(
      /\.handwritten\{font-family:'Caveat','Segoe Print',cursive;font-size:27px\}/,
      `.handwritten{font-family:'Mali','Patrick Hand','Caveat',cursive;font-style:italic;font-weight:500;font-size:28px}`
    );

    // Inject Google Fonts link in <head> for fast streaming CDN
    const gfLink = '<link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin><link href="https://fonts.googleapis.com/css2?family=Mali:ital,wght@1,500;1,600;1,700&family=Patrick+Hand&display=swap" rel="stylesheet">';
    if (!html.includes('family=Mali')) {
      html = html.replace('</head>', gfLink + '</head>');
    }

    fs.writeFileSync(filePath, html, 'utf8');
    console.log('DONE! Updated', filePath);
  });
});
