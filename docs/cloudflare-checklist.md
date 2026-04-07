# Cloudflare Checklist

## Core

- Turn `Brotli` on.
- Turn `Early Hints` on.
- Turn `Auto Minify` on for `HTML`, `CSS`, and `JS`.
- Keep `Rocket Loader` off unless tested page by page. It often breaks app-style runtimes.

## Cache Rules

- `*growfase.com/assets/*`
  Set `Cache eligibility` to `Eligible for cache`
  Set `Edge TTL` to `1 year`
  Set `Browser TTL` to `1 year`

- `*growfase.com/images/*`
  Set `Cache eligibility` to `Eligible for cache`
  Set `Edge TTL` to `1 year`
  Set `Browser TTL` to `1 year`

- `*growfase.com/fonts/*`
  Set `Cache eligibility` to `Eligible for cache`
  Set `Edge TTL` to `1 year`
  Set `Browser TTL` to `1 year`

- `*growfase.com/data/*.json*`
  Set `Cache eligibility` to `Eligible for cache`
  Set `Edge TTL` to `1 month`
  Set `Browser TTL` to `1 day`

## HTML

- `*growfase.com/`
- `*growfase.com/es/`
- `*growfase.com/50000reelspack*`
- `*growfase.com/home*`

For HTML routes:
- Do not cache aggressively at browser level.
- Use `Cache-Control: public, max-age=0, s-maxage=300, must-revalidate`.
- Purge cache after each production publish.

## Images

- If available on your plan, turn `Polish` on with `Lossy`.
- Turn `Mirage` on only if mobile traffic is dominant and you validate layout stability.
- Keep original PNG/JPG only for assets that are used as social preview images.

## Headers

- Versioned static assets should return:
  `Cache-Control: public, max-age=31536000, immutable`
- HTML should return:
  `Cache-Control: public, max-age=0, s-maxage=300, must-revalidate`

## Purge Flow

1. Publish from WeWeb/export pipeline.
2. Purge HTML routes first.
3. Purge `/data/*.json` if page content changed.
4. Do not purge `/assets/*` unless filenames stayed the same unexpectedly.
