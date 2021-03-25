// Get UI elements 

const codeInput = document.getElementById('codeInput');
const getCodeDefBtn = document.getElementById('getCodeDef');
const getGroupCodesBtn = document.querySelector('#getGroupCodes');
const getFieldRelatedCodesBtn = document.querySelector('#getFieldRelatedCodes');
const resultsTable = document.querySelector('#resultstable');
const resultsGroupCount = document.querySelector('#resultsGroupCount')
const alertContainer = document.querySelector('#alert-container')
const grouplistMenu = document.querySelector('#groupListMenu')
let  airStatusCodes, codeOrGroupName = codeInput.value;

const getCodeIndices = (query) => {
    let airStatusCodesFields = airStatusCodes.map(code => code.values);
    return airStatusCodesFields.map(field => {
        return query in field ? true : false;
    })
}

const getAllPossibleValues = (query) => {
    codeIndices = getCodeIndices(query)
    codesContainingQuery = [];
    codeIndices.forEach((codeIndex, i) => {
        if (codeIndex) {
            codesContainingQuery.push(airStatusCodes[i]);
        }
    });
    return codesContainingQuery
}

const showAlert = (className, message) => {
    console.log({className, message});
    alertContainer.innerHTML = 
    `<div class="alert alert-${className} mt-2" role="alert">
    ${message}
  </div>`
    alertContainer.style.height = 'auto'
    setTimeout(() => {
    alertContainer.style.height = '0px'
        alertContainer.classList.remove('active')
    }, 3000);
}

const getALlStatusCodes = async () => {
    const res = await fetch('allCodes.json')
    const data = await res.json()
    console.log({data});
    airStatusCodes = data;
    return data
}

const getCodeGroups = () => {
    const groupedAirStatusCodes = airStatusCodes.filter(codeObject => codeObject.group ? true: false)
    let groupings = [...new Set(groupedAirStatusCodes.map(codeObject => codeObject.group))];
    let totalGroupings = {};
    groupings.forEach((group) => {
        totalGroupings[group] = [...groupedAirStatusCodes.filter(codeObject => codeObject.group == group)].length
    })
    totalGroupings.ungrouped = [...airStatusCodes.filter(codeObject => codeObject.group ? false: true)].length
    console.log({totalGroupings})
    return totalGroupings
}

const getCodeDefinition = (code) => {
    console.log({code});
    return airStatusCodes.filter(codeObject => codeObject.code.includes(code))
}

const getCodesByGroup = (groupname) => {
    if(groupname == 'ungrouped'){
        return airStatusCodes.filter(codeObject => codeObject.group ? false : true)
    }
    return airStatusCodes.filter(codeObject => codeObject.group === groupname)
}

const test = (groupname) => {
   groupmembers = getCodesByGroup(groupname); 
   displayStatusCodes(groupmembers);
   showAlert(`${groupmembers.length > 0 ? 'success': 'warning'}`, `<strong>${groupmembers.length}</strong> Code results found`)
}

const displayGroupCounts = (groupings) => {
    groupnames = Object.keys(groupings)
    resultsGroupCount.innerHTML = ''
    grouplistMenu.innerHTML = ''
    groupnames.forEach(name => {
        resultsGroupCount.innerHTML+=
        `
        <button type="button" data="${name}" onclick="test('${name}')" class="btn btn-secondary my-2">
            ${name}<span class="badge badge-light ml-2">${groupings[name]}</span>
        </button>`

        grouplistMenu.innerHTML += `
        <a class="dropdown-item" onclick="test('${name}')">${name}</a>
        `
    })
}

const displayStatusCodes = (codeObject) => {
    resultsTable.innerHTML = ''
    if(codeObject.length > 0 ) {
        codeObject.forEach((object, i) => {
            resultsTable.innerHTML +=
            `<tr>
            <th >${i+1}</th>
            <td>${object.code}</td>
            <td>${object.fields}</td>
            <td>${JSON.stringify(object.values)}</td>
            <td>${object.group}</td>
            <td>${object.shortDesc}</td>
          </tr>`;
        });
    }
}

codeInput.addEventListener('input', (e) => {
    codeOrGroupName = e.target.value
})

getCodeDefBtn.addEventListener('click', (e) => {
    e.preventDefault();
    if(!codeOrGroupName){
        alert('Please enter a code or Group name')
        return false;
    }
    const codeDefinitions = getCodeDefinition(codeOrGroupName)
    displayStatusCodes(codeDefinitions);
    showAlert(`${codeDefinitions.length > 0 ? 'success': 'warning'}`, `<strong>${codeDefinitions.length}</strong> Code results found`)
})

getFieldRelatedCodesBtn.addEventListener('click', (e) => {
    e.preventDefault();
    if(!codeOrGroupName){
        alert('Please enter a code or Group name')
        return false;
    }
    const members = getAllPossibleValues(codeOrGroupName)
    displayStatusCodes(members)
    showAlert(`${members.length > 0 ? 'success': 'warning'}`, `<strong>${members.length}</strong> Code results found`)

})

const resetCodesTable = async () => {
    getALlStatusCodes().then((data) => {
        displayStatusCodes(data);
        displayGroupCounts(getCodeGroups());
        showAlert(`${data.length > 0 ? 'success': 'warning'}`, `<strong>${data.length}</strong> Code results found`)
    })
}

resetCodesTable()

