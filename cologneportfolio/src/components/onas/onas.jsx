import roza from "../../assets/images/roza.jpg"
import flakon from "../../assets/images/flakon.jpg"
import pudelko from "../../assets/images/pudełko.jpg"

function Onas (){
    return(
        <section className=" w-[1280px] flex flex-col h-[593px] mx-[23px]" id="onas">
            <div className=" w-[1234px] flex flex-col h-[593px] mx-[23px]  rounded-[20px] justify-center items-center ">
                <p className="playfair text-white text-[40px]">Stworzony, by zostać zapamiętanym</p>
                <p className="inter text-white text-[12px] opacity-40 my-[20px] w-[600px] leading-3.5">Tworzymy perfumy dla osób, które zwracają uwagę na detale. Łączymy wyraziste nuty, wysokiej jakości składniki i dopracowane kompozycje, aby stworzyć zapach, który pasuje do Ciebie.</p>
                <div className="flex w-[800px] justify-center items-center gap-6 mt-[60px] hover:gap-8 transition-[1.5s] cursor-pointer">
                    <div className="w-[240px] h-[240px]  rounded-[20px] rotate-[-12deg] translate-y-[25px] shadow-[0_4px_20px_5px_rgba(0,0,0,0.3)]  bg-center bg-[length:100%_100%] saturate-[70%] contrast-[110%] brightness-[105%]" style={{ backgroundImage: `url(${pudelko})`}}></div>
                    <div className="w-[240px] h-[240px]  rounded-[20px] shadow-[0_4px_20px_5px_rgba(0,0,0,0.3)]  bg-center bg-[length:100%_100%] saturate-[70%] contrast-[110%] brightness-[105%]" style={{ backgroundImage: `url(${flakon})`}}></div>
                    <div className="w-[240px] h-[240px]  rounded-[20px] rotate-[12deg] translate-y-[25px] shadow-[0_4px_20px_5px_rgba(0,0,0,0.3)]  bg-center bg-[length:100%_100%] saturate-[70%] contrast-[110%] brightness-[105%]" style={{ backgroundImage: `url(${roza})`}}></div>
                </div>
            </div>
        </section>
    )
}
export default Onas;