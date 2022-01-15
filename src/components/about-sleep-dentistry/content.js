import * as React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

import * as styles from './content.module.scss'

const Content = () => {
    return (
        <div className={styles.content}>
            <section id='What-is-sleep-dentistry'>
                <h2>What is Sleep Dentistry?</h2>
                <p>
                    Many patients are either unable to tolerate dental treatment without being sedated or asleep, or they would prefer to be sedated or completely asleep when having their dental treatment. Our dentist anaesthesiologist specialists are able to provide dental care to you while you are either sedated and relaxed, or completely asleep and unaware that you are in a dental office having dental treatment!
                </p>
            </section>

            <section id='levels-of-sedation'>
                <h2>The different Levels of Sedation</h2>
                <p>There are different levels of sedation. Patients can choose from being sedated and relaxed, but still awake, or they may prefer (or require) to be completely asleep and unaware when having dental care completed. The different levels of sedation are:</p>

                <ul className={styles.levelsList}>
                    <li>Minimal sedation</li>
                    <li>Moderate sedation</li>
                    <li>Deep sedation</li>
                    <li>General anaesthesia</li>
                </ul>
                <p>Deep sedation and general anaesthesia involve the patient being completely asleep, and we specialize in offering this service to our patients for their dental treatment.</p>
            </section>

            <section id='patients-who-may-need-sleep-dentistry'>
                <h2>Patients who may need sleep dentistry</h2>
                <p>There are many patients who either require to be sedated, or they prefer to be sedated or asleep for their dental treatment. These patients include:</p>
                <ul>
                    <li>Patients with dental anxiety and dental fear</li>
                    <li>Pediatric patients</li>
                    <li>Patients with intellectual disabilities</li>
                    <li>Patients with physical disabilities</li>
                    <li>Patients with a severe gag reflex</li>
                    <li>Medically compromised patients</li>
                    <li>Patients who are unable to have local anaesthesia (Dental freezing)</li>
                </ul>
                <p>If you fall into one of the above groups, then sleep dentistry may be the answer for you. Call our office for a consultation to discuss your sleep dentistry appointment. (Link)</p>


            </section>
            <section id='safety'>
                <h2>Safety of Sleep Dentistry</h2>
                <p>
                    <span>Is Sleep Dentistry Safe?</span>
                    Many people think that “going to sleep” for a procedure is very risky and unsafe. While going to sleep for some medical procedures and operations can carry higher levels of risk, going to sleep for dental treatment is extremely safe and carries a very low risk. Over the past few years, there have been two high quality studies conducted at the University of Toronto, which looked at the safety profile of sleep dentistry in Ontario. These studies were conducted by Dr. El-Mowafy in 2018 and Dr. Nkansah in 1997 and both were conducted at the University of Toronto. Both studies found that the risk of having a catastrophic event while having sleep dentistry in a dental office in Ontario is approximately 1 in 1,000,000. This is extremely lower than the risk of you suffering a catastrophic event while you are commuting to work every day, or getting to our office for your sleep dentistry appointment! Statistically speaking, you also have a higher risk of getting struck by lightning in the next one year, than by having a catastrophic event while having sleep dentistry.</p>
                <p>In summary, there are risks associated with everything in life, including going for a walk, crossing the street and a cross-walk, and going to the grocery store – and sleep dentistry is no different. However, thankfully the risks associated with sleep dentistry are extremely low.</p>

                <p>
                    <span>What are the common side effects of Sleep Dentistry?</span>
                    Although side effects are not common, some patients may experience some of the following symptoms after the sedation/anaesthetic:</p>

                <ul>
                    <li>nausea and vomiting</li>
                    <li>shivering or feeling cold</li>
                    <li>bruising around the IV site</li>
                    <li>dry mouth or throat</li>
                    <li>dizziness</li>
                    <li>temporary confusion or memory loss (in the elderly)</li>
                </ul>

                <p>
                    <span>Is Sleep Dentistry harmful for my child’s brain?</span>
                    The effect of anaesthesia on the developing brain is one of the most widely discussed topics in pediatric anaesthesia. There is some controversy surrounding whether anaesthesia can affect the developing brain in children under three years of age, but it is generally accepted that after age three, anaesthesia exposure is unlikely to affect the brain.
                </p>

                <p>Regarding children under three years of age, there have been three landmark studies conducted in the past five years, and all three suggest that a single, brief exposure to general anaesthesia in children is likely safe. These studies are the Pediatric Anaesthesia Neurodevelopment Assessment <b>(PANDA)</b> study, the Mayo Anaesthesia Safety in Kids <b>(MASK)</b> study, and the General Anaesthesia or Awake-Regional Anaesthesia in Infancy <b>(GAS)</b> study.</p>

                <div className={styles.studies}>
                    <p>The <b>PANDA</b> study compared IQ scores of patients who had general anaesthesia before age three to their siblings who did not have general anaesthesia, and their IQ scores were compared when they were 8-15 years of age. The study found no significant difference in the IQ scores of the patients who had general anaesthesia, to their siblings who did not have general anaesthesia. There was also no significant difference in their cognitive function, such as memory/learning, motor/processing speed, visuospatial function, attention, executive function language, and behaviour.<br /> <a href='#'>Full PANDA study article</a></p>

                    <p>The <b>MASK</b> study compared three different patient groups: those never exposed to general anaesthesia, those exposed to anaesthesia once before age three, and those exposed to anaesthesia multiple times before age three. They compared general intelligence and neurodevelopment in these three groups. They concluded that exposure to general anaesthesia, either once or multiple times before age three, was not associated with any deficits in general intelligence. However, they stated that multiple exposures to anaesthesia before age three was associated with a modest decrease in fine motor abilities and processing speeds, and the parents of the patients in the multiple exposure group also reported some difficulties with reading and behaviour.<br /> <a href='#'>Full MASK study article</a></p>

                    <p>The <b>GAS</b> study is the only randomized controlled trial to date (one of the most reliable form of scientific evidence) on the topic of general anaesthesia and the developing brain. This study compared infants (patients under one year of age) who had inguinal hernia repair surgery either under general anaesthesia, or under awake regional anaesthesia (the patients in this group were not under general anaesthesia, they just had “freezing” of their nerves so they could have the surgery without feeling pain.) The study compared the IQ of the patients at age 5, as well as their cognitive scores at age 2. The study concluded that at age 2, there was no difference in the risk of neurodevelopmental outcomes between the patients who had general anaesthesia and those who did not. They also concluded that at age 5, there was no difference in the IQ of the patient group who had general anaesthesia and the patient group who did not.<br /> <a href='#'>Full GAS study article</a></p>
                    <p>The PANDA, MASK, and GAS studies are three of the best designed studies to examine the topic of general anaesthesia and the developing brain. As the information above outlines, all three studies provide reassuring evidence that a single, brief general anaesthetic in children under the age of three are unlikely to affect their neurodevelopment.</p>
                </div>

            </section>

        </div>
    )
}
export default Content