// This Source Code Form is subject to the terms of the Mozilla Public
// License, v. 2.0. If a copy of the MPL was not distributed with this
// file, You can obtain one at https://mozilla.org/MPL/2.0/.

import { PrismaClient } from "@prisma/client";
export async function DELETE(request: Request) {
  
  const {userId} = await request.json();  
  if (!userId) {
    return new Response("User ID is required", { status: 400 });
  }
  const prisma = new PrismaClient();
  const res = await prisma.user.delete({
    where: { id: userId }, 
  })
  if (!res) {
    return new Response( JSON.stringify({
      error: "User not found",
    }), {
      status: 404,
      headers: {
        "Content-Type": "application/json",
      },
    })
  }
  return new Response(JSON.stringify({
    succes: "User deleted successfully",
  }), {
    status: 200,
    headers: {
      "Content-Type": "application/json",
    },
  })
}