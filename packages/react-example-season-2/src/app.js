import React from 'react'
import { render } from 'react-dom'
import { Router, browserHistory } from 'react-router'

global.COURSES = [
  {
    id: 0,
    name: 'React Fundamentals',
    grade: 'B',
    announcements: [
      {
        id: 0,
        title: 'No class tomorrow',
        body: 'There is no class tomorrow, please do not show up'
      }
    ],
    assignments: [
      {
        id: 0,
        title: 'Build a router',
        body: 'It will be easy, seriously, like 2 hours, 100 lines of code, no biggie',
        grade: 'N/A'
      }
    ]

  },

  {
    id: 1,
    name: 'Reusable React Components',
    grade: 'A-',
    announcements: [
      {
        id: 0,
        title: 'Final exam next wednesday',
        body: 'You had better prepare'
      }
    ],
    assignments: [
      {
        id: 0,
        title: 'PropTypes',
        body: 'They aren\'t for you.',
        grade: '80%'
      },
      {
        id: 1,
        title: 'Iterating and Cloning Children',
        body: 'You can totally do it.',
        grade: '95%'
      }
    ]
  }
]

const rootRoute = {
  childRoutes: [ {
    path: '/',
    component: require('./components/App'),
    childRoutes: [
      require('./routes/Calendar'),
      require('./routes/Course'),
      require('./routes/Profile/'),
      require('./routes/Messages/'),
      require('./routes/Grades/')
    ]
  } ]
}

render((
  <Router
    history={browserHistory}
    routes={rootRoute}
  />
), document.getElementById('container'))