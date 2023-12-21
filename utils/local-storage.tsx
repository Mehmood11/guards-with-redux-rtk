export function getLocalStorage(key: string): string | null {
  let data: string | null = null;
  try {
    data = typeof window !== "undefined" ? localStorage.getItem(key) : null;
    if (data) {
      data = JSON.parse(data);
    }
  } catch (error) {
    // If stored data is not a stringified JSON this might fail,
    // that's why we catch the error
  }
  return data;
}

export function setLocalStorage(key: string, data: any): void {
  try {
    typeof window !== "undefined" &&
      localStorage.setItem(key, JSON.stringify(data));
  } catch (error) {
    /* empty */
  }
}

export function removeLocalStorage(key: string): void {
  try {
    typeof window !== "undefined" && localStorage.removeItem(key);
  } catch (error) {
    // If stored data is not a stringified JSON this might fail,
    // that's why we catch the error
  }
}

export function clearLocalStorage(): void {
  localStorage.clear();
}
