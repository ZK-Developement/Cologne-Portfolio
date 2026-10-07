import logo from "../../images/logo.png"

function Header (){
    return (
        <section className=" absolute flex w-full h-[44px] items-center justify-center z-101 mt-[40px] fixed">
            <header className="flex w-[1234px] h-[44px]  items-center ">
                <a href="#hero"><div className="flex w-[134px] h-[44px] justify-center items-center rounded-[10px] ml-[20px] bg-[#D9D9D920] ">
                    <img src={logo} alt="logo" className="h-[24px] w-[24px] " />
                    <p className=" text-[14px] text-white font-light ml-[11px] ">Cologne</p>
                </div></a>
                <div className="flex  w-[524px] h-[44px] ml-auto items-center rounded-[10px] bg-[#D9D9D920] ">
                    <nav className=" flex gap-4 text-white font-medium text-[14px] items-center h-[44px] pl-[33px]">
                        <a href="#onas" className="hover:translate-y-[-3px] transition-[1.5s] ">Onas</a>
                        <a href="#produkty" className="hover:translate-y-[-3px] transition-[1.5s]">Produkty</a>
                        <a href="#oproduktach" className="hover:translate-y-[-3px] transition-[1.5s] ">O Produkcie</a>
                        <a href="#kontakt" className="hover:translate-y-[-3px] transition-[1.5s">Kontakt</a>
                    </nav>
                    <div className=" flex h-[44px] w-[159px] mr-[18px] ml-auto justify-center items-center cursor-pointer ">
                        <div className="lqglass flex h-[24px] w-[159px] rounded-[20px] text-white text-[11px] items-center gap-2 pl-[15px] hover:scale-[1.03] transition-[1s] ">
                        <p className="z-101">★4,8</p>
                        <p className="z-101">Najwyższa jakość</p>
                        </div>
                    </div>
                </div>
            </header>
        </section>
    );
}
export default Header;