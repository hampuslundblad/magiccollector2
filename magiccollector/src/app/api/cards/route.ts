import { getAuthSession } from "@/lib/auth";
import { db } from "@/lib/db";
import { AddCardValidator } from "@/lib/validators/card";
import { z } from "zod";

export async function POST(req: Request) {
  try {
    const session = await getAuthSession();
    if (!session?.user) {
      return new Response("Unauthorized", { status: 401 });
    }

    const body = await req.json();

    const { name, set, foil, quantity } = AddCardValidator.parse(body);

    const cardExist = await db.card.findFirst({
      where: {
        name : name,
        userId: session.user.id,
      },
    });
    if (!cardExist) {
      const q = parseInt(quantity);
      await db.card.create({
        data: {
          name,
          set,
          foil,
          quantity: q,
        },
      });
    }


    return new Response("OK");
  } catch (error) {
    if (error instanceof z.ZodError) {
      return new Response("Invalid request data passed", { status: 422 });
    }
    return new Response(
      "Could not add card. Please try again later.",
      {
        status: 500,
      }
    );
  }
}