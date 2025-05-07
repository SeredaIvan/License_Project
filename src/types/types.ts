// This Source Code Form is subject to the terms of the Mozilla Public
// License, v. 2.0. If a copy of the MPL was not distributed with this
// file, You can obtain one at https://mozilla.org/MPL/2.0/.

export type User={
    id: string;
    name: string;
    email: string;
    password: string;
    createdAt: Date;
    updatedAt: Date;
}
export type UserWithoutPassword={
    id: string;
    name: string;
    email: string;
    createdAt: Date;
    updatedAt: Date;
}
export type UserOnleNameEmailPass={
    name: string;
    email: string;  
    password: string;
}
      