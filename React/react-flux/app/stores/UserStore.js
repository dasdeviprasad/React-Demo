import {register} from '../../AppDispatcher';
import {EventEmitter} from 'events';

let users = [
    {
        login: 'user1', 
        id: 10
    }
];


const UserStore = Object.assign(EventEmitter.prototype, {
    emitChange: function() {
        this.emit('CHANGED');
    }, 
    
    addChangeListener: function(callback) {
        this.on('CHANGED', callback);
    }, 

    removeChangeListener: function(callback) {
        this.removeListener('CHANGED', callback)
    }, 

    getUsers: function() {
        return users;
    },

    getUser: function(userName) {
        let result = users.filter((u) => {
            return u.login == userName
        });

        return result.length === 0 ? null : result[0];
    },

    dispatcherIndex: register(function(payload){
        switch(payload.actionType){
            case 'USER_FETCHED':
                users = payload.action;
                break;
            
            case 'ADD_USER':
                users.push(payload.action);
                break;
        }

        UserStore.emitChange();
    })
});

export default UserStore;