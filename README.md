
# Project Setup

now in client folder</br>
 npm install graphql-request graphql</br>
make a folder name graphql </br>
queries.js
here we will write our graphql queries</br>
first import class GraphQlClient,and gql, gql is used to highlight the graphql query as a graphql query</br>
javascript
import { GraphQLClient,gql } from 'graphql-request';
const client = new GraphQLClient('https://api.example.com/graphql');</br>
export function getJobs(){
        const query = gql`
        query{
                jobs{
                        id
                        title
                        date
                        company{
                                id
                                name
                        }
                }
        }
        `
        Cconst date = async client.request(query)
        return data.jobs
        note we can destructure const{jobs}direct instead of data.jobs
}
</br>
in homePage </br>
import { getJobs } from '../graphql/queries.js';</br>
getJobs().then((jobs)=>console.log('jobs',jobs))
