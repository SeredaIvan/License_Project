`PUT /v1.0/users/change-user`

Оновлює користувача.

Request:

```
{
  "userId": "id",
  "name": "Нове ім'я",
  "email": "новий@email.com"
}
```
Response:
```

{
  "userId": "id",
  "name": "Нове ім'я",
  "email": "новий@email.com",
  "createdAt": "...",
  "updatedAt": "..."
}
```
