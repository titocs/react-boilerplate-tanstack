import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
// import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { Navigate, RouterProvider, createRouter, useNavigate } from "@tanstack/react-router";
import { routeTree } from "./routeTree.gen";
import { useAuth } from "./auth";
// import { TanStackRouterDevelopmentTools } from "./components/utils/development-tools/TanStackRouterDevelopmentTools";

const queryClient = new QueryClient();

const router = createRouter({
	routeTree,
	context: {
		authentication: undefined!
	},
})

function App() {
  const authentication = useAuth();

  return (
    <QueryClientProvider client={queryClient}>
				<RouterProvider router={router} context={{ authentication }} />
				{/* <TanStackRouterDevelopmentTools
					router={router}
					initialIsOpen={false}
					position="bottom-right"
				/>
				<ReactQueryDevtools initialIsOpen={false} /> */}
		</QueryClientProvider>
  )
}

export default App
