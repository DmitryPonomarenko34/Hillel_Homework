(async function () {
  try {
    const response = await fetch('http://localhost:5000/users', { 
      method: "POST",  
      headers: {
        "Content-Type": "application/json",
      }, 
      body: JSON.stringify({user: 'Test', status: 'user'})
    });
      
      const data = await response.json();
      console.log('data', data);
    } catch(err) {
      console.log(err);
    }
})();

(async function () {
  try {
    const response = await fetch('http://localhost:5000/users/7');

    if (response.status === 404) {
      throw new Error('User not found');
    }
    
    const data = await response.json();
    console.log('data', data);
  } catch(err) {
      console.log(err);
  }
})()