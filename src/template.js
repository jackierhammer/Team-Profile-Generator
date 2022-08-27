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
        <h1 class="title-card">Team Profiles</h1>
    </header>

    <main class="container">
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
<div class="card">
    <h2>Manager: ${manager.name}</h2>
    <p>ID: ${manager.id}</p>
    <p>Email: <a href="mailto:${manager.email}">${manager.email}</a></p>
    <p>Office Number: ${manager.officeNumber}</p>
</div>
`
};

function internCard(intern) {
    return`
<div class="card">
    <h2>Intern: ${intern.name}</h2>
    <p>ID: ${intern.id}</p>
    <p>Email: <a href="mailto:${intern.email}">${intern.email}</a></p>
    <p>Schhol: ${intern.school}</p>
</div>
`
};

function engineerCard(engineer) {
    return`
<div class="card">
    <h2>Engineer: ${engineer.name}</h2>
    <p>ID: ${engineer.id}</p>
    <p>Email: <a href="mailto:${engineer.email}">${engineer.email}</a></p>
    <p>Github Profile: <a href="https://github.com/${engineer.github}">${engineer.github}</a></p>
</div>
`
};

function createHTML(objectArray, objectCount) {
    let contentHTML = [];
    contentHTML.push(startHTML());
    contentHTML.push(managerCard(objectArray[0]));
    const internEnd = objectCount[0]+1;
    const engineerEnd = objectCount[0]+objectCount[1]+1;
    for (let i = 1; i < internEnd; i++) {
        contentHTML.push(internCard(objectArray[i]));
    };
    for (let i = internEnd; i < engineerEnd; i++) {
        contentHTML.push(engineerCard(objectArray[i]));
    };
    contentHTML.push(endHTML());
    return contentHTML.join('');
};

// Exports the createHTML function so that in can be imported in index.js
module.exports = createHTML;