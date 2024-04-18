import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/shows/$showId')({
  component: () => <div>Hello /shows/$showId!</div>
})