import { createLazyFileRoute } from '@tanstack/react-router'

export const Route = createLazyFileRoute('/')({
    component: Index,
})

function Index() {
    return (
    <div className="p-2">
        <h3>동네북에 오신 여러분들을 환영합니다~!</h3>
    </div>
    )
}