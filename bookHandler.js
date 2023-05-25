const sectionContainer = document.getElementById("book_section");

function renderBooks(items) {
    sectionContainer.innerHTML = "";
    items.forEach((item) => {
        const mainContainer = document.createElement("div");
        const titleContainer = document.createElement("span");

        const wrapperOfContentContainer = document.createElement("div");
        const contentContainer = document.createElement("div");
        const paragraph = document.createElement("p");

        mainContainer.classList.add("main_story_container");
        titleContainer.classList.add("title");
        wrapperOfContentContainer.classList.add("wrapper");
        contentContainer.classList.add("body_of_story_container");


        mainContainer.setAttribute("id", `${item.title}${item.id}`);
        titleContainer.textContent = item.title;
        paragraph.innerText = item.content;


        mainContainer.append(titleContainer);
        mainContainer.append(wrapperOfContentContainer);
        wrapperOfContentContainer.append(contentContainer);
        contentContainer.append(paragraph);
        sectionContainer.append(mainContainer);
    });
};