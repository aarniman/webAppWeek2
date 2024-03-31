async function getData() {
  try {
    const response = await fetch('https://reqres.in/api/unknown/23');

    if (!response.ok) {
      throw new Error('Failed to fetch data. Status code: ' + response.status);
    }

    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error('There has been a problem with your fetch operation:', error);
  }
}

async function postData() {
  try {
    const response = await fetch('https://reqres.in/api/unknown/23', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: 'Arska',
        job: 'student',
      }),
    });

    if (!response.ok) {
      throw new Error('Failed to post data. Status code: ' + response.status);
    }

    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error('There has been a problem with your fetch operation:', error);
  }
}

async function putData() {
  try {
    const response = await fetch('https://reqres.in/api/unknown/23', {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: 'Arska',
        job: 'student',
      }),
    });

    if (!response.ok) {
      throw new Error('Failed to put data. Status code: ' + response.status);
    }

    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error('There has been a problem with your fetch operation:', error);
  }
}

async function deleteData() {
  try {
    const response = await fetch('https://reqres.in/api/unknown/23', {
      method: 'DELETE',
    });

    if (!response.ok) {
      throw new Error('Failed to delete data. Status code: ' + response.status);
    }

    console.log('Data deleted successfully');
  } catch (error) {
    console.error('There has been a problem with your fetch operation:', error);
  }
}

getData();
postData();
putData();
deleteData();
