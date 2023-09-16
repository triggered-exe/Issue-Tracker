// JavaScript to initialize Select2
$(document).ready(function() {
    $('.js-select2').select2();
});

// Function to filter list items based on user input
function filterItems(e) {
    e.preventDefault();

    let labels = document.querySelectorAll(".select2-selection__choice__display");
    console.log(labels)
    let labelsArray = [];
    labels.forEach(label => {
        labelsArray.push(label.innerHTML);
    })
    let fiterTitle = document.getElementById('filterTitle').value.toLowerCase();
    let filterDescription = document.getElementById('filterDescription').value.toLowerCase();
    
    
    
    let filteredIssues = [];

    for (let i = 0; i < issues.length; i++) {
          let item = issues[i];
         const labelsMatch = labelsArray.every((label) =>
            item.labels.includes(label));
        const titleMatch = (item.title === fiterTitle) || ( fiterTitle === "");
        const descriptionMatch = (item.description === filterDescription) || ( filterDescription === "");
        
        // Check if the item matches all the search criteria
             console.log(labelsMatch)
            console.log(titleMatch)
            console.log(descriptionMatch)
        if (labelsMatch && titleMatch && descriptionMatch) {
            filteredIssues.push(item)
        }
    }
    
    // Display the filtered list items
    const issueList = document.getElementById('issueList');
    issueList.innerHTML = '';
    
    if(filteredIssues.length === 0) {
        issueList.innerHTML = '<h2>No issues found</h2>'
        return;
    }
    filteredIssues.forEach(issue => {
       const li = document.createElement('li');
       li.innerHTML = `
       <h3><b>Title: </b>${ issue.title }</h3>
        <p><b>Description: </b>${ issue.description }</p>
        <p><b>Author: </b>${ issue.description }</p>
       `
       issueList.appendChild(li);
    }
    
    )
}


let filterButton = document.getElementById('filter-button');
filterButton.addEventListener('click', (event) => filterItems(event)); // Call filterItems function when clicking filter-button.

