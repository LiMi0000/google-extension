async function fetchData() {
  const options = {
    method: 'GET',
    headers: {
      'X-BingApis-SDK': 'true',
      'X-RapidAPI-Key': '1e847396a2msh7c36c532f69de1dp11399djsn43f714c8be7d',
      'X-RapidAPI-Host': 'bing-news-search1.p.rapidapi.com',
    },
  };

  const data = await fetch(
    'https://bing-news-search1.p.rapidapi.com/news?safeSearch=Off&textFormat=Raw',
    options
  );
  const result = await data.json();
  console.log(result.value);

  document.getElementById('news').innerHTML = result.value
    .map(
      (news) => `<div>
  <p>${news.datePublished}</p>
  <h3>${news.name}</h3>
  <p>${news.description}</p>
  <a href=${news.url}>${news.url}</a>
</div>`
    )
    .join('');
}
fetchData();
