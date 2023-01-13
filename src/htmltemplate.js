const createManager = function(manager) {
    return 
    `
    <div class="card d-inline-flex" style="width: 18rem;">
        <div class="card-body">
             <h5 class="card-title">${manager.name}</h5>
            </div>
    <ul class="list-group list-group-flush">
      <li class="list-group-item">${manager.id}</li>
      <li class="list-group-item">${manager.position}</li>
    </ul>
    <div class="card-body">
      <a href="#" class="card-link">${manager.officeNumber}</a>
      <a href="mailto:${manager.email}" class="card-link">${manager.email}</a>
    </div>
  </div>
        
    `
}

const createEngineer = function(engineer) {
    return 
    `
    <div class="card d-inline-flex" style="width: 18rem;">
    <div class="card-body">
         <h5 class="card-title">${engineer.name}</h5>
        </div>
    <ul class="list-group list-group-flush">
  <li class="list-group-item">${engineer.id}</li>
  <li class="list-group-item">${engineer.position}</li>
    </ul>
    <div class="card-body">
  <a href="mailto:${engineer.gitHub}" class="card-link">${engineer.gitHub}</a>
  <a href="mailto:${engineer.email}" class="card-link">${engineer.email}</a>
</div>
</div>

    `
}

const createIntern = function(intern) {
    return
    `
    <div class="card d-inline-flex" style="width: 18rem;">
        <div class="card-body">
             <h5 class="card-title">${intern.name}</h5>
            </div>
    <ul class="list-group list-group-flush">
      <li class="list-group-item">${intern.id}</li>
      <li class="list-group-item">${intern.position}</li>
    </ul>
    <div class="card-body">
      <a href="#" class="card-link">${intern.school}</a>
      <a href="mailto:${intern.email}" class="card-link">${intern.email}</a>
    </div>
  </div>
    
    `
}

let htmlTop = 
`
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-Zenh87qX5JnK2Jl0vWa8Ck2rdkQ2Bzep5IDxbcnCeuOxjzrPF/et3URy9Bv1WTRi" crossorigin="anonymous">
    <link rel="stylesheet" href="../dist/style.css">
</head>
<body>
    <header class=" d-flex justify-content-center headerBack">
        <h1>Meet the Team</h1>
    </header>
    <main class = "container padding">
`


let htmlBot =
`
</main>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-OERcA2EqjJCMA+/3y+gxIOqMEjwtxJY7qPCqsdltbNJuaOe923+mo//f6V8Qbsw3" crossorigin="anonymous">       
    </script>
</body>
</html>

`

const createHtml = (data) => {
    for (i = 0; i < data.length; i++) {
        if (data[i].getPosition() === 'Manager') {
            htmlTop += createManager(data[i])
        } if (data[i].getPosition() === 'Engineer') {
            htmlTop += createEngineer(data[i])
        } if (data[i].getPosition() === 'Intern') {
            htmlTop += createIntern(data[i])
        }
    }

    htmlTop += htmlBot;
    return htmlTop;
}

module.exports = createHtml;