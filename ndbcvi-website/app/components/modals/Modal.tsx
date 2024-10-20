import React from 'react'
import ModalComponent from './ModalTemplate';



export const Modal = ({modalContentProps, children}: {modalContentProps: JSX.Element, children: JSX.Element | JSX.Element[]}) => {
  return (
    <ModalComponent.ModalProvider modalContent={modalContentProps}>
        <ModalComponent.Base>
            <ModalComponent.Activator>
                {children}
            </ModalComponent.Activator>
        </ModalComponent.Base>
    </ModalComponent.ModalProvider>
  )
}
