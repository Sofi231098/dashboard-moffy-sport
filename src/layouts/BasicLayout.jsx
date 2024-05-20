import { SideBar, TopBar } from "../components"
import './BasicLayout.css';

export const BasicLayout = ({ children }) => {
    return (
        <>
            <SideBar />
            <div className="basic-layout">
                <TopBar />
                <main className="basic-layout__main">
                    {children}
                </main>
            </div>
        </>
    )
}
