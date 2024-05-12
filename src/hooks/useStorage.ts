export const useStorage = () => ({
  getItem: (key: string, parse = true) => {
    const value = localStorage.getItem(key);

    return value !== null && parse ? JSON.parse(value) : value;
  },

  setItem: (key: string, value: never) => {
    if (typeof value === "object") {
      localStorage.setItem(key, JSON.stringify(value));
    } else {
      localStorage.setItem(key, value);
    }
  },
});
