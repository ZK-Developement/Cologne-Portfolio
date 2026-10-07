import butelka from "../../assets/images/butelka.png"

function Produkty (){
    return (
        <section className=" w-[1280px] flex flex-col h-[640px] mx-[23px] mt-[5px]" id="produkty">
            <div className=" w-[1234px] flex flex-col h-[593px] mx-[23px]  rounded-[20px] justify-center items-center ">
                <p className="playfair text-white text-[40px]">Wybierz swój zapach</p>
                <p className="inter text-white text-[12px] opacity-40 my-[20px] w-[446px] leading-3.5">Poznaj nasze warianty i wybierz pojemność dopasowaną do Twojego stylu.</p>
                <div className="flex h-[400px]  w-[1100px] justify-center items-center gap-8 ">
                    <div className="lqglass flex flex-col w-[322px] h-[361px] rounded-[20px] px-[28px] shadow-[0_4px_20px_20px_rgba(0,0,0,0.3)]">
                        <div className="w-[267px] h-[246px]  rounded-[10px] mt-[21px] mb-2 bg-center bg-[length:100%_100%] bg-contain opacity-65 brightness-120" style={{ backgroundImage: `url(${butelka})`}}></div>
                        <p className="text-white font-semibold">244zł<span className="font-normal text-[12px] ml-[4px] opacity-50">60ml</span></p>
                        <p className="font-normal text-[12px] opacity-50 text-white leading-3.5">Idealny na co dzień.<br />Twój zapach zawsze pod ręką.</p>
                    </div>
                    <div className="lqglass-lightup flex flex-col w-[322px] h-[361px] rounded-[20px] px-[28px] shadow-[0_4px_50px_50px_rgba(255,255,255,0.4)] border-[1px] border-white">
                        <div className="absolute text-[12px] text-white bg-[#323232] translate-x-[30px] translate-y-[-13px] px-[18px] rounded-[20px] border-[1px] border-white">Najczęściej wybierany Produkt</div>
                        <div className="w-[267px] h-[246px]  rounded-[10px] mt-[21px] mb-2 bg-center bg-[length:100%_100%] bg-contain opacity-65 brightness-120 " style={{ backgroundImage: `url(${butelka})`}}></div>
                        <p className="text-white font-semibold">499zł<span className="font-normal text-[12px] ml-[4px] opacity-50">180ml</span></p>
                        <p className="font-normal text-[12px] opacity-50 text-white leading-3.5">Więcej zapachu na dłużej.<br />Dla tych, którzy wiedzą, czego chcą.</p>
                    </div>
                    <div className="lqglass flex flex-col w-[322px] h-[361px] rounded-[20px] px-[28px] shadow-[0_4px_20px_20px_rgba(0,0,0,0.3)]">
                        <div className="w-[267px] h-[246px]  rounded-[10px] mt-[21px] mb-2 bg-center bg-[length:100%_100%] bg-contain opacity-65 brightness-120" style={{ backgroundImage: `url(${butelka})`}}></div>
                        <p className="text-white font-semibold">678zł<span className="font-normal text-[12px] ml-[4px] opacity-50">400ml</span></p>
                        <p className="font-normal text-[12px] opacity-50 text-white leading-3.5">Największy wariant .<br />Dla prawdziwych miłośników zapachu.</p>
                    </div>
                </div>
                <a href="#kontakt"><button className="lqglass py-[5px] px-[60px] text-[15px] rounded-[20px] text-white mt-[20px] shadow-[0_4px_20px_20px_rgba(0,0,0,0.3)] cursor-pointer hover:scale-[1.03] transition-[1s]">Zamów</button></a>
            </div>

        </section>
    )
}
export default Produkty;