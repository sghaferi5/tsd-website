import * as React from 'react'
import { useState } from 'react'
import TeamMemberPhoto from './team-member-photo'
import Modal from './modal'

import * as styles from './team-member.module.scss'

const TeamMember = (props) => {
    const [showModal, setShowModal] = useState(false)

    const openModal = () => {
        document.documentElement.style.overflow = 'hidden'
        setShowModal(true)
    }




    return (
        <div>
            <Modal
                memberInfo={JSON.stringify(props.info)}
                showModal={showModal}
                setShowModal={setShowModal} />

            <div
                onClick={openModal}
                className={styles.memberBlock}>
                <TeamMemberPhoto thumbPhoto={props.thumbPhoto} />
                <div className={styles.memberInfo}>
                    <h2>{props.name}</h2>
                    <p>Doctor</p>
                </div>
            </div>
        </div>
    )
}

export default TeamMember