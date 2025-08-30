import ServiceAbout from '@/components/sections/ServiceAbout'
import ServiceItems from '@/components/sections/ServiceItems'
import ServiceWhyUs from '@/components/sections/ServiceWhyUs'
import SubPageHero from '@/components/sections/SubPageHero'
import { POMOC_DROGOWA_A4_ABOUT, POMOC_DROGOWA_A4_ITEMS } from '@/constants/services'
import React from 'react'

function PomocDrogowaA4Page() {
  return (
    <>
        <SubPageHero 
            title='Pomoc drogowa A4'
            description='Oferujemy całodobową pomoc drogową na autostradzie A4 w okolicach Zgorzelca i całego Dolnego Śląska. Nasz zespół szybko reaguje na każde zgłoszenie, zapewniając naprawy na miejscu oraz pełne wsparcie kierowców ciężarówek, busów i samochodów osobowych.'
        />
        <ServiceAbout 
            title='Profesjonalna pomoc drogowa A4'
            subtitle='Całodobowa pomoc drogowa na autostradzie A4'
            list={POMOC_DROGOWA_A4_ABOUT}
        />
        <ServiceItems 
            title='Pomoc drogowa A4 – zakres naszych usług'
            description='Specjalizujemy się w kompleksowej obsłudze kierowców na autostradzie A4. Naszym priorytetem jest szybkie i bezpieczne usunięcie awarii, abyś mógł kontynuować podróż bez zbędnych opóźnień.'
            list={POMOC_DROGOWA_A4_ITEMS}
        />
        <ServiceWhyUs
            title='Dlaczego warto wybrać naszą pomoc drogową na A4?'
        >
            <p>
                Jesteśmy sprawdzonym partnerem w zakresie pomocy drogowej na autostradzie A4, działającym nie tylko w Zgorzelcu, ale również na całym odcinku tej kluczowej trasy. Dzięki wieloletniemu doświadczeniu wiemy, jak ważna jest szybka reakcja w sytuacjach awaryjnych. Każda minuta ma znaczenie, dlatego nasz zespół jest gotowy do działania przez całą dobę, 7 dni w tygodniu.
            </p>
            <p>
                Nasza pomoc drogowa A4 obejmuje zarówno samochody osobowe, jak i ciężarowe, co sprawia, że jesteśmy uniwersalnym partnerem dla kierowców i firm transportowych. Dysponujemy nowoczesnym sprzętem, w tym lawetami przystosowanymi do transportu pojazdów różnego typu. Niezależnie od tego, czy doszło do drobnej awarii, kolizji czy poważniejszego wypadku – możesz liczyć na nasze pełne wsparcie. Rozumiemy, jak stresujące bywają problemy na trasie. Dlatego poza techniczną obsługą stawiamy także na profesjonalne i empatyczne podejście do każdego klienta. Naszym celem jest nie tylko usunięcie awarii, ale również zapewnienie Ci poczucia bezpieczeństwa i komfortu. Dzięki pracy na autostradzie A4 zdobyliśmy doświadczenie w radzeniu sobie z najbardziej wymagającymi sytuacjami drogowymi.
            </p>
            <p>
                Nasza pomoc drogowa A4 to gwarancja niezawodności, bezpieczeństwa i profesjonalizmu. Wybierając naszą firmę, wybierasz partnera, który zawsze staje na wysokości zadania – bez względu na porę dnia, miejsce zdarzenia czy skalę problemu. Jesteśmy tutaj, aby pomóc Ci szybko wrócić na drogę.
            </p>
        </ServiceWhyUs>
    </>
  )
}

export default PomocDrogowaA4Page