import React from 'react'
import ModalComponent from './Modal';
import { BasicModalContent } from '../../views/modal-views/BasicModalContent';
import { BasicModalPropsType } from '../../types';



export const BasicModalTemplate = ({basicModalProps, children}: {basicModalProps: BasicModalPropsType, children: JSX.Element | JSX.Element[]}) => {
  return (
    <ModalComponent.ModalProvider modalContent={<BasicModalContent {...basicModalProps}/>}>
        <ModalComponent.Base>
            <ModalComponent.Activator>
                {children}
            </ModalComponent.Activator>
        </ModalComponent.Base>
    </ModalComponent.ModalProvider>
  )
}
