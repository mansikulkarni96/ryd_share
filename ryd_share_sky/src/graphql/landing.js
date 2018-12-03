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

export const SHOW_ITEM = gql`
	mutation toggleItem($showItem: String!) {
		toggleItem(showItem: $showItem) @client
	}
`

export const GET_ITEM = gql`
	{
		showItem @client
	}
`