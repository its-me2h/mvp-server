import { sync } from 'glob';
import path from 'path';

// Glob pattern to find all directive files
const directiveFiles = sync('./src/graphql/directives/**/*.directives.ts');

// Map each file to an object containing the transformer and name
const directiveTransformers = directiveFiles.map(file => {
    // Extract the name of the directive from the file name
    const name = path.basename(file, '.directives.ts');
    // Import the default export from the file as the transformer
    const transformer = require(path.resolve(file)).default;
    return { transformer, name };
});

export { directiveTransformers };
