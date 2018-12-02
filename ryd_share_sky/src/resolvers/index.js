// Apollo
// import gql from 'graphql-tag';

export const defaults = {
	showRegistration: false,
}

export const resolvers = {
	Mutation: {

		toggleRegistration: (_, { showRegistration }, { cache }) => {
			cache.writeData({ data: { showRegistration } })
			return null
		}

	}
}
