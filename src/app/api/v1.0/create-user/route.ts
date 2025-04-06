import { PrismaClient } from "@prisma/client";
import { UserOnleNameEmailPass } from "@/types/types";

export async function POST(request: Request) {
  const body: UserOnleNameEmailPass = await request.json();
  const { name, email, password } = body;

  const prisma = new PrismaClient();

  try {
    const existingUser = await prisma.user.findUnique({
      where: { email },
    });

    if (existingUser) {
      return new Response(JSON.stringify({ error: "Email already exists" }), {
        status: 409, 
        headers: {
          "Content-Type": "application/json",
        },
      });
    }

    const user = await prisma.user.create({
      data: {
        name,
        email,
        password,
      },
    });

    return new Response(
      JSON.stringify({
        message: "User created successfully",
        name: user.name,
        email: user.email,
        id: user.id,
      }),
      {
        status: 200,
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
  } catch (error) {
    console.error("Create user error:", error);
    return new Response(JSON.stringify({ error: "Internal Server Error" }), {
      status: 500,
      headers: {
        "Content-Type": "application/json",
      },
    });
  } finally {
    await prisma.$disconnect();
  }
}
