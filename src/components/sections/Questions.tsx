import React from 'react'
import Container from '../ui/container'
import HeadingInfo from '../ui/heading-info'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '../ui/accordion'
import { QUESTIONS } from '@/constants/questions'

function Questions() {
  return (
    <section className='py-section-padding'>
        <Container>
            <HeadingInfo title='Najczęściej zadawane pytania' />
            <h2 className='heading2 text-center heading-margin-bottom'>FAQ – mobilny serwis TIR Zgorzelec i pomoc drogowa</h2>
            <Accordion type="single" className='mx-auto max-w-[800px]' collapsible>
                {QUESTIONS.map(item => (
                    <AccordionItem value={item.title} key={item.title}>
                        <AccordionTrigger>{item.title}</AccordionTrigger>
                        <AccordionContent>
                            {item.content}
                        </AccordionContent>
                    </AccordionItem>
                ))}
            </Accordion>
        </Container>
    </section>
  )
}

export default Questions