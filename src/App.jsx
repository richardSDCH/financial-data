import { Routes, Route, Link } from 'react-router-dom'
import ParaInversionistas from "./ParaInversionistas"
import Tattvam from "./Tattvam"

export default function App() {
  return (
    <div>
      <nav>
        <Link to="/parainversionistas"><h3 className="text-slate-50 font-medium text-2xl">Para Inversionistas</h3></Link> | <Link to="/tattvam"><h3 className="text-rose-400 font-medium text-2xl">Tattvam Markets</h3></Link>
      </nav>
      <Routes>
        <Route path="/parainversionistas" element={<ParaInversionistas />} />
        <Route path="/tattvam" element={<Tattvam />} />
      </Routes>
    </div>
  )
}

