import React from "react";
import { QueryRenderer } from "react-relay";
import graphql from "babel-plugin-relay/macro";

import environment from "./relay/environment";
import Company from "./Company";
import "./App.css";

const companyQuery = graphql`
  query AppQuery {
    allCompanies {
      ...Company_company
    }
  }
`;

function App() {
  return (
    <QueryRenderer
      environment={environment}
      query={companyQuery}
      variables={{}}
      render={({ error, props }) => {
        console.log(props);
        if (error) {
          return <div>Error!</div>;
        }
        if (!props) {
          return <div>Loading...</div>;
        }
        return (
          <table>
            <thead>
              <th>ID</th>
              <th>Name</th>
            </thead>

            <tbody>
              {props.allCompanies.map(company => (
                <Company company={company} key={company.id} />
              ))}
            </tbody>
          </table>
        );
      }}
    />
  );
}

export default App;
