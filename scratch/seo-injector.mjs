import fs from 'fs';
import path from 'path';

const pagesDir = 'c:/Users/Srinivas/Downloads/rudraksha/src/pages';
const files = fs.readdirSync(pagesDir).filter(f => f.endsWith('.jsx'));

for (const file of files) {
  const filePath = path.join(pagesDir, file);
  let content = fs.readFileSync(filePath, 'utf8');

  if (content.includes('import SEO')) continue;

  const importStatement = "import SEO from '../components/SEO'\n";
  const lastImportIndex = content.lastIndexOf('import ');
  if (lastImportIndex !== -1) {
    const endOfLastImport = content.indexOf('\n', lastImportIndex);
    content = content.slice(0, endOfLastImport + 1) + importStatement + content.slice(endOfLastImport + 1);
  } else {
    content = importStatement + content;
  }

  const pageNameMatch = content.match(/export default function ([a-zA-Z0-9_]+)/);
  let pageName = 'Page';
  let urlPath = '/';
  if (pageNameMatch) {
      let rawName = pageNameMatch[1];
      pageName = rawName.replace(/([A-Z])/g, ' $1').trim();
      if (pageName === 'E S D Products') pageName = 'ESD Products';
      if (pageName === 'Home') pageName = 'Home';
      
      urlPath = '/' + rawName.toLowerCase();
      if (rawName === 'Home') urlPath = '/';
      else if (rawName === 'SafetyDisposables') urlPath = '/safety-disposables';
      else if (rawName === 'IndustrialGloves') urlPath = '/industrial-gloves';
      else if (rawName === 'ESDProducts') urlPath = '/esd';
      else if (rawName === 'CottonSwabs') urlPath = '/cotton-swab';
      else if (rawName === 'BiomassBriquettes') urlPath = '/biomass-briquettes';
      else if (rawName === 'IndustrialFlooring') urlPath = '/flooring';
      else if (rawName === 'Pallets') urlPath = '/pallet';
  }

  const returnIndex = content.indexOf('return (');
  if (returnIndex !== -1) {
    const firstTagIndex = content.indexOf('<', returnIndex + 8);
    const endOfFirstTagIndex = content.indexOf('>', firstTagIndex);
    
    if (endOfFirstTagIndex !== -1) {
        const insertionPoint = endOfFirstTagIndex + 1;
        const seoTag = `\n      <SEO title="${pageName}" url="${urlPath}" />`;
        content = content.slice(0, insertionPoint) + seoTag + content.slice(insertionPoint);
    }
  }

  fs.writeFileSync(filePath, content, 'utf8');
  console.log('Processed', file);
}
