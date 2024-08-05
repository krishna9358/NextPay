Boilerplate
1. turborepo boiler plate with typescript, tailwind, db and prisma, recoil, next-auth,  yarn package manager
2. go to nextpay root folder use : `yarn install`
2. change the appsname in turborepo
3. db -> create .env file  and put the db link there and migrate `npx prisma migrate dev --name anyName`
3.1. docker db -> `docker run -e POSTGRES_PASSWORD=mysecretpassword -d -p 5432:5432 postgres`
4. db -> primsa -> create models
5. db -> generate prisma client `npx prisma generate`
can check database using `npx prisma studio`
6. can change the recoil structure and names
7. .env in user-app wih : -
JWT_SECRET=
GOOGLE_CLIENT_ID=
GOOGLE_CLIENT_SECRET=
NEXTAUTH_SECRET=

8. to run  `yarn dev`

Note : added a docker file, can also this file to setup the repo. 