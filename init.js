project_id = 'GRNPRPL'
team = ["David Roulet", "Fabien Masson"]

inpProject.value = project_id

if (typeof(inpPerson) !== 'undefined') {
    team.forEach(element => {
        opt = document.createElement('option')
        opt.text = element
        inpPerson.appendChild(opt)
    });
}
