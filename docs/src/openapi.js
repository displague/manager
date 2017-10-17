export const openapi = {
	openapi: "3.0.0",
	info: {
		title: "Linode",
		description: "[Linode](https://www.linode.com) API",
		termsOfService: "http://...",
		contact: { email: "feedback@linode.com" },
		license: { name: "", url: "" },
		version: "0.1.0",
	},
	externalDocs: {
	},
	servers: [{
		url: "https://api.linode.com/v4",
		description: "Linode API",
	}],
	paths: {},
	components: {
		schemas: {
			"X-Filter": {
				type: "string",
				externalDocs: { description:"", url: "https://developers.linode.com/v4/filtering", },
			},
		},
		parameters: {
			"pagination": {
				name: "page",
				in: "query",
				description: "Page of results",
				required: false,
				allowEmptyValue: true,
				schema: {
					type: "integer",
					format: "int32",
				},
			},
			"filtering": {
				name: "X-Filter",
				in: "header",
				description: "Filtering parameters",
				required: false,
				content: {
					"application/json": {
						schema: {
							type: "object",
						},
					},
				},
			},
		},
	},
	tags: [],
	security: [
		{
			type: "http",
			scheme: "bearer",
		},
		{
			type: "oauth2",
			flows: {
				implicit: {
					authorizationUrl: "https://login.linoode.com/oauth/authorize",
					tokenUrl: "https://login.linoode.com/oauth/token",
					scopes: {
						// "write:pets": "modify pets in your account",
						// "read:pets": "read your pets"
					},
				},
				authorizationCode: {
					tokenUrl: "https://login.linode.com/oauth/token",
					scopes: {},
				},
			},
		},
	],
};
