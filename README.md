# GraphQL Job Board
by default every field is nullable,it means if you don't specify a field as non-nullable, it will be nullable by default.to prevent it we make it mandatory by putting exclamation mark after the field name. for example , id: ID! is non-nullable field.if we have array we can use square brackets to specify it as non-nullable array. for example , id: [ID!]
by default js has nullability , so we need to specify the type of the field to make it non-nullable. for example , id: ID! is non-nullable field.it means if no data inarray it will return empty array instead of null.if we make array null it will return null.

This is a project used in the [GraphQL by Example](https://www.udemy.com/course/graphql-by-example/?referralCode=7ACEB04674F000BAC061) course.

It uses Apollo Server with Express, and GraphQL-Request and Apollo Client as GraphQL clients. The application is used to explain queries, mutations, custom object types, authentication, etc.
