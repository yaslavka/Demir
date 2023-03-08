import React, {useState} from "react";
import HeaderHom from "./Header";

function NavbarHomPrivate(){
    const [active, setActive] = useState(false)
    const [isNavMenuVisible, setIsNavMenuVisible] =useState(false)
    return (
        <>
            <HeaderHom active={active} setActive={setActive} isNavMenuVisible={isNavMenuVisible} setIsNavMenuVisible={setIsNavMenuVisible}/>

        </>

    )
}
export default NavbarHomPrivate