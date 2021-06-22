// display feature buttons
async function displayFeatures() {
  const features = await axios.get('/features');
  console.log(features.data);

  for (let i = 0; i < features.data.length; i += 1) {
    // const btn = document.createElement('button');
    // document.body.appendChild(btn);
    // btn.innerText = features.data[i].name;
    // btn.setAttribute('id', features.data[i].id);

    const lable = document.createElement('lable');
    document.body.appendChild(lable);
    lable.innerText = features.data[i].name;
    lable.setAttribute('for', features.data[i].id);
    lable.setAttribute('id', 'lable');

    const option = document.createElement('input');
    document.body.appendChild(option);
    option.setAttribute('type', 'radio');
    option.setAttribute('name', 'radio');
    option.setAttribute('id', features.data[i].id);
    option.setAttribute('value', features.data[i].id);
  }
}
// function creates bug list
async function displayBugList() {
  const bugsList = await axios.get('/bugs');
  const container = document.createElement('div');
  container.setAttribute('class', 'container mt-5');
  document.body.appendChild(container);
  const h2 = document.createElement('h2');
  container.appendChild(h2);
  h2.innerText = 'List of bugs';
  for (let i = 0; i < bugsList.data.length; i += 1) {
    const bug = bugsList.data[i].problem;
    const p = document.createElement('p');
    container.appendChild(p);
    p.innerText = `${i + 1}. ${bug}`;
  }
}

// call back function when bug report form is submitted.
async function submitForm(req) {
  const problem = document.getElementById('problemInput').value;
  console.log(problem);
  const errorText = document.getElementById('errorInput').value;
  console.log(errorText);
  const commit = document.getElementById('commitInput').value;
  console.log(commit);

  const featureId = document.getElementById('lable').value;
  console.log(featureId);

  const bugData = {
    problem,
    errorText,
    commit,
  };
  await axios.post('/', bugData).then((response) => {
    console.log(response);
  }).catch((err) => {
    console.log(err.stack);
  });
  document.getElementById('main-container').remove();
}

// event listner callback function for btn
function btnClicked() {
  const mainContainer = document.createElement('div');
  mainContainer.setAttribute('id', 'main-container');
  document.body.appendChild(mainContainer);

  const probContainerDiv = document.createElement('div');
  mainContainer.appendChild(probContainerDiv);
  const problemLable = document.createElement('label');
  problemLable.innerText = 'Problem: ';
  problemLable.setAttribute('for', 'problemInput');
  probContainerDiv.appendChild(problemLable);

  const problemInput = document.createElement('input');
  problemInput.setAttribute('id', 'problemInput');
  problemInput.setAttribute('name', 'problem');
  probContainerDiv.appendChild(problemInput);

  // error text input field.
  const errorContainerDiv = document.createElement('div');
  mainContainer.appendChild(errorContainerDiv);
  const errorLable = document.createElement('label');
  errorLable.innerText = 'errorText: ';
  errorLable.setAttribute('for', 'errorInput');
  errorContainerDiv.appendChild(errorLable);

  const errorInput = document.createElement('input');
  errorInput.setAttribute('id', 'errorInput');
  errorContainerDiv.appendChild(errorInput);

  // commit input field
  const commitContainerDiv = document.createElement('div');
  mainContainer.appendChild(commitContainerDiv);
  const commitLable = document.createElement('label');
  commitLable.innerText = 'Commit: ';
  commitLable.setAttribute('for', 'commitInput');
  commitContainerDiv.appendChild(commitLable);

  const commitInput = document.createElement('input');
  commitInput.setAttribute('id', 'commitInput');
  commitContainerDiv.appendChild(commitInput);

  const submitBtnDiv = document.createElement('div');
  mainContainer.appendChild(submitBtnDiv);
  const submitBtn = document.createElement('button');
  submitBtn.innerText = 'Submit';
  submitBtnDiv.appendChild(submitBtn);
  submitBtn.addEventListener('click', submitForm);

  // feature buttons
  displayFeatures();
}

// btn appears when page is loaded.
function pageLoaded() {
  const btn = document.createElement('button');
  btn.setAttribute('class', 'btn btn-outline-danger m-5');
  btn.innerHTML = 'Create a bug';
  document.body.appendChild(btn);
  btn.addEventListener('click', btnClicked);
  displayBugList();
}
