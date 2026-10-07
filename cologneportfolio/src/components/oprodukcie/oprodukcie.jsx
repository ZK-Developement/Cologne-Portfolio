import butelka from "../../assets/images/butelka.png"

function OProdukcie (){
    return (
        <section className=" w-[1280px] flex flex-col h-[628px] mx-[23px] mt-[5px]" id="oproduktach">
            <div className=" w-[1234px] flex flex-col h-[593px] mx-[23px]  rounded-[20px] justify-center items-center">
                <p className="playfair text-white text-[40px]">Sztuka zamknięta we flakonie</p>
                <p className="inter text-white text-[12px] opacity-40 my-[20px] w-[446px] leading-3.5">Zapach zaczyna się od pomysłu. Następnie dobieramy nuty, proporcje i intensywność, aż powstanie kompozycja o własnym charakterze.</p>
                <div className="w-[1036px] h-[480px] flex ">
                    <div className="w-[400px] h-[480px] justify-center items-center flex">
                        <div className="rounded-[40px]  h-[360px] w-[150px] shadow-[0_4px_60px_80px_rgba(0,0,0,0.25)]">
                        </div>
                        <img src={butelka} alt="flakonik"  className="z-3 absolute"/>
                    </div>
                    <div className=" w-[629px] h-[480px] ml-auto gap-8 justify-center items-center flex flex-col">
                        <div className="lqglass rounded-[10px] flex w-[629px] h-[50px] items-center pl-[20px]">
                            <p className="inter font-medium text-white text-[15px]">1. &nbsp; Każdy zapach zaczyna się od konkretnego charakteru i emocji.</p>
                        </div>
                        <div className="lqglass rounded-[10px] flex w-[629px] h-[50px] items-center pl-[20px]">
                            <p className="inter font-medium text-white text-[15px]">2. &nbsp; Łączymy nuty tak, aby tworzyły spójną i wyrazistą całość.</p>
                        </div>
                        <div className="lqglass rounded-[10px] flex w-[629px] h-[50px] items-center pl-[20px]">
                            <p className="inter font-medium text-white text-[15px]">4. &nbsp; Gotowa kompozycja trafia do eleganckiego flakonu, który staje się jej częścią.</p>
                        </div>
                    </div>
                </div>
                
            </div>

        </section>
    )
}
export default OProdukcie;