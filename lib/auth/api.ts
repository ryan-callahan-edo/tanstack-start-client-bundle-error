import { createServerFn } from "@tanstack/start";
import { getEvent } from "vinxi/http";
import { auth, type Auth } from "./auth";

export const getAuth = createServerFn({ method: "GET" }).handler<Auth>(
  async () => {
    const event = getEvent();

    const session = await auth.api.getSession({
      headers: event.headers,
      query: {
        disableCookieCache: true,
      },
    });

    event.context.auth =
      session !== null
        ? {
            isAuthenticated: true,
            user: session.user,
            session: session.session,
          }
        : {
            isAuthenticated: false,
            user: null,
            session: null,
          };

    return event.context.auth;
  },
);
