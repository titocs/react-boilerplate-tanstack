import { createFileRoute, redirect } from '@tanstack/react-router'
import { Token } from '../../utils/token';
import Layout from '../../components/layout/Layout';

export const Route = createFileRoute('/login/')({
  beforeLoad: async () => {
		if(Token.getLoggedInIdentifier()){
			throw redirect({ to: '/' });
		}
	},
  component: () => {
    return (
      <Layout>
        <h1 className='text-fuchsia-500'>Hello</h1>
      </Layout>
    )
  }
})