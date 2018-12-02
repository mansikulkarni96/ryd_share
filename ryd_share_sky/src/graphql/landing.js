import gql from 'graphql-tag'

export const SHOW_REGISTRATION = gql`
	mutation toggleRegistration($showRegistration: Boolean!) {
		toggleRegistration(showRegistration: $showRegistration) @client
	}
`

export const GET_REGISTRATION = gql`
	{
		showRegistration @client
	}
`