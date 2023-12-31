import path from 'path';

import { Config, useChain, useRegistry } from '../src';

beforeAll(async () => {
  const configFile = path.join(__dirname, '..', 'configs', 'config.yaml');
  Config.setConfigFile = configFile;
  Config.setRegistry = await useRegistry(configFile);
});

describe('Test clients', () => {
  let client;

  beforeAll(async () => {
    const { getStargateClient } = useChain('osmosis');
    client = await getStargateClient();
  });

  it('check chain height', async () => {
    const height = await client.getHeight();

    expect(height).toBeGreaterThan(0);
  });
});
