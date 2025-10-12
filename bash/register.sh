curl -X POST http://localhost:3000/api/auth/register \
  -H "Content-Type: application/json" \
  -d '{
    "username": "user02",
    "email": "user02@example.com",
    "password": "password"
  }'