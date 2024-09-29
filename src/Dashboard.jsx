import SideNav from "./SideNav"
import MaterialSymbolsLightFilterAltOutline from "./icons/MaterialSymbolsLightFilterAltOutline"
import MaterialSymbolsServiceToolboxOutline from "./icons/MaterialSymbolsServiceToolboxOutline"

const Dashboard = () => {
    const sideNavs = ["Service Profile", "YP profile", "Reports", "Training Hub", "Policies", "s/w profile", "Timesheet"]

  return (
    <main className="h-screen bg-[whitesmoke] flex">
        <SideNav />

        <div className="py-8 px-10 w-full space-y-16">
            <div className="flex flex-col gap-4 md:flex-row md:justify-between ">
                <div className="flex gap-1 items-center text-2xl font-semibold">
                    <h1>Service Profile</h1>
                    <MaterialSymbolsLightFilterAltOutline />
                </div>
                
                <button className="flex gap-1 items-center text-lg">
                    <MaterialSymbolsServiceToolboxOutline />
                    <span>Jonathan D</span>
                    <MaterialSymbolsServiceToolboxOutline />
                </button>
            </div>
            <div className="space-y-8">
                <div className="flex gap-2 ">
                   <span className="font-semibold">Service Profile</span> 
                   <span className="font-semibold">/</span>
                   <span className="font-semibold">Client Profiles</span>
                </div>
                <div className="flex lg:flex-row lg:gap-40 flex-col gap-4">
                    <input type="text"  placeholder="Search Profile" value="Sadiq"  className="lg:w-[80%] py-5 outline-none bg-gray-200 rounded-md px-4"/>
                    <button className="lg:w-[20%] w-fit bg-purple-800 text-white font-semibold p-4 rounded-md">Create New Profile</button>
                </div>
            </div>
        </div>
    </main>
  )
}

export default Dashboard