import type { Config } from '@jest/types';

// Sync object
export const config: Config.InitialOptions = {
  verbose: true,
};

// Or async function
export async function anonymus(): Promise<Config.InitialOptions> {
  return {
    verbose: true,
  };
};
