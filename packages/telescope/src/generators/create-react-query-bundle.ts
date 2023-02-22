import { TelescopeBuilder } from '../builder';
import { createScopedRpcHookFactory } from '@osmonauts/ast';
import * as dotty from 'dotty';
import { commonBundlePlugin } from '../utils';

export const plugin = (builder: TelescopeBuilder) => {
  // if react query is enabled
  // generate hooks.ts based on query hooks generated in each package.
  // eg: __fixtures__/output1/hooks.ts
  if (!builder.options.reactQuery.enabled) {
    return;
  }

  // get mapping of packages and rpc query filenames.
  const obj = {};
  builder.rpcQueryClients.map((queryClient) => {
    const path = `./${queryClient.localname.replace(/\.ts$/, '')}`;
    dotty.put(obj, queryClient.package, path);
  });

  commonBundlePlugin(builder, 'hooks.ts', obj, (context, obj) => {
    // generate code for createRpcQueryHooks and imports of related packages.
    return createScopedRpcHookFactory(context, obj, 'createRpcQueryHooks');
  });
};
