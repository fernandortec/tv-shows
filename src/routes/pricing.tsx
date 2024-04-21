import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/pricing')({
  component: () => <div>Hello /shows/pricing!</div>
})