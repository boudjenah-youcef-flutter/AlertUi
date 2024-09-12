
import { Siren ,Info , TriangleAlert , ShieldX , MailCheck  } from 'lucide-react'
import './App.css'
import Alert from './component/alertui/Alert'

function App() {

  return (
    <>
      
      <Alert alertType={"alert-info"}  title={"alert-info"} icon={<Info  />}></Alert>
      <Alert alertType={"alert-warning"} title={"alert-warning"} icon={<TriangleAlert  />}></Alert>
      <Alert alertType={"alert-error"} title={"alert-error"} icon={<ShieldX />}></Alert>
      <Alert alertType={"alert-success"} title={"alert-success"} icon={<MailCheck />}></Alert>
      <Alert alertType={"alert-default"} title={"alert-default"} icon={<Siren /> }></Alert>


    </>
  )
}

export default App
