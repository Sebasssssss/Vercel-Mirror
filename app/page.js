import Card from './components/Card'
import SearchForm from './components/SearchForm'
import avatar from '../public/avatar.jpg'

export default function Home() {
  return (
    <div className="w-full bg-[#111] min-h-[500px] 2xl:min-h-[800px]">
      <div className="max-w-7xl p-4 mx-auto">
        <SearchForm />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card
            image={avatar}
            title="homepage"
            source="homepage-amber-five.vercel.app"
            commit="Fixed some details"
          />
          <Card
            image={avatar}
            title="homepage"
            source="homepage-amber-five.vercel.app"
            commit="Fixed some details"
          />
          <Card
            image={avatar}
            title="homepage"
            source="homepage-amber-five.vercel.app"
            commit="Fixed some details"
          />
        </div>
      </div>
    </div>
  )
}
