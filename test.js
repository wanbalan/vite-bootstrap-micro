const data = {
  name: 'Иван Иванов',
  email: 'ivan@example.com'
};
var myst=JSON.stringify(data)
console.log(myst)
fetch('http://127.0.0.1:8080/set', {
  method: 'POST',
  headers: {
    // 'Content-Type': 'application/x-www-form-urlencoded',
    'Accept': 'application/json',
    'Content-Type': 'application/json'
     // 'Content-Type': 'text/plain'
  },
  body: myst
})
  .then(response => {
    console.log(response.status)
    console.log(response)
    response.json()
  })
  .then(result => console.log('Успех:', result))
  .catch(error => console.error('Ошибка:', error));
