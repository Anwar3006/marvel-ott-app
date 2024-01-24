## Project Resources

- npm i prisma
- npm i -D @prisma/client @next-auth/prisma-adapter
- Then npx prisma init
- Then create/go to lib folder, create prismadb.ts file, create a PrismaClient, imported from @prisma/client. const client either takes from global.prismadb(if a client has been previously created) or PrismaClient. then if the NODE_ENV === "production", assign client to global.prismadb. export your client.
- In root directory, create a file global.d.ts, import PrismaClient, declare global {}, inside it, namespace globalThis {}, inside it create a var prismadb: PrismaClient
- Then inside prisma/schema.prisma you create your models, go [here](https://authjs.dev/reference/adapter/prisma) from how to structure the models that will be used by NextAuth

- Import json file to mongodb:
- mongoimport mongodb+srv://Anwar:Preseclegon1998@primarystorage.twaufr4.mongodb.net/marvelOTT --collection Movie --jsonArray marvelMovies.json
