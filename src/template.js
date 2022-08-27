function startHTML() { 
    return `
<!DOCTYPE html>
<html lang="en">
    
<head>
    <meta charset="UTF-8">
    <link rel="stylesheet" href="../dist/style.css" />
    <title>Team Profiles</title>
</head>
    
<body>
    <header>
        <h1>Team Profiles</h1>
    </header>

    <main>
`};

function endHTML() {
    return `
    </main>
</body>
</html>
`
};

function managerCard(manager) {
    return`
<div>
    <h2>${manager.name}</h2>
    <p>${manager.id}</p>
    <p>${manager.email}</p>
    <p>${manager.officeNumber}</p>
</div>
`
};

function internCard(intern) {
    return`
<div>
    <h2>${intern.name}</h2>
    <p>${intern.id}</p>
    <p>${intern.email}</p>
    <p>${intern.school}</p>
</div>
`
};

function engineerCard(engineer) {
    return`
<div>
    <h2>${engineer.name}</h2>
    <p>${engineer.id}</p>
    <p>${engineer.email}</p>
    <p>${engineer.github}</p>
</div>
`
};

function createHTML(objectArray, objectCount) {
    let contentHTML = [];
    contentHTML.push(startHTML());
    contentHTML.push(managerCard(objectArray[0]));
    for (let i = 1; i < objectCount[0]+1; i++) {
        contentHTML.push(internCard(objectArray[i]));
    };
    for (let i = 1+objectArray[0]; i < objectCount[0]+objectCount[1]+1; i++) {
        contentHTML.push(engineerCard(objectArray[i]));
    };
    contentHTML.push(endHTML());
    return contentHTML.join('');
};

// Exports the createHTML function so that in can be imported in index.js
module.exports = createHTML;