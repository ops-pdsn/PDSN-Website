// Shared auth verification utility for admin API routes

export function verifyAdmin(req) {
  const authHeader = req.headers['authorization'];
  const token = authHeader?.replace('Bearer ', '');
  if (!token) return false;

  const adminPassword = process.env.ADMIN_PASSWORD;
  if (!adminPassword) return false;

  const expected = Buffer.from(`${adminPassword}:pdsn-admin-cms`).toString('base64');
  return token === expected;
}
