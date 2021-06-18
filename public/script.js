// call back function when bug report form is submitted.
async function submitForm(req) {
  // console.log(req.body.name);
  // console.log(req);
  const problem = document.getElementById('problemInput').value;
  console.log(problem);
  const errorText = document.getElementById('errorInput').value;
  console.log(errorText);
  const commit = document.getElementById('commitInput').value;
  console.log(commit);

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
  // const problemInput = document.getElementById('problemInput');
  // problemInput.style.display = 'none';
}
// event listner callback function for btn
function btnClicked() {
  // problem input field
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
}

// btn appears when page is loaded.
function pageLoaded() {
  const btn = document.createElement('button');
  btn.innerHTML = 'Create a bug';
  document.body.appendChild(btn);
  btn.addEventListener('click', btnClicked);
}
