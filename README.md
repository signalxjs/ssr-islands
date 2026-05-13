<div align="center">

# @sigx/ssr-islands

**Islands architecture for [SignalX](https://github.com/signalxjs/core) SSR.**

[![npm](https://img.shields.io/npm/v/@sigx/ssr-islands.svg?label=@sigx/ssr-islands&color=blue)](https://www.npmjs.com/package/@sigx/ssr-islands)
[![license](https://img.shields.io/npm/l/@sigx/ssr-islands.svg)](./LICENSE)
[![ci](https://github.com/signalxjs/ssr-islands/actions/workflows/ci.yml/badge.svg)](https://github.com/signalxjs/ssr-islands/actions/workflows/ci.yml)
[![types](https://img.shields.io/npm/types/@sigx/ssr-islands.svg)](https://www.typescriptlang.org/)

</div>

> 🚧 SignalX is in early public release (`0.4.x`). The API surface is small and stabilising — feedback is very welcome.

Renders pages on the server and selectively hydrates only the components that need interactivity, controlled by `client:*` directives.

## Install

```bash
npm install @sigx/ssr-islands sigx vite
```

## Quick start

Add the Vite plugin to your app:

```ts
// vite.config.ts
import { defineConfig } from 'vite';
import sigx from '@sigx/vite';
import islands from '@sigx/ssr-islands';

export default defineConfig({
  plugins: [sigx(), islands()],
});
```

Use a `client:*` directive on any component to mark it as an island:

```tsx
import { Counter } from './Counter';

export const Page = () => (
  <article>
    <h1>Mostly static content</h1>
    <p>This entire page is rendered on the server.</p>

    {/* Hydrated when the page loads */}
    <Counter client:load />

    {/* Hydrated when the browser is idle */}
    <Counter client:idle />

    {/* Hydrated when the component scrolls into view */}
    <Counter client:visible />
  </article>
);
```

Everything outside of an island stays as static HTML — no JavaScript shipped, no hydration cost.

## Hydration strategies

| Directive | When it hydrates |
| --- | --- |
| `client:load` | Immediately when the page boots |
| `client:idle` | When `requestIdleCallback` fires |
| `client:visible` | When the island intersects the viewport |
| `client:media={query}` | When a media query matches |
| `client:only` | Render is skipped on the server; hydrates on the client like an SPA component |

## Companion repos

- [`signalxjs/core`](https://github.com/signalxjs/core) — `reactivity`, `runtime-core`, `runtime-dom`, `server-renderer`, `vite`, `sigx`
- [`signalxjs/router`](https://github.com/signalxjs/router) — `@sigx/router`
- [`signalxjs/store`](https://github.com/signalxjs/store) — `@sigx/store`
- [`signalxjs/ssg`](https://github.com/signalxjs/ssg) — `@sigx/ssg`, `@sigx/ssg-theme-daisyui`
- [`signalxjs/cli`](https://github.com/signalxjs/cli) — `@sigx/cli`
- [`signalxjs/lynx`](https://github.com/signalxjs/lynx) — Lynx native runtime + modules
- [Docs site](https://signalxjs.github.io/) — main SignalX documentation

## Contributing

See [CONTRIBUTING.md](./CONTRIBUTING.md). PRs welcome.

## License

MIT © Andreas Ekdahl
