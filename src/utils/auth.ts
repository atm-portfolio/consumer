import { api } from './service';
import { apiBaseUrl } from './constants';
import authStore from '../stores/auth';
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

  const jwt = jwtDecoder(token);
  const { role } = JSON.parse(jwt);

  if (role === 'ADMIN') {
    return false;
  }

  Storage.set('token', token);
  authStore.isSigned = true;
  return true;
}

async function retry(formDataJson: Record<string, string | null>) {
  try {
    const response = await api.post(`${apiBaseUrl}/authenticate`, formDataJson);
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
    .post(`${apiBaseUrl}/authenticate`, formDataJson)
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
  Storage.remove('token');
  authStore.isSigned = false;
  globalThis.location.href = '/';
}

export function checkAuth() {
  const token = Storage.get('token');

  if (!token) {
    authStore.isSigned = false;
    return false;
  }

  const decodedToken = jwtDecoder(token);
  const { exp: expirationTime } = JSON.parse(decodedToken);

  if (Date.now() >= expirationTime * 1000) {
    Storage.remove('token');
    authStore.isSigned = false;
    return false;
  } else {
    authStore.isSigned = true;
    return true;
  }
}
