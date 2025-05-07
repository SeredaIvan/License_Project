// This Source Code Form is subject to the terms of the Mozilla Public
// License, v. 2.0. If a copy of the MPL was not distributed with this
// file, You can obtain one at https://mozilla.org/MPL/2.0/.


import { PrismaClient } from "@prisma/client";
import { faker } from "@faker-js/faker";

const prisma = new PrismaClient({
  datasources: {
    db: {
      url:
        process.env.NODE_ENV === "production"
          ? process.env.POSTGRES_PRISMA_URL_PROD
          : process.env.POSTGRES_PRISMA_URL_DEV,
    },
  },
});

async function main() {
  
  console.log("Seeding database...");

  const users = Array.from({ length: 100 }, () => ({
    name: faker.person.firstName(), 
    email: faker.internet.email(),  
  }));

  await prisma.user.createMany({
    data: users,
  });

  console.log("Database seeded successfully!");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
