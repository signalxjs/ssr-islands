<div align="center">

# @sigx/ssr-islands

**Islands architecture for [SignalX](https://sigx.dev/core/) SSR.**

[![npm](https://img.shields.io/npm/v/@sigx/ssr-islands.svg?label=@sigx/ssr-islands&color=blue)](https://www.npmjs.com/package/@sigx/ssr-islands)
[![license](https://img.shields.io/npm/l/@sigx/ssr-islands.svg)](./LICENSE)
[![ci](https://github.com/signalxjs/ssr-islands/actions/workflows/ci.yml/badge.svg)](https://github.com/signalxjs/ssr-islands/actions/workflows/ci.yml)
[![types](https://img.shields.io/npm/types/@sigx/ssr-islands.svg)](https://www.typescriptlang.org/)

</div>

> 🚧 SignalX is in early public release (`0.4.x`). The API surface is small and stabilising — feedback is very welcome.

Renders pages on the server and selectively hydrates only the components that need interactivity, controlled by `client:*` directives. Everything outside of an island stays as static HTML — no JavaScript shipped, no hydration cost — so you ship interactivity only where it's actually needed.

## 📚 Documentation

Full guides, API reference and live examples → **<https://sigx.dev/ssg/>**

## A taste

Mark any component as an island with a `client:*` directive:

```tsx
<Counter client:load />     {/* hydrate immediately */}
<Counter client:idle />     {/* hydrate when the browser is idle */}
<Counter client:visible />  {/* hydrate when it scrolls into view */}
```

See the [docs](https://sigx.dev/ssg/) for install, the Vite plugin setup, and the full list of hydration strategies.

## Part of SignalX

- [`core`](https://sigx.dev/core/) — `reactivity`, `runtime-core`, `runtime-dom`, `server-renderer`, `vite`, `sigx`
- [`router`](https://sigx.dev/router/) — `@sigx/router`
- [`store`](https://sigx.dev/store/) — `@sigx/store`
- [`ssg`](https://sigx.dev/ssg/) — `@sigx/ssg`, `@sigx/ssg-theme-daisyui`
- [`cli`](https://sigx.dev/cli/) — `@sigx/cli`
- [`lynx`](https://sigx.dev/lynx/) — Lynx native runtime + modules

## Contributing

See [CONTRIBUTING.md](./CONTRIBUTING.md). PRs welcome.

## License

MIT © Andreas Ekdahl
