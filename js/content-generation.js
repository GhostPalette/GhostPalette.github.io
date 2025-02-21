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
    const my_work_button = document.createElement("a");
    // Populate Button Element
    my_work_button.classList.add('btn', 'work--btn');
    my_work_button.setAttribute('href', '#' + work_type);
    my_work_button.setAttribute('data_work_type', work_type);
    my_work_button.textContent = work_type_label;
    // Append Button to Content
    nav_work.appendChild(my_work_button);
  }
}

// --- Populate Content: Work
function populate_content(content) {
  // Grab Main Body
  const main = document.querySelector("main .content--work");

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

}

// ----- Functions ----- //
function create_section_and_header( section_name, type = 'work' ) {
  // Variables
  const section_label = section_name.charAt(0).toUpperCase() + section_name.slice(1);;

  // Initialize Parent Elements & Their Classes
  const item_section = document.createElement("section");
  item_section.setAttribute('id', section_name);
  item_section.setAttribute('data_type', type);
  item_section.setAttribute('data_' + type + '_type', section_name);
  const item_header = document.createElement("div");
  item_header.classList.add(type + "--header", "container");

  // Populate Header
  const item_header_label = document.createElement("h2");
  item_header_label.classList.add("label");
  item_header_label.textContent = section_label;

  if( type === 'work') {
  item_header_label.classList.add("sr-only");
  }

  // Append Header Content
  item_header.appendChild(item_header_label);

  // Append Items to Section
  item_section.appendChild(item_header);

  return item_section;
}

// --- Populate
populate();