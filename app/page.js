import Card from './components/Card'
import SearchForm from './components/SearchForm'

export default function Home() {
  return (
    <div className="max-w-7xl p-4 mx-auto h-[100vh]">
      <SearchForm />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  )
}
