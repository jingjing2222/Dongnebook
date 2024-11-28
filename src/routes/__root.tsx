import { createRootRoute, Link, Outlet } from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/router-devtools'
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'

const queryClient = new QueryClient()

export const Route = createRootRoute({
  component: () => (
    <QueryClientProvider client={queryClient}>
    <>
      <header className="bg-gray-800 text-white p-4">
        <div className="container mx-auto flex justify-between">
          <h1 className="text-lg font-bold">동네북</h1>
          <nav className="flex gap-4">
            <Link to="/" className="[&.active]:font-bold">Home</Link>
            <Link to="/login" className="[&.active]:font-bold">Login</Link>
            <Link to="/practice" className="[&.active]:font-bold">Practice</Link>
            <Link to="/login2" className="[&.active]:font-bold">Login2</Link>
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main className="min-h-56 text-black bg-white">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white p-4">
        <div className="container mx-auto text-center">
          &copy; 2024 동네북. All rights reserved.
          <TanStackRouterDevtools />
        </div>
      </footer>
    </>
    </QueryClientProvider>
  ),
})