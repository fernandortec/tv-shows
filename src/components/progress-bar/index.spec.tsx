import { ProgressBar } from '@/components/progress-bar';
import { render } from '@testing-library/react';
import { describe, it, expect } from 'vitest';

describe('Progress Bar', () => {
	it('should be all red when fully filled', async () => {
		const wrapper = render(<ProgressBar value={100} />);
    
		expect(wrapper).toMatchSnapshot();
	});
});
