// components/AdminProductForm.tsx
"use client";

import Image from "next/image";
import React, { useState } from "react";

type FormState = {
  title: string;
  price: string;
  category: string;
  description: string;
};

export default function AdminProductForm() {
  const [form, setForm] = useState<FormState>({
    title: "",
    price: "",
    category: "",
    description: "",
  });
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [preview, setPreview] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState<string | null>(null);

  function onFileChange(e: React.ChangeEvent<HTMLInputElement>) {
    const f = e.target.files?.[0] ?? null;
    setImageFile(f);
    setPreview(f ? URL.createObjectURL(f) : null);
  }

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    setForm((p) => ({ ...p, [e.target.name]: e.target.value }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setMessage(null);

    try {
      const fd = new FormData();
      fd.append("title", form.title);
      fd.append("price", form.price);
      fd.append("category", form.category);
      fd.append("description", form.description);
      if (imageFile) fd.append("image", imageFile);

      const res = await fetch("/api/products", {
        method: "POST",
        body: fd,
      });

      if (!res.ok) throw new Error("Failed to save product");
      // const data = await res.json();
      setMessage("Product added successfully.");
      // Reset form
      setForm({ title: "", price: "", category: "", description: "" });
      setImageFile(null);
      setPreview(null);
    } catch (err) {
      console.error(err);
      setMessage("Error saving product");
    } finally {
      setLoading(false);
    }
  }

  return (
    <form onSubmit={handleSubmit} className="max-w-2xl mx-auto p-4 bg-white rounded-md shadow">
      <h2 className="text-xl font-semibold mb-4">Add New Product</h2>

      <div className="grid gap-3 sm:grid-cols-2">
        <label className="flex flex-col">
          <span className="text-sm font-medium">Title</span>
          <input
            name="title"
            value={form.title}
            onChange={handleChange}
            required
            className="mt-1 p-2 border rounded"
            placeholder="Striped T-Shirt"
          />
        </label>

        <label className="flex flex-col">
          <span className="text-sm font-medium">Price ($)</span>
          <input
            name="price"
            value={form.price}
            onChange={handleChange}
            required
            type="number"
            min="0"
            step="0.01"
            className="mt-1 p-2 border rounded"
            placeholder="39"
          />
        </label>

        <label className="flex flex-col sm:col-span-2">
          <span className="text-sm font-medium">Category</span>
          <input
            name="category"
            value={form.category}
            onChange={handleChange}
            className="mt-1 p-2 border rounded"
            placeholder="T-Shirts"
          />
        </label>

        <label className="flex flex-col sm:col-span-2">
          <span className="text-sm font-medium">Description</span>
          <textarea
            name="description"
            value={form.description}
            onChange={handleChange}
            rows={4}
            className="mt-1 p-2 border rounded"
            placeholder="Short description..."
          />
        </label>

        <label className="flex flex-col">
          <span className="text-sm font-medium">Image</span>
          <input
            type="file"
            accept="image/*"
            onChange={onFileChange}
            className="mt-1"
          />
        </label>

        <div className="flex items-center gap-4">
          {preview ? (
            <Image src={preview} alt="preview" className="w-28 h-28 object-cover rounded border" />
          ) : (
            <div className="w-28 h-28 rounded border bg-gray-50 flex items-center justify-center text-sm text-gray-400">
              No preview
            </div>
          )}
          <div>
            <button
              type="submit"
              disabled={loading}
              className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 disabled:opacity-60"
            >
              {loading ? "Saving..." : "Save Product"}
            </button>
          </div>
        </div>
      </div>

      {message && <p className="mt-3 text-sm">{message}</p>}
    </form>
  );
}
