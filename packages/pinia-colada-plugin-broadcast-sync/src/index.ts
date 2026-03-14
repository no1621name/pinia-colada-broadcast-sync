import { useMutationCache, type PiniaColadaPlugin, type UseMutationEntry } from '@pinia/colada'

export function PiniaColadaPluginBroadcastSync(): PiniaColadaPlugin {
  return ({queryCache, pinia}) => {
    queryCache.$onAction((options) => {
        console.log(options)
    })
    
    const mutationCache = useMutationCache(pinia)
    mutationCache.$onAction((options) => {
        console.log('mutation', options)
    })
  }
}