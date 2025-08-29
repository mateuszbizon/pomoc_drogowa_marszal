import ServiceAbout from '@/components/sections/ServiceAbout'
import ServiceItems from '@/components/sections/ServiceItems'
import ServiceWhyUs from '@/components/sections/ServiceWhyUs'
import SubPageHero from '@/components/sections/SubPageHero'
import { TIRE_IMG, TIRE_IMG2, TIRE_IMG3 } from '@/constants/images'
import { NAPRAWA_KOL_ZGORZELEC_ABOUT, NAPRAWA_KOL_ZGORZELEC_ITEMS } from '@/constants/services'
import React from 'react'

function NaprawaKolZgorzelecPage() {
  return (
    <>
        <SubPageHero 
            title='Naprawa kół Zgorzelec'
            description='Świadczymy usługi naprawy kół i wulkanizacji W Zgorzelecu, dostępne 24/7. Dojeżdżamy do awarii na trasie, parkingu czy bazie transportowej.'
        />
        <ServiceAbout 
            title='Naprawa kół Zgorzelec – mobilny serwis opon'
            subtitle='Szybka wulkanizacja w trasie'
            list={NAPRAWA_KOL_ZGORZELEC_ABOUT}
            image={TIRE_IMG}
        />
        <ServiceItems
            title='Naprawa kół i wulkanizacja Zgorzelec – zakres usług'
            description='Naprawiamy i wymieniamy koła w samochodach ciężarowych, dostawczych i osobowych. Dzięki mobilnemu serwisowi rozwiązujemy problemy z ogumieniem bez konieczności transportu do warsztatu.'
            list={NAPRAWA_KOL_ZGORZELEC_ITEMS}
        />
        <ServiceWhyUs
            title='Dlaczego nasza naprawa kół Zgorzelec?'
            images={[TIRE_IMG2, TIRE_IMG3]}
        >
            <p>
                Jesteśmy zaufanym dostawcą usług naprawy kół w Zgorzelcu i okolicach, oferując kompleksowe wsparcie w zakresie diagnostyki i naprawy uszkodzeń. Od lat działamy w branży, zdobywając zaufanie klientów dzięki naszej precyzji i profesjonalnemu podejściu. Nasza firma specjalizuje się w naprawie kół na terenie Zgorzelca i okolicznych miejscowości, zapewniając szybkie i skuteczne usługi w każdej sytuacji. Bez względu na to, czy masz problem z kołem w centrum miasta, czy na jego obrzeżach, możesz liczyć na naszą gotowość do szybkiej pomocy.
            </p>
            <p>
                Jako doświadczeni specjaliści w zakresie naprawy kół, doskonale wiemy, jak uciążliwe mogą być awarie na drodze. Dlatego nasz zespół oferuje nie tylko profesjonalną pomoc techniczną, ale także pełne zrozumienie i wsparcie w trudnych chwilach. Nasze nowoczesne urządzenia do naprawy kół pozwalają nam działać w każdych warunkach, zapewniając bezpieczne i skuteczne rozwiązania. Niezależnie od tego, czy Twoje koło wymaga drobnej naprawy, czy kompleksowej regeneracji, jesteśmy tutaj, aby Ci pomóc.
            </p>
            <p>
                Dzięki wieloletniemu doświadczeniu w pracy z różnymi problemami związanymi z kołami, nasz zespół jest w stanie poradzić sobie z każdą sytuacją. Nie tylko oferujemy fachową naprawę, ale także pełne zrozumienie i wsparcie dla naszych klientów. Nasze nowoczesne technologie naprawy kół gwarantują najwyższy poziom precyzji i bezpieczeństwa. Niezależnie od rodzaju uszkodzenia, jesteśmy gotowi do szybkiej i skutecznej interwencji, aby zapewnić Ci profesjonalne usługi naprawy kół.
            </p>
        </ServiceWhyUs>
    </>
  )
}

export default NaprawaKolZgorzelecPage