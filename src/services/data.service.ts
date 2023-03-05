import {ApolloClient, InMemoryCache, gql} from '@apollo/client/core'
// , gql, createHttpLink

class DataController {

    client
    constructor() {

        // GraphQL API ur
        /*const httpLink = createHttpLink({
            // uri: 'https://oay97dn146.execute-api.eu-west-1.amazonaws.com/graphql',
            uri: `${flConfig.data.graphqlApi.url}`,
            // uri: `${flConfig.data.graphqlApi.url}/graphql`,
            // uri: 'https://40fpoqsv3j.execute-api.eu-west-1.amazonaws.com',
            // uri: '/graphql',
        })*/

        /*const cache = new InMemoryCache({
            typePolicies: {}
        })*/

        /*const authLink = setContext((_, {headers}) => {
            // get the authentication token from local storage if it exists
            const token = localStorage.getItem('auth')
            // console.log('token', token)

            // return the headers to the context so httpLink can read them
            return {
                headers: {
                    ...headers,
                    authorization: token ? `Bearer ${token}` : '',
                }
            }
        })*/

        /*const logoutLink = onError(({graphQLErrors, networkError}) => {
            console.error({networkError})

            if (graphQLErrors) {
                switch(graphQLErrors[0]?.extensions?.code) {
                    case 'INVALID_TOKEN': case 'EXPIRED_TOKEN': case 'INACTIVE_TOKEN':
                        displayError(`Your sessions expired, please log in again (${graphQLErrors[0].extensions.code})`,'alert-circle-outline', 5000)
                        logout()
                        break
                    default: displayError('An error happened and was logged, please try again', 'alert-circle-outline', 1500, 'bottom')
                }

            }

            graphQLErrors.forEach(({message, locations, path}) =>
                console.log(
                    `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`
                )
            );

        })*/

        /*this._client = new ApolloClient({

            link: logoutLink.concat(authLink).concat(httpLink),
            cache,
            name: 'oyw-webapp-client',
            version: '0.1',
            /!*defaultOptions: {
              watchQuery: {
                fetchPolicy: 'cache-and-network',
              }
            }*!/
        })*/

        this.client = new ApolloClient({
            uri: 'https://flyby-router-demo.herokuapp.com/',
            cache: new InMemoryCache(),
        })

    }

    async getData(options) {
        try {
            const data = await this.client.query(options)
            console.log('DATA', data)
            return data
        } catch (err) {
            console.log(err)
            return
        }
    }

    getDummyData() {
        const variables = {}

        const query = gql`
            query GetLocations {
                locations {
                    id
                    name
                    description
                    photo
                }
            }
        `

        return this.getData({
            query,
            variables,
            fetchPolicy: 'no-cache',
        })
    }

}

export const dataService = new DataController()
