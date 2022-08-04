<div align="center">
	<img src="./public/logo.svg" alt="Logo" width="80" height="80" />
	<h1 >Higher</h1>
</div>

Higher helps you make progress on that research when you don't want to.

## Documentation

TBD...

## Tech Stack

**Client:**

- **UI:** NextJS, Stitches, Typescript
- **State Management:** Zustand
- **GraphQL Client:** urql + graphql-codegen

**Server:**

- **GraphQL Server:** NextJS API, apollo-graphql-micro
- **ORM**: Prisma, typegraphql-codegen
- **Database**: MySQL (planetscale)

**Others:**

- **Testing**: Cypress (e2e, integration + unit test), Ladel (UI Stories)
- **Analytics**: Umami

## Commit convention

| Type      | Description                         | Example                                    |
| --------- | ----------------------------------- | ------------------------------------------ |
| 🚀 feat:  | Adding new features                 | "🚀 feat: added stories to components"     |
| 🐞 fix:   | Fixing bugs                         | "🐞 fix: resolved H-12 bug"                |
| 📝 docs:  | Updating documentation              | "📝 docs: updated README with emoji guide" |
| 🧹 chore: | Maintainance / Infrastructure tasks | "🧹 chore: synced types with database"     |

## Authors

- [@kndwin](https://www.github.com/kndwin)

## License

[MIT](https://choosealicense.com/licenses/mit/)
