import merge from 'lodash.merge';
import GraphQLJSON from 'graphql-type-json';
import { makeExecutableSchema } from 'graphql-tools';

import { mergeSchemas } from './utilities';

import {
	usersMutations,
	usersQueries,
	usersTypeDef
} from './users/typeDefs';

import {
	prestamosMutations,
	prestamosQueries,
	prestamosTypeDef
} from './historial/typeDefs';

import {
	profilePicturesQueries,
	profilePicturesTypeDef
} from './profilepictures/typeDefs';
	
import {
	loginMutations,
	loginQueries,
	loginTypeDef
} from './login/typeDefs';

import {
	bicicletasMutations,
	bicicletasQueries,
	bicicletasTypeDef
} from './bicicletas/typeDefs';

import {
	authMutations,
	authTypeDef
} from './auth/typeDefs';
/* import {
	coursesMutations,
	coursesQueries,
	coursesTypeDef
} from './courses/typeDefs';

import {
	gradesMutations,
	gradesQueries,
	gradesTypeDef
} from './grades/typeDefs'; */

import usersResolvers from './users/resolvers';
import prestamosResolvers from './historial/resolvers';
import profilepicturesResolvers from './profilepictures/resolvers';
import loginResolvers from './login/resolvers';
import bicicletasResolvers from './bicicletas/resolvers';
import authResolvers from './auth/resolvers';
// import coursesResolvers from './courses/resolvers';
// import gradesResolvers from './grades/resolvers';

// merge the typeDefs
const mergedTypeDefs = mergeSchemas(
	[
		'scalar JSON',
		usersTypeDef,
		prestamosTypeDef,
		profilePicturesTypeDef,
		loginTypeDef,
		bicicletasTypeDef,
		authTypeDef
		// usersTypeDef,
		// coursesTypeDef,
		// gradesTypeDef
	],
	[
		usersQueries,
		prestamosQueries,
		profilePicturesQueries,
		loginQueries,
		bicicletasQueries
		// usersQueries,
		// coursesQueries,
		// gradesQueries
	],
	[
		usersMutations,
		prestamosMutations,
		loginMutations,
		bicicletasMutations,
		authMutations
		// usersMutations,
		// coursesMutations,
		// gradesMutations
	]
);

// Generate the schema object from your types definition.
export default makeExecutableSchema({
	typeDefs: mergedTypeDefs,
	resolvers: merge(
		{ JSON: GraphQLJSON }, // allows scalar JSON
		usersResolvers,
		prestamosResolvers,
		profilepicturesResolvers,
		loginResolvers,
		bicicletasResolvers,
		authResolvers
	)
});
