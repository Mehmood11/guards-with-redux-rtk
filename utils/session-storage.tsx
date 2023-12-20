export function setSessionStorage(key: string, data: any): void {
  try {
    typeof window !== "undefined" &&
      sessionStorage.setItem(key, JSON.stringify(data));
  } catch (error) {
    /* empty */
  }
}
