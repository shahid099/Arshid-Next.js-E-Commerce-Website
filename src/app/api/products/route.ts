// app/api/products/route.ts
import { NextResponse } from "next/server";

export type Product = {
  id: number;
  title: string;
  price: number;
  description?: string;
  category?: string;
  image?: string; // data URL (for demo) or actual URL in production
  createdAt: string;
};

let PRODUCTS: Product[] = [
  // seed example
  {
    id: 1,
    title: "Striped T-Shirt",
    price: 39,
    description: "Comfortable cotton tee",
    category: "T-Shirts",
    image: "", // will be empty if not provided
    createdAt: new Date().toISOString(),
  },
];

export async function GET() {
  return NextResponse.json(PRODUCTS);
}

export async function POST(req: Request) {
  try {
    const form = await req.formData();

    const title = String(form.get("title") || "");
    const priceRaw = form.get("price");
    const price = priceRaw ? Number(priceRaw.toString()) : 0;
    const description = String(form.get("description") || "");
    const category = String(form.get("category") || "");

    // handle file (if provided)
    const file = form.get("image") as File | null;
    let imageUrl = "";
    if (file && file.size > 0) {
      const arrayBuffer = await file.arrayBuffer();
      // Buffer available in Node environment
      const buffer = Buffer.from(arrayBuffer);
      const mime = file.type || "image/jpeg";
      imageUrl = `data:${mime};base64,${buffer.toString("base64")}`;
    }

    const newProduct: Product = {
      id: Date.now(),
      title,
      price,
      description,
      category,
      image: imageUrl,
      createdAt: new Date().toISOString(),
    };

    // prepend so newest appear first
    PRODUCTS = [newProduct, ...PRODUCTS];

    return NextResponse.json(newProduct, { status: 201 });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ error: "Failed to create product" }, { status: 500 });
  }
}
