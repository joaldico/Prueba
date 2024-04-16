export function getIsAuthenticated() {
  return !!localStorage.getItem('token');
}

export function getAuthData() {
  const hash = 'Qzkg00jtdohhgxtUpEU4tlFFWzp7aqBT9R8YuqJdgSuKGKtGDcmJ/fPEnV5UhATQ';
  const token = localStorage?.getItem('token') || null;
  return { hash, token };
}
