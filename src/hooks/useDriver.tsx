import { api } from "@/lib/api";
import type { IDriver, Pagination } from "@/types/driver";
import { useState } from "react";
import { useQuery } from "@tanstack/react-query";

interface DriversResponse {
  data: IDriver[];
  pagination: Pagination;
  vehicleCounts: { [key: string]: number };
}

export function useDrivers(initialPage = 1, limit = 10) {
  const [page, setPage] = useState(initialPage);

  const { data, isLoading, error, refetch } = useQuery({
    queryKey: ["drivers", page, limit], // Unique key per page + limit combination
    queryFn: async (): Promise<DriversResponse> => {
      const res = await api(`/api/drivers?page=${page}&limit=${limit}`);
      if (!res.ok) throw new Error("Failed to fetch drivers");
      return res.json();
    },
  });

  return {
    drivers: data?.data ?? [],
    vehicleCounts: data?.vehicleCounts,
    pagination: data?.pagination ?? null,
    page,
    loading: isLoading,
    error: error?.message ?? null,
    setPage,
    refetch: () => refetch(),
  };
}
