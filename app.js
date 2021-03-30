// Get UI elements

const codeInput = document.getElementById("codeInput");
const getCodeDefBtn = document.getElementById("getCodeDef");
const getGroupCodesBtn = document.querySelector("#getGroupCodes");
const getFieldRelatedCodesBtn = document.querySelector("#getFieldRelatedCodes");
const resultsTable = document.querySelector("#resultstable");
const resultsGroupCount = document.querySelector("#resultsGroupCount");
const alertContainer = document.querySelector("#alert-container");
const grouplistMenu = document.querySelector("#groupListMenu");
const fieldValueForm = document.querySelector("#fieldValueForm");
const filterByDescBtn = document.querySelector("#filterByDesc");

let airStatusCodes,
  codeOrGroupName = codeInput.value,
  fieldNames = [],
  fieldValues = [],
  allFieldNames,
  allFieldValues = {};

const getCodeIndices = (query) => {
  let airStatusCodesFields = airStatusCodes.map((code) => code.values);
  return airStatusCodesFields.map((field) => {
    return query in field ? true : false;
  });
};

const searchByDescription = () => {};
removeFieldValueForm = (i) => {
  console.log({ i });
  console.log({ fieldValueForm });
  fieldValueForm.removeChild(fieldValueForm.childNodes[i]);
};

const soloSearch = (i) => {
  console.log({ i });
  let fieldName = document.querySelector(`#fieldName-${i}`);
  let fieldValue = document.querySelector(`#fieldValue-${i}`);
  console.log({ fieldName, fieldValue });
};
const createFieldValueForm = (i) => {
  let newForm = document.createElement("div");
  newForm.setAttribute("class", "row");
  let formCol1 = document.createElement("div");
  let formCol2 = document.createElement("div");
  let formCol3 = document.createElement("div");
  let formGroup1 = document.createElement("div");
  let formGroup2 = document.createElement("div");
  let fieldNameSelect = document.createElement("select");
  let fieldNameLabel = document.createElement("label");
  let fieldValueInput = document.createElement("input");
  let fieldValueLabel = document.createElement("label");
  fieldNameSelect.setAttribute("class", "form-control");
  fieldNameSelect.setAttribute("id", `fieldName-${i}`);
  fieldNameLabel.setAttribute("for", `fieldName-${i}`);
  fieldNameLabel.innerText = "Select Field Name";
  allFieldNames.forEach((fieldname) => {
    let fieldoption = document.createElement("option");
    fieldoption.setAttribute("value", fieldname);
    fieldoption.innerText = fieldname;
    fieldNameSelect.appendChild(fieldoption);
  });

  fieldValueInput.setAttribute("class", "form-control");
  fieldValueInput.setAttribute("type", "text");
  fieldValueInput.setAttribute("placeholder", "Enter Field Value");
  fieldNameSelect.addEventListener("change", (e) => {
    const { value } = e.target;
    console.log({ value: e.target.value });
    fieldValueInput.setAttribute("placeholder", allFieldValues[value]);
  });
  fieldValueInput.setAttribute("id", `fieldValue-${i}`);
  fieldValueLabel.setAttribute("for", `fieldValue-${i}`);
  fieldValueLabel.innerText = "Enter Field Value";
  formGroup1.setAttribute("class", "form-group");
  formGroup1.appendChild(fieldNameLabel);
  formGroup1.appendChild(fieldNameSelect);
  formCol1.appendChild(formGroup1);

  formGroup2.setAttribute("class", "form-group");
  formGroup2.appendChild(fieldValueLabel);
  formGroup2.appendChild(fieldValueInput);
  formCol2.appendChild(formGroup2);
  formCol1.setAttribute("class", "col-3");
  formCol2.setAttribute("class", "col-3");
  formCol3.setAttribute("class", "col-6 mt-3");
  formCol3.style.display = "flex";
  formCol3.style.justifyContent = "flex-start";
  formCol3.style.alignItems = "center";

  formCol3.innerHTML = `<button onClick="createFieldValueForm(${
    i + 1
  })" class="btn btn-primary">Add Field + value</button>
  <button onClick="removeFieldValueForm(${i})" ${
    i == 0 ? "disabled" : ""
  } class="btn btn-danger mx-2">
    Remove Field + value
  </button>
  <button class="btn btn-warning mx-2" onClick="soloSearch(${i})">Solo Search</button>`;

  newForm.appendChild(formCol1);
  newForm.appendChild(formCol2);
  newForm.appendChild(formCol3);

  fieldValueForm.appendChild(newForm);

  console.log({ newForm });
};

const getAllPossibleValues = (query) => {
  codeIndices = getCodeIndices(query);
  codesContainingQuery = [];
  codeIndices.forEach((codeIndex, i) => {
    if (codeIndex) {
      codesContainingQuery.push(airStatusCodes[i]);
    }
  });
  return codesContainingQuery;
};

const showAlert = (className, message) => {
  console.log({ className, message });
  alertContainer.innerHTML = `<div class="alert alert-${className} mt-2" role="alert">
    ${message}
  </div>`;
  alertContainer.style.height = "auto";
  setTimeout(() => {
    alertContainer.style.height = "0px";
    alertContainer.classList.remove("active");
  }, 3000);
};

const getALlStatusCodes = async () => {
  const res = await fetch("allCodes.json");
  const data = await res.json();
  console.log({ data });
  airStatusCodes = data;
  return data;
};

const getAllFieldNames = () => {
  return [
    ...new Set(airStatusCodes.flatMap((codeObject) => codeObject.fields)),
  ];
};

const getAllFieldValues = () => {
  const allValueObjects = airStatusCodes.map((codeObject) => codeObject.values);
  console.log({ allValueObjects });
  // let fieldNames = [...new Set(allValueObjects.flatMap(valueObject => Object.keys(valueObject)))]
  for (let i = 0; i < allValueObjects.length; i++) {
    const valueObject = allValueObjects[i];
    if (Object.keys(valueObject).length === 0) {
      continue;
    }
    for (const key in valueObject) {
      if (allFieldValues[key]) {
        allFieldValues[key].push(valueObject[key]);
      } else {
        allFieldValues[key] = [];
        allFieldValues[key].push(valueObject[key]);
      }
      allFieldValues[key] = [...new Set(allFieldValues[key])];
    }
  }

  console.log({ allFieldValues });
};

const getCodeGroups = () => {
  const groupedAirStatusCodes = airStatusCodes.filter((codeObject) =>
    codeObject.group ? true : false
  );
  let groupings = [
    ...new Set(groupedAirStatusCodes.map((codeObject) => codeObject.group)),
  ];
  let totalGroupings = {};
  groupings.forEach((group) => {
    totalGroupings[group] = [
      ...groupedAirStatusCodes.filter(
        (codeObject) => codeObject.group == group
      ),
    ].length;
  });
  totalGroupings.ungrouped = [
    ...airStatusCodes.filter((codeObject) => (codeObject.group ? false : true)),
  ].length;
  console.log({ totalGroupings });
  return totalGroupings;
};

const getCodeDefinition = (code) => {
  console.log({ code });
  return airStatusCodes.filter((codeObject) => codeObject.code.includes(code));
};

const getCodesByGroup = (groupname) => {
  if (groupname == "ungrouped") {
    return airStatusCodes.filter((codeObject) =>
      codeObject.group ? false : true
    );
  }
  return airStatusCodes.filter((codeObject) => codeObject.group === groupname);
};

const test = (groupname) => {
  groupmembers = getCodesByGroup(groupname);
  displayStatusCodes(groupmembers);
  showAlert(
    `${groupmembers.length > 0 ? "success" : "warning"}`,
    `<strong>${groupmembers.length}</strong> Code results found`
  );
};

const displayGroupCounts = (groupings) => {
  groupnames = Object.keys(groupings);
  resultsGroupCount.innerHTML = "";
  grouplistMenu.innerHTML = "";
  groupnames.forEach((name) => {
    resultsGroupCount.innerHTML += `
        <button type="button" data="${name}" onclick="test('${name}')" class="btn btn-secondary my-2">
            ${name}<span class="badge badge-light ml-2">${groupings[name]}</span>
        </button>`;

    grouplistMenu.innerHTML += `
        <a class="dropdown-item" onclick="test('${name}')">${name}</a>
        `;
  });
};

const displayStatusCodes = (codeObject) => {
  resultsTable.innerHTML = "";
  if (codeObject.length > 0) {
    codeObject.forEach((object, i) => {
      resultsTable.innerHTML += `<tr>
            <th >${i + 1}</th>
            <td>${object.code}</td>
            <td>${object.fields}</td>
            <td>${JSON.stringify(object.values)}</td>
            <td>${object.group}</td>
            <td>${object.shortDesc}</td>
          </tr>`;
    });
  }
};

codeInput.addEventListener("input", (e) => {
  codeOrGroupName = e.target.value;
});

filterByDescBtn.addEventListener("click", (e) => {
  e.preventDefault();
  // console.log({codeOrGroupName});
  if (codeOrGroupName) {
    console.log({ desc: codeOrGroupName });
    let filteredResults = airStatusCodes.filter((codeObject) =>
      codeObject.shortDesc.toLowerCase().includes(codeOrGroupName.toLowerCase())
    );
    console.log({ filteredResults });
    displayStatusCodes(filteredResults);
    showAlert(
      `${filteredResults.length > 0 ? "success" : "warning"}`,
      `<strong>${filteredResults.length}</strong> Code results found`
    );
  } else {
    alert("Please enter a description");
  }
});

getFieldRelatedCodesBtn.addEventListener("click", (e) => {
  e.preventDefault();
  if (!codeOrGroupName) {
    alert("Please enter a code or Group name");
    return false;
  }
  const members = getAllPossibleValues(codeOrGroupName);
  displayStatusCodes(members);
  showAlert(
    `${members.length > 0 ? "success" : "warning"}`,
    `<strong>${members.length}</strong> Code results found`
  );
});

codeInput.addEventListener("input", (e) => {
  codeOrGroupName = e.target.value;
});

getCodeDefBtn.addEventListener("click", (e) => {
  e.preventDefault();
  if (!codeOrGroupName) {
    alert("Please enter a code or Group name");
    return false;
  }
  const codeDefinitions = getCodeDefinition(codeOrGroupName);
  displayStatusCodes(codeDefinitions);
  showAlert(
    `${codeDefinitions.length > 0 ? "success" : "warning"}`,
    `<strong>${codeDefinitions.length}</strong> Code results found`
  );
});

const resetCodesTable = async () => {
  getALlStatusCodes().then((data) => {
    displayStatusCodes(data);
    displayGroupCounts(getCodeGroups());
    showAlert(
      `${data.length > 0 ? "success" : "warning"}`,
      `<strong>${data.length}</strong> Code results found`
    );
    allFieldNames = getAllFieldNames();
    console.log({ allFieldValues: getAllFieldValues() });
    createFieldValueForm(0);
  });
};

resetCodesTable();
