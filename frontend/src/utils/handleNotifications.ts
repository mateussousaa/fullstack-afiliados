import { toast } from "react-toastify";

interface handleNotificationProps {
  success: boolean,
  message: string,
}

const handleNotification = ({ success, message }: handleNotificationProps) => {
  if(success) {
    return toast.success(message, {
      position: 'top-right',
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    })
  }
  return toast.error(message, {
    position: 'top-right',
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  });
}

export { handleNotification }