export const createClientMap = (QueryClientImpl: string) => [
  {
    "type": "VariableDeclaration",
    "declarations": [
      {
        "type": "VariableDeclarator",
        "id": {
          "type": "Identifier",
          "name": "_queryClients",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "name": "WeakMap"
              },
              "typeParameters": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "name": "ProtobufRpcClient"
                    }
                  },
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "name": QueryClientImpl
                    }
                  }
                ]
              }
            }
          }
        },
        "init": {
          "type": "NewExpression",
          "callee": {
            "type": "Identifier",
            "name": "WeakMap"
          },
          "arguments": []
        }
      }
    ],
    "kind": "const"
  },
  {
    "type": "VariableDeclaration",
    "declarations": [
      {
        "type": "VariableDeclarator",
        "id": {
          "type": "Identifier",
          "name": "getQueryService"
        },
        "init": {
          "type": "ArrowFunctionExpression",
          "returnType": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "name": QueryClientImpl
                  }
                },
                {
                  "type": "TSUndefinedKeyword"
                }
              ]
            }
          },
          "id": null,
          "generator": false,
          "async": false,
          "params": [
            {
              "type": "Identifier",
              "name": "rpc",
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSUnionType",
                  "types": [
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "name": "ProtobufRpcClient"
                      }
                    },
                    {
                      "type": "TSUndefinedKeyword"
                    }
                  ]
                }
              }
            }
          ],
          "body": {
            "type": "BlockStatement",
            "body": [
              {
                "type": "IfStatement",
                "test": {
                  "type": "UnaryExpression",
                  "operator": "!",
                  "prefix": true,
                  "argument": {
                    "type": "Identifier",
                    "name": "rpc"
                  }
                },
                "consequent": {
                  "type": "ReturnStatement",
                  "argument": null
                },
                "alternate": null
              },
              {
                "type": "IfStatement",
                "test": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "name": "_queryClients"
                    },
                    "computed": false,
                    "property": {
                      "type": "Identifier",
                      "name": "has"
                    }
                  },
                  "arguments": [
                    {
                      "type": "Identifier",
                      "name": "rpc"
                    }
                  ]
                },
                "consequent": {
                  "type": "BlockStatement",
                  "body": [
                    {
                      "type": "ReturnStatement",
                      "argument": {
                        "type": "CallExpression",
                        "callee": {
                          "type": "MemberExpression",
                          "object": {
                            "type": "Identifier",
                            "name": "_queryClients"
                          },
                          "computed": false,
                          "property": {
                            "type": "Identifier",
                            "name": "get"
                          }
                        },
                        "arguments": [
                          {
                            "type": "Identifier",
                            "name": "rpc"
                          }
                        ]
                      }
                    }
                  ],
                  "directives": []
                },
                "alternate": null
              },
              {
                "type": "VariableDeclaration",
                "declarations": [
                  {
                    "type": "VariableDeclarator",
                    "id": {
                      "type": "Identifier",
                      "name": "queryService"
                    },
                    "init": {
                      "type": "NewExpression",
                      "callee": {
                        "type": "Identifier",
                        "name": QueryClientImpl
                      },
                      "arguments": [
                        {
                          "type": "Identifier",
                          "name": "rpc"
                        }
                      ]
                    }
                  }
                ],
                "kind": "const"
              },
              {
                "type": "ExpressionStatement",
                "expression": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "name": "_queryClients"
                    },
                    "computed": false,
                    "property": {
                      "type": "Identifier",
                      "name": "set"
                    }
                  },
                  "arguments": [
                    {
                      "type": "Identifier",
                      "name": "rpc"
                    },
                    {
                      "type": "Identifier",
                      "name": "queryService"
                    }
                  ]
                }
              },
              {
                "type": "ReturnStatement",
                "argument": {
                  "type": "Identifier",
                  "name": "queryService"
                }
              }
            ],
            "directives": []
          }
        }
      }
    ],
    "kind": "const"
  }
]