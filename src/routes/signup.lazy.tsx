import * as React from 'react'
import { createLazyFileRoute } from '@tanstack/react-router'

export const Route = createLazyFileRoute('/signup')({
  component: Signup,
})

function Signup() {
  return <div>Hello "/signup"!</div>
}
