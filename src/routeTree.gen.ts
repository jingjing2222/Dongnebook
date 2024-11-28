/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file was automatically generated by TanStack Router.
// You should NOT make any changes in this file as it will be overwritten.
// Additionally, you should also exclude this file from your linter and/or formatter to prevent it from being checked or modified.

import { createFileRoute } from '@tanstack/react-router'

// Import Routes

import { Route as rootRoute } from './routes/__root'

// Create Virtual Routes

const SignupLazyImport = createFileRoute('/signup')()
const PracticeLazyImport = createFileRoute('/practice')()
const Login2LazyImport = createFileRoute('/login2')()
const LoginLazyImport = createFileRoute('/login')()
const IndexLazyImport = createFileRoute('/')()

// Create/Update Routes

const SignupLazyRoute = SignupLazyImport.update({
  id: '/signup',
  path: '/signup',
  getParentRoute: () => rootRoute,
} as any).lazy(() => import('./routes/signup.lazy').then((d) => d.Route))

const PracticeLazyRoute = PracticeLazyImport.update({
  id: '/practice',
  path: '/practice',
  getParentRoute: () => rootRoute,
} as any).lazy(() => import('./routes/practice.lazy').then((d) => d.Route))

const Login2LazyRoute = Login2LazyImport.update({
  id: '/login2',
  path: '/login2',
  getParentRoute: () => rootRoute,
} as any).lazy(() => import('./routes/login2.lazy').then((d) => d.Route))

const LoginLazyRoute = LoginLazyImport.update({
  id: '/login',
  path: '/login',
  getParentRoute: () => rootRoute,
} as any).lazy(() => import('./routes/login.lazy').then((d) => d.Route))

const IndexLazyRoute = IndexLazyImport.update({
  id: '/',
  path: '/',
  getParentRoute: () => rootRoute,
} as any).lazy(() => import('./routes/index.lazy').then((d) => d.Route))

// Populate the FileRoutesByPath interface

declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/': {
      id: '/'
      path: '/'
      fullPath: '/'
      preLoaderRoute: typeof IndexLazyImport
      parentRoute: typeof rootRoute
    }
    '/login': {
      id: '/login'
      path: '/login'
      fullPath: '/login'
      preLoaderRoute: typeof LoginLazyImport
      parentRoute: typeof rootRoute
    }
    '/login2': {
      id: '/login2'
      path: '/login2'
      fullPath: '/login2'
      preLoaderRoute: typeof Login2LazyImport
      parentRoute: typeof rootRoute
    }
    '/practice': {
      id: '/practice'
      path: '/practice'
      fullPath: '/practice'
      preLoaderRoute: typeof PracticeLazyImport
      parentRoute: typeof rootRoute
    }
    '/signup': {
      id: '/signup'
      path: '/signup'
      fullPath: '/signup'
      preLoaderRoute: typeof SignupLazyImport
      parentRoute: typeof rootRoute
    }
  }
}

// Create and export the route tree

export interface FileRoutesByFullPath {
  '/': typeof IndexLazyRoute
  '/login': typeof LoginLazyRoute
  '/login2': typeof Login2LazyRoute
  '/practice': typeof PracticeLazyRoute
  '/signup': typeof SignupLazyRoute
}

export interface FileRoutesByTo {
  '/': typeof IndexLazyRoute
  '/login': typeof LoginLazyRoute
  '/login2': typeof Login2LazyRoute
  '/practice': typeof PracticeLazyRoute
  '/signup': typeof SignupLazyRoute
}

export interface FileRoutesById {
  __root__: typeof rootRoute
  '/': typeof IndexLazyRoute
  '/login': typeof LoginLazyRoute
  '/login2': typeof Login2LazyRoute
  '/practice': typeof PracticeLazyRoute
  '/signup': typeof SignupLazyRoute
}

export interface FileRouteTypes {
  fileRoutesByFullPath: FileRoutesByFullPath
  fullPaths: '/' | '/login' | '/login2' | '/practice' | '/signup'
  fileRoutesByTo: FileRoutesByTo
  to: '/' | '/login' | '/login2' | '/practice' | '/signup'
  id: '__root__' | '/' | '/login' | '/login2' | '/practice' | '/signup'
  fileRoutesById: FileRoutesById
}

export interface RootRouteChildren {
  IndexLazyRoute: typeof IndexLazyRoute
  LoginLazyRoute: typeof LoginLazyRoute
  Login2LazyRoute: typeof Login2LazyRoute
  PracticeLazyRoute: typeof PracticeLazyRoute
  SignupLazyRoute: typeof SignupLazyRoute
}

const rootRouteChildren: RootRouteChildren = {
  IndexLazyRoute: IndexLazyRoute,
  LoginLazyRoute: LoginLazyRoute,
  Login2LazyRoute: Login2LazyRoute,
  PracticeLazyRoute: PracticeLazyRoute,
  SignupLazyRoute: SignupLazyRoute,
}

export const routeTree = rootRoute
  ._addFileChildren(rootRouteChildren)
  ._addFileTypes<FileRouteTypes>()

/* ROUTE_MANIFEST_START
{
  "routes": {
    "__root__": {
      "filePath": "__root.tsx",
      "children": [
        "/",
        "/login",
        "/login2",
        "/practice",
        "/signup"
      ]
    },
    "/": {
      "filePath": "index.lazy.tsx"
    },
    "/login": {
      "filePath": "login.lazy.tsx"
    },
    "/login2": {
      "filePath": "login2.lazy.tsx"
    },
    "/practice": {
      "filePath": "practice.lazy.tsx"
    },
    "/signup": {
      "filePath": "signup.lazy.tsx"
    }
  }
}
ROUTE_MANIFEST_END */
