import { getRelativePath } from '../utils';
import { join, dirname } from 'path';
import { sync as mkdirp } from 'mkdirp';
import { TelescopeBuilder } from '../builder';
import * as t from '@babel/types';
import generate from '@babel/generator';
import pkg from '../../package.json';
import { writeContentToFile } from '../utils/files';

const version = process.env.NODE_ENV === 'test' ? 'latest' : pkg.version;

export const plugin = (
    builder: TelescopeBuilder
) => {

    if (!builder.options.bundle.enabled) {
        return;
    }

    // finally, write one index file with all files, exported
    const indexFile = 'index.ts';
    const indexOutFile = join(builder.outPath, indexFile);
    const stmts = builder.files.map(
        file => t.exportAllDeclaration(
            t.stringLiteral(getRelativePath(indexFile, file))
        )
    );
    const finalAst = t.program(stmts);
    const indexContent = generate(finalAst).code;
    mkdirp(dirname(indexOutFile));

    const header = `/**
  * This file and any referenced files were automatically generated by ${pkg.name}@${version}
  * DO NOT MODIFY BY HAND. Instead, download the latest proto files for your chain
  * and run the transpile command or yarn proto command to regenerate this bundle.
  */
 \n`;

    writeContentToFile(builder.options, header + indexContent, indexOutFile);

};