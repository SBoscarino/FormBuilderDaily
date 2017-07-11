// The Form Data
let formData = [
  // For demonstration purposes,
  // the first form element has been added to the HTML file as a comment
  // compare the input in the HTML file with the contents of this first object
  {
    "type": "text",
    "label": "First Name",
    "id": "user-first-name",
    "icon": "fa-user",
    "options": []
  },
  {
    "type": "text",
    "label": "Last Name",
    "id": "user-last-name",
    "icon": "fa-user",
    "options": []
  },
  {
    "type": "email",
    "label": "Email Address",
    "id": "user-email",
    "icon": "fa-envelope",
    "options": []
  },
  {
    "type": "text",
    "label": "Current Website URL",
    "id": "user-website",
    "icon": "fa-globe",
    "options": []
  },
  {
    "type": "select",
    "label": "Select Language",
    "id": "user-language",
    "icon": "",
    "options": [
      {
        "label": "English",
        "value": "EN"
      },
      {
        "label": "French",
        "value": "FR"
      },
      {
        "label": "Spanish",
        "value": "SP"
      },
      {
        "label": "Chinese",
        "value": "CH"
      },
      {
        "label": "Japanese",
        "value": "JP"
      }
    ]
  },
  {
    "type": "textarea",
    "label": "Your Comment",
    "id": "user-comment",
    "icon": "fa-comments",
    "options": []
  },
  {
    "type": "tel",
    "label": "Mobile Number",
    "id": "user-mobile",
    "icon": "fa-mobile-phone",
    "options": []
  },
  {
    "type": "tel",
    "label": "Home Number",
    "id": "user-phone",
    "icon": "fa-phone",
    "options": []
  }
];

// HINTS:
// As you can see, we access the first element in the array
// with [0] and then grab the property "label" using the "." operator
( function(){
  // Select the first element from the array
  let first = formData[ 0 ];
  // Log the first object
  console.log( first );
  // Log the string "First Name"
  console.log( first.label );
} )();


// -------- Your Code Goes Below this Line --------
let form = document.querySelector('#fields');
console.log(form);

//loop through the formData to get stuff. First, we created the input append child and created the var input. Then we added the placeholders (which are stand-ins for what we are to put in our form.) We then add components to input using the dot notation method. (like form.id).We started separating by types and then appended the children after each runthrough.
for (let i = 0; i < formData.length; i++) {
  if(formData[i].type === "textarea") {
    let textArea = document.createElement('textarea');
    textArea.placeholder = formData[i].label;
    textArea.id = formData[i].id;
    form.appendChild(textArea);
  }
    else if (formData[i].type === "select") {
      let select = document.createElement('select');
      select.id = formData[i].id;
      let option = document.createElement('option');
      //create a placeholder option
      option.textContent =  formData[i].label;
      select.add(option);
      //loop through the options and add them to the select.
      for(let j = 0; j < formData[i].options.length; j++) {
        let currentOption = formData[i].options[j];
        let languageOption = document.createElement('option');
        languageOption.textContent = currentOption.label;
        languageOption.value = currentOption.value;
        select.add(languageOption);
      }
      form.appendChild(select);
  }
    else {
    let input = document.createElement('input');
    input.placeholder = formData[i].label;
    input.id = formData[i].id;
    input.type = formData[i].type;
    form.appendChild(input);
  }
}
