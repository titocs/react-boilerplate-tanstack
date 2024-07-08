import { createFileRoute, redirect } from '@tanstack/react-router'

// Protect ROute
export const Route = createFileRoute('/_auth')({
  beforeLoad: async ({ context, location }) => {
    const { isLoggin } = context.authentication

    const token = localStorage.getItem('logged_in');

    if (!isLoggin(token)) {
      throw redirect({
        to: '/login',
        search: {
          redirect: location.href,
        },
      })
    }
  },
})