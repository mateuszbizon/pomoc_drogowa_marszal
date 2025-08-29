import ServiceAbout from '@/components/sections/ServiceAbout'
import ServiceItems from '@/components/sections/ServiceItems'
import ServiceWhyUs from '@/components/sections/ServiceWhyUs'
import SubPageHero from '@/components/sections/SubPageHero'
import { SERWIS_KLIMATYZACJI_ZGORZELEC_ABOUT, SERWIS_KLIMATYZACJI_ZGORZELEC_ITEMS } from '@/constants/services'
import React from 'react'

function SerwisKlimatyzacjiZgorzelecPage() {
  return (
    <>
        <SubPageHero 
            title='Serwis klimatyzacji Zgorzelec'
            description='Świadczymy kompleksowe usługi serwis klimatyzacji Zgorzelec – od diagnostyki po naprawy i uzupełnianie czynnika chłodzącego.'
        />
        <ServiceAbout 
            title='Serwis klimatyzacji Zgorzelec – komfort w trasie'
            subtitle='Obsługa układów chłodzenia pojazdów ciężarowych i osobowych'
            list={SERWIS_KLIMATYZACJI_ZGORZELEC_ABOUT}
        />
        <ServiceItems 
            title='Naprawa i serwis klimatyzacji Zgorzelec'
            description='Dbamy o sprawność układów chłodzenia, które odpowiadają za komfort i bezpieczeństwo kierowców w trasie.'
            list={SERWIS_KLIMATYZACJI_ZGORZELEC_ITEMS}
        />
        <ServiceWhyUs
            title='Dlaczego nasz serwis klimatyzacji Zgorzelec?'
        >
            <p>
                Jesteśmy zaufanym dostawcą usług serwisu klimatyzacji w Zgorzelcu i okolicach, oferując kompleksową obsługę oraz naprawę systemów klimatyzacyjnych w pojazdach. Od lat działamy w branży, zyskując zaufanie klientów dzięki naszej fachowości i solidności. Nasza firma specjalizuje się w obszarze Zgorzelca i okolicznych miejscowości, zapewniając szybki i skuteczny serwis klimatyzacji w każdej sytuacji. Niezależnie od tego, czy potrzebujesz naprawy klimatyzacji w centrum miasta, czy na jego obrzeżach, możesz liczyć na naszą gotowość do błyskawicznej pomocy.
            </p>
            <p>
                Jako doświadczeni specjaliści w serwisie klimatyzacji, doskonale rozumiemy, jak uciążliwe mogą być problemy z układem chłodzenia. Dlatego nasz zespół oferuje nie tylko techniczną pomoc, ale również pełne zrozumienie i wsparcie w każdej sytuacji. Nasze nowoczesne urządzenia i narzędzia pozwalają nam działać w każdych warunkach, zapewniając skuteczne naprawy i serwis klimatyzacji w Twoim pojeździe. Niezależnie od tego, czy klimatyzacja wymaga drobnej naprawy, czy pełnego serwisu, jesteśmy tu, aby zapewnić Ci fachową pomoc.
            </p>
            <p>
                Działając na wymagających trasach, zdobyliśmy doświadczenie, które pozwala nam sprostać każdej awarii klimatyzacji. Nasz zespół to nie tylko wykwalifikowani technicy, ale także ludzie, którzy rozumieją, jak niekomfortowe mogą być problemy z klimatyzacją. Zawsze dążymy do zapewnienia skutecznego i empatycznego wsparcia każdemu klientowi. Nasze nowoczesne narzędzia serwisowe gwarantują nie tylko precyzję, ale również bezpieczeństwo Twojego pojazdu. Niezależnie od rodzaju awarii klimatyzacji, jesteśmy gotowi do szybkiej i skutecznej interwencji, aby zapewnić Ci profesjonalny serwis klimatyzacji.
            </p>
        </ServiceWhyUs>
    </>
  )
}

export default SerwisKlimatyzacjiZgorzelecPage