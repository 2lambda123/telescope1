import { aggregateImports, getDepsFromQueries, getImportStatments } from '../imports';
import { getNestedProto } from '@osmonauts/proto-parser';
import { parse } from '../parse';
import { dirname, join } from 'path';
import { sync as mkdirp } from 'mkdirp';
import { writeFileSync } from 'fs';
import { TelescopeBuilder } from '../builder';
import { createAggregatedLCDClient, GenericParseContext } from '@osmonauts/ast';
import { ProtoRef, ProtoService } from '@osmonauts/types';
import { TelescopeParseContext } from '../build';
import * as t from '@babel/types';
import generate from '@babel/generator';

export const plugin = (
    builder: TelescopeBuilder
) => {

    if (!builder.options.lcd) {
        return;
    }

    const dir = builder.options.lcd.dir;
    const packages = builder.options.lcd.packages;

    const localname = join(dir, 'lcd.ts');

    const refs = builder.store.filterProtoWhere((ref: ProtoRef) => {
        return packages.includes(ref.proto.package)
    });

    const services: ProtoService[] = refs.map(ref => {
        const proto = getNestedProto(ref.traversed);
        if (!proto?.Query || proto.Query?.type !== 'Service') {
            return;
        }
        return proto.Query;
    }).filter(Boolean);

    const tc = new TelescopeParseContext(refs[0], builder.store, builder.options);
    const context = tc.proto;
    const lcdast = createAggregatedLCDClient(context, services, 'QueryClient');

    const importsForAggregator = aggregateImports(tc, {}, localname);

    /////////
    /////////
    /////////
    /////////

    const queryContexts = builder
        .contexts
        .filter(context => context.queries.length > 0);


    const progImports = queryContexts.reduce((m, c) => {

        if (!builder.options.lcd.packages.includes(c.ref.proto.package)) {
            return m;
        }

        const ctx = new TelescopeParseContext(
            c.ref,
            c.store,
            builder.options
        );

        // get mutations, services
        parse(ctx);

        const proto = getNestedProto(c.ref.traversed);
        // hard-coding, for now, only Query service
        if (!proto?.Query || proto.Query?.type !== 'Service') {
            return;
        }

        const serviceImports = getDepsFromQueries(
            ctx.queries,
            localname
        );

        const imports = aggregateImports(ctx, serviceImports, localname);

        const fixlocalpaths = imports.map(imp => {
            return {
                ...imp,
                path: imp.path.startsWith('.') ?
                    imp.path : `./${imp.path}`
            };
        });

        return [...m, ...fixlocalpaths]
    }, []);

    const importStmts = getImportStatments(
        [...importsForAggregator, ...progImports]
    );

    const prog = []
        .concat(importStmts)
        .concat(lcdast);

    const ast = t.program(prog);
    const content = generate(ast).code;

    const filename = join(builder.outPath, localname);
    mkdirp(dirname(filename));
    writeFileSync(filename, content);

};