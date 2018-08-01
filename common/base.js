axios.defaults.headers.post['content-Type'] = 'appliction/json'

// 全局cookie操作
const cookie = {
    set: function(name, value, seconds) {
        var expires = new Date;
        expires.setTime(expires.getTime() + 1000 * seconds);
        window.document.cookie = name + "=" + value + ";path=/;expires=" + expires.toGMTString();
    },
    get: function(name) {
        var v = window.document.cookie.match('(^|;) ?' + name + '=([^;]*)(;|$)');
        return v ? v[2] : null;
    },
    delete: function(name) {
        this.set(name, '', -1);
    }
}