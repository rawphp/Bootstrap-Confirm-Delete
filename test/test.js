$( document ).ready( function( )
{
    $( '.delete-row-default' ).bootstrap_confirm_delete(
        {
            callback: function( event )
            {
                var link = event.data.originalObject;

                link.closest( 'tr' ).remove();
            }
        }
    );

    $( '.delete-user-row-with-data-type' ).bootstrap_confirm_delete(
        {
            callback: function( event )
            {
                var link = event.data.originalObject;

                link.closest( 'tr' ).remove();
            }
        }
    );

    $( '.delete-user-row-with-ajax-button' ).bootstrap_confirm_delete(
        {
            callback: function( event )
            {
                //$.ajax(
                //{
                //    url: '/server.php',
                //    type: 'DELETE',
                //    success: function( result )
                //    {
                        var button = event.data.originalObject;

                        button.closest( 'tr' ).remove();
                //    }
                //} );
            }
        }
    );
} );
