'use client'

import { FaqModalPropsType } from '@/app/types'
import { FaqModalContent } from '@/app/views/modal-views/FaqModalContent'
import ModalComponent from './Modal';
import React from 'react'

export const FaqModalTemplate = ({faqModalProps, children}: {faqModalProps: FaqModalPropsType, children: JSX.Element | JSX.Element[]}) => {
  return (
    <ModalComponent.ModalProvider modalContent={<FaqModalContent {...faqModalProps}/>}>
      <ModalComponent.Base>
          <ModalComponent.Activator>
              {children}
          </ModalComponent.Activator>
      </ModalComponent.Base>
</ModalComponent.ModalProvider>
  )
}
