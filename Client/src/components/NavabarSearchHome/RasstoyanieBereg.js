import React from "react";

function RasstoyanieBereg({beregch, bereg, km, kmc}){
    return(
        <>
            <fieldset style={{opacity: 1}}>
                <div className="set-header">Расстояние до берега</div>
                <div className="set-content">
                    <div className="form-group">
                        <select className="form-control" value={bereg.value} onChange={beregch}>
                            <option value="0" disabled selected hidden>выберите...</option>
                            <option value="141">Ладожское озеро</option>
                            <option value="153">Белое море</option>
                            <option value="781">Онежское озеро</option>
                            <option value="1057">Выгозеро</option>
                            <option value="1100">Озеро Нюк</option>
                            <option value="1267">Святозеро</option>
                            <option value="1268">Мунозеро</option>
                            <option value="1269">Озеро Лососинское</option>
                            <option value="1333">Озеро Коркинское</option>
                            <option value="1352">Озеро Янисъярви</option>
                            <option value="1442">Сямозеро</option>
                            <option value="1749966">Озеро Путкозеро</option>
                            <option value="6424396">Река Суна</option>
                            <option value="7046422">Залив Ангарский сор</option>
                            <option value="43016420">Хижозеро</option>
                            <option value="162781075">Озеро Тулмозеро</option>
                            <option value="237852586">река Онда</option>
                            <option value="482513224">Кемь</option>
                            <option value="981575111">Озеро Ахвенъярви</option>
                            <option value="981575118">Озеро Кончозеро</option>
                            <option value="981575121">Озеро Метсоланселькя</option>
                            <option value="981575186">Озеро Кортеланъярви</option>
                            <option value="981575187">Залив Толвасенлахти</option>
                            <option value="981575188">Озеро Ханкасъярви</option>
                            <option value="981575189">Река Уксунйоки</option>
                            <option value="981575190">Кондопожская губа</option>
                            <option value="981575191">Река Китенйоки</option>
                            <option value="981575192">Петрозаводская губа</option>
                            <option value="981575193">Река Куркиёки</option>
                            <option value="981575194">Река Тивдийка</option>
                            <option value="981575195">Залив Уксунлахти</option>
                            <option value="981575198">Озеро Ляппяярви</option>
                            <option value="981575199">Залив Хяннисенлахти</option>
                            <option value="981575200">Озеро Сикопохъянлахти</option>
                            <option value="981575201">Залив Кирьявалахти</option>
                            <option value="981575202">Губа Калейгуба</option>
                            <option value="981575203">Озеро Аласьярви</option>
                            <option value="981575204">Река Айттойоки</option>
                            <option value="981575205">Река Терваканканоя</option>
                            <option value="981575206">Озеро Векколаярви</option>
                            <option value="981575207">Река Летняя</option>
                            <option value="981575208">Великая губа</option>
                            <option value="981575209">Озеро Мериянлампи</option>
                            <option value="981575210">Озеро Контоккиярви</option>
                            <option value="981575211">Озеро Яшозеро</option>
                            <option value="981575212">Озеро Вагозеро</option>
                            <option value="981575213">Губа Песочная</option>
                            <option value="981575214">Озеро Регоярви</option>
                            <option value="981575216">Озеро Калльярви</option>
                            <option value="981575277">Озеро Ридалакши</option>
                            <option value="981575279">Озеро Маслозеро</option>
                            <option value="981575280">Река Соскуанйоки</option>
                            <option value="981575281">Озеро Раялампи</option>
                            <option value="981575533">Река Эняйоки</option>
                            <option value="981575534">Залив Лункуланлахти</option>
                            <option value="981575535">Якимварский залив</option>
                            <option value="981575536">Озеро Суналампи</option>
                            <option value="981575537">Озеро Шаньгима</option>
                            <option value="981575538">Губа Большая</option>
                            <option value="981575539">Губа Матгуба</option>
                            <option value="981575540">Бухта Шокша</option>
                        </select>
                    </div>
                    <div className="form-group">
                        <select className="form-control" id="hotels-pond-distance" tabIndex="-1" value={km.value} onChange={kmc}>
                            <option value="0" disabled selected hidden>выберите...</option>
                            <option value="50">50 м</option>
                            <option value="200">200 м</option>
                            <option value="500">500 м</option>
                            <option value="800">800 м</option>
                            <option value="1000">1000 м</option>
                            <option value="1500">1500 м</option>
                        </select>
                    </div>
                </div>
            </fieldset>
        </>
    )
}
export default RasstoyanieBereg