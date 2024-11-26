import { createLazyFileRoute } from '@tanstack/react-router'
import Signupform from '@/components/Signupform'

export const Route = createLazyFileRoute('/signup')({
  component: Signup,
})

function Signup() {
  return <Signupform/>
}
