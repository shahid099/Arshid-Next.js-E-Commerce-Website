import { Suspense } from "react";
import ResetPassword from "../../../components/ResetPassword";

export default function Page() {
  return (
    <Suspense fallback={<div className="flex h-screen items-center justify-center">Loading...</div>}>
      <ResetPassword />
    </Suspense>
  );
}
