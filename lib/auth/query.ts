import { queryOptions } from "@tanstack/react-query";
import { getAuth } from "./api";

export const authQueryOptions = queryOptions({
  queryKey: ["getAuth"],
  queryFn: () => getAuth(),
});
