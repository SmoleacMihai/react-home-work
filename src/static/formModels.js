const formModel = [
  {
    "type": "text",
    "name": "firstName",
    "label": "First name",
    "placeholder": "First name",
    "register": {
      "required": "First name is required",
      "maxLength": {
        "value": 20,
        "message": "Max length 20"
      }
    }
  },
  {
    "type": "text",
    "name": "lastName",
    "label": "Last name",
    "placeholder": "Last name",
    "register": {
      "required": "Last name is required",
      "maxLength": {
        "value": 20,
        "message": "Max length 20"
      }
    }
  },
  {
    "type": "text",
    "name": "email",
    "label": "Email",
    "placeholder": "example@gmail.com",
    "register": {
      "required": "Email is required",
      "pattern": {
        "value": /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
        "message": "Email has a wrong format"
      }
    }
  },
  {
    "type": "text",
    "name": "Phone",
    "label": "Phone number",
    "placeholder": "+373(67)584839",
    "register": {
      "required": "Phone is required",
      "maxLength": {
        "value": 5,
        "message": "You should give only numbers after (67)"
      }
    }
  }
  // {
  //   "type": "number",
  //   "name": "age",
  //   "label": "Age",
  //   "placeholder": "Age",
  //   "register": {
  //     "required": "Age is required",
  //     "min": {
  //       "value": 18,
  //       "message": "Min age is 18"
  //     }
  //   }
  // },
  // {
  //   "type": "select",
  //   "name": "gender",
  //   "label": "Gender",
  //   "options": [
  //     {
  //       "value": "",
  //       "text": "Select..."
  //     },
  //     {
  //       "value": 1,
  //       "text": "Male"
  //     },
  //     {
  //       "value": 2,
  //       "text": "Female"
  //     },
  //     {
  //       "value": 3,
  //       "text": "Other"
  //     }
  //   ],
  //   "register": {
  //     "required": "Please, choose your gender"
  //   }
  // },
  // {
  //   "type": "checkbox",
  //   "name": "fruits",
  //   "label": "Fruits",
  //   "options": [
  //     {
  //       "value": "1",
  //       "text": "Orange"
  //     },
  //     {
  //       "value": 2,
  //       "text": "Apple"
  //     },
  //     {
  //       "value": 3,
  //       "text": "Pomegranade"
  //     },
  //     {
  //       "value": 4,
  //       "text": "Banana"
  //     }
  //   ],
  //   "register": {
  //     "required": "Please, choose your fruit"
  //   }
  // },
  // {
  //   "type": "radio",
  //   "name": "my_fruit",
  //   "label": "Fruits",
  //   "options": [
  //     {
  //       "value": "1",
  //       "text": "Orange"
  //     },
  //     {
  //       "value": 2,
  //       "text": "Apple"
  //     },
  //     {
  //       "value": 3,
  //       "text": "Pomegranade"
  //     },
  //     {
  //       "value": 4,
  //       "text": "Banana"
  //     }
  //   ],
  //   "register": {
  //     "required": "Please, choose your fruit"
  //   }
  // }
]

export default formModel;