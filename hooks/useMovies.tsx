import fetcher from "@/lib/fetcher";
import useSWR from "swr";

const useMovies = (
  page?: number | undefined,
  limit?: number | undefined,
  search?: string | undefined
) => {
  const url = `/api/movies${page ? `?page=${page}` : ""}${
    search ? `&search=${search}` : ""
  }`;

  const { data, error, isLoading } = useSWR(url, fetcher, {
    revalidateIfStale: false,
    revalidateOnFocus: false,
    revalidateOnReconnect: false,
  });

  return {
    data,
    error,
    isLoading,
  };
};

export default useMovies;
