import ServiceAbout from '@/components/sections/ServiceAbout'
import ServiceItems from '@/components/sections/ServiceItems'
import ServiceWhyUs from '@/components/sections/ServiceWhyUs'
import SubPageHero from '@/components/sections/SubPageHero'
import { CARS_IMG, CARS_IMG2, CARS_IMG3 } from '@/constants/images'
import { POMOC_DROGOWA_ZGORZELEC_ABOUT, POMOC_DROGOWA_ZGORZELEC_ITEMS } from '@/constants/services'
import React from 'react'

function PomocDrogowaZgorzelecPage() {
  return (
    <>
        <SubPageHero title='Pomoc drogowa Zgorzelec' description='Nasza pomoc drogowa Zgorzelec działa całodobowo, oferując naprawę TIR-ów, samochodów dostawczych i osobowych. Obsługujemy awarie w Zgorzelcu, Jędrzychowicach i na autostradzie A4.' />
        <ServiceAbout title='Pomoc drogowa Zgorzelec – zawsze, gdy potrzebujesz' subtitle='Laweta i serwis mobilny 24/7' list={POMOC_DROGOWA_ZGORZELEC_ABOUT} image={CARS_IMG} />
        <ServiceItems title='Pomoc drogowa Zgorzelec – zakres usług' description='Oferujemy profesjonalną pomoc drogową samochodów ciężarowych i osobowych. Dojeżdżamy wprost na miejsce zdarzenia, aby zapewnić sprawny transport lub naprawę na miejscu.' list={POMOC_DROGOWA_ZGORZELEC_ITEMS} />
        <ServiceWhyUs title='Dlaczego nasza pomoc drogowa w Zgorzelcu?' images={[CARS_IMG2, CARS_IMG3]}>
            <p>
                Jesteśmy sprawdzonym partnerem w zakresie pomocy drogowej w Zgorzelcu i okolicach, oferując kompleksowe usługi holowania oraz transportu pojazdów. Przez lata zbudowaliśmy zaufanie naszych klientów dzięki efektywności i profesjonalnemu podejściu. Nasza działalność koncentruje się na Zgorzelcu i sąsiednich miejscowościach, gdzie świadczymy szybkie i niezawodne usługi pomocy drogowej w każdej sytuacji. Bez względu na to, czy doświadczysz awarii w centrum miasta czy na jego obrzeżach, możesz liczyć na naszą gotowość do natychmiastowej pomocy.
            </p>
            <p>
                Jako wykwalifikowana firma z doświadczeniem w pomocy drogowej, doskonale rozumiemy, jak stresujące i nieprzyjemne mogą być awarie na drodze. Dlatego nasz zespół nie tylko oferuje wsparcie techniczne, ale także podchodzi do każdej sytuacji z empatią i zrozumieniem. Nasze nowoczesne lawety i sprzęt są przystosowane do działania w każdych warunkach, zapewniając bezpieczny transport Twojego pojazdu w wyznaczone miejsce. Niezależnie od tego, czy potrzebujesz holowania do warsztatu, czy też przewozu pojazdu w inne miejsce, jesteśmy gotowi Ci pomóc.
            </p>
            <p>
                Pracując na wymagających trasach, zdobyliśmy doświadczenie, które pozwala nam poradzić sobie z każdą sytuacją drogową. Nasz zespół to nie tylko fachowcy w swoim zawodzie, ale również ludzie, którzy rozumieją, jak trudne są problemy drogowe. Zawsze staramy się zaoferować nie tylko skuteczną, ale i empatyczną pomoc każdemu klientowi. Nasze lawety są nie tylko symbolem nowoczesnych rozwiązań, ale także gwarancją bezpieczeństwa Twojego pojazdu. Bez względu na rodzaj awarii czy warunki drogowe, zawsze jesteśmy gotowi na natychmiastową reakcję, aby zapewnić Ci szybką i skuteczną pomoc drogową.
            </p>
        </ServiceWhyUs>
    </>
  )
}

export default PomocDrogowaZgorzelecPage