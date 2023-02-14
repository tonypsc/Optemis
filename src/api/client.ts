import { Resource } from '../context/optemis';

const apiUrl = process.env.REACT_APP_API_URL;

const client = async (
  endpoint: string,
  { method, body, signal }: RequestInit
) => {
  const options = {
    method,
    headers: {
      'content-type': 'Application/json',
    },
    body,
    signal,
  };

  console.log(`${apiUrl}/${endpoint}`);

  const response = await fetch(`${apiUrl}/${endpoint}`, options);
  const data = await response.json();

  if (response.ok) {
    return data;
  }

  switch (response.status) {
    case 401:
      throw new Error('Unauthorized', {
        cause: { name: '401', message: 'Unauthorized' },
      });
    case 403:
      throw new Error('Forbidden', {
        cause: { name: '403', message: 'Forbidden' },
      });
    default:
      throw new Error('Internal server error', {
        cause: { name: '500', message: 'Oops. somtething went wrong' },
      });
  }
};

const read = async <T extends Resource>(
  endpoint: string,
  signal?: AbortSignal
) => {
  const data = await client(endpoint, {
    method: 'GET',
    signal,
  });

  return data as T[];
};

const create = async <T extends Resource>(
  endpoint: string,
  resource: Resource,
  signal?: AbortSignal
) => {
  const data = await client(endpoint, {
    method: 'POST',
    body: JSON.stringify(resource),
    signal,
  });

  return data as T;
};

const update = async <T extends Resource>(
  endpoint: string,
  resource: Resource,
  signal?: AbortSignal
) => {
  const data = await client(endpoint, {
    method: 'PUT',
    body: JSON.stringify(resource),
    signal,
  });

  return data as T;
};

export { read, create, update };
