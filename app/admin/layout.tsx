import Sidebar from "./_components/Sidebar";

export default function layout({children}:{children:React.ReactNode}){
    return <div className="flex item-center w-full gap-x-2">
        <Sidebar/>
       <div className="w-full p-4">
       {children}
       </div>
    </div>
}