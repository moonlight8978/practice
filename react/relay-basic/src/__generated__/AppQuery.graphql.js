/**
 * @flow
 * @relayHash 72494f7aa731e0f5eadc838f0d5e0bdb
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type Company_company$ref = any;
export type AppQueryVariables = {||};
export type AppQueryResponse = {|
  +allCompanies: ?$ReadOnlyArray<{|
    +$fragmentRefs: Company_company$ref
  |}>
|};
export type AppQuery = {|
  variables: AppQueryVariables,
  response: AppQueryResponse,
|};
*/


/*
query AppQuery {
  allCompanies {
    ...Company_company
  }
}

fragment Company_company on Company {
  id
  name
}
*/

const node/*: ConcreteRequest*/ = {
  "kind": "Request",
  "fragment": {
    "kind": "Fragment",
    "name": "AppQuery",
    "type": "Query",
    "metadata": null,
    "argumentDefinitions": [],
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "allCompanies",
        "storageKey": null,
        "args": null,
        "concreteType": "Company",
        "plural": true,
        "selections": [
          {
            "kind": "FragmentSpread",
            "name": "Company_company",
            "args": null
          }
        ]
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "AppQuery",
    "argumentDefinitions": [],
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "allCompanies",
        "storageKey": null,
        "args": null,
        "concreteType": "Company",
        "plural": true,
        "selections": [
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "id",
            "args": null,
            "storageKey": null
          },
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "name",
            "args": null,
            "storageKey": null
          }
        ]
      }
    ]
  },
  "params": {
    "operationKind": "query",
    "name": "AppQuery",
    "id": null,
    "text": "query AppQuery {\n  allCompanies {\n    ...Company_company\n  }\n}\n\nfragment Company_company on Company {\n  id\n  name\n}\n",
    "metadata": {}
  }
};
// prettier-ignore
(node/*: any*/).hash = '4c9ccc91b21e0fc01e5a466f36474eb1';
module.exports = node;
