// Note  : these all made by myself no third party package used!

// ── 3×3 character grid for bigMap
const CHAR_MAP_3 = {
  A:["  /\\  "," /  \\ ","/____\\"],  B:["|--\\ ","|--/ ","|__/ "],
  C:[" ___","/ __","\\___"],           D:["|\\  ","|  \\ ","|__/"],
  E:["|===","|=- ","|___"],           F:["|===","|=- ","|   "],
  G:[" ___","/ _ ","\\__G"],          H:["|  |","|==|","|  |"],
  I:["=|="," | ","=|="],             J:["  |","  |","_/ "],
  K:["|\\ ","|-< ","|/ "],           L:["|  ","|  ","|__"],
  M:["|V|","|V|","|  |"],            N:["|\\ ","|_\\","|  "],
  O:[" _ ","| |","---"],             P:["|--\\","|--/","|   "],
  Q:[" _ ","| |","--Q"],             R:["|--\\","|--/","|  \\"],
  S:[" ___","\\__ ","___/"],         T:["---"," | "," | "],
  U:["| |","| |","---"],             V:["\\ /","\\ /"," V "],
  W:["| |","| |","|W|"],             X:["\\ /","-X-","/ \\"],
  Y:["\\ /"," Y "," | "],            Z:["===","  /","==="],
  " ":["   ","   ","   "],           "!":["| ","| ",". "],
  "?":["_? ","/  ",".  "],           ".":["  ","  ",". "],
  ",":["  ","  ",",' "],
  "0":[" 0 ","| |","---"],           "1":[" 1"," |"," |"],
  "2":["_2 ","  )","_/ "],           "3":["_3 ","_) ","_) "],
  "4":["4 |","---","|  "],           "5":["5__","|_ ","__/"],
  "6":[" 6 ","|\\ ","|_/"],          "7":["777","  /","  /"],
  "8":["(8)","(8)","(8)"],           "9":[" 9 ","(_|","  |"],
};

// ── Block pixel art map
const BLOCK_CHAR = {
  A:'█▀█\n█▀█\n▀ ▀', B:'█▀▄\n█▀▄\n▀▀ ', C:'▀▀▀\n█  \n▀▀▀',
  D:'█▀▄\n█ █\n▀▀ ', E:'█▀▀\n█▀ \n▀▀▀', F:'█▀▀\n█▀ \n▀  ',
  G:'▀▀▀\n█▄█\n▀▀▀', H:'█ █\n█▀█\n▀ ▀', I:'▀█▀\n █ \n▀█▀',
  J:'  █\n  █\n▀▀ ', K:'█▄▀\n█▀▄\n▀ ▀', L:'█  \n█  \n▀▀▀',
  M:'█▄█\n█▀█\n▀ ▀', N:'█▄ █\n█▀▄█\n▀  ▀', O:'▀▀▀\n█ █\n▀▀▀',
  P:'█▀▄\n█▀ \n▀  ', Q:'▀▀▀\n█▄█\n▀▀█', R:'█▀▄\n█▀▄\n▀ ▀',
  S:'▀▀▀\n▀▀▄\n▀▀▀', T:'▀█▀\n █ \n ▀ ', U:'█ █\n█ █\n▀▀▀',
  V:'█ █\n▀▄▀\n ▀ ', W:'█ █\n█▄█\n▀▀▀', X:'▀▄▀\n ▀ \n▀ ▀',
  Y:'▀▄▀\n █ \n ▀ ', Z:'▀▀▀\n▄▀ \n▀▀▀', ' ':'   \n   \n   ',
};

// ── Helpers
const mergeRows = (chars, sep = ' ') =>
  chars.reduce((acc, char) => {
    const rows = char.split('\n');
    if (!acc.length) return rows;
    return acc.map((line, i) => line + sep + (rows[i] || ''));
  }, []).join('\n');


// All fonts Maps

// — Text basics —
export const standardMap  = text => text;
export const uppercaseMap = text => text.toUpperCase();
export const lowercaseMap = text => text.toLowerCase();
export const capitalizeMap= text => text.replace(/\b\w/g, c => c.toUpperCase());

// — Big: real 3-row character grid —
export const bigMap = text =>
  text.toUpperCase().split('').reduce((rows, c) => {
    const g = CHAR_MAP_3[c] || [c, c, c];
    rows[0] += g[0] + '  ';
    rows[1] += g[1] + '  ';
    rows[2] += g[2] + '  ';
    return rows;
  }, ['','','']).join('\n');

// — Blocky: pixel-block chars —
export const blockyMap = text =>
  mergeRows(text.toUpperCase().split('').map(c => BLOCK_CHAR[c] || `${c}\n${c}\n${c}`));

// — Slant: diagonal staircase with borders —
export const slantMap = text => {
  const t = text.toUpperCase();
  return t.split('').map((c, i) => ' '.repeat(i * 2) + `/${c}/`).join('\n');
};

// — Shadow: thick + offset shadow block —
export const shadowMap = text => {
  const t = text.toUpperCase();
  const shadow = '▓▓' + t.split('').join('▓▓') + '▓▓';
  const shade  = '  ' + t.split('').map(() => '░░').join('');
  return `${shadow}\n${shade}`;
};

// — Block: full double-line box —
export const blockMap = text => {
  const t = text.toUpperCase();
  const w = t.length + 4;
  return [
    '╔' + '═'.repeat(w) + '╗',
    '║  ' + t + '  ║',
    '╚' + '═'.repeat(w) + '╝',
  ].join('\n');
};

// — Bubble: rounded speech bubble —
export const bubbleMap = text => {
  const t = text;
  return [
    '  ╭' + '─'.repeat(t.length + 2) + '╮',
    '  │ ' + t + ' │',
    '  ╰' + '─'.repeat(t.length + 2) + '╯',
    '   \\',
    '    `',
  ].join('\n');
};

// — Digital: full leet-speak substitution —
export const digitalMap = text => {
  const map = {
    a:'4', b:'8', c:'(', d:'|)', e:'3', f:'|=', g:'6', h:'|-|',
    i:'1', j:'_|', k:'|<', l:'|', m:'|\\/|', n:'|\\|', o:'0',
    p:'|°', q:'0,', r:'|2', s:'5', t:'7', u:'|_|', v:'\\/',
    w:'\\/\\/', x:'><', y:'`/', z:'2',
  };
  return text.toLowerCase().split('').map(c => map[c] || c).join('').toUpperCase();
};

// — Script: cursive unicode —
export const scriptMap = text => {
  const map = {
    a:'𝓪',b:'𝓫',c:'𝓬',d:'𝓭',e:'𝓮',f:'𝓯',g:'𝓰',h:'𝓱',i:'𝓲',
    j:'𝓳',k:'𝓴',l:'𝓵',m:'𝓶',n:'𝓷',o:'𝓸',p:'𝓹',q:'𝓺',r:'𝓻',
    s:'𝓼',t:'𝓽',u:'𝓾',v:'𝓿',w:'𝔀',x:'𝔁',y:'𝔂',z:'𝔃',
    A:'𝓐',B:'𝓑',C:'𝓒',D:'𝓓',E:'𝓔',F:'𝓕',G:'𝓖',H:'𝓗',I:'𝓘',
    J:'𝓙',K:'𝓚',L:'𝓛',M:'𝓜',N:'𝓝',O:'𝓞',P:'𝓟',Q:'𝓠',R:'𝓡',
    S:'𝓢',T:'𝓣',U:'𝓤',V:'𝓥',W:'𝓦',X:'𝓧',Y:'𝓨',Z:'𝓩',
  };
  return text.split('').map(c => map[c] || c).join('');
};

// — Mini: superscript unicode —
export const miniMap = text => {
  const map = {
    a:'ᵃ',b:'ᵇ',c:'ᶜ',d:'ᵈ',e:'ᵉ',f:'ᶠ',g:'ᵍ',h:'ʰ',i:'ⁱ',
    j:'ʲ',k:'ᵏ',l:'ˡ',m:'ᵐ',n:'ⁿ',o:'ᵒ',p:'ᵖ',q:'ᵠ',r:'ʳ',
    s:'ˢ',t:'ᵗ',u:'ᵘ',v:'ᵛ',w:'ʷ',x:'ˣ',y:'ʸ',z:'ᶻ',
  };
  return text.toLowerCase().split('').map(c => map[c] || c).join('');
};

// — Small: wide spaced —
export const smallMap = text => text.split('').join('  ');

// — Ivrit: RTL reversed + mirror diacritics —
export const ivritMap = text => '⟵ ' + text.split('').reverse().join('') + ' ⟶';

// — Gothic: full uppercase + lowercase fraktur —
export const gothicMap = text => {
  const map = {
    a:'𝔞',b:'𝔟',c:'𝔠',d:'𝔡',e:'𝔢',f:'𝔣',g:'𝔤',h:'𝔥',i:'𝔦',
    j:'𝔧',k:'𝔨',l:'𝔩',m:'𝔪',n:'𝔫',o:'𝔬',p:'𝔭',q:'𝔮',r:'𝔯',
    s:'𝔰',t:'𝔱',u:'𝔲',v:'𝔳',w:'𝔴',x:'𝔵',y:'𝔶',z:'𝔷',
    A:'𝔄',B:'𝔅',C:'ℭ',D:'𝔇',E:'𝔈',F:'𝔉',G:'𝔊',H:'ℌ',I:'ℑ',
    J:'𝔍',K:'𝔎',L:'𝔏',M:'𝔐',N:'𝔑',O:'𝔒',P:'𝔓',Q:'𝔔',R:'ℜ',
    S:'𝔖',T:'𝔗',U:'𝔘',V:'𝔙',W:'𝔚',X:'𝔛',Y:'𝔜',Z:'ℨ',
  };
  return text.split('').map(c => map[c] || c).join('');
};

// — Banner: double-line box with separator —
export const bannerMap = text => {
  const t = text.toUpperCase();
  const w = t.length + 4;
  return [
    '╔' + '═'.repeat(w) + '╗',
    '║  ' + t + '  ║',
    '╠' + '═'.repeat(w) + '╣',
    '║' + ' '.repeat(w+2) + '║',
    '╚' + '═'.repeat(w) + '╝',
  ].join('\n');
};

// — Ogre: monster emoji framing with claws —
export const ogreMap = text =>
  `👹  ${text.toUpperCase().split('').join(' ⸸ ')}  👹\n` +
  `    ${'⌇'.repeat(text.length * 3 - 2)}`;

// — Calvin_s: chaos framing —
export const calvin_sMap = text =>
  `~{ ${text.split('').join('·')} }~\n` +
  ` ≈${'─'.repeat(text.length + 2)}≈`;

// — Chunky: block separator between chars —
export const chunkyMap = text =>
  text.toUpperCase().split('').join(' ▐▌ ');

// — Epic: cinematic widescreen framing —
export const epicMap = text => {
  const t = text.toUpperCase();
  const w = t.length + 6;
  return [
    '◤' + '▀'.repeat(w) + '◥',
    '█▌  ' + t + '  ▐█',
    '◣' + '▄'.repeat(w) + '◢',
  ].join('\n');
};

// — Graffiti: spray paint tag style —
export const graffitiMap = text => {
  const t = text.toUpperCase();
  const drips = t.split('').map(() => ['|','!','¡'][Math.floor(Math.random()*3)]).join(' ');
  return `▓▒░ ${t.split('').join(' ')} ░▒▓\n   ${drips}`;
};

// — Isometric: real 3-layer iso grid —
export const isometric1Map = text => {
  const t = text.toUpperCase();
  const top = '   ' + t.split('').map(() => '___').join('');
  const mid = '  ' + t.split('').map(c => `/${c}\\`).join('');
  const bot = ' ' + t.split('').map(() => '/___').join('') + '/';
  return `${top}\n${mid}\n${bot}`;
};

// — Circuit: box-drawing grid per character —
export const circuitMap = text => {
  const t = text.toUpperCase();
  return [
    t.split('').map(() => '┌─┐').join('─'),
    t.split('').map(c  => `│${c}│`).join('─'),
    t.split('').map(() => '└─┘').join('─'),
  ].join('\n');
};

// — Retrowave: 80s vaporwave aesthetic —
export const retrowaveMap = text => {
  const t = text.toUpperCase();
  const w = t.length * 2 + 4;
  const grid = Array.from({length:2}, (_,i) =>
    '  ' + Array.from({length:t.length}, (_,j) => (i+j)%2 ? '/' : '\\').join('')
  ).join('\n');
  return [
    '▄'.repeat(w),
    '█ ' + t.split('').join(' ') + ' █',
    '▀'.repeat(w),
    grid,
  ].join('\n');
};

// — Glitch: corruption effect —
export const glitchMap = text => {
  const t = text.toUpperCase();
  const glitchChars = ['̶','̷','̸','̴','̵'];
  const corrupt = t.split('').map((c,i) =>
    i % 3 === 1 ? c + glitchChars[i % glitchChars.length] : c
  ).join('');
  return `${t}\n${corrupt}\n${t.split('').reverse().join('')}`;
};

// — Neon: glow box outline —
export const neonMap = text => {
  const t = text.toUpperCase();
  const w = t.length + 2;
  return [
    '·' + '─'.repeat(w) + '·',
    '│ ' + t + ' │',
    '·' + '─'.repeat(w) + '·',
    '  \\' + ' '.repeat(w - 2) + '\\',
  ].join('\n');
};

// — Pyramid: growing triangle of text —
export const pyramidMap = text => {
  const t = text.toUpperCase();
  return t.split('').map((_, i) => {
    const slice = t.slice(0, i + 1);
    const pad = ' '.repeat(t.length - i - 1);
    return pad + slice.split('').join(' ') + pad;
  }).join('\n');
};

// — Mirror: bilateral symmetry —
export const mirrorMap = text => {
  const t = text.toUpperCase();
  const rev = t.split('').reverse().join('');
  return [
    t + ' ║ ' + rev,
    t.split('').join('·') + '╬' + rev.split('').join('·'),
    '░'.repeat(t.length) + ' ║ ' + '░'.repeat(rev.length),
  ].join('\n');
};

// — Wave: sine-style shimmer —
export const waveMap = text => {
  const t = text.toUpperCase();
  const w = ['~','≈','~','≈'];
  return [
    t.split('').map((_,i) => w[i%4]).join(''),
    t.split('').join(' '),
    t.split('').map((_,i) => w[(i+2)%4]).join(''),
  ].join('\n');
};

// — Fire: flame + ember effect —
export const fireMap = text => {
  const t = text.toUpperCase();
  const sparks = t.split('').map(() => ['▲','△','∧'][Math.floor(Math.random()*3)]).join(' ');
  const base   = t.split('').map(c => `▌${c}▐`).join('');
  const embers = ('░▒▓'.repeat(t.length)).slice(0, t.length * 3);
  return `  ${sparks}\n${base}\n${embers}`;
};

// — Typewriter: terminal cursor style —
export const typewriterMap = text =>
  `> ${text}_\n  ${'‾'.repeat(text.length + 1)}`;

// — Stencil: dashed border cut-out —
export const stencilMap = text => {
  const t = text.toUpperCase();
  const dash = '╌'.repeat(t.length + 4);
  return `${dash}\n┊ ${t} ┊\n${dash}`;
};

// — Braille: dot-matrix encoding —
export const brailleMap = text => {
  const map = {
    a:'⠁',b:'⠃',c:'⠉',d:'⠙',e:'⠑',f:'⠋',g:'⠛',h:'⠓',i:'⠊',
    j:'⠚',k:'⠅',l:'⠇',m:'⠍',n:'⠝',o:'⠕',p:'⠏',q:'⠟',r:'⠗',
    s:'⠎',t:'⠞',u:'⠥',v:'⠧',w:'⠺',x:'⠭',y:'⠽',z:'⠵',' ':'⠀',
  };
  const encoded = text.toLowerCase().split('').map(c => map[c] || c).join('');
  return `${encoded}\n${text.toUpperCase()}`;
};

// — Scanline: CRT monitor effect —
export const scanlineMap = text => {
  const t = text.toUpperCase();
  const bar = '▬'.repeat(t.length * 2 + 2);
  return `${bar}\n ${t.split('').join(' ')}\n${bar}`;
};

// — Matrix: katakana rain effect —
export const matrixMap = text => {
  const kat = 'ｦｧｨｩｪｫｬｭｮｯｰｱｲｳｴｵｶｷｸｹｺ';
  const noise = () => kat[Math.floor(Math.random() * kat.length)];
  const t = text.toUpperCase();
  return [
    t.split('').map(() => noise() + noise()).join(' '),
    t.split('').join('  '),
    t.split('').map(() => noise() + noise()).join(' '),
  ].join('\n');
};

// ── Font registry
export const fontMap = {
  // basics
  standard:    standardMap,
  uppercase:   uppercaseMap,
  lowercase:   lowercaseMap,
  capitalize:  capitalizeMap,

  // classic multi-line
  big:         bigMap,
  blocky:      blockyMap,
  slant:       slantMap,
  shadow:      shadowMap,
  block:       blockMap,
  bubble:      bubbleMap,
  digital:     digitalMap,

  // unicode stylized
  script:      scriptMap,
  mini:        miniMap,
  small:       smallMap,
  ivrit:       ivritMap,
  gothic:      gothicMap,

  // framed / structural
  banner:      bannerMap,
  circuit:     circuitMap,
  stencil:     stencilMap,
  neon:        neonMap,
  typewriter:  typewriterMap,

  // artistic
  ogre:        ogreMap,
  calvin_s:    calvin_sMap,
  chunky:      chunkyMap,
  epic:        epicMap,
  graffiti:    graffitiMap,
  isometric1:  isometric1Map,

  // effects
  retrowave:   retrowaveMap,
  glitch:      glitchMap,
  pyramid:     pyramidMap,
  mirror:      mirrorMap,
  wave:        waveMap,
  fire:        fireMap,
  braille:     brailleMap,
  scanline:    scanlineMap,
  matrix:      matrixMap,
};
