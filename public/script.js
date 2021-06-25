/**
 * callback when new feature form is submitted
 */
async function submittedNewFeature() {
  const featureName = document.getElementById('featureName').value;
  console.log(featureName);
  const featuresData = {
    featureName,
  };
  await axios.post('/features', featuresData).then((response) => {
    console.log(response);
  }).catch((err) => {
    console.log(err.stack);
  });
}

/**
 * callback for create feature button click
 */
function renderFeatureForm() {
  const featuresDiv = document.createElement('div');
  document.body.appendChild(featuresDiv);
  const name = document.createElement('input');
  name.setAttribute('placeholder', 'enter feature name');
  name.setAttribute('id', 'featureName');
  featuresDiv.appendChild(name);
  console.log('hey callback is running');

  const submitBtn = document.createElement('button');
  submitBtn.innerText = 'submit feature';
  featuresDiv.appendChild(submitBtn);
  submitBtn.addEventListener('click', submittedNewFeature);
}

/**
 * function creates "features button" on page load
 */
function createFeatures() {
  const createFeatureBtn = document.createElement('button');
  createFeatureBtn.innerText = 'Create feature';
  createFeatureBtn.setAttribute('class', 'btn btn-primary');
  document.body.appendChild(createFeatureBtn);
  createFeatureBtn.addEventListener('click', renderFeatureForm);
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

  // const featureId = document.getElementById('1').value;
  // console.log(featureId);
  // const featureId = document.getElementsByName('radio');
  // console.log(featureId);
  const featureId = document.querySelector('input[name="radio"]:checked').value;
  console.log(featureId);

  console.log(req);

  const bugData = {
    problem,
    errorText,
    commit,
    featureId,
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
  const NavBar = document.createElement('input');
  NavBar.setAttribute('type', 'radio');
  NavBar.setAttribute('id', '1');
  NavBar.setAttribute('name', 'radio');
  NavBar.setAttribute('value', '1');
  document.body.appendChild(NavBar);
  const NavLabel = document.createElement('label');
  NavLabel.setAttribute('for', '1');
  NavLabel.innerText = 'NavBar';
  document.body.appendChild(NavLabel);

  const dashboard = document.createElement('input');
  dashboard.setAttribute('type', 'radio');
  dashboard.setAttribute('id', '2');
  dashboard.setAttribute('name', 'radio');
  dashboard.setAttribute('value', '2');
  document.body.appendChild(dashboard);
  const dashboardLabel = document.createElement('label');
  dashboardLabel.setAttribute('for', '2');
  dashboardLabel.innerText = 'Dashboard';
  document.body.appendChild(dashboardLabel);

  const forms = document.createElement('input');
  forms.setAttribute('type', 'radio');
  forms.setAttribute('id', '3');
  forms.setAttribute('name', 'radio');
  forms.setAttribute('value', '3');
  document.body.appendChild(forms);
  const formLabel = document.createElement('label');
  formLabel.setAttribute('for', '3');
  formLabel.innerText = 'forms';
  document.body.appendChild(formLabel);

  const userAuth = document.createElement('input');
  userAuth.setAttribute('type', 'radio');
  userAuth.setAttribute('id', '4');
  userAuth.setAttribute('name', 'radio');
  userAuth.setAttribute('value', '4');
  document.body.appendChild(userAuth);
  const userAuthLabel = document.createElement('label');
  userAuthLabel.setAttribute('for', '4');
  userAuthLabel.innerText = 'userAuth';
  document.body.appendChild(userAuthLabel);
}

// btn appears when page is loaded.
function pageLoaded() {
  const btn = document.createElement('button');
  btn.setAttribute('class', 'btn btn-outline-danger m-5');
  btn.innerHTML = 'Create a bug';
  document.body.appendChild(btn);
  btn.addEventListener('click', btnClicked);
  // create feature form
  createFeatures();
  displayBugList();
}
