import React from "react";
import gql from "graphql-tag";
import { Query } from "react-apollo";

const GET_REPOS = gql`
  query GETREPOS($login: String!) {
    user(login: $login) {
      repositoriesContributedTo(last: 5) {
        totalCount
        nodes {
          name
        }
      }
      repositories(first: 50, orderBy: { field: STARGAZERS, direction: DESC }) {
        totalCount
        nodes {
          name
          url
          description
          isFork
          stargazers(last: 5) {
            totalCount
          }
        }
      }
    }
  }
`;

export const Repos = ({ login }) => (
  <Query query={GET_REPOS} variables={{ login }} fetchPolicy={"network-only"}>
    {({ loading, data, error }) =>
      ((!loading && data) ? 
        data.user.repositories.nodes.map((repo, i) => (
          <div className="sm-12 md-4 col" key={i} >
          <div className="card" >
            <div className="card-body">
              <h4 className="card-title">{repo.name}</h4>
              <h5 className="card-subtitle"><span role='img' aria-label="stars">⭐</span> {repo.stargazers.totalCount}</h5>
              <h5 className="card-subtitle">{repo.isFork && 'Forked'}</h5>
              <p className="card-text">{repo.description}</p>
              <a className="card-link" href={repo.url}>
                Github Link
              </a>
            </div>
          </div>
        </div>
        ))
         : !login.length 
         ? <div className='row flex-center'><p className='flex-center'>You can search for a username</p></div>
         : <div className='row flex-center'><p className='flex-center'>Loading...</p></div>
      )}
  </Query>
)
