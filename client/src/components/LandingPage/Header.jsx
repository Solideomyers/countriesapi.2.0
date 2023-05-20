import { Nav } from '../Nav/Nav'

export const Header = () => {
  return (
    <header className="flex items-center justify-between xl:justify-start w-full p-4 mb-2 h-[10vh]">
      <Nav />
    </header>
  )
}
