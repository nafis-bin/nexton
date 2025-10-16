import { createFileRoute, Outlet } from '@tanstack/react-router'

export const Route = createFileRoute('/shops/')({
  component: RouteComponent,
})

function RouteComponent() {
    return (
        <div>
            SHOP PAGE
            <Outlet />
        </div>
    )
}
