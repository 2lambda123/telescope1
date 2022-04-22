
import * as t from '@babel/types';
import { memberExpressionOrIdentifier } from './utils';

const tsObjectPattern = (
  properties: (t.RestElement | t.ObjectProperty)[],
  typeAnnotation: t.TSTypeAnnotation
) => {
  const obj = t.objectPattern(properties);
  obj.typeAnnotation = typeAnnotation;
  return obj;
}
interface CreateClient {
  name: string;
  registries: string[];
  aminos: string[];
}
export const createClient = ({ name, registries, aminos }: CreateClient) => {

  const prop = t.tsPropertySignature(
    t.identifier('defaultTypes'),
    t.tsTypeAnnotation(
      t.tsTypeReference(t.identifier('ReadonlyArray'), t.tsTypeParameterInstantiation(
        [
          t.tsTupleType([
            t.tsStringKeyword(),
            t.tsTypeReference(
              t.identifier('GeneratedType')
            )]
          )
        ]
      ))
    )
  );
  prop.optional = true;

  return t.exportNamedDeclaration(
    t.variableDeclaration(
      'const',
      [
        t.variableDeclarator(
          t.identifier(name),
          t.arrowFunctionExpression(
            [
              tsObjectPattern(
                [
                  t.objectProperty(
                    t.identifier('rpcEndpoint'),
                    t.identifier('rpcEndpoint'),
                    false,
                    true
                  ),
                  t.objectProperty(
                    t.identifier('signer'),
                    t.identifier('signer'),
                    false,
                    true
                  ),
                  t.objectProperty(
                    t.identifier('defaultTypes'),
                    t.assignmentPattern(
                      t.identifier('defaultTypes'),
                      t.identifier('defaultRegistryTypes')
                    ),
                    false,
                    true
                  )
                ],
                t.tsTypeAnnotation(
                  t.tsTypeLiteral(
                    [
                      t.tsPropertySignature(
                        t.identifier('rpcEndpoint'),
                        t.tsTypeAnnotation(t.tsStringKeyword())
                      ),
                      t.tsPropertySignature(
                        t.identifier('signer'),
                        t.tsTypeAnnotation(t.tsTypeReference(
                          t.identifier('OfflineSigner')
                        ))
                      ),
                      prop

                    ]
                  )
                )
              )
            ],
            t.blockStatement(
              [
                t.variableDeclaration(
                  'const',
                  [
                    t.variableDeclarator(
                      t.identifier('registry'),
                      t.newExpression(
                        t.identifier('Registry'),
                        [
                          t.objectExpression(
                            [
                              t.spreadElement(
                                t.identifier('defaultTypes')
                              ),
                              ...registries.map(pkg =>
                                t.spreadElement(
                                  memberExpressionOrIdentifier(
                                    `${pkg}.registry`.split('.').reverse()
                                  )
                                )
                              )
                            ]
                          )
                        ]
                      )
                    )
                  ]
                ),
                // amino
                t.variableDeclaration(
                  'const',
                  [
                    t.variableDeclarator(
                      t.identifier('aminoTypes'),
                      t.newExpression(
                        t.identifier('AminoTypes'),
                        [
                          t.objectExpression(
                            [
                              ...aminos.map(pkg =>
                                t.spreadElement(
                                  memberExpressionOrIdentifier(
                                    `${pkg}.AminoConverter`.split('.').reverse()
                                  )
                                )
                              )
                            ]
                          )
                        ]
                      )
                    )
                  ]
                ),
                // client
                t.variableDeclaration(
                  'const',
                  [
                    t.variableDeclarator(
                      t.identifier('client'),
                      t.awaitExpression(t.callExpression(
                        t.memberExpression(
                          t.identifier('SigningStargateClient'),
                          t.identifier('connectWithSigner')
                        ),
                        [
                          t.identifier('rpcEndpoint'),
                          t.identifier('signer'),
                          t.objectExpression([
                            t.objectProperty(
                              t.identifier('registry'),
                              t.identifier('registry'),
                              false,
                              true
                            ),
                            t.objectProperty(
                              t.identifier('aminoTypes'),
                              t.identifier('aminoTypes'),
                              false,
                              true
                            ),
                          ])

                        ]
                      ))
                    )
                  ]
                ),

                // return 
                t.returnStatement(t.identifier('client'))
              ]
            ),
            true
          )
        )
      ]
    )
  )
};