import React from 'react'
import App from './App'
import { BrowserRouter } from 'react-router-dom'
import { AdminProvider } from './context/admin.context'
import { UserProvider } from './context/user.context'
import { CoursesProvider } from './context/courses.context'
import { SkillsProvider } from './context/skills.context'
import { ExperienceProvider } from './context/experience.context'
import { DocumentsProvider } from './context/documents.context'
import { ModalProvider } from './features'

import { createRoot } from 'react-dom/client'
const container = document.getElementById('root')
const root = createRoot(container)

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <AdminProvider>
        <UserProvider>
          <CoursesProvider>
            <SkillsProvider>
              <ExperienceProvider>
                <DocumentsProvider>
                  <ModalProvider>
                      <App />
                  </ModalProvider>
                </DocumentsProvider>
              </ExperienceProvider>
            </SkillsProvider>
          </CoursesProvider>
        </UserProvider>
      </AdminProvider>
    </BrowserRouter>
  </React.StrictMode>
)
