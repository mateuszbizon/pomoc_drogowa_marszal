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
            <h2 className='heading2 text-center heading-margin-bottom'>Pytania o serwis mobilny TIR</h2>
            <Accordion type="single" className='mx-auto max-w-[800px]' collapsible>
                {QUESTIONS.map(item => (
                    <AccordionItem value={item.title} key={item.title}>
                        <AccordionTrigger>{item.title}</AccordionTrigger>
                        <AccordionContent>
                            {item.content}
                        </AccordionContent>
                    </AccordionItem>
                ))}
                {/* <AccordionItem value={"item1"}>
                    <AccordionTrigger>a</AccordionTrigger>
                    <AccordionContent>
                        a
                    </AccordionContent>
                </AccordionItem> */}
            </Accordion>
        </Container>
    </section>
  )
}

export default Questions