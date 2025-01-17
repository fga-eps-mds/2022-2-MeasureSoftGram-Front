import React from 'react';
import { render } from '@testing-library/react';
import { OrganizationProvider } from '@contexts/OrganizationProvider';
import { ProductProvider } from '@contexts/ProductProvider';
import ReleasesTable from '../ReleasesTable';

jest.mock('next/router', () => ({
  useRouter: jest.fn().mockReturnValue({
    push: jest.fn()
  })
}));

describe('ReleasesTable component', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should render the component and have releases data', () => {
    const releaseList = [
      {
        id: '1',
        release_name: 'First release',
        start_at: '2022-01-01T10:00:00Z',
        end_at: '2022-01-05T10:00:00Z',
        goal: {}
      }
    ];

    const { getByTestId } = render(
      <OrganizationProvider>
        <ProductProvider>
          <ReleasesTable releaseList={releaseList} />
        </ProductProvider>
      </OrganizationProvider>
    );

    const firstRow = getByTestId('repository-row').firstChild;
    expect(firstRow.textContent).toBe('First release');
    expect(firstRow.nextSibling?.textContent).toBe('01 de janeiro de 2022');
    expect(firstRow.nextSibling?.nextSibling?.textContent).toBe('05 de janeiro de 2022');
  });
});
