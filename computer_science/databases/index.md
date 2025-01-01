# Databases

- [**ACID**](https://en.wikipedia.org/wiki/ACID) - (atomicity, consistency, isolation, durability) is a set of properties of database transactions intended to guarantee data validity despite errors, power failures, and other mishaps.


## Resources

- [A future for SQL on the web](https://jlongster.com/future-sql-web) - sqlite in web, faster than IndexedDB
- [PlanetScale – Database for Developers](https://www.planetscale.com/blog/announcing-planetscale-the-database-for-developers), ([HN](https://news.ycombinator.com/item?id=27197873)) - seems like a super cool piece of technology, will definitely keep an eye on it 👍
  - MySQL compatible, serverless, encryption at rest and more
  - pretty generous free tier
  - _branching_ - branch is created from the `main` database schema, allows changes and can be later merged into `main`
  - _non-blocking schema changes_ - DB schema can be changed without downtime or locking
- [Hosting SQLite databases on Github Pages](https://phiresky.github.io/blog/2021/hosting-sqlite-databases-on-github-pages/)
- [Dragonfly](https://github.com/dragonflydb/dragonfly) - Redis alternative
- [Things You Should Know About Databases](https://architecturenotes.co/things-you-should-know-about-databases/) -
  The basic database concepts explained from indexes to ACID properties.
- [Presto](https://prestodb.io) - distributed sql query engine for big data
- [The DynamoDB paper](https://brooker.co.za/blog/2022/07/12/dynamodb.html)
- [Common DB schema change mistakes](https://postgres.ai/blog/20220525-common-db-schema-change-mistakes)
- [Real-World Engineering Challenges #6: Migrations ](https://newsletter.pragmaticengineer.com/p/real-world-engineering-challenges)
- [From Postgres to Amazon DynamoDB](https://www.instacart.com/company/how-its-made/from-postgres-to-amazon-dynamodb-%EF%BF%BC/)
- [How Discord Stores Trillions of Messages](https://discord.com/blog/how-discord-stores-trillions-of-messages)
- [Database Fundamentals](https://tontinton.com/posts/database-fundementals/) #databases
- [Use the index, Luke!](https://use-the-index-luke.com/no-offset) - a guide to database performance for developers
- [Postgres Language Server](https://github.com/supabase-community/postgres_lsp)
