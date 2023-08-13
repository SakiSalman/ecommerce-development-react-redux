import swal from 'sweetalert';



export const sweetalertBasic = ( msg, type='error',) => {
    // "warning", "error", "success" and "info"
    swal(msg, type);

}
export const sweetalertStandard = (msg, type='success') => {
    // "warning", "error", "success" and "info"
    swal(msg.title, msg.msg, type);

}
export const sweetalertConfirm = (msg, type='success') => {
    // "warning", "error", "success" and "info"
    swal({
        title: msg.title,
        text: msg.msg,
        icon: type,
        buttons: true,
        dangerMode: true,
      })
      .then((willDelete) => {
        if (willDelete) {
          swal("Poof! Your imaginary file has been deleted!", {
            icon: "success",
          });
        } else {
          swal("Your imaginary file is safe!");
        }
      });
}


