async function populate() {
  const requestURL = "https://ghostpalette.github.io/content.json";
  const request = new Request(requestURL);

  const response = await fetch(request);
  const work = await response.json();

  populateHeader(work);
  populateWork(work);
}

function populateHeader(work) {
  console.log('populate header function');
}
function populateWork(work) {
  console.log('populate work function');
}

populate();