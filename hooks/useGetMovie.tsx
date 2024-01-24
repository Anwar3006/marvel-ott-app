import useSWR from "swr";

import fetcher from "@/lib/fetcher";

const useGetMovie = (movieId: string) => {
  const { data, error, isLoading } = useSWR(`/api/movies/${movieId}`, fetcher, {
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

export default useGetMovie;
