const palette = ["#6c5ce7", "#0984e3", "#00b894", "#e17055", "#e84393", "#2d3436"];

function hashString(value: string) {
  let hash = 0;
  for (let i = 0; i < value.length; i++) {
    hash = (hash << 5) - hash + value.charCodeAt(i);
    hash |= 0;
  }
  return Math.abs(hash);
}

function initialsOf(value: string) {
  return value
    .split(" ")
    .slice(0, 2)
    .map((w) => w[0])
    .join("")
    .toUpperCase();
}

/**
 * A clean, deterministic placeholder image (no borrowed stock photos) until a real
 * screenshot is supplied. Color is derived from the title itself, not position in a
 * list, so the same project always renders the same placeholder everywhere it appears.
 */
export function placeholderImage(title: string) {
  const color = palette[hashString(title) % palette.length];
  const initials = initialsOf(title);

  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="600" height="450" viewBox="0 0 600 450">
    <rect width="600" height="450" fill="${color}"/>
    <text x="50%" y="50%" font-family="sans-serif" font-size="120" fill="white" fill-opacity="0.85" text-anchor="middle" dominant-baseline="central">${initials}</text>
  </svg>`;

  return `data:image/svg+xml,${encodeURIComponent(svg)}`;
}

/** A circular initials avatar (no borrowed stock photos) until a real photo is supplied. */
export function avatarPlaceholder(name: string) {
  const color = palette[hashString(name) % palette.length];
  const initials = initialsOf(name);

  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="160" height="160" viewBox="0 0 160 160">
    <circle cx="80" cy="80" r="80" fill="${color}"/>
    <text x="50%" y="50%" font-family="sans-serif" font-size="56" fill="white" fill-opacity="0.9" text-anchor="middle" dominant-baseline="central">${initials}</text>
  </svg>`;

  return `data:image/svg+xml,${encodeURIComponent(svg)}`;
}
