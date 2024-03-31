async function fetchData(url, option) {
  try {
    const response = await fetch(url, {option});

    if (!response.ok) {
      throw new Error('Failed to fetch data. Status code: ' + response.status);
    }

    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error('There has been a problem with your fetch operation:', error);
  }
}

fetchData('https://reqres.in/api/users/1', {method: 'GET'});
fetchData('https://reqres.in/api/users/1', {method: 'POST'});
