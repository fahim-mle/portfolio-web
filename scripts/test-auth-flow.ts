import { PrismaPg } from '@prisma/adapter-pg';
import 'dotenv/config';
import { Pool } from 'pg';
import { PrismaClient } from '../src/generated/prisma/client';

const connectionString = process.env.DATABASE_URL!;
const pool = new Pool({ connectionString });
const adapter = new PrismaPg(pool);
const prisma = new PrismaClient({ adapter });

async function main() {
  const email = `auth-test-${Date.now()}@example.com`;
  const password = 'securepassword';

  console.log('Testing Signup API...');
  console.log(`Creating user: ${email}`);

  const response = await fetch('http://localhost:3000/api/signup', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email, password }),
  });

  if (!response.ok) {
    console.error('Signup failed:', await response.text());
    process.exit(1);
  }

  const data = await response.json();
  console.log('Signup successful:', data);

  // Verify in DB
  const user = await prisma.user.findUnique({ where: { email } });
  if (user) {
    console.log('User verified in database:', user.email);
  } else {
    console.error('User not found in database!');
    process.exit(1);
  }

  console.log('\nTesting /api/me (expecting 401)...');
  const meResponse = await fetch('http://localhost:3000/api/me');
  if (meResponse.status === 401) {
    console.log('Correctly returned 401 Unauthorized');
  } else {
    console.error('Unexpected status from /api/me:', meResponse.status);
  }
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
