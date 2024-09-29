
const Form = ({setIsForm}) => {
    const handleForm = ()=> {
       setIsForm(false)
    }
  return (
    <main className="formMain">
        <section className="bg-[#191919] h-[90%] rounded-2xl w-fit mx-auto px-20 pt-20 pb-16 text-white space-y-32">
            <form onSubmit={(e)=> e.preventDefault()} className="flex flex-col gap-8 items-center">
                <div className="flex flex-col gap-2 items-center w-44">
                    <h1 className="text-2xl font-bold">LOGIN</h1>
                    <p className="text-sm text-gray-400 text-center">Please enter your login and password!</p>
                </div>
                <div className="flex flex-col gap-4 w-full">
                    <input type="email" placeholder="Email" className="w-full outline-none bg-transparent rounded border border-white p-2 placeholder:text-white placeholder:font-semibold"/>
                    <input type="password" placeholder="Password" className="w-full outline-none bg-transparent rounded border border-white p-2 placeholder:text-white placeholder:font-semibold"/>
                    <button className="text-sm text-gray-400">Forgot password?</button>
                </div>
                <div>
                    <button onClick={handleForm} className="text-sm rounded border border-white py-2 font-semibold px-16 hover:bg-[whitesmoke] hover:text-[#191919]">LOGIN</button>
                </div>
            </form>

            <p>Don't have an account? <button className="text-blue-700">Sign up</button></p>
        </section>
    </main>
  )
}

export default Form