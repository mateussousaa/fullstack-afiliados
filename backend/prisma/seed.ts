const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient()

async function main() {
  const type_1 = await prisma.transactionType.upsert({
    where: { id: 1 },
    update: {},
    create: {
      description: 'Venda produtor',
      nature: 'INPUT',
      signal: 'POSITIVE',
    },
  })

  const type_2 = await prisma.transactionType.upsert({
    where: { id: 2 },
    update: {},
    create: {
      description: 'Venda afiliado',
      nature: 'INPUT',
      signal: 'POSITIVE',
    },
  })

  const type_3 = await prisma.transactionType.upsert({
    where: { id: 3 },
    update: {},
    create: {
      description: 'Comissão paga',
      nature: 'OUTPUT',
      signal: 'NEGATIVE',
    },
  })

  const type_4 = await prisma.transactionType.upsert({
    where: { id: 4 },
    update: {},
    create: {
      description: 'Comissão recebida',
      nature: 'INPUT',
      signal: 'POSITIVE',
    },
  })
  console.log({ type_1, type_2, type_3, type_4 });
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })