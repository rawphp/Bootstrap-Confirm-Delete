/**
 * Created by Tom on 9/07/2015.
 */

( function ( $ )
{
    $.fn.bootstrap_confirm_delete = function ( options )
    {
        var settings = $.extend(
            {
                heading: 'Delete',
                message: 'Are you sure you want to delete this item?',
                data_type: null,
                callback: null
            }, options );

        $( this ).on( 'click', function ( event )
        {
            event.preventDefault();

            if ( undefined !== $( this ).attr( 'data-type' ) )
            {
                var name = $( this ).attr( 'data-type' );

                settings.heading = 'Delete ' + name[ 0 ].toUpperCase() + name.substr( 1 );
                settings.message = 'Are you sure you want to delete this ' + name + '?';
            }

            if ( null === document.getElementById( 'bootstrap-confirm-delete-container' ) )
            {
                $( 'body' ).append( '<div id="bootstrap-confirm-delete-container"><div id="bootstrap-confirm-dialog" class="modal fade"><div class="modal-dialog modal-sm"><div class="modal-content"><div class="modal-header"><button type="button" class="close" data-dismiss="modal"><span aria-hidden="true">&times;</span><span class="sr-only">Close</span></button><h4 id="bootstrap-confirm-dialog-heading"></h4></div><div class="modal-body"><p id="bootstrap-confirm-dialog-text"></p></div><div class="modal-footer"><button id="bootstrap-confirm-dialog-cancel-delete-btn" type="button" class="btn btn-default pull-left" data-dismiss="modal">Cancel</button><a id="bootstrap-confirm-dialog-delete-btn" href="#" class="btn btn-danger pull-right">Delete</a></div></div></div></div></div>' );
            }

            $( '#bootstrap-confirm-dialog-heading' ).html( settings.heading );
            $( '#bootstrap-confirm-dialog-text' ).html( settings.message );
            $( '#bootstrap-confirm-dialog' ).modal( 'toggle' );

            if ( null !== settings.callback )
            {
                $( '#bootstrap-confirm-dialog-delete-btn' ).attr( 'data-dismiss', 'modal');

                $( 'a#bootstrap-confirm-dialog-delete-btn' ).on( 'click', settings.callback );
            }
            else if ( '' !== event.currentTarget.href )
            {
                $( 'a#bootstrap-confirm-dialog-delete-btn' ).attr( 'href', event.currentTarget.href );
            }
        } );
    };
}( jQuery ));