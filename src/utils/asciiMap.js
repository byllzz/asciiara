// --- Plain / HTML maps ---
export const noneMap = text => text;

export const chromostereopsis1Map = text =>
  text.split('').map((c, i) =>
    `<span style="color:${i % 2 ? 'red' : 'blue'}">${c}</span>`
  ).join('');

export const chromostereopsis2Map = text =>
  text.split('').map((c, i) =>
    `<span style="color:${i % 2 ? 'cyan' : 'magenta'}">${c}</span>`
  ).join('');

export const flipVerticallyMap = text => text.split('\n').reverse().join('\n');

export const flipHorizontallyMap = text => text.split('').reverse().join('');

export const flipMap = text =>
  text.split('\n')
      .reverse()
      .map(line => line.split('').reverse().join(''))
      .join('\n');

export const rainbow1Map = text => {
  const colors = ["red", "orange", "yellow", "green", "blue", "indigo", "violet"];
  return text.split('').map((c, i) =>
    `<span style="color:${colors[i % colors.length]}">${c}</span>`
  ).join('');
};

export const rainbow2Map = text => {
  const colors = ["#ff0000", "#00ff00", "#0000ff"];
  return text.split('').map((c, i) =>
    `<span style="color:${colors[i % colors.length]}">${c}</span>`
  ).join('');
};

export const rainbow3Map = text =>
  text.split('').map((c, i) =>
    `<span style="color:hsl(${(i * 30) % 360},100%,50%)">${c}</span>`
  ).join('');

export const sleekMap = text =>
  `<span style="font-weight:300; letter-spacing:1px;">${text}</span>`;

// --- Code / comment maps ---
export const bashCommentMap = text => `# ${text}`;
export const cCommentMap = text => `/* ${text} */`;
export const cppCommentMap = text => `// ${text}`;
export const fortranCommentMap = text => `! ${text}`;
export const mysqlCommentMap = text => `-- ${text}`;
export const shellEchoMap = text => `echo "${text}"`;
export const vbCommentMap = text => `' ${text}`;

// --- Master map for lookup ---
export const filterMap = {
  none: noneMap,

  chromostereopsis1: chromostereopsis1Map,
  chromostereopsis2: chromostereopsis2Map,

  flipVertically: flipVerticallyMap,
  flipHorizontally: flipHorizontallyMap,
  flip: flipMap,

  rainbow1: rainbow1Map,
  rainbow2: rainbow2Map,
  rainbow3: rainbow3Map,

  sleek: sleekMap,

  bashComment: bashCommentMap,
  cComment: cCommentMap,
  cppComment: cppCommentMap,
  fortranComment: fortranCommentMap,
  mysqlComment: mysqlCommentMap,
  shellEcho: shellEchoMap,
  vbComment: vbCommentMap,
};
