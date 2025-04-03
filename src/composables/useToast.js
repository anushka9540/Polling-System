export function useToast() {
  const showToast = (message, bgColor) => {
    Toastify({
      text: message,
      duration: 3000,
      gravity: 'top',
      position: 'center',
      backgroundColor: bgColor,
      style: {
        borderRadius: '8px',
        padding: '10px',
        fontSize: '14px',
        textAlign: 'center'
      },
      stopOnFocus: true
    }).showToast();
  };

  return { showToast };
}
