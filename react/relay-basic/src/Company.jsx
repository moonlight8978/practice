import React from "react";
import { createFragmentContainer } from "react-relay";
import graphql from "babel-plugin-relay/macro";

function Company(props) {
  const { name, id } = props.company;

  return (
    <tr>
      <td>{id}</td>
      <td>{name}</td>
    </tr>
  );
}

export default createFragmentContainer(Company, {
  company: graphql`
    fragment Company_company on Company {
      id
      name
    }
  `
});
