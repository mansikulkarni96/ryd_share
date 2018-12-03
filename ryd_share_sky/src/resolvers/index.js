// Apollo
// import gql from 'graphql-tag';

export const defaults = {
	showRegistration: false,
	showItem: 'history'
}

export const resolvers = {
	Mutation: {

		toggleRegistration: (_, { showRegistration }, { cache }) => {
			cache.writeData({ data: { showRegistration } })
			return null
		},

		toggleItem: (_, { showItem }, { cache }) => {
			cache.writeData({ data: { showItem } })
			return null
		}

	}
}
