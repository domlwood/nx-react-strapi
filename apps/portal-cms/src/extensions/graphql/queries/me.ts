module.exports = function me({ strapi }) {
  return {
    typeDefs: `
      type Query {
        me: UsersPermissionsMe
      }

      type UsersPermissionsMe {
        company: Company
      }
    `,

    resolvers: {
      Query: {
        me: {
          resolve: async (parent, args, context) => {
            const user = context.state;
            console.log(user);
            const me = await strapi.service("plugins::users-permissions.user")
            const company = await strapi.service('api::company.company').find();
            console.log(me)
            return company.results;
          },
        },
      },
    },

    resolversConfig: {
      'Query.userDetails': {
        auth: false,
      },
    },
  };
};
