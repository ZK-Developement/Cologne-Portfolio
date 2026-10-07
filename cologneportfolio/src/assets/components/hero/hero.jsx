import tlo from "../../images/hero.jpg"
import arrow from "../../images/arrow.png"

function Hero (){
    return (
        <section className=" w-[1280px] flex flex-col h-[740px] pt-[23px] mx-[23px] z-10" id="hero">
            <div className=" w-[1234px] flex flex-col bg-pink-950 h-[693px] mx-[23px] rounded-[20px] bg-center bg-[length:100%_100%] brightness-90 shadow-[inset_10px_8px_50px_10px_rgba(0,0,0,0.5),inset_600px_0_50px_50px_rgba(0,0,0,0.3),0_4px_20px_5px_rgba(0,0,0,0.3)]
            justify-center "
            style={{ backgroundImage: `url(${tlo})`}}>
                <div className=" flex w-[400px] h-[400px] flex-col ml-[130px] mt-[240px]">
                    <p className="text-[48px] playfair text-white leading-[70px]">Zapach na który Zasługujesz.</p>
                    <p className="text-[13px] text-white opacity-40 w-[266px] leading-[20px] mt-[12px]">Każdy zapach opowiada własną historię. Wybierz kompozycję, która podkreśli Twój charakter i zostanie z Tobą na długo.</p>
                </div>
                <a href="#onas" className="hover:scale-[1.03] duration-400  hover:translate-y-[4px]"><div className="flex w-[200px h-[40px] mt-auto mb-[28px] justify-center items-center">
                    <p className="text-white opacity-45 font-semibold inter text-[10px]">DOWIEDZ SIĘ WIĘCEJ</p>
                    <img src={arrow} alt="arrow" className="rotate-[90deg] w-[12px] h-[12px] scale-140 ml-[15px] brightness-200 contrast-0"/>
                </div></a>
            </div>
        </section>
    );
}
export default Hero;