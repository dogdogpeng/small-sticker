import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import 'virtual:uno.css'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  // <ErrorBoundary>
      <App />,
  // </ErrorBoundary>,
)
