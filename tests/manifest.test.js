import { readFileSync } from 'fs';
import { resolve } from 'path';

describe('Web App Manifest Tests', () => {
  let manifest;

  beforeAll(() => {
    const manifestPath = resolve(process.cwd(), 'public/manifest.json');
    manifest = JSON.parse(readFileSync(manifestPath, 'utf8'));
  });

  test('manifest has required properties', () => {
    expect(manifest).toHaveProperty('name');
    expect(manifest).toHaveProperty('short_name');
    expect(manifest).toHaveProperty('start_url');
    expect(manifest).toHaveProperty('display');
    expect(manifest).toHaveProperty('background_color');
    expect(manifest).toHaveProperty('theme_color');
    expect(manifest).toHaveProperty('icons');
  });

  test('icons are present with correct sizes', () => {
    const requiredSizes = ['192x192', '512x512'];
    const iconSizes = manifest.icons.map(icon => icon.sizes);
    
    requiredSizes.forEach(size => {
      expect(iconSizes).toContain(size);
    });
  });

  test('display mode is valid', () => {
    const validDisplayModes = ['standalone', 'fullscreen', 'minimal-ui', 'browser'];
    expect(validDisplayModes).toContain(manifest.display);
  });

  test('color values are valid hex codes', () => {
    const hexColorRegex = /^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/;
    expect(manifest.background_color).toMatch(hexColorRegex);
    expect(manifest.theme_color).toMatch(hexColorRegex);
  });
});
