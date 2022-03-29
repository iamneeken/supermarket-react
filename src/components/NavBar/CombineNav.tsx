import LoginNav from "./LoginNav";
import MainNav from "./MainNav";
import CategoryNav from "./CategoryNav";


const CombineNav=():JSX.Element =>{
    return (
        <>
            <LoginNav />
            <MainNav />
            <CategoryNav />
        </>
    )
}

export default CombineNav