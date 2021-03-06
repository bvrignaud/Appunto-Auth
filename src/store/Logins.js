/** 
 * Role Store
 *
 *
 * A store that uses the {@link AppuntoAuth.model.Role} model and contains application roles.
 *
 * @cfg {int} [pageSize=9999] Setting pageSize high since this store does not page. 
 * @cfg {boolean} [remoteSort=true] This store uses remote sorting.
 * @cfg {boolean} [remoteFilter=true] This store uses remote filtering.
 * @cfg {boolean} [autoLoad=false] Do not automatically load this store.
 */
Ext.define('AppuntoAuth.store.Logins', {
    extend: 'Ext.data.Store',
    model : 'AppuntoAuth.model.Login',
    pageSize : 9999,
    remoteSort: true,
    remoteFilter: true,
    autoLoad: false
});
