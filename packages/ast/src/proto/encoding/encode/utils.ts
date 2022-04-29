import * as t from '@babel/types';

export const decodeTypes = {

    /*
        if (message.sender !== "") {
            writer.uint32(10).string(message.sender);
        }
    */
    string(num: number, prop: string) {

        return t.ifStatement(
            t.binaryExpression('!==',
                t.memberExpression(
                    t.identifier('message'),
                    t.identifier(prop)
                ),
                t.stringLiteral('')
            ),
            t.blockStatement([
                t.expressionStatement(
                    t.callExpression(
                        t.memberExpression(
                            t.callExpression(
                                t.memberExpression(
                                    t.identifier('writer'),
                                    t.identifier('uint32')
                                ),
                                [
                                    t.numericLiteral(num)
                                ]
                            ),
                            t.identifier('string')
                        ),
                        [
                            t.memberExpression(
                                t.identifier('message'),
                                t.identifier(prop)
                            )
                        ]
                    )
                )
            ])
        )
    },

    /*
    if (!message.poolId.isZero()) {
        writer.uint32(16).uint64(message.poolId);
    }
    */


    Long(num: number, prop: string) {
        return t.ifStatement(
            t.unaryExpression('!',
                t.callExpression(
                    t.memberExpression(
                        t.memberExpression(
                            t.identifier('message'),
                            t.identifier(prop)
                        ),
                        t.identifier('isZero')
                    ),
                    []
                )
            ),
            t.blockStatement([
                t.expressionStatement(
                    t.callExpression(
                        t.memberExpression(
                            t.callExpression(
                                t.memberExpression(
                                    t.identifier('writer'),
                                    t.identifier('uint32')
                                ),
                                [
                                    t.numericLiteral(num)
                                ]
                            ),
                            t.identifier('uint64')
                        ),
                        [
                            t.memberExpression(
                                t.identifier('message'),
                                t.identifier(prop)
                            )
                        ]
                    )
                )
            ])
        )
    },

    Type(num: number, prop: string, name: string) {
        return t.ifStatement(
            t.binaryExpression(
                '!==',
                t.memberExpression(
                    t.identifier('message'),
                    t.identifier(prop)
                ),
                t.identifier('undefined')
            ),
            t.blockStatement([
                t.expressionStatement(
                    t.callExpression(
                        t.memberExpression(
                            t.callExpression(
                                t.memberExpression(
                                    t.identifier(name),
                                    t.identifier('encode')
                                ),
                                [
                                    t.memberExpression(
                                        t.identifier('message'),
                                        t.identifier(prop)
                                    ),
                                    t.callExpression(
                                        t.memberExpression(
                                            t.callExpression(
                                                t.memberExpression(
                                                    t.identifier('writer'),
                                                    t.identifier('uint32')
                                                ),
                                                [
                                                    t.numericLiteral(num)
                                                ]
                                            ),
                                            t.identifier('fork')
                                        ),
                                        []
                                    )

                                ]
                            ),
                            t.identifier('ldelim')
                        ),
                        []
                    )
                )
            ])
        );
    },

    // message.mode = (reader.int32() as any);
    Enum(num: number, prop: string) {
        return t.ifStatement(
            t.binaryExpression(
                '!==',
                t.memberExpression(
                    t.identifier('message'),
                    t.identifier(prop)
                ),
                t.numericLiteral(0)
            ),
            t.blockStatement([
                t.expressionStatement(
                    t.callExpression(
                        t.memberExpression(
                            t.callExpression(
                                t.memberExpression(
                                    t.identifier('writer'),
                                    t.identifier('uint32')
                                ),
                                [
                                    t.numericLiteral(num)
                                ]
                            ),
                            t.identifier('int32')
                        ),
                        [
                            t.memberExpression(
                                t.identifier('message'),
                                t.identifier(prop)
                            )
                        ]
                    )
                )
            ])
        )
    },

    /*

if (message.queryData.length !== 0) {
  writer.uint32(18).bytes(message.queryData);
}
 
    */


    bytes(num: number, prop: string) {
        return t.ifStatement(
            t.binaryExpression(
                '!==',
                t.memberExpression(
                    t.memberExpression(
                        t.identifier('message'),
                        t.identifier(prop)
                    ),
                    t.identifier('length')
                ),
                t.numericLiteral(0)
            ),
            t.blockStatement([
                t.expressionStatement(
                    t.callExpression(
                        t.memberExpression(
                            t.callExpression(
                                t.memberExpression(
                                    t.identifier('writer'),
                                    t.identifier('uint32')
                                ),
                                [
                                    t.numericLiteral(num)
                                ]
                            ),
                            t.identifier('bytes')
                        ),
                        [
                            t.memberExpression(
                                t.identifier('message'),
                                t.identifier(prop)
                            )
                        ]
                    )
                )
            ])
        );

    }

};

export const arrayTypes = {
    Long() {
        return t.expressionStatement(
            t.callExpression(
                t.memberExpression(
                    t.identifier('writer'),
                    t.identifier('uint64')
                ),
                [
                    t.identifier('v')
                ]
            )
        );
    }
};

/*

            ARRAY!
            
            Long[]

            writer.uint32(10).fork();

            for (const v of message.codeIds) {
                writer.uint64(v);
            }

            writer.ldelim();


        */

export const scalarTypeArray = (num: number, prop: string, expr: t.Statement) => {
    return [
        t.expressionStatement(
            t.callExpression(
                t.memberExpression(
                    t.callExpression(
                        t.memberExpression(
                            t.identifier('writer'),
                            t.identifier('uint32')
                        ),
                        [
                            t.numericLiteral(num)
                        ]
                    ),
                    t.identifier('fork')
                ),
                []
            )
        ),
        t.forOfStatement(
            t.variableDeclaration(
                'const',
                [
                    t.variableDeclarator(
                        t.identifier('v'),
                        null
                    )
                ]
            ),
            t.memberExpression(
                t.identifier('message'),
                t.identifier(prop)
            ),
            t.blockStatement([
                expr
            ])
        ),
        t.expressionStatement(
            t.callExpression(
                t.memberExpression(
                    t.identifier('writer'),
                    t.identifier('ldelim')
                ),
                []
            )
        )
    ];
};

export const protoTypeArray = (num: number, prop: string, name: string) => {
    return [
        t.forOfStatement(
            t.variableDeclaration('const',
                [
                    t.variableDeclarator(
                        t.identifier('v'),
                        null
                    )
                ]
            ),
            t.memberExpression(
                t.identifier('message'),
                t.identifier(prop)
            ),
            t.blockStatement(
                [
                    t.expressionStatement(
                        t.callExpression(
                            t.memberExpression(
                                t.callExpression(
                                    t.memberExpression(
                                        t.identifier(name),
                                        t.identifier('encode')
                                    ),
                                    [
                                        // "v!" just means it's NOT NULLABLE
                                        t.tsNonNullExpression(
                                            t.identifier('v')
                                        ),
                                        t.callExpression(
                                            t.memberExpression(
                                                t.callExpression(
                                                    t.memberExpression(
                                                        t.identifier('writer'),
                                                        t.identifier('uint32')
                                                    ),
                                                    [
                                                        t.numericLiteral(num)
                                                    ]
                                                ),
                                                t.identifier('fork')
                                            ),
                                            []
                                        )
                                    ]
                                ),
                                t.identifier('ldelim')
                            ),
                            []
                        )
                    )
                ]
            )
        )];
};