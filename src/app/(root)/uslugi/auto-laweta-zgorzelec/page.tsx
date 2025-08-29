import ServiceAbout from '@/components/sections/ServiceAbout'
import ServiceItems from '@/components/sections/ServiceItems'
import ServiceWhyUs from '@/components/sections/ServiceWhyUs'
import SubPageHero from '@/components/sections/SubPageHero'
import { TRUCK_IMG, TRUCK_IMG2, TRUCK_IMG4 } from '@/constants/images'
import { AUTO_LAWETA_ZGORZELEC_ABOUT, AUTO_LAWETA_ZGORZELEC_ITEMS } from '@/constants/services'
import React from 'react'

function AutoLawetaZgorzelecPage() {
  return (
    <>
        <SubPageHero 
            title='Auto laweta Zgorzelec'
            description='Oferujemy usługi auto laweta Zgorzelec, które obejmują transport samochodów osobowych, dostawczych i ciężarowych. Działamy całodobowo w Polsce i Europie.'
        />
        <ServiceAbout 
            title='Auto laweta Zgorzelec – transport TIR i samochodów'
            subtitle='Profesjonalne holowanie i przewóz pojazdów'
            list={AUTO_LAWETA_ZGORZELEC_ABOUT}
            image={TRUCK_IMG}
        />
        <ServiceItems 
            title='Auto laweta Zgorzelec – zakres usług'
            description='Nasze lawety są przystosowane do przewozu pojazdów różnego typu. Oferujemy szybki transport zarówno po awarii, jak i w przypadku potrzeby przewiezienia sprawnego auta.'
            list={AUTO_LAWETA_ZGORZELEC_ITEMS}
        />
        <ServiceWhyUs
            title='Dlaczego warto wybrać naszą auto lawetę w Zgorzelcu?'
            images={[TRUCK_IMG2, TRUCK_IMG4]}
        >
            <p>
                Jesteśmy zaufanym dostawcą usług auto lawety w Zgorzelcu i okolicach, oferując kompleksową pomoc w transporcie uszkodzonych pojazdów. Od lat działamy na rynku, zdobywając zaufanie klientów dzięki naszej niezawodności i profesjonalnemu podejściu. Nasza firma specjalizuje się w obszarze Zgorzelca i pobliskich miejscowości, oferując szybkie i skuteczne usługi auto lawety w każdej sytuacji. Bez względu na to, czy Twój pojazd wymaga transportu z centrum miasta, czy z jego obrzeży, możesz liczyć na naszą gotowość do natychmiastowej pomocy.
            </p>
            <p>
                Jako doświadczeni specjaliści w zakresie auto lawety, doskonale rozumiemy, jak stresujące mogą być problemy z pojazdem. Dlatego nasz zespół oferuje nie tylko techniczne wsparcie, ale również pełne zrozumienie i empatię w każdej sytuacji. Nasze nowoczesne lawety są gotowe do działania w każdych warunkach, zapewniając bezpieczny transport Twojego pojazdu na wyznaczone miejsce. Bez względu na to, czy potrzebujesz przewozu auta do warsztatu, czy na inne miejsce, jesteśmy tutaj, aby zapewnić Ci profesjonalną pomoc.
            </p>
            <p>
                Działając na wymagających trasach, zdobyliśmy doświadczenie, które pozwala nam sprostać każdemu wyzwaniu transportowemu. Nasz zespół to nie tylko wykwalifikowani fachowcy, ale również osoby, które rozumieją, jak frustrujące mogą być awarie pojazdów. Zawsze staramy się zapewnić nie tylko skuteczne, ale i empatyczne wsparcie każdemu klientowi. Nasze nowoczesne lawety są symbolem zaawansowanej technologii, zapewniając bezpieczeństwo podczas transportu. Niezależnie od rodzaju awarii pojazdu, jesteśmy gotowi do szybkiej i skutecznej interwencji, aby zapewnić Ci profesjonalne usługi auto lawety.
            </p>
        </ServiceWhyUs>
    </>
  )
}

export default AutoLawetaZgorzelecPage