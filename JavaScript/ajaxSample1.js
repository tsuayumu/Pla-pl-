<script>
<!--
jQuery( function() {
    jQuery( '#jquery-sample-button' ) . toggle(
        function() {
            jQuery . ajax( {
                url: 'ajaxsample1.html',
                success: function( data ) {
                    jQuery( '#jquery-sample-ajax' ) . html( data );
                    jQuery( '#jquery-sample-textStatus' ) . text( '読み込み成功' );
                },
                error: function( data ) {
                    jQuery( '#jquery-sample-textStatus' ) . text( '読み込み失敗' );
                }
            } );
        },
        function() {
            jQuery( '#jquery-sample-ajax' ) . html( '' );
            jQuery( '#jquery-sample-textStatus' ) . text( '' );
        }
    );
} );
// -->
</script>