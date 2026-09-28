// Public assets need the same build-time prefix as the GitHub Pages project URL.
export function assetPath(path: string): string {
  if (!path.startsWith('/') || path.startsWith('//')) return path;
  return `${process.env.NEXT_PUBLIC_BASE_PATH || ''}${path}`;
}
