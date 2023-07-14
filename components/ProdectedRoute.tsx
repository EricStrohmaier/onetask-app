"use client"
import { useAuth } from "../app/hooks/Auth";
import { useRouter } from "next/navigation";

const ProtectedRoute = ({ children }: any) => {
  const router = useRouter();
  const { user } = useAuth();

  if (!user) {
    // user is not authenticated
    router.push("/login");
    return null; // Return null when redirecting
  }

  return <>{children}</>; // Return the children components when user is authenticated
};

export default ProtectedRoute;
