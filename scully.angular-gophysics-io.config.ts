import { ScullyConfig } from '@scullyio/scully';

export const config: ScullyConfig = {
  projectRoot: './src',
  projectName: 'angular-gophysics-io',
  distFolder: './dist/angular-gophysics.io', // output directory of your Angular build artifacts
  outDir: './docs', // directory for scully build artifacts
  defaultPostRenderers: [],
  routes: {
    '/about/': {
      type: 'contentFolder',
      postRenderers: ['seoHrefOptimize'],
    },
    '/documentation/': {
      type: 'contentFolder',
      postRenderers: ['seoHrefOptimize'],
    }
  },
};