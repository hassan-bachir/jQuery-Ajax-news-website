$('#result').html( $.ajax({
    url: 'https://jsonplaceholder.typicode.com/posts',
    method: 'POST',
    headers: {
      'Authorization': 'Bearer mytoken',
      'Content-Type': 'application/json'
    },
    data: {
      'name': 'John Doe',
      'email': 'johndoe@example.com'
    },
    timeout: 5000,
    success: function(response) {
      console.log(response);
    },
    error: function(error) {
      console.error(error);
    }
  }));