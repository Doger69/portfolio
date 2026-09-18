import { Route, Routes } from 'react-router-dom'
import { MobileMenuProvider } from './contexts/MobileMenuContext'
import { ToastProvider } from './contexts/ToastContext'
import CustomCursor from './components/UI/CustomCursor'
import HomePage from './pages/HomePage'
import ResumePage from './pages/ResumePage'

export default function App() {
  return (
    <MobileMenuProvider>
      <ToastProvider>
        <CustomCursor />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/resume" element={<ResumePage />} />
        </Routes>
      </ToastProvider>
    </MobileMenuProvider>
  )
}
