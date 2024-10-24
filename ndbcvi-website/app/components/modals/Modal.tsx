import React from 'react'
import ModalComponent from './ModalTemplate';



export const Modal = ({modalActivator, modalContent}: {modalActivator: JSX.Element | JSX.Element[], modalContent: JSX.Element}) => {
  return (
    <ModalComponent.ModalProvider modalContent={modalContent}>
        <ModalComponent.Base>
            <ModalComponent.Activator>
                {modalActivator}
            </ModalComponent.Activator>
        </ModalComponent.Base>
    </ModalComponent.ModalProvider>
  )
}
