// Async Populate Function
async function populate() {
  const requestURL = "https://ghostpalette.github.io/content.json";
  const request = new Request(requestURL);

  const response = await fetch(request);
  const work = await response.json();

  populateHeader(work);
  populateWork(work);
}

// Populate Header with Button Panels
function populateHeader(work) {
  // Grab Header Item
  const headerButtonsContainer = document.querySelector("header .buttons--panels");
  // Loop Through JSON to Produce Work Button Panels
  const workItems = work.work;
  for( const workItem of workItems ) {
    // WorkType Variables
    const workType = workItem.workType;
    const workTypeLabel = workType.charAt(0).toUpperCase() + workType.slice(1);
    const myHeaderButton = document.createElement("button");
    // Populate Button Element
    myHeaderButton.classList.add('buttons--panel');
    myHeaderButton.setAttribute('panel', workType);
    myHeaderButton.textContent = workTypeLabel;
    // Append Button to Content
    headerButtonsContainer.appendChild(myHeaderButton);
  }
}

// Populate Body With Work
function populateWork(work) {
  // Grab Main Body
  const main = document.querySelector("main");
  // Loop Through JSON to Product Panels with Work
  const workItems = work.work;
  for( const workItem of workItems ) {
    // Work Variables
    const workType = workItem.workType;
    const workTypeLabel = workType.charAt(0).toUpperCase() + workType.slice(1);
    const workContent = workItem.workItems;

    // Initialize Parent Elements & Their Classes
    const workSection = document.createElement("section");
    workSection.classList.add("work--content");
    workSection.setAttribute('panel', workType);
    const workHeader = document.createElement("div");
    workHeader.classList.add("work--header");
    const workItemsContainer = document.createElement("div");
    workItemsContainer.classList.add("work--list");

    // Populate Work Header
    const workHeaderLabel = document.createElement("h3");
    workHeaderLabel.classList.add("label");
    workHeaderLabel.textContent = workTypeLabel;
    const workHeaderButton = document.createElement("button");
    workHeaderButton.classList.add("button--close");
    workHeaderButton.textContent = '<i class="fa-solid fa-xmark"></i>';
    // Append Work Header Content
    workHeader.appendChild(workHeaderLabel);
    workHeader.appendChild(workHeaderButton);

    // Populate Work Items
    for( const workItemContent of workContent ) {
      // Item Variables
      const itemName = workItemContent.imageName;
      const itemSrc = "https://ghostpalette.github.io/images/" + workType + "/" + workItemContent.imageSrc;
      const itemLabel = workItemContent.imageCaption;

      // Element Variables & Populate Classes + Attributes
      const workItemDiv = document.createElement("div");
      workItemDiv.classList.add("work--item");
      const workItemLightBox = document.createElement("a");
      workItemLightBox.setAttribute("href", itemSrc);
      workItemLightBox.setAttribute("data-lightbox", itemName);
      workItemLightBox.setAttribute("data-title", itemLabel);
      const workItemImage = document.createElement("img");
      workItemImage.setAttribute("src", itemSrc);

      // Nest Elements
      workItemLightBox.appendChild(workItemImage);
      workItemDiv.appendChild(workItemLightBox);
      // Append Content
      workItemsContainer.appendChild(workItemDiv);
    }

    // Nest Elements
    workSection.appendChild(workHeader);
    workSection.appendChild(workItemsContainer);
    // Append to Content
    main.appendChild(workSection);
  }
}

// Populate
populate();