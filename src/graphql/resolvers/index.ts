import { mergeResolvers } from '@graphql-tools/merge';
import { loadFilesSync } from '@graphql-tools/load-files';

// Load and merge all resolver files into a single resolver object
export const resolvers: any = mergeResolvers(
  loadFilesSync('./src/graphql/resolvers/**/*.resolvers.ts')
);
