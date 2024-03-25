// const test = 'https://swapi.dev/api/people';
// async function fetchAndDisplayList(api) {
//   try {
//       let data = JSON.parse(localStorage.getItem(api));
//       if (!data) {
//           const response = await fetch(api);
//           data = await response.json();
//           localStorage.setItem(api, JSON.stringify(data));
//       }
//       displayList(data.results);
//   } catch (error) {
//       console.error('Error fetching data:', error);
//   }
// }

// function displayList(elements) {
//   const name = '';
//   elements.forEach(element => {
//       console.log(element.name);
//       name += element.name;
//   });
// }

// fetchAndDisplayList(test);
