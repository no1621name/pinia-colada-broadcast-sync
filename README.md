# pinia-colada-plugin-broadcast-sync

A Pinia Colada plugin that syncs your state across tabs using Broadcast Channel API.

- Package: [packages/pinia-colada-plugin-broadcast-sync](./packages/pinia-colada-plugin-broadcast-sync)
- Playground: [.playground](./.playground)

## Installation

```shell
pnpm add pinia-colada-plugin-broadcast-sync
```

## Usage

Register the plugin when installing Pinia Colada

```typescript
import { PiniaColada } from '@pinia/colada'
import { createPinia } from 'pinia'
import { PiniaColadaBroadcastSyncPlugin } from 'pinia-colada-plugin-broadcast-sync'
import { createApp } from 'vue'

import App from './App.vue'

const app = createApp(App)
const pinia = createPinia()

app.use(pinia)
app.use(PiniaColada, {
  plugins: [PiniaColadaBroadcastSyncPlugin()],
})

app.mount('#app')
```

You can see more inforamtion in package [README](./packages/pinia-colada-plugin-broadcast-sync/README.md).

## Development

This repo is a pnpm workspace.

- Install: `pnpm install --frozen-lockfile`
- Build: `pnpm run build`
- Lint: `pnpm run lint`
- Playground: `pnpm -C .playground dev`

## Acknowledgements

The template of the repository where taken from [pinia-colada-plugin-recently-successful](https://github.com/Barbapapazes/pinia-colada-plugin-recently-successful)

## License

[MIT](./LICENSE)
