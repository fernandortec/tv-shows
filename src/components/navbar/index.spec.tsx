import { CustomRouterProvider } from '@/__tests__/custom-router-provider';
import { Navbar } from '@/components/navbar';
import { describe, it, expect } from 'vitest';

describe('Nav bar', () => {
	it('should highlight the navbar link when is the current page link', async () => {
		const { wrapper } = await CustomRouterProvider({
			element: <Navbar />,
			path: '/shows',
		});

		wrapper.debug();
		expect(wrapper.getByText('Filmes e séries').closest('a')?.dataset.current).toEqual('true');
		expect(wrapper.getByText('Home').closest('a')?.dataset.current).toEqual(
			'false'
		);

	});
});
