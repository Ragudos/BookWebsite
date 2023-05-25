function handleError(error) {
    switch(error) {
        case "short_content":
            alert("The story is very short! :(");
            throw new Error("The story you provided is very short!");
    }
};