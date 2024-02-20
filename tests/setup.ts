import { afterEach } from 'vitest'
import { cleanup } from '@testing-library/react'

// runs a cleanup after each test case
afterEach(() => {
	cleanup();
});