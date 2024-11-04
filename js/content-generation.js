// Async Populate Function
async function populate() {
  const request_url = "https://ghostpalette.github.io/content.json";
  const request = new Request(request_url);

  const response = await fetch(request);
  const content = await response.json();

  // populateHeader(work);
  // populateWork(work);

  populate_header_panels(content);
  populate_work(content);
  populate_footer_buttons(content);
}

// Populate Header with Section Panels
function populate_header_panels(content) {
  // Grab Header Item
  const header_panels_container = document.querySelector("header .header--panels");
  // Loop Through JSON to Produce Work Button Panels
  const work_items = content.work;
  for( const work_item of work_items ) {
    // WorkType Variables
    const work_type = work_item.work_type;
    const work_type_label = work_type.charAt(0).toUpperCase() + work_type.slice(1);
    const work_type_img_src = "https://ghostpalette.github.io/images/" + work_type + "/" + work_item.work_img_src;
    // Create Elements
    const my_header_panel = document.createElement("button");
    const my_header_panel_label = document.createElement("label");
    const my_header_panel_img = document.createElement("img");
    // Populate Button Element
    my_header_panel.classList.add('header--panel');
    my_header_panel.setAttribute('panel', work_type);
    my_header_panel_label.textContent = work_type_label;
    my_header_panel_img.setAttribute('src', work_type_img_src);
    // Append Panel Items
    my_header_panel.appendChild(my_header_panel_label);
    my_header_panel.appendChild(my_header_panel_img);
    // Append Button to Content
    header_panels_container.appendChild(my_header_panel);
  }
}

// Populate Footer with Buttons
function populate_footer_buttons(content) {
  // Grab Footer Item
  const footer_button_container = document.querySelector("footer .footer--menu");
  // Loop Through JSON to Produce Footer Buttons
  const pages = content.pages;
  for( const page of pages ) {
    // Pages Variables
    const page_name = page.page_name;
    const page_label = page_name.charAt(0).toUpperCase() + work_type.slice(1);
    // Create Elements
  }
}

// Populate Content Panels
function populate_work() {
  console.log('populate work');
}

// Populate Header with Button Panels
// function populateHeader(work) {
//   // Grab Header Item
//   const headerButtonsContainer = document.querySelector("header .buttons--panels");
//   // Loop Through JSON to Produce Work Button Panels
//   const work_items = work.work;
//   for( const work_item of work_items ) {
//     // WorkType Variables
//     const work_type = work_item.work_type;
//     const work_type_label = work_type.charAt(0).toUpperCase() + work_type.slice(1);
//     const myHeaderButton = document.createElement("button");
//     // Populate Button Element
//     myHeaderButton.classList.add('buttons--panel');
//     myHeaderButton.setAttribute('panel', work_type);
//     myHeaderButton.textContent = work_type_label;
//     // Append Button to Content
//     headerButtonsContainer.appendChild(myHeaderButton);
//   }
// }

// Populate Body With Work
function populateWork33(work) {
  // Grab Main Body
  const main = document.querySelector("main");
  // Loop Through JSON to Product Panels with Work
  const work_items = work.work;
  for( const work_item of work_items ) {
    // Work Variables
    const work_type = work_item.work_type;
    const work_type_label = work_type.charAt(0).toUpperCase() + work_type.slice(1);
    const workContent = work_item.work_items;

    // Initialize Parent Elements & Their Classes
    const workSection = document.createElement("section");
    workSection.classList.add("work--content");
    workSection.setAttribute('panel', work_type);
    const workHeader = document.createElement("div");
    workHeader.classList.add("work--header");
    const work_itemsContainer = document.createElement("div");
    work_itemsContainer.classList.add("work--list");

    // Populate Work Header
    const workHeaderLabel = document.createElement("h3");
    workHeaderLabel.classList.add("label");
    workHeaderLabel.textContent = work_type_label;
    const workHeaderButton = document.createElement("button");
    workHeaderButton.classList.add("button--close");
    const workHeaderButtonIcon = document.createElement("i");
    workHeaderButtonIcon.classList.add("fa-solid", "fa-xmark");
    // Append Work Header Content
    workHeaderButton.appendChild(workHeaderButtonIcon);
    workHeader.appendChild(workHeaderLabel);
    workHeader.appendChild(workHeaderButton);

    // --- Work Items --- //
    if( work_type !== 'about' ) {

      // Populate Work Items
      for( const work_itemContent of workContent ) {
        // Item Variables
        const itemName = work_itemContent.imageName;
        const itemSrc = "https://ghostpalette.github.io/images/" + work_type + "/" + work_itemContent.imageSrc;
        const itemLabel = work_itemContent.imageCaption;

        // Element Variables & Populate Classes + Attributes
        const work_itemDiv = document.createElement("div");
        work_itemDiv.classList.add("work--item");
        const work_itemLightBox = document.createElement("a");
        work_itemLightBox.setAttribute("href", itemSrc);
        work_itemLightBox.setAttribute("data-lightbox", itemName);
        work_itemLightBox.setAttribute("data-title", itemLabel);
        const work_itemImage = document.createElement("img");
        work_itemImage.setAttribute("src", itemSrc);

        // Nest Elements
        work_itemLightBox.appendChild(work_itemImage);
        work_itemDiv.appendChild(work_itemLightBox);
        // Append Content
        work_itemsContainer.appendChild(work_itemDiv);
      }
    
    // --- About Section --- //
    } else {
      
      

    }
  
    // Nest Elements
    workSection.appendChild(workHeader);
    workSection.appendChild(work_itemsContainer);
    // Append to Content
    main.appendChild(workSection);

  }
}

// Populate
populate();