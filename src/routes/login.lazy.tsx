import { createLazyFileRoute } from '@tanstack/react-router'
import Loginform from '@/components/Loginform'

export const Route = createLazyFileRoute('/login')({
  component: Login,
})

function Login(){
  return <Loginform />
}