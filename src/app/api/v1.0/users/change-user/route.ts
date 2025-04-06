import { PrismaClient } from "@prisma/client";

export async function PUT(request: Request) {
  const { userId, name, email } = await request.json();

  if (!userId) {
    return new Response(
      JSON.stringify({
        error: "User ID is required",
      }),
      {
        status: 400,
      }
    );
  }

  else if (!name && !email) {
    return new Response(
      JSON.stringify({
        error: "Name or email is required",
      }),
      {
        status: 400,
      }
    );
  }

  const prisma = new PrismaClient();

  try {
    const existingUser = await prisma.user.findUnique({
      where: { id: userId },
    });

    if (!existingUser) {
      return new Response(
        JSON.stringify({
          error: "User not found",
        }),
        {
          status: 404,
        }
      );
    }

    const res = await prisma.user.update({
      where: { id: userId },
      data: {
        name: name || existingUser.name,
        email: email || existingUser.email,
      },
    });

    return new Response(
      JSON.stringify({
        userId: res.id,
        name: res.name,
        email: res.email,
        createdAt: res.createdAt.toString(),
        updatedAt: res.updatedAt.toString(),
      }),
      {
        status: 200,
      }
    );
  } catch (error) {
    console.error("Error updating user:", error);
    return new Response(
      JSON.stringify({
        error: "Error updating user",
      }),
      {
        status: 500,
      }
    );
  } finally {
    await prisma.$disconnect();
  }
}
