import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
//  Read
export async function GET() {
  try {
    const alls = await prisma.user.findMany();
    return NextResponse.json({ data: alls });
  } catch (e) {
    console.log(e);
  }
}

// Insert
export async function POST() {
  try {
    const posts = await prisma.user.create({
      data: {
        firstName: "Mahatab",
        middleName: "Hossain",
        lastName: "Roni",
        mobile: "01918723",
        email: "email1sa2@gmail.com",
        passwordHash: "sadhgs7261212",
        intro: "hello",
        profile: "profile.jpg",
      },
    });

    return NextResponse.json({ data: posts });
  } catch (e) {
    console.log(e);
  }
}

//  Update
export async function PUT() {
  try {
    
    const updates = await prisma.user.update({
      where: { id: 1 },
      data: {
        firstName: "Sajjad",
        middleName: "Hossain",
        lastName: "Roni",
        mobile: "01918723",
        email: "sajjad@gmail.com",
        passwordHash: "sadhgs7261212",
        intro: "hello",
        profile: "profile.jpg",
      },
    });
    return NextResponse.json({ data: updates });
  } catch (e) {
    console.log(e);
  }
}

// Delete
export async function DELETE() {
  try {
    const deletes = await prisma.user.delete({
       where: {id: 3}
    })
    return NextResponse.json({ data: deletes });
}
catch (e) {
    console.log(e)
}
}
