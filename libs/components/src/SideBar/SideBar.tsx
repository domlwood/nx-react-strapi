import { Loading } from "../Loading/Loading"

export const SideBar = () => {
  return (
    <div className="bg-black">
        <a>Home</a>
        <a>Apps</a>
        <a>News</a>
        <Loading/>
    </div>
  )
}