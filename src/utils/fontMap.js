// all maps for fotns in options made by hand...
export const standardMap = text => text;
export const uppercaseMap = text => text.toUpperCase();
export const lowercaseMap = text => text.toLowerCase();
export const capitalizeMap = text => text.replace(/\b\w/g, c => c.toUpperCase());

export const bigMap = text => text.split('').join('  ').toUpperCase();

export const slantMap = text => {
  return text.split('').map((c, i) => ' '.repeat(i) + c).join('\n');
};

export const shadowMap = text => {
  const main = text.toUpperCase();
  const shadow = text.toLowerCase().replace(/./g, '░');
  return `${main}\n${shadow}`;
};

export const blockMap = text => {
  const line = "█".repeat(text.length + 2);
  return `${line}\n█${text.toUpperCase()}█\n${line}`;
};

export const bubbleMap = text => {
  const top = " ╭" + "─".repeat(text.length) + "╮";
  const mid = " │" + text + "│";
  const bot = " ╰" + "─".repeat(text.length) + "╯";
  return `${top}\n${mid}\n${bot}`;
};

export const digitalMap = text => {
  const map = { '0': 'o', '1': 'i', '2': 'z', '3': 'e', '4': 'a', '5': 's', '8': 'b' };
  return text.toLowerCase().split('').map(c => map[c] || c).join('').toUpperCase();
};

export const scriptMap = text => {
  const map = { a: '𝓪', b: '𝓫', c: '𝓬', d: '𝓭', e: '𝓮', f: '𝓯', g: '𝓰', h: '𝓱', i: '𝓲', j: '𝓳', k: '𝓴', l: '𝓵', m: '𝓶', n: '𝓷', o: '𝓸', p: '𝓹', q: '𝓺', r: '𝓻', s: '𝓼', t: '𝓽', u: '𝓾', v: '𝓿', w: '𝔀', x: '𝔁', y: '𝔂', z: '𝔃' };
  return text.toLowerCase().split('').map(c => map[c] || c).join('');
};

export const miniMap = text => {
  const map = { a: 'ᵃ', b: 'ᵇ', c: 'ᶜ', d: 'ᵈ', e: 'ᵉ', f: 'ᶠ', g: 'ᵍ', h: 'ʰ', i: 'ⁱ', j: 'ʲ', k: 'ᵏ', l: 'ˡ', m: 'ᵐ', n: 'ⁿ', o: 'ᵒ', p: 'ᵖ', r: 'ʳ', s: 'ˢ', t: 'ᵗ', u: 'ᵘ', v: 'ᵛ', w: 'ʷ', x: 'ˣ', y: 'ʸ', z: 'ᶻ' };
  return text.toLowerCase().split('').map(c => map[c] || c).join('');
};

export const smallMap = text => text.split('').join(' ');

export const ivritMap = text => text.split('').reverse().join('');

export const gothicMap = text => {
  const map = { a: '𝔄', b: '𝔅', c: 'ℭ', d: '𝔇', e: '𝔈', f: '𝔉', g: '𝔊', h: 'ℌ', i: 'ℑ', j: '𝔍', k: '𝔎', l: '𝔏', m: '𝔐', n: '𝔑', o: '𝔒', p: '𝔓', q: '𝔔', r: 'ℜ', s: '𝔖', t: '𝔗', u: '𝔘', v: '𝔙', w: '𝔚', x: '𝔛', y: '𝔜', z: 'ℨ' };
  return text.toLowerCase().split('').map(c => map[c] || c).join('');
};

export const bannerMap = text => {
  const b = "★".repeat(text.length + 4);
  return `${b}\n★ ${text.toUpperCase()} ★\n${b}`;
};

export const ogreMap = text => `👹 ${text.split('').join('_')} 👹`;

export const calvin_sMap = text => ` { ${text.split('').join('~')} } `;

export const chunkyMap = text => text.toUpperCase().split('').join(' ■ ');

export const epicMap = text => `◢▇◣ ${text.toUpperCase()} ◢▇◣`;

export const graffitiMap = text => `░█ ${text.toUpperCase()} █░`;

export const isometric1Map = text => {
  const top = "  " + text.replace(/./g, "_ ");
  const mid = " /" + text.split('').join('/') + "/";
  const bot = " " + text.replace(/./g, "/_");
  return `${top}\n${mid}\n${bot}`;
};

// all fonts
export const fontMap = {
  // text 
  standard: standardMap,
  uppercase: uppercaseMap,
  lowercase: lowercaseMap,
  capitalize: capitalizeMap,

  // classic
  big: bigMap,
  slant: slantMap,
  shadow: shadowMap,
  block: blockMap,
  bubble: bubbleMap,
  digital: digitalMap,

  // stylized
  script: scriptMap,
  mini: miniMap,
  small: smallMap,
  ivrit: ivritMap,
  gothic: gothicMap,
  banner: bannerMap,

  // artistic
  ogre: ogreMap,
  calvin_s: calvin_sMap,
  chunky: chunkyMap,
  epic: epicMap,
  graffiti: graffitiMap,
  isometric1: isometric1Map,
};
