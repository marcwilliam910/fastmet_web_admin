import { Navigate, Outlet } from "react-router-dom";
import { useEffect, useState } from "react";
import { api } from "@/lib/api";

export default function ProtectedRoute() {
  const [loading, setLoading] = useState(true);
  const [isValid, setIsValid] = useState(false);

  useEffect(() => {
    const checkToken = async () => {
      try {
        const res = await api("/api/auth/verify");
        setIsValid(res.ok);
      } catch {
        setIsValid(false);
      } finally {
        setLoading(false);
      }
    };

    checkToken();
  }, []);

  if (loading) return null; // or spinner

  return isValid ? <Outlet /> : <Navigate to="/login" replace />;
}
