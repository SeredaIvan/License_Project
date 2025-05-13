
###  `POST /v1.0/users/create-user`
Створює нового користувача.

**Request:**
```
{
  "name": "Ім'я користувача",
  "email": "email@example.com"
}
```

Response:

```
{
  "userId": "id",
  "name": "Ім'я",
  "email": "email@example.com",
  "createdAt": "2025-05-13T...",
  "updatedAt": "2025-05-13T..."
}
```
