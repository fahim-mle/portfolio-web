import { PrismaPg } from '@prisma/adapter-pg';
import 'dotenv/config';
import { Pool } from 'pg';
import { PrismaClient } from '../src/generated/prisma/client';

const connectionString = process.env.DATABASE_URL!;

const pool = new Pool({ connectionString });
const adapter = new PrismaPg(pool);
const prisma = new PrismaClient({ adapter });

async function main() {
  try {
    await prisma.$connect();
    console.log('Successfully connected to database.');
    console.log('hello world');
  } catch (e) {
    console.error('Failed to connect to database:', e);
    process.exit(1);
  } finally {
    await prisma.$disconnect();
  }
}

main();
