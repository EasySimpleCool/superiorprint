//--------------------------------------------------------
// APP COMPONENT
//--------------------------------------------------------
// Purpose: Root component that provides the main layout and structure
// Includes the QuoteCalculator component within a responsive container
//--------------------------------------------------------

import { QuoteCalculator } from './components/QuoteCalculator'
import './App.css'

function App() {
  return (

    //--------------------------------------------------------
    // MAIN APP CONTAINER
    // Styles:
    //   - min-h-screen: Ensures minimum height of viewport
    //   - py-8: Adds vertical padding
    //--------------------------------------------------------

    <div className="min-h-screen py-8">

      //--------------------------------------------------------
      // CONTENT CONTAINER
      // Styles:
      //   - container: Sets responsive max-width
      //   - mx-auto: Centers container horizontally
      //   - px-4: Adds horizontal padding
      //--------------------------------------------------------

      <div className="container mx-auto px-4">
        {/* Quote calculator component */}
        <QuoteCalculator />
      </div>
    </div>
  )
}

export default App
