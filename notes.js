console.log('Starting notes.js');

var addNote = (title, body) => {
    console.log('Adding note', title, body);
};

var getAll = () => {
    console.log('Getting all notes');
};

var get = (title) => {
    console.log('Getting', title);
};

var remove= (title) => {
    console.log('Removing', title);
};

module.exports = {
    addNote,
    getAll,
    get,
    remove
};