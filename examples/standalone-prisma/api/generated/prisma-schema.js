module.exports = {
  // Code generated by Prisma (prisma@1.28.3). DO NOT EDIT.
  typeDefs:
    // Please don't change this file manually but run `prisma generate` to update it.
    // For more information, please read the docs: https://www.prisma.io/docs/prisma-client/

    /* GraphQL */ `
      type AggregateComment {
        count: Int!
      }

      type AggregateOothMeta {
        count: Int!
      }

      type AggregatePost {
        count: Int!
      }

      type AggregateUser {
        count: Int!
      }

      type BatchPayload {
        count: Long!
      }

      type Comment {
        id: ID!
        content: String
        author: User!
        post: Post
      }

      type CommentConnection {
        pageInfo: PageInfo!
        edges: [CommentEdge]!
        aggregate: AggregateComment!
      }

      input CommentCreateInput {
        content: String
        author: UserCreateOneInput!
        post: PostCreateOneWithoutCommentsInput
      }

      input CommentCreateManyWithoutPostInput {
        create: [CommentCreateWithoutPostInput!]
        connect: [CommentWhereUniqueInput!]
      }

      input CommentCreateWithoutPostInput {
        content: String
        author: UserCreateOneInput!
      }

      type CommentEdge {
        node: Comment!
        cursor: String!
      }

      enum CommentOrderByInput {
        id_ASC
        id_DESC
        content_ASC
        content_DESC
        createdAt_ASC
        createdAt_DESC
        updatedAt_ASC
        updatedAt_DESC
      }

      type CommentPreviousValues {
        id: ID!
        content: String
      }

      input CommentScalarWhereInput {
        id: ID
        id_not: ID
        id_in: [ID!]
        id_not_in: [ID!]
        id_lt: ID
        id_lte: ID
        id_gt: ID
        id_gte: ID
        id_contains: ID
        id_not_contains: ID
        id_starts_with: ID
        id_not_starts_with: ID
        id_ends_with: ID
        id_not_ends_with: ID
        content: String
        content_not: String
        content_in: [String!]
        content_not_in: [String!]
        content_lt: String
        content_lte: String
        content_gt: String
        content_gte: String
        content_contains: String
        content_not_contains: String
        content_starts_with: String
        content_not_starts_with: String
        content_ends_with: String
        content_not_ends_with: String
        AND: [CommentScalarWhereInput!]
        OR: [CommentScalarWhereInput!]
        NOT: [CommentScalarWhereInput!]
      }

      type CommentSubscriptionPayload {
        mutation: MutationType!
        node: Comment
        updatedFields: [String!]
        previousValues: CommentPreviousValues
      }

      input CommentSubscriptionWhereInput {
        mutation_in: [MutationType!]
        updatedFields_contains: String
        updatedFields_contains_every: [String!]
        updatedFields_contains_some: [String!]
        node: CommentWhereInput
        AND: [CommentSubscriptionWhereInput!]
        OR: [CommentSubscriptionWhereInput!]
        NOT: [CommentSubscriptionWhereInput!]
      }

      input CommentUpdateInput {
        content: String
        author: UserUpdateOneRequiredInput
        post: PostUpdateOneWithoutCommentsInput
      }

      input CommentUpdateManyDataInput {
        content: String
      }

      input CommentUpdateManyMutationInput {
        content: String
      }

      input CommentUpdateManyWithoutPostInput {
        create: [CommentCreateWithoutPostInput!]
        delete: [CommentWhereUniqueInput!]
        connect: [CommentWhereUniqueInput!]
        set: [CommentWhereUniqueInput!]
        disconnect: [CommentWhereUniqueInput!]
        update: [CommentUpdateWithWhereUniqueWithoutPostInput!]
        upsert: [CommentUpsertWithWhereUniqueWithoutPostInput!]
        deleteMany: [CommentScalarWhereInput!]
        updateMany: [CommentUpdateManyWithWhereNestedInput!]
      }

      input CommentUpdateManyWithWhereNestedInput {
        where: CommentScalarWhereInput!
        data: CommentUpdateManyDataInput!
      }

      input CommentUpdateWithoutPostDataInput {
        content: String
        author: UserUpdateOneRequiredInput
      }

      input CommentUpdateWithWhereUniqueWithoutPostInput {
        where: CommentWhereUniqueInput!
        data: CommentUpdateWithoutPostDataInput!
      }

      input CommentUpsertWithWhereUniqueWithoutPostInput {
        where: CommentWhereUniqueInput!
        update: CommentUpdateWithoutPostDataInput!
        create: CommentCreateWithoutPostInput!
      }

      input CommentWhereInput {
        id: ID
        id_not: ID
        id_in: [ID!]
        id_not_in: [ID!]
        id_lt: ID
        id_lte: ID
        id_gt: ID
        id_gte: ID
        id_contains: ID
        id_not_contains: ID
        id_starts_with: ID
        id_not_starts_with: ID
        id_ends_with: ID
        id_not_ends_with: ID
        content: String
        content_not: String
        content_in: [String!]
        content_not_in: [String!]
        content_lt: String
        content_lte: String
        content_gt: String
        content_gte: String
        content_contains: String
        content_not_contains: String
        content_starts_with: String
        content_not_starts_with: String
        content_ends_with: String
        content_not_ends_with: String
        author: UserWhereInput
        post: PostWhereInput
        AND: [CommentWhereInput!]
        OR: [CommentWhereInput!]
        NOT: [CommentWhereInput!]
      }

      input CommentWhereUniqueInput {
        id: ID
      }

      scalar Json

      scalar Long

      type Mutation {
        createComment(data: CommentCreateInput!): Comment!
        updateComment(
          data: CommentUpdateInput!
          where: CommentWhereUniqueInput!
        ): Comment
        updateManyComments(
          data: CommentUpdateManyMutationInput!
          where: CommentWhereInput
        ): BatchPayload!
        upsertComment(
          where: CommentWhereUniqueInput!
          create: CommentCreateInput!
          update: CommentUpdateInput!
        ): Comment!
        deleteComment(where: CommentWhereUniqueInput!): Comment
        deleteManyComments(where: CommentWhereInput): BatchPayload!
        createOothMeta(data: OothMetaCreateInput!): OothMeta!
        updateOothMeta(
          data: OothMetaUpdateInput!
          where: OothMetaWhereUniqueInput!
        ): OothMeta
        updateManyOothMetas(
          data: OothMetaUpdateManyMutationInput!
          where: OothMetaWhereInput
        ): BatchPayload!
        upsertOothMeta(
          where: OothMetaWhereUniqueInput!
          create: OothMetaCreateInput!
          update: OothMetaUpdateInput!
        ): OothMeta!
        deleteOothMeta(where: OothMetaWhereUniqueInput!): OothMeta
        deleteManyOothMetas(where: OothMetaWhereInput): BatchPayload!
        createPost(data: PostCreateInput!): Post!
        updatePost(data: PostUpdateInput!, where: PostWhereUniqueInput!): Post
        updateManyPosts(
          data: PostUpdateManyMutationInput!
          where: PostWhereInput
        ): BatchPayload!
        upsertPost(
          where: PostWhereUniqueInput!
          create: PostCreateInput!
          update: PostUpdateInput!
        ): Post!
        deletePost(where: PostWhereUniqueInput!): Post
        deleteManyPosts(where: PostWhereInput): BatchPayload!
        createUser(data: UserCreateInput!): User!
        updateUser(data: UserUpdateInput!, where: UserWhereUniqueInput!): User
        upsertUser(
          where: UserWhereUniqueInput!
          create: UserCreateInput!
          update: UserUpdateInput!
        ): User!
        deleteUser(where: UserWhereUniqueInput!): User
        deleteManyUsers(where: UserWhereInput): BatchPayload!
      }

      enum MutationType {
        CREATED
        UPDATED
        DELETED
      }

      interface Node {
        id: ID!
      }

      type OothMeta {
        id: ID!
        key: String!
        data: Json
        dataString: String
        value: String
        user: User
      }

      type OothMetaConnection {
        pageInfo: PageInfo!
        edges: [OothMetaEdge]!
        aggregate: AggregateOothMeta!
      }

      input OothMetaCreateInput {
        key: String!
        data: Json
        dataString: String
        value: String
        user: UserCreateOneWithoutOothMetaInput
      }

      input OothMetaCreateManyWithoutUserInput {
        create: [OothMetaCreateWithoutUserInput!]
        connect: [OothMetaWhereUniqueInput!]
      }

      input OothMetaCreateWithoutUserInput {
        key: String!
        data: Json
        dataString: String
        value: String
      }

      type OothMetaEdge {
        node: OothMeta!
        cursor: String!
      }

      enum OothMetaOrderByInput {
        id_ASC
        id_DESC
        key_ASC
        key_DESC
        data_ASC
        data_DESC
        dataString_ASC
        dataString_DESC
        value_ASC
        value_DESC
        createdAt_ASC
        createdAt_DESC
        updatedAt_ASC
        updatedAt_DESC
      }

      type OothMetaPreviousValues {
        id: ID!
        key: String!
        data: Json
        dataString: String
        value: String
      }

      input OothMetaScalarWhereInput {
        id: ID
        id_not: ID
        id_in: [ID!]
        id_not_in: [ID!]
        id_lt: ID
        id_lte: ID
        id_gt: ID
        id_gte: ID
        id_contains: ID
        id_not_contains: ID
        id_starts_with: ID
        id_not_starts_with: ID
        id_ends_with: ID
        id_not_ends_with: ID
        key: String
        key_not: String
        key_in: [String!]
        key_not_in: [String!]
        key_lt: String
        key_lte: String
        key_gt: String
        key_gte: String
        key_contains: String
        key_not_contains: String
        key_starts_with: String
        key_not_starts_with: String
        key_ends_with: String
        key_not_ends_with: String
        dataString: String
        dataString_not: String
        dataString_in: [String!]
        dataString_not_in: [String!]
        dataString_lt: String
        dataString_lte: String
        dataString_gt: String
        dataString_gte: String
        dataString_contains: String
        dataString_not_contains: String
        dataString_starts_with: String
        dataString_not_starts_with: String
        dataString_ends_with: String
        dataString_not_ends_with: String
        value: String
        value_not: String
        value_in: [String!]
        value_not_in: [String!]
        value_lt: String
        value_lte: String
        value_gt: String
        value_gte: String
        value_contains: String
        value_not_contains: String
        value_starts_with: String
        value_not_starts_with: String
        value_ends_with: String
        value_not_ends_with: String
        AND: [OothMetaScalarWhereInput!]
        OR: [OothMetaScalarWhereInput!]
        NOT: [OothMetaScalarWhereInput!]
      }

      type OothMetaSubscriptionPayload {
        mutation: MutationType!
        node: OothMeta
        updatedFields: [String!]
        previousValues: OothMetaPreviousValues
      }

      input OothMetaSubscriptionWhereInput {
        mutation_in: [MutationType!]
        updatedFields_contains: String
        updatedFields_contains_every: [String!]
        updatedFields_contains_some: [String!]
        node: OothMetaWhereInput
        AND: [OothMetaSubscriptionWhereInput!]
        OR: [OothMetaSubscriptionWhereInput!]
        NOT: [OothMetaSubscriptionWhereInput!]
      }

      input OothMetaUpdateInput {
        key: String
        data: Json
        dataString: String
        value: String
        user: UserUpdateOneWithoutOothMetaInput
      }

      input OothMetaUpdateManyDataInput {
        key: String
        data: Json
        dataString: String
        value: String
      }

      input OothMetaUpdateManyMutationInput {
        key: String
        data: Json
        dataString: String
        value: String
      }

      input OothMetaUpdateManyWithoutUserInput {
        create: [OothMetaCreateWithoutUserInput!]
        delete: [OothMetaWhereUniqueInput!]
        connect: [OothMetaWhereUniqueInput!]
        set: [OothMetaWhereUniqueInput!]
        disconnect: [OothMetaWhereUniqueInput!]
        update: [OothMetaUpdateWithWhereUniqueWithoutUserInput!]
        upsert: [OothMetaUpsertWithWhereUniqueWithoutUserInput!]
        deleteMany: [OothMetaScalarWhereInput!]
        updateMany: [OothMetaUpdateManyWithWhereNestedInput!]
      }

      input OothMetaUpdateManyWithWhereNestedInput {
        where: OothMetaScalarWhereInput!
        data: OothMetaUpdateManyDataInput!
      }

      input OothMetaUpdateWithoutUserDataInput {
        key: String
        data: Json
        dataString: String
        value: String
      }

      input OothMetaUpdateWithWhereUniqueWithoutUserInput {
        where: OothMetaWhereUniqueInput!
        data: OothMetaUpdateWithoutUserDataInput!
      }

      input OothMetaUpsertWithWhereUniqueWithoutUserInput {
        where: OothMetaWhereUniqueInput!
        update: OothMetaUpdateWithoutUserDataInput!
        create: OothMetaCreateWithoutUserInput!
      }

      input OothMetaWhereInput {
        id: ID
        id_not: ID
        id_in: [ID!]
        id_not_in: [ID!]
        id_lt: ID
        id_lte: ID
        id_gt: ID
        id_gte: ID
        id_contains: ID
        id_not_contains: ID
        id_starts_with: ID
        id_not_starts_with: ID
        id_ends_with: ID
        id_not_ends_with: ID
        key: String
        key_not: String
        key_in: [String!]
        key_not_in: [String!]
        key_lt: String
        key_lte: String
        key_gt: String
        key_gte: String
        key_contains: String
        key_not_contains: String
        key_starts_with: String
        key_not_starts_with: String
        key_ends_with: String
        key_not_ends_with: String
        dataString: String
        dataString_not: String
        dataString_in: [String!]
        dataString_not_in: [String!]
        dataString_lt: String
        dataString_lte: String
        dataString_gt: String
        dataString_gte: String
        dataString_contains: String
        dataString_not_contains: String
        dataString_starts_with: String
        dataString_not_starts_with: String
        dataString_ends_with: String
        dataString_not_ends_with: String
        value: String
        value_not: String
        value_in: [String!]
        value_not_in: [String!]
        value_lt: String
        value_lte: String
        value_gt: String
        value_gte: String
        value_contains: String
        value_not_contains: String
        value_starts_with: String
        value_not_starts_with: String
        value_ends_with: String
        value_not_ends_with: String
        user: UserWhereInput
        AND: [OothMetaWhereInput!]
        OR: [OothMetaWhereInput!]
        NOT: [OothMetaWhereInput!]
      }

      input OothMetaWhereUniqueInput {
        id: ID
      }

      type PageInfo {
        hasNextPage: Boolean!
        hasPreviousPage: Boolean!
        startCursor: String
        endCursor: String
      }

      type Post {
        id: ID!
        title: String
        content: String
        author: User!
        comments(
          where: CommentWhereInput
          orderBy: CommentOrderByInput
          skip: Int
          after: String
          before: String
          first: Int
          last: Int
        ): [Comment!]
      }

      type PostConnection {
        pageInfo: PageInfo!
        edges: [PostEdge]!
        aggregate: AggregatePost!
      }

      input PostCreateInput {
        title: String
        content: String
        author: UserCreateOneInput!
        comments: CommentCreateManyWithoutPostInput
      }

      input PostCreateOneWithoutCommentsInput {
        create: PostCreateWithoutCommentsInput
        connect: PostWhereUniqueInput
      }

      input PostCreateWithoutCommentsInput {
        title: String
        content: String
        author: UserCreateOneInput!
      }

      type PostEdge {
        node: Post!
        cursor: String!
      }

      enum PostOrderByInput {
        id_ASC
        id_DESC
        title_ASC
        title_DESC
        content_ASC
        content_DESC
        createdAt_ASC
        createdAt_DESC
        updatedAt_ASC
        updatedAt_DESC
      }

      type PostPreviousValues {
        id: ID!
        title: String
        content: String
      }

      type PostSubscriptionPayload {
        mutation: MutationType!
        node: Post
        updatedFields: [String!]
        previousValues: PostPreviousValues
      }

      input PostSubscriptionWhereInput {
        mutation_in: [MutationType!]
        updatedFields_contains: String
        updatedFields_contains_every: [String!]
        updatedFields_contains_some: [String!]
        node: PostWhereInput
        AND: [PostSubscriptionWhereInput!]
        OR: [PostSubscriptionWhereInput!]
        NOT: [PostSubscriptionWhereInput!]
      }

      input PostUpdateInput {
        title: String
        content: String
        author: UserUpdateOneRequiredInput
        comments: CommentUpdateManyWithoutPostInput
      }

      input PostUpdateManyMutationInput {
        title: String
        content: String
      }

      input PostUpdateOneWithoutCommentsInput {
        create: PostCreateWithoutCommentsInput
        update: PostUpdateWithoutCommentsDataInput
        upsert: PostUpsertWithoutCommentsInput
        delete: Boolean
        disconnect: Boolean
        connect: PostWhereUniqueInput
      }

      input PostUpdateWithoutCommentsDataInput {
        title: String
        content: String
        author: UserUpdateOneRequiredInput
      }

      input PostUpsertWithoutCommentsInput {
        update: PostUpdateWithoutCommentsDataInput!
        create: PostCreateWithoutCommentsInput!
      }

      input PostWhereInput {
        id: ID
        id_not: ID
        id_in: [ID!]
        id_not_in: [ID!]
        id_lt: ID
        id_lte: ID
        id_gt: ID
        id_gte: ID
        id_contains: ID
        id_not_contains: ID
        id_starts_with: ID
        id_not_starts_with: ID
        id_ends_with: ID
        id_not_ends_with: ID
        title: String
        title_not: String
        title_in: [String!]
        title_not_in: [String!]
        title_lt: String
        title_lte: String
        title_gt: String
        title_gte: String
        title_contains: String
        title_not_contains: String
        title_starts_with: String
        title_not_starts_with: String
        title_ends_with: String
        title_not_ends_with: String
        content: String
        content_not: String
        content_in: [String!]
        content_not_in: [String!]
        content_lt: String
        content_lte: String
        content_gt: String
        content_gte: String
        content_contains: String
        content_not_contains: String
        content_starts_with: String
        content_not_starts_with: String
        content_ends_with: String
        content_not_ends_with: String
        author: UserWhereInput
        comments_every: CommentWhereInput
        comments_some: CommentWhereInput
        comments_none: CommentWhereInput
        AND: [PostWhereInput!]
        OR: [PostWhereInput!]
        NOT: [PostWhereInput!]
      }

      input PostWhereUniqueInput {
        id: ID
      }

      type Query {
        comment(where: CommentWhereUniqueInput!): Comment
        comments(
          where: CommentWhereInput
          orderBy: CommentOrderByInput
          skip: Int
          after: String
          before: String
          first: Int
          last: Int
        ): [Comment]!
        commentsConnection(
          where: CommentWhereInput
          orderBy: CommentOrderByInput
          skip: Int
          after: String
          before: String
          first: Int
          last: Int
        ): CommentConnection!
        oothMeta(where: OothMetaWhereUniqueInput!): OothMeta
        oothMetas(
          where: OothMetaWhereInput
          orderBy: OothMetaOrderByInput
          skip: Int
          after: String
          before: String
          first: Int
          last: Int
        ): [OothMeta]!
        oothMetasConnection(
          where: OothMetaWhereInput
          orderBy: OothMetaOrderByInput
          skip: Int
          after: String
          before: String
          first: Int
          last: Int
        ): OothMetaConnection!
        post(where: PostWhereUniqueInput!): Post
        posts(
          where: PostWhereInput
          orderBy: PostOrderByInput
          skip: Int
          after: String
          before: String
          first: Int
          last: Int
        ): [Post]!
        postsConnection(
          where: PostWhereInput
          orderBy: PostOrderByInput
          skip: Int
          after: String
          before: String
          first: Int
          last: Int
        ): PostConnection!
        user(where: UserWhereUniqueInput!): User
        users(
          where: UserWhereInput
          orderBy: UserOrderByInput
          skip: Int
          after: String
          before: String
          first: Int
          last: Int
        ): [User]!
        usersConnection(
          where: UserWhereInput
          orderBy: UserOrderByInput
          skip: Int
          after: String
          before: String
          first: Int
          last: Int
        ): UserConnection!
        node(id: ID!): Node
      }

      type Subscription {
        comment(
          where: CommentSubscriptionWhereInput
        ): CommentSubscriptionPayload
        oothMeta(
          where: OothMetaSubscriptionWhereInput
        ): OothMetaSubscriptionPayload
        post(where: PostSubscriptionWhereInput): PostSubscriptionPayload
        user(where: UserSubscriptionWhereInput): UserSubscriptionPayload
      }

      type User {
        id: ID!
        oothMeta(
          where: OothMetaWhereInput
          orderBy: OothMetaOrderByInput
          skip: Int
          after: String
          before: String
          first: Int
          last: Int
        ): [OothMeta!]
      }

      type UserConnection {
        pageInfo: PageInfo!
        edges: [UserEdge]!
        aggregate: AggregateUser!
      }

      input UserCreateInput {
        oothMeta: OothMetaCreateManyWithoutUserInput
      }

      input UserCreateOneInput {
        create: UserCreateInput
        connect: UserWhereUniqueInput
      }

      input UserCreateOneWithoutOothMetaInput {
        connect: UserWhereUniqueInput
      }

      type UserEdge {
        node: User!
        cursor: String!
      }

      enum UserOrderByInput {
        id_ASC
        id_DESC
        createdAt_ASC
        createdAt_DESC
        updatedAt_ASC
        updatedAt_DESC
      }

      type UserPreviousValues {
        id: ID!
      }

      type UserSubscriptionPayload {
        mutation: MutationType!
        node: User
        updatedFields: [String!]
        previousValues: UserPreviousValues
      }

      input UserSubscriptionWhereInput {
        mutation_in: [MutationType!]
        updatedFields_contains: String
        updatedFields_contains_every: [String!]
        updatedFields_contains_some: [String!]
        node: UserWhereInput
        AND: [UserSubscriptionWhereInput!]
        OR: [UserSubscriptionWhereInput!]
        NOT: [UserSubscriptionWhereInput!]
      }

      input UserUpdateDataInput {
        oothMeta: OothMetaUpdateManyWithoutUserInput
      }

      input UserUpdateInput {
        oothMeta: OothMetaUpdateManyWithoutUserInput
      }

      input UserUpdateOneRequiredInput {
        create: UserCreateInput
        update: UserUpdateDataInput
        upsert: UserUpsertNestedInput
        connect: UserWhereUniqueInput
      }

      input UserUpdateOneWithoutOothMetaInput {
        delete: Boolean
        disconnect: Boolean
        connect: UserWhereUniqueInput
      }

      input UserUpsertNestedInput {
        update: UserUpdateDataInput!
        create: UserCreateInput!
      }

      input UserWhereInput {
        id: ID
        id_not: ID
        id_in: [ID!]
        id_not_in: [ID!]
        id_lt: ID
        id_lte: ID
        id_gt: ID
        id_gte: ID
        id_contains: ID
        id_not_contains: ID
        id_starts_with: ID
        id_not_starts_with: ID
        id_ends_with: ID
        id_not_ends_with: ID
        oothMeta_every: OothMetaWhereInput
        oothMeta_some: OothMetaWhereInput
        oothMeta_none: OothMetaWhereInput
        AND: [UserWhereInput!]
        OR: [UserWhereInput!]
        NOT: [UserWhereInput!]
      }

      input UserWhereUniqueInput {
        id: ID
      }
    `
};
