import fs from 'node:fs';

import { generator } from './generator';
import { generateIcons, iconsets } from './icons';

for (const iconset of iconsets) {
  fs.writeFile(
    `${iconset}.json`,
    JSON.stringify({
      hideExplorerArrows: true,
      iconDefinitions: generateIcons(iconset),
      ...generator,
    }),
    err => {
      if (err) {
        console.error('error', err);
      }
    },
  );
}
