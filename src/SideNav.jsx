
const SideNav = () => {
    const sideNavs = ["Service Profile", "YP profile", "Reports", "Training Hub", "Policies", "s/w profile", "Timesheet"]

  return (
    <div className="bg-purple-800 w-[20%] h-screen px-8 py-4 space-y-20">
        <div className="bg-gray-300 w-full h-10"></div>
        <nav>
            <ul className="space-y-10">
                {
                    sideNavs.map((sideNav, i) => <li key={i} className="text-md text-gray-300 cursor-pointer w-fit hover:text-[whitesmoke]">{sideNav}</li>)
                }
            </ul>
        </nav>
    </div>

  )
}

export default SideNav