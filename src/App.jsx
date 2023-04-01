import Navbar from "./components/Navbar"
import data from "./data"
import Card from "./components/Card"

export default function App() {

  const dataCard = data.map(item => {
    return (
      <Card 
        key={item.id}
        {...item}
      />
    )
  })

  return (
    <div>
      <Navbar />
      {dataCard}
    </div>
  )
}