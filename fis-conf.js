fis.config.set('roadmap.path', [
    {
        reg : /^\/(.*\.css)$/i,
        url : '$1',
        release : '/public/$1'
    }
]);