/**
 * Created by Tom on 9/07/2015.
 */

( function ( $ )
{
    $.fn.bootstrap_confirm_delete = function ( options )
    {
        $( this ).on( 'click', function ( event )
        {
            event.preventDefault();

            var heading = 'Delete';
            var message = 'Are you sure you want to delete this item?';

            if ( undefined !== options )
            {
                if ( undefined !== options.heading )
                {
                    heading = options.heading;
                }

                if ( undefined !== options.question )
                {
                    message = options.question;
                }
            }
            else
            {
                if ( undefined !== $( this ).attr( 'data-type' ) )
                {
                    var name = $( this ).attr( 'data-type' );

                    heading = 'Delete ' + name[ 0 ].toUpperCase() + name.substr( 1 );
                    message = 'Are you sure you want to delete this ' + name + '?';
                }
            }

            if ( null === document.getElementById( 'bootstrap-confirm-delete-container' ) )
            {
                $( 'body' ).append( '<div id="bootstrap-confirm-delete-container"><div id="bootstrap-confirm-dialog" class="modal fade"><div class="modal-dialog modal-sm"><div class="modal-content"><div class="modal-header"><button type="button" class="close" data-dismiss="modal"><span aria-hidden="true">&times;</span><span class="sr-only">Close</span></button><h4 id="bootstrap-confirm-dialog-heading"></h4></div><div class="modal-body"><p id="bootstrap-confirm-dialog-text"></p></div><div class="modal-footer"><button id="bootstrap-confirm-dialog-cancel-delete-btn" type="button" class="btn btn-default pull-left" data-dismiss="modal">Cancel</button><a id="bootstrap-confirm-dialog-delete-btn" href="#" class="btn btn-danger pull-right">Delete</a></div></div></div></div></div>' );
            }

            $( '#bootstrap-confirm-dialog-heading' ).html( heading );
            $( '#bootstrap-confirm-dialog-text' ).html( message );
            $( '#bootstrap-confirm-dialog' ).modal( 'toggle' );
            $( 'a#bootstrap-confirm-dialog-delete-btn' ).attr( 'href', event.currentTarget.href );
        } );
    };
}( jQuery ) );
