console.log("this is my index file");

newsAccrdian = document.getElementById("newsAccordian");

// initilize the variables
let source = "techcrunch";
let apiKey = "0dbbbb6d0c3648f2b174706c8e7b1d61";
// grab the news container
const xhr = new XMLHttpRequest();
xhr.open(
  "GET",
  `https://newsapi.org/v2/everything?q=${source}&apiKey=${apiKey}`,
  true
);
// what to do when response is ready
xhr.onload = function () {
  if (this.status === 200) {
    let json = JSON.parse(this.responseText);
    let articles = json.articles;
    console.log(json);
    let newsHtml = "";
    articles.forEach(function (element, index) {
      //   console.log(element, index);
      let news = ` 

<div class="accordion-item">
  <h2 class="accordion-header" id="heading${index}">
    <button
      class="accordion-button collapsed"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#collapse${index}"
      aria-expanded="true"
      aria-controls="collapse${index}"
    >
      <b>Breaking News ${index + 1}-  </b>  ${element["title"]}
    </button>
  </h2>
  <div
    id="collapse${index}"
    class="accordion-collapse collapse "
    aria-labelledby="heading${index}"
    data-bs-parent="#newsAccordian"
  >
    <div class="accordion-body">
    ${element["content"]}.  <a href='${element["url"]}'>Read more here</a>
    </div>
  </div>
</div>`;
      newsHtml += news;
    });
    newsAccrdian.innerHTML = newsHtml;
  } else {
    console.log("Some error occured");
  }
};
xhr.send();
