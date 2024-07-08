import { createRootRouteWithContext } from "@tanstack/react-router";
import { AuthContext } from "../auth";

interface RouterContext {
  authentication: AuthContext
}

export const Route = createRootRouteWithContext<RouterContext>()({});