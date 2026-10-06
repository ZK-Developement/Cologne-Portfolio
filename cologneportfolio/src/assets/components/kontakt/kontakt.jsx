import tlo from "../../images/hero.jpg"

function Kontakt (){
    return (
        <section className=" w-[1280px] flex flex-col h-[500px] mx-[23px] mt-[5px]">
            <div className=" w-[1234px] flex h-[500px] mx-[23px]  rounded-[20px] justify-center items-center ">
                <div className="flex flex-col h-[470px] w-[500px] pt-[10px] pl-[40px]">
                    <p className="playfair text-white text-[40px]">Znajdź swój zapach</p>
                    <p className="inter text-white text-[12px] opacity-40 my-[20px] w-[346px] leading-3.5">Masz pytanie dotyczące kolekcji? Chcesz dowiedzieć się więcej o konkretnym zapachu? Napisz do nas.</p>
                    <p className="inter text-white text-[12px] opacity-70 w-[346px] mb-[10px]">Masz pytania?</p>
                    <p className="inter text-white text-[12px] opacity-40 w-[346px] h-[20px]">kontakt@zkcologne.pl</p>
                    <p className="inter text-white text-[12px] opacity-40 w-[346px] h-[20px]">+48 444 555 666</p>
                    <div className="w-[350px] flex h-[20px] mt-auto mb-[40px] justify-center items-center">
                        <p className="inter text-white text-[12px] opacity-40 h-[20px]">Zapach, który mówi więcej niż słowa.</p>
                    </div>
                </div>
                <div className="flex flex-col  h-[470px] w-[500px] justify-center items-center">
                    <div className="flex flex-col h-[460px] w-[496px] bg-center bg-[length:300%_120%] rounded-[20px]" style={{ backgroundImage: `url(${tlo})`}}>
                        <form className="w-full flex flex-col justify-center items-center pt-[40px] gap-[13px] text-white text-[10px]">
                            <input type="text" name="name" id="name" placeholder="Imię i Nazwisko" className="w-[393px] h-[30px] rounded-[10px] border-1 border-[#FFFFFF] bg-[#FFFFFF01] pl-[10px]"/>
                            <input type="email" name="name" id="email" placeholder="Adres Email" className="w-[393px] h-[30px] rounded-[10px] border-1 border-[#FFFFFF] bg-[#FFFFFF01] pl-[10px]"/>
                            <input type="text" name="name" id="phone" placeholder="Numer telefonu" className="w-[393px] h-[30px] rounded-[10px] border-1 border-[#FFFFFF] bg-[#FFFFFF01] pl-[10px]"/>
                            <textarea className="w-[393px] h-[177px] rounded-[10px] border-1 border-[#FFFFFF] bor bg-[#FFFFFF01] pl-[10px]" placeholder="Napisz wiadomość do zamówienia"></textarea>
                            <div className="flex text-[12px] justify-center items-center">
                                <input type="radio" name="ratio" id="size" className="flex w-[18px] h-[18px] border-1 border-[#FFFFFF] ml-[14px] mr-[4px] rounded-[4px] appearance-none checked:bg-[#FFFFFF90] cursor-pointer transition-[1s]"/>60ml 
                                <input type="radio" name="ratio" id="size" className="flex w-[18px] h-[18px] border-1 border-[#FFFFFF] ml-[14px] mr-[4px] rounded-[4px] appearance-none checked:bg-[#FFFFFF90] cursor-pointer transition-[1s]"/>180ml
                                <input type="radio" name="ratio" id="size" className="flex w-[18px] h-[18px] border-1 border-[#FFFFFF] ml-[14px] mr-[4px] rounded-[4px] appearance-none checked:bg-[#FFFFFF90] cursor-pointer transition-[1s]"/>400ml
                            </div>
                            <button className="lqglass w-[140px] h-[25px] rounded-[20px] mt-[10px]">Zamów</button>
                        </form>
                    </div>
                </div>
                
                
            </div>

        </section>
    )
}
export default Kontakt;