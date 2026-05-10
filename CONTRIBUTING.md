# Contributing to @sigx/ssr-islands

Thanks for your interest! This repo holds **`@sigx/ssr-islands`** — the islands architecture runtime + Vite plugin for [SignalX](https://github.com/signalxjs/core) SSR. Higher-level pieces (router, store, SSG, native targets, scaffolding CLI) live in their own repositories under [`signalxjs`](https://github.com/signalxjs).

## Prerequisites

- **Node.js** `^20.19.0` or `>=22.12.0`
- **pnpm** `>=10`

## Getting started

```bash
git clone https://github.com/signalxjs/ssr-islands.git
cd ssr-islands
pnpm install
pnpm build
```

## Workspace layout

```
packages/
  ssr-islands/      → @sigx/ssr-islands
```

## Common tasks

| Task | Command |
|---|---|
| Build | `pnpm build` |
| Run all tests | `pnpm test` |
| Watch tests | `pnpm test:watch` |
| Lint | `pnpm lint` |
| Typecheck | `pnpm typecheck` |
| Dry-run publish | `pnpm publish:dry` |

## Pre-push checklist

```bash
pnpm lint
pnpm typecheck
pnpm test
pnpm build
```

## Pull request guidelines

- **Keep PRs small and focused.** One logical change per PR.
- **Add tests** for new behaviour or bug fixes (in `packages/ssr-islands/__tests__/`).
- **Update `CHANGELOG.md`** under the `[Unreleased]` section for user-visible changes.
- **Don't bump versions** in your PR — release versioning is handled centrally via `pnpm version:*`.

## Working against unreleased core

While SignalX is pre-1.0, you may want to test against an unreleased `signalxjs/core` build. Use pnpm overrides in your local (uncommitted) `package.json`:

```jsonc
{
  "pnpm": {
    "overrides": {
      "@sigx/reactivity":      "link:../../core/main/packages/reactivity",
      "@sigx/runtime-core":    "link:../../core/main/packages/runtime-core",
      "@sigx/server-renderer": "link:../../core/main/packages/server-renderer",
      "@sigx/vite":            "link:../../core/main/packages/vite"
    }
  }
}
```

## Reporting bugs and requesting features

- **Bug?** [Bug report template](https://github.com/signalxjs/ssr-islands/issues/new?template=bug_report.yml)
- **Feature idea?** [Feature request template](https://github.com/signalxjs/ssr-islands/issues/new?template=feature_request.yml)

## Code of conduct

This project follows the [Contributor Covenant](./CODE_OF_CONDUCT.md). Be kind.

## License

By contributing, you agree that your contributions will be licensed under the MIT License (see [LICENSE](./LICENSE)).
