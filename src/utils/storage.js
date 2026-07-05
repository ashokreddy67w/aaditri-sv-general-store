export function readStorage(key, fallback = null) {
  try {
    const raw = localStorage.getItem(key);
    return raw ? JSON.parse(raw) : fallback;
  } catch {
    return fallback;
  }
}

export function writeStorage(key, value) {
  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch {
    // Storage full or unavailable — fail silently, app still works in-memory.
  }
}

export function removeStorage(key) {
  try {
    localStorage.removeItem(key);
  } catch {
    // no-op
  }
}
