import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/support')({
  component: () => <div>Hello /support!</div>
})