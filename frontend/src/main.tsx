import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { BrowserRouter } from 'react-router-dom'
import { AdminProvider } from './context/admin.context'
import { UserProvider } from './context/user.context'
import { CoursesProvider } from './context/courses.context'
import { SkillsProvider } from './context/skills.context'
import { ExperienceProvider } from './context/experience.context'
import { DocumentsProvider } from './context/documents.context'

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <AdminProvider>
        <UserProvider>
          <CoursesProvider>
            <SkillsProvider>
              <ExperienceProvider>
                <DocumentsProvider>
                  <App />
                </DocumentsProvider>
              </ExperienceProvider>
            </SkillsProvider>
          </CoursesProvider>
        </UserProvider>
      </AdminProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
)
