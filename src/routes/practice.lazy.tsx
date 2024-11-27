import * as React from 'react'
import { createLazyFileRoute } from '@tanstack/react-router'
import Data from '@/components/Data'

export const Route = createLazyFileRoute('/practice')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <div>
      <Data />
    </div>
  )
}
