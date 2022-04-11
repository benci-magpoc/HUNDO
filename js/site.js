// getting the values from UI
function getValues() {
    let startValue = document.getElementById("startValue").value;
    let endtValue = document.getElementById("endValue").value;
    displayValues(startValue, endtValue);
}


function displayValues(start, end) {

    // getting the div element from the page
    element = document.getElementById("results");

    for (let i = start; i <= end; i++) {

        // create a new div for results
        let item = document.createElement("div");

        if (i % 2 == 0) {
            item.classList.add("boldItem");

        }
        item.classList.add("col-12");
        item.classList.add("col-md-3");


        //set the items to the div
        item.innerHTML = i;
        element.appendChild(item);
    }

    element.appendChild()
}
//function to cleaer numbers
function clearList() {
    document.getElementById("results").innerHTML = "";

}