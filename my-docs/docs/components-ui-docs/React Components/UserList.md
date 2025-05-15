---
id: users-list
title: Компонент UsersList
sidebar_label: UsersList
description: Компонент відображення списку користувачів у Next.js застосунку
---

# Компонент `UsersList`

Цей React-компонент відповідає за відображення списку користувачів у вигляді HTML-списку. Він приймає масив користувачів через пропс `users` та виводить їхні імена, email-адреси та дату створення.

## Призначення

`UsersList` корисний для виводу даних, отриманих з бекенду через REST API. Зокрема, він ідеально підходить для проєктів на **Next.js** у поєднанні з **Prisma**.


## Пропси

| Назва   | Тип      | Обов'язковий | Опис                                          |
| ------- | -------- | ------------ | --------------------------------------------- |
| `users` | `User[]` | так          | Масив об'єктів користувачів для відображення. |

## Код 

```
import {User} from "@/types/types";

type Props = {
  users: User[];
};

const UsersList = ( {users}:Props ) => {
  return (
    <div>
      <h2>Users List</h2>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            Name: {user.name}, Email: {user.email}, CreatedAt: {new Date(user.createdAt).toISOString()}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UsersList;
```