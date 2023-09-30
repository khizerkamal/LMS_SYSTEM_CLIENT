import { Modal, Box } from '@mui/material';
import React from 'react'

type Props = {
    open: boolean;
    setOpen: (open: boolean) => void;
    activeItem: any;
    component: any;
    setRoute?: (route: string) => void;
}

const CustomModal: React.FC<Props> = ({open, setOpen, component: Component, activeItem, setRoute}) => {
  return (
    <Modal
        open={open}
        onClose={() => setOpen(false)}
        area-labelledby="modal-modal-title"
        area-describededby="modal-modal-description"
    >
        <Box className="absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 w-[450px] bg-white dark:bg-slate-900 rounded-[8px] shadow p-4 outline-none">
            <Component setOpen={setOpen} setRoute={setRoute}/>
        </Box>
    </Modal>
  )
}

export default CustomModal