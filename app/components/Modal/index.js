'use client'

import { useState } from 'react'
import { Button, Modal } from '@geist-ui/core'
import ModalAction from '@geist-ui/core/esm/modal/modal-action'
import ModalContent from '@geist-ui/core/esm/modal/modal-content'
import ModalTitle from '@geist-ui/core/esm/modal/modal-title'
import ModalSubtitle from '@geist-ui/core/esm/modal/modal-subtitle'
import { Input } from '@geist-ui/core'
import InputPassword from '@geist-ui/core/esm/input/password'

export default function Modals() {
  const [state, setState] = useState(false)
  const handler = () => setState(true)

  const handleClose = () => setState(false)
  return (
    <>
      <Button auto onClick={handler}>
        Show modal
      </Button>
      <Modal visible={state} onClose={handleClose}>
        <ModalTitle>Login</ModalTitle>
        <ModalSubtitle>login to get access to this web</ModalSubtitle>
        <ModalContent>
          <form
            style={{
              display: 'flex',
              gap: '20px',
              flexDirection: 'column',
              alignItems: 'center',
              padding: '5px'
            }}
          >
            <Input label="Nickname" placeholder="Sebass..." width="100%" />
            <Input labelRight=".com" placeholder="Email" width="100%" />
            <InputPassword placeholder="password" width="100%" />
          </form>
        </ModalContent>
        <ModalAction passive onClick={handleClose}>
          Cancel
        </ModalAction>
        <ModalAction>Submit</ModalAction>
      </Modal>
    </>
  )
}
