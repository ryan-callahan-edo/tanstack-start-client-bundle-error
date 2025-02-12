import { queryOptions, useSuspenseQuery } from "@tanstack/react-query";
import type { UseSuspenseQueryResult } from "@tanstack/react-query";
import { getAuth } from "./api";
import type { Auth } from "./auth";

export const authQueryOptions = queryOptions({
  queryKey: ["getAuth"],
  queryFn: () => getAuth(),
});

export const useAuthQuery = () => useSuspenseQuery(authQueryOptions);

export const useAuthedQuery = () => {
  const authQuery = useAuthQuery();

  if (authQuery.data.isAuthenticated === false) {
    throw new Error("Not authenticated");
  }

  return authQuery as UseSuspenseQueryResult<Auth>;
};
