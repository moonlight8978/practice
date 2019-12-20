/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
import type { FragmentReference } from "relay-runtime";
declare export opaque type Company_company$ref: FragmentReference;
declare export opaque type Company_company$fragmentType: Company_company$ref;
export type Company_company = {|
  +id: ?string,
  +name: ?string,
  +$refType: Company_company$ref,
|};
export type Company_company$data = Company_company;
export type Company_company$key = {
  +$data?: Company_company$data,
  +$fragmentRefs: Company_company$ref,
  ...
};
*/


const node/*: ReaderFragment*/ = {
  "kind": "Fragment",
  "name": "Company_company",
  "type": "Company",
  "metadata": null,
  "argumentDefinitions": [],
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
};
// prettier-ignore
(node/*: any*/).hash = '294c6f7b3c46fb6d0ce7e922734a62f2';
module.exports = node;
