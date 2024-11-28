import * as React from 'react'
import { createLazyFileRoute } from '@tanstack/react-router'
import Loginform2 from '@/components/Loginform2'

export const Route = createLazyFileRoute('/login2')({
  component: RouteComponent,
})

function RouteComponent() {
  return <Loginform2 />
}
