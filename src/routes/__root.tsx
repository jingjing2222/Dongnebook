import { createRootRoute, Link, Outlet } from '@tanstack/react-router'

export const Route = createRootRoute({
  component: () => (
    <>
      <header className="bg-gray-800 text-white p-4">
        <div className="container mx-auto flex justify-between">
          <h1 className="text-lg font-bold">동네북</h1>
          <nav className="flex gap-4">
            <Link to="/" className="[&.active]:font-bold">Home</Link>
            <Link to="/login" className="[&.active]:font-bold">Login</Link>
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
        </div>
      </footer>
    </>
  ),
})