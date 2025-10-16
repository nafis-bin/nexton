import { createFileRoute  } from '@tanstack/react-router'
import { fetchWatch } from '../../lib/utility'

export const Route = createFileRoute('/shops/$shopId')({
  loader: async ({ params }) => {
    const shopId = params.shopId
    const data = await fetchWatch(shopId)
    return data
  },
  component: RouteComponent,
})

function RouteComponent() {
    let data = Route.useLoaderData()
    return (
        <div>
            <ul>{data.name}</ul>
            <ul>{data.price}</ul>
        </div>
    )
}
