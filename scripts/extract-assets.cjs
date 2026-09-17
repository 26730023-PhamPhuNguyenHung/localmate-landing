const fs = require('fs');
const path = require('path');
const html = fs.readFileSync('D:/01-Life-Operations/output/localmate-reference/localmate.html', 'utf8');

const outputDir = path.join(__dirname, '../public/images/landing');
if (!fs.existsSync(outputDir)) fs.mkdirSync(outputDir, { recursive: true });

// Extract background texture
const bgMatch = html.match(/url\('(data:image\/png;base64,[^']+)'\)/);
if (bgMatch) {
  const b64 = bgMatch[1].replace('data:image/png;base64,', '');
  const buf = Buffer.from(b64, 'base64');
  fs.writeFileSync(path.join(outputDir, 'bg-texture.png'), buf);
  console.log('Saved bg-texture.png, size:', buf.length);
}

// Extract embeddedArtwork
const artMatch = html.match(/const embeddedArtwork\s*=\s*(\[[\s\S]*?\]);/);
if (artMatch) {
  const list = JSON.parse(artMatch[1]);
  list.forEach((dataUrl, idx) => {
    const b64 = dataUrl.replace('data:image/png;base64,', '');
    const buf = Buffer.from(b64, 'base64');
    fs.writeFileSync(path.join(outputDir, `artwork-${idx+1}.png`), buf);
    console.log(`Saved artwork-${idx+1}.png, size:`, buf.length);
  });
}
