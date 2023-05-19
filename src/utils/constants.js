
// Logic to update data from local storage. It iterates local storage taking movie objects created and returns an array with the items
export const updateLocalStorageData = () => {
    const localStorageData = [];
    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i);
      if (key.startsWith("movie")) {
        const movieData = JSON.parse(localStorage.getItem(key));
        localStorageData.push(movieData);
      }
    }
    return localStorageData;
  };