// app/admin/add-product/page.tsx
import AdminProductForm from "../../../../components/AdminProductForm";

export default function AdminAddProductPage() {
  return (
    <main className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-5xl mx-auto">
        <AdminProductForm />
      </div>
    </main>
  );
}
