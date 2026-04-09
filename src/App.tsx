
import './App.css'
import {List} from "./components/List"
import {ListItem} from "./components/ListItem"
import {ListItemImage} from "./components/ListItemImage"
import {ListItemText} from "./components/ListItemText"
import {ListItemStatus} from "./components/ListItemStatus.tsx"

function App() {

  const people = [
    {
      name: 'Ait Ougard',
      role: 'CIS',
      status: "Present",
      imageUrl:
          'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
    {
      name: 'Stevens',
      role: 'Cyber',
      status: "Present",
      imageUrl:
          'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
    {
      name: 'Kantelberg',
      role: 'VKAM',
      status: "Absent",
      imageUrl:
          'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
  ]


  return (
    <>
      <section id="center">
        <h1 className="text-center text-3xl">Beschikbaar personeel</h1>
        <List>
          {people.map((person) => (
              <ListItem key={person.name}>
                <ListItemImage imageUrl={person.imageUrl} />
                <ListItemText text={person.name} />
                <ListItemStatus text={person.status} />
              </ListItem>

          ))}
        </List>
      </section>
    </>
  )
}

export default App
