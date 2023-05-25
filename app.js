
const textArea = document.getElementById('content_input');
const saveStory = document.getElementById("save_story");
const submitBtn = document.getElementById("submit_button");
textArea.onkeyup = handleChange;

let title = "";
let content = "";

function enableSubmit() {
    submitBtn.removeAttribute("disabled");
};

function disableSubmit() {
    submitBtn.setAttribute("disabled", "true");
}

function handleChange(caller) {
    if (!caller.target) {
        title = caller.value;
    } else if (caller.target) {
        content = caller.target.value;
    };

    const noWhiteSpaceTitle = title.replace(/\s/g, '');
    const noWhiteSpaceContent = content.replace(/\s/g, '');

    if (noWhiteSpaceTitle && noWhiteSpaceContent) {
        enableSubmit();
    } else {
        disableSubmit();
    }
};

function handleSubmit(e) {
    e.preventDefault();

    if (content.split(" ").length < 5) {
        return handleError("short_content");
    }
    const rawData = localStorage.getItem("stories"); 
    const items = rawData ? JSON.parse(rawData) : null;
    const lastItem = items ? items[items.length - 1] : undefined;
    const id = lastItem ? lastItem["id"] + 1 : 0;
    let toBeStored
    
    if (!items) {
        toBeStored = [
            {
                id,
                title,
                content
            }
        ];
    } else {
        toBeStored = [
            ...items,
            {
                id,
                title,
                content
            }
        ];
    }

    localStorage.setItem("stories", JSON.stringify(toBeStored));
    renderBooks(toBeStored);
};

saveStory.addEventListener("submit", handleSubmit);