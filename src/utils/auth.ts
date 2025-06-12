import { api } from './service';
import { apiBaseUrl, ROOT_PATH } from './constants';
import jwtDecoder from './decoders';
import Storage from '../utils/storage';

interface FormData {
  email: { value: string | null };
  password: { value: string | null };
}

function certifyAuthentication(token: string) {
  if (!token) {
    return false;
  }

  Storage.set('token.consumer', token);
  return true;
}

async function retry(formDataJson: Record<string, string | null>) {
  try {
    const response = await api.post(`${apiBaseUrl}/authenticate`, {
      ...formDataJson,
      scope: 'USER',
    });
    return certifyAuthentication(response.data);
  } catch {
    return false;
  }
}

export async function signIn(formData: FormData) {
  const formDataJson = {
    email: formData.email.value as string | null,
    password: formData.password.value as string | null,
  };

  return await api
    .post(`${apiBaseUrl}/authenticate`, { ...formDataJson, scope: 'USER' })
    .then(function (response) {
      return certifyAuthentication(response.data);
    })
    .catch(function (error) {
      const { code } = error;
      if (code === 'ERR_NETWORK') {
        return retry(formDataJson);
      }

      return false;
    });
}

export function signOut() {
  Storage.remove('token.consumer');
  globalThis.location.href = ROOT_PATH;
}

export function checkAuth() {
  const token = Storage.get('token.consumer');

  if (!token) {
    return false;
  }

  const decodedToken = jwtDecoder(token);
  const { exp: expirationTime } = JSON.parse(decodedToken);

  if (Date.now() >= expirationTime * 1000) {
    Storage.remove('token.consumer');
    return false;
  } else {
    return true;
  }
}
