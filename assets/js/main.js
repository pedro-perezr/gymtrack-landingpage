$(function () {

  const $form = $('#registro-form');
  const $nombre = $('#reg-nombre');
  const $email = $('#reg-email');
  const $regMsg = $('#reg-msg');

  $form.on('submit', function (e) {
    e.preventDefault();

    const nombreV = $nombre.val().trim();
    const emailV = $email.val().trim();

    if (nombreV === '' || emailV === '') {
      mostrarError('Por favor completa todos los campos.');
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(emailV)) {
      mostrarError('Por favor ingresa un correo valido');
      return;
    }

    mostrarModalExito();
    limpiarFormulario();
  });

  // Smooth Scroll
  $('.navbar .nav-link').on('click', function (e) {
    const destino = $(this).attr('href');

    if (destino.startsWith('#')) {
      e.preventDefault();

      const $seccion = $(destino);

      if ($seccion.length) {
        $('html, body').animate({
          scrollTop: $seccion.offset().top - 70
        }, 600);
      }
    }
  });

  function mostrarError(mensaje) {
    $regMsg.html(`
      <div class="alert alert-danger" role="alert">
        ${mensaje}
      </div>
    `);
  }

  function mostrarModalExito() {
    const modal = new bootstrap.Modal($('#registroModal'));
    modal.show();
  }

  function limpiarFormulario() {
    $regMsg.html('');
    $form[0].reset();
    $nombre.trigger('focus');
  }

});