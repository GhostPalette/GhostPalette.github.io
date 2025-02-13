// --- Async Populate Function
async function populate() {
  const request_url = "https://ghostpalette.github.io/content.json";
  const request = new Request(request_url);

  const response = await fetch(request);
  const content = await response.json();

  populate_nav_work(content.work);
  populate_content(content);
}

// --- Populate Nav: Work
function populate_nav_work(content) {
  // Grab Nav Item
  const nav_work = document.querySelector(".nav--work");
  // Loop Through JSON to Produce Work Buttons 
  for( const work_item of content ) {
    // WorkType Variables
    const work_type = work_item.work_type;
    const work_type_label = work_type.charAt(0).toUpperCase() + work_type.slice(1);
    // Create Elements
    const my_work_button = document.createElement("button");
    // Populate Button Element
    my_work_button.classList.add('work--btn');
    // my_work_button.setAttribute('href', '#' + work_type);
    my_work_button.setAttribute('data_work_type', work_type);
    my_work_button.textContent = work_type_label;
    // Append Button to Content
    nav_work.appendChild(my_work_button);
  }
}

// --- Populate Content: Work
function populate_content(content) {
  // Grab Main Body
  const main = document.querySelector("main");

  // ----- WORK ----- //
  // Loop Through JSON to Product Panels with Work
  for( const work_item of content.work ) {
    // Work Variables
    const work_type = work_item.work_type;
    const work_content = work_item.work_projects;

    // Create Work Section & Header
    const work_section = create_section_and_header(work_type);

    // Create Work Items Element & Classes
    const work_items_container = document.createElement("div");
    work_items_container.classList.add("work--list", "container");

    for( const project of work_content ) {
      // Item Variables
      const project_cover = "https://ghostpalette.github.io/images/" + work_type + "/" + project.project_cover;
      const project_label = project.project_label;
      const project_items = project.project_items;

      // Element Variables & Populate Classes + Attributes
      const project_div = document.createElement("div");
      project_div.classList.add("work--project");
      const project_cover_lightbox = document.createElement("a");
      project_cover_lightbox.setAttribute("href", project_cover);
      project_cover_lightbox.setAttribute("data-lightbox", project.project_cover);
      project_cover_lightbox.setAttribute("data-title", project_label);
      const project_cover_image = document.createElement("img");
      project_cover_image.setAttribute("src", project_cover);

      // Nest Elements
      project_cover_lightbox.appendChild(project_cover_image);
      project_div.appendChild(project_cover_lightbox);
      // Append Content
      work_items_container.appendChild(project_div);
    }

    // Nest Work Items
    work_section.appendChild(work_items_container);
    // Append to Section to Content
    main.appendChild(work_section);
  }

  // ----- PAGES ----- //
  // Loop Through JSON to Product Panels with Work
  for( const page of content.pages ) {
    // Page Variables
    const page_name = page.page_name;
    const page_content = page.page_content;

    // Create Work Section & Header
    const page_section = create_section_and_header(page_name, 'page');

    // Create Content Element
    const page_content_div = document.createElement("div");
    page_content_div.classList.add("page--content", "container");
    page_content_div.textContent = page_content;

    // Nest Page Items
    page_section.appendChild(page_content_div);
    // Append to Section to Content
    main.appendChild(page_section);
  }

}

// ----- Functions ----- //
function create_section_and_header( section_name, type = 'work' ) {
  // Variables
  const section_label = section_name.charAt(0).toUpperCase() + section_name.slice(1);;

  // Initialize Parent Elements & Their Classes
  const item_section = document.createElement("section");
  item_section.setAttribute('data_type', type);
  item_section.setAttribute('data_' + type + '_type', section_name);
  const item_header = document.createElement("div");
  item_header.classList.add(type + "--header", "container");

  // Populate Header
  const item_header_label = document.createElement("h2");
  item_header_label.classList.add("label");
  item_header_label.textContent = section_label;

  // Append Header Content
  item_header.appendChild(item_header_label);

  // Append Items to Section
  item_section.appendChild(item_header);

  return item_section;
}


//     // Populate Work Items
//     for( const work_item_content of work_content ) {
//       // Item Variables
//       const item_name = work_item_content.image_name;
//       const item_src = "https://ghostpalette.github.io/images/" + work_type + "/" + work_item_content.image_src;
//       const item_label = work_item_content.image_caption;

//       // Element Variables & Populate Classes + Attributes
//       const work_item_div = document.createElement("div");
//       work_item_div.classList.add("work--item");
//       const work_item_light_box = document.createElement("a");
//       work_item_light_box.setAttribute("href", item_src);
//       work_item_light_box.setAttribute("data-lightbox", work_type);
//       work_item_light_box.setAttribute("data-title", item_label);
//       const work_item_image = document.createElement("img");
//       work_item_image.setAttribute("src", item_src);

//       // Nest Elements
//       work_item_light_box.appendChild(work_item_image);
//       work_item_div.appendChild(work_item_light_box);
//       // Append Content
//       work_items_container.appendChild(work_item_div);
//     }

//     // Nest Work Items
//     work_section.appendChild(work_items_container);
//     // Append to Section to Content
//     main.appendChild(work_section);
//   }


// --- Populate Footer with Buttons
// function populate_footer_buttons(content) {
//   // Grab Footer Item
//   const footer_button_container = document.querySelector("footer .footer--menu");
//   // Loop Through JSON to Produce Footer Buttons
//   const pages = content.pages;
//   for( const page of pages ) {
//     // Pages Variables
//     const page_name = page.page_name;
//     const page_label = page_name.charAt(0).toUpperCase() + page_name.slice(1);
//     // Create Elements
//     const my_footer_button = document.createElement("button");
//     // Populate Element
//     my_footer_button.classList.add('footer--button');
//     my_footer_button.setAttribute('page', page_name);
//     my_footer_button.textContent = page_label;
//     // Append Button to Content
//     footer_button_container.appendChild(my_footer_button);
//   }
// }

// --- Populate
populate();