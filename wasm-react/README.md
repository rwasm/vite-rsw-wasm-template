# wasm-react

- [vite-plugin-rsw](https://github.com/lencx/vite-plugin-rsw) - 🦀 wasm-pack plugin for Vite
- [rsw-rs](https://github.com/lencx/rsw-rs) - 🦞 wasm-pack based build tool
- [WebAssembly Series](https://github.com/lencx/awesome/blob/main/WebAssembly.md)
- [learn-wasm](https://github.com/lencx/learn-wasm)

## Quick Start

```bash
# https://github.com/lencx/create-mpl
# npm 6.x
npm init mpl@latest my-app --type wasm

# npm 7+, extra double-dash is needed:
npm init mpl@latest my-app -- --type wasm
```

Step1: Install deps

```bash
yarn
```

Step2: Init rsw.toml

```bash
# yarn rsw -h
yarn rsw init
```

Step3: Generate rust crate

```bash
yarn rsw new rsw-hello
```

Step4: Edit rsw.toml

[rsw doc](https://github.com/lencx/rsw-rs#readme)

```toml
[[crates]]
#! npm package name
name = "rsw-hello"
#! ⚠️ Note: must be set to `true`
#！ run `npm link`: `true` | `false`, default is `false`
link = true
```

Step5: Run rsw watch

> ⚠️ Note: Do not exit the process after the command has started.

```bash
yarn watch
```

Step6: Run dev

```bash
yarn dev
```

Step7: Deploy

```bash
yarn build
```
