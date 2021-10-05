export const PROJECTS = [
  {
    id: '1',
    projectName: 'React Meals',
    url: 'https://infallible-goldberg-9b8b44.netlify.app',
    githubLink: 'https://github.com/tjkhara/food-app-react/tree/main',
    description: {
      descriptionText:
        'This is an updated version of a project I have done previously.',
      descriptionList: [
        'There are two different branches on the GitHub repo with two solutions for this',
        'Firebase backend integration for getting meal items from the backend and storing the order data there as well',
        'Added a checkout form on the cart modal (there are different states when this form is being submitted that are shown as the request progresses)',
      ],
    },
    imageLink:
      'https://tjkhara.com/wp-content/uploads/2021/09/react_meals_v1.jpg',
  },
  {
    id: '2',
    projectName: 'Simple React Form with Validation',
    url: 'https://distracted-nightingale-356df0.netlify.app',
    githubLink: 'https://github.com/tjkhara/react-simple-forms',
    description: {
      descriptionText:
        'A simple form built with react with front end validation',
      descriptionList: [
        'Validation for onBlur',
        'Submit button disabled by default',
        'Validation for email as you type',
      ],
    },
    imageLink: 'https://tjkhara.com/wp-content/uploads/2021/09/rsf_3.jpg',
  },
  {
    id: '3',
    projectName: 'Grocery Bud',
    url: 'https://vigorous-shockley-38541e.netlify.app',
    githubLink: 'https://github.com/tjkhara/grocery-bud-react',
    description: {
      descriptionText: 'Simple CRUD app for a grocery list',
      descriptionList: ['CRUD app', 'Stores items in local storage'],
    },
    imageLink:
      'https://tjkhara.com/wp-content/uploads/2021/09/grocery_bud_2.jpg',
  },
]
