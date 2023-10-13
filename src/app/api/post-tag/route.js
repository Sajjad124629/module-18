import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
//  Read
export async function GET() {
  try {
    const alls = await prisma.post_tag.findMany();
    return NextResponse.json({ data: alls });
  } catch (e) {
    console.log(e);
  }
}

// Insert
export async function POST() {
  try {
    const posts = await prisma.post_tag.create({
      data: {
        postId: 1, 
        tagId : 1, 
       
      },
    });
    console.log(posts);
    return NextResponse.json({ data: posts });
  } catch (e) {
    console.log(e);
  }
}

//  Update
export async function PUT() {
  try {
    const updates = await prisma.post_tag.update({
      where: { id: 1 },
      data: {
        postId: 1, 
        tagId : 1, 
       
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
    const deletes = await prisma.post_tag.delete({
      where: { id: 3 },
    });
    return NextResponse.json({ data: deletes });
  } catch (e) {
    console.log(e);
  }
}
