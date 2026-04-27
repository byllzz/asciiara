
// All FILTER MAPS

export const noneMap = text => text;

// — Color filters (HTML span output) —
export const chromostereopsis1Map = text =>
  text.split('').map((c, i) =>
    `<span style="color:${i % 2 ? 'red' : 'blue'}">${c}</span>`
  ).join('');

export const chromostereopsis2Map = text =>
  text.split('').map((c, i) =>
    `<span style="color:${i % 2 ? 'cyan' : 'magenta'}">${c}</span>`
  ).join('');

export const rainbow1Map = text => {
  const colors = ['red','orange','yellow','green','blue','indigo','violet'];
  return text.split('').map((c, i) =>
    `<span style="color:${colors[i % colors.length]}">${c}</span>`
  ).join('');
};

export const rainbow2Map = text => {
  const colors = ['#ff0000','#00ff00','#0000ff'];
  return text.split('').map((c, i) =>
    `<span style="color:${colors[i % colors.length]}">${c}</span>`
  ).join('');
};

export const rainbow3Map = text =>
  text.split('').map((c, i) =>
    `<span style="color:hsl(${(i * 30) % 360},100%,50%)">${c}</span>`
  ).join('');

export const goldMap = text =>
  text.split('').map((c, i) => {
    const l = 45 + (i % 3) * 10;
    return `<span style="color:hsl(45,100%,${l}%)">${c}</span>`;
  }).join('');

export const fireColorMap = text => {
  const stops = ['#ff2200','#ff5500','#ff8800','#ffaa00','#ffdd00'];
  return text.split('').map((c, i) =>
    `<span style="color:${stops[i % stops.length]}">${c}</span>`
  ).join('');
};

export const cyanMagentaMap = text => {
  const stops = ['#00ffff','#88aaff','#ff00ff'];
  return text.split('').map((c, i) =>
    `<span style="color:${stops[i % stops.length]}">${c}</span>`
  ).join('');
};

export const matrixColorMap = text =>
  text.split('').map((c, i) => {
    const l = 35 + (i % 4) * 15;
    return `<span style="color:hsl(120,100%,${l}%)">${c}</span>`;
  }).join('');

// — Flip filters —
export const flipVerticallyMap   = text => text.split('\n').reverse().join('\n');
export const flipHorizontallyMap = text => text.split('').reverse().join('');
export const flipMap = text =>
  text.split('\n').reverse().map(line => line.split('').reverse().join('')).join('\n');

// — Style filters —
export const sleekMap = text =>
  `<span style="font-weight:300;letter-spacing:2px;">${text}</span>`;

export const boldMap = text =>
  `<span style="font-weight:700;letter-spacing:1px;">${text}</span>`;

export const italicMap = text =>
  `<span style="font-style:italic;letter-spacing:1px;">${text}</span>`;

export const strikeMap = text =>
  text.split('').map(c => c + '̶').join('');

export const underlineHeavyMap = text =>
  text + '\n' + '▔'.repeat(text.length);

// — Code comment filters —
export const bashCommentMap    = text => `# ${text}`;
export const cCommentMap       = text => `/* ${text} */`;
export const cppCommentMap     = text => `// ${text}`;
export const fortranCommentMap = text => `! ${text}`;
export const mysqlCommentMap   = text => `-- ${text}`;
export const shellEchoMap      = text => `echo "${text}"`;
export const vbCommentMap      = text => `' ${text}`;
export const pythonDocMap      = text => `"""\n  ${text}\n"""`;
export const htmlCommentMap    = text => `<!-- ${text} -->`;
export const yamlCommentMap    = text => `# yaml\n# ${text}`;
export const jsonWrapMap       = text => `{\n  "text": "${text}"\n}`;
export const sqlPrintMap       = text => `PRINT '${text}';`;
export const luaCommentMap     = text => `-- [[ ${text} ]]`;
export const rubyCommentMap    = text => `# frozen: true\n# ${text}`;

// ── Filter registry
export const filterMap = {
  none: noneMap,

  // color
  chromostereopsis1: chromostereopsis1Map,
  chromostereopsis2: chromostereopsis2Map,
  rainbow1:          rainbow1Map,
  rainbow2:          rainbow2Map,
  rainbow3:          rainbow3Map,
  gold:              goldMap,
  fire:              fireColorMap,
  cyanMagenta:       cyanMagentaMap,
  matrix:            matrixColorMap,

  // flip
  flipVertically:    flipVerticallyMap,
  flipHorizontally:  flipHorizontallyMap,
  flip:              flipMap,

  // style
  sleek:             sleekMap,
  bold:              boldMap,
  italic:            italicMap,
  strike:            strikeMap,
  underline:         underlineHeavyMap,

  // code comments (developer section)
  bashComment:    bashCommentMap,
  cComment:       cCommentMap,
  cppComment:     cppCommentMap,
  fortranComment: fortranCommentMap,
  mysqlComment:   mysqlCommentMap,
  shellEcho:      shellEchoMap,
  vbComment:      vbCommentMap,
  pythonDoc:      pythonDocMap,
  htmlComment:    htmlCommentMap,
  yamlComment:    yamlCommentMap,
  jsonWrap:       jsonWrapMap,
  sqlPrint:       sqlPrintMap,
  luaComment:     luaCommentMap,
  rubyComment:    rubyCommentMap,
};
