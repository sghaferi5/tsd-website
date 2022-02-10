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

    const addClassName = (disabled) => {
        if (disabled) {
            return styles.memberBlock
        } else {
            return `${styles.memberBlock} ${styles.blockHover}`
        }
    }




    return (
        <div>
            <Modal
                memberInfo={JSON.stringify(props.info)}
                showModal={showModal}
                setShowModal={setShowModal} />

            <div
                onClick={props.disable ? null : openModal}
                className={addClassName(props.disable)}>
                <TeamMemberPhoto thumbPhoto={props.thumbPhoto} />
                <div className={styles.memberInfo}>
                    <h2>{props.name}</h2>
                    <p>{props.position}</p>
                </div>
            </div>
        </div>
    )
}

export default TeamMember